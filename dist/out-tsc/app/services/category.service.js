import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
// Este decorador permite que el servicio sea inyectable en otros componentes/servicios
let CategoryService = class CategoryService {
    // Inyección de dependencias: HttpClient para realizar peticiones HTTP
    constructor(http) {
        this.http = http;
        // URL base para las peticiones a la API de categorías, obtenida del archivo de entorno
        this.apiUrl = `${environment.apiUrl}/categorias`;
    }
    // Método para obtener todas las categorías
    // Devuelve un Observable que emitirá un array de categorías
    getCategories() {
        // Realiza una petición GET a la API y castea la respuesta a un array de Categoria
        return this.http.get(this.apiUrl);
    }
    // Método para obtener una categoría específica por su ID
    getCategory(id) {
        // Construye la URL para la categoría específica añadiendo el ID
        return this.http.get(`${this.apiUrl}/${id}`);
    }
    // Método para añadir una nueva categoría
    // Recibe un objeto Categoria y devuelve la categoría creada con su ID asignado
    addCategory(category) {
        // Realiza una petición POST enviando los datos de la categoría
        return this.http.post(this.apiUrl, category);
    }
    // Método para actualizar una categoría existente
    // Recibe un objeto Categoria con los datos actualizados, incluyendo el ID de la categoría a actualizar
    updateCategory(category) {
        // Realiza una petición PUT con los datos actualizados a la URL específica de esa categoría
        return this.http.put(`${this.apiUrl}/${category.id}`, category);
    }
    // Método para eliminar una categoría
    // Recibe el ID de la categoría a eliminar
    deleteCategory(id) {
        // Realiza una petición DELETE para la categoría con el ID especificado
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
};
CategoryService = __decorate([
    Injectable({
        providedIn: 'root' // Hace que este servicio esté disponible a nivel global en la aplicación
    })
], CategoryService);
export { CategoryService };
//# sourceMappingURL=category.service.js.map