import { __decorate } from "tslib";
// Importaciones necesarias de Angular
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
// Importación de SweetAlert para notificaciones
import Swal from 'sweetalert2';
let LoginComponent = class LoginComponent {
    // Constructor con inyección de dependencias
    constructor(formBuilder, // Para crear formularios reactivos
    route, // Para acceder a los parámetros de la ruta
    router, // Para la navegación
    authService // Para el servicio de autenticación
    ) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authService = authService;
        // Flag para indicar si hay una operación en curso
        this.loading = false;
        // Flag para indicar si el formulario se ha enviado
        this.submitted = false;
        // URL a la que redirigir después del login exitoso
        this.returnUrl = '/';
        // Redireccionar al home si el usuario ya está logueado
        if (this.authService.currentUserValue) {
            this.router.navigate(['/']);
        }
        // Inicializar el formulario con validadores
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    ngOnInit() {
        // Obtener la URL de retorno desde los parámetros o usar '/' por defecto
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    // Getter para acceder fácilmente a los campos del formulario
    get f() { return this.loginForm.controls; }
    // Método que se ejecuta al enviar el formulario
    onSubmit() {
        this.submitted = true;
        // Detener si el formulario es inválido
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        // Llamar al servicio de autenticación para iniciar sesión
        this.authService.login(this.f.username.value ?? '', this.f.password.value ?? '')
            .subscribe({
            next: (data) => {
                // Redirigir a la URL de retorno en caso de éxito
                this.router.navigate([this.returnUrl]);
            },
            error: (error) => {
                // Mostrar mensaje de error
                Swal.fire({
                    title: 'Usuario o contraseña erróneos',
                    icon: 'error',
                    confirmButtonColor: '#52667a'
                });
                this.loading = false;
            }
        });
    }
    // Método para navegar a la página de registro
    goToRegister() {
        this.router.navigate(['/register']);
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map