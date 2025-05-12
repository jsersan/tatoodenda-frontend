import { __decorate } from "tslib";
// Importaciones necesarias de Angular
import { Component } from '@angular/core';
// Importación para trabajar con formularios reactivos
import { Validators } from '@angular/forms';
// Importación para alertas
import Swal from 'sweetalert2';
let ProfileComponent = class ProfileComponent {
    // Constructor con inyección de dependencias
    constructor(formBuilder, // Para crear formularios reactivos
    authService, // Para obtener/actualizar datos del usuario
    orderService // Para obtener los pedidos del usuario
    ) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.orderService = orderService;
        // Propiedad para almacenar datos del usuario actual
        this.currentUser = null;
        // Array para almacenar los pedidos del usuario
        this.orders = [];
        // Objeto para controlar qué pedidos están expandidos
        this.expandedOrders = {};
        // Obtener el usuario actual desde el servicio de autenticación
        this.currentUser = this.authService.currentUserValue;
        // Inicializar el formulario con los datos actuales del usuario
        this.profileForm = this.formBuilder.group({
            username: [this.currentUser?.username, Validators.required],
            password: [''],
            email: [this.currentUser?.email, [Validators.required, Validators.email]],
            nombre: [this.currentUser?.nombre, Validators.required],
            direccion: [this.currentUser?.direccion, Validators.required],
            ciudad: [this.currentUser?.ciudad, Validators.required],
            cp: [this.currentUser?.cp, Validators.required]
        });
    }
    // Método que se ejecuta al inicializar el componente
    ngOnInit() {
        // Cargar los pedidos del usuario
        this.loadOrders();
    }
    // Método para cargar los pedidos del usuario
    loadOrders() {
        if (this.currentUser) {
            this.orderService.getOrders({ userId: this.currentUser.id }).subscribe({
                next: (orders) => {
                    this.orders = orders;
                    // Inicializar el estado de expansión para cada pedido (todos colapsados)
                    this.orders.forEach(order => {
                        this.expandedOrders[order.id] = false;
                    });
                },
                error: (error) => console.error('Error loading orders', error)
            });
        }
    }
    // Método para expandir/colapsar los detalles de un pedido
    toggleOrderDetails(orderId) {
        this.expandedOrders[orderId] = !this.expandedOrders[orderId];
    }
    // Método para verificar si un pedido está expandido
    isOrderExpanded(orderId) {
        return this.expandedOrders[orderId] || false;
    }
    // Método para actualizar los datos del perfil
    updateProfile() {
        // Solicitar confirmación de contraseña antes de actualizar
        Swal.fire({
            title: 'Ingresa tu contraseña actual',
            input: 'password',
            inputPlaceholder: 'Contraseña actual',
            showCancelButton: true,
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#52667a',
            cancelButtonColor: '#d33'
        }).then((result) => {
            if (result.value) {
                // Si el usuario proporcionó la contraseña, proceder con la actualización
                if (this.currentUser) {
                    // Crear objeto usuario con los datos del formulario
                    const updatedUser = {
                        ...this.profileForm.value,
                        id: this.currentUser.id
                    };
                    // Si no se ingresó nueva contraseña, eliminar esa propiedad
                    if (!updatedUser.password) {
                        delete updatedUser.password;
                    }
                    // Llamar al servicio para actualizar los datos
                    this.authService.updateUser(updatedUser).subscribe({
                        next: (data) => {
                            // Mostrar mensaje de éxito
                            Swal.fire({
                                title: 'Datos actualizados con éxito',
                                icon: 'success',
                                confirmButtonColor: '#52667a'
                            });
                        },
                        error: (error) => {
                            // Mostrar mensaje de error
                            Swal.fire({
                                title: 'Error al actualizar los datos',
                                icon: 'error',
                                confirmButtonColor: '#52667a'
                            });
                        }
                    });
                }
            }
        });
    }
    // Método para formatear precios con formato de moneda
    formatPrice(price) {
        return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(price);
    }
};
ProfileComponent = __decorate([
    Component({
        selector: 'app-profile',
        templateUrl: './profile.component.html',
        styleUrls: ['./profile.component.scss']
    })
], ProfileComponent);
export { ProfileComponent };
//# sourceMappingURL=profile.component.js.map