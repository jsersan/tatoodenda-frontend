import { __decorate } from "tslib";
// Importamos los decoradores y clases necesarias desde Angular
import { Component } from '@angular/core';
let NavbarComponent = class NavbarComponent {
    // Constructor con inyección de dependencias
    constructor(categoryService, // Para obtener las categorías
    authService, // Para manejar la autenticación
    cartService, // Para interactuar con el carrito
    router // Para la navegación programática
    ) {
        this.categoryService = categoryService;
        this.authService = authService;
        this.cartService = cartService;
        this.router = router;
        // Array para almacenar las categorías de productos
        this.categories = [];
        // Variable para almacenar los datos del usuario actual, si está logueado
        this.currentUser = null;
        // Variable para almacenar el término de búsqueda ingresado por el usuario
        this.searchTerm = '';
        // Variable para almacenar el número de items en el carrito
        this.cartItemCount = 0;
    }
    // Método del ciclo de vida que se ejecuta cuando se inicializa el componente
    ngOnInit() {
        // Cargar las categorías desde el backend
        this.loadCategories();
        // Suscribirse al observable currentUser para detectar cambios en el estado de autenticación
        this.authService.currentUser.subscribe({
            next: (user) => this.currentUser = user
        });
        // Suscribirse al observable cartItems para detectar cambios en el carrito
        this.cartService.cartItems.subscribe({
            next: (items) => this.cartItemCount = this.cartService.getCartItemCount()
        });
    }
    // Método para cargar las categorías desde el servicio
    loadCategories() {
        this.categoryService.getCategories().subscribe({
            next: (categories) => this.categories = categories,
            error: (error) => console.error('Error loading categories', error)
        });
    }
    // Método para procesar la búsqueda cuando el usuario la envía
    search() {
        // Verificar que el término de búsqueda no esté vacío
        if (this.searchTerm.trim()) {
            // Navegar a la página de resultados de búsqueda con el término como parámetro
            this.router.navigate(['/search'], {
                queryParams: { term: this.searchTerm }
            });
        }
    }
    // Método para cerrar sesión
    logout() {
        this.authService.logout();
    }
    // Método para verificar si el usuario actual es administrador
    isAdmin() {
        return this.authService.isAdmin();
    }
    // Método para obtener solo las categorías principales (padre = id)
    getMainCategories() {
        return this.categories.filter(cat => cat.id === cat.padre);
    }
    // Método para obtener subcategorías de una categoría principal
    getSubcategories(categoryId) {
        return this.categories.filter(cat => cat.padre === categoryId && cat.id !== cat.padre);
    }
};
NavbarComponent = __decorate([
    Component({
        // Selector que se usará para insertar este componente en otras plantillas
        selector: 'app-navbar',
        // Ruta a la plantilla HTML
        templateUrl: './navbar.component.html',
        // Ruta a los estilos específicos de este componente
        styleUrls: ['./navbar.component.scss']
    })
], NavbarComponent);
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map