import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HomeComponent = class HomeComponent {
    // Constructor del componente donde inyectamos las dependencias
    constructor(productService) {
        this.productService = productService;
        // Array para almacenar todos los productos
        this.products = [];
        // Array para almacenar los productos aleatorios que se mostrarán
        this.randomProducts = [];
        // Indicador de carga
        this.loading = false;
    }
    // Método de ciclo de vida que se ejecuta cuando Angular ha terminado de inicializar el componente
    ngOnInit() {
        // Cargamos la lista de productos
        this.loadProducts();
    }
    // Método para cargar productos desde el servicio y seleccionar aleatorios
    loadProducts() {
        this.loading = true;
        console.log('HomeComponent: Cargando productos...');
        this.productService.getProducts().subscribe({
            next: (products) => {
                this.products = products;
                console.log('HomeComponent: Productos cargados:', products);
                // Seleccionar productos aleatorios
                this.selectRandomProducts();
                this.loading = false;
            },
            error: (error) => {
                console.error('HomeComponent: Error loading products', error);
                this.loading = false;
            }
        });
    }
    // Método para seleccionar productos aleatorios
    selectRandomProducts() {
        // Crear una copia del array original para no modificarlo
        const productsCopy = [...this.products];
        this.randomProducts = [];
        // Determinar cuántos productos seleccionar (8 o menos si no hay suficientes)
        const numToSelect = Math.min(8, productsCopy.length);
        // Seleccionar productos aleatorios
        for (let i = 0; i < numToSelect; i++) {
            // Generar un índice aleatorio
            const randomIndex = Math.floor(Math.random() * productsCopy.length);
            // Añadir el producto al array de aleatorios
            this.randomProducts.push(productsCopy[randomIndex]);
            // Eliminar el producto seleccionado para no repetirlo
            productsCopy.splice(randomIndex, 1);
        }
        console.log('HomeComponent: Productos aleatorios seleccionados:', this.randomProducts);
    }
    // Método para abrir el popup del producto - CLAVE PARA SOLUCIONAR EL PROBLEMA
    openProductPopup(product, event) {
        // Prevenir la navegación por defecto que causaría el router-link
        event.preventDefault();
        event.stopPropagation();
        console.log('HomeComponent: Abriendo popup para producto:', product.nombre);
        // Usar el servicio para mostrar el popup en lugar de navegar a la página de detalle
        this.productService.selectProductForPopup(product);
    }
    // Método para formatear el precio 
    formatPrice(price) {
        return new Intl.NumberFormat('es-ES', {
            style: 'currency',
            currency: 'EUR'
        }).format(price);
    }
};
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        standalone: false
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map