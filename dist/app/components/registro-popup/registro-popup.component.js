import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Validators } from '@angular/forms';
import Swal from 'sweetalert2';
let RegistroPopupComponent = class RegistroPopupComponent {
    constructor(formBuilder, router, authService, http) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.http = http;
        this.isVisible = false;
        this.closePopup = new EventEmitter();
        this.registroSuccess = new EventEmitter();
        this.switchToLogin = new EventEmitter();
        this.loading = false;
        this.submitted = false;
        this.showPassword = false;
        this.apiKey = 'AIzaSyDY3YQ6aNb7YXoz13RIxq5fVyzdbak7sQ0';
        this.registerForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            nombre: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            direccion: ['', Validators.required],
            ciudad: ['', Validators.required],
            cp: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]]
        });
    }
    ngOnInit() {
        console.log('✅ RegistroPopupComponent inicializado');
    }
    get f() {
        return this.registerForm.controls;
    }
    togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
    }
    close() {
        this.closePopup.emit();
    }
    onClose() {
        this.close();
    }
    switchToLoginModal(event) {
        event.preventDefault();
        this.switchToLogin.emit();
    }
    onSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.authService.register(this.registerForm.value).subscribe({
            next: (data) => {
                this.loading = false;
                this.registerForm.reset();
                this.submitted = false;
                this.registroSuccess.emit();
                Swal.fire({
                    title: '¡Cuenta creada!',
                    text: 'Tu cuenta ha sido creada correctamente. Ahora puedes iniciar sesión.',
                    icon: 'success',
                    confirmButtonColor: '#4facfe',
                    confirmButtonText: 'Entendido',
                    timer: 4000,
                    timerProgressBar: true
                });
            },
            error: (error) => {
                this.loading = false;
                let errorMessage = 'No se pudo crear la cuenta. Por favor, intenta de nuevo.';
                if (error.message)
                    errorMessage = error.message;
                if (error.message && error.message.includes('username')) {
                    errorMessage = 'El nombre de usuario ya está en uso. Elige otro.';
                }
                if (error.message && error.message.includes('email')) {
                    errorMessage = 'El email ya está registrado.';
                }
                Swal.fire({
                    title: 'Error al crear cuenta',
                    text: errorMessage,
                    icon: 'error',
                    confirmButtonColor: '#dc3545',
                    confirmButtonText: 'Entendido'
                });
            }
        });
    }
    autoCompleteCP() {
        const direccion = this.registerForm.get('direccion')?.value;
        const ciudad = this.registerForm.get('ciudad')?.value;
        if (!direccion || !ciudad) {
            return;
        }
        const direccionCompleta = encodeURIComponent(`${direccion}, ${ciudad}`);
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${direccionCompleta}&key=${this.apiKey}`;
        this.http.get(url).subscribe({
            next: (resultado) => {
                if (resultado.status === 'OK' &&
                    resultado.results &&
                    resultado.results.length > 0) {
                    const components = resultado.results[0].address_components;
                    const postal = components.find((comp) => comp.types.includes('postal_code'));
                    if (postal) {
                        this.registerForm.get('cp')?.setValue(postal.long_name);
                    }
                }
            },
            error: (err) => {
                //alert('No se pudo obtener código postal automáticamente.'+ err);
                console.warn('No se pudo obtener código postal automáticamente.', err);
            }
        });
    }
};
__decorate([
    Input()
], RegistroPopupComponent.prototype, "isVisible", void 0);
__decorate([
    Output()
], RegistroPopupComponent.prototype, "closePopup", void 0);
__decorate([
    Output()
], RegistroPopupComponent.prototype, "registroSuccess", void 0);
__decorate([
    Output()
], RegistroPopupComponent.prototype, "switchToLogin", void 0);
RegistroPopupComponent = __decorate([
    Component({
        selector: 'app-registro-popup',
        templateUrl: './registro-popup.component.html',
        styleUrls: ['./registro-popup.component.scss'],
        standalone: false
    })
], RegistroPopupComponent);
export { RegistroPopupComponent };
//# sourceMappingURL=registro-popup.component.js.map