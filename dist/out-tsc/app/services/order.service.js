import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
// Este decorador permite que el servicio sea inyectable en otros componentes/servicios
let OrderService = class OrderService {
    // Inyección de dependencias: HttpClient para realizar peticiones HTTP
    constructor(http) {
        this.http = http;
        // URL base para las peticiones a la API de pedidos, obtenida del archivo de entorno
        this.apiUrl = `${environment.apiUrl}/pedidos`;
    }
    // Método para obtener todos los pedidos de un usuario específico por su ID
    // Devuelve un Observable que emitirá un array de pedidos
    getOrders({ userId }) {
        // Realiza una petición GET a la API con el ID del usuario
        // La ruta sigue el formato /pedidos/user/{userId}
        return this.http.get(`${this.apiUrl}/user/${userId}`);
    }
    // Método para obtener un pedido específico por su ID
    // Devuelve un Observable que emitirá un objeto Order con los detalles del pedido
    getOrder(id) {
        // Realiza una petición GET a la URL específica del pedido
        return this.http.get(`${this.apiUrl}/${id}`);
    }
    // Método para crear un nuevo pedido
    // Recibe un objeto Order con los datos del pedido y las líneas del pedido
    // Devuelve un Observable que emitirá el pedido creado con su ID asignado
    createOrder(order) {
        // Realiza una petición POST enviando los datos completos del pedido
        return this.http.post(this.apiUrl, order);
    }
};
OrderService = __decorate([
    Injectable({
        providedIn: 'root' // Hace que este servicio esté disponible a nivel global en la aplicación
    })
], OrderService);
export { OrderService };
//# sourceMappingURL=order.service.js.map