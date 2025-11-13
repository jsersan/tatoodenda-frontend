import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AuthInterceptor = class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(request, next) {
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
        }
        else {
            console.warn('⚠️ No hay token disponible para añadir a la petición');
            console.warn('⚠️ Estado del usuario:', {
                hasCurrentUser: !!currentUser,
                username: currentUser?.username,
                userKeys: currentUser ? Object.keys(currentUser) : []
            });
        }
        return next.handle(request);
    }
};
AuthInterceptor = __decorate([
    Injectable()
], AuthInterceptor);
export { AuthInterceptor };
//# sourceMappingURL=auth.interceptor.js.map