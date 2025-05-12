import { __decorate } from "tslib";
// Importamos los decoradores y clases necesarias desde Angular
import { Component } from '@angular/core';
// Decorador @Component que define las propiedades del componente Angular
let HomeComponent = class HomeComponent {
    // Constructor del componente donde inyectamos las dependencias
    // productService se inyecta automáticamente gracias al sistema de DI de Angular
    constructor(productService) {
        this.productService = productService;
        // Propiedades de clase:
        // Array para almacenar los productos que se mostrarán en la página principal
        this.products = [];
        // Array para almacenar las rutas a las imágenes del banner
        this.bannerImages = [];
        // Variable para mantener track de qué imagen del banner se está mostrando
        this.currentBannerIndex = 0;
    }
    // Método de ciclo de vida que se ejecuta cuando Angular ha terminado de inicializar el componente
    ngOnInit() {
        // Cargamos la lista de productos
        this.loadProducts();
        // Cargamos las imágenes del banner
        this.loadBannerImages();
        // Iniciamos la rotación automática del banner
        this.startBannerRotation();
    }
    // Método del ciclo de vida que se ejecuta cuando el componente va a ser destruido
    // Importante para limpiar recursos y evitar memory leaks
    ngOnDestroy() {
        // Si hay un intervalo de banner activo, lo eliminamos para evitar que siga ejecutándose
        if (this.bannerInterval) {
            clearInterval(this.bannerInterval);
        }
    }
    // Método para cargar productos desde el servicio
    loadProducts() {
        // Llamamos al método getProducts del servicio, que devuelve un Observable
        this.productService.getProducts().subscribe({
            // Cuando el Observable emite productos (éxito), los asignamos a la propiedad products
            next: (products) => this.products = products,
            // Si ocurre un error, lo registramos en la consola
            error: (error) => console.error('Error loading products', error)
        });
    }
    // Método para cargar las imágenes del banner
    // En una app real, esto podría venir de la API, pero aquí lo simulamos con rutas estáticas
    loadBannerImages() {
        this.bannerImages = [
            'assets/images/banner/banner1.jpg',
            'assets/images/banner/banner2.jpg',
            'assets/images/banner/banner3.jpg'
        ];
    }
    // Método para iniciar la rotación automática del banner
    startBannerRotation() {
        // Configuramos un temporizador que llama a nextBanner cada 5 segundos
        this.bannerInterval = setInterval(() => {
            this.nextBanner();
        }, 5000);
    }
    // Método para mostrar la imagen anterior del banner
    prevBanner() {
        // Calculamos el nuevo índice: si estamos en la primera imagen, vamos a la última
        // Si no, simplemente retrocedemos una posición
        this.currentBannerIndex =
            (this.currentBannerIndex === 0)
                ? this.bannerImages.length - 1
                : this.currentBannerIndex - 1;
    }
    // Método para mostrar la siguiente imagen del banner
    nextBanner() {
        // Calculamos el nuevo índice: si estamos en la última imagen, volvemos a la primera
        // Si no, avanzamos una posición
        this.currentBannerIndex =
            (this.currentBannerIndex === this.bannerImages.length - 1)
                ? 0
                : this.currentBannerIndex + 1;
    }
};
HomeComponent = __decorate([
    Component({
        // El selector CSS que se usará para insertar este componente en otras plantillas
        selector: 'app-home',
        // La ruta a la plantilla HTML que define la estructura visual de este componente
        templateUrl: './home.component.html',
        // Las rutas a los archivos de estilos para este componente específico
        styleUrls: ['./home.component.scss']
    })
    // La clase del componente que implementa OnInit (interfaz del ciclo de vida)
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map