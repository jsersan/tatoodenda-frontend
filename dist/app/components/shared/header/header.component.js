import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HeaderComponent = class HeaderComponent {
    constructor(router) {
        this.router = router;
    }
    // Método para navegar a la página principal
    goToHome() {
        this.router.navigate(['/']);
    }
};
HeaderComponent = __decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.css'],
        standalone: false
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map