import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
let OrderLineComponent = class OrderLineComponent {
    // Constructor con inyección de servicios
    constructor(productService) {
        this.productService = productService;
        // Evento para notificar al componente padre cuando se elimina la línea
        this.removeLine = new EventEmitter();
        // Evento para notificar al componente padre cuando se actualiza la cantidad
        this.updateQuantity = new EventEmitter();
        // Propiedad para la imagen del producto
        this.productImage = '';
        // Propiedad para el precio del producto
        this.productPrice = 0;
    }
    // Método para eliminar la línea
    ngOnInit() {
        // Si tenemos el id del producto, cargamos su imagen y datos
        if (this.line.idprod) {
            this.loadProductData();
        }
        // Log para depuración
        console.log('OrderLine inicializado con:', this.line);
    }
    // Método para cargar los datos del producto (imagen y precio)
    loadProductData() {
        this.productService.getProduct(this.line.idprod).subscribe({
            next: (product) => {
                if (product) {
                    // Guardamos la imagen
                    if (product.imagen) {
                        this.productImage = product.imagen;
                    }
                    else {
                        this.productImage = 'assets/images/products/default.jpg';
                    }
                    // Guardamos el precio
                    if (product.precio) {
                        this.productPrice = product.precio;
                    }
                }
                else {
                    // Imagen por defecto si no existe el producto
                    this.productImage = 'assets/images/products/default.jpg';
                }
            },
            error: (error) => {
                console.error('Error loading product data', error);
                // Imagen por defecto en caso de error
                this.productImage = 'assets/images/products/default.jpg';
            }
        });
    }
    removeOrderLine() {
        Swal.fire({
            title: '¿Estás seguro?',
            text: 'Esta acción eliminará el producto de tu pedido',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#52667a',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                this.removeLine.emit(this.line);
            }
        });
    }
    // Método para incrementar la cantidad
    incrementQuantity() {
        const newQuantity = this.line.cantidad + 1;
        this.updateQuantity.emit({ line: this.line, newQuantity });
    }
    // Método para decrementar la cantidad
    decrementQuantity() {
        if (this.line.cantidad > 1) {
            const newQuantity = this.line.cantidad - 1;
            this.updateQuantity.emit({ line: this.line, newQuantity });
        }
        else {
            // Si intenta reducir a 0, preguntamos si quiere eliminar
            this.removeOrderLine();
        }
    }
    // Método para manejar cambios directos en el campo de cantidad
    onQuantityChange(event) {
        const input = event.target;
        const newQuantity = parseInt(input.value, 10);
        // Validar la cantidad
        if (isNaN(newQuantity) || newQuantity < 1) {
            // Restaurar el valor anterior
            input.value = this.line.cantidad.toString();
            return;
        }
        // Emitir el evento de actualización
        this.updateQuantity.emit({ line: this.line, newQuantity });
    }
};
__decorate([
    Input()
], OrderLineComponent.prototype, "line", void 0);
__decorate([
    Output()
], OrderLineComponent.prototype, "removeLine", void 0);
__decorate([
    Output()
], OrderLineComponent.prototype, "updateQuantity", void 0);
OrderLineComponent = __decorate([
    Component({
        selector: 'app-orderline',
        templateUrl: './orderline.component.html',
        styleUrls: ['./orderline.component.scss'],
        standalone: false
    })
], OrderLineComponent);
export { OrderLineComponent };
//# sourceMappingURL=orderline.component.js.map