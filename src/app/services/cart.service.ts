import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../models/order';

// Este decorador permite que el servicio sea inyectable en otros componentes/servicios
@Injectable({
  providedIn: 'root' // Hace que este servicio esté disponible a nivel global en la aplicación
})
export class CartService {
  // BehaviorSubject mantiene el estado actual del carrito y notifica a los suscriptores cuando cambia
  // Inicializado como un array vacío
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  
  // Observable público que los componentes pueden usar para recibir actualizaciones del carrito
  public cartItems: Observable<CartItem[]> = this.cartItemsSubject.asObservable();

  constructor() {
    // Cuando se inicializa el servicio, intentar cargar el carrito desde localStorage
    // Esto permite persistir el carrito entre recargas de página
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      // Si existe carrito en localStorage, establecerlo como estado inicial
      this.cartItemsSubject.next(JSON.parse(storedCart));
    }
  }

  // Método para obtener el contenido actual del carrito sin tener que suscribirse
  getCart(): CartItem[] {
    return this.cartItemsSubject.value;
  }

  // Método para añadir un nuevo ítem al carrito
  addToCart(item: CartItem): void {
    // Obtener el carrito actual
    const currentCart = this.cartItemsSubject.value;
    
    // Buscar si el producto con el mismo color ya existe en el carrito
    const existingItemIndex = currentCart.findIndex(
      i => i.id === item.id && i.color === item.color
    );

    if (existingItemIndex !== -1) {
      // Si el producto ya existe, actualizar su cantidad
      currentCart[existingItemIndex].cantidad += item.cantidad;
    } else {
      // Si no existe, añadirlo al carrito
      currentCart.push(item);
    }

    // Actualizar el BehaviorSubject con el nuevo carrito
    this.cartItemsSubject.next(currentCart);
    
    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('cart', JSON.stringify(currentCart));
  }

  // Método para eliminar un ítem del carrito
  removeItem(id: number, color: string): void {
    // Obtener el carrito actual
    const currentCart = this.cartItemsSubject.value;
    
    // Filtrar el carrito para eliminar el ítem específico
    const updatedCart = currentCart.filter(
      item => !(item.id === id && item.color === color)
    );

    // Actualizar el BehaviorSubject con el carrito filtrado
    this.cartItemsSubject.next(updatedCart);
    
    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }

  // Método para vaciar completamente el carrito
  clearCart(): void {
    // Establecer el carrito como un array vacío
    this.cartItemsSubject.next([]);
    
    // Eliminar el carrito de localStorage
    localStorage.removeItem('cart');
  }

  // Método para calcular el total del carrito
  getCartTotal(): number {
    // Sumar el precio * cantidad de cada ítem en el carrito
    return this.cartItemsSubject.value.reduce(
      (total, item) => total + (item.precio * item.cantidad), 
      0
    );
  }

  // Método para obtener el número total de ítems en el carrito
  getCartItemCount(): number {
    // Sumar la cantidad de cada ítem en el carrito
    return this.cartItemsSubject.value.reduce(
      (count, item) => count + item.cantidad, 
      0
    );
  }
}