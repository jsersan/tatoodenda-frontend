import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
let ProductListComponent = class ProductListComponent {
    constructor(route, router, productService, categoryService, sanitizer) {
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.categoryService = categoryService;
        this.sanitizer = sanitizer;
        // Array para almacenar los productos a mostrar
        this.products = [];
        // Propiedad para almacenar la categoría actual
        this.currentCategory = null;
        // Propiedad para almacenar el ID de categoría (de la URL)
        this.categoryId = null;
        // Variable para mostrar estado de carga
        this.loading = false;
        // Variable para identificar si estamos en la vista "Ver Todo"
        this.isViewAll = false;
        // Detectar cambios de ruta para recargar productos cuando cambia la URL
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(() => {
            this.checkRouteAndLoadProducts();
        });
    }
    ngOnInit() {
        this.checkRouteAndLoadProducts();
    }
    // Método implementado correctamente para abrir el popup del producto
    openProductPopup(product, event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.productService.setSelectedProduct(product);
    }
    // Método para verificar la ruta actual y cargar los productos correspondientes
    checkRouteAndLoadProducts() {
        // Verificar si estamos en la ruta "ver-todo"
        if (this.router.url === '/ver-todo') {
            console.log('Estamos en Ver Todo - cargando todos los productos');
            this.isViewAll = true;
            this.categoryId = null;
            this.currentCategory = null;
            this.loadAllProducts();
        }
        else {
            // También obtener datos de la ruta para compatibilidad con data: { isViewAll: true }
            const routeData = this.route.snapshot.data;
            if (routeData && routeData['isViewAll']) {
                console.log('Detectado isViewAll en los datos de la ruta');
                this.isViewAll = true;
                this.categoryId = null;
                this.currentCategory = null;
                this.loadAllProducts();
            }
            else {
                this.isViewAll = false;
                const params = this.route.snapshot.params;
                if (params['id']) {
                    this.categoryId = +params['id'];
                    this.loadCategoryDetails();
                    this.loadProductsByCategory();
                }
                else if (this.router.url === '/') {
                    // En la página principal, cargar productos destacados o novedades
                    this.categoryId = null;
                    this.currentCategory = null;
                    this.loadFeaturedProducts();
                }
            }
        }
    }
    // Método para cargar los detalles de la categoría actual
    loadCategoryDetails() {
        this.loading = true;
        if (this.categoryId) {
            this.categoryService.getCategory(this.categoryId).subscribe({
                next: (category) => {
                    this.currentCategory = category;
                    // console.log('Categoría cargada:', category);
                    this.loading = false;
                },
                error: (error) => {
                    // console.error('Error al cargar detalles de categoría:', error);
                    this.loading = false;
                }
            });
        }
    }
    // Método para cargar productos filtrados por categoría
    loadProductsByCategory() {
        this.loading = true;
        this.products = [];
        if (this.categoryId !== null && this.categoryId !== undefined) {
            // console.log('Cargando productos para categoría ID:', this.categoryId);
            this.productService.getProductsByCategory(this.categoryId).subscribe({
                next: (products) => {
                    if (Array.isArray(products) && products.length > 0) {
                        this.products = products;
                        // console.log('Productos cargados para categoría:', products);
                    }
                    else {
                        this.products = [];
                        // console.log('No se encontraron productos para esta categoría');
                    }
                    this.loading = false;
                },
                error: (error) => {
                    // console.error(`Error al cargar productos para categoría ${this.categoryId}:`, error);
                    this.products = [];
                    this.loading = false;
                }
            });
        }
        else {
            this.loading = false;
        }
    }
    // Método para cargar todos los productos (para la vista "Ver Todo")
    loadAllProducts() {
        this.loading = true;
        // console.log('Cargando TODOS los productos para Ver Todo...');
        this.productService.getProducts().subscribe({
            next: (products) => {
                this.products = products;
                // console.log('Todos los productos cargados:', products);
                this.loading = false;
            },
            error: (error) => {
                // console.error('Error al cargar todos los productos:', error);
                this.products = [];
                this.loading = false;
            }
        });
    }
    // Método para cargar productos destacados (para Home)
    loadFeaturedProducts() {
        this.loading = true;
        // console.log('Cargando productos destacados para Home...');
        // Puedes ajustar esto según cómo quieras mostrar productos en la página principal
        this.productService.getFeaturedProducts().subscribe({
            next: (products) => {
                this.products = products;
                // console.log('Productos destacados cargados:', products);
                this.loading = false;
            },
            error: (error) => {
                // console.error('Error al cargar productos destacados:', error);
                // Como alternativa, cargar algunos productos aleatorios
                this.loadSomeProducts();
            }
        });
    }
    // Método alternativo para cargar algunos productos (por si falla getFeaturedProducts)
    loadSomeProducts() {
        this.productService.getProducts().subscribe({
            next: (products) => {
                // Tomar solo algunos productos para mostrar (por ejemplo, 8)
                this.products = products.slice(0, 8);
                this.loading = false;
            },
            error: (error) => {
                console.error('Error al cargar productos:', error);
                this.products = [];
                this.loading = false;
            }
        });
    }
    // Método para formatear precio como moneda
    formatPrice(price) {
        return new Intl.NumberFormat('es-ES', {
            style: 'currency',
            currency: 'EUR'
        }).format(price);
    }
    // Método para manejar errores de carga de imágenes
    handleImageError(event) {
        const img = event.target;
        const originalSrc = img.src;
        console.error(`Error al cargar imagen: ${originalSrc}`);
        // Usar directamente la imagen por defecto en la raíz
        img.src = 'assets/images/default.jpg';
        img.onerror = null; // Prevenir bucles infinitos
    }
};
ProductListComponent = __decorate([
    Component({
        selector: 'app-product-list',
        templateUrl: './product-list.component.html',
        styleUrls: [],
        standalone: false
    })
], ProductListComponent);
export { ProductListComponent };
//# sourceMappingURL=product-list.component.js.map