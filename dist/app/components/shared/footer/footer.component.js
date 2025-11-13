import { __decorate } from "tslib";
import { Component } from '@angular/core';
let FooterComponent = class FooterComponent {
    constructor() {
        // Propiedad para almacenar el año actual (para el copyright)
        this.currentYear = new Date().getFullYear();
    }
    ngOnInit() {
        // Posibles inicializaciones adicionales
    }
};
FooterComponent = __decorate([
    Component({
        selector: 'app-footer',
        templateUrl: './footer.component.html',
        styleUrls: ['footer.component.scss'],
        standalone: false
    })
], FooterComponent);
export { FooterComponent };
//# sourceMappingURL=footer.component.js.map