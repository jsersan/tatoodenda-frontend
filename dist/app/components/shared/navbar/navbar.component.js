import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
let NavbarComponent = class NavbarComponent {
    constructor(categoryService, authService, cartService, router) {
        this.categoryService = categoryService;
        this.authService = authService;
        this.cartService = cartService;
        this.router = router;
        // Propiedades del componente existentes
        this.isCartOpen = false;
        this.cartItemCount = 0;
        this.categories = [];
        this.currentUser = null;
        this.searchTerm = '';
        // PROPIEDADES PARA LOS POPUPS
        this.showLoginPopup = false;
        this.showRegistroPopup = false;
        this.isUserLoggedIn = false;
        // Suscripciones para evitar memory leaks
        this.userSubscription = new Subscription();
        this.cartSubscription = new Subscription();
    }
    ngOnInit() {
        // Cargar categorías
        this.loadCategories();
        // Suscribirse a cambios en el usuario actual
        this.userSubscription = this.authService.currentUser.subscribe(user => {
            this.currentUser = user;
            this.isUserLoggedIn = !!user;
            console.log('Estado de login actualizado:', this.isUserLoggedIn, user?.username || user?.nombre);
        });
        // Suscribirse a cambios en el carrito
        this.cartSubscription = this.cartService.cart$.subscribe(cart => {
            this.cartItemCount = cart.reduce((total, item) => total + item.cantidad, 0);
        });
        // Limpiar estado del carrito al inicializar
        setTimeout(() => {
            if (this.cartService.isCartOpen) {
                this.cartService.closeCart();
            }
            const cartPopup = document.querySelector('.cart-popup');
            const cartOverlay = document.querySelector('.cart-overlay');
            if (cartPopup)
                cartPopup.classList.remove('active');
            if (cartOverlay)
                cartOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }, 1);
    }
    ngOnDestroy() {
        // Limpiar suscripciones para evitar memory leaks
        this.userSubscription.unsubscribe();
        this.cartSubscription.unsubscribe();
    }
    // ===== MÉTODOS PARA LOS POPUPS DE LOGIN Y REGISTRO =====
    /**
     * Maneja el click en el icono de perfil
     * Si el usuario está logueado, va al perfil. Si no, muestra el popup de login.
     */
    onProfileClick() {
        console.log('Profile clicked. User logged in:', this.isUserLoggedIn);
        if (this.isUserLoggedIn && this.currentUser) {
            // Si está logueado, ir al perfil
            this.router.navigate(['/profile']);
            console.log('Navegando al perfil del usuario:', this.currentUser.username || this.currentUser.nombre);
        }
        else {
            // Si no está logueado, mostrar popup de login
            this.showLoginPopup = true;
            this.showRegistroPopup = false; // Asegurar que registro esté cerrado
            console.log('Mostrando popup de login');
            // Prevenir scroll del body cuando el popup está abierto
            document.body.style.overflow = 'hidden';
        }
    }
    /**
     * Cierra el popup de login
     */
    onCloseLoginPopup() {
        this.showLoginPopup = false;
        console.log('Popup de login cerrado');
        // Restaurar scroll del body
        document.body.style.overflow = 'auto';
    }
    /**
     * Maneja el login exitoso
     */
    onLoginSuccess() {
        this.showLoginPopup = false;
        console.log('Login exitoso - Usuario logueado:', this.currentUser?.username || this.currentUser?.nombre);
        // Restaurar scroll del body
        document.body.style.overflow = 'auto';
        // Opcional: mostrar mensaje de bienvenida
        if (this.currentUser?.nombre || this.currentUser?.username) {
            console.log(`¡Bienvenido/a ${this.currentUser.username || this.currentUser.nombre}!`);
        }
    }
    /**
     * Muestra el popup de registro (desde link "¡Regístrate!" del login)
     */
    mostrarRegistroPopup() {
        this.showRegistroPopup = true;
        this.showLoginPopup = false; // Cerrar login si estaba abierto
        console.log('Mostrando popup de registro');
        // Prevenir scroll del body
        document.body.style.overflow = 'hidden';
    }
    /**
     * Cierra el popup de registro
     */
    onCloseRegistroPopup() {
        this.showRegistroPopup = false;
        console.log('Popup de registro cerrado');
        // Restaurar scroll del body
        document.body.style.overflow = 'auto';
    }
    /**
     * Maneja el registro exitoso
     */
    onRegistroSuccess() {
        this.showRegistroPopup = false;
        console.log('Registro exitoso');
        // Restaurar scroll del body
        document.body.style.overflow = 'auto';
    }
    /**
     * Cambia del popup de registro al popup de login
     */
    switchToLogin() {
        this.showRegistroPopup = false;
        this.showLoginPopup = true;
        console.log('Cambiando de registro a login');
    }
    /**
     * Cambia del popup de login al popup de registro
     */
    switchToRegistro() {
        this.showLoginPopup = false;
        this.showRegistroPopup = true;
        console.log('Cambiando de login a registro');
    }
    // ===== MÉTODOS EXISTENTES (CONSERVADOS) =====
    /**
     * Obtiene el ID de una subcategoría por nombre
     */
    getSubcategoryId(name) {
        const normalizedSearchName = name.toUpperCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
        const category = this.categories.find(cat => {
            const normalizedCatName = cat.nombre.toUpperCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");
            return normalizedCatName === normalizedSearchName;
        });
        // console.log(`Buscando categoría: "${name}" (normalizado: "${normalizedSearchName}")`);
        if (category) {
            // console.log(`Categoría encontrada: ${category.nombre} (ID: ${category.id})`);
        }
        else {
            console.log('Categoría no encontrada. Categorías disponibles:', this.categories.map(c => `${c.nombre} (ID: ${c.id})`));
        }
        return category ? category.id : 0;
    }
    /**
     * Alternar visibilidad del carrito
     */
    toggleCartAndLog() {
        console.log('Cart icon clicked');
        this.cartService.toggleCart();
        console.log('After toggle, cart is open:', this.cartService.isCartOpen);
    }
    /**
     * Carga las categorías desde el servicio
     */
    loadCategories() {
        this.categoryService.getCategories().subscribe({
            next: categories => {
                console.log('✅ Categorías cargadas:', categories);
                this.categories = categories;
            },
            error: error => {
                console.error('❌ Error loading categories', error);
                console.error('   Status:', error.status);
                console.error('   Message:', error.message);
                console.error('   URL:', error.url);
            }
        });
    }
    /**
     * Obtiene la categoría DILATACIONES
     */
    getDilatacionesCategory() {
        return this.categories.find(category => category.nombre.toUpperCase() === 'DILATACIONES');
    }
    /**
     * Obtiene la categoría PIERCINGS
     */
    getPiercingsCategory() {
        return this.categories.find(category => category.nombre.toUpperCase() === 'PIERCINGS');
    }
    /**
     * Obtiene subcategorías para DILATACIONES
     */
    getSubcategoriesForDilataciones() {
        const dilataciones = this.getDilatacionesCategory();
        if (!dilataciones)
            return [];
        const subcategories = this.categories.filter(category => category.padre === dilataciones.id &&
            category.nombre.toUpperCase() !== 'DILATACIONES');
        console.log('Subcategorías de DILATACIONES:', subcategories);
        return subcategories;
    }
    /**
     * Obtiene subcategorías filtradas para DILATACIONES
     */
    getFilteredSubcategoriesForDilataciones() {
        const dilataciones = this.getDilatacionesCategory();
        if (!dilataciones)
            return [];
        const excludedNames = ['EXPANDERS', 'PLUGS', 'TUNELES', 'TÚNELES'];
        return this.categories.filter(category => category.padre === dilataciones.id &&
            !excludedNames.includes(category.nombre.toUpperCase()));
    }
    /**
     * Obtiene subcategorías filtradas para PIERCINGS
     */
    getFilteredSubcategoriesForPiercings() {
        const piercings = this.getPiercingsCategory();
        if (!piercings)
            return [];
        const excludedNames = ['ANILLOS', 'BANANAS', 'BARBELLS', 'CIRCULAR BARBELLS', 'LABRETS'];
        return this.categories.filter(category => category.padre === piercings.id &&
            !excludedNames.includes(category.nombre.toUpperCase()));
    }
    /**
     * Navega a una categoría específica
     */
    navigateToCategory(categoryId) {
        console.log(`Navegando a categoría ID: ${categoryId}`);
        this.router.navigate(['/category', categoryId]);
    }
    /**
     * Verifica si el usuario actual es administrador
     */
    isAdmin() {
        return this.currentUser?.username === 'admin' || this.currentUser?.role === 'admin';
    }
    /**
     * Cierra la sesión del usuario
     */
    logout() {
        this.authService.logout();
        this.isUserLoggedIn = false;
        this.currentUser = null;
        this.router.navigate(['/']);
        console.log('Usuario deslogueado');
    }
    /**
     * Realiza una búsqueda
     */
    search() {
        if (this.searchTerm.trim()) {
            console.log('🔍 Navbar: Realizando búsqueda:', this.searchTerm);
            this.router.navigate(['/search'], {
                queryParams: { term: this.searchTerm.trim() }
            });
            // ✅ Limpiar el campo de búsqueda después de buscar
            this.searchTerm = '';
        }
        else {
            console.log('⚠️ Navbar: Término de búsqueda vacío');
        }
    }
};
NavbarComponent = __decorate([
    Component({
        selector: 'app-navbar',
        templateUrl: './navbar.component.html',
        styleUrls: ['./navbar.component.css'],
        standalone: false
    })
], NavbarComponent);
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map