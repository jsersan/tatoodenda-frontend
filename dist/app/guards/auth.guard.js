// src/app/guards/auth.guard.ts - ARCHIVO COMPLETO
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AuthGuard = class AuthGuard {
    constructor(router, authService, loginPopupService) {
        this.router = router;
        this.authService = authService;
        this.loginPopupService = loginPopupService;
    }
    canActivate(route, state) {
        console.log('🛡️ AuthGuard verificando acceso a:', state.url);
        const currentUser = this.authService.currentUserValue;
        if (currentUser) {
            console.log('✅ Usuario autenticado:', currentUser.username);
            return true;
        }
        console.log('❌ Usuario no autenticado, abriendo popup de login');
        // ✅ SOLO abrir popup, NO navegar
        this.loginPopupService.openForCheckout(state.url);
        // ✅ Simplemente retornar false para bloquear la navegación
        return false;
    }
};
AuthGuard = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map