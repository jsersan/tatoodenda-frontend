import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let ProductManagerComponent = class ProductManagerComponent {
    constructor(fb, productService, categoryService) {
        this.fb = fb;
        this.productService = productService;
        this.categoryService = categoryService;
        // Listados
        this.products = [];
        this.categories = [];
        // Control de UI
        this.loading = false;
        this.submitting = false;
        this.showEditForm = false; // Cambiado de editMode
        this.currentProductId = null;
        // Control de imágenes
        this.selectedFiles = [];
        this.previewUrls = [];
        // Inicializar formularios
        this.newProductForm = this.fb.group({
            nombre: ['', [Validators.required, Validators.minLength(3)]],
            descripcion: ['', Validators.required],
            precio: [0, [Validators.required, Validators.min(0.01)]],
            stock: [0, [Validators.required, Validators.min(0)]],
            categoryId: [null, Validators.required]
        });
        this.editProductForm = this.fb.group({
            nombre: ['', [Validators.required, Validators.minLength(3)]],
            descripcion: ['', Validators.required],
            precio: [0, [Validators.required, Validators.min(0.01)]],
            stock: [0, [Validators.required, Validators.min(0)]],
            categoryId: [null, Validators.required]
        });
    }
    ngOnInit() {
        this.loadProducts();
        this.loadCategories();
    }
    // Cargar todos los productos
    loadProducts() {
        this.loading = true;
        this.productService.getProducts().subscribe({
            next: (products) => {
                this.products = products;
                this.loading = false;
            },
            error: (error) => {
                console.error('Error al cargar productos:', error);
                this.loading = false;
            }
        });
    }
    // Cargar categorías para el selector de formulario
    loadCategories() {
        this.categoryService.getCategories().subscribe({
            next: (categories) => {
                this.categories = categories;
            },
            error: (error) => {
                console.error('Error al cargar categorías:', error);
            }
        });
    }
    // Manejar subida de imágenes (cambiado a onFileSelect para coincidir con HTML)
    onFileSelect(event) {
        const input = event.target;
        if (input.files) {
            this.selectedFiles = Array.from(input.files);
            this.previewUrls = [];
            this.selectedFiles.forEach(file => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.previewUrls.push(e.target.result);
                };
                reader.readAsDataURL(file);
            });
        }
    }
    // Método para añadir un nuevo producto (cambiado a addProduct para coincidir con HTML)
    addProduct() {
        if (this.newProductForm.invalid) {
            return;
        }
        this.submitting = true;
        const newProduct = this.newProductForm.value;
        this.productService.addProduct(newProduct).subscribe({
            next: (createdProduct) => {
                console.log('Producto creado:', createdProduct);
                // Si hay archivos seleccionados, subir imágenes
                if (this.selectedFiles.length > 0) {
                    this.productService.uploadProductImages(createdProduct.id, this.selectedFiles).subscribe({
                        next: (result) => {
                            console.log('Imágenes subidas:', result);
                            this.resetForm();
                            this.loadProducts();
                            this.submitting = false;
                        },
                        error: (error) => {
                            console.error('Error al subir imágenes:', error);
                            // Aún consideramos que el producto se creó correctamente
                            this.resetForm();
                            this.loadProducts();
                            this.submitting = false;
                        }
                    });
                }
                else {
                    // Si no hay imágenes, simplemente terminamos
                    this.resetForm();
                    this.loadProducts();
                    this.submitting = false;
                }
            },
            error: (error) => {
                console.error('Error al crear producto:', error);
                this.submitting = false;
            }
        });
    }
    // Resetear formulario y selección de archivos
    resetForm() {
        this.newProductForm.reset({
            nombre: '',
            descripcion: '',
            precio: 0,
            stock: 0,
            categoryId: null
        });
        this.selectedFiles = [];
        this.previewUrls = [];
    }
    // Cargar datos en el formulario de edición
    editProduct(product) {
        this.currentProductId = product.id;
        this.showEditForm = true; // Cambiado de editMode
        this.editProductForm.setValue({
            nombre: product.nombre,
            descripcion: product.descripcion,
            precio: product.precio,
            stock: product.stock,
            categoryId: product.categoria_id
        });
    }
    // Actualizar un producto existente (cambiado a updateProduct para coincidir con HTML)
    updateProduct() {
        if (this.editProductForm.invalid || !this.currentProductId) {
            return;
        }
        this.submitting = true;
        const productId = this.currentProductId;
        const updatedProduct = this.editProductForm.value;
        this.productService.updateProduct(productId, updatedProduct).subscribe({
            next: (result) => {
                console.log('Producto actualizado:', result);
                this.showEditForm = false; // Cambiado de editMode
                this.currentProductId = null;
                this.loadProducts();
                this.submitting = false;
            },
            error: (error) => {
                console.error('Error al actualizar producto:', error);
                this.submitting = false;
            }
        });
    }
    // Cancelar edición
    cancelEdit() {
        this.showEditForm = false; // Cambiado de editMode
        this.currentProductId = null;
        this.editProductForm.reset();
    }
    // Eliminar un producto
    deleteProduct(id) {
        if (confirm('¿Estás seguro que deseas eliminar este producto? Esta acción no se puede deshacer.')) {
            this.loading = true;
            this.productService.deleteProduct(id).subscribe({
                next: () => {
                    console.log('Producto eliminado correctamente');
                    this.loadProducts();
                },
                error: (error) => {
                    console.error('Error al eliminar producto:', error);
                    this.loading = false;
                }
            });
        }
    }
    // Método para formatear precio como moneda (faltaba según HTML)
    formatPrice(price) {
        return new Intl.NumberFormat('es-ES', {
            style: 'currency',
            currency: 'EUR'
        }).format(price);
    }
    // Método para obtener el nombre de categoría por ID (faltaba según HTML)
    getCategoryName(categoryId) {
        const category = this.categories.find(c => c.id === categoryId);
        return category ? category.nombre : 'Sin categoría';
    }
};
ProductManagerComponent = __decorate([
    Component({
        selector: 'app-product-manager',
        templateUrl: './product-manager.component.html',
        styleUrls: [],
        standalone: false
    })
], ProductManagerComponent);
export { ProductManagerComponent };
//# sourceMappingURL=product-manager.component.js.map