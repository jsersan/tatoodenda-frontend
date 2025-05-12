import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import Swal from 'sweetalert2';
let ProductManagerComponent = class ProductManagerComponent {
    constructor(formBuilder, productService, categoryService) {
        this.formBuilder = formBuilder;
        this.productService = productService;
        this.categoryService = categoryService;
        // Arrays para almacenar datos
        this.products = [];
        this.categories = [];
        // Flags y variables de estado
        this.showEditForm = false;
        this.editingProduct = null;
        // Variables para manejar colores y subida de imágenes
        this.selectedFiles = [];
        this.productColors = [];
        // Inicializar formulario para nuevos productos
        this.newProductForm = this.formBuilder.group({
            nombre: ['', Validators.required],
            descripcion: ['', Validators.required],
            precio: ['', [Validators.required, Validators.min(0)]],
            categoria: ['', Validators.required],
            carpetaimg: ['', Validators.required]
        });
        // Inicializar formulario para edición de productos
        this.editProductForm = this.formBuilder.group({
            id: [''],
            nombre: ['', Validators.required],
            descripcion: ['', Validators.required],
            precio: ['', [Validators.required, Validators.min(0)]],
            categoria: ['', Validators.required]
        });
    }
    ngOnInit() {
        // Cargar productos y categorías al inicializar
        this.loadProducts();
        this.loadCategories();
    }
    // Método para cargar todos los productos
    loadProducts() {
        this.productService.getProducts().subscribe({
            next: (products) => this.products = products,
            error: (error) => console.error('Error loading products', error)
        });
    }
    // Método para cargar categorías (solo subcategorías)
    loadCategories() {
        this.categoryService.getCategories().subscribe({
            next: (categories) => {
                // Filtrar solo categorías que no son padres (subcategorías)
                this.categories = categories.filter(cat => cat.id !== cat.padre);
            },
            error: (error) => console.error('Error loading categories', error)
        });
    }
    // Método para manejar la selección de archivos
    onFileSelect(event) {
        this.selectedFiles = Array.from(event.target.files);
    }
    // Método para añadir un nuevo producto
    addProduct() {
        // Validar formulario
        if (this.newProductForm.invalid) {
            Swal.fire({
                title: 'Debes rellenar todos los campos del formulario',
                icon: 'error',
                confirmButtonColor: '#52667a'
            });
            return;
        }
        // Obtener datos del formulario
        const newProduct = this.newProductForm.value;
        // Llamar al servicio para crear producto
        this.productService.addProduct(newProduct).subscribe({
            next: (createdProduct) => {
                // Si hay archivos seleccionados, subirlos ahora
                if (this.selectedFiles.length > 0) {
                    this.productService.uploadProductImages(createdProduct.id, this.selectedFiles).subscribe({
                        next: (result) => {
                            // Mostrar mensaje de éxito y resetear formulario
                            Swal.fire({
                                title: 'El producto y sus imágenes se han añadido con éxito',
                                icon: 'success',
                                confirmButtonColor: '#52667a'
                            });
                            this.newProductForm.reset();
                            this.selectedFiles = []; // Limpiar los archivos seleccionados
                            this.loadProducts();
                        },
                        error: (error) => {
                            console.error('Error uploading images', error);
                            // Producto creado pero hubo un error con las imágenes
                            Swal.fire({
                                title: 'El producto se ha creado pero hubo un problema al subir las imágenes',
                                icon: 'warning',
                                confirmButtonColor: '#52667a'
                            });
                            this.newProductForm.reset();
                            this.loadProducts();
                        }
                    });
                }
                else {
                    // No hay imágenes para subir, solo mostrar mensaje de éxito
                    Swal.fire({
                        title: 'El producto se ha añadido con éxito',
                        icon: 'success',
                        confirmButtonColor: '#52667a'
                    });
                    this.newProductForm.reset();
                    this.loadProducts();
                }
            },
            error: (error) => {
                // Mostrar mensaje de error
                Swal.fire({
                    title: 'Error al añadir el producto',
                    icon: 'error',
                    confirmButtonColor: '#52667a'
                });
            }
        });
    }
    // Método para preparar la edición de un producto
    editProduct(product) {
        this.editingProduct = product;
        this.editProductForm.setValue({
            id: product.id,
            nombre: product.nombre,
            descripcion: product.descripcion,
            precio: product.precio,
            categoria: product.categoria
        });
        this.showEditForm = true;
    }
    // Método para actualizar un producto
    updateProduct() {
        if (this.editProductForm.invalid)
            return;
        // Combinar datos del producto original con los cambios
        const updatedProduct = {
            ...this.editingProduct,
            ...this.editProductForm.value
        };
        // Llamar al servicio para actualizar producto
        this.productService.updateProduct(updatedProduct).subscribe({
            next: (result) => {
                Swal.fire({
                    title: 'El producto se ha actualizado con éxito',
                    icon: 'success',
                    confirmButtonColor: '#52667a'
                });
                this.showEditForm = false;
                this.editingProduct = null;
                this.loadProducts();
            },
            error: (error) => {
                Swal.fire({
                    title: 'Error al actualizar el producto',
                    icon: 'error',
                    confirmButtonColor: '#52667a'
                });
            }
        });
    }
    // Método para eliminar un producto
    deleteProduct(id) {
        // Pedir confirmación al usuario
        Swal.fire({
            title: '¿Estás seguro de eliminar este producto?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#52667a',
            cancelButtonColor: '#52667a',
            confirmButtonText: 'Borrar el producto',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                // Usuario confirmó, proceder con eliminación
                this.productService.deleteProduct(id).subscribe({
                    next: () => {
                        Swal.fire({
                            title: 'El producto se ha eliminado con éxito',
                            icon: 'success',
                            confirmButtonColor: '#52667a'
                        });
                        this.loadProducts();
                    },
                    error: (error) => {
                        Swal.fire({
                            title: 'Error al eliminar el producto',
                            icon: 'error',
                            confirmButtonColor: '#52667a'
                        });
                    }
                });
            }
        });
    }
    // Método para cancelar edición
    cancelEdit() {
        this.showEditForm = false;
        this.editingProduct = null;
    }
    // Método para obtener el nombre de una categoría por su ID
    getCategoryName(categoryId) {
        const category = this.categories.find(c => c.id === categoryId);
        return category ? category.nombre : 'Desconocido';
    }
    // Método para formatear precio como moneda
    formatPrice(price) {
        return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(price);
    }
};
ProductManagerComponent = __decorate([
    Component({
        selector: 'app-product-manager',
        templateUrl: './product-manager.component.html',
        styleUrls: []
    })
], ProductManagerComponent);
export { ProductManagerComponent };
//# sourceMappingURL=product-manager.component.js.map