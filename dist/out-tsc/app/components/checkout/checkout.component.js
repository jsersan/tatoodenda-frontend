import { __decorate } from "tslib";
// Importaciones necesarias de Angular y servicios personalizados
import { Component } from '@angular/core';
import Swal from 'sweetalert2'; // Librería para mostrar alertas atractivas
import { catchError, throwError } from 'rxjs'; // Operadores de RxJS para manejo de errores
// Decorador para definir metadatos del componente
let CheckoutComponent = class CheckoutComponent {
    // Constructor con inyección de dependencias
    constructor(router, // Para navegación
    authService, // Para acceder al usuario actual
    cartService, // Para gestionar el carrito
    orderService // Para crear pedidos
    ) {
        this.router = router;
        this.authService = authService;
        this.cartService = cartService;
        this.orderService = orderService;
        // Propiedades del componente
        this.currentUser = null; // Usuario actualmente autenticado
        this.cartItems = []; // Productos en el carrito
        this.total = 0; // Total a pagar
    }
    // Método que se ejecuta al inicializar el componente
    ngOnInit() {
        // Obtiene el usuario actual del servicio de autenticación
        this.currentUser = this.authService.currentUserValue;
        // Si no hay usuario autenticado, redirige al login
        if (!this.currentUser) {
            this.router.navigate(['/login']);
            return;
        }
        // Suscripción a los cambios en el carrito de compras
        this.cartService.cartItems.subscribe(items => {
            this.cartItems = items; // Actualiza los items del carrito
            this.total = this.cartService.getCartTotal(); // Recalcula el total
        });
        // Si el carrito está vacío, muestra alerta y redirige a inicio
        if (this.cartItems.length === 0) {
            Swal.fire({
                title: 'Carrito vacío',
                text: 'No hay productos en el carrito para procesar',
                icon: 'warning',
                confirmButtonColor: '#52667a'
            }).then(() => {
                this.router.navigate(['/']);
            });
        }
    }
    // Método para procesar el pedido
    placeOrder() {
        // Verifica que haya usuario autenticado y productos en el carrito
        if (!this.currentUser || this.cartItems.length === 0)
            return;
        // Crea un array de líneas de pedido a partir de los items del carrito
        const orderLines = this.cartItems.map(item => {
            return {
                idpedido: 0,
                idprod: item.id,
                color: item.color,
                cant: item.cantidad,
                nombre: item.nombre // Nombre del producto
            };
        });
        // Crea el objeto de pedido con todos los datos necesarios
        const order = {
            iduser: this.currentUser.id,
            fecha: new Date().toISOString().slice(0, 10),
            total: this.total,
            lineas: orderLines // Líneas de pedido creadas anteriormente
        };
        // Llama al servicio para crear el pedido y maneja posibles errores
        this.orderService.createOrder(order)
            .pipe(catchError(err => {
            // Muestra alerta en caso de error
            Swal.fire({
                title: 'Error al procesar el pedido',
                text: err.message || 'Error en el servidor',
                icon: 'error',
                confirmButtonColor: '#52667a'
            });
            // Propaga el error para que lo maneje el subscribe
            return throwError(() => err);
        }))
            .subscribe({
            next: (createdOrder) => {
                // En caso de éxito, muestra alerta de confirmación
                Swal.fire({
                    title: 'Pedido realizado con éxito',
                    text: 'Le informaremos al recibir la confirmación del pago',
                    icon: 'success',
                    confirmButtonColor: '#52667a'
                }).then(() => {
                    // Limpia el carrito y redirige a la página de inicio
                    this.cartService.clearCart();
                    this.router.navigate(['/']);
                });
            },
            error: (err) => {
                // En caso de error, muestra mensaje en consola
                console.error('Error en la solicitud:', err);
            }
        });
    } // Fin del método placeOrder
    // Método para formatear precios en formato de moneda EUR
    formatPrice(price) {
        return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(price);
    }
};
CheckoutComponent = __decorate([
    Component({
        selector: 'app-checkout',
        templateUrl: './checkout.component.html',
        styleUrls: ['./checkout.component.scss'] // Ruta a los estilos CSS/SCSS
    })
], CheckoutComponent);
export { CheckoutComponent };
//# sourceMappingURL=checkout.component.js.map