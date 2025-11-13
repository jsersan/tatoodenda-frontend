import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let ImageUrlPipe = class ImageUrlPipe {
    transform(imagen, carpetaimg, categoriaId) {
        if (!imagen) {
            return 'assets/images/background/placeholder.jpg';
        }
        // Mapeo de categorías a nombres de carpetas (basado en tu estructura real)
        const categoryFolderMap = {
            1: 'anillo',
            2: 'tuneles',
            3: 'tuneles',
            4: 'plug',
            5: 'expander',
            6: 'banana',
            7: 'labret',
            8: 'barbell',
            9: 'circular-barbel',
            10: 'anillo'
        };
        // Determinar la carpeta a usar
        let folder = 'background'; // carpeta por defecto
        if (carpetaimg && carpetaimg.trim() !== '') {
            // Usar la carpeta especificada en el producto
            folder = carpetaimg;
        }
        else if (categoriaId && categoryFolderMap[categoriaId]) {
            // Usar la carpeta basada en la categoría
            folder = categoryFolderMap[categoriaId];
        }
        console.log(`Generando ruta de imagen: assets/images/${folder}/${imagen}`);
        return `assets/images/${folder}/${imagen}`;
    }
};
ImageUrlPipe = __decorate([
    Pipe({
        name: 'imageUrl',
        standalone: false
    })
], ImageUrlPipe);
export { ImageUrlPipe };
//# sourceMappingURL=image-url.pipe.js.map