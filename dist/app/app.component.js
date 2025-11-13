// app.component.ts - OPTIMIZADO PARA RENDER
import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
let AppComponent = class AppComponent {
    constructor(router, loginPopupService, keepAliveService // ✅ NUEVO
    ) {
        this.router = router;
        this.loginPopupService = loginPopupService;
        this.keepAliveService = keepAliveService;
        this.title = 'ecommerce-app';
        // Control de popups
        this.showLoginPopup = false;
        this.loginReturnUrl = '';
        this.loginFromCheckout = false;
        this.showRegistroPopup = false;
        console.log('🚀 AppComponent inicializado');
    }
    ngOnInit() {
        // ✅ CRÍTICO: Iniciar keep-alive inmediatamente
        this.keepAliveService.startKeepAlive();
        // Suscribirse al servicio de login popup con tipo explícito
        this.loginPopupService.loginPopupState$.subscribe((state) => {
            console.log('📢 Estado de login popup cambió:', state);
            this.showLoginPopup = state.isOpen;
            this.loginReturnUrl = state.returnUrl;
            this.loginFromCheckout = state.fromCheckout;
        });
        // Scroll al inicio en cada navegación
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(() => {
            window.scrollTo(0, 0);
        });
    }
    /**
     * Cerrar popup de login
     */
    onLoginPopupClose() {
        console.log('❌ Cerrando popup de login');
        this.showLoginPopup = false;
        this.loginPopupService.close();
    }
    /**
     * Login exitoso
     */
    onLoginSuccess(returnUrl) {
        console.log('✅ Login exitoso, navegando a:', returnUrl);
        this.showLoginPopup = false;
        if (returnUrl && returnUrl !== '/') {
            this.router.navigate([returnUrl]);
        }
    }
    /**
     * Cambiar de login a registro
     */
    onSwitchToRegister() {
        console.log('🔄 Cambiando de login a registro');
        this.showLoginPopup = false;
        setTimeout(() => {
            this.showRegistroPopup = true;
        }, 200);
    }
    /**
     * Cerrar popup de registro
     */
    onCloseRegistroPopup() {
        console.log('❌ Cerrando popup de registro');
        this.showRegistroPopup = false;
    }
    /**
     * Registro exitoso
     */
    onRegistroSuccess() {
        console.log('✅ Registro exitoso');
        this.showRegistroPopup = false;
        // Abrir login después de un pequeño delay
        setTimeout(() => {
            this.showLoginPopup = true;
        }, 500);
    }
    /**
     * Cambiar de registro a login
     */
    onSwitchToLogin() {
        console.log('🔄 Cambiando de registro a login');
        this.showRegistroPopup = false;
        setTimeout(() => {
            this.showLoginPopup = true;
        }, 200);
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss'],
        standalone: false
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map