import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// Este decorador permite que el servicio sea inyectable en otros componentes/servicios
let CartService = class CartService {
    constructor() {
        // BehaviorSubject mantiene el estado actual del carrito y notifica a los suscriptores cuando cambia
        // Inicializado como un array vacío
        this.cartItemsSubject = new BehaviorSubject([]);
        // Observable público que los componentes pueden usar para recibir actualizaciones del carrito
        this.cartItems = this.cartItemsSubject.asObservable();
        // Cuando se inicializa el servicio, intentar cargar el carrito desde localStorage
        // Esto permite persistir el carrito entre recargas de página
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            // Si existe carrito en localStorage, establecerlo como estado inicial
            this.cartItemsSubject.next(JSON.parse(storedCart));
        }
    }
    // Método para obtener el contenido actual del carrito sin tener que suscribirse
    getCart() {
        return this.cartItemsSubject.value;
    }
    // Método para añadir un nuevo ítem al carrito
    addToCart(item) {
        // Obtener el carrito actual
        const currentCart = this.cartItemsSubject.value;
        // Buscar si el producto con el mismo color ya existe en el carrito
        const existingItemIndex = currentCart.findIndex(i => i.id === item.id && i.color === item.color);
        if (existingItemIndex !== -1) {
            // Si el producto ya existe, actualizar su cantidad
            currentCart[existingItemIndex].cantidad += item.cantidad;
        }
        else {
            // Si no existe, añadirlo al carrito
            currentCart.push(item);
        }
        // Actualizar el BehaviorSubject con el nuevo carrito
        this.cartItemsSubject.next(currentCart);
        // Guardar el carrito actualizado en localStorage
        localStorage.setItem('cart', JSON.stringify(currentCart));
    }
    // Método para eliminar un ítem del carrito
    removeItem(id, color) {
        // Obtener el carrito actual
        const currentCart = this.cartItemsSubject.value;
        // Filtrar el carrito para eliminar el ítem específico
        const updatedCart = currentCart.filter(item => !(item.id === id && item.color === color));
        // Actualizar el BehaviorSubject con el carrito filtrado
        this.cartItemsSubject.next(updatedCart);
        // Guardar el carrito actualizado en localStorage
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
    // Método para vaciar completamente el carrito
    clearCart() {
        // Establecer el carrito como un array vacío
        this.cartItemsSubject.next([]);
        // Eliminar el carrito de localStorage
        localStorage.removeItem('cart');
    }
    // Método para calcular el total del carrito
    getCartTotal() {
        // Sumar el precio * cantidad de cada ítem en el carrito
        return this.cartItemsSubject.value.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    }
    // Método para obtener el número total de ítems en el carrito
    getCartItemCount() {
        // Sumar la cantidad de cada ítem en el carrito
        return this.cartItemsSubject.value.reduce((count, item) => count + item.cantidad, 0);
    }
};
CartService = __decorate([
    Injectable({
        providedIn: 'root' // Hace que este servicio esté disponible a nivel global en la aplicación
    })
], CartService);
export { CartService };
//# sourceMappingURL=cart.service.js.map