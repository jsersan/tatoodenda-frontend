import { __decorate } from "tslib";
// Importaciones necesarias
import { Component } from '@angular/core'; // Decoradores básicos de Angular
import { Validators } from '@angular/forms'; // Para formularios reactivos
import Swal from 'sweetalert2'; // Biblioteca para mostrar alertas atractivas
// Decorador que define el componente
let RegisterComponent = class RegisterComponent {
    // Constructor con inyección de dependencias
    constructor(formBuilder, // Para crear formularios reactivos
    router, // Para navegar programáticamente
    authService // Servicio de autenticación
    ) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.loading = false; // Indica si hay una operación en curso
        this.submitted = false; // Indica si el formulario se ha enviado
        // Si el usuario ya está autenticado, redirigir a la página principal
        if (this.authService.currentUserValue) {
            this.router.navigate(['/']);
        }
        // Inicializar el formulario con validaciones
        this.registerForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            nombre: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            direccion: ['', Validators.required],
            ciudad: ['', Validators.required],
            cp: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]] // Obligatorio y 5 dígitos
        });
    }
    // Método del ciclo de vida de Angular - se ejecuta al inicializarse el componente
    ngOnInit() {
        // No hay inicializaciones adicionales en este caso
    }
    // Getter para acceder fácilmente a los controles del formulario en la plantilla
    get f() { return this.registerForm.controls; }
    // Método que se ejecuta al enviar el formulario
    onSubmit() {
        this.submitted = true; // Marcar como enviado para mostrar validaciones
        // Si el formulario tiene errores de validación, detener el proceso
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true; // Activar indicador de carga
        // Llamar al servicio de autenticación para registrar al usuario
        this.authService.register(this.registerForm.value)
            .subscribe({
            // Función a ejecutar si el registro es exitoso
            next: (data) => {
                // Mostrar mensaje de éxito
                Swal.fire({
                    title: 'Usuario creado correctamente',
                    text: 'Recuerda iniciar sesión para procesar la compra',
                    icon: 'success',
                    confirmButtonColor: '#52667a'
                }).then(() => {
                    // Después de cerrar la alerta, navegar a la página de login
                    this.router.navigate(['/login']);
                });
            },
            // Función a ejecutar si hay un error
            error: (error) => {
                // Mostrar mensaje de error personalizado según el tipo de error
                Swal.fire({
                    title: 'Error al crear el usuario',
                    text: error.includes('username') ? 'El nombre de usuario ya está en uso' : error,
                    icon: 'error',
                    confirmButtonColor: '#52667a'
                });
                this.loading = false; // Desactivar indicador de carga
            }
        });
    }
};
RegisterComponent = __decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.scss'] // Estilos específicos del componente
    })
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map