import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SearchResultsComponent = class SearchResultsComponent {
    constructor(route, // Para acceder a los parámetros de consulta de la URL
    productService // Para buscar productos
    ) {
        this.route = route;
        this.productService = productService;
        // Array para almacenar los productos encontrados
        this.products = [];
        // Variable para almacenar el término de búsqueda
        this.searchTerm = '';
        // Variable para controlar el estado de carga
        this.loading = true;
    }
    ngOnInit() {
        // Suscribirse a los cambios en los parámetros de consulta (query parameters)
        this.route.queryParams.subscribe({
            next: (params) => {
                // Obtener el término de búsqueda de los parámetros
                this.searchTerm = params['term'] || '';
                // Si hay un término de búsqueda, buscar productos
                if (this.searchTerm) {
                    this.searchProducts();
                }
                else {
                    // Si no hay término, inicializar con array vacío
                    this.products = [];
                    this.loading = false;
                }
            }
        });
    }
    // Método para buscar productos que coincidan con el término de búsqueda
    searchProducts() {
        this.loading = true;
        // Llamar al servicio para buscar productos
        this.productService.searchProducts(this.searchTerm).subscribe({
            next: (products) => {
                // Almacenar los productos encontrados
                this.products = products;
                this.loading = false;
            },
            error: (error) => {
                console.error('Error searching products', error);
                this.loading = false;
            }
        });
    }
    // Método auxiliar para formatear precios como moneda
    formatPrice(price) {
        return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(price);
    }
};
SearchResultsComponent = __decorate([
    Component({
        selector: 'app-search-results',
        templateUrl: './search-results.component.html',
        styleUrls: []
    })
], SearchResultsComponent);
export { SearchResultsComponent };
//# sourceMappingURL=search-results.component.js.map