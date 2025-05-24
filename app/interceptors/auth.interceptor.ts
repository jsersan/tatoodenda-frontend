// auth.interceptor.ts
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Obtener el token del servicio de autenticación
    const token = this.authService.getToken();
    
    // Si existe un token, añadirlo a las headers
    if (token) {
      request = this.addTokenHeader(request, token);
      console.log('Token añadido a la petición:', token.substring(0, 20) + '...');
    }

    // Manejar la petición y capturar errores
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error en petición HTTP:', error);
        
        // Si es un error 401 o 403, el usuario no está autorizado
        if (error.status === 401 || error.status === 403) {
          console.warn('Usuario no autorizado, redirigiendo al login...');
          
          // Cerrar sesión y redirigir al login
          this.authService.logout();
          this.router.navigate(['/']);
          
          // Mostrar mensaje al usuario (opcional)
          alert('Tu sesión ha expirado. Por favor, inicia sesión nuevamente.');
        }
        
        return throwError(() => error);
      })
    );
  }

  /**
   * Añade el token Bearer a las headers de la petición
   */
  private addTokenHeader(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`)
    });
  }
}