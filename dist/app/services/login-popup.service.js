// login-popup.service.ts
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let LoginPopupService = class LoginPopupService {
    constructor() {
        // ✅ BehaviorSubject privado con estado inicial
        this.loginPopupStateSubject = new BehaviorSubject({
            isOpen: false,
            returnUrl: '',
            fromCheckout: false
        });
        // ✅ Observable público para que los componentes se suscriban
        this.loginPopupState$ = this.loginPopupStateSubject.asObservable();
        console.log('🔧 LoginPopupService inicializado');
    }
    /**
     * Abrir el popup de login
     */
    open(returnUrl = '', fromCheckout = false) {
        console.log('🔓 LoginPopupService: Abriendo popup', { returnUrl, fromCheckout });
        this.loginPopupStateSubject.next({
            isOpen: true,
            returnUrl,
            fromCheckout
        });
    }
    /**
     * Abrir desde checkout (método específico)
     */
    openForCheckout(returnUrl = '') {
        console.log('🛒 LoginPopupService: Abriendo desde checkout');
        this.open(returnUrl, true);
    }
    /**
     * Cerrar el popup de login
     */
    close() {
        console.log('❌ LoginPopupService: Cerrando popup');
        this.loginPopupStateSubject.next({
            isOpen: false,
            returnUrl: '',
            fromCheckout: false
        });
    }
    /**
     * Obtener el estado actual
     */
    getCurrentState() {
        return this.loginPopupStateSubject.value;
    }
};
LoginPopupService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LoginPopupService);
export { LoginPopupService };
//# sourceMappingURL=login-popup.service.js.map