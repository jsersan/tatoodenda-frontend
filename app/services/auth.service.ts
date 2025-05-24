// auth.service.ts - Actualizado con gestión de tokens
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;
  private apiUrl = 'http://localhost:3000/api'; // Ajusta según tu backend
  private tokenKey = 'auth_token';

  constructor(private http: HttpClient) {
    // Inicializar con el usuario del localStorage si existe
    const storedUser = localStorage.getItem('currentUser');
    const initialUser = storedUser ? JSON.parse(storedUser) : null;
    
    this.currentUserSubject = new BehaviorSubject<User | null>(initialUser);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  /**
   * Getter para obtener el valor actual del usuario
   */
  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  /**
   * Obtener el token de autenticación
   */
  public getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  /**
   * Almacenar el token de autenticación
   */
  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  /**
   * Eliminar el token de autenticación
   */
  private removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  /**
   * Método de login
   */
  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    return this.http.post<any>(`${this.apiUrl}/auth/login`, { username, password }, { headers })
      .pipe(map(response => {
        console.log('Respuesta del login:', response);
        
        // Verificar que la respuesta contenga el token y los datos del usuario
        if (response && response.token && response.user) {
          // Almacenar el token
          this.setToken(response.token);
          
          // Almacenar los datos del usuario
          localStorage.setItem('currentUser', JSON.stringify(response.user));
          
          // Actualizar el subject con los nuevos datos del usuario
          this.currentUserSubject.next(response.user);
          
          console.log('Usuario logueado correctamente:', response.user);
          console.log('Token almacenado:', response.token.substring(0, 20) + '...');
        }
        
        return response;
      }));
  }

  /**
   * Método de registro
   */
  register(userData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    return this.http.post<any>(`${this.apiUrl}/auth/register`, userData, { headers });
  }

  /**
   * Método de logout
   */
  logout(): void {
    console.log('Cerrando sesión...');
    
    // Remover token y datos del usuario del localStorage
    this.removeToken();
    localStorage.removeItem('currentUser');
    
    // Actualizar el subject para notificar que no hay usuario logueado
    this.currentUserSubject.next(null);
    
    console.log('Sesión cerrada correctamente');
  }

  /**
   * Verificar si el usuario está logueado
   */
  isLoggedIn(): boolean {
    const token = this.getToken();
    const user = this.currentUserValue;
    return !!(token && user);
  }

  /**
   * Actualizar los datos del usuario
   */
  updateUser(userData: User): Observable<any> {
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.getToken()}`
    });
    
    return this.http.put<any>(`${this.apiUrl}/users/${userData.id}`, userData, { headers })
      .pipe(map(response => {
        if (response && response.user) {
          // Actualizar los datos almacenados
          localStorage.setItem('currentUser', JSON.stringify(response.user));
          this.currentUserSubject.next(response.user);
          
          console.log('Datos del usuario actualizados:', response.user);
        }
        
        return response;
      }));
  }

  /**
   * Verificar si el token está expirado (opcional)
   */
  isTokenExpired(): boolean {
    const token = this.getToken();
    if (!token) return true;

    try {
      // Decodificar el token JWT para verificar la expiración
      const payload = JSON.parse(atob(token.split('.')[1]));
      const currentTime = Math.floor(Date.now() / 1000);
      
      return payload.exp < currentTime;
    } catch (error) {
      console.error('Error al verificar la expiración del token:', error);
      return true;
    }
  }

  /**
   * Renovar el token (si tu backend lo soporta)
   */
  refreshToken(): Observable<any> {
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.getToken()}`
    });
    
    return this.http.post<any>(`${this.apiUrl}/auth/refresh`, {}, { headers })
      .pipe(map(response => {
        if (response && response.token) {
          this.setToken(response.token);
          console.log('Token renovado correctamente');
        }
        
        return response;
      }));
  }
}