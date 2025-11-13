import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
let JwtInterceptor = class JwtInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(request, next) {
        // Añadir token de autenticación a las peticiones a la API
        const currentUser = this.authService.currentUserValue;
        const isApiUrl = request.url.startsWith(environment.apiUrl);
        if (currentUser && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
        return next.handle(request);
    }
};
JwtInterceptor = __decorate([
    Injectable()
], JwtInterceptor);
export { JwtInterceptor };
//# sourceMappingURL=jwt.interceptor.js.map