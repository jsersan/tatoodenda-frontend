import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Obtener el usuario actual completo
    const currentUser = this.authService.currentUserValue;
    const token = currentUser?.token;
    
    console.log('🔐 AuthInterceptor - Interceptando petición:', {
      url: request.url,
      method: request.method,
      hasUser: !!currentUser,
      hasToken: !!token,
      tokenPreview: token ? token.substring(0, 20) + '...' : 'NO TOKEN'
    });

    // Si existe token, añadirlo a los headers
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('✅ Token JWT añadido a la petición');
    } else {
      console.warn('⚠️ No hay token disponible para añadir a la petición');
      console.warn('⚠️ Estado del usuario:', {
        hasCurrentUser: !!currentUser,
        username: currentUser?.username,
        userKeys: currentUser ? Object.keys(currentUser) : []
      });
    }

    return next.handle(request);
  }
}