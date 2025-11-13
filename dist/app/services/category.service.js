import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { throwError, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
let CategoryService = class CategoryService {
    constructor(http) {
        this.http = http;
        // Corregido: Usando la ruta correcta
        this.apiUrl = `${environment.apiUrl}/categorias`;
        // Cache para almacenar categorías
        this.categoriesCache = null;
        this.categoryCache = {};
    }
    // Obtener todas las categorías
    getCategories() {
        // Si ya tenemos las categorías en caché, las devolvemos directamente
        if (this.categoriesCache) {
            console.log('Devolviendo categorías desde caché');
            return of(this.categoriesCache);
        }
        console.log('Solicitando categorías desde:', this.apiUrl);
        return this.http.get(this.apiUrl).pipe(tap(categories => {
            console.log('Categorías obtenidas del servidor:', categories);
            // Guardar en caché para futuras solicitudes
            this.categoriesCache = categories;
        }), catchError(error => this.handleError(error)));
    }
    // Obtener una categoría específica por ID
    getCategory(id) {
        // Si ya tenemos esta categoría en caché, la devolvemos directamente
        if (this.categoryCache[id]) {
            console.log(`Devolviendo categoría ${id} desde caché`);
            return of(this.categoryCache[id]);
        }
        // Si tenemos todas las categorías en caché, buscamos la que necesitamos
        if (this.categoriesCache) {
            const category = this.categoriesCache.find(c => c.id === id);
            if (category) {
                console.log(`Categoría ${id} encontrada en el caché general`);
                this.categoryCache[id] = category; // Guardar en caché individual
                return of(category);
            }
        }
        // Si no está en caché, la solicitamos al servidor
        console.log(`Solicitando categoría ${id} desde: ${this.apiUrl}/${id}`);
        return this.http.get(`${this.apiUrl}/${id}`).pipe(tap(category => {
            console.log(`Categoría ${id} obtenida del servidor:`, category);
            // Guardar en caché para futuras solicitudes
            this.categoryCache[id] = category;
        }), catchError(error => this.handleError(error)));
    }
    // Obtener subcategorías de una categoría específica
    getSubcategories(parentId) {
        // Si ya tenemos todas las categorías en caché, filtramos las subcategorías
        if (this.categoriesCache) {
            const subcategories = this.categoriesCache.filter(c => c.padre === parentId);
            console.log(`Subcategorías de ${parentId} obtenidas de caché:`, subcategories);
            return of(subcategories);
        }
        // Si no tenemos el caché, obtenemos todas las categorías y luego filtramos
        return this.getCategories().pipe(map(categories => {
            const subcategories = categories.filter(c => c.padre === parentId);
            console.log(`Subcategorías de ${parentId}:`, subcategories);
            return subcategories;
        }));
    }
    // Añadir una nueva categoría
    addCategory(category) {
        return this.http.post(this.apiUrl, category).pipe(tap(newCategory => {
            console.log('Nueva categoría añadida:', newCategory);
            // Invalidar caché para que se recarguen los datos
            this.clearCache();
        }), catchError(error => this.handleError(error)));
    }
    // Actualizar una categoría existente
    updateCategory(id, category) {
        return this.http.put(`${this.apiUrl}/${id}`, category).pipe(tap(updatedCategory => {
            console.log(`Categoría ${id} actualizada:`, updatedCategory);
            // Invalidar caché para que se recarguen los datos
            this.clearCache();
        }), catchError(error => this.handleError(error)));
    }
    // Eliminar una categoría
    deleteCategory(id) {
        return this.http.delete(`${this.apiUrl}/${id}`).pipe(tap(() => {
            console.log(`Categoría ${id} eliminada`);
            // Invalidar caché para que se recarguen los datos
            this.clearCache();
        }), catchError(error => this.handleError(error)));
    }
    // Limpiar caché
    clearCache() {
        this.categoriesCache = null;
        this.categoryCache = {};
        console.log('Caché de categorías limpiado');
    }
    // Método para manejar errores que retorna un Observable
    handleError(error) {
        console.error('Error en CategoryService:', error);
        return throwError(() => error);
    }
};
CategoryService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CategoryService);
export { CategoryService };
//# sourceMappingURL=category.service.js.map