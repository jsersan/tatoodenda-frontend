// src/app/services/auth.service.ts - VERSIÓN CORREGIDA
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
/**
 * Servicio de autenticación
 * Maneja login, logout y gestión del usuario actual
 */
let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        // Inicializar con el usuario del localStorage si existe
        const storedUser = localStorage.getItem('currentUser');
        const user = storedUser ? JSON.parse(storedUser) : null;
        this.currentUserSubject = new BehaviorSubject(user);
        this.currentUser = this.currentUserSubject.asObservable();
        console.log('🔐 AuthService inicializado con usuario:', user?.username || 'ninguno');
    }
    /**
     * Obtener el valor actual del usuario
     */
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    /**
     * Iniciar sesión
     */
    login(username, password) {
        console.log('🔐 Iniciando login para:', username);
        return this.http.post(`${environment.apiUrl}/users/login`, {
            username,
            password
        }).pipe(tap(response => {
            console.log('📥 Respuesta del backend:', response);
        }), map(response => {
            // ✅ CRÍTICO: Construir el objeto user con TODOS los campos
            const user = {
                id: response.id,
                username: response.username,
                nombre: response.nombre || response.username,
                email: response.email,
                direccion: response.direccion || '',
                ciudad: response.ciudad || '',
                cp: response.cp || '',
                role: response.role || 'user',
                token: response.token
            };
            console.log('✅ Usuario procesado:', user);
            // Guardar en localStorage
            localStorage.setItem('currentUser', JSON.stringify(user));
            // Actualizar BehaviorSubject
            this.currentUserSubject.next(user);
            console.log('✅ Login completado para:', user.username);
            return user;
        }), catchError(error => {
            console.error('❌ Error en login:', error);
            return throwError(() => error);
        }));
    }
    /**
     * Registrar nuevo usuario
     */
    register(userData) {
        console.log('📝 Registrando usuario:', userData.username);
        return this.http.post(`${environment.apiUrl}/users/register`, userData).pipe(map(response => {
            const user = {
                id: response.id,
                username: response.username,
                nombre: response.nombre || response.username,
                email: response.email,
                direccion: response.direccion || '',
                ciudad: response.ciudad || '',
                cp: response.cp || '',
                role: response.role || 'user',
                token: response.token
            };
            // Guardar en localStorage
            localStorage.setItem('currentUser', JSON.stringify(user));
            // Actualizar BehaviorSubject
            this.currentUserSubject.next(user);
            console.log('✅ Registro completado para:', user.username);
            return user;
        }), catchError(error => {
            console.error('❌ Error en registro:', error);
            return throwError(() => error);
        }));
    }
    /**
     * ✅ NUEVO: Actualizar usuario
     */
    updateUser(userData) {
        if (!this.currentUserValue) {
            return throwError(() => new Error('No hay usuario autenticado'));
        }
        const userId = this.currentUserValue.id;
        const token = this.currentUserValue.token;
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });
        console.log('📝 Actualizando usuario:', userId);
        return this.http.put(`${environment.apiUrl}/users/${userId}`, userData, { headers }).pipe(map(response => {
            const updatedUser = {
                ...this.currentUserValue,
                username: response.username || this.currentUserValue.username,
                nombre: response.nombre || this.currentUserValue.nombre,
                email: response.email || this.currentUserValue.email,
                direccion: response.direccion || this.currentUserValue.direccion,
                ciudad: response.ciudad || this.currentUserValue.ciudad,
                cp: response.cp || this.currentUserValue.cp
            };
            // Guardar en localStorage
            localStorage.setItem('currentUser', JSON.stringify(updatedUser));
            // Actualizar BehaviorSubject
            this.currentUserSubject.next(updatedUser);
            console.log('✅ Usuario actualizado:', updatedUser.username);
            return updatedUser;
        }), catchError(error => {
            console.error('❌ Error al actualizar usuario:', error);
            return throwError(() => error);
        }));
    }
    /**
     * Cerrar sesión
     */
    logout() {
        console.log('🚪 Cerrando sesión');
        // Eliminar de localStorage
        localStorage.removeItem('currentUser');
        // Actualizar BehaviorSubject
        this.currentUserSubject.next(null);
        // Navegar al home
        this.router.navigate(['/']);
        console.log('✅ Sesión cerrada');
    }
    /**
     * Verificar si el usuario está autenticado
     */
    isAuthenticated() {
        return !!this.currentUserValue;
    }
    isLoggedIn() {
        return this.isAuthenticated();
    }
    /**
     * Verificar si el usuario es admin
     */
    isAdmin() {
        const user = this.currentUserValue;
        return user?.role === 'admin' || user?.username === 'admin';
    }
    /**
     * Obtener el token actual
     */
    getToken() {
        return this.currentUserValue?.token || null;
    }
    /**
     * ✅ NUEVOS MÉTODOS: Recuperación de contraseña
     */
    /**
     * Solicitar recuperación de contraseña
     */
    forgotPassword(email) {
        console.log('📧 Solicitando recuperación de contraseña para:', email);
        return this.http.post(`${environment.apiUrl}/users/forgot-password`, { email }).pipe(tap(response => console.log('✅ Respuesta de forgot-password:', response)), catchError(error => {
            console.error('❌ Error en forgot-password:', error);
            return throwError(() => error);
        }));
    }
    /**
     * Restablecer contraseña con token
     */
    resetPassword(token, newPassword) {
        console.log('🔑 Restableciendo contraseña con token');
        return this.http.post(`${environment.apiUrl}/users/reset-password`, {
            token,
            newPassword
        }).pipe(tap(response => console.log('✅ Contraseña restablecida:', response)), catchError(error => {
            console.error('❌ Error al restablecer contraseña:', error);
            return throwError(() => error);
        }));
    }
    /**
     * Verificar si un token de recuperación es válido
     */
    verifyResetToken(token) {
        console.log('🔍 Verificando token de recuperación');
        return this.http.get(`${environment.apiUrl}/users/verify-reset-token/${token}`).pipe(tap(response => console.log('✅ Token verificado:', response)), catchError(error => {
            console.error('❌ Token inválido:', error);
            return throwError(() => error);
        }));
    }
};
AuthService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map