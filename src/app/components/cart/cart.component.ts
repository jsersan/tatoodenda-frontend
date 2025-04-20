// Importaciones de Angular y servicios necesarios
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';
import { CartItem } from 'src/app/models/order';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  // Array para almacenar los items del carrito
  cartItems: CartItem[] = [];
  
  // Variable para almacenar el total del carrito
  total: number = 0;
  
  // Constructor con inyección de dependencias
  constructor(
    private cartService: CartService,  // Para acceder al servicio del carrito
    private authService: AuthService,  // Para verificar si el usuario está autenticado
    private router: Router             // Para la navegación programática
  ) { }

  // Método que se ejecuta cuando se inicializa el componente
  ngOnInit(): void {
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
  removeItem(id: number, color: string): void {
    // Llamar al método del servicio para eliminar el item
    this.cartService.removeItem(id, color);
  }

  // Método para proceder al checkout
  checkout(): void {
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
}