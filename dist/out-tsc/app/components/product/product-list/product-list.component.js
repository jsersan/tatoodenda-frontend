import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ProductListComponent = class ProductListComponent {
    constructor(route, // Para acceder a los parámetros de la ruta
    productService, // Para obtener productos
    categoryService // Para obtener datos de la categoría
    ) {
        this.route = route;
        this.productService = productService;
        this.categoryService = categoryService;
        // Array para almacenar los productos a mostrar
        this.products = [];
        // Propiedad para almacenar la categoría actual
        this.currentCategory = null;
        // Propiedad para almacenar el ID de categoría (de la URL)
        this.categoryId = null;
    }
    ngOnInit() {
        // Suscribirse a los cambios en los parámetros de la ruta
        this.route.params.subscribe({
            next: (params) => {
                // Si hay un parámetro 'id', es una categoría específica
                if (params['id']) {
                    this.categoryId = +params['id']; // Convertir a número
                    this.loadCategoryDetails();
                    this.loadProductsByCategory();
                }
                else {
                    // Sin parámetro 'id', mostrar todos los productos
                    this.categoryId = null;
                    this.currentCategory = null;
                    this.loadAllProducts();
                }
            }
        });
    }
    // Método para cargar los detalles de la categoría actual
    loadCategoryDetails() {
        if (this.categoryId) {
            this.categoryService.getCategory(this.categoryId).subscribe({
                next: (category) => {
                    this.currentCategory = category;
                },
                error: (error) => console.error('Error loading category details', error)
            });
        }
    }
    // Método para cargar productos filtrados por categoría
    loadProductsByCategory() {
        if (this.categoryId) {
            this.productService.getProductsByCategory(this.categoryId).subscribe({
                next: (products) => {
                    this.products = products;
                },
                error: (error) => console.error('Error loading products by category', error)
            });
        }
    }
    // Método para cargar todos los productos (sin filtro)
    loadAllProducts() {
        this.productService.getProducts().subscribe({
            next: (products) => {
                this.products = products;
            },
            error: (error) => console.error('Error loading all products', error)
        });
    }
    // Método para formatear precio como moneda
    formatPrice(price) {
        return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(price);
    }
};
ProductListComponent = __decorate([
    Component({
        selector: 'app-product-list',
        templateUrl: './product-list.component.html',
        styleUrls: []
    })
], ProductListComponent);
export { ProductListComponent };
//# sourceMappingURL=product-list.component.js.map