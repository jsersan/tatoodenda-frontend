import { __decorate } from "tslib";
// Importaciones desde Angular Core
import { Component } from '@angular/core';
// Importación de SweetAlert para notificaciones
import Swal from 'sweetalert2';
let ProductDetailComponent = class ProductDetailComponent {
    // Constructor con inyección de dependencias
    constructor(route, // Para acceder a los parámetros de la URL
    productService, // Para obtener los datos del producto
    cartService // Para añadir productos al carrito
    ) {
        this.route = route;
        this.productService = productService;
        this.cartService = cartService;
        // Propiedad para almacenar los datos del producto actual
        this.product = null;
        // Propiedad para almacenar los colores disponibles del producto
        this.colors = [];
        // Propiedad para almacenar el color seleccionado por el usuario
        this.selectedColor = '';
        // Propiedad para almacenar la cantidad seleccionada por el usuario
        this.quantity = 1;
    }
    // Método que se ejecuta cuando se inicializa el componente
    ngOnInit() {
        // Suscripción a los cambios en los parámetros de la ruta
        this.route.params.subscribe({
            next: (params) => {
                // Extraer el ID del producto de los parámetros
                const productId = +params['id']; // El + convierte el string a número
                // Cargar los datos del producto con ese ID
                this.loadProduct(productId);
            }
        });
    }
    // Método para cargar los datos de un producto específico
    loadProduct(id) {
        // Llamar al servicio para obtener los detalles del producto
        this.productService.getProduct(id).subscribe({
            next: (product) => {
                // Almacenar el producto obtenido
                this.product = product;
                // Cargar los colores disponibles para este producto
                this.loadProductColors(id);
            },
            error: (error) => console.error('Error loading product', error)
        });
    }
    // Método para cargar los colores disponibles para un producto
    loadProductColors(productId) {
        // Llamar al servicio para obtener los colores
        this.productService.getProductColors(productId).subscribe({
            next: (colors) => this.colors = colors,
            error: (error) => console.error('Error loading product colors', error)
        });
    }
    // Método para cambiar el color seleccionado y actualizar la imagen mostrada
    changeColor(color, imagePath) {
        // Actualizar el color seleccionado
        this.selectedColor = color;
        // Actualizar la imagen del producto en la UI para mostrar el color seleccionado
        const imgElement = document.getElementById('imgart');
        if (imgElement) {
            imgElement.src = imagePath;
        }
    }
    // Método para incrementar la cantidad
    incrementQuantity() {
        this.quantity++;
    }
    // Método para decrementar la cantidad (mínimo 1)
    decrementQuantity() {
        if (this.quantity > 1) {
            this.quantity--;
        }
    }
    // Método para añadir el producto al carrito
    addToCart() {
        // Verificar que hay un producto cargado
        if (!this.product)
            return;
        // Verificar que se ha seleccionado un color si hay colores disponibles
        if (!this.selectedColor && this.colors.length > 0) {
            // Mostrar alerta de error si no se seleccionó color
            Swal.fire({
                title: 'Selecciona un color',
                icon: 'error',
                confirmButtonColor: '#52667a'
            });
            return;
        }
        // Crear el objeto CartItem con los datos seleccionados
        const cartItem = {
            id: this.product.id,
            nombre: this.product.nombre,
            precio: this.product.precio,
            color: this.selectedColor,
            cantidad: this.quantity,
            imagen: `assets/images/${this.product.carpetaimg}/${this.getColorImage() || this.product.imagen}`
        };
        // Añadir el item al carrito usando el servicio
        this.cartService.addToCart(cartItem);
        // Mostrar confirmación al usuario
        Swal.fire({
            title: 'Producto añadido al carrito',
            icon: 'success',
            confirmButtonColor: '#52667a'
        });
    }
    // Método auxiliar para obtener la imagen correspondiente al color seleccionado
    getColorImage() {
        // Buscar la información del color seleccionado
        const colorInfo = this.colors.find(c => c.color === this.selectedColor);
        // Devolver el nombre de la imagen o cadena vacía si no se encuentra
        return colorInfo ? colorInfo.imagen : '';
    }
};
ProductDetailComponent = __decorate([
    Component({
        selector: 'app-product-detail',
        templateUrl: './product-detail.component.html',
        styleUrls: []
    })
], ProductDetailComponent);
export { ProductDetailComponent };
//# sourceMappingURL=product-detail.component.js.map