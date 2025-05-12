import { __decorate } from "tslib";
// Importaciones de Angular y servicios necesarios
import { Component } from '@angular/core';
import Swal from 'sweetalert2';
let CartComponent = class CartComponent {
    // Constructor con inyección de dependencias
    constructor(cartService, // Para acceder al servicio del carrito
    authService, // Para verificar si el usuario está autenticado
    router // Para la navegación programática
    ) {
        this.cartService = cartService;
        this.authService = authService;
        this.router = router;
        // Array para almacenar los items del carrito
        this.cartItems = [];
        // Variable para almacenar el total del carrito
        this.total = 0;
    }
    // Método que se ejecuta cuando se inicializa el componente
    ngOnInit() {
        // Suscripción al observable de items del carrito
        this.cartService.cartItems.subscribe({
            next: (items) => {
                // Actualizar los items del carrito en el componente
                this.cartItems = items;
                // Calcular el total del carrito
                this.total = this.cartService.getCartTotal();
            }
        });
    }
    // Método para eliminar un item del carrito
    removeItem(id, color) {
        // Llamar al método del servicio para eliminar el item
        this.cartService.removeItem(id, color);
    }
    // Método para proceder al checkout
    checkout() {
        // Verificar que el carrito no esté vacío
        if (this.cartItems.length === 0) {
            // Mostrar alerta si el carrito está vacío
            Swal.fire({
                title: 'El carrito está vacío',
                icon: 'info',
                confirmButtonColor: '#52667a'
            });
            return;
        }
        // Verificar que el usuario esté autenticado
        if (!this.authService.currentUserValue) {
            // Mostrar alerta si el usuario no está autenticado
            Swal.fire({
                title: 'Debes iniciar sesión para poder procesar la compra',
                icon: 'error',
                confirmButtonColor: '#52667a'
            }).then(() => {
                // Redirigir a la página de login con retorno a checkout
                this.router.navigate(['/login'], {
                    queryParams: { returnUrl: '/checkout' }
                });
            });
            return;
        }
        // Si todo está bien, navegar a la página de checkout
        this.router.navigate(['/checkout']);
    }
};
CartComponent = __decorate([
    Component({
        selector: 'app-cart',
        templateUrl: './cart.component.html',
        styleUrls: ['./cart.component.scss']
    })
], CartComponent);
export { CartComponent };
//# sourceMappingURL=cart.component.js.map