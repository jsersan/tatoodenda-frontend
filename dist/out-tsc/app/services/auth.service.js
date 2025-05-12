import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
// Este decorador permite que el servicio sea inyectable en otros componentes/servicios
let AuthService = class AuthService {
    // Inyección de dependencias: HttpClient para peticiones HTTP y Router para navegación
    constructor(http, router) {
        this.http = http;
        this.router = router;
        // URL base para las peticiones a la API de usuarios
        this.apiUrl = `${environment.apiUrl}/users`;
        // Intentar obtener el usuario desde localStorage (persistencia entre recargas)
        const storedUser = localStorage.getItem('currentUser');
        // Inicializar el BehaviorSubject con el usuario almacenado o null
        this.currentUserSubject = new BehaviorSubject(storedUser ? JSON.parse(storedUser) : null);
        // Exponer currentUserSubject como un Observable para componentes
        this.currentUser = this.currentUserSubject.asObservable();
    }
    // Getter para acceder al valor actual del usuario sin suscribirse al Observable
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    // Método para iniciar sesión
    login(username, password) {
        // Enviar credenciales al servidor
        return this.http.post(`${this.apiUrl}/login`, { username, password })
            .pipe(map(user => {
            // Al recibir respuesta exitosa, guardar usuario en localStorage
            localStorage.setItem('currentUser', JSON.stringify(user));
            // Notificar a los suscriptores que hay un nuevo usuario actual
            this.currentUserSubject.next(user);
            return user;
        }));
    }
    // Método para registrar un nuevo usuario
    register(user) {
        // Enviar datos del nuevo usuario al servidor
        return this.http.post(`${this.apiUrl}/register`, user);
    }
    // Método para actualizar los datos de un usuario existente
    updateUser(user) {
        // Enviar los datos actualizados al servidor
        return this.http.put(`${this.apiUrl}/${user.id}`, user)
            .pipe(map(updatedUser => {
            // Si el usuario actualizado es el usuario actual, actualizar en localStorage
            if (this.currentUserValue && this.currentUserValue.id === updatedUser.id) {
                const userToStore = { ...updatedUser };
                delete userToStore.password; // No almacenar la contraseña por seguridad
                localStorage.setItem('currentUser', JSON.stringify(userToStore));
                // Notificar a los suscriptores del cambio
                this.currentUserSubject.next(userToStore);
            }
            return updatedUser;
        }));
    }
    // Método para cerrar sesión
    logout() {
        // Eliminar usuario del localStorage
        localStorage.removeItem('currentUser');
        // Actualizar el BehaviorSubject con null (sin usuario)
        this.currentUserSubject.next(null);
        // Redirigir al usuario a la página de inicio
        this.router.navigate(['/']);
    }
    // Método para verificar si el usuario actual es administrador
    isAdmin() {
        return this.currentUserValue?.username === 'admin';
    }
};
AuthService = __decorate([
    Injectable({
        providedIn: 'root' // Hace que este servicio esté disponible a nivel global en la aplicación
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map