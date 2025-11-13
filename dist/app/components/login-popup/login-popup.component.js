// login-popup.component.ts - OPTIMIZADO PARA RENDER
import { __decorate } from "tslib";
import { Component, Output, EventEmitter, Input, ViewEncapsulation } from '@angular/core';
let LoginPopupComponent = class LoginPopupComponent {
    constructor(authService, router, keepAliveService // ✅ NUEVO
    ) {
        this.authService = authService;
        this.router = router;
        this.keepAliveService = keepAliveService;
        this.isVisible = false;
        this.returnUrl = '/';
        this.fromCheckout = false;
        this.closePopup = new EventEmitter();
        this.loginSuccess = new EventEmitter();
        this.switchToRegistro = new EventEmitter();
        this.usuario = '';
        this.contrasena = '';
        this.isLoading = false;
        this.errorMessage = '';
        // ✅ NUEVO: Estado de pre-calentamiento
        this.isWarmingUp = false;
        this.warmUpMessage = '';
    }
    ngOnInit() {
        this.handleBodyScroll();
    }
    ngOnChanges() {
        this.handleBodyScroll();
        // ✅ NUEVO: Pre-calentar backend al abrir el popup
        if (this.isVisible && !this.isWarmingUp) {
            this.warmUpBackendIfNeeded();
        }
    }
    ngOnDestroy() {
        document.body.style.overflow = 'auto';
    }
    /**
     * ✅ NUEVO: Pre-calentar el backend si está hibernado
     */
    async warmUpBackendIfNeeded() {
        // Solo pre-calentar si viene de checkout (más crítico)
        if (!this.fromCheckout)
            return;
        this.isWarmingUp = true;
        this.warmUpMessage = 'Preparando conexión...';
        console.log('🔥 Pre-calentando backend...');
        try {
            await this.keepAliveService.warmUpBackend();
            this.warmUpMessage = '';
        }
        catch (error) {
            console.warn('⚠️ Pre-calentamiento falló (no crítico):', error);
        }
        finally {
            this.isWarmingUp = false;
        }
    }
    handleBodyScroll() {
        if (this.isVisible) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'auto';
        }
    }
    cerrarPopup() {
        this.closePopup.emit();
        this.resetForm();
        document.body.style.overflow = 'auto';
    }
    onOverlayClick(event) {
        if (event.target === event.currentTarget) {
            this.cerrarPopup();
        }
    }
    /**
     * ✅ OPTIMIZADO: Login con manejo mejorado de errores de Render
     */
    iniciarSesion() {
        if (!this.usuario || !this.contrasena) {
            this.errorMessage = 'Por favor, completa todos los campos';
            return;
        }
        this.isLoading = true;
        this.errorMessage = '';
        // ✅ Mensaje específico para Render
        const startTime = Date.now();
        let timeoutWarning;
        // Mostrar advertencia si tarda más de 5 segundos
        timeoutWarning = setTimeout(() => {
            if (this.isLoading) {
                this.errorMessage = 'El servidor está iniciando, esto puede tardar 30-60 segundos...';
                console.log('⏳ Backend en Render está despertando...');
            }
        }, 5000);
        this.authService.login(this.usuario, this.contrasena).subscribe({
            next: (response) => {
                clearTimeout(timeoutWarning);
                const duration = Date.now() - startTime;
                this.isLoading = false;
                console.log(`✅ Login exitoso en ${duration}ms:`, response);
                this.loginSuccess.emit(response);
                this.cerrarPopup();
            },
            error: (error) => {
                clearTimeout(timeoutWarning);
                const duration = Date.now() - startTime;
                this.isLoading = false;
                // ✅ Mensajes de error mejorados
                if (duration > 30000) {
                    this.errorMessage = 'El servidor tardó demasiado en responder. Intenta de nuevo.';
                }
                else if (error.status === 0) {
                    this.errorMessage = 'No se pudo conectar al servidor. Verifica tu conexión.';
                }
                else if (error.status === 503) {
                    this.errorMessage = 'El servidor está iniciando. Espera 30 segundos e intenta de nuevo.';
                }
                else {
                    this.errorMessage = error.message || 'Usuario o contraseña incorrectos';
                }
                console.error(`❌ Error en login (${duration}ms):`, error);
            }
        });
    }
    irARegistro() {
        this.switchToRegistro.emit();
        this.resetForm();
    }
    resetForm() {
        this.usuario = '';
        this.contrasena = '';
        this.errorMessage = '';
        this.isLoading = false;
        this.warmUpMessage = '';
    }
    onKeyPress(event) {
        if (event.key === 'Enter') {
            this.iniciarSesion();
        }
    }
    onKeyDown(event) {
        if (event.key === 'Escape') {
            this.cerrarPopup();
        }
    }
};
__decorate([
    Input()
], LoginPopupComponent.prototype, "isVisible", void 0);
__decorate([
    Input()
], LoginPopupComponent.prototype, "returnUrl", void 0);
__decorate([
    Input()
], LoginPopupComponent.prototype, "fromCheckout", void 0);
__decorate([
    Output()
], LoginPopupComponent.prototype, "closePopup", void 0);
__decorate([
    Output()
], LoginPopupComponent.prototype, "loginSuccess", void 0);
__decorate([
    Output()
], LoginPopupComponent.prototype, "switchToRegistro", void 0);
LoginPopupComponent = __decorate([
    Component({
        selector: 'app-login-popup',
        templateUrl: './login-popup.component.html',
        styleUrls: ['./login-popup.component.scss'],
        encapsulation: ViewEncapsulation.None,
        standalone: false
    })
], LoginPopupComponent);
export { LoginPopupComponent };
//# sourceMappingURL=login-popup.component.js.map