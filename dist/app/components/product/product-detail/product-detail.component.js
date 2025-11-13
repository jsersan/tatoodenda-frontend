import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ProductDetailComponent = class ProductDetailComponent {
    constructor(route, productService, cartService) {
        this.route = route;
        this.productService = productService;
        this.cartService = cartService;
        // Datos del producto
        this.product = null;
        // Opciones de producto
        this.colors = [];
        this.sizes = [];
        // Selecciones actuales
        this.selectedColor = '';
        this.selectedSize = '';
        this.quantity = 1;
        // Estado de carga
        this.loading = true;
        // Variable para controlar la visibilidad del popup
        this.showPopup = false;
        // Imágenes
        this.currentImageIndex = 0;
        this.relatedProducts = [];
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            const productId = +params['id'];
            this.loadProductDetails(productId);
            this.loadProductColors(productId);
            this.loadRelatedProducts(productId);
        });
    }
    // Cargar detalles del producto
    loadProductDetails(productId) {
        this.loading = true;
        this.productService.getProduct(productId).subscribe({
            next: (product) => {
                this.product = product;
                this.loading = false;
            },
            error: (error) => {
                console.error('Error loading product details', error);
                this.loading = false;
            }
        });
    }
    // Cargar colores disponibles
    loadProductColors(productId) {
        this.productService.getProductColors(productId).subscribe({
            next: (colors) => (this.colors = colors),
            error: (error) => console.error('Error loading product colors', error)
        });
    }
    // Cargar productos relacionados
    loadRelatedProducts(productId) {
        this.productService.getProducts().subscribe({
            next: (products) => {
                this.relatedProducts = products
                    .filter(p => p.id !== productId)
                    .slice(0, 4);
            },
            error: (error) => console.error('Error loading related products', error)
        });
    }
    // Método para obtener la ruta de la imagen del producto
    getImagePath(product, color) {
        if (!product) {
            return this.productService.defaultImage; // Usar imagen por defecto
        }
        return this.productService.getProductImageSrc(product);
    }
    // Método para cambiar el color del producto
    changeColor(colorCode) {
        this.selectedColor = colorCode;
    }
    // Método para formatear el precio
    formatPrice(price) {
        if (price === undefined)
            return '€0.00';
        return new Intl.NumberFormat('es-ES', {
            style: 'currency',
            currency: 'EUR'
        }).format(price);
    }
    // Cambiar imagen actual
    changeImage(index) {
        this.currentImageIndex = index;
    }
    // Cambiar tamaño seleccionado
    selectSize(size) {
        this.selectedSize = size;
    }
    // Incrementar cantidad
    incrementQuantity() {
        this.quantity++;
    }
    // Decrementar cantidad
    decrementQuantity() {
        if (this.quantity > 1) {
            this.quantity--;
        }
    }
    // Cerrar popup del producto
    closeProductPopup() {
        this.showPopup = false;
    }
    // Abrir popup del producto
    openProductPopup() {
        this.showPopup = true;
    }
    // Añadir al carrito
    addToCart() {
        if (this.product) {
            this.cartService.addToCart(this.product, this.quantity, this.selectedColor, this.selectedSize);
        }
    }
};
ProductDetailComponent = __decorate([
    Component({
        selector: 'app-product-detail',
        templateUrl: './product-detail.component.html',
        // Eliminamos la referencia al archivo SCSS si no existe
        styleUrls: [],
        standalone: false
    })
], ProductDetailComponent);
export { ProductDetailComponent };
//# sourceMappingURL=product-detail.component.js.map