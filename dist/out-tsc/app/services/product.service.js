import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
// Este decorador permite que el servicio sea inyectable en otros componentes/servicios
let ProductService = class ProductService {
    // Inyección de dependencias: HttpClient para realizar peticiones HTTP
    constructor(http) {
        this.http = http;
        // URL base para las peticiones a la API de productos
        this.apiUrl = `${environment.apiUrl}/productos`;
    }
    // Método para obtener todos los productos
    // Devuelve un Observable que emitirá un array de productos
    getProducts() {
        // Realiza una petición GET a la API y castea la respuesta a un array de Productos
        return this.http.get(this.apiUrl);
    }
    // Método para obtener productos filtrados por categoría
    getProductsByCategory(categoryId) {
        // Añade el parámetro de categoría a la URL
        return this.http.get(`${this.apiUrl}?categoria=${categoryId}`);
    }
    // Método para obtener un producto específico por su ID
    getProduct(id) {
        // Construye la URL para el producto específico
        return this.http.get(`${this.apiUrl}/${id}`);
    }
    // Método para buscar productos por término de búsqueda
    searchProducts(term) {
        // Realiza una petición GET con el parámetro de búsqueda
        return this.http.get(`${this.apiUrl}/search?q=${term}`);
    }
    // Método para añadir un nuevo producto
    // Recibe un objeto Producto y devuelve el Productoo creado con su ID asignado
    addProduct(producto) {
        // Realiza una petición POST enviando los datos del producto
        return this.http.post(this.apiUrl, producto);
    }
    // Método para actualizar un producto existente
    updateProduct(producto) {
        // Realiza una petición PUT con los datos actualizados
        return this.http.put(`${this.apiUrl}/${producto.id}`, producto);
    }
    // Método para eliminar un producto
    deleteProduct(id) {
        // Realiza una petición DELETE para el producto con el ID especificado
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
    // Método para obtener los colores disponibles para un producto
    getProductColors(productoId) {
        // Realiza una petición GET a la subURL de colores
        return this.http.get(`${this.apiUrl}/${productoId}/colores`);
    }
    // Método para subir imágenes al servidor
    uploadProductImages(productId, files) {
        const formData = new FormData();
        // Añadir cada archivo al FormData
        files.forEach((file, index) => {
            formData.append('images', file, file.name);
        });
        // Enviar la petición POST al servidor
        return this.http.post(`${this.apiUrl}/${productId}/images`, formData);
    }
};
ProductService = __decorate([
    Injectable({
        providedIn: 'root' // Hace que este servicio esté disponible a nivel global en la aplicación
    })
], ProductService);
export { ProductService };
//# sourceMappingURL=product.service.js.map