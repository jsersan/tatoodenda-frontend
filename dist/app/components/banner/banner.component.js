import { __decorate } from "tslib";
import { Component } from '@angular/core';
let BannerComponent = class BannerComponent {
    constructor() {
        // Array para almacenar las rutas a las imágenes del banner
        this.bannerImages = [];
        // Variable para mantener track de qué imagen del banner se está mostrando
        this.currentBannerIndex = 0;
    }
    ngOnInit() {
        // Cargamos las imágenes del banner
        this.loadBannerImages();
        // Iniciamos la rotación automática del banner
        this.startBannerRotation();
    }
    ngOnDestroy() {
        // Si hay un intervalo de banner activo, lo eliminamos
        if (this.bannerInterval) {
            clearInterval(this.bannerInterval);
        }
    }
    // Método para cargar las imágenes del banner
    loadBannerImages() {
        this.bannerImages = [
            'assets/images/banner/banner1.jpg',
            'assets/images/banner/banner2.jpg',
            'assets/images/banner/banner3.jpg',
            'assets/images/banner/banner4.jpg'
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
        // Calculamos el nuevo índice
        this.currentBannerIndex =
            (this.currentBannerIndex === 0)
                ? this.bannerImages.length - 1
                : this.currentBannerIndex - 1;
    }
    // Método para mostrar la siguiente imagen del banner
    nextBanner() {
        // Calculamos el nuevo índice
        this.currentBannerIndex =
            (this.currentBannerIndex === this.bannerImages.length - 1)
                ? 0
                : this.currentBannerIndex + 1;
    }
};
BannerComponent = __decorate([
    Component({
        selector: 'app-banner',
        templateUrl: './banner.component.html',
        standalone: false
    })
], BannerComponent);
export { BannerComponent };
//# sourceMappingURL=banner.component.js.map