// checkout.component.ts actualizado con funcionalidad de modal

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';
import { Order, OrderLine } from 'src/app/models/order';
import { CartItem } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  // Formulario para datos de envío
  checkoutForm: FormGroup;
  
  // Array para items del carrito
  cartItems: CartItem[] = [];
  
  // Total del pedido
  total: number = 0;
  
  // Estado de carga
  loading: boolean = false;
  
  // Estados para mostrar diferentes partes del checkout
  showOrder: boolean = true;
  showDelivery: boolean = false;
  showPayment: boolean = false;
  
  // Usuario actual para la plantilla
  currentUser: any;
  
  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private authService: AuthService,
    private orderService: OrderService,
    private router: Router
  ) {
    // Inicialización del formulario con validaciones
    this.checkoutForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      direccion: ['', [Validators.required, Validators.minLength(5)]],
      ciudad: ['', [Validators.required]],
      codigoPostal: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]]
    });
  }

  ngOnInit(): void {
    // Prevenir el scroll del body cuando el modal está abierto
    document.body.style.overflow = 'hidden';
    
    // Cargar los items del carrito
    this.cartService.cartItems.subscribe(items => {
      // Mapear los items del carrito para asegurar compatibilidad de tipos
      this.cartItems = items.map(item => {
        return {
          id: item.id,
          nombre: item.nombre || '',
          color: item.color || '',
          cantidad: item.cantidad,
          precio: item.precio,
          imagen: item.imagen,
          producto: typeof item.producto === 'object' ? JSON.stringify(item.producto) : item.producto
        } as CartItem;
      });
      
      // Calcular el total
      this.total = this.cartService.getCartTotal();
      
      // Verificar si el carrito está vacío y redireccionar
      if (this.cartItems.length === 0) {
        this.closeCheckout();
      }
    });
    
    // Obtener usuario actual y almacenarlo en la propiedad currentUser
    this.currentUser = this.authService.currentUserValue;
    
    // Prellenar el formulario con datos del usuario si está disponible
    if (this.currentUser) {
      this.checkoutForm.patchValue({
        nombre: this.currentUser.nombre || '',
        direccion: this.currentUser.direccion || '',
        ciudad: this.currentUser.ciudad || '',
        codigoPostal: this.currentUser.cp || '',
        telefono: this.currentUser.telefono || ''
      });
    }
    
    // Listener para cerrar con tecla ESC
    document.addEventListener('keydown', this.handleEscapeKey.bind(this));
  }

  ngOnDestroy(): void {
    // Restaurar el scroll del body al destruir el componente
    document.body.style.overflow = 'auto';
    
    // Remover listener del ESC
    document.removeEventListener('keydown', this.handleEscapeKey.bind(this));
  }

  /**
   * Maneja la tecla ESC para cerrar el modal
   */
  private handleEscapeKey(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeCheckout();
    }
  }

  /**
   * Cierra el modal de checkout y navega de vuelta
   */
  closeCheckout(): void {
    // Restaurar scroll del body
    document.body.style.overflow = 'auto';
    
    // Navegar hacia atrás o a la página principal
    this.router.navigate(['/']);
  }

  /**
   * Procesa el pedido (método principal del checkout)
   */
  placeOrder(): void {
    if (this.checkoutForm.invalid) {
      // Marcar todos los campos como tocados para mostrar errores
      Object.keys(this.checkoutForm.controls).forEach(key => {
        const control = this.checkoutForm.get(key);
        control?.markAsTouched();
      });
      return;
    }
    
    this.loading = true;
    
    // Crear las líneas de pedido
    const orderLines: OrderLine[] = this.cartItems.map(item => {
      return {
        idpedido: 0,
        idprod: item.id,
        color: item.color || '',
        cantidad: item.cantidad,
        nombre: item.nombre || ''
      };
    });
    
    // Crear el objeto de pedido
    const order: Order = {
      id: 0,
      usuario_id: this.currentUser?.id || 0,
      fecha: new Date().toISOString(),
      estado: 'pendiente',
      total: this.total,
      direccion_envio: this.checkoutForm.value.direccion || this.currentUser.direccion,
      metodo_pago: 'Efectivo',
      lineas: orderLines
    };
    
    // Llamar al servicio para crear el pedido
    this.orderService.createOrder(order).subscribe({
      next: (response) => {
        this.loading = false;
        
        // Vaciar el carrito
        this.cartService.clearCart();
        
        // Mostrar mensaje de éxito
        Swal.fire({
          title: '¡Pedido realizado con éxito!',
          text: `Tu número de pedido es: ${response.id}`,
          icon: 'success',
          confirmButtonColor: '#52667a',
          confirmButtonText: 'Aceptar'
        }).then(() => {
          // Cerrar modal y redirigir
          this.closeCheckout();
          this.router.navigate(['/profile']);
        });
      },
      error: (error) => {
        this.loading = false;
        
        // Mostrar mensaje de error
        Swal.fire({
          title: 'Error al procesar el pedido',
          text: error.message || 'Hubo un problema al procesar tu pedido. Por favor, inténtalo de nuevo.',
          icon: 'error',
          confirmButtonColor: '#52667a',
          confirmButtonText: 'Intentar de nuevo'
        });
      }
    });
  }
  
  // Método para convertir OrderLine[] a CartItem[]
  private convertOrderLinesToCartItems(orderLines: OrderLine[]): CartItem[] {
    return orderLines.map(line => {
      return {
        id: line.idprod,
        nombre: line.nombre,
        cantidad: line.cantidad,
        color: line.color,
        precio: this.findCartItemPrice(line.idprod, line.color),
        imagen: this.findCartItemImage(line.idprod, line.color),
        producto: this.findCartItemProducto(line.idprod, line.color)
      } as CartItem;
    });
  }
  
  // Métodos auxiliares
  private findCartItemPrice(id: number, color: string): number {
    const item = this.cartItems.find(i => i.id === id && i.color === color);
    return item ? item.precio : 0;
  }
  
  private findCartItemImage(id: number, color: string): string {
    const item = this.cartItems.find(i => i.id === id && i.color === color);
    return item ? item.imagen : '';
  }
  
  private findCartItemProducto(id: number, color: string): string {
    const item = this.cartItems.find(i => i.id === id && i.color === color);
    return item ? item.producto : '';
  }
  
  // Navegar a diferentes secciones del checkout (si se implementan pasos)
  goToDelivery(): void {
    this.showOrder = false;
    this.showDelivery = true;
    this.showPayment = false;
  }
  
  goToPayment(): void {
    if (this.checkoutForm.invalid) {
      Object.keys(this.checkoutForm.controls).forEach(key => {
        const control = this.checkoutForm.get(key);
        control?.markAsTouched();
      });
      return;
    }
    
    this.showOrder = false;
    this.showDelivery = false;
    this.showPayment = true;
  }
  
  goToOrder(): void {
    this.showOrder = true;
    this.showDelivery = false;
    this.showPayment = false;
  }
  
  // Gestionar errores de formulario
  hasError(field: string): boolean {
    const control = this.checkoutForm.get(field);
    return control ? control.invalid && control.touched : false;
  }
  
  getErrorMessage(field: string): string {
    const control = this.checkoutForm.get(field);
    
    if (!control) return '';
    
    if (control.hasError('required')) {
      return 'Este campo es obligatorio';
    }
    
    if (control.hasError('minlength')) {
      const minLength = control.errors?.['minlength'].requiredLength;
      return `Debe tener al menos ${minLength} caracteres`;
    }
    
    if (control.hasError('pattern')) {
      if (field === 'codigoPostal') {
        return 'Debe ser un código postal válido de 5 dígitos';
      }
      if (field === 'telefono') {
        return 'Debe ser un número de teléfono válido de 9 dígitos';
      }
    }
    
    return 'Campo inválido';
  }
}