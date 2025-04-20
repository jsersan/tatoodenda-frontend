// Importaciones necesarias de Angular y servicios personalizados
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Para la navegación entre páginas
import { AuthService } from '../../services/auth.service'; // Servicio de autenticación
import { CartService } from '../../services/cart.service'; // Servicio del carrito de compras
import { OrderService } from '../../services/order.service'; // Servicio de pedidos
import { User } from '../../models/user'; // Modelo de usuario
import { CartItem, Order, OrderLine } from '../../models/order'; // Modelos relacionados con pedidos
import Swal from 'sweetalert2'; // Librería para mostrar alertas atractivas
import { catchError, throwError } from 'rxjs'; // Operadores de RxJS para manejo de errores

// Decorador para definir metadatos del componente
@Component({
  selector: 'app-checkout', // Selector para usar en templates HTML
  templateUrl: './checkout.component.html', // Ruta a la plantilla HTML
  styleUrls: ['./checkout.component.scss'] // Ruta a los estilos CSS/SCSS
})
export class CheckoutComponent implements OnInit {
  // Propiedades del componente
  currentUser: User | null = null; // Usuario actualmente autenticado
  cartItems: CartItem[] = []; // Productos en el carrito
  total: number = 0; // Total a pagar
  
  // Constructor con inyección de dependencias
  constructor(
    private router: Router, // Para navegación
    private authService: AuthService, // Para acceder al usuario actual
    private cartService: CartService, // Para gestionar el carrito
    private orderService: OrderService // Para crear pedidos
  ) { }

  // Método que se ejecuta al inicializar el componente
  ngOnInit(): void {
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
  placeOrder(): void {
    // Verifica que haya usuario autenticado y productos en el carrito
    if (!this.currentUser || this.cartItems.length === 0) return;
    
    // Crea un array de líneas de pedido a partir de los items del carrito
    const orderLines: OrderLine[] = this.cartItems.map(item => {
      return {
        idpedido: 0, // El ID será asignado en el backend
        idprod: item.id, // ID del producto
        color: item.color, // Color seleccionado
        cant: item.cantidad, // Cantidad solicitada
        nombre: item.nombre // Nombre del producto
      };
    });
    
    // Crea el objeto de pedido con todos los datos necesarios
    const order: Order = {
      iduser: this.currentUser.id!, // ID del usuario (con ! para asegurar que no es null)
      fecha: new Date().toISOString().slice(0, 10), // Fecha actual en formato YYYY-MM-DD
      total: this.total, // Total calculado del pedido
      lineas: orderLines // Líneas de pedido creadas anteriormente
    };
    
    // Llama al servicio para crear el pedido y maneja posibles errores
    this.orderService.createOrder(order)
    .pipe(
      catchError(err => {
        // Muestra alerta en caso de error
        Swal.fire({
          title: 'Error al procesar el pedido',
          text: err.message || 'Error en el servidor',
          icon: 'error',
          confirmButtonColor: '#52667a'
        });
        // Propaga el error para que lo maneje el subscribe
        return throwError(() => err);
      })
    )
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
  formatPrice(price: number): string {
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(price);
  }
}