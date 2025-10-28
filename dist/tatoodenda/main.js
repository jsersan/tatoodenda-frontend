"use strict";
(self["webpackChunktatoodenda"] = self["webpackChunktatoodenda"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/auth.guard */ 1620);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ 2865);
/* harmony import */ var _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/checkout/checkout.component */ 9215);
/* harmony import */ var _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user/profile/profile.component */ 7273);
/* harmony import */ var _components_product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/product/product-list/product-list.component */ 2007);
/* harmony import */ var _components_product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/product/product-detail/product-detail.component */ 9081);
/* harmony import */ var _components_product_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/product/search-results/search-results.component */ 513);
/* harmony import */ var _components_historial_pedidos_historial_pedidos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/historial-pedidos/historial-pedidos.component */ 2765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);

// Importar el guard de autenticación

// Importar componentes









const routes = [
// ================================
// 🌐 RUTAS PÚBLICAS (sin autenticación)
// ================================
// Página principal
{
  path: '',
  component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent,
  data: {
    title: 'Inicio - TatooDenda'
  }
},
// Alias para home
{
  path: 'home',
  redirectTo: '',
  pathMatch: 'full'
},
// Productos (públicos - los usuarios pueden ver sin login)
{
  path: 'products',
  component: _components_product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__.ProductListComponent,
  data: {
    title: 'Productos - TatooDenda'
  }
}, {
  path: 'productos',
  redirectTo: 'products',
  pathMatch: 'full'
}, {
  path: 'product/:id',
  component: _components_product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_5__.ProductDetailComponent,
  data: {
    title: 'Detalle Producto - TatooDenda'
  }
}, {
  path: 'producto/:id',
  redirectTo: 'product/:id'
},
// Si tienes categorías como rutas
{
  path: 'category/:id',
  component: _components_product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__.ProductListComponent,
  data: {
    title: 'Categoría - TatooDenda'
  }
},
// Ver todo
{
  path: 'ver-todo',
  component: _components_product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__.ProductListComponent,
  data: {
    title: 'Ver Todo - TatooDenda',
    isViewAll: true
  }
},
// Búsqueda
{
  path: 'search',
  component: _components_product_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_6__.SearchResultsComponent,
  data: {
    title: 'Resultados de Búsqueda - TatooDenda'
  }
},
// Historial de Pedidos
{
  path: 'historial',
  component: _components_historial_pedidos_historial_pedidos_component__WEBPACK_IMPORTED_MODULE_7__.HistorialPedidosComponent,
  data: {
    title: 'Historial de Pedidos - TatooDenda'
  }
},
// ================================
// 🔒 RUTAS PROTEGIDAS (requieren autenticación)
// ================================
// Checkout - REQUIERE LOGIN
{
  path: 'checkout',
  component: _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_2__.CheckoutComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    title: 'Checkout - TatooDenda',
    requiresAuth: true
  }
},
// Perfil de usuario - REQUIERE LOGIN
{
  path: 'profile',
  component: _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__.ProfileComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    title: 'Mi Perfil - TatooDenda',
    requiresAuth: true
  }
},
// Mis pedidos - REQUIERE LOGIN
{
  path: 'orders',
  component: _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__.ProfileComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    title: 'Mis Pedidos - TatooDenda',
    requiresAuth: true
  }
},
// Alias en español para pedidos
{
  path: 'pedidos',
  redirectTo: 'orders',
  pathMatch: 'full'
},
// ================================
// 🔄 REDIRECCIONES PARA LOGIN/REGISTRO
// ================================
// ✅ Redirigir cualquier intento de acceso a login/register → home
{
  path: 'login',
  redirectTo: '',
  pathMatch: 'full'
}, {
  path: 'register',
  redirectTo: '',
  pathMatch: 'full'
}, {
  path: 'Login',
  redirectTo: '',
  pathMatch: 'full'
}, {
  path: 'Register',
  redirectTo: '',
  pathMatch: 'full'
}, {
  path: 'Checkout',
  redirectTo: 'checkout',
  pathMatch: 'full'
}, {
  path: 'Profile',
  redirectTo: 'profile',
  pathMatch: 'full'
},
// ================================
// 🚫 CATCH-ALL
// ================================
// Catch-all route - DEBE IR AL FINAL
{
  path: '**',
  redirectTo: '',
  data: {
    title: 'Página no encontrada - TatooDenda'
  }
}];
class AppRoutingModule {
  constructor() {
    console.log('🚀 AppRoutingModule inicializado');
    console.log('🛡️ Rutas protegidas: /checkout, /profile, /orders');
    console.log('🌐 Rutas públicas: /, /products, /product/:id, /category/:id');
    console.log('🔄 Rutas de login/register redirigidas a home');
  }
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
      providers: [
      // Asegurar que el guard esté disponible
      _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes, {
        // Opciones adicionales del router
        enableTracing: false,
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled',
        onSameUrlNavigation: 'reload' // Recargar si se navega a la misma URL
      }), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_login_popup_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/login-popup.service */ 6764);
/* harmony import */ var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/shared/navbar/navbar.component */ 8693);
/* harmony import */ var _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/shared/footer/footer.component */ 4607);
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cart/cart.component */ 2727);
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/banner/banner.component */ 9783);
/* harmony import */ var _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/shared/header/header.component */ 6687);
/* harmony import */ var _components_login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login-popup/login-popup.component */ 1453);
/* harmony import */ var _components_registro_popup_registro_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/registro-popup/registro-popup.component */ 339);












class AppComponent {
  constructor(router, loginPopupService) {
    this.router = router;
    this.loginPopupService = loginPopupService;
    this.title = 'ecommerce-app';
    // ✅ Control de popups
    this.showLoginPopup = false;
    this.loginReturnUrl = '';
    this.loginFromCheckout = false;
    this.showRegistroPopup = false;
    console.log('🚀 AppComponent inicializado');
  }
  ngOnInit() {
    // Suscribirse al servicio de login popup con tipo explícito
    this.loginPopupService.loginPopupState$.subscribe(state => {
      console.log('📢 Estado de login popup cambió:', state);
      this.showLoginPopup = state.isOpen;
      this.loginReturnUrl = state.returnUrl;
      this.loginFromCheckout = state.fromCheckout;
    });
    // Scroll al inicio en cada navegación
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.NavigationEnd)).subscribe(() => {
      window.scrollTo(0, 0);
    });
  }
  /**
   * Cerrar popup de login
   */
  onLoginPopupClose() {
    console.log('❌ Cerrando popup de login');
    this.showLoginPopup = false;
    this.loginPopupService.close();
  }
  /**
   * Login exitoso
   */
  onLoginSuccess(returnUrl) {
    console.log('✅ Login exitoso, navegando a:', returnUrl);
    this.showLoginPopup = false;
    if (returnUrl && returnUrl !== '/') {
      this.router.navigate([returnUrl]);
    }
  }
  /**
   * Cambiar de login a registro
   */
  onSwitchToRegister() {
    console.log('🔄 Cambiando de login a registro');
    this.showLoginPopup = false;
    setTimeout(() => {
      this.showRegistroPopup = true;
    }, 200);
  }
  /**
   * Cerrar popup de registro
   */
  onCloseRegistroPopup() {
    console.log('❌ Cerrando popup de registro');
    this.showRegistroPopup = false;
  }
  /**
   * Registro exitoso
   */
  onRegistroSuccess() {
    console.log('✅ Registro exitoso');
    this.showRegistroPopup = false;
    // Abrir login después de un pequeño delay
    setTimeout(() => {
      this.showLoginPopup = true;
    }, 500);
  }
  /**
   * Cambiar de registro a login
   */
  onSwitchToLogin() {
    console.log('🔄 Cambiando de registro a login');
    this.showRegistroPopup = false;
    setTimeout(() => {
      this.showLoginPopup = true;
    }, 200);
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_login_popup_service__WEBPACK_IMPORTED_MODULE_0__.LoginPopupService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 8,
      vars: 4,
      consts: [[3, "isVisible", "returnUrl", "fromCheckout", "closePopup", "loginSuccess", "switchToRegistro"], [3, "isVisible", "closePopup", "registroSuccess", "switchToLogin"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-header")(1, "app-navbar")(2, "app-banner")(3, "router-outlet")(4, "app-footer")(5, "app-cart");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "app-login-popup", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("closePopup", function AppComponent_Template_app_login_popup_closePopup_6_listener() {
            return ctx.onLoginPopupClose();
          })("loginSuccess", function AppComponent_Template_app_login_popup_loginSuccess_6_listener($event) {
            return ctx.onLoginSuccess($event);
          })("switchToRegistro", function AppComponent_Template_app_login_popup_switchToRegistro_6_listener() {
            return ctx.onSwitchToRegister();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "app-registro-popup", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("closePopup", function AppComponent_Template_app_registro_popup_closePopup_7_listener() {
            return ctx.onCloseRegistroPopup();
          })("registroSuccess", function AppComponent_Template_app_registro_popup_registroSuccess_7_listener() {
            return ctx.onRegistroSuccess();
          })("switchToLogin", function AppComponent_Template_app_registro_popup_switchToLogin_7_listener() {
            return ctx.onSwitchToLogin();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("isVisible", ctx.showLoginPopup)("returnUrl", ctx.loginReturnUrl)("fromCheckout", ctx.loginFromCheckout);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("isVisible", ctx.showRegistroPopup);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet, _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent, _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_3__.CartComponent, _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__.BannerComponent, _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__.HeaderComponent, _components_login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_6__.LoginPopupComponent, _components_registro_popup_registro_popup_component__WEBPACK_IMPORTED_MODULE_7__.RegistroPopupComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interceptors/auth.interceptor */ 472);
/* harmony import */ var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interceptors/error.interceptor */ 8036);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/shared/navbar/navbar.component */ 8693);
/* harmony import */ var _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/shared/footer/footer.component */ 4607);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ 2865);
/* harmony import */ var _components_product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/product/product-list/product-list.component */ 2007);
/* harmony import */ var _components_product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/product/product-detail/product-detail.component */ 9081);
/* harmony import */ var _components_product_product_popup_product_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/product/product-popup/product-popup.component */ 893);
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/cart/cart.component */ 2727);
/* harmony import */ var _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/checkout/checkout.component */ 9215);
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/admin/admin.component */ 6273);
/* harmony import */ var _components_admin_category_manager_category_manager_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/admin/category-manager/category-manager.component */ 7399);
/* harmony import */ var _components_admin_product_manager_product_manager_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/admin/product-manager/product-manager.component */ 8177);
/* harmony import */ var _components_product_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/product/search-results/search-results.component */ 513);
/* harmony import */ var _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/user/profile/profile.component */ 7273);
/* harmony import */ var _components_orderline_orderline_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/orderline/orderline.component */ 6125);
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/banner/banner.component */ 9783);
/* harmony import */ var _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/shared/header/header.component */ 6687);
/* harmony import */ var _pipes_image_url_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pipes/image-url.pipe */ 3663);
/* harmony import */ var _components_login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/login-popup/login-popup.component */ 1453);
/* harmony import */ var _components_registro_popup_registro_popup_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/registro-popup/registro-popup.component */ 339);
/* harmony import */ var _components_historial_pedidos_historial_pedidos_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/historial-pedidos/historial-pedidos.component */ 2765);
/* harmony import */ var _components_password_confirm_modal_password_confirm_modal__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/password-confirm-modal/password-confirm-modal */ 6450);
/* harmony import */ var _services_pdf_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/pdf.service */ 3724);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 7580);





// Importar los interceptors


// Componentes principales y compartidos


















// ✅ Componentes modales y popups




// Servicios


class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineInjector"]({
      providers: [
      // ✅ Interceptors (el orden importa: primero Auth, luego Error)
      {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_27__.HTTP_INTERCEPTORS,
        useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_1__.AuthInterceptor,
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_27__.HTTP_INTERCEPTORS,
        useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_2__.ErrorInterceptor,
        multi: true
      },
      // Servicios
      _services_pdf_service__WEBPACK_IMPORTED_MODULE_25__.PdfService],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_30__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_pipes_image_url_pipe__WEBPACK_IMPORTED_MODULE_20__.ImageUrlPipe, _app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent, _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__.NavbarComponent, _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent, _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__.HomeComponent, _components_product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_7__.ProductListComponent, _components_product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_8__.ProductDetailComponent, _components_product_product_popup_product_popup_component__WEBPACK_IMPORTED_MODULE_9__.ProductPopupComponent, _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_10__.CartComponent, _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_11__.CheckoutComponent, _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_12__.AdminComponent, _components_admin_category_manager_category_manager_component__WEBPACK_IMPORTED_MODULE_13__.CategoryManagerComponent, _components_admin_product_manager_product_manager_component__WEBPACK_IMPORTED_MODULE_14__.ProductManagerComponent, _components_product_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_15__.SearchResultsComponent, _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__.ProfileComponent, _components_orderline_orderline_component__WEBPACK_IMPORTED_MODULE_17__.OrderLineComponent, _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_18__.BannerComponent, _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_19__.HeaderComponent,
    // ✅ Modales y popups
    _components_login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_21__.LoginPopupComponent, _components_registro_popup_registro_popup_component__WEBPACK_IMPORTED_MODULE_22__.RegistroPopupComponent, _components_historial_pedidos_historial_pedidos_component__WEBPACK_IMPORTED_MODULE_23__.HistorialPedidosComponent, _components_password_confirm_modal_password_confirm_modal__WEBPACK_IMPORTED_MODULE_24__.PasswordConfirmModalComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_30__.RouterModule]
  });
})();

/***/ }),

/***/ 6273:
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminComponent: () => (/* binding */ AdminComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


class AdminComponent {
  constructor() {}
  static {
    this.ɵfac = function AdminComponent_Factory(t) {
      return new (t || AdminComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminComponent,
      selectors: [["app-admin"]],
      decls: 12,
      vars: 0,
      consts: [["id", "divadmin"], ["id", "titulo"], [1, "admin-nav"], ["routerLinkActive", "active"], ["routerLink", "categories"], ["routerLink", "products"]],
      template: function AdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Administrador");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 2)(4, "ul")(5, "li", 3)(6, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Administrar Categor\u00EDas");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 3)(9, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Administrar Productos");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 7399:
/*!*********************************************************************************!*\
  !*** ./src/app/components/admin/category-manager/category-manager.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryManagerComponent: () => (/* binding */ CategoryManagerComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/category.service */ 4354);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);





function CategoryManagerComponent_option_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cat_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", cat_r6.id)("disabled", ctx_r0.editMode && ctx_r0.selectedCategoryId === cat_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", cat_r6.nombre, " ");
  }
}
function CategoryManagerComponent_input_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoryManagerComponent_input_18_Template_input_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.cancelEdit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CategoryManagerComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Cargando...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CategoryManagerComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.error);
  }
}
function CategoryManagerComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.success);
  }
}
function CategoryManagerComponent_table_25_tr_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 19)(1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td")(6, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoryManagerComponent_table_25_tr_8_Template_input_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const category_r10 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.editCategory(category_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td")(8, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoryManagerComponent_table_25_tr_8_Template_input_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const category_r10 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.deleteCategory(category_r10.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const category_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "cat" + category_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](category_r10.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-id", category_r10.padre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r9.getParentName(category_r10.padre), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-id", category_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-id", category_r10.id);
  }
}
function CategoryManagerComponent_table_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 17)(1, "tr")(2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Padre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "th")(7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CategoryManagerComponent_table_25_tr_8_Template, 9, 6, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.categories);
  }
}
class CategoryManagerComponent {
  constructor(fb, categoryService) {
    this.fb = fb;
    this.categoryService = categoryService;
    this.categories = [];
    this.editMode = false;
    this.selectedCategoryId = null;
    this.categoryForm = this.createForm();
  }
  ngOnInit() {
    this.loadCategories();
  }
  // Cargar categorías desde el servicio
  loadCategories() {
    this.categoryService.getCategories().subscribe({
      next: categories => {
        this.categories = categories;
      },
      error: error => {
        console.error('Error al cargar categorías:', error);
        alert('Error al cargar las categorías. Por favor, intente nuevamente.');
      }
    });
  }
  // Crear formulario para categoría
  createForm() {
    return this.fb.group({
      nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2)]],
      padre: [0],
      descripcion: [''],
      tipo: ['']
    });
  }
  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.categoryForm.valid) {
      if (this.editMode && this.selectedCategoryId) {
        // Actualizar categoría existente
        this.updateCategory();
      } else {
        // Crear nueva categoría
        this.createCategory();
      }
    } else {
      // Marcar todos los campos como tocados para mostrar errores
      Object.keys(this.categoryForm.controls).forEach(key => {
        this.categoryForm.get(key)?.markAsTouched();
      });
    }
  }
  // Método para crear una nueva categoría
  createCategory() {
    const categoryData = {
      id: 0,
      nombre: this.categoryForm.value.nombre,
      padre: this.categoryForm.value.padre || 0,
      descripcion: this.categoryForm.value.descripcion || '',
      tipo: this.categoryForm.value.tipo || ''
    };
    // En tu método de clase
    this.categoryService.addCategory(categoryData).subscribe({
      next: createdCategory => {
        // Tu código actual aquí
      },
      error: error => {
        // Tu código actual aquí
      }
    });
  }
  // Método para editar una categoría
  editCategory(category) {
    this.editMode = true;
    this.selectedCategoryId = category.id;
    this.categoryForm.setValue({
      nombre: category.nombre,
      padre: category.padre || 0,
      descripcion: category.descripcion || '',
      tipo: category.tipo || ''
    });
  }
  // Método para actualizar una categoría existente
  updateCategory() {
    if (!this.selectedCategoryId) return;
    const categoryData = {
      nombre: this.categoryForm.value.nombre,
      padre: this.categoryForm.value.padre,
      descripcion: this.categoryForm.value.descripcion,
      tipo: this.categoryForm.value.tipo
    };
    // Validación para evitar ciclos (categoría que es padre de sí misma)
    if (this.selectedCategoryId === categoryData.padre) {
      alert('Error: Una categoría no puede ser padre de sí misma.');
      return;
    }
    this.categoryService.updateCategory(this.selectedCategoryId, categoryData).subscribe({
      next: updatedCategory => {
        console.log('Categoría actualizada:', updatedCategory);
        // Actualizar la categoría en el array local
        const index = this.categories.findIndex(c => c.id === this.selectedCategoryId);
        if (index !== -1) {
          this.categories[index] = updatedCategory;
        }
        this.resetForm();
        alert('Categoría actualizada con éxito.');
      },
      error: error => {
        console.error('Error al actualizar categoría:', error);
        alert('Error al actualizar la categoría. Por favor, intente nuevamente.');
      }
    });
  }
  // Método para eliminar una categoría
  deleteCategory(id) {
    if (confirm('¿Está seguro de que desea eliminar esta categoría? Esta acción no se puede deshacer.')) {
      this.categoryService.deleteCategory(id).subscribe({
        next: () => {
          console.log('Categoría eliminada:', id);
          this.categories = this.categories.filter(c => c.id !== id);
          alert('Categoría eliminada con éxito.');
        },
        error: error => {
          console.error('Error al eliminar categoría:', error);
          alert('Error al eliminar la categoría. Por favor, intente nuevamente.');
        }
      });
    }
  }
  // Método para cancelar la edición
  cancelEdit() {
    this.resetForm();
  }
  // Método para resetear el formulario
  resetForm() {
    this.categoryForm.reset({
      nombre: '',
      padre: 0,
      descripcion: '',
      tipo: ''
    });
    this.editMode = false;
    this.selectedCategoryId = null;
  }
  // Método para obtener el nombre de la categoría padre
  getParentName(parentId) {
    if (!parentId || parentId === 0) return 'Ninguno (Categoría principal)';
    const parent = this.categories.find(c => c.id === parentId);
    return parent ? parent.nombre : 'Desconocido';
  }
  static {
    this.ɵfac = function CategoryManagerComponent_Factory(t) {
      return new (t || CategoryManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_category_service__WEBPACK_IMPORTED_MODULE_0__.CategoryService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CategoryManagerComponent,
      selectors: [["app-category-manager"]],
      decls: 26,
      vars: 9,
      consts: [["id", "admincat"], [3, "formGroup", "ngSubmit"], ["type", "text", "id", "txtnomcat", "formControlName", "nombre"], ["id", "selecpadre", "formControlName", "padre"], ["value", "", "selected", "", "disabled", "", "hidden", ""], ["value", "sin"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], ["type", "submit", "id", "btnaniadircat", 3, "value"], ["type", "button", "value", "CANCELAR", 3, "click", 4, "ngIf"], [4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["id", "editcat", 4, "ngIf"], [3, "value", "disabled"], ["type", "button", "value", "CANCELAR", 3, "click"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], ["id", "editcat"], [3, "id", 4, "ngFor", "ngForOf"], [3, "id"], [1, "catnom"], [1, "catpadre"], ["type", "button", "value", "EDITAR", 1, "editarcat", 3, "click"], ["type", "button", "value", "ELIMINAR", 1, "eliminarcat", 3, "click"]],
      template: function CategoryManagerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Categor\u00EDas");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div")(4, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CategoryManagerComponent_Template_form_ngSubmit_6_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Nombre: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Padre: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "select", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "option", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "option", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Sin Padre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CategoryManagerComponent_option_16_Template, 2, 3, "option", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CategoryManagerComponent_input_18_Template, 1, 0, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div")(20, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Administrar categorias");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, CategoryManagerComponent_div_22_Template, 2, 0, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, CategoryManagerComponent_div_23_Template, 2, 1, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, CategoryManagerComponent_div_24_Template, 2, 1, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, CategoryManagerComponent_table_25_Template, 9, 1, "table", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.editMode ? "Editar" : "A\u00F1adir", " categor\u00EDa");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.categoryForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.editMode ? "GUARDAR" : "A\u00D1ADIR");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.success);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.categories.length > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 8177:
/*!*******************************************************************************!*\
  !*** ./src/app/components/admin/product-manager/product-manager.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductManagerComponent: () => (/* binding */ ProductManagerComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/product.service */ 6241);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/category.service */ 4354);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);






function ProductManagerComponent_option_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", category_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", category_r3.nombre, " ");
  }
}
function ProductManagerComponent_div_49_option_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", category_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", category_r5.nombre, " ");
  }
}
function ProductManagerComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Editar art\u00EDculo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ProductManagerComponent_div_49_Template_form_ngSubmit_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.updateProduct());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "table")(5, "tr")(6, "td")(7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Nombre: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "tr")(12, "td")(13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Descripci\u00F3n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "textarea", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "tr")(18, "td")(19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Precio: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "\u20AC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "tr")(25, "td")(26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Categor\u00EDa: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "td")(29, "select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, ProductManagerComponent_div_49_option_30_Template, 2, 2, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductManagerComponent_div_49_Template_input_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.cancelEdit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.editProductForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.categories);
  }
}
function ProductManagerComponent_tr_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td")(8, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductManagerComponent_tr_63_Template_input_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const product_r9 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.editProduct(product_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td")(10, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductManagerComponent_tr_63_Template_input_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const product_r9 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.deleteProduct(product_r9.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r9.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.formatPrice(product_r9.precio));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r9.categoria_id !== undefined ? ctx_r2.getCategoryName(product_r9.categoria_id) : "Sin categor\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-id", product_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-id", product_r9.id);
  }
}
class ProductManagerComponent {
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
      nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]],
      descripcion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      precio: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(0.01)]],
      stock: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(0)]],
      categoryId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
    this.editProductForm = this.fb.group({
      nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]],
      descripcion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      precio: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(0.01)]],
      stock: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(0)]],
      categoryId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
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
      next: products => {
        this.products = products;
        this.loading = false;
      },
      error: error => {
        console.error('Error al cargar productos:', error);
        this.loading = false;
      }
    });
  }
  // Cargar categorías para el selector de formulario
  loadCategories() {
    this.categoryService.getCategories().subscribe({
      next: categories => {
        this.categories = categories;
      },
      error: error => {
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
        reader.onload = e => {
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
      next: createdProduct => {
        console.log('Producto creado:', createdProduct);
        // Si hay archivos seleccionados, subir imágenes
        if (this.selectedFiles.length > 0) {
          this.productService.uploadProductImages(createdProduct.id, this.selectedFiles).subscribe({
            next: result => {
              console.log('Imágenes subidas:', result);
              this.resetForm();
              this.loadProducts();
              this.submitting = false;
            },
            error: error => {
              console.error('Error al subir imágenes:', error);
              // Aún consideramos que el producto se creó correctamente
              this.resetForm();
              this.loadProducts();
              this.submitting = false;
            }
          });
        } else {
          // Si no hay imágenes, simplemente terminamos
          this.resetForm();
          this.loadProducts();
          this.submitting = false;
        }
      },
      error: error => {
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
      next: result => {
        console.log('Producto actualizado:', result);
        this.showEditForm = false; // Cambiado de editMode
        this.currentProductId = null;
        this.loadProducts();
        this.submitting = false;
      },
      error: error => {
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
        error: error => {
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
  static {
    this.ɵfac = function ProductManagerComponent_Factory(t) {
      return new (t || ProductManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_category_service__WEBPACK_IMPORTED_MODULE_1__.CategoryService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ProductManagerComponent,
      selectors: [["app-product-manager"]],
      decls: 64,
      vars: 4,
      consts: [["id", "adminart"], [3, "formGroup", "ngSubmit"], ["type", "text", "id", "nuevoartnombre", "formControlName", "nombre"], ["id", "nuevoartdescripcion", "formControlName", "descripcion"], ["type", "number", "id", "nuevoartprecio", "formControlName", "precio"], ["id", "nuevoartcat", "formControlName", "categoria"], ["value", "", "selected", "", "disabled", "", "hidden", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "id", "nuevoartfolder", "formControlName", "carpetaimg"], ["type", "file", "id", "imagenes", "multiple", "", 3, "change"], ["colspan", "2"], ["type", "submit", "id", "btnaniadirart", "value", "A\u00D1ADIR"], [4, "ngIf"], ["id", "editart"], [4, "ngFor", "ngForOf"], [3, "value"], ["type", "text", "formControlName", "nombre"], ["rows", "3", "cols", "40", "formControlName", "descripcion"], ["type", "number", "size", "2", "formControlName", "precio"], ["formControlName", "categoria"], ["type", "submit", "value", "ACTUALIZAR"], ["type", "button", "value", "CANCELAR", 3, "click"], ["type", "button", "value", "EDITAR", 1, "editarart", 3, "click"], ["type", "button", "value", "ELIMINAR", 1, "eliminarart", 3, "click"]],
      template: function ProductManagerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Art\u00EDculos");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div")(4, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "A\u00F1adir art\u00EDculo");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ProductManagerComponent_Template_form_ngSubmit_6_listener() {
            return ctx.addProduct();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "table")(8, "tr")(9, "td")(10, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Nombre: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "tr")(15, "td")(16, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Descripci\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "textarea", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "tr")(21, "td")(22, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Precio: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "tr")(27, "td")(28, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Categoria: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "td")(31, "select", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "option", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, ProductManagerComponent_option_33_Template, 2, 2, "option", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "tr")(35, "td")(36, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Carpeta de im\u00E1genes: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "tr")(41, "td")(42, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Im\u00E1genes: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "td")(45, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ProductManagerComponent_Template_input_change_45_listener($event) {
            return ctx.onFileSelect($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "tr")(47, "td", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, ProductManagerComponent_div_49_Template, 33, 2, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div")(51, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Administrar art\u00EDculos");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "table", 13)(54, "tr")(55, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Nombre");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Precio");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Categor\u00EDa");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "th")(62, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](63, ProductManagerComponent_tr_63_Template, 11, 5, "tr", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.newProductForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.categories);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showEditForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.products);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 9783:
/*!*******************************************************!*\
  !*** ./src/app/components/banner/banner.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BannerComponent: () => (/* binding */ BannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


function BannerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BannerComponent_div_0_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.prevBanner());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BannerComponent_div_0_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.nextBanner());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.bannerImages[ctx_r0.currentBannerIndex], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
class BannerComponent {
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
    this.bannerImages = ['assets/images/banner/banner1.jpg', 'assets/images/banner/banner2.jpg'];
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
    this.currentBannerIndex = this.currentBannerIndex === 0 ? this.bannerImages.length - 1 : this.currentBannerIndex - 1;
  }
  // Método para mostrar la siguiente imagen del banner
  nextBanner() {
    // Calculamos el nuevo índice
    this.currentBannerIndex = this.currentBannerIndex === this.bannerImages.length - 1 ? 0 : this.currentBannerIndex + 1;
  }
  static {
    this.ɵfac = function BannerComponent_Factory(t) {
      return new (t || BannerComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BannerComponent,
      selectors: [["app-banner"]],
      decls: 1,
      vars: 1,
      consts: [["id", "banner", 4, "ngIf"], ["id", "banner"], [1, "banner_button", "prev", 3, "click"], ["src", "assets/images/icons/left-arrow.png", "alt", "Anterior"], ["alt", "banner", "id", "bannerimg", 3, "src"], [1, "banner_button", "next", 3, "click"], ["src", "assets/images/icons/right-arrow.png", "alt", "Siguiente"]],
      template: function BannerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BannerComponent_div_0_Template, 6, 1, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bannerImages.length > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 2727:
/*!***************************************************!*\
  !*** ./src/app/components/cart/cart.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartComponent: () => (/* binding */ CartComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 7581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cart.service */ 6868);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/product.service */ 6241);
/* harmony import */ var _services_login_popup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/login-popup.service */ 6764);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);








function CartComponent_div_8_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 22)(2, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("error", function CartComponent_div_8_tr_17_Template_img_error_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.productService.handleImageError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td", 26)(8, "div", 27)(9, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CartComponent_div_8_tr_17_Template_button_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const item_r4 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.decrementarCantidad(item_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CartComponent_div_8_tr_17_Template_button_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const item_r4 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.incrementarCantidad(item_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "td", 33)(22, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CartComponent_div_8_tr_17_Template_button_click_22_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const item_r4 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.eliminarItem(item_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r3.getImageSrc(item_r4), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("alt", item_r4.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r4.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r4.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", item_r4.cantidad <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r4.cantidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](17, 8, item_r4.precio, "1.2-2"), " \u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](20, 11, item_r4.precio * item_r4.cantidad, "1.2-2"), " \u20AC");
  }
}
function CartComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "table", 9)(3, "thead")(4, "tr")(5, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Art\u00EDculo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Precio(u)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Precio (total)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, CartComponent_div_8_tr_17_Template, 24, 14, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 17)(19, "div", 18)(20, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](24, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CartComponent_div_8_Template_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.procesarCompra());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, " PROCESAR COMPRA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.cartItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](24, 2, ctx_r0.total, "1.2-2"), " \u20AC");
  }
}
function CartComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 35)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Tu carrito est\u00E1 vac\u00EDo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "A\u00F1ade algunos productos para continuar con la compra");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CartComponent_ng_template_9_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.continuarComprando());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Continuar comprando ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
const _c0 = function (a0) {
  return {
    "active": a0
  };
};
class CartComponent {
  // Constructor con inyección de dependencias
  constructor(cartService, authService, router, zone, productService, renderer, loginPopupService) {
    this.cartService = cartService;
    this.authService = authService;
    this.router = router;
    this.zone = zone;
    this.productService = productService;
    this.renderer = renderer;
    this.loginPopupService = loginPopupService;
    // Array para almacenar los items del carrito
    this.cartItems = [];
    // Array para las líneas de pedido
    this.orderLines = [];
    // Variable para almacenar el total del carrito
    this.total = 0;
    // Variable para controlar si estamos en proceso de eliminar
    this.isRemoving = false;
    // Suscripciones para limpiar en la destrucción
    this.cartSubscription = null;
    this.cartVisibilitySubscription = null;
    // Manejador para clicks fuera del carrito
    this.handleOutsideClick = event => {
      const target = event.target;
      // No cerrar si el clic fue dentro del carrito o si estamos eliminando
      if (target.closest('.cart-popup') || target.closest('#carrito') || this.isRemoving) {
        return;
      }
      // Cerrar solo si el clic fue realmente fuera del carrito
      if (this.cartService.isCartOpen) {
        this.closeCart();
      }
    };
  }
  ngOnInit() {
    console.log('CartComponent: iniciando...');
    // Añadir globalmente un script para interceptar las modificaciones del DOM
    this.addDOMObserver();
    // Suscripción al observable de items del carrito
    this.cartSubscription = this.cartService.cartItems.subscribe({
      next: items => {
        console.log('CartComponent: items del carrito actualizados', items.length);
        // Mapear los items
        this.cartItems = items.map(item => {
          return {
            id: item.id,
            nombre: item.nombre || (item.producto ? item.producto.nombre : ''),
            imagen: item.imagen || (item.producto ? `assets/images/${item.producto.carpetaimg}/${item.producto.imagen}` : ''),
            color: item.color || '',
            cantidad: item.cantidad,
            precio: item.precio,
            producto: item.producto
          };
        });
        // Convertir CartItems a OrderLines para usar con OrderLineComponent
        this.convertCartItemsToOrderLines();
        // Calcular el total del carrito
        this.total = Math.round(this.cartService.getCartTotal() * 100) / 100;
        // IMPORTANTE: Solo cerrar el carrito si está vacío y NO estamos en proceso de eliminar
        if (items.length === 0 && this.cartService.isCartOpen && !this.isRemoving) {
          console.log('CartComponent: Carrito vacío, programando cierre en 500ms');
          setTimeout(() => {
            this.closeCart();
          }, 500);
        }
        // Resetear isRemoving SOLO si el carrito está completamente vacío
        if (items.length === 0) {
          console.log('CartComponent: Carrito vacío, reseteando isRemoving');
          this.isRemoving = false;
        }
        // Fijar los precios después de cada actualización
        setTimeout(() => {
          this.fixPriceFormat();
        }, 100);
      }
    });
    // Añadir listener explícito para cambios en la visibilidad del carrito
    this.listenToCartVisibilityChanges();
    // Sobrescribir el método closeCart del servicio para evitar cierres no deseados
    this.patchCartServiceCloseMethod();
    // Aumentar el tamaño de los elementos del carrito en 5px
    this.enhanceCartSize();
  }
  // Método para interceptar cambios en el DOM y corregir los precios
  addDOMObserver() {
    const script = this.renderer.createElement('script');
    // Script para interceptar y corregir cambios en el DOM
    script.text = `
      (function() {
        // Función para corregir formato de precios
        function fixPriceFormat() {
          // 1. Corregir el total principal
          const totalElement = document.querySelector('[data-label="Total:"] + span');
          if (totalElement) {
            const rawTotal = parseFloat(totalElement.textContent.replace('€', '').trim());
            if (!isNaN(rawTotal)) {
              totalElement.textContent = rawTotal.toFixed(2) + '€';
            }
          }
          
          // 2. Corregir todos los precios totales por línea
          const itemTotals = document.querySelectorAll('[data-label="PRECIO (TOTAL)"]');
          itemTotals.forEach(element => {
            if (element && element.textContent) {
              const text = element.textContent.trim();
              const rawValue = parseFloat(text.replace('€', '').trim());
              if (!isNaN(rawValue)) {
                element.textContent = rawValue.toFixed(2) + '€';
              }
            }
          });
        }
        
        // Observar cambios en el DOM
        const observer = new MutationObserver(function(mutations) {
          fixPriceFormat();
        });
        
        // Configurar el observador
        observer.observe(document.body, { 
          childList: true, 
          subtree: true,
          characterData: true,
          attributes: true
        });
        
        // Ejecutar inmediatamente
        fixPriceFormat();
        
        // Añadir a window para acceso desde el componente
        window.fixPriceFormat = fixPriceFormat;
      })();
    `;
    // Añadir el script al DOM
    this.renderer.appendChild(document.head, script);
  }
  // Método simple para corregir el formato de precios
  fixPriceFormat() {
    setTimeout(() => {
      try {
        // 1. Corregir el total principal
        const totalElement = document.querySelector('[data-label="Total:"] + span');
        if (totalElement) {
          const rawValue = parseFloat(this.total.toString());
          if (!isNaN(rawValue)) {
            totalElement.textContent = rawValue.toFixed(2) + '€';
          }
        }
        // 2. Corregir los precios por línea
        const itemTotals = document.querySelectorAll('[data-label="PRECIO (TOTAL)"]');
        itemTotals.forEach(element => {
          if (element && element.textContent) {
            const text = element.textContent.trim();
            const rawValue = parseFloat(text.replace('€', '').trim());
            if (!isNaN(rawValue)) {
              element.textContent = rawValue.toFixed(2) + '€';
            }
          }
        });
      } catch (error) {
        console.error('Error al corregir precios:', error);
      }
    }, 0);
  }
  // Método para continuar comprando
  continuarComprando() {
    this.closeCart();
    this.router.navigate(['/productos']);
  }
  // Método para aumentar el tamaño del carrito y añadir animaciones
  enhanceCartSize() {
    console.log('CartComponent: Aumentando tamaño de elementos del carrito y añadiendo animaciones');
    const styleEl = this.renderer.createElement('style');
    styleEl.id = 'cart-size-enhancement';
    // Estilos para hacer elementos más grandes y añadir animación hover
    styleEl.innerHTML = `
      /* Ajustes al popup principal */
      .cart-popup {
        padding: 30px !important;
        max-width: 1005px !important;
      }
      
      /* Aumentar tamaño de elementos de la tabla */
      .cart-table th, 
      .cart-table td,
      .cart-popup th,
      .cart-popup td {
        padding: 17px 15px !important;
      }
      
      /* Aumentar las imágenes y añadir la animación de hover */
      .cart-table .articulo-cell img,
      .cart-popup img {
        width: 45px !important;
        height: 45px !important;
        transition: transform 0.3s ease !important;
      }
      
      /* Efecto hover para las imágenes */
      .cart-table .articulo-cell img:hover,
      .cart-popup img:hover {
        transform: scale(1.05) !important;
        box-shadow: 0 3px 8px rgba(0,0,0,0.15) !important;
      }
      
      /* También aplicamos el efecto a las imágenes de productos en la galería */
      #articulos .articulo img,
      [class*='product'] img {
        transition: transform 0.3s ease !important;
      }
      
      #articulos .articulo img:hover,
      [class*='product'] img:hover {
        transform: scale(1.05) !important;
        z-index: 1 !important;
      }
    `;
    // Añadir los nuevos estilos al head del documento
    this.renderer.appendChild(document.head, styleEl);
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.fixPriceFormat();
    }, 100);
  }
  ngOnDestroy() {
    // Limpiar suscripciones para evitar memory leaks
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
    if (this.cartVisibilitySubscription) {
      this.cartVisibilitySubscription.unsubscribe();
    }
    // Eliminar event listeners si los hubiera
    document.removeEventListener('click', this.handleOutsideClick);
    // Eliminar estilos personalizados
    const customStyles = document.getElementById('cart-size-enhancement');
    if (customStyles) {
      customStyles.remove();
    }
  }
  // Método para suscribirse explícitamente a los cambios de visibilidad del carrito
  listenToCartVisibilityChanges() {
    this.cartVisibilitySubscription = this.cartService.isCartOpenObservable.subscribe(isOpen => {
      console.log('CartComponent: cambio de visibilidad del carrito', isOpen);
      if (isOpen) {
        setTimeout(() => {
          this.fixPriceFormat();
        }, 200);
      }
    });
  }
  // Método para parchar el comportamiento de cierre del servicio
  patchCartServiceCloseMethod() {
    // Guardar referencia al método original
    const originalCloseMethod = this.cartService.closeCart;
    // Sobrescribir el método en el servicio
    this.cartService.closeCart = () => {
      // LÓGICA MEJORADA: No cerrar si estamos eliminando Y hay productos
      if (this.isRemoving && this.cartItems.length > 0) {
        console.log('Cierre de carrito bloqueado durante eliminación de producto');
        return; // Bloquear el cierre completamente
      }
      // En cualquier otro caso, permitir cerrar el carrito
      originalCloseMethod.call(this.cartService);
    };
  }
  // Método para convertir CartItems a OrderLines
  convertCartItemsToOrderLines() {
    this.orderLines = this.cartItems.map(item => {
      const orderLine = {
        idpedido: 0,
        idprod: item.id,
        color: item.color || '',
        cantidad: item.cantidad,
        nombre: item.nombre || ''
      };
      return orderLine;
    });
  }
  // Método para cerrar el popup del carrito
  closeCart() {
    // Solo permitir cierre manual si no estamos en proceso de eliminación
    // O si el carrito está vacío
    if (!this.isRemoving || this.cartItems.length === 0) {
      this.cartService.closeCart();
    } else {
      console.log('CartComponent: Cierre manual bloqueado durante eliminación');
    }
  }
  // Método para cerrar el popup del carrito (para template)
  cerrarCarrito() {
    this.closeCart();
  }
  // Método para obtener la ruta de la imagen del producto
  getImageSrc(item) {
    if (item.producto) {
      // Pasa el color seleccionado
      return this.productService.getProductImageSrc(item.producto, item.color);
    }
    return item.imagen || "assets/images/default.jpg";
  }
  // Método para incrementar la cantidad de un item
  incrementarCantidad(item) {
    console.log('Incrementando cantidad para:', item.nombre);
    // Actualizar la cantidad
    this.cartService.updateItemQuantity(item.id, item.color || '', item.cantidad + 1);
    // Corregir el formato del total después de actualizar
    setTimeout(() => {
      this.fixPriceFormat();
    }, 100);
  }
  // Método para decrementar la cantidad de un item
  decrementarCantidad(item) {
    if (item.cantidad > 1) {
      console.log('Decrementando cantidad para:', item.nombre);
      // Actualizar la cantidad
      this.cartService.updateItemQuantity(item.id, item.color || '', item.cantidad - 1);
      // Corregir el formato del total después de actualizar
      setTimeout(() => {
        this.fixPriceFormat();
      }, 100);
    }
  }
  // Método para eliminar un item
  eliminarItem(item) {
    this.confirmRemoveItem(item);
  }
  // Método para calcular el total formateado a 2 decimales
  calcularTotal() {
    return this.total.toFixed(2) + '€';
  }
  // Método para procesar la compra
  procesarCompra() {
    this.checkout();
  }
  // Método para confirmar eliminación con SweetAlert
  confirmRemoveItem(item) {
    // Activar bandera de eliminación
    this.isRemoving = true;
    console.log('CartComponent: Iniciando proceso de eliminación para', item.nombre);
    // Utilizar SweetAlert2 para confirmar
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: '¿Eliminar este producto?',
      text: '¿Estás seguro de que deseas eliminar este producto del carrito?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#52667a',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      allowOutsideClick: false,
      allowEscapeKey: false
    }).then(result => {
      this.zone.run(() => {
        if (result.isConfirmed) {
          // Comprobar cuántos productos quedarán después de eliminar este
          const itemsRemaining = this.cartItems.length - 1;
          // Eliminar el item del carrito
          this.removeItem(item.id, item.color || '');
          // SOLO resetear isRemoving y cerrar el carrito si no quedarán más artículos
          if (itemsRemaining <= 0) {
            setTimeout(() => {
              this.isRemoving = false;
              this.closeCart();
            }, 500);
          } else {
            // Mantener el carrito abierto cuando quedan más artículos
            setTimeout(() => {
              this.isRemoving = false;
              this.fixPriceFormat();
            }, 500);
          }
        } else {
          // Canceló la eliminación
          this.isRemoving = false;
        }
      });
    });
  }
  // Método para eliminar un item del carrito
  removeItem(id, color) {
    // Llamar al método del servicio para eliminar el item
    this.cartService.removeItem(id, color);
  }
  // Método para actualizar cantidad desde el componente OrderLine
  updateQuantity(data) {
    this.cartService.updateItemQuantity(data.line.idprod, data.line.color, data.newQuantity);
    // Corregir el formato del total después de actualizar
    setTimeout(() => {
      this.fixPriceFormat();
    }, 100);
  }
  // ✅ MÉTODO CHECKOUT CORREGIDO
  checkout() {
    console.log('🛒 Iniciando checkout desde carrito');
    // Verificar que el carrito no esté vacío
    if (this.cartItems.length === 0) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: 'El carrito está vacío',
        icon: 'info',
        confirmButtonColor: '#52667a'
      });
      return;
    }
    // Verificar autenticación
    if (!this.authService.currentUserValue) {
      console.log('🔒 Usuario no autenticado, abriendo popup');
      // ✅ SOLO popup, NO navegación manual
      this.loginPopupService.openForCheckout('/checkout');
      // ✅ Cerrar carrito para limpiar la interfaz
      this.closeCart();
      return;
    }
    // ✅ Si está autenticado, proceder al checkout
    console.log('✅ Usuario autenticado, navegando a checkout');
    this.closeCart();
    this.router.navigate(['/checkout']);
  }
  static {
    this.ɵfac = function CartComponent_Factory(t) {
      return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_3__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_login_popup_service__WEBPACK_IMPORTED_MODULE_4__.LoginPopupService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: CartComponent,
      selectors: [["app-cart"]],
      decls: 11,
      vars: 5,
      consts: [[1, "cart-modal", 3, "ngClass"], [1, "cart-overlay", 3, "click"], [1, "cart-popup"], [1, "cart-header"], [1, "close-cart", 3, "click"], ["class", "cart-content", 4, "ngIf", "ngIfElse"], ["emptyCart", ""], [1, "cart-content"], [1, "cart-table-container"], [1, "cart-table"], [1, "articulo-col"], [1, "color-col"], [1, "cantidad-col"], [1, "precio-col"], [1, "precio-total-col"], [1, "acciones-col"], [4, "ngFor", "ngForOf"], [1, "cart-footer"], [1, "cart-total-row"], [1, "total-label"], [1, "total-value"], [1, "procesar-compra-btn", 3, "click"], ["data-label", "Art\u00EDculo", 1, "articulo-cell"], [3, "src", "alt", "error"], [1, "articulo-nombre"], ["data-label", "Color"], ["data-label", "Cantidad", 1, "cantidad-cell"], [1, "quantity-controls"], [1, "qty-btn", 3, "disabled", "click"], [1, "qty-value"], [1, "qty-btn", 3, "click"], ["data-label", "Precio(u)", 1, "precio-cell"], ["data-label", "Precio (total)", 1, "precio-total-cell"], [1, "acciones-cell"], [1, "remove-item", 3, "click"], [1, "empty-cart"], [1, "continue-shopping-btn", 3, "click"]],
      template: function CartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CartComponent_Template_div_click_1_listener() {
            return ctx.cerrarCarrito();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Tu Carrito");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CartComponent_Template_button_click_6_listener() {
            return ctx.cerrarCarrito();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, CartComponent_div_8_Template, 27, 5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, CartComponent_ng_template_9_Template, 7, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c0, ctx.cartService.isCartOpen));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.cartItems && ctx.cartItems.length > 0)("ngIfElse", _r1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe],
      styles: ["@charset \"UTF-8\";\n\n\n\n\n[style*=\"display: none\"].cart-popup.active[_ngcontent-%COMP%] {\n  display: block !important;\n}\n\n\n\n.cart-popup[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0.95); \n\n  background-color: white;\n  z-index: 9999 !important;\n  display: flex;\n  flex-direction: column;\n  width: 80%; \n\n  max-width: 800px; \n\n  max-height: 90vh; \n\n  border-radius: 8px;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n  overflow: hidden;\n}\n.cart-popup.active[_ngcontent-%COMP%] {\n  opacity: 1 !important;\n  visibility: visible !important;\n  transform: translate(-50%, -50%) scale(1) !important; \n\n}\n\n.cart-modal[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n.cart-modal.active[_ngcontent-%COMP%] {\n  display: block !important;\n}\n\n.cart-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 9998 !important;\n}\n.cart-overlay.active[_ngcontent-%COMP%] {\n  display: block !important;\n  opacity: 1 !important;\n  visibility: visible !important;\n}\n\nbody.cart-open[_ngcontent-%COMP%] {\n  overflow: hidden !important;\n}\n\n@keyframes _ngcontent-%COMP%_fadeInScale {\n  0% {\n    opacity: 0;\n    transform: translate(-50%, -50%) scale(0.95);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1);\n  }\n}\n\n\n.cart-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n}\n\n.cart-table-container[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 0 20px;\n  max-height: calc(70vh - 60px); \n\n}\n\n\n\n.cart-footer[_ngcontent-%COMP%] {\n  margin-top: auto;\n  background-color: #f8f8f8;\n  border-top: 1px solid #eaeaea;\n}\n\n\n\n.cart-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 20px;\n  border-bottom: 1px solid #eaeaea;\n  background-color: #52667a;\n  color: white;\n}\n.cart-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 500;\n}\n.cart-header[_ngcontent-%COMP%]   .close-cart[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: white;\n  font-size: 28px;\n  cursor: pointer;\n  padding: 0;\n  line-height: 0.8;\n  transition: transform 0.2s;\n}\n.cart-header[_ngcontent-%COMP%]   .close-cart[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n}\n\n\n\n.cart-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin: 15px 0;\n  \n\n  \n\n  \n\n  \n\n  \n\n}\n.cart-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .cart-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 10px;\n  text-align: left;\n  border-bottom: 1px solid #eaeaea;\n}\n.cart-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  font-weight: 600;\n  color: #333;\n  font-size: 0.9rem;\n  text-transform: uppercase;\n}\n.cart-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background-color 0.2s;\n}\n.cart-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f9f9f9;\n}\n.cart-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #eaeaea;\n}\n.cart-table[_ngcontent-%COMP%]   .articulo-col[_ngcontent-%COMP%] {\n  width: 30%;\n}\n.cart-table[_ngcontent-%COMP%]   .color-col[_ngcontent-%COMP%] {\n  width: 15%;\n}\n.cart-table[_ngcontent-%COMP%]   .cantidad-col[_ngcontent-%COMP%] {\n  width: 15%;\n  text-align: center;\n}\n.cart-table[_ngcontent-%COMP%]   .precio-col[_ngcontent-%COMP%] {\n  width: 15%;\n  text-align: center;\n}\n.cart-table[_ngcontent-%COMP%]   .precio-total-col[_ngcontent-%COMP%] {\n  width: 15%;\n  text-align: right;\n}\n.cart-table[_ngcontent-%COMP%]   .acciones-col[_ngcontent-%COMP%] {\n  width: 5%;\n  text-align: center;\n}\n.cart-table[_ngcontent-%COMP%]   .articulo-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.cart-table[_ngcontent-%COMP%]   .articulo-cell[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  object-fit: cover;\n  margin-right: 15px;\n  border-radius: 4px;\n  border: 1px solid #eaeaea;\n}\n.cart-table[_ngcontent-%COMP%]   .articulo-cell[_ngcontent-%COMP%]   .articulo-nombre[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.cart-table[_ngcontent-%COMP%]   .cantidad-cell[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.cart-table[_ngcontent-%COMP%]   .cantidad-cell[_ngcontent-%COMP%]   .quantity-controls[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.cart-table[_ngcontent-%COMP%]   .cantidad-cell[_ngcontent-%COMP%]   .quantity-controls[_ngcontent-%COMP%]   .qty-btn[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  background-color: #f0f0f0;\n  border: none;\n  font-size: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.cart-table[_ngcontent-%COMP%]   .cantidad-cell[_ngcontent-%COMP%]   .quantity-controls[_ngcontent-%COMP%]   .qty-btn[_ngcontent-%COMP%]:hover {\n  background-color: #e0e0e0;\n}\n.cart-table[_ngcontent-%COMP%]   .cantidad-cell[_ngcontent-%COMP%]   .quantity-controls[_ngcontent-%COMP%]   .qty-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cart-table[_ngcontent-%COMP%]   .cantidad-cell[_ngcontent-%COMP%]   .quantity-controls[_ngcontent-%COMP%]   .qty-value[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  min-width: 20px;\n  text-align: center;\n  font-weight: 500;\n}\n.cart-table[_ngcontent-%COMP%]   .precio-cell[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 500;\n}\n.cart-table[_ngcontent-%COMP%]   .precio-total-cell[_ngcontent-%COMP%] {\n  text-align: right;\n  font-weight: 600;\n  color: #52667a;\n}\n.cart-table[_ngcontent-%COMP%]   .acciones-cell[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.cart-table[_ngcontent-%COMP%]   .acciones-cell[_ngcontent-%COMP%]   .remove-item[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #e74c3c;\n  font-size: 18px;\n  font-weight: bold;\n  cursor: pointer;\n  padding: 5px 8px;\n  border-radius: 50%;\n  transition: all 0.2s;\n}\n.cart-table[_ngcontent-%COMP%]   .acciones-cell[_ngcontent-%COMP%]   .remove-item[_ngcontent-%COMP%]:hover {\n  background-color: #ffeeee;\n  transform: scale(1.1);\n}\n\n\n\n.cart-total-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 15px 20px;\n  background-color: #f8f8f8;\n}\n.cart-total-row[_ngcontent-%COMP%]   .total-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-right: 20px;\n  font-size: 1.1em;\n}\n.cart-total-row[_ngcontent-%COMP%]   .total-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.3em;\n  color: #52667a;\n  min-width: 100px;\n  text-align: right;\n}\n\n\n\n.procesar-compra-btn[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 15px;\n  background-color: #52667a;\n  color: white;\n  border: none;\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-size: 0.9em;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.procesar-compra-btn[_ngcontent-%COMP%]:hover {\n  background-color: #3d4d5c;\n}\n\n\n\n.empty-cart[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 50px 20px;\n  text-align: center;\n}\n.empty-cart[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n  margin-bottom: 15px;\n  color: #555;\n}\n.empty-cart[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #777;\n  margin-bottom: 25px;\n}\n.empty-cart[_ngcontent-%COMP%]   .continue-shopping-btn[_ngcontent-%COMP%] {\n  padding: 12px 25px;\n  background-color: #52667a;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-weight: 500;\n  transition: background-color 0.2s;\n  cursor: pointer;\n}\n.empty-cart[_ngcontent-%COMP%]   .continue-shopping-btn[_ngcontent-%COMP%]:hover {\n  background-color: #3d4d5c;\n}\n\n\n\n@media screen and (max-width: 768px) {\n  .cart-popup[_ngcontent-%COMP%] {\n    width: 95%;\n    max-height: 95vh;\n  }\n  .cart-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .cart-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 10px 8px;\n  }\n  .cart-table[_ngcontent-%COMP%]   .color-col[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .cart-table[_ngcontent-%COMP%]   .articulo-col[_ngcontent-%COMP%] {\n    width: 35%;\n  }\n  .cart-table[_ngcontent-%COMP%]   .cantidad-col[_ngcontent-%COMP%], .cart-table[_ngcontent-%COMP%]   .precio-col[_ngcontent-%COMP%], .cart-table[_ngcontent-%COMP%]   .precio-total-col[_ngcontent-%COMP%] {\n    width: 20%;\n  }\n}\n@media screen and (max-width: 576px) {\n  .cart-popup[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    max-height: 100vh;\n    top: 0;\n    left: 0;\n    transform: none;\n    border-radius: 0;\n  }\n  .cart-table[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .cart-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .cart-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .cart-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .cart-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n  }\n  .cart-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n    border: 1px solid #eaeaea;\n    border-radius: 5px;\n    padding: 10px;\n  }\n  .cart-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    text-align: right;\n    padding: 8px 10px;\n    position: relative;\n    border-bottom: 1px solid #f0f0f0;\n  }\n  .cart-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n  .cart-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-label);\n    position: absolute;\n    left: 10px;\n    width: 50%;\n    white-space: nowrap;\n    font-weight: 600;\n    text-align: left;\n  }\n  .cart-table[_ngcontent-%COMP%]   .articulo-cell[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: flex-end;\n  }\n  .cart-table[_ngcontent-%COMP%]   .articulo-cell[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    order: 2;\n    margin-right: 0;\n    margin-left: 15px;\n  }\n  .cart-table[_ngcontent-%COMP%]   .articulo-cell[_ngcontent-%COMP%]   .articulo-nombre[_ngcontent-%COMP%] {\n    order: 1;\n  }\n  .cart-table[_ngcontent-%COMP%]   .cantidad-cell[_ngcontent-%COMP%] {\n    justify-content: flex-end;\n  }\n  .cart-table[_ngcontent-%COMP%]   .cantidad-cell[_ngcontent-%COMP%]   .quantity-controls[_ngcontent-%COMP%] {\n    justify-content: flex-end;\n  }\n  .cart-total-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-end;\n  }\n  .cart-total-row[_ngcontent-%COMP%]   .total-label[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-bottom: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uLy4uL2FuZ3VsYXIlMjAxOS80MCUyMHRhdG9vZGVuZGElMjBhcnN5cy9mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9jb21wb25lbnRzL2NhcnQvY2FydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsY0FBQTtBQU9BLG1EQUFBO0FBQ0E7RUFDRSx5QkFBQTtBREpGOztBQ09BLHNDQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw0Q0FBQSxFQUFBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUEsRUFBQSxtQkFBQTtFQUNBLGdCQUFBLEVBQUEsaUJBQUE7RUFDQSxnQkFBQSxFQUFBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QURKRjtBQ01FO0VBQ0UscUJBQUE7RUFDQSw4QkFBQTtFQUNBLG9EQUFBLEVBQUEscUJBQUE7QURKSjs7QUNRQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QURMRjtBQ09FO0VBQ0UseUJBQUE7QURMSjs7QUNTQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSx3QkFBQTtBRE5GO0FDT0U7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QURMSjs7QUNVQTtFQUNFLDJCQUFBO0FEUEY7O0FDVUE7RUFDRTtJQUNFLFVBQUE7SUFDQSw0Q0FBQTtFRFBGO0VDU0E7SUFDRSxVQUFBO0lBQ0EseUNBQUE7RURQRjtBQUNGO0FDVUEscUNBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRFJGOztBQ1dBO0VBQ0UsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBLEVBQUEsbUNBQUE7QURSRjs7QUNXQSx1QkFBQTtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0FEUkY7O0FDV0EsMkJBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQWhIUTtFQWlIUixZQUFBO0FEUkY7QUNVRTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURSSjtBQ1dFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QURUSjtBQ1dJO0VBQ0UscUJBQUE7QURUTjs7QUNjQSxzQkFBQTtBQUNBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQStCQSx5QkFBQTtFQTZCQSxpQ0FBQTtFQW1CQSxzQkFBQTtFQTBDQSxxQkFBQTtFQVlBLHNCQUFBO0FEM0lGO0FDUUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUROSjtBQ1NFO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBRFBKO0FDVUU7RUFDRSxpQ0FBQTtBRFJKO0FDVUk7RUFDRSx5QkFBQTtBRFJOO0FDV0k7RUFDRSxnQ0FBQTtBRFROO0FDY0U7RUFDRSxVQUFBO0FEWko7QUNlRTtFQUNFLFVBQUE7QURiSjtBQ2dCRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBRGRKO0FDaUJFO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FEZko7QUNrQkU7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QURoQko7QUNtQkU7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7QURqQko7QUNxQkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QURuQko7QUNxQkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FEbkJOO0FDc0JJO0VBQ0UsZ0JBQUE7QURwQk47QUN5QkU7RUFDRSxrQkFBQTtBRHZCSjtBQ3lCSTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUR2Qk47QUN5Qk07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBRHZCUjtBQ3lCUTtFQUNFLHlCQUFBO0FEdkJWO0FDMEJRO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FEeEJWO0FDNEJNO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEMUJSO0FDZ0NFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBRDlCSjtBQ2lDRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQS9RTTtBRGdQVjtBQ21DRTtFQUNFLGtCQUFBO0FEakNKO0FDbUNJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QURqQ047QUNtQ007RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FEakNSOztBQ3VDQSxtQkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FEcENGO0FDc0NFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEcENKO0FDdUNFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBMVRNO0VBMlROLGdCQUFBO0VBQ0EsaUJBQUE7QURyQ0o7O0FDeUNBLDZCQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFyVVE7RUFzVVIsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBRHRDRjtBQ3dDRTtFQUNFLHlCQS9VVztBRHlTZjs7QUMwQ0EsNkJBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FEdkNGO0FDeUNFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUR2Q0o7QUMwQ0U7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUR4Q0o7QUMyQ0U7RUFDRSxrQkFBQTtFQUNBLHlCQTFXTTtFQTJXTixZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7QUR6Q0o7QUMyQ0k7RUFDRSx5QkFsWFM7QUR5VWY7O0FDOENBLGVBQUE7QUFDQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLGdCQUFBO0VEM0NGO0VDK0NFO0lBQ0UsaUJBQUE7RUQ3Q0o7RUNnREU7SUFDRSxhQUFBO0VEOUNKO0VDaURFO0lBQ0UsVUFBQTtFRC9DSjtFQ2tERTtJQUNFLFVBQUE7RURoREo7QUFDRjtBQ29EQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtJQUNBLE1BQUE7SUFDQSxPQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VEbERGO0VDcURBO0lBQ0UsY0FBQTtFRG5ERjtFQ3FERTtJQUNFLGFBQUE7RURuREo7RUNzREU7SUFDRSxjQUFBO0lBQ0EsV0FBQTtFRHBESjtFQ3VERTtJQUNFLG1CQUFBO0lBQ0EseUJBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7RURyREo7RUN3REU7SUFDRSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQ0FBQTtFRHRESjtFQ3dESTtJQUNFLG1CQUFBO0VEdEROO0VDeURJO0lBQ0UseUJBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0VEdkROO0VDMkRFO0lBQ0UsYUFBQTtJQUNBLHlCQUFBO0VEekRKO0VDMkRJO0lBQ0UsUUFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFRHpETjtFQzRESTtJQUNFLFFBQUE7RUQxRE47RUM4REU7SUFDRSx5QkFBQTtFRDVESjtFQzhESTtJQUNFLHlCQUFBO0VENUROO0VDaUVBO0lBQ0Usc0JBQUE7SUFDQSxxQkFBQTtFRC9ERjtFQ2lFRTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtFRC9ESjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyogVmFyaWFibGVzICovXG4vKiBBc2VndXJhciBxdWUgbG9zIGVzdGlsb3MgaW5saW5lIG5vIGludGVyZmllcmFuICovXG5bc3R5bGUqPVwiZGlzcGxheTogbm9uZVwiXS5jYXJ0LXBvcHVwLmFjdGl2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi8qIEVzdGlsb3MgcGFyYSBlbCBtb2RhbCBkZWwgY2Fycml0byAqL1xuLmNhcnQtcG9wdXAge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAuOTUpOyAvKiBJbmljaW8gcGFyYSBhbmltYWNpw4PCs24gKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDk5OTkgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDgwJTsgLyogQW5jaG8gcmVsYXRpdm8gKi9cbiAgbWF4LXdpZHRoOiA4MDBweDsgLyogTcODwqF4aW1vIGFuY2hvICovXG4gIG1heC1oZWlnaHQ6IDkwdmg7IC8qIEFsdHVyYSBtw4PCoXhpbWEgKi9cbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDVweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNhcnQtcG9wdXAuYWN0aXZlIHtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpICFpbXBvcnRhbnQ7IC8qIEZpbiBkZSBhbmltYWNpw4PCs24gKi9cbn1cblxuLmNhcnQtbW9kYWwge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMTAwMDtcbn1cbi5jYXJ0LW1vZGFsLmFjdGl2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJ0LW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB6LWluZGV4OiA5OTk4ICFpbXBvcnRhbnQ7XG59XG4uY2FydC1vdmVybGF5LmFjdGl2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xufVxuXG5ib2R5LmNhcnQtb3BlbiB7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW5TY2FsZSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAuOTUpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XG4gIH1cbn1cbi8qIENvbnRlbmlkbyBkZWwgY2Fycml0byBjb24gc2Nyb2xsICovXG4uY2FydC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY2FydC10YWJsZS1jb250YWluZXIge1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIG1heC1oZWlnaHQ6IGNhbGMoNzB2aCAtIDYwcHgpOyAvKiBBanVzdGUgcGFyYSBlbCBoZWFkZXIgeSBmb290ZXIgKi9cbn1cblxuLyogRm9vdGVyIGRlbCBjYXJyaXRvICovXG4uY2FydC1mb290ZXIge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcbn1cblxuLyogRW5jYWJlemFkbyBkZWwgY2Fycml0byAqL1xuLmNhcnQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWFlYWVhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI2NjdhO1xuICBjb2xvcjogd2hpdGU7XG59XG4uY2FydC1oZWFkZXIgaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jYXJ0LWhlYWRlciAuY2xvc2UtY2FydCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgbGluZS1oZWlnaHQ6IDAuODtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG59XG4uY2FydC1oZWFkZXIgLmNsb3NlLWNhcnQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbi8qIFRhYmxhIGRlbCBjYXJyaXRvICovXG4uY2FydC10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBtYXJnaW46IDE1cHggMDtcbiAgLyogQ29sdW1uYXMgZXNwZWPDg8KtZmljYXMgKi9cbiAgLyogQ2VsZGEgZGUgYXJ0w4PCrWN1bG8gY29uIGltYWdlbiAqL1xuICAvKiBDZWxkYSBkZSBjYW50aWRhZCAqL1xuICAvKiBDZWxkYXMgZGUgcHJlY2lvICovXG4gIC8qIENlbGRhIGRlIGFjY2lvbmVzICovXG59XG4uY2FydC10YWJsZSB0aCwgLmNhcnQtdGFibGUgdGQge1xuICBwYWRkaW5nOiAxMnB4IDEwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWFlYWVhO1xufVxuLmNhcnQtdGFibGUgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5jYXJ0LXRhYmxlIHRib2R5IHRyIHtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xufVxuLmNhcnQtdGFibGUgdGJvZHkgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xufVxuLmNhcnQtdGFibGUgdGJvZHkgdHI6bGFzdC1jaGlsZCB0ZCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWFlYWVhO1xufVxuLmNhcnQtdGFibGUgLmFydGljdWxvLWNvbCB7XG4gIHdpZHRoOiAzMCU7XG59XG4uY2FydC10YWJsZSAuY29sb3ItY29sIHtcbiAgd2lkdGg6IDE1JTtcbn1cbi5jYXJ0LXRhYmxlIC5jYW50aWRhZC1jb2wge1xuICB3aWR0aDogMTUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2FydC10YWJsZSAucHJlY2lvLWNvbCB7XG4gIHdpZHRoOiAxNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jYXJ0LXRhYmxlIC5wcmVjaW8tdG90YWwtY29sIHtcbiAgd2lkdGg6IDE1JTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uY2FydC10YWJsZSAuYWNjaW9uZXMtY29sIHtcbiAgd2lkdGg6IDUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2FydC10YWJsZSAuYXJ0aWN1bG8tY2VsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY2FydC10YWJsZSAuYXJ0aWN1bG8tY2VsbCBpbWcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XG59XG4uY2FydC10YWJsZSAuYXJ0aWN1bG8tY2VsbCAuYXJ0aWN1bG8tbm9tYnJlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jYXJ0LXRhYmxlIC5jYW50aWRhZC1jZWxsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhcnQtdGFibGUgLmNhbnRpZGFkLWNlbGwgLnF1YW50aXR5LWNvbnRyb2xzIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jYXJ0LXRhYmxlIC5jYW50aWRhZC1jZWxsIC5xdWFudGl0eS1jb250cm9scyAucXR5LWJ0biB7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG59XG4uY2FydC10YWJsZSAuY2FudGlkYWQtY2VsbCAucXVhbnRpdHktY29udHJvbHMgLnF0eS1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xufVxuLmNhcnQtdGFibGUgLmNhbnRpZGFkLWNlbGwgLnF1YW50aXR5LWNvbnRyb2xzIC5xdHktYnRuOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuLmNhcnQtdGFibGUgLmNhbnRpZGFkLWNlbGwgLnF1YW50aXR5LWNvbnRyb2xzIC5xdHktdmFsdWUge1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIG1pbi13aWR0aDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNhcnQtdGFibGUgLnByZWNpby1jZWxsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNhcnQtdGFibGUgLnByZWNpby10b3RhbC1jZWxsIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNTI2NjdhO1xufVxuLmNhcnQtdGFibGUgLmFjY2lvbmVzLWNlbGwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2FydC10YWJsZSAuYWNjaW9uZXMtY2VsbCAucmVtb3ZlLWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZTc0YzNjO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDVweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG4uY2FydC10YWJsZSAuYWNjaW9uZXMtY2VsbCAucmVtb3ZlLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlZWVlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi8qIEZpbGEgZGVsIHRvdGFsICovXG4uY2FydC10b3RhbC1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG59XG4uY2FydC10b3RhbC1yb3cgLnRvdGFsLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxLjFlbTtcbn1cbi5jYXJ0LXRvdGFsLXJvdyAudG90YWwtdmFsdWUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEuM2VtO1xuICBjb2xvcjogIzUyNjY3YTtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi8qIEJvdMODwrNuIGRlIHByb2Nlc2FyIGNvbXByYSAqL1xuLnByb2Nlc2FyLWNvbXByYS1idG4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjY2N2E7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG59XG4ucHJvY2VzYXItY29tcHJhLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDRkNWM7XG59XG5cbi8qIE1lbnNhamUgZGUgY2Fycml0byB2YWPDg8KtbyAqL1xuLmVtcHR5LWNhcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogNTBweCAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZW1wdHktY2FydCBoMyB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGNvbG9yOiAjNTU1O1xufVxuLmVtcHR5LWNhcnQgcCB7XG4gIGNvbG9yOiAjNzc3O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLmVtcHR5LWNhcnQgLmNvbnRpbnVlLXNob3BwaW5nLWJ0biB7XG4gIHBhZGRpbmc6IDEycHggMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyNjY3YTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZW1wdHktY2FydCAuY29udGludWUtc2hvcHBpbmctYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkNGQ1Yztcbn1cblxuLyogUmVzcG9uc2l2ZSAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNhcnQtcG9wdXAge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWF4LWhlaWdodDogOTV2aDtcbiAgfVxuICAuY2FydC10YWJsZSB0aCwgLmNhcnQtdGFibGUgdGQge1xuICAgIHBhZGRpbmc6IDEwcHggOHB4O1xuICB9XG4gIC5jYXJ0LXRhYmxlIC5jb2xvci1jb2wge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmNhcnQtdGFibGUgLmFydGljdWxvLWNvbCB7XG4gICAgd2lkdGg6IDM1JTtcbiAgfVxuICAuY2FydC10YWJsZSAuY2FudGlkYWQtY29sLCAuY2FydC10YWJsZSAucHJlY2lvLWNvbCwgLmNhcnQtdGFibGUgLnByZWNpby10b3RhbC1jb2wge1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5jYXJ0LXBvcHVwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwdmg7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbiAgLmNhcnQtdGFibGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5jYXJ0LXRhYmxlIHRoZWFkIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5jYXJ0LXRhYmxlIHRib2R5LCAuY2FydC10YWJsZSB0ciwgLmNhcnQtdGFibGUgdGQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5jYXJ0LXRhYmxlIHRyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgLmNhcnQtdGFibGUgdGQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcbiAgfVxuICAuY2FydC10YWJsZSB0ZDpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICB9XG4gIC5jYXJ0LXRhYmxlIHRkOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICAuY2FydC10YWJsZSAuYXJ0aWN1bG8tY2VsbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG4gIC5jYXJ0LXRhYmxlIC5hcnRpY3Vsby1jZWxsIGltZyB7XG4gICAgb3JkZXI6IDI7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB9XG4gIC5jYXJ0LXRhYmxlIC5hcnRpY3Vsby1jZWxsIC5hcnRpY3Vsby1ub21icmUge1xuICAgIG9yZGVyOiAxO1xuICB9XG4gIC5jYXJ0LXRhYmxlIC5jYW50aWRhZC1jZWxsIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG4gIC5jYXJ0LXRhYmxlIC5jYW50aWRhZC1jZWxsIC5xdWFudGl0eS1jb250cm9scyB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuICAuY2FydC10b3RhbC1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICB9XG4gIC5jYXJ0LXRvdGFsLXJvdyAudG90YWwtbGFiZWwge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbn0iLCIvKiBWYXJpYWJsZXMgKi9cbiRwcmltYXJ5OiAjNTI2NjdhO1xuJHByaW1hcnktZGFyazogIzNkNGQ1YztcbiRwcmltYXJ5LWxpZ2h0OiAjYzJjZGQ2O1xuJGJhY2tncm91bmQ6IHdoaXRlO1xuJGRlZmF1bHQtZm9udDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuXG4vKiBBc2VndXJhciBxdWUgbG9zIGVzdGlsb3MgaW5saW5lIG5vIGludGVyZmllcmFuICovXG5bc3R5bGUqPVwiZGlzcGxheTogbm9uZVwiXS5jYXJ0LXBvcHVwLmFjdGl2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi8qIEVzdGlsb3MgcGFyYSBlbCBtb2RhbCBkZWwgY2Fycml0byAqL1xuLmNhcnQtcG9wdXAge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAuOTUpOyAvKiBJbmljaW8gcGFyYSBhbmltYWNpw4PCs24gKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDk5OTkgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDgwJTsgLyogQW5jaG8gcmVsYXRpdm8gKi9cbiAgbWF4LXdpZHRoOiA4MDBweDsgLyogTcODwqF4aW1vIGFuY2hvICovXG4gIG1heC1oZWlnaHQ6IDkwdmg7IC8qIEFsdHVyYSBtw4PCoXhpbWEgKi9cbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDVweCAyMHB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBcbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSkgIWltcG9ydGFudDsgLyogRmluIGRlIGFuaW1hY2nDg8KzbiAqL1xuICB9XG59XG5cbi5jYXJ0LW1vZGFsIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIFxuICAmLmFjdGl2ZSB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxufVxuXG4uY2FydC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgei1pbmRleDogOTk5OCAhaW1wb3J0YW50O1xuICAmLmFjdGl2ZSB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8vIEFzZWd1cmFyIHF1ZSBlbCBDU1MgcGFyYSBlbCBib2R5IHRhbWJpw4PCqW4gZXN0w4PCoSBjb3JyZWN0b1xuYm9keS5jYXJ0LW9wZW4ge1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluU2NhbGUge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLjk1KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xuICB9XG59XG5cbi8qIENvbnRlbmlkbyBkZWwgY2Fycml0byBjb24gc2Nyb2xsICovXG4uY2FydC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY2FydC10YWJsZS1jb250YWluZXIge1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIG1heC1oZWlnaHQ6IGNhbGMoNzB2aCAtIDYwcHgpOyAvKiBBanVzdGUgcGFyYSBlbCBoZWFkZXIgeSBmb290ZXIgKi9cbn1cblxuLyogRm9vdGVyIGRlbCBjYXJyaXRvICovXG4uY2FydC1mb290ZXIge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcbn1cblxuLyogRW5jYWJlemFkbyBkZWwgY2Fycml0byAqL1xuLmNhcnQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWFlYWVhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcbiAgY29sb3I6IHdoaXRlO1xuICBcbiAgaDIge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBcbiAgLmNsb3NlLWNhcnQge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGluZS1oZWlnaHQ6IDAuODtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICB9XG4gIH1cbn1cblxuLyogVGFibGEgZGVsIGNhcnJpdG8gKi9cbi5jYXJ0LXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIG1hcmdpbjogMTVweCAwO1xuICBcbiAgdGgsIHRkIHtcbiAgICBwYWRkaW5nOiAxMnB4IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VhZWFlYTtcbiAgfVxuICBcbiAgdGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogMTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgXG4gIHRib2R5IHRyIHtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICAgIH1cbiAgICBcbiAgICAmOmxhc3QtY2hpbGQgdGQge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlYWVhZWE7XG4gICAgfVxuICB9XG4gIFxuICAvKiBDb2x1bW5hcyBlc3BlY8ODwq1maWNhcyAqL1xuICAuYXJ0aWN1bG8tY29sIHtcbiAgICB3aWR0aDogMzAlO1xuICB9XG4gIFxuICAuY29sb3ItY29sIHtcbiAgICB3aWR0aDogMTUlO1xuICB9XG4gIFxuICAuY2FudGlkYWQtY29sIHtcbiAgICB3aWR0aDogMTUlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLnByZWNpby1jb2wge1xuICAgIHdpZHRoOiAxNSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAucHJlY2lvLXRvdGFsLWNvbCB7XG4gICAgd2lkdGg6IDE1JTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuICBcbiAgLmFjY2lvbmVzLWNvbCB7XG4gICAgd2lkdGg6IDUlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLyogQ2VsZGEgZGUgYXJ0w4PCrWN1bG8gY29uIGltYWdlbiAqL1xuICAuYXJ0aWN1bG8tY2VsbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIFxuICAgIGltZyB7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcbiAgICB9XG4gICAgXG4gICAgLmFydGljdWxvLW5vbWJyZSB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgfVxuICBcbiAgLyogQ2VsZGEgZGUgY2FudGlkYWQgKi9cbiAgLmNhbnRpZGFkLWNlbGwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbiAgICAucXVhbnRpdHktY29udHJvbHMge1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBcbiAgICAgIC5xdHktYnRuIHtcbiAgICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICAgIGhlaWdodDogMjhweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbiAgICAgICAgXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5xdHktdmFsdWUge1xuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgIG1pbi13aWR0aDogMjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLyogQ2VsZGFzIGRlIHByZWNpbyAqL1xuICAucHJlY2lvLWNlbGwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIFxuICAucHJlY2lvLXRvdGFsLWNlbGwge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICRwcmltYXJ5O1xuICB9XG4gIFxuICAvKiBDZWxkYSBkZSBhY2Npb25lcyAqL1xuICAuYWNjaW9uZXMtY2VsbCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxuICAgIC5yZW1vdmUtaXRlbSB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgY29sb3I6ICNlNzRjM2M7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHBhZGRpbmc6IDVweCA4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICAgIFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmVlZWU7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogRmlsYSBkZWwgdG90YWwgKi9cbi5jYXJ0LXRvdGFsLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgXG4gIC50b3RhbC1sYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gIH1cbiAgXG4gIC50b3RhbC12YWx1ZSB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG59XG5cbi8qIEJvdMODwrNuIGRlIHByb2Nlc2FyIGNvbXByYSAqL1xuLnByb2Nlc2FyLWNvbXByYS1idG4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuICBcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktZGFyaztcbiAgfVxufVxuXG4vKiBNZW5zYWplIGRlIGNhcnJpdG8gdmFjw4PCrW8gKi9cbi5lbXB0eS1jYXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDUwcHggMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBjb2xvcjogIzU1NTtcbiAgfVxuICBcbiAgcCB7XG4gICAgY29sb3I6ICM3Nzc7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgfVxuICBcbiAgLmNvbnRpbnVlLXNob3BwaW5nLWJ0biB7XG4gICAgcGFkZGluZzogMTJweCAyNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWRhcms7XG4gICAgfVxuICB9XG59XG5cbi8qIFJlc3BvbnNpdmUgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJ0LXBvcHVwIHtcbiAgICB3aWR0aDogOTUlO1xuICAgIG1heC1oZWlnaHQ6IDk1dmg7XG4gIH1cbiAgXG4gIC5jYXJ0LXRhYmxlIHtcbiAgICB0aCwgdGQge1xuICAgICAgcGFkZGluZzogMTBweCA4cHg7XG4gICAgfVxuICAgIFxuICAgIC5jb2xvci1jb2wge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgLmFydGljdWxvLWNvbCB7XG4gICAgICB3aWR0aDogMzUlO1xuICAgIH1cbiAgICBcbiAgICAuY2FudGlkYWQtY29sLCAucHJlY2lvLWNvbCwgLnByZWNpby10b3RhbC1jb2wge1xuICAgICAgd2lkdGg6IDIwJTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmNhcnQtcG9wdXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuICBcbiAgLmNhcnQtdGFibGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIFxuICAgIHRoZWFkIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIFxuICAgIHRib2R5LCB0ciwgdGQge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgXG4gICAgdHIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbiAgICBcbiAgICB0ZCB7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XG4gICAgICBcbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICB9XG4gICAgICBcbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLmFydGljdWxvLWNlbGwge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBcbiAgICAgIGltZyB7XG4gICAgICAgIG9yZGVyOiAyO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgfVxuICAgICAgXG4gICAgICAuYXJ0aWN1bG8tbm9tYnJlIHtcbiAgICAgICAgb3JkZXI6IDE7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5jYW50aWRhZC1jZWxsIHtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBcbiAgICAgIC5xdWFudGl0eS1jb250cm9scyB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAuY2FydC10b3RhbC1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIFxuICAgIC50b3RhbC1sYWJlbCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9215:
/*!***********************************************************!*\
  !*** ./src/app/components/checkout/checkout.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckoutComponent: () => (/* binding */ CheckoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 7581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cart.service */ 6868);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 4796);
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/order.service */ 8674);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/product.service */ 6241);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);










function CheckoutComponent_div_0_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 13)(2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("error", function CheckoutComponent_div_0_tr_48_Template_img_error_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.handleImageError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.getImageSrc(item_r4), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("alt", item_r4.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r4.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r4.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r4.cantidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](11, 7, item_r4.precio, "1.2-2"), " \u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](14, 10, item_r4.precio * item_r4.cantidad, "1.2-2"), " \u20AC");
  }
}
function CheckoutComponent_div_0_span_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "COMPRAR");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CheckoutComponent_div_0_span_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "PROCESANDO...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CheckoutComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CheckoutComponent_div_0_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.closeCheckout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " \u00D7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div")(7, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Se enviar\u00E1 a:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div")(20, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Direcci\u00F3n de facturaci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Productos:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "table")(35, "thead")(36, "tr")(37, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Art\u00EDculo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Precio(u)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "Precio (total)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, CheckoutComponent_div_0_tr_48_Template, 15, 13, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "tfoot")(50, "tr")(51, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](55, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 10)(57, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CheckoutComponent_div_0_Template_button_click_57_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.placeOrder());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](58, CheckoutComponent_div_0_span_58_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](59, CheckoutComponent_div_0_span_59_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.currentUser.nombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.currentUser.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.currentUser.direccion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.currentUser.cp, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.currentUser.ciudad, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.currentUser.nombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.currentUser.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.currentUser.direccion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.currentUser.cp, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.currentUser.ciudad, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.cartItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](55, 15, ctx_r0.total, "1.2-2"), " \u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.loading);
  }
}
class CheckoutComponent {
  constructor(formBuilder, cartService, authService, orderService, router, productService) {
    this.formBuilder = formBuilder;
    this.cartService = cartService;
    this.authService = authService;
    this.orderService = orderService;
    this.router = router;
    this.productService = productService;
    this.cartItems = [];
    this.total = 0;
    this.loading = false;
    this.showOrder = true;
    this.showDelivery = false;
    this.showPayment = false;
    this.useUserDataDirectly = true;
    console.log('🔧 CheckoutComponent inicializado');
    this.checkoutForm = this.formBuilder.group({
      nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(2)]],
      direccion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(5)]],
      ciudad: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(2)]],
      cp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(/^\d{4,5}$/)]],
      telefono: ['']
    });
  }
  ngOnInit() {
    console.log('🚀 Inicializando CheckoutComponent');
    document.body.style.overflow = 'hidden';
    this.currentUser = this.authService.currentUserValue;
    console.log('👤 Usuario actual:', this.currentUser?.username || 'No autenticado');
    if (!this.currentUser) {
      console.warn('⚠️ Usuario no autenticado, redirigiendo al login');
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: 'Debes iniciar sesión',
        text: 'Para proceder con la compra necesitas estar autenticado',
        icon: 'warning',
        confirmButtonColor: '#52667a'
      }).then(() => {
        this.closeCheckout();
        this.router.navigate(['/login'], {
          queryParams: {
            returnUrl: '/checkout'
          }
        });
      });
      return;
    }
    console.log('🔍 Verificando datos del usuario:', {
      nombre: this.currentUser?.nombre,
      direccion: this.currentUser?.direccion,
      ciudad: this.currentUser?.ciudad,
      cp: this.currentUser?.cp,
      email: this.currentUser?.email
    });
    const hasCompleteUserData = this.currentUser.nombre && this.currentUser.direccion && this.currentUser.ciudad && this.currentUser.cp;
    if (hasCompleteUserData) {
      console.log('✅ Usuario tiene datos completos, usando datos directamente');
      this.useUserDataDirectly = true;
    } else {
      console.log('⚠️ Usuario con datos incompletos, usando formulario');
      this.useUserDataDirectly = false;
    }
    this.cartService.cartItems.subscribe(items => {
      console.log('🛒 Items del carrito recibidos:', items.length);
      this.cartItems = items.map(item => {
        return {
          id: item.id,
          nombre: item.nombre || '',
          color: item.color || 'Estándar',
          cantidad: item.cantidad,
          precio: item.precio,
          imagen: item.imagen || '',
          producto: typeof item.producto === 'object' ? JSON.stringify(item.producto) : item.producto || ''
        };
      });
      this.total = this.cartService.getCartTotal();
      console.log('💰 Total calculado:', this.total);
      if (this.cartItems.length === 0) {
        console.warn('⚠️ Carrito vacío, cerrando checkout');
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
          title: 'Carrito vacío',
          text: 'No hay productos en el carrito para procesar',
          icon: 'info',
          confirmButtonColor: '#52667a'
        }).then(() => {
          this.closeCheckout();
        });
      }
    });
    if (this.currentUser && !this.useUserDataDirectly) {
      console.log('📝 Prellenando formulario con datos del usuario');
      const userData = this.preprocessUserData(this.currentUser);
      this.checkoutForm.patchValue(userData);
      this.checkoutForm.updateValueAndValidity();
      console.log('📊 Estado del formulario después de prellenar:', {
        valid: this.checkoutForm.valid,
        errors: this.getFormErrors(),
        values: this.checkoutForm.value
      });
    }
    document.addEventListener('keydown', this.handleEscapeKey.bind(this));
  }
  ngOnDestroy() {
    console.log('🧹 Destruyendo CheckoutComponent');
    document.body.style.overflow = 'auto';
    document.removeEventListener('keydown', this.handleEscapeKey.bind(this));
  }
  preprocessUserData(user) {
    return {
      nombre: user.nombre || '',
      direccion: user.direccion || '',
      ciudad: user.ciudad || '',
      cp: user.cp || '',
      telefono: user.telefono || ''
    };
  }
  getFormErrors() {
    const errors = {};
    Object.keys(this.checkoutForm.controls).forEach(key => {
      const control = this.checkoutForm.get(key);
      if (control && control.errors) {
        errors[key] = control.errors;
      }
    });
    return errors;
  }
  // En checkout.component.ts, reemplaza el método getImageSrc con este:
  getImageSrc(item) {
    console.log('🖼️ Obteniendo imagen para:', item.nombre, 'Color:', item.color);
    if (item.producto) {
      if (typeof item.producto === 'string') {
        try {
          const productoObj = JSON.parse(item.producto);
          // ✅ CORRECCIÓN: Pasar el color como segundo parámetro
          return this.productService.getProductImageSrc(productoObj, item.color);
        } catch (e) {
          console.error('Error al parsear producto:', e);
          return 'assets/images/default.jpg';
        }
      } else {
        // ✅ CORRECCIÓN: Pasar el color como segundo parámetro
        return this.productService.getProductImageSrc(item.producto, item.color);
      }
    }
    // Fallback: usar la imagen directamente si existe
    if (item.imagen) {
      console.log('✅ Usando imagen directa:', item.imagen);
      return item.imagen;
    }
    console.warn('⚠️ No se encontró imagen, usando default');
    return 'assets/images/default.jpg';
  }
  handleImageError(event) {
    this.productService.handleImageError(event);
  }
  handleEscapeKey(event) {
    if (event.key === 'Escape') {
      console.log('⌨️ Tecla ESC presionada, cerrando checkout');
      this.closeCheckout();
    }
  }
  closeCheckout() {
    console.log('🚪 Cerrando checkout');
    document.body.style.overflow = 'auto';
    this.router.navigate(['/']);
  }
  /**
   * ✅ VERSIÓN CON SOLUCIÓN TEMPORAL
   * Muestra el mensaje de éxito sin el número de pedido si el backend no lo devuelve
   */
  placeOrder() {
    console.log('🚀 Iniciando procesamiento del pedido...');
    if (!this.currentUser) {
      console.error('❌ Error de autenticación durante el procesamiento');
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: 'Error de autenticación',
        text: 'Tu sesión ha expirado. Por favor, inicia sesión nuevamente.',
        icon: 'error',
        confirmButtonColor: '#52667a'
      }).then(() => {
        this.closeCheckout();
        this.router.navigate(['/login']);
      });
      return;
    }
    if (this.cartItems.length === 0) {
      console.warn('⚠️ Intento de procesar pedido con carrito vacío');
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: 'El carrito está vacío',
        text: 'No puedes procesar un pedido sin productos',
        icon: 'warning',
        confirmButtonColor: '#52667a'
      });
      return;
    }
    let shippingData;
    if (this.useUserDataDirectly) {
      console.log('📋 Usando datos del usuario directamente');
      shippingData = {
        nombre: this.currentUser.nombre,
        direccion: this.currentUser.direccion,
        ciudad: this.currentUser.ciudad,
        cp: this.currentUser.cp
      };
      if (!shippingData.nombre || !shippingData.direccion || !shippingData.ciudad || !shippingData.cp) {
        console.warn('⚠️ Datos del usuario incompletos');
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
          title: 'Perfil incompleto',
          text: 'Para proceder con la compra necesitas completar tu perfil (nombre, dirección, ciudad, código postal)',
          icon: 'warning',
          confirmButtonColor: '#52667a',
          showCancelButton: true,
          cancelButtonText: 'Más tarde',
          confirmButtonText: 'Completar perfil'
        }).then(result => {
          if (result.isConfirmed) {
            this.closeCheckout();
            this.router.navigate(['/profile']);
          }
        });
        return;
      }
    } else {
      console.log('📋 Usando datos del formulario');
      console.log('📊 Estado del formulario:', {
        valid: this.checkoutForm.valid,
        errors: this.getFormErrors(),
        values: this.checkoutForm.value
      });
      if (this.checkoutForm.invalid) {
        console.warn('⚠️ Formulario inválido:', this.getFormErrors());
        Object.keys(this.checkoutForm.controls).forEach(key => {
          const control = this.checkoutForm.get(key);
          control?.markAsTouched();
        });
        const errorMessages = Object.keys(this.getFormErrors()).map(field => {
          return `${field}: ${this.getErrorMessage(field)}`;
        }).join('\n');
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
          title: 'Datos incompletos',
          text: `Por favor corrige los siguientes errores:\n${errorMessages}`,
          icon: 'warning',
          confirmButtonColor: '#52667a'
        });
        return;
      }
      shippingData = this.checkoutForm.value;
    }
    console.log('📦 Datos de envío a usar:', shippingData);
    this.loading = true;
    console.log('⏳ Iniciando carga...');
    try {
      // MODIFICA AQUÍ: usa 'cant' y 'precio', que espera el backend
      const orderLines = this.cartItems.map(item => {
        return {
          idpedido: 0,
          idprod: item.id,
          color: item.color || 'Estándar',
          cantidad: item.cantidad,
          precio: !isNaN(Number(item.precio)) && Number(item.precio) > 0 ? Number(item.precio) : item.producto && typeof item.producto === 'object' && item.producto.precio ? Number(item.producto.precio) : 0,
          nombre: item.nombre,
          cant: item.cantidad
        };
      });
      const order = {
        id: 0,
        usuario_id: this.currentUser.id,
        fecha: new Date().toISOString().split('T')[0],
        total: this.total,
        lineas: orderLines,
        estado: 'pendiente'
      };
      if (!this.currentUser?.id) {
        console.error('❌ CRÍTICO: currentUser.id no está disponible');
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
          title: 'Error de sesión',
          text: 'Tu sesión ha expirado. Por favor, inicia sesión nuevamente.',
          icon: 'error',
          confirmButtonColor: '#52667a'
        });
        this.loading = false;
        return;
      }
      console.log('✅ Pedido preparado con usuario_id:', order.usuario_id);
      this.orderService.createOrder(order).subscribe({
        next: response => {
          console.log('✅ Pedido creado exitosamente:', response);
          this.loading = false;
          this.cartService.clearCart();
          console.log('🧹 Carrito vaciado');
          // ✅ Mensaje de éxito, mostrando el número de pedido si lo devuelve el backend
          let mensajeExito = '¡Tu pedido ha sido procesado correctamente!';
          if (response && response.id) {
            mensajeExito = `Tu pedido ha sido procesado correctamente. Número de pedido: ${response.id}`;
            console.log('🎫 Número de pedido:', response.id);
          } else {
            console.warn('⚠️ El backend no devolvió el ID del pedido');
            mensajeExito = 'Tu pedido ha sido procesado correctamente. Podrás verlo en tu historial de pedidos.';
          }
          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: '¡Pago realizado con éxito!',
            text: mensajeExito,
            icon: 'success',
            confirmButtonColor: '#52667a',
            confirmButtonText: 'Ver mis pedidos'
          }).then(() => {
            this.closeCheckout();
            this.router.navigate(['/profile']);
          });
        },
        error: error => {
          console.error('❌ Error al crear el pedido:', error);
          this.loading = false;
          const errorMessage = error.message || 'Hubo un problema al procesar tu pedido. Por favor, inténtalo de nuevo.';
          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: 'Error al procesar el pedido',
            text: errorMessage,
            icon: 'error',
            confirmButtonColor: '#52667a',
            confirmButtonText: 'Intentar de nuevo'
          });
          if (error.status === 401) {
            console.warn('🔒 Error de autenticación, cerrando sesión');
            this.authService.logout();
            this.closeCheckout();
            this.router.navigate(['/login']);
          }
        }
      });
    } catch (error) {
      console.error('💥 Error inesperado:', error);
      this.loading = false;
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: 'Error inesperado',
        text: 'Ocurrió un error inesperado. Por favor, inténtalo de nuevo.',
        icon: 'error',
        confirmButtonColor: '#52667a'
      });
    }
  }
  goToDelivery() {
    this.showOrder = false;
    this.showDelivery = true;
    this.showPayment = false;
  }
  goToPayment() {
    if (!this.useUserDataDirectly && this.checkoutForm.invalid) {
      Object.keys(this.checkoutForm.controls).forEach(key => {
        const control = this.checkoutForm.get(key);
        control?.markAsTouched();
      });
      return;
    }
    this.showOrder = false;
    this.showDelivery = false;
    this.showPayment = true;
  }
  goToOrder() {
    this.showOrder = true;
    this.showDelivery = false;
    this.showPayment = false;
  }
  hasError(field) {
    if (this.useUserDataDirectly) return false;
    const control = this.checkoutForm.get(field);
    return control ? control.invalid && control.touched : false;
  }
  getErrorMessage(field) {
    if (this.useUserDataDirectly) return '';
    const control = this.checkoutForm.get(field);
    if (!control || !control.errors) return '';
    if (control.hasError('required')) {
      return 'Este campo es obligatorio';
    }
    if (control.hasError('minlength')) {
      const minLength = control.errors?.['minlength'].requiredLength;
      return `Debe tener al menos ${minLength} caracteres`;
    }
    if (control.hasError('pattern')) {
      if (field === 'cp') {
        return 'Debe ser un código postal válido de 4-5 dígitos';
      }
      if (field === 'telefono') {
        return 'Debe ser un número de teléfono válido de 9 dígitos';
      }
    }
    return 'Campo inválido';
  }
  convertOrderLinesToCartItems(orderLines) {
    return orderLines.map(line => {
      return {
        id: line.idprod,
        nombre: line.nombre || '',
        cantidad: line.cantidad,
        color: line.color,
        precio: this.findCartItemPrice(line.idprod, line.color),
        imagen: this.findCartItemImage(line.idprod, line.color),
        producto: this.findCartItemProducto(line.idprod, line.color)
      };
    });
  }
  findCartItemPrice(id, color) {
    const item = this.cartItems.find(i => i.id === id && i.color === color);
    return item?.precio ?? 0;
  }
  findCartItemImage(id, color) {
    const item = this.cartItems.find(i => i.id === id && i.color === color);
    return item?.imagen ?? '';
  }
  findCartItemProducto(id, color) {
    const item = this.cartItems.find(i => i.id === id && i.color === color);
    return item?.producto ?? '';
  }
  static {
    this.ɵfac = function CheckoutComponent_Factory(t) {
      return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_order_service__WEBPACK_IMPORTED_MODULE_3__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_4__.ProductService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: CheckoutComponent,
      selectors: [["app-checkout"]],
      decls: 1,
      vars: 1,
      consts: [["class", "checkout-overlay", 4, "ngIf"], [1, "checkout-overlay"], [1, "vercheckout"], ["title", "Cerrar", 1, "close-button", 3, "click"], [1, "modal-content"], ["id", "receptor"], [1, "datos"], [1, "productos-title"], [4, "ngFor", "ngForOf"], ["colspan", "4"], [1, "button-container"], ["id", "comprar", 3, "disabled", "click"], [4, "ngIf"], [1, "articulo-cell"], [3, "src", "alt", "error"], [1, "articulo-nombre"]],
      template: function CheckoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CheckoutComponent_div_0_Template, 60, 18, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currentUser && ctx.cartItems.length > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DecimalPipe],
      styles: ["@charset \"UTF-8\";\n\n\n\n\n.checkout-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 15px;\n  box-sizing: border-box;\n}\n\n\n\n.checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%] {\n  background: white !important;\n  border-radius: 12px !important;\n  max-width: 900px !important;\n  width: 100% !important;\n  max-height: 90vh !important;\n  min-height: 650px !important;\n  overflow-y: auto !important;\n  position: relative !important;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3) !important;\n  animation: _ngcontent-%COMP%_modalSlideIn 0.3s ease-out !important;\n  height: auto !important;\n  \n\n  flex-direction: column !important;\n  display: block !important; \n\n  \n\n}\n.checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  \n\n  all: unset !important;\n  \n\n  width: 100% !important;\n  border-collapse: separate !important;\n  border-spacing: 0 !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  background: white !important;\n  border-radius: 8px !important;\n  overflow: hidden !important;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08) !important;\n  display: table !important; \n\n  table-layout: fixed !important;\n  \n\n  \n\n  \n\n}\n.checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  display: table-header-group !important; \n\n}\n.checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  display: table-row !important;\n  width: 100% !important;\n  height: 50px !important;\n}\n.checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  display: table-cell !important;\n  background-color: #52667a !important;\n  color: white !important;\n  padding: 15px 12px !important;\n  font-weight: 600 !important;\n  font-size: 12px !important;\n  text-transform: uppercase !important;\n  letter-spacing: 0.5px !important;\n  vertical-align: middle !important;\n  border: none !important;\n  line-height: 1 !important;\n  text-align: center !important; \n\n  \n\n}\n.checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1) {\n  width: 45% !important;\n  text-align: left !important;\n  padding-left: 15px !important; \n\n}\n.checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2) {\n  width: 15% !important;\n  text-align: center !important;\n}\n.checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3) {\n  width: 12% !important;\n  text-align: center !important;\n}\n.checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4) {\n  width: 14% !important;\n  text-align: right !important;\n}\n.checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(5) {\n  width: 14% !important;\n  text-align: right !important;\n}\n.checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 8px !important;\n}\n.checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 8px !important;\n}\n.checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  display: table-row-group !important; \n\n  max-height: none !important; \n\n  overflow: visible !important; \n\n  background: white !important; \n\n  \n\n  \n\n}\n.checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  display: table-row !important;\n  border-bottom: 1px solid #e9ecef !important;\n  transition: background-color 0.2s ease !important;\n  height: 75px !important; \n\n  min-height: 75px !important;\n  max-height: 75px !important;\n  background: white !important;\n}\n.checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa !important;\n}\n.checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none !important;\n}\n.checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  display: table-cell !important;\n  vertical-align: middle !important;\n  border: none !important;\n  padding: 12px !important;\n  font-size: 14px !important;\n  color: #555 !important;\n  line-height: 1.2 !important;\n  height: 75px !important; \n\n  box-sizing: border-box !important;\n  text-align: center !important;\n  background: white !important; \n\n  \n\n}\n.checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1) {\n  width: 45% !important;\n  text-align: left !important;\n  padding: 0 !important; \n\n  background: white !important;\n}\n.checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  width: 15% !important;\n  text-align: center !important;\n  font-weight: 500 !important;\n}\n.checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n  width: 12% !important;\n  text-align: center !important;\n  font-weight: 600 !important;\n}\n.checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4) {\n  width: 14% !important;\n  text-align: right !important;\n  font-weight: 500 !important;\n  padding-right: 15px !important; \n\n}\n.checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5) {\n  width: 14% !important;\n  text-align: right !important;\n  font-weight: 600 !important;\n  color: #52667a !important;\n  padding-right: 15px !important; \n\n}\n.checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .articulo-cell[_ngcontent-%COMP%] {\n  \n\n  display: flex !important;\n  align-items: center !important;\n  height: 75px !important; \n\n  box-sizing: border-box !important;\n  padding: 12px 15px !important; \n\n}\n.checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .articulo-cell[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  \n\n  width: 55px !important; \n\n  height: 55px !important;\n  object-fit: contain !important; \n\n  margin-right: 15px !important;\n  border-radius: 4px !important;\n  border: 1px solid #eaeaea !important;\n  flex-shrink: 0 !important;\n  background: #f8f9fa !important; \n\n  padding: 2px !important; \n\n}\n.checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .articulo-cell[_ngcontent-%COMP%]   .articulo-nombre[_ngcontent-%COMP%] {\n  font-weight: 500 !important;\n  color: #333 !important;\n  font-size: 14px !important;\n  line-height: 1.3 !important;\n  white-space: nowrap !important; \n\n  overflow: hidden !important;\n  text-overflow: ellipsis !important; \n\n  flex: 1 !important;\n}\n.checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%] {\n  display: table-footer-group !important; \n\n}\n.checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  display: table-row !important;\n  background-color: #f8f9fa !important;\n  border-top: 2px solid #52667a !important;\n  height: 60px !important;\n  max-height: 60px !important;\n}\n.checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  display: table-cell !important;\n  padding: 15px 12px !important; \n\n  font-weight: 700 !important;\n  font-size: 16px !important;\n  color: #333 !important;\n  border: none !important;\n  line-height: 1.2 !important;\n  vertical-align: middle !important;\n  \n\n}\n.checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[colspan=\"4\"][_ngcontent-%COMP%] {\n  width: 86% !important;\n  text-align: right !important;\n  padding-right: 20px !important;\n  font-weight: bold !important; \n\n}\n.checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  width: 14% !important;\n  text-align: right !important;\n  color: #52667a !important;\n  font-size: 18px !important;\n  padding-right: 20px !important;\n}\n\n\n\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-50px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n\n\n.checkout-overlay[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%] {\n  position: absolute !important;\n  top: 15px !important;\n  right: 20px !important;\n  background: none !important;\n  border: none !important;\n  font-size: 28px !important;\n  font-weight: 300 !important;\n  color: #666 !important;\n  cursor: pointer !important;\n  z-index: 10 !important;\n  transition: all 0.2s ease !important;\n  width: 35px !important;\n  height: 35px !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n}\n.checkout-overlay[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]:hover {\n  color: #333 !important;\n  background-color: rgba(0, 0, 0, 0.05) !important;\n  border-radius: 50% !important;\n}\n\n\n\n.checkout-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  padding: 40px 35px 15px !important;\n  display: flex !important;\n  flex-direction: column !important;\n  height: 100% !important;\n  min-height: 620px !important;\n  overflow: visible !important;\n  box-sizing: border-box !important;\n}\n\n\n\n.checkout-overlay[_ngcontent-%COMP%]   #receptor[_ngcontent-%COMP%] {\n  display: grid !important; \n\n  grid-template-columns: 1fr 1fr !important;\n  gap: 30px !important;\n  margin-bottom: 15px !important;\n  flex-shrink: 0 !important;\n  justify-content: normal !important; \n\n}\n.checkout-overlay[_ngcontent-%COMP%]   #receptor[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Dancing Script\", cursive, serif !important;\n  font-size: 22px !important;\n  font-weight: 600 !important;\n  color: #333 !important;\n  margin: 0 0 10px 0 !important;\n  font-style: italic !important;\n}\n.checkout-overlay[_ngcontent-%COMP%]   #receptor[_ngcontent-%COMP%]   .datos[_ngcontent-%COMP%] {\n  background-color: #f8f9fa !important;\n  padding: 15px !important;\n  border-radius: 8px !important;\n  font-size: 14px !important;\n  line-height: 1.5 !important;\n  color: #555 !important;\n  padding-left: 15px !important; \n\n}\n.checkout-overlay[_ngcontent-%COMP%]   #receptor[_ngcontent-%COMP%]   .datos[_ngcontent-%COMP%]:hover {\n  background-color: #f1f3f4 !important;\n  transition: background-color 0.2s ease !important;\n}\n\n\n\n.checkout-overlay[_ngcontent-%COMP%]   .productos-title[_ngcontent-%COMP%] {\n  font-family: \"Dancing Script\", cursive, serif !important;\n  font-size: 24px !important;\n  font-weight: 600 !important;\n  color: #333 !important;\n  margin: 10px 0 12px 0 !important;\n  font-style: italic !important;\n  text-align: left !important;\n  flex-shrink: 0 !important;\n  width: 100% !important;\n  box-sizing: border-box !important;\n}\n\n\n\n.checkout-overlay[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  width: 100% !important;\n  text-align: center !important;\n  margin-top: auto !important;\n  padding: 25px 0 20px !important;\n  clear: both !important;\n  flex-shrink: 0 !important;\n  border-top: 1px solid #e9ecef !important;\n  position: relative !important; \n\n  bottom: auto !important; \n\n  left: auto !important; \n\n}\n\n\n\n.checkout-overlay[_ngcontent-%COMP%]   #comprar[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #52667a 0%, #6c7a8a 100%) !important;\n  color: white !important;\n  border: none !important;\n  padding: 14px 35px !important;\n  font-size: 14px !important;\n  font-weight: 600 !important;\n  text-transform: uppercase !important;\n  letter-spacing: 1px !important;\n  border-radius: 6px !important;\n  cursor: pointer !important;\n  transition: all 0.3s ease !important;\n  box-shadow: 0 3px 10px rgba(82, 102, 122, 0.3) !important;\n  display: inline-block !important;\n  margin: 0 !important;\n  width: auto !important; \n\n  min-width: 140px !important;\n  text-align: center !important;\n  position: relative !important; \n\n  bottom: auto !important; \n\n  left: auto !important; \n\n}\n.checkout-overlay[_ngcontent-%COMP%]   #comprar[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px) !important;\n  box-shadow: 0 5px 15px rgba(82, 102, 122, 0.4) !important;\n  background: linear-gradient(135deg, #5d758a 0%, #7a8a9a 100%) !important;\n}\n.checkout-overlay[_ngcontent-%COMP%]   #comprar[_ngcontent-%COMP%]:active {\n  transform: translateY(0) !important;\n  box-shadow: 0 3px 10px rgba(82, 102, 122, 0.3) !important;\n}\n.checkout-overlay[_ngcontent-%COMP%]   #comprar[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6 !important;\n  cursor: not-allowed !important;\n  transform: none !important;\n}\n\n\n\n@media (max-width: 768px) {\n  .checkout-overlay[_ngcontent-%COMP%] {\n    padding: 10px !important;\n  }\n  .checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%] {\n    max-height: 95vh !important;\n    margin: 10px !important;\n    border-radius: 8px !important;\n    min-height: 580px !important;\n    width: 95% !important; \n\n    height: auto !important; \n\n  }\n  .checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    font-size: 12px !important;\n  }\n  .checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    padding: 10px 8px !important;\n    font-size: 11px !important;\n  }\n  .checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1) {\n    width: 40% !important;\n  }\n  .checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2) {\n    width: 15% !important;\n  }\n  .checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3) {\n    width: 15% !important;\n  }\n  .checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4) {\n    width: 15% !important;\n  }\n  .checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(5) {\n    width: 15% !important;\n  }\n  .checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    height: 80px !important;\n    max-height: 80px !important;\n  }\n  .checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 12px 6px !important;\n    font-size: 12px !important;\n    height: 80px !important;\n  }\n  .checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1) {\n    width: 40% !important;\n    padding: 0 !important; \n\n    background: white !important; \n\n  }\n  .checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .articulo-cell[_ngcontent-%COMP%] {\n    \n\n    display: flex !important;\n    align-items: center !important;\n    padding: 10px 12px !important;\n    height: 70px !important; \n\n  }\n  .checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .articulo-cell[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 50px !important; \n\n    height: 50px !important;\n    object-fit: contain !important; \n\n    margin-right: 12px !important;\n    border-radius: 4px !important;\n    border: 1px solid #eaeaea !important;\n    flex-shrink: 0 !important;\n    background: #f8f9fa !important; \n\n    padding: 2px !important; \n\n  }\n  .checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .articulo-cell[_ngcontent-%COMP%]   .articulo-nombre[_ngcontent-%COMP%] {\n    font-weight: 500 !important;\n    color: #333 !important;\n    font-size: 12px !important;\n    line-height: 1.3 !important;\n    white-space: nowrap !important; \n\n    overflow: hidden !important;\n    text-overflow: ellipsis !important; \n\n    flex: 1 !important;\n  }\n  .checkout-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n    padding: 25px 20px 10px !important;\n    min-height: 550px !important;\n  }\n  .checkout-overlay[_ngcontent-%COMP%]   #receptor[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important; \n\n    gap: 20px !important;\n  }\n  .checkout-overlay[_ngcontent-%COMP%]   #receptor[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n  .checkout-overlay[_ngcontent-%COMP%]   #receptor[_ngcontent-%COMP%]   .datos[_ngcontent-%COMP%] {\n    padding: 12px !important;\n    font-size: 12px !important;\n    padding-left: 0 !important; \n\n    margin-top: 0 !important; \n\n  }\n  .checkout-overlay[_ngcontent-%COMP%]   .productos-title[_ngcontent-%COMP%] {\n    font-size: 22px !important;\n    text-align: center !important;\n  }\n  .checkout-overlay[_ngcontent-%COMP%]   #comprar[_ngcontent-%COMP%] {\n    margin: 0 auto !important; \n\n  }\n}\n@media (max-width: 480px) {\n  .checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%] {\n    max-width: 95vw !important;\n    min-height: 500px !important;\n  }\n  .checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    height: 65px !important; \n\n    max-height: 65px !important;\n  }\n  .checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    height: 65px !important; \n\n  }\n  .checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .articulo-cell[_ngcontent-%COMP%] {\n    \n\n    display: flex !important;\n    align-items: center !important;\n    padding: 8px 10px !important;\n    height: 65px !important; \n\n  }\n  .checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .articulo-cell[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 45px !important; \n\n    height: 45px !important;\n    object-fit: contain !important; \n\n    margin-right: 10px !important;\n    border-radius: 4px !important;\n    border: 1px solid #eaeaea !important;\n    flex-shrink: 0 !important;\n    background: #f8f9fa !important; \n\n    padding: 2px !important; \n\n  }\n  .checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .articulo-cell[_ngcontent-%COMP%]   .articulo-nombre[_ngcontent-%COMP%] {\n    font-weight: 500 !important;\n    color: #333 !important;\n    font-size: 11px !important;\n    line-height: 1.3 !important;\n    white-space: nowrap !important; \n\n    overflow: hidden !important;\n    text-overflow: ellipsis !important; \n\n    flex: 1 !important;\n  }\n}\n\n\n.checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px !important;\n}\n\n.checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1 !important;\n  border-radius: 4px !important;\n}\n\n.checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c1c1c1 !important;\n  border-radius: 4px !important;\n}\n.checkout-overlay[_ngcontent-%COMP%]   .vercheckout[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8 !important;\n}\n\n\n\n.checkout-overlay[_ngcontent-%COMP%] {\n  z-index: 9999 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uLy4uL2FuZ3VsYXIlMjAxOS80MCUyMHRhdG9vZGVuZGElMjBhcnN5cy9mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2NvbXBvbmVudHMvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLHFFQUFBO0FBRUEsc0RBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QURDRjs7QUNFQSxzREFBQTtBQUNBO0VBQ0UsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLHFEQUFBO0VBQ0EsZ0RBQUE7RUFDQSx1QkFBQTtFQUVBLHVDQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQSxFQUFBLDJDQUFBO0VBRUEscURBQUE7QURERjtBQ0VFO0VBQ0UsaURBQUE7RUFDQSxxQkFBQTtFQUVBLHFEQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLG9EQUFBO0VBQ0EseUJBQUEsRUFBQSx3QkFBQTtFQUNBLDhCQUFBO0VBRUEsNENBQUE7RUF3REEsOENBQUE7RUEwR0Esd0NBQUE7QURsS0o7QUNDSTtFQUNFLHNDQUFBLEVBQUEseUNBQUE7QURDTjtBQ0NNO0VBQ0UsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FEQ1I7QUNFTTtFQUNFLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQ0FBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQSxFQUFBLHVDQUFBO0VBRUEsK0JBQUE7QUREUjtBQ0VRO0VBQ0UscUJBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBLEVBQUEscUJBQUE7QURBVjtBQ0VRO0VBQ0UscUJBQUE7RUFDQSw2QkFBQTtBREFWO0FDRVE7RUFDRSxxQkFBQTtFQUNBLDZCQUFBO0FEQVY7QUNFUTtFQUNFLHFCQUFBO0VBQ0EsNEJBQUE7QURBVjtBQ0VRO0VBQ0UscUJBQUE7RUFDQSw0QkFBQTtBREFWO0FDR1E7RUFDRSxzQ0FBQTtBRERWO0FDR1E7RUFDRSx1Q0FBQTtBRERWO0FDT0k7RUFDRSxtQ0FBQSxFQUFBLHlDQUFBO0VBQ0EsMkJBQUEsRUFBQSxxQ0FBQTtFQUNBLDRCQUFBLEVBQUEsbUNBQUE7RUFDQSw0QkFBQSxFQUFBLDZCQUFBO0VBb0JBLDRDQUFBO0VBOENBLGdEQUFBO0FEckVOO0FDS007RUFDRSw2QkFBQTtFQUNBLDJDQUFBO0VBQ0EsaURBQUE7RUFDQSx1QkFBQSxFQUFBLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FESFI7QUNLUTtFQUNFLG9DQUFBO0FESFY7QUNNUTtFQUNFLDhCQUFBO0FESlY7QUNTTTtFQUNFLDhCQUFBO0VBQ0EsaUNBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUEsRUFBQSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQSxFQUFBLHlCQUFBO0VBRUEsMERBQUE7QURSUjtBQ1NRO0VBQ0UscUJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBLEVBQUEsd0NBQUE7RUFDQSw0QkFBQTtBRFBWO0FDU1E7RUFDRSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7QURQVjtBQ1NRO0VBQ0UscUJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0FEUFY7QUNTUTtFQUNFLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBLEVBQUEscUJBQUE7QURQVjtBQ1NRO0VBQ0UscUJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQSxFQUFBLHFCQUFBO0FEUFY7QUNZTTtFQUNFLG1EQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBLEVBQUEsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLDZCQUFBLEVBQUEsa0NBQUE7QURWUjtBQ1lRO0VBQ0UsbUNBQUE7RUFDQSxzQkFBQSxFQUFBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQSxFQUFBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQSxFQUFBLHVDQUFBO0VBQ0EsdUJBQUEsRUFBQSx1Q0FBQTtBRFZWO0FDYVE7RUFDRSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBLEVBQUEsd0NBQUE7RUFDQSwyQkFBQTtFQUNBLGtDQUFBLEVBQUEsNkJBQUE7RUFDQSxrQkFBQTtBRFhWO0FDaUJJO0VBQ0Usc0NBQUEsRUFBQSx5Q0FBQTtBRGZOO0FDaUJNO0VBQ0UsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtBRGZSO0FDa0JNO0VBQ0UsOEJBQUE7RUFDQSw2QkFBQSxFQUFBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0VBRUEsZ0RBQUE7QURqQlI7QUNrQlE7RUFDRSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQSxFQUFBLGlDQUFBO0FEaEJWO0FDbUJRO0VBQ0UscUJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtBRGpCVjs7QUN3QkEsbUNBQUE7QUFDQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLHdDQUFBO0VEckJGO0VDdUJBO0lBQ0UsVUFBQTtJQUNBLGlDQUFBO0VEckJGO0FBQ0Y7QUN3QkEsb0JBQUE7QUFDQTtFQUNFLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0FEdEJGO0FDd0JFO0VBQ0Usc0JBQUE7RUFDQSxnREFBQTtFQUNBLDZCQUFBO0FEdEJKOztBQzBCQSx3QkFBQTtBQUNBO0VBQ0Usa0NBQUE7RUFDQSx3QkFBQTtFQUNBLGlDQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUNBQUE7QUR2QkY7O0FDMEJBLDREQUFBO0FBQ0E7RUFDRSx3QkFBQSxFQUFBLHdDQUFBO0VBQ0EseUNBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQSxFQUFBLHdEQUFBO0FEdkJGO0FDeUJFO0VBQ0Usd0RBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0FEdkJKO0FDMEJFO0VBQ0Usb0NBQUE7RUFDQSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUEsRUFBQSw2Q0FBQTtBRHhCSjtBQzBCSTtFQUNFLG9DQUFBO0VBQ0EsaURBQUE7QUR4Qk47O0FDNkJBLHdCQUFBO0FBQ0E7RUFDRSx3REFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtBRDFCRjs7QUM2QkEsOENBQUE7QUFDQTtFQUNFLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0VBQ0EsNkJBQUEsRUFBQSw2Q0FBQTtFQUNBLHVCQUFBLEVBQUEsdUNBQUE7RUFDQSxxQkFBQSxFQUFBLHNDQUFBO0FEMUJGOztBQzZCQSwwQ0FBQTtBQUNBO0VBQ0Usd0VBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0NBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlEQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBLEVBQUEsdUNBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUEsRUFBQSw2Q0FBQTtFQUNBLHVCQUFBLEVBQUEsdUNBQUE7RUFDQSxxQkFBQSxFQUFBLHNDQUFBO0FEMUJGO0FDNEJFO0VBQ0Usc0NBQUE7RUFDQSx5REFBQTtFQUNBLHdFQUFBO0FEMUJKO0FDNkJFO0VBQ0UsbUNBQUE7RUFDQSx5REFBQTtBRDNCSjtBQzhCRTtFQUNFLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtBRDVCSjs7QUNnQ0EsbURBQUE7QUFDQTtFQUNFO0lBQ0Usd0JBQUE7RUQ3QkY7RUNnQ0E7SUFDRSwyQkFBQTtJQUNBLHVCQUFBO0lBQ0EsNkJBQUE7SUFDQSw0QkFBQTtJQUNBLHFCQUFBLEVBQUEsdUNBQUE7SUFDQSx1QkFBQSxFQUFBLHdDQUFBO0VEOUJGO0VDZ0NFO0lBQ0UsMEJBQUE7RUQ5Qko7RUNnQ0k7SUFDRSw0QkFBQTtJQUNBLDBCQUFBO0VEOUJOO0VDZ0NNO0lBQWlCLHFCQUFBO0VEN0J2QjtFQzhCTTtJQUFpQixxQkFBQTtFRDNCdkI7RUM0Qk07SUFBaUIscUJBQUE7RUR6QnZCO0VDMEJNO0lBQWlCLHFCQUFBO0VEdkJ2QjtFQ3dCTTtJQUFpQixxQkFBQTtFRHJCdkI7RUN5Qk07SUFDRSx1QkFBQTtJQUNBLDJCQUFBO0VEdkJSO0VDMEJNO0lBQ0UsNEJBQUE7SUFDQSwwQkFBQTtJQUNBLHVCQUFBO0VEeEJSO0VDMEJRO0lBQ0UscUJBQUE7SUFDQSxxQkFBQSxFQUFBLGtCQUFBO0lBQ0EsNEJBQUEsRUFBQSxtQkFBQTtFRHhCVjtFQzRCTTtJQUNFLHFDQUFBO0lBQ0Esd0JBQUE7SUFDQSw4QkFBQTtJQUNBLDZCQUFBO0lBQ0EsdUJBQUEsRUFBQSxtQ0FBQTtFRDFCUjtFQzRCUTtJQUNFLHNCQUFBLEVBQUEsNkJBQUE7SUFDQSx1QkFBQTtJQUNBLDhCQUFBLEVBQUEsdUNBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0Esb0NBQUE7SUFDQSx5QkFBQTtJQUNBLDhCQUFBLEVBQUEsa0JBQUE7SUFDQSx1QkFBQSxFQUFBLHNCQUFBO0VEMUJWO0VDNkJRO0lBQ0UsMkJBQUE7SUFDQSxzQkFBQTtJQUNBLDBCQUFBO0lBQ0EsMkJBQUE7SUFDQSw4QkFBQSxFQUFBLHFCQUFBO0lBQ0EsMkJBQUE7SUFDQSxrQ0FBQSxFQUFBLDZCQUFBO0lBQ0Esa0JBQUE7RUQzQlY7RUNrQ0E7SUFDRSxrQ0FBQTtJQUNBLDRCQUFBO0VEaENGO0VDbUNBO0lBQ0UscUNBQUEsRUFBQSxpREFBQTtJQUNBLG9CQUFBO0VEakNGO0VDbUNFO0lBQ0UsMEJBQUE7RURqQ0o7RUNvQ0U7SUFDRSx3QkFBQTtJQUNBLDBCQUFBO0lBQ0EsMEJBQUEsRUFBQSxnQ0FBQTtJQUNBLHdCQUFBLEVBQUEsMkNBQUE7RURsQ0o7RUNzQ0E7SUFDRSwwQkFBQTtJQUNBLDZCQUFBO0VEcENGO0VDdUNBO0lBQ0UseUJBQUEsRUFBQSw0Q0FBQTtFRHJDRjtBQUNGO0FDd0NBO0VBQ0U7SUFDRSwwQkFBQTtJQUNBLDRCQUFBO0VEdENGO0VDMENNO0lBQ0UsdUJBQUEsRUFBQSxtQ0FBQTtJQUNBLDJCQUFBO0VEeENSO0VDMkNNO0lBQ0UsdUJBQUEsRUFBQSxtQ0FBQTtFRHpDUjtFQzRDTTtJQUNFLHFDQUFBO0lBQ0Esd0JBQUE7SUFDQSw4QkFBQTtJQUNBLDRCQUFBO0lBQ0EsdUJBQUEsRUFBQSxtQ0FBQTtFRDFDUjtFQzRDUTtJQUNFLHNCQUFBLEVBQUEsNkJBQUE7SUFDQSx1QkFBQTtJQUNBLDhCQUFBLEVBQUEsdUNBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0Esb0NBQUE7SUFDQSx5QkFBQTtJQUNBLDhCQUFBLEVBQUEsa0JBQUE7SUFDQSx1QkFBQSxFQUFBLHNCQUFBO0VEMUNWO0VDNkNRO0lBQ0UsMkJBQUE7SUFDQSxzQkFBQTtJQUNBLDBCQUFBO0lBQ0EsMkJBQUE7SUFDQSw4QkFBQSxFQUFBLHFCQUFBO0lBQ0EsMkJBQUE7SUFDQSxrQ0FBQSxFQUFBLDZCQUFBO0lBQ0Esa0JBQUE7RUQzQ1Y7QUFDRjtBQ2tEQSw0QkFBQTtBQUNBO0VBQ0UscUJBQUE7QURoREY7O0FDbURBO0VBQ0UsOEJBQUE7RUFDQSw2QkFBQTtBRGhERjs7QUNtREE7RUFDRSw4QkFBQTtFQUNBLDZCQUFBO0FEaERGO0FDa0RFO0VBQ0UsOEJBQUE7QURoREo7O0FDb0RBLDhCQUFBO0FBQ0E7RUFDRSx3QkFBQTtBRGpERiIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qIGNoZWNrb3V0LmNvbXBvbmVudC5zY3NzIC0gU09MVUNJw4PCk04gREVGSU5JVElWQSBDT05UUkEgU1RZTEVTLlNDU1MgKi9cbi8qIE92ZXJsYXkgZGVsIG1vZGFsIC0gZm9uZG8gb3NjdXJvIHNlbWl0cmFuc3BhcmVudGUgKi9cbi5jaGVja291dC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbiAgcGFkZGluZzogMTVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogw6LCnMKFIE3Dg8KBWElNQSBFU1BFQ0lGSUNJREFEIC0gU09CUkVTQ1JJQklSIFNUWUxFUy5TQ1NTICovXG4uY2hlY2tvdXQtb3ZlcmxheSAudmVyY2hlY2tvdXQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogOTAwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogOTB2aCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiA2NTBweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy15OiBhdXRvICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDIwcHggNjBweCByZ2JhKDAsIDAsIDAsIDAuMykgIWltcG9ydGFudDtcbiAgYW5pbWF0aW9uOiBtb2RhbFNsaWRlSW4gMC4zcyBlYXNlLW91dCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgLyogw6LCnMKFIEFOVUxBUiBDT01QTEVUQU1FTlRFIFNUWUxFUy5TQ1NTICovXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDsgLyogQ2FtYmlhciBkZSBmbGV4IHBhcmEgZXZpdGFyIGNvbmZsaWN0b3MgKi9cbiAgLyogw6LCnMKFIFRBQkxBIC0gUkVTRVRFTyBUT1RBTCBDT04gTcODwoFYSU1BIEVTUEVDSUZJQ0lEQUQgKi9cbn1cbi5jaGVja291dC1vdmVybGF5IC52ZXJjaGVja291dCB0YWJsZSB7XG4gIC8qIFJFU0VURU8gQlJVVEFMIHBhcmEgc29icmVzY3JpYmlyIHN0eWxlcy5zY3NzICovXG4gIGFsbDogdW5zZXQgIWltcG9ydGFudDtcbiAgLyogQVBMSUNBUiBlc3RpbG9zIGVzcGVjw4PCrWZpY29zIGNvbiBtw4PCoXhpbWEgcHJpb3JpZGFkICovXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXNwYWNpbmc6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCkgIWltcG9ydGFudDtcbiAgZGlzcGxheTogdGFibGUgIWltcG9ydGFudDsgLyogRk9SWkFSIFRBQkxFIExBWU9VVCAqL1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkICFpbXBvcnRhbnQ7XG4gIC8qIMOiwpzChSBFTkNBQkVaQURPIC0gU09CUkVTQ1JJQklSIFNUWUxFUy5TQ1NTICovXG4gIC8qIMOiwpzChSBDVUVSUE8gREUgTEEgVEFCTEEgLSBBTlVMQVIgU1RZTEVTLlNDU1MgKi9cbiAgLyogw6LCnMKFIFBJRSBERSBUQUJMQSAtIEFOVUxBUiBTVFlMRVMuU0NTUyAqL1xufVxuLmNoZWNrb3V0LW92ZXJsYXkgLnZlcmNoZWNrb3V0IHRhYmxlIHRoZWFkIHtcbiAgZGlzcGxheTogdGFibGUtaGVhZGVyLWdyb3VwICFpbXBvcnRhbnQ7IC8qIEFOVUxBUiBkaXNwbGF5OiBibG9jayBkZSBzdHlsZXMuc2NzcyAqL1xufVxuLmNoZWNrb3V0LW92ZXJsYXkgLnZlcmNoZWNrb3V0IHRhYmxlIHRoZWFkIHRyIHtcbiAgZGlzcGxheTogdGFibGUtcm93ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xufVxuLmNoZWNrb3V0LW92ZXJsYXkgLnZlcmNoZWNrb3V0IHRhYmxlIHRoZWFkIHRoIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI2NjdhICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxNXB4IDEycHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHggIWltcG9ydGFudDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDEgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7IC8qIFJFU0VURUFSIHRleHQtYWxpZ24gZGUgc3R5bGVzLnNjc3MgKi9cbiAgLyogw6LCnMKFIERJU1RSSUJVQ0nDg8KTTiBERSBDT0xVTU5BUyAqL1xufVxuLmNoZWNrb3V0LW92ZXJsYXkgLnZlcmNoZWNrb3V0IHRhYmxlIHRoZWFkIHRoOm50aC1jaGlsZCgxKSB7XG4gIHdpZHRoOiA0NSUgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHggIWltcG9ydGFudDsgLyogw6LCnMKFIFBBRERJTkcgTk9STUFMICovXG59XG4uY2hlY2tvdXQtb3ZlcmxheSAudmVyY2hlY2tvdXQgdGFibGUgdGhlYWQgdGg6bnRoLWNoaWxkKDIpIHtcbiAgd2lkdGg6IDE1JSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbi5jaGVja291dC1vdmVybGF5IC52ZXJjaGVja291dCB0YWJsZSB0aGVhZCB0aDpudGgtY2hpbGQoMykge1xuICB3aWR0aDogMTIlICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuLmNoZWNrb3V0LW92ZXJsYXkgLnZlcmNoZWNrb3V0IHRhYmxlIHRoZWFkIHRoOm50aC1jaGlsZCg0KSB7XG4gIHdpZHRoOiAxNCUgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbn1cbi5jaGVja291dC1vdmVybGF5IC52ZXJjaGVja291dCB0YWJsZSB0aGVhZCB0aDpudGgtY2hpbGQoNSkge1xuICB3aWR0aDogMTQlICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG4uY2hlY2tvdXQtb3ZlcmxheSAudmVyY2hlY2tvdXQgdGFibGUgdGhlYWQgdGg6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbn1cbi5jaGVja291dC1vdmVybGF5IC52ZXJjaGVja291dCB0YWJsZSB0aGVhZCB0aDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xufVxuLmNoZWNrb3V0LW92ZXJsYXkgLnZlcmNoZWNrb3V0IHRhYmxlIHRib2R5IHtcbiAgZGlzcGxheTogdGFibGUtcm93LWdyb3VwICFpbXBvcnRhbnQ7IC8qIEFOVUxBUiBkaXNwbGF5OiBibG9jayBkZSBzdHlsZXMuc2NzcyAqL1xuICBtYXgtaGVpZ2h0OiBub25lICFpbXBvcnRhbnQ7IC8qIEFOVUxBUiBtYXgtaGVpZ2h0IGRlIHN0eWxlcy5zY3NzICovXG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7IC8qIEFOVUxBUiBvdmVyZmxvdyBkZSBzdHlsZXMuc2NzcyAqL1xuICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50OyAvKiDDosKcwoUgRk9ORE8gQkxBTkNPIEFTRUdVUkFETyAqL1xuICAvKiDDosKcwoUgVE9EQVMgTEFTIENFTERBUyAtIEFOVUxBUiBTVFlMRVMuU0NTUyAqL1xuICAvKiDDosKcwoUgQ0VMREEgREVMIEFSVMODwo1DVUxPIC0gTcODwoFYSU1BIEVTUEVDSUZJQ0lEQUQgKi9cbn1cbi5jaGVja291dC1vdmVybGF5IC52ZXJjaGVja291dCB0YWJsZSB0Ym9keSB0ciB7XG4gIGRpc3BsYXk6IHRhYmxlLXJvdyAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZiAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDc1cHggIWltcG9ydGFudDsgLyogw6LCnMKFIEFMVFVSQSDDg8KTUFRJTUEgUEFSQSBVTkEgTMODwo1ORUEgKi9cbiAgbWluLWhlaWdodDogNzVweCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiA3NXB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4uY2hlY2tvdXQtb3ZlcmxheSAudmVyY2hlY2tvdXQgdGFibGUgdGJvZHkgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhICFpbXBvcnRhbnQ7XG59XG4uY2hlY2tvdXQtb3ZlcmxheSAudmVyY2hlY2tvdXQgdGFibGUgdGJvZHkgdHI6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn1cbi5jaGVja291dC1vdmVybGF5IC52ZXJjaGVja291dCB0YWJsZSB0Ym9keSB0ZCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGwgIWltcG9ydGFudDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTJweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICM1NTUgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDEuMiAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDc1cHggIWltcG9ydGFudDsgLyogw6LCnMKFIEFMVFVSQSDDg8KTUFRJTUEgUEFSQSBVTkEgTMODwo1ORUEgKi9cbiAgYm94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDsgLyogUkVTRVRFQVIgc3R5bGVzLnNjc3MgKi9cbiAgLyogw6LCnMKFIEFMSU5FQUNJT05FUyBQT1IgQ09MVU1OQSAtIFNPQlJFU0NSSUJJUiBTVFlMRVMuU0NTUyAqL1xufVxuLmNoZWNrb3V0LW92ZXJsYXkgLnZlcmNoZWNrb3V0IHRhYmxlIHRib2R5IHRkOm50aC1jaGlsZCgxKSB7XG4gIHdpZHRoOiA0NSUgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7IC8qIMOiwpzChSBTSU4gUEFERElORyBQQVJBIFBFUk1JVElSIEZMRVhCT1ggKi9cbiAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbn1cbi5jaGVja291dC1vdmVybGF5IC52ZXJjaGVja291dCB0YWJsZSB0Ym9keSB0ZDpudGgtY2hpbGQoMikge1xuICB3aWR0aDogMTUlICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG59XG4uY2hlY2tvdXQtb3ZlcmxheSAudmVyY2hlY2tvdXQgdGFibGUgdGJvZHkgdGQ6bnRoLWNoaWxkKDMpIHtcbiAgd2lkdGg6IDEyJSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xufVxuLmNoZWNrb3V0LW92ZXJsYXkgLnZlcmNoZWNrb3V0IHRhYmxlIHRib2R5IHRkOm50aC1jaGlsZCg0KSB7XG4gIHdpZHRoOiAxNCUgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7IC8qIMOiwpzChSBQQURESU5HIE5PUk1BTCAqL1xufVxuLmNoZWNrb3V0LW92ZXJsYXkgLnZlcmNoZWNrb3V0IHRhYmxlIHRib2R5IHRkOm50aC1jaGlsZCg1KSB7XG4gIHdpZHRoOiAxNCUgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzUyNjY3YSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7IC8qIMOiwpzChSBQQURESU5HIE5PUk1BTCAqL1xufVxuLmNoZWNrb3V0LW92ZXJsYXkgLnZlcmNoZWNrb3V0IHRhYmxlIHRib2R5IC5hcnRpY3Vsby1jZWxsIHtcbiAgLyogw6LCnMKFIENPUElBUiBFU1RSQVRFR0lBIEVYSVRPU0EgREVMIENBUlQuQ09NUE9ORU5UICovXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDc1cHggIWltcG9ydGFudDsgLyogw6LCnMKFIEFMVFVSQSDDg8KTUFRJTUEgUEFSQSBVTkEgTMODwo1ORUEgKi9cbiAgYm94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMnB4IDE1cHggIWltcG9ydGFudDsgLyogw6LCnMKFIFBBRERJTkcgTk9STUFMIENPTU8gRU4gQ0FSVCAqL1xufVxuLmNoZWNrb3V0LW92ZXJsYXkgLnZlcmNoZWNrb3V0IHRhYmxlIHRib2R5IC5hcnRpY3Vsby1jZWxsIGltZyB7XG4gIC8qIMOiwpzChSBJTUFHRU4gQ09NUExFVEEgU0lOIFJFQ09SVEVTICovXG4gIHdpZHRoOiA1NXB4ICFpbXBvcnRhbnQ7IC8qIMOiwpzChSBMSUdFUkFNRU5URSBNw4PCgVMgR1JBTkRFICovXG4gIGhlaWdodDogNTVweCAhaW1wb3J0YW50O1xuICBvYmplY3QtZml0OiBjb250YWluICFpbXBvcnRhbnQ7IC8qIMOiwpzChSBDT05UQUlOIFBBUkEgTk8gUkVDT1JUQVIgKi9cbiAgbWFyZ2luLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhICFpbXBvcnRhbnQ7XG4gIGZsZXgtc2hyaW5rOiAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmEgIWltcG9ydGFudDsgLyogw6LCnMKFIEZPTkRPIFNVVElMIFBBUkEgRVNQQUNJT1MgVkFDw4PCjU9TICovXG4gIHBhZGRpbmc6IDJweCAhaW1wb3J0YW50OyAvKiDDosKcwoUgUEFERElORyBJTlRFUk5PIFBBUkEgREFSIFJFU1BJUk8gKi9cbn1cbi5jaGVja291dC1vdmVybGF5IC52ZXJjaGVja291dCB0YWJsZSB0Ym9keSAuYXJ0aWN1bG8tY2VsbCAuYXJ0aWN1bG8tbm9tYnJlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDEuMyAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7IC8qIMOiwpzChSBQUklNRVJBIFBSSU9SSURBRDogVU5BIFNPTEEgTMODwo1ORUEgKi9cbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyAhaW1wb3J0YW50OyAvKiDDosKcwoUgU09MTyBQVU5UT1MgU0kgTk8gQ0FCRSAqL1xuICBmbGV4OiAxICFpbXBvcnRhbnQ7XG59XG4uY2hlY2tvdXQtb3ZlcmxheSAudmVyY2hlY2tvdXQgdGFibGUgdGZvb3Qge1xuICBkaXNwbGF5OiB0YWJsZS1mb290ZXItZ3JvdXAgIWltcG9ydGFudDsgLyogQU5VTEFSIGRpc3BsYXk6IGJsb2NrIGRlIHN0eWxlcy5zY3NzICovXG59XG4uY2hlY2tvdXQtb3ZlcmxheSAudmVyY2hlY2tvdXQgdGFibGUgdGZvb3QgdHIge1xuICBkaXNwbGF5OiB0YWJsZS1yb3cgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYSAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzUyNjY3YSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogNjBweCAhaW1wb3J0YW50O1xufVxuLmNoZWNrb3V0LW92ZXJsYXkgLnZlcmNoZWNrb3V0IHRhYmxlIHRmb290IHRkIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxNXB4IDEycHggIWltcG9ydGFudDsgLyogw6LCnMKFIFBBRERJTkcgTk9STUFMICovXG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMS4yICFpbXBvcnRhbnQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcbiAgLyogw6LCnMKFIEFOVUxBUiBFU1RJTE9TIEVTUEVDw4PCjUZJQ09TIERFIFNUWUxFUy5TQ1NTICovXG59XG4uY2hlY2tvdXQtb3ZlcmxheSAudmVyY2hlY2tvdXQgdGFibGUgdGZvb3QgdGRbY29sc3Bhbj1cIjRcIl0ge1xuICB3aWR0aDogODYlICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDsgLyogTUFOVEVORVIgQk9MRCBERSBTVFlMRVMuU0NTUyAqL1xufVxuLmNoZWNrb3V0LW92ZXJsYXkgLnZlcmNoZWNrb3V0IHRhYmxlIHRmb290IHRkOmxhc3QtY2hpbGQge1xuICB3aWR0aDogMTQlICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNTI2NjdhICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi8qIEFuaW1hY2nDg8KzbiBkZSBlbnRyYWRhIGRlbCBtb2RhbCAqL1xuQGtleWZyYW1lcyBtb2RhbFNsaWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCkgc2NhbGUoMC45NSk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpO1xuICB9XG59XG4vKiBCb3TDg8KzbiBkZSBjZXJyYXIgKi9cbi5jaGVja291dC1vdmVybGF5IC5jbG9zZS1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjhweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNjY2ICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xuICB6LWluZGV4OiAxMCAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAzNXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzVweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbi5jaGVja291dC1vdmVybGF5IC5jbG9zZS1idXR0b246aG92ZXIge1xuICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xufVxuXG4vKiBDb250ZW5pZG8gZGVsIG1vZGFsICovXG4uY2hlY2tvdXQtb3ZlcmxheSAubW9kYWwtY29udGVudCB7XG4gIHBhZGRpbmc6IDQwcHggMzVweCAxNXB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogNjIwcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50O1xufVxuXG4vKiBTZWNjacODwrNuIGRlbCByZWNlcHRvciAoZGlyZWNjaW9uZXMpIC0gQU5VTEFSIFNUWUxFUy5TQ1NTICovXG4uY2hlY2tvdXQtb3ZlcmxheSAjcmVjZXB0b3Ige1xuICBkaXNwbGF5OiBncmlkICFpbXBvcnRhbnQ7IC8qIEFOVUxBUiBkaXNwbGF5OiBmbGV4IGRlIHN0eWxlcy5zY3NzICovXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAhaW1wb3J0YW50O1xuICBnYXA6IDMwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IG5vcm1hbCAhaW1wb3J0YW50OyAvKiBBTlVMQVIganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgZGUgc3R5bGVzLnNjc3MgKi9cbn1cbi5jaGVja291dC1vdmVybGF5ICNyZWNlcHRvciBoMSB7XG4gIGZvbnQtZmFtaWx5OiBcIkRhbmNpbmcgU2NyaXB0XCIsIGN1cnNpdmUsIHNlcmlmICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjJweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAwIDEwcHggMCAhaW1wb3J0YW50O1xuICBmb250LXN0eWxlOiBpdGFsaWMgIWltcG9ydGFudDtcbn1cbi5jaGVja291dC1vdmVybGF5ICNyZWNlcHRvciAuZGF0b3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDE1cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMS41ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNTU1ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTVweCAhaW1wb3J0YW50OyAvKiBBTlVMQVIgcGFkZGluZy1sZWZ0OiA0MHB4IGRlIHN0eWxlcy5zY3NzICovXG59XG4uY2hlY2tvdXQtb3ZlcmxheSAjcmVjZXB0b3IgLmRhdG9zOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjNmNCAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZSAhaW1wb3J0YW50O1xufVxuXG4vKiBUw4PCrXR1bG8gZGUgcHJvZHVjdG9zICovXG4uY2hlY2tvdXQtb3ZlcmxheSAucHJvZHVjdG9zLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiRGFuY2luZyBTY3JpcHRcIiwgY3Vyc2l2ZSwgc2VyaWYgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAxMHB4IDAgMTJweCAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYyAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIGZsZXgtc2hyaW5rOiAwICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3ggIWltcG9ydGFudDtcbn1cblxuLyogQ29udGVuZWRvciBkZWwgYm90w4PCs24gLSBBTlVMQVIgU1RZTEVTLlNDU1MgKi9cbi5jaGVja291dC1vdmVybGF5IC5idXR0b24tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IGF1dG8gIWltcG9ydGFudDtcbiAgcGFkZGluZzogMjVweCAwIDIwcHggIWltcG9ydGFudDtcbiAgY2xlYXI6IGJvdGggIWltcG9ydGFudDtcbiAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOWVjZWYgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7IC8qIEFOVUxBUiBwb3NpdGlvbjogYWJzb2x1dGUgZGUgc3R5bGVzLnNjc3MgKi9cbiAgYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7IC8qIEFOVUxBUiBib3R0b206IDQwcHggZGUgc3R5bGVzLnNjc3MgKi9cbiAgbGVmdDogYXV0byAhaW1wb3J0YW50OyAvKiBBTlVMQVIgbGVmdDogMzgwcHggZGUgc3R5bGVzLnNjc3MgKi9cbn1cblxuLyogQm90w4PCs24gZGUgY29tcHJhciAtIEFOVUxBUiBTVFlMRVMuU0NTUyAqL1xuLmNoZWNrb3V0LW92ZXJsYXkgI2NvbXByYXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNTI2NjdhIDAlLCAjNmM3YThhIDEwMCUpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTRweCAzNXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCByZ2JhKDgyLCAxMDIsIDEyMiwgMC4zKSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7IC8qIEFOVUxBUiB3aWR0aDogMTIwcHggZGUgc3R5bGVzLnNjc3MgKi9cbiAgbWluLXdpZHRoOiAxNDBweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7IC8qIEFOVUxBUiBwb3NpdGlvbjogYWJzb2x1dGUgZGUgc3R5bGVzLnNjc3MgKi9cbiAgYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7IC8qIEFOVUxBUiBib3R0b206IDQwcHggZGUgc3R5bGVzLnNjc3MgKi9cbiAgbGVmdDogYXV0byAhaW1wb3J0YW50OyAvKiBBTlVMQVIgbGVmdDogMzgwcHggZGUgc3R5bGVzLnNjc3MgKi9cbn1cbi5jaGVja291dC1vdmVybGF5ICNjb21wcmFyOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSg4MiwgMTAyLCAxMjIsIDAuNCkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzVkNzU4YSAwJSwgIzdhOGE5YSAxMDAlKSAhaW1wb3J0YW50O1xufVxuLmNoZWNrb3V0LW92ZXJsYXkgI2NvbXByYXI6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSg4MiwgMTAyLCAxMjIsIDAuMykgIWltcG9ydGFudDtcbn1cbi5jaGVja291dC1vdmVybGF5ICNjb21wcmFyOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC42ICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi8qIMOiwpzChSBSRVNQT05TSVZFIERFU0lHTiAtIENPTiBNw4PCgVhJTUEgRVNQRUNJRklDSURBRCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jaGVja291dC1vdmVybGF5IHtcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNoZWNrb3V0LW92ZXJsYXkgLnZlcmNoZWNrb3V0IHtcbiAgICBtYXgtaGVpZ2h0OiA5NXZoICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogNTgwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7IC8qIEFOVUxBUiB3aWR0aDogODAwcHggZGUgc3R5bGVzLnNjc3MgKi9cbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDsgLyogQU5VTEFSIGhlaWdodDogNDAwcHggZGUgc3R5bGVzLnNjc3MgKi9cbiAgfVxuICAuY2hlY2tvdXQtb3ZlcmxheSAudmVyY2hlY2tvdXQgdGFibGUge1xuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICB9XG4gIC5jaGVja291dC1vdmVybGF5IC52ZXJjaGVja291dCB0YWJsZSB0aGVhZCB0aCB7XG4gICAgcGFkZGluZzogMTBweCA4cHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcbiAgfVxuICAuY2hlY2tvdXQtb3ZlcmxheSAudmVyY2hlY2tvdXQgdGFibGUgdGhlYWQgdGg6bnRoLWNoaWxkKDEpIHtcbiAgICB3aWR0aDogNDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNoZWNrb3V0LW92ZXJsYXkgLnZlcmNoZWNrb3V0IHRhYmxlIHRoZWFkIHRoOm50aC1jaGlsZCgyKSB7XG4gICAgd2lkdGg6IDE1JSAhaW1wb3J0YW50O1xuICB9XG4gIC5jaGVja291dC1vdmVybGF5IC52ZXJjaGVja291dCB0YWJsZSB0aGVhZCB0aDpudGgtY2hpbGQoMykge1xuICAgIHdpZHRoOiAxNSUgIWltcG9ydGFudDtcbiAgfVxuICAuY2hlY2tvdXQtb3ZlcmxheSAudmVyY2hlY2tvdXQgdGFibGUgdGhlYWQgdGg6bnRoLWNoaWxkKDQpIHtcbiAgICB3aWR0aDogMTUlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNoZWNrb3V0LW92ZXJsYXkgLnZlcmNoZWNrb3V0IHRhYmxlIHRoZWFkIHRoOm50aC1jaGlsZCg1KSB7XG4gICAgd2lkdGg6IDE1JSAhaW1wb3J0YW50O1xuICB9XG4gIC5jaGVja291dC1vdmVybGF5IC52ZXJjaGVja291dCB0YWJsZSB0Ym9keSB0ciB7XG4gICAgaGVpZ2h0OiA4MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogODBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5jaGVja291dC1vdmVybGF5IC52ZXJjaGVja291dCB0YWJsZSB0Ym9keSB0ZCB7XG4gICAgcGFkZGluZzogMTJweCA2cHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcbiAgfVxuICAuY2hlY2tvdXQtb3ZlcmxheSAudmVyY2hlY2tvdXQgdGFibGUgdGJvZHkgdGQ6bnRoLWNoaWxkKDEpIHtcbiAgICB3aWR0aDogNDAlICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50OyAvKiDDosKcwoUgU0lOIFBBRERJTkcgKi9cbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50OyAvKiDDosKcwoUgRk9ORE8gQkxBTkNPICovXG4gIH1cbiAgLmNoZWNrb3V0LW92ZXJsYXkgLnZlcmNoZWNrb3V0IHRhYmxlIHRib2R5IC5hcnRpY3Vsby1jZWxsIHtcbiAgICAvKiDDosKcwoUgRkxFWEJPWCBDT01PIEVOIENBUlQuQ09NUE9ORU5UICovXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAxMHB4IDEycHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDcwcHggIWltcG9ydGFudDsgLyogw6LCnMKFIEFMVFVSQSDDg8KTUFRJTUEgUEFSQSBVTkEgTMODwo1ORUEgKi9cbiAgfVxuICAuY2hlY2tvdXQtb3ZlcmxheSAudmVyY2hlY2tvdXQgdGFibGUgdGJvZHkgLmFydGljdWxvLWNlbGwgaW1nIHtcbiAgICB3aWR0aDogNTBweCAhaW1wb3J0YW50OyAvKiDDosKcwoUgTElHRVJBTUVOVEUgTcODwoFTIEdSQU5ERSAqL1xuICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW4gIWltcG9ydGFudDsgLyogw6LCnMKFIENPTlRBSU4gUEFSQSBWRVIgSU1BR0VOIENPTVBMRVRBICovXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYSAhaW1wb3J0YW50O1xuICAgIGZsZXgtc2hyaW5rOiAwICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYSAhaW1wb3J0YW50OyAvKiDDosKcwoUgRk9ORE8gU1VUSUwgKi9cbiAgICBwYWRkaW5nOiAycHggIWltcG9ydGFudDsgLyogw6LCnMKFIFBBRERJTkcgSU5URVJOTyAqL1xuICB9XG4gIC5jaGVja291dC1vdmVybGF5IC52ZXJjaGVja291dCB0YWJsZSB0Ym9keSAuYXJ0aWN1bG8tY2VsbCAuYXJ0aWN1bG8tbm9tYnJlIHtcbiAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMS4zICFpbXBvcnRhbnQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50OyAvKiDDosKcwoUgVU5BIFNPTEEgTMODwo1ORUEgKi9cbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXMgIWltcG9ydGFudDsgLyogw6LCnMKFIFNPTE8gUFVOVE9TIFNJIE5PIENBQkUgKi9cbiAgICBmbGV4OiAxICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNoZWNrb3V0LW92ZXJsYXkgLm1vZGFsLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDI1cHggMjBweCAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogNTUwcHggIWltcG9ydGFudDtcbiAgfVxuICAuY2hlY2tvdXQtb3ZlcmxheSAjcmVjZXB0b3Ige1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyICFpbXBvcnRhbnQ7IC8qIEFOVUxBUiBmbGV4LWRpcmVjdGlvbjogY29sdW1uIGRlIHN0eWxlcy5zY3NzICovXG4gICAgZ2FwOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNoZWNrb3V0LW92ZXJsYXkgI3JlY2VwdG9yIGgxIHtcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgfVxuICAuY2hlY2tvdXQtb3ZlcmxheSAjcmVjZXB0b3IgLmRhdG9zIHtcbiAgICBwYWRkaW5nOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7IC8qIEFOVUxBUiBzdHlsZXMuc2NzcyBlbiBtw4PCs3ZpbCAqL1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDsgLyogQU5VTEFSIG1hcmdpbi10b3A6IDIwcHggZGUgc3R5bGVzLnNjc3MgKi9cbiAgfVxuICAuY2hlY2tvdXQtb3ZlcmxheSAucHJvZHVjdG9zLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDIycHggIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuICAuY2hlY2tvdXQtb3ZlcmxheSAjY29tcHJhciB7XG4gICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDsgLyogQU5VTEFSIG1hcmdpbjogMjBweCBhdXRvIGRlIHN0eWxlcy5zY3NzICovXG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY2hlY2tvdXQtb3ZlcmxheSAudmVyY2hlY2tvdXQge1xuICAgIG1heC13aWR0aDogOTV2dyAhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IDUwMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNoZWNrb3V0LW92ZXJsYXkgLnZlcmNoZWNrb3V0IHRhYmxlIHRib2R5IHRyIHtcbiAgICBoZWlnaHQ6IDY1cHggIWltcG9ydGFudDsgLyogw6LCnMKFIEFMVFVSQSDDg8KTUFRJTUEgUEFSQSBVTkEgTMODwo1ORUEgKi9cbiAgICBtYXgtaGVpZ2h0OiA2NXB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNoZWNrb3V0LW92ZXJsYXkgLnZlcmNoZWNrb3V0IHRhYmxlIHRib2R5IHRkIHtcbiAgICBoZWlnaHQ6IDY1cHggIWltcG9ydGFudDsgLyogw6LCnMKFIEFMVFVSQSDDg8KTUFRJTUEgUEFSQSBVTkEgTMODwo1ORUEgKi9cbiAgfVxuICAuY2hlY2tvdXQtb3ZlcmxheSAudmVyY2hlY2tvdXQgdGFibGUgdGJvZHkgLmFydGljdWxvLWNlbGwge1xuICAgIC8qIMOiwpzChSBGTEVYQk9YIENPTU8gRU4gQ0FSVC5DT01QT05FTlQgKi9cbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDhweCAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA2NXB4ICFpbXBvcnRhbnQ7IC8qIMOiwpzChSBBTFRVUkEgw4PCk1BUSU1BIFBBUkEgVU5BIEzDg8KNTkVBICovXG4gIH1cbiAgLmNoZWNrb3V0LW92ZXJsYXkgLnZlcmNoZWNrb3V0IHRhYmxlIHRib2R5IC5hcnRpY3Vsby1jZWxsIGltZyB7XG4gICAgd2lkdGg6IDQ1cHggIWltcG9ydGFudDsgLyogw6LCnMKFIExJR0VSQU1FTlRFIE3Dg8KBUyBHUkFOREUgKi9cbiAgICBoZWlnaHQ6IDQ1cHggIWltcG9ydGFudDtcbiAgICBvYmplY3QtZml0OiBjb250YWluICFpbXBvcnRhbnQ7IC8qIMOiwpzChSBDT05UQUlOIFBBUkEgVkVSIElNQUdFTiBDT01QTEVUQSAqL1xuICAgIG1hcmdpbi1yaWdodDogMTBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWEgIWltcG9ydGFudDtcbiAgICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmEgIWltcG9ydGFudDsgLyogw6LCnMKFIEZPTkRPIFNVVElMICovXG4gICAgcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7IC8qIMOiwpzChSBQQURESU5HIElOVEVSTk8gKi9cbiAgfVxuICAuY2hlY2tvdXQtb3ZlcmxheSAudmVyY2hlY2tvdXQgdGFibGUgdGJvZHkgLmFydGljdWxvLWNlbGwgLmFydGljdWxvLW5vbWJyZSB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDEuMyAhaW1wb3J0YW50O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDsgLyogw6LCnMKFIFVOQSBTT0xBIEzDg8KNTkVBICovXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzICFpbXBvcnRhbnQ7IC8qIMOiwpzChSBTT0xPIFBVTlRPUyBTSSBOTyBDQUJFICovXG4gICAgZmxleDogMSAhaW1wb3J0YW50O1xuICB9XG59XG4vKiBTY3JvbGxiYXIgcGVyc29uYWxpemFkbyAqL1xuLmNoZWNrb3V0LW92ZXJsYXkgLnZlcmNoZWNrb3V0Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA4cHggIWltcG9ydGFudDtcbn1cblxuLmNoZWNrb3V0LW92ZXJsYXkgLnZlcmNoZWNrb3V0Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjEgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jaGVja291dC1vdmVybGF5IC52ZXJjaGVja291dDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjYzFjMWMxICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xufVxuLmNoZWNrb3V0LW92ZXJsYXkgLnZlcmNoZWNrb3V0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNhOGE4YTggIWltcG9ydGFudDtcbn1cblxuLyogQXNlZ3VyYXIgbcODwqF4aW1hIHByaW9yaWRhZCAqL1xuLmNoZWNrb3V0LW92ZXJsYXkge1xuICB6LWluZGV4OiA5OTk5ICFpbXBvcnRhbnQ7XG59IiwiLyogY2hlY2tvdXQuY29tcG9uZW50LnNjc3MgLSBTT0xVQ0nDg8KTTiBERUZJTklUSVZBIENPTlRSQSBTVFlMRVMuU0NTUyAqL1xuXG4vKiBPdmVybGF5IGRlbCBtb2RhbCAtIGZvbmRvIG9zY3VybyBzZW1pdHJhbnNwYXJlbnRlICovXG4uY2hlY2tvdXQtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIMOiwpzChSBNw4PCgVhJTUEgRVNQRUNJRklDSURBRCAtIFNPQlJFU0NSSUJJUiBTVFlMRVMuU0NTUyAqL1xuLmNoZWNrb3V0LW92ZXJsYXkgLnZlcmNoZWNrb3V0IHtcbiAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTJweCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDkwMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDkwdmggIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogNjUwcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3cteTogYXV0byAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAyMHB4IDYwcHggcmdiYSgwLCAwLCAwLCAwLjMpICFpbXBvcnRhbnQ7XG4gIGFuaW1hdGlvbjogbW9kYWxTbGlkZUluIDAuM3MgZWFzZS1vdXQgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIFxuICAvKiDDosKcwoUgQU5VTEFSIENPTVBMRVRBTUVOVEUgU1RZTEVTLlNDU1MgKi9cbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyAvKiBDYW1iaWFyIGRlIGZsZXggcGFyYSBldml0YXIgY29uZmxpY3RvcyAqL1xuICBcbiAgLyogw6LCnMKFIFRBQkxBIC0gUkVTRVRFTyBUT1RBTCBDT04gTcODwoFYSU1BIEVTUEVDSUZJQ0lEQUQgKi9cbiAgdGFibGUge1xuICAgIC8qIFJFU0VURU8gQlJVVEFMIHBhcmEgc29icmVzY3JpYmlyIHN0eWxlcy5zY3NzICovXG4gICAgYWxsOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIFxuICAgIC8qIEFQTElDQVIgZXN0aWxvcyBlc3BlY8ODwq1maWNvcyBjb24gbcODwqF4aW1hIHByaW9yaWRhZCAqL1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1zcGFjaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDgpICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogdGFibGUgIWltcG9ydGFudDsgLyogRk9SWkFSIFRBQkxFIExBWU9VVCAqL1xuICAgIHRhYmxlLWxheW91dDogZml4ZWQgIWltcG9ydGFudDtcbiAgICBcbiAgICAvKiDDosKcwoUgRU5DQUJFWkFETyAtIFNPQlJFU0NSSUJJUiBTVFlMRVMuU0NTUyAqL1xuICAgIHRoZWFkIHtcbiAgICAgIGRpc3BsYXk6IHRhYmxlLWhlYWRlci1ncm91cCAhaW1wb3J0YW50OyAvKiBBTlVMQVIgZGlzcGxheTogYmxvY2sgZGUgc3R5bGVzLnNjc3MgKi9cbiAgICAgIFxuICAgICAgdHIge1xuICAgICAgICBkaXNwbGF5OiB0YWJsZS1yb3cgIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHRoIHtcbiAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI2NjdhICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDEycHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHggIWltcG9ydGFudDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEgIWltcG9ydGFudDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7IC8qIFJFU0VURUFSIHRleHQtYWxpZ24gZGUgc3R5bGVzLnNjc3MgKi9cbiAgICAgICAgXG4gICAgICAgIC8qIMOiwpzChSBESVNUUklCVUNJw4PCk04gREUgQ09MVU1OQVMgKi9cbiAgICAgICAgJjpudGgtY2hpbGQoMSkgeyBcbiAgICAgICAgICB3aWR0aDogNDUlICFpbXBvcnRhbnQ7IFxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDsgXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7IC8qIMOiwpzChSBQQURESU5HIE5PUk1BTCAqL1xuICAgICAgICB9XG4gICAgICAgICY6bnRoLWNoaWxkKDIpIHsgXG4gICAgICAgICAgd2lkdGg6IDE1JSAhaW1wb3J0YW50OyBcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDsgXG4gICAgICAgIH1cbiAgICAgICAgJjpudGgtY2hpbGQoMykgeyBcbiAgICAgICAgICB3aWR0aDogMTIlICFpbXBvcnRhbnQ7IFxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50OyBcbiAgICAgICAgfVxuICAgICAgICAmOm50aC1jaGlsZCg0KSB7IFxuICAgICAgICAgIHdpZHRoOiAxNCUgIWltcG9ydGFudDsgXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDsgXG4gICAgICAgIH1cbiAgICAgICAgJjpudGgtY2hpbGQoNSkgeyBcbiAgICAgICAgICB3aWR0aDogMTQlICFpbXBvcnRhbnQ7IFxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7IFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKiDDosKcwoUgQ1VFUlBPIERFIExBIFRBQkxBIC0gQU5VTEFSIFNUWUxFUy5TQ1NTICovXG4gICAgdGJvZHkge1xuICAgICAgZGlzcGxheTogdGFibGUtcm93LWdyb3VwICFpbXBvcnRhbnQ7IC8qIEFOVUxBUiBkaXNwbGF5OiBibG9jayBkZSBzdHlsZXMuc2NzcyAqL1xuICAgICAgbWF4LWhlaWdodDogbm9uZSAhaW1wb3J0YW50OyAvKiBBTlVMQVIgbWF4LWhlaWdodCBkZSBzdHlsZXMuc2NzcyAqL1xuICAgICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDsgLyogQU5VTEFSIG92ZXJmbG93IGRlIHN0eWxlcy5zY3NzICovXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50OyAvKiDDosKcwoUgRk9ORE8gQkxBTkNPIEFTRUdVUkFETyAqL1xuICAgICAgXG4gICAgICB0ciB7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlLXJvdyAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZiAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZSAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDc1cHggIWltcG9ydGFudDsgLyogw6LCnMKFIEFMVFVSQSDDg8KTUFRJTUEgUEFSQSBVTkEgTMODwo1ORUEgKi9cbiAgICAgICAgbWluLWhlaWdodDogNzVweCAhaW1wb3J0YW50OyBcbiAgICAgICAgbWF4LWhlaWdodDogNzVweCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICBcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICAvKiDDosKcwoUgVE9EQVMgTEFTIENFTERBUyAtIEFOVUxBUiBTVFlMRVMuU0NTUyAqL1xuICAgICAgdGQge1xuICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsICFpbXBvcnRhbnQ7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmc6IDEycHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAjNTU1ICFpbXBvcnRhbnQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjIgIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiA3NXB4ICFpbXBvcnRhbnQ7IC8qIMOiwpzChSBBTFRVUkEgw4PCk1BUSU1BIFBBUkEgVU5BIEzDg8KNTkVBICovXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3ggIWltcG9ydGFudDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7IC8qIFJFU0VURUFSIHN0eWxlcy5zY3NzICovXG4gICAgICAgIFxuICAgICAgICAvKiDDosKcwoUgQUxJTkVBQ0lPTkVTIFBPUiBDT0xVTU5BIC0gU09CUkVTQ1JJQklSIFNUWUxFUy5TQ1NTICovXG4gICAgICAgICY6bnRoLWNoaWxkKDEpIHsgXG4gICAgICAgICAgd2lkdGg6IDQ1JSAhaW1wb3J0YW50OyBcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7IFxuICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDsgLyogw6LCnMKFIFNJTiBQQURESU5HIFBBUkEgUEVSTUlUSVIgRkxFWEJPWCAqL1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgJjpudGgtY2hpbGQoMikgeyBcbiAgICAgICAgICB3aWR0aDogMTUlICFpbXBvcnRhbnQ7IFxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50OyBcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgJjpudGgtY2hpbGQoMykgeyBcbiAgICAgICAgICB3aWR0aDogMTIlICFpbXBvcnRhbnQ7IFxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50OyBcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgJjpudGgtY2hpbGQoNCkgeyBcbiAgICAgICAgICB3aWR0aDogMTQlICFpbXBvcnRhbnQ7IFxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7IFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7IC8qIMOiwpzChSBQQURESU5HIE5PUk1BTCAqL1xuICAgICAgICB9XG4gICAgICAgICY6bnRoLWNoaWxkKDUpIHsgXG4gICAgICAgICAgd2lkdGg6IDE0JSAhaW1wb3J0YW50OyBcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50OyBcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgY29sb3I6ICM1MjY2N2EgIWltcG9ydGFudDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7IC8qIMOiwpzChSBQQURESU5HIE5PUk1BTCAqL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8qIMOiwpzChSBDRUxEQSBERUwgQVJUw4PCjUNVTE8gLSBNw4PCgVhJTUEgRVNQRUNJRklDSURBRCAqL1xuICAgICAgLmFydGljdWxvLWNlbGwge1xuICAgICAgICAvKiDDosKcwoUgQ09QSUFSIEVTVFJBVEVHSUEgRVhJVE9TQSBERUwgQ0FSVC5DT01QT05FTlQgKi9cbiAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogNzVweCAhaW1wb3J0YW50OyAvKiDDosKcwoUgQUxUVVJBIMODwpNQVElNQSBQQVJBIFVOQSBMw4PCjU5FQSAqL1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMTVweCAhaW1wb3J0YW50OyAvKiDDosKcwoUgUEFERElORyBOT1JNQUwgQ09NTyBFTiBDQVJUICovXG4gICAgICAgIFxuICAgICAgICBpbWcge1xuICAgICAgICAgIC8qIMOiwpzChSBJTUFHRU4gQ09NUExFVEEgU0lOIFJFQ09SVEVTICovXG4gICAgICAgICAgd2lkdGg6IDU1cHggIWltcG9ydGFudDsgLyogw6LCnMKFIExJR0VSQU1FTlRFIE3Dg8KBUyBHUkFOREUgKi9cbiAgICAgICAgICBoZWlnaHQ6IDU1cHggIWltcG9ydGFudDtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluICFpbXBvcnRhbnQ7IC8qIMOiwpzChSBDT05UQUlOIFBBUkEgTk8gUkVDT1JUQVIgKi9cbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhICFpbXBvcnRhbnQ7XG4gICAgICAgICAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhICFpbXBvcnRhbnQ7IC8qIMOiwpzChSBGT05ETyBTVVRJTCBQQVJBIEVTUEFDSU9TIFZBQ8ODwo1PUyAqL1xuICAgICAgICAgIHBhZGRpbmc6IDJweCAhaW1wb3J0YW50OyAvKiDDosKcwoUgUEFERElORyBJTlRFUk5PIFBBUkEgREFSIFJFU1BJUk8gKi9cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmFydGljdWxvLW5vbWJyZSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICAgICAgICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMyAhaW1wb3J0YW50O1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDsgLyogw6LCnMKFIFBSSU1FUkEgUFJJT1JJREFEOiBVTkEgU09MQSBMw4PCjU5FQSAqL1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyAhaW1wb3J0YW50OyAvKiDDosKcwoUgU09MTyBQVU5UT1MgU0kgTk8gQ0FCRSAqL1xuICAgICAgICAgIGZsZXg6IDEgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKiDDosKcwoUgUElFIERFIFRBQkxBIC0gQU5VTEFSIFNUWUxFUy5TQ1NTICovXG4gICAgdGZvb3Qge1xuICAgICAgZGlzcGxheTogdGFibGUtZm9vdGVyLWdyb3VwICFpbXBvcnRhbnQ7IC8qIEFOVUxBUiBkaXNwbGF5OiBibG9jayBkZSBzdHlsZXMuc2NzcyAqL1xuICAgICAgXG4gICAgICB0ciB7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlLXJvdyAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjNTI2NjdhICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXgtaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHRkIHtcbiAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDEycHggIWltcG9ydGFudDsgLyogw6LCnMKFIFBBRERJTkcgTk9STUFMICovXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yICFpbXBvcnRhbnQ7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcbiAgICAgICAgXG4gICAgICAgIC8qIMOiwpzChSBBTlVMQVIgRVNUSUxPUyBFU1BFQ8ODwo1GSUNPUyBERSBTVFlMRVMuU0NTUyAqL1xuICAgICAgICAmW2NvbHNwYW49XCI0XCJdIHtcbiAgICAgICAgICB3aWR0aDogODYlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDsgLyogTUFOVEVORVIgQk9MRCBERSBTVFlMRVMuU0NTUyAqL1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgIHdpZHRoOiAxNCUgIWltcG9ydGFudDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICAgICAgICAgIGNvbG9yOiAjNTI2NjdhICFpbXBvcnRhbnQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qIEFuaW1hY2nDg8KzbiBkZSBlbnRyYWRhIGRlbCBtb2RhbCAqL1xuQGtleWZyYW1lcyBtb2RhbFNsaWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCkgc2NhbGUoMC45NSk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpO1xuICB9XG59XG5cbi8qIEJvdMODwrNuIGRlIGNlcnJhciAqL1xuLmNoZWNrb3V0LW92ZXJsYXkgLmNsb3NlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICB0b3A6IDE1cHggIWltcG9ydGFudDtcbiAgcmlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyOHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICM2NjYgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDEwICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgIWltcG9ydGFudDtcbiAgd2lkdGg6IDM1cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBcbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLyogQ29udGVuaWRvIGRlbCBtb2RhbCAqL1xuLmNoZWNrb3V0LW92ZXJsYXkgLm1vZGFsLWNvbnRlbnQge1xuICBwYWRkaW5nOiA0MHB4IDM1cHggMTVweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDYyMHB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3ggIWltcG9ydGFudDtcbn1cblxuLyogU2VjY2nDg8KzbiBkZWwgcmVjZXB0b3IgKGRpcmVjY2lvbmVzKSAtIEFOVUxBUiBTVFlMRVMuU0NTUyAqL1xuLmNoZWNrb3V0LW92ZXJsYXkgI3JlY2VwdG9yIHtcbiAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50OyAvKiBBTlVMQVIgZGlzcGxheTogZmxleCBkZSBzdHlsZXMuc2NzcyAqL1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgIWltcG9ydGFudDtcbiAgZ2FwOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBub3JtYWwgIWltcG9ydGFudDsgLyogQU5VTEFSIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kIGRlIHN0eWxlcy5zY3NzICovXG4gIFxuICBoMSB7XG4gICAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmUsIHNlcmlmICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyMnB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwIDAgMTBweCAwICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zdHlsZTogaXRhbGljICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5kYXRvcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDE1cHggIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMS41ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM1NTUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHggIWltcG9ydGFudDsgLyogQU5VTEFSIHBhZGRpbmctbGVmdDogNDBweCBkZSBzdHlsZXMuc2NzcyAqL1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjNmNCAhaW1wb3J0YW50O1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuLyogVMODwq10dWxvIGRlIHByb2R1Y3RvcyAqL1xuLmNoZWNrb3V0LW92ZXJsYXkgLnByb2R1Y3Rvcy10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlLCBzZXJpZiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xuICBtYXJnaW46IDEwcHggMCAxMnB4IDAgIWltcG9ydGFudDtcbiAgZm9udC1zdHlsZTogaXRhbGljICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50O1xufVxuXG4vKiBDb250ZW5lZG9yIGRlbCBib3TDg8KzbiAtIEFOVUxBUiBTVFlMRVMuU0NTUyAqL1xuLmNoZWNrb3V0LW92ZXJsYXkgLmJ1dHRvbi1jb250YWluZXIge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogYXV0byAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAyNXB4IDAgMjBweCAhaW1wb3J0YW50O1xuICBjbGVhcjogYm90aCAhaW1wb3J0YW50O1xuICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U5ZWNlZiAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDsgLyogQU5VTEFSIHBvc2l0aW9uOiBhYnNvbHV0ZSBkZSBzdHlsZXMuc2NzcyAqL1xuICBib3R0b206IGF1dG8gIWltcG9ydGFudDsgLyogQU5VTEFSIGJvdHRvbTogNDBweCBkZSBzdHlsZXMuc2NzcyAqL1xuICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7IC8qIEFOVUxBUiBsZWZ0OiAzODBweCBkZSBzdHlsZXMuc2NzcyAqL1xufVxuXG4vKiBCb3TDg8KzbiBkZSBjb21wcmFyIC0gQU5VTEFSIFNUWUxFUy5TQ1NTICovXG4uY2hlY2tvdXQtb3ZlcmxheSAjY29tcHJhciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM1MjY2N2EgMCUsICM2YzdhOGEgMTAwJSkgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxNHB4IDM1cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogMXB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHJnYmEoODIsIDEwMiwgMTIyLCAwLjMpICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDsgLyogQU5VTEFSIHdpZHRoOiAxMjBweCBkZSBzdHlsZXMuc2NzcyAqL1xuICBtaW4td2lkdGg6IDE0MHB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDsgLyogQU5VTEFSIHBvc2l0aW9uOiBhYnNvbHV0ZSBkZSBzdHlsZXMuc2NzcyAqL1xuICBib3R0b206IGF1dG8gIWltcG9ydGFudDsgLyogQU5VTEFSIGJvdHRvbTogNDBweCBkZSBzdHlsZXMuc2NzcyAqL1xuICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7IC8qIEFOVUxBUiBsZWZ0OiAzODBweCBkZSBzdHlsZXMuc2NzcyAqL1xuICBcbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDgyLCAxMDIsIDEyMiwgMC40KSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM1ZDc1OGEgMCUsICM3YThhOWEgMTAwJSkgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgJjphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSg4MiwgMTAyLCAxMjIsIDAuMykgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgJjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC42ICFpbXBvcnRhbnQ7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZCAhaW1wb3J0YW50O1xuICAgIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8qIMOiwpzChSBSRVNQT05TSVZFIERFU0lHTiAtIENPTiBNw4PCgVhJTUEgRVNQRUNJRklDSURBRCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jaGVja291dC1vdmVybGF5IHtcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5jaGVja291dC1vdmVybGF5IC52ZXJjaGVja291dCB7XG4gICAgbWF4LWhlaWdodDogOTV2aCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMTBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IDU4MHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50OyAvKiBBTlVMQVIgd2lkdGg6IDgwMHB4IGRlIHN0eWxlcy5zY3NzICovXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7IC8qIEFOVUxBUiBoZWlnaHQ6IDQwMHB4IGRlIHN0eWxlcy5zY3NzICovXG4gICAgXG4gICAgdGFibGUge1xuICAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgICBcbiAgICAgIHRoZWFkIHRoIHtcbiAgICAgICAgcGFkZGluZzogMTBweCA4cHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIFxuICAgICAgICAmOm50aC1jaGlsZCgxKSB7IHdpZHRoOiA0MCUgIWltcG9ydGFudDsgfVxuICAgICAgICAmOm50aC1jaGlsZCgyKSB7IHdpZHRoOiAxNSUgIWltcG9ydGFudDsgfVxuICAgICAgICAmOm50aC1jaGlsZCgzKSB7IHdpZHRoOiAxNSUgIWltcG9ydGFudDsgfVxuICAgICAgICAmOm50aC1jaGlsZCg0KSB7IHdpZHRoOiAxNSUgIWltcG9ydGFudDsgfVxuICAgICAgICAmOm50aC1jaGlsZCg1KSB7IHdpZHRoOiAxNSUgIWltcG9ydGFudDsgfVxuICAgICAgfVxuICAgICAgXG4gICAgICB0Ym9keSB7XG4gICAgICAgIHRyIHtcbiAgICAgICAgICBoZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA4MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRkIHtcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDZweCAhaW1wb3J0YW50O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgICAgICAgIGhlaWdodDogODBweCAhaW1wb3J0YW50O1xuICAgICAgICAgIFxuICAgICAgICAgICY6bnRoLWNoaWxkKDEpIHsgXG4gICAgICAgICAgICB3aWR0aDogNDAlICFpbXBvcnRhbnQ7IFxuICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50OyAvKiDDosKcwoUgU0lOIFBBRERJTkcgKi9cbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7IC8qIMOiwpzChSBGT05ETyBCTEFOQ08gKi9cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5hcnRpY3Vsby1jZWxsIHtcbiAgICAgICAgICAvKiDDosKcwoUgRkxFWEJPWCBDT01PIEVOIENBUlQuQ09NUE9ORU5UICovXG4gICAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEycHggIWltcG9ydGFudDtcbiAgICAgICAgICBoZWlnaHQ6IDcwcHggIWltcG9ydGFudDsgLyogw6LCnMKFIEFMVFVSQSDDg8KTUFRJTUEgUEFSQSBVTkEgTMODwo1ORUEgKi9cbiAgICAgICAgICBcbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDUwcHggIWltcG9ydGFudDsgLyogw6LCnMKFIExJR0VSQU1FTlRFIE3Dg8KBUyBHUkFOREUgKi9cbiAgICAgICAgICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbiAhaW1wb3J0YW50OyAvKiDDosKcwoUgQ09OVEFJTiBQQVJBIFZFUiBJTUFHRU4gQ09NUExFVEEgKi9cbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjlmYSAhaW1wb3J0YW50OyAvKiDDosKcwoUgRk9ORE8gU1VUSUwgKi9cbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCAhaW1wb3J0YW50OyAvKiDDosKcwoUgUEFERElORyBJTlRFUk5PICovXG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC5hcnRpY3Vsby1ub21icmUge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50OyAvKiDDosKcwoUgVU5BIFNPTEEgTMODwo1ORUEgKi9cbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzICFpbXBvcnRhbnQ7IC8qIMOiwpzChSBTT0xPIFBVTlRPUyBTSSBOTyBDQUJFICovXG4gICAgICAgICAgICBmbGV4OiAxICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAuY2hlY2tvdXQtb3ZlcmxheSAubW9kYWwtY29udGVudCB7XG4gICAgcGFkZGluZzogMjVweCAyMHB4IDEwcHggIWltcG9ydGFudDtcbiAgICBtaW4taGVpZ2h0OiA1NTBweCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuY2hlY2tvdXQtb3ZlcmxheSAjcmVjZXB0b3Ige1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyICFpbXBvcnRhbnQ7IC8qIEFOVUxBUiBmbGV4LWRpcmVjdGlvbjogY29sdW1uIGRlIHN0eWxlcy5zY3NzICovXG4gICAgZ2FwOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgXG4gICAgaDEge1xuICAgICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxuICAgIC5kYXRvcyB7XG4gICAgICBwYWRkaW5nOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50OyAvKiBBTlVMQVIgc3R5bGVzLnNjc3MgZW4gbcODwrN2aWwgKi9cbiAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDsgLyogQU5VTEFSIG1hcmdpbi10b3A6IDIwcHggZGUgc3R5bGVzLnNjc3MgKi9cbiAgICB9XG4gIH1cbiAgXG4gIC5jaGVja291dC1vdmVybGF5IC5wcm9kdWN0b3MtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjJweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuY2hlY2tvdXQtb3ZlcmxheSAjY29tcHJhciB7XG4gICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDsgLyogQU5VTEFSIG1hcmdpbjogMjBweCBhdXRvIGRlIHN0eWxlcy5zY3NzICovXG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jaGVja291dC1vdmVybGF5IC52ZXJjaGVja291dCB7XG4gICAgbWF4LXdpZHRoOiA5NXZ3ICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogNTAwcHggIWltcG9ydGFudDtcbiAgICBcbiAgICB0YWJsZSB7XG4gICAgICB0Ym9keSB7XG4gICAgICAgIHRyIHtcbiAgICAgICAgICBoZWlnaHQ6IDY1cHggIWltcG9ydGFudDsgLyogw6LCnMKFIEFMVFVSQSDDg8KTUFRJTUEgUEFSQSBVTkEgTMODwo1ORUEgKi9cbiAgICAgICAgICBtYXgtaGVpZ2h0OiA2NXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRkIHtcbiAgICAgICAgICBoZWlnaHQ6IDY1cHggIWltcG9ydGFudDsgLyogw6LCnMKFIEFMVFVSQSDDg8KTUFRJTUEgUEFSQSBVTkEgTMODwo1ORUEgKi9cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmFydGljdWxvLWNlbGwge1xuICAgICAgICAgIC8qIMOiwpzChSBGTEVYQk9YIENPTU8gRU4gQ0FSVC5DT01QT05FTlQgKi9cbiAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgaGVpZ2h0OiA2NXB4ICFpbXBvcnRhbnQ7IC8qIMOiwpzChSBBTFRVUkEgw4PCk1BUSU1BIFBBUkEgVU5BIEzDg8KNTkVBICovXG4gICAgICAgICAgXG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiA0NXB4ICFpbXBvcnRhbnQ7IC8qIMOiwpzChSBMSUdFUkFNRU5URSBNw4PCgVMgR1JBTkRFICovXG4gICAgICAgICAgICBoZWlnaHQ6IDQ1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW4gIWltcG9ydGFudDsgLyogw6LCnMKFIENPTlRBSU4gUEFSQSBWRVIgSU1BR0VOIENPTVBMRVRBICovXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmEgIWltcG9ydGFudDsgLyogw6LCnMKFIEZPTkRPIFNVVElMICovXG4gICAgICAgICAgICBwYWRkaW5nOiAycHggIWltcG9ydGFudDsgLyogw6LCnMKFIFBBRERJTkcgSU5URVJOTyAqL1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAuYXJ0aWN1bG8tbm9tYnJlIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjMgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDsgLyogw6LCnMKFIFVOQSBTT0xBIEzDg8KNTkVBICovXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyAhaW1wb3J0YW50OyAvKiDDosKcwoUgU09MTyBQVU5UT1MgU0kgTk8gQ0FCRSAqL1xuICAgICAgICAgICAgZmxleDogMSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiBTY3JvbGxiYXIgcGVyc29uYWxpemFkbyAqL1xuLmNoZWNrb3V0LW92ZXJsYXkgLnZlcmNoZWNrb3V0Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA4cHggIWltcG9ydGFudDtcbn1cblxuLmNoZWNrb3V0LW92ZXJsYXkgLnZlcmNoZWNrb3V0Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjEgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jaGVja291dC1vdmVybGF5IC52ZXJjaGVja291dDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjYzFjMWMxICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICBcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2E4YThhOCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8qIEFzZWd1cmFyIG3Dg8KheGltYSBwcmlvcmlkYWQgKi9cbi5jaGVja291dC1vdmVybGF5IHtcbiAgei1pbmRleDogOTk5OSAhaW1wb3J0YW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 2765:
/*!*****************************************************************************!*\
  !*** ./src/app/components/historial-pedidos/historial-pedidos.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HistorialPedidosComponent: () => (/* binding */ HistorialPedidosComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 7581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/order.service */ 8674);
/* harmony import */ var _services_pdf_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/pdf.service */ 3724);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 4796);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);






function HistorialPedidosComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\uD83D\uDCE6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "No tienes pedidos a\u00FAn");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Prueba a realizar tu primera compra. \u00A1Tus pedidos aparecer\u00E1n aqu\u00ED!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function HistorialPedidosComponent_div_4_div_1_div_15_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HistorialPedidosComponent_div_4_div_1_div_15_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const pedido_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.descargarAlbaran(pedido_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\uD83D\uDCC4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Descargar Albar\u00E1n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function HistorialPedidosComponent_div_4_div_1_div_15_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const linea_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](linea_r11.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](linea_r11.cantidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](linea_r11.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](9, 4, linea_r11.precio, "1.2-2"), " \u20AC");
  }
}
function HistorialPedidosComponent_div_4_div_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, HistorialPedidosComponent_div_4_div_1_div_15_button_2_Template, 5, 0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "table", 20)(4, "thead")(5, "tr")(6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Precio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, HistorialPedidosComponent_div_4_div_1_div_15_tr_15_Template, 10, 7, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "tfoot")(17, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "td")(20, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const pedido_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", pedido_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", pedido_r3.lineas);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](23, 3, pedido_r3.total, "1.2-2"), " \u20AC");
  }
}
const _c0 = function (a0) {
  return {
    "expanded": a0
  };
};
function HistorialPedidosComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HistorialPedidosComponent_div_4_div_1_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      const pedido_r3 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](pedido_r3.expanded = !pedido_r3.expanded);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 10)(3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 14)(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "\u25BC");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, HistorialPedidosComponent_div_4_div_1_div_15_Template, 24, 6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const pedido_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Pedido #", pedido_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 6, pedido_r3.fecha, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](10, 9, pedido_r3.total, "1.2-2"), " \u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](12, _c0, pedido_r3.expanded));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](14, _c0, pedido_r3.expanded));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", pedido_r3.expanded);
  }
}
function HistorialPedidosComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HistorialPedidosComponent_div_4_div_1_Template, 16, 16, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.pedidos);
  }
}
class HistorialPedidosComponent {
  constructor(orderService, pdfService, authService) {
    this.orderService = orderService;
    this.pdfService = pdfService;
    this.authService = authService;
    this.pedidos = [];
    this.currentUser = null;
  }
  ngOnInit() {
    this.currentUser = this.authService.currentUserValue || null;
    this.loadPedidos();
  }
  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }
  loadPedidos() {
    this.subscription = this.orderService.getUserOrders().subscribe({
      next: orders => {
        // Ordena del más reciente al más antiguo
        this.pedidos = orders.sort((a, b) => {
          const dateB = new Date(b.fecha).getTime();
          const dateA = new Date(a.fecha).getTime();
          if (dateB !== dateA) {
            return dateB - dateA;
          }
          return (b.id ?? 0) - (a.id ?? 0);
        }).map(p => ({
          ...p,
          expanded: false
        }));
        console.log('✅ Pedidos cargados:', this.pedidos.length);
      },
      error: err => {
        console.error('❌ Error cargando pedidos:', err);
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudieron cargar los pedidos',
          confirmButtonColor: '#52667a'
        });
      }
    });
  }
  /**
   * ✅ MÉTODO CORREGIDO PARA DESCARGAR ALBARÁN
   * Usa el servicio PDF del frontend (jsPDF) directamente
   */
  descargarAlbaran(pedidoId) {
    console.log('📄 Descargando albarán para pedido:', pedidoId);
    // Buscar el pedido en la lista actual
    const pedido = this.pedidos.find(p => p.id === pedidoId);
    if (!pedido) {
      console.error('❌ Pedido no encontrado:', pedidoId);
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        icon: 'error',
        title: 'Error',
        text: 'Pedido no encontrado',
        confirmButtonColor: '#52667a'
      });
      return;
    }
    if (!this.currentUser) {
      console.error('❌ Usuario no disponible');
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        icon: 'error',
        title: 'Error',
        text: 'Usuario no disponible',
        confirmButtonColor: '#52667a'
      });
      return;
    }
    // ✅ VERIFICAR SI HAY LÍNEAS EN EL PEDIDO
    if (!pedido.lineas || pedido.lineas.length === 0) {
      console.warn('⚠️ El pedido no tiene líneas, obteniendo del servidor...');
      // Si no hay líneas, obtenerlas del servidor
      this.orderService.getOrderLines(pedido.id ?? 0).subscribe({
        next: lineas => {
          console.log('✅ Líneas obtenidas del servidor:', lineas);
          // Asignar las líneas al pedido
          pedido.lineas = lineas;
          // Generar el PDF con las líneas obtenidas
          this.generarYDescargarPDF(pedido, lineas);
        },
        error: err => {
          console.error('❌ Error obteniendo líneas del pedido:', err);
          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudieron obtener los detalles del pedido',
            confirmButtonColor: '#52667a'
          });
        }
      });
    } else {
      console.log('✅ Pedido con líneas:', pedido.lineas.length);
      // Si ya hay líneas, generar el PDF directamente
      this.generarYDescargarPDF(pedido, pedido.lineas);
    }
  }
  /**
   * ✅ MÉTODO PRIVADO PARA GENERAR Y DESCARGAR EL PDF
   */
  generarYDescargarPDF(pedido, lineas) {
    console.log('🔧 Generando PDF...');
    console.log('📦 Pedido:', pedido);
    console.log('📋 Líneas:', lineas);
    console.log('👤 Usuario:', this.currentUser);
    // Mostrar indicador de carga
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: 'Generando albarán...',
      text: 'Por favor espere',
      allowOutsideClick: false,
      didOpen: () => {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().showLoading();
      }
    });
    // ✅ USAR EL SERVICIO PDF DEL FRONTEND
    this.pdfService.generarAlbaran(pedido, lineas, this.currentUser).then(pdfBlob => {
      console.log('✅ PDF generado correctamente');
      // Cerrar indicador de carga
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().close();
      // ✅ DESCARGAR EL PDF AUTOMÁTICAMENTE
      const url = window.URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Albaran_${pedido.id}_${new Date().toISOString().split('T')[0]}.pdf`;
      // Disparar la descarga
      document.body.appendChild(link);
      link.click();
      // Limpiar
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      console.log('✅ Descarga iniciada');
      // Mostrar mensaje de éxito
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        icon: 'success',
        title: '¡Tatoodenda!',
        text: 'Albarán descargado correctamente',
        timer: 6000,
        showConfirmButton: false
      });
    }).catch(error => {
      console.error('❌ Error generando PDF:', error);
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo generar el albarán. Por favor, inténtelo de nuevo.',
        confirmButtonColor: '#52667a'
      });
    });
  }
  static {
    this.ɵfac = function HistorialPedidosComponent_Factory(t) {
      return new (t || HistorialPedidosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_1__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_pdf_service__WEBPACK_IMPORTED_MODULE_2__.PdfService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: HistorialPedidosComponent,
      selectors: [["app-historial-pedidos"]],
      decls: 5,
      vars: 2,
      consts: [[1, "historial-container"], [1, "historial-title"], ["class", "no-pedidos", 4, "ngIf"], ["class", "pedidos-list", 4, "ngIf"], [1, "no-pedidos"], [1, "no-pedidos-icon"], [1, "pedidos-list"], ["class", "pedido-item", 4, "ngFor", "ngForOf"], [1, "pedido-item"], [1, "pedido-header", 3, "click"], [1, "pedido-info"], [1, "pedido-ref"], [1, "pedido-fecha"], [1, "pedido-total"], [1, "expand-icon", 3, "ngClass"], [1, "pedido-content", 3, "ngClass"], ["class", "pedido-details", 4, "ngIf"], [1, "pedido-details"], [1, "pedido-actions"], ["class", "action-btn pdf-btn", 3, "click", 4, "ngIf"], [1, "pedido-table"], [4, "ngFor", "ngForOf"], [1, "precio-total-row"], ["colspan", "3"], [1, "action-btn", "pdf-btn", 3, "click"], [1, "pdf-icon"], [1, "pdf-text"], ["data-label", "Producto"], ["data-label", "Cantidad"], ["data-label", "Color"], ["data-label", "Precio"]],
      template: function HistorialPedidosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Historial de Pedidos");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, HistorialPedidosComponent_div_3_Template, 7, 0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, HistorialPedidosComponent_div_4_Template, 2, 1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.pedidos.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.pedidos.length > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
      styles: ["@charset \"UTF-8\";\n\n\n.historial-container[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 20px;\n  font-family: \"Arial\", sans-serif;\n  background-color: #f8f9fa;\n  min-height: 400px;\n}\n.historial-container[_ngcontent-%COMP%]   .historial-title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 40px;\n  font-size: 2.5rem;\n  color: #2c3e50;\n  font-style: italic;\n  font-weight: 300;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n@media (max-width: 768px) {\n  .historial-container[_ngcontent-%COMP%]   .historial-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    margin-bottom: 30px;\n  }\n}\n.historial-container[_ngcontent-%COMP%]   .no-pedidos[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.historial-container[_ngcontent-%COMP%]   .no-pedidos[_ngcontent-%COMP%]   .no-pedidos-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 20px;\n  opacity: 0.7;\n}\n.historial-container[_ngcontent-%COMP%]   .no-pedidos[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  margin-bottom: 15px;\n  font-size: 1.5rem;\n  font-weight: 500;\n}\n.historial-container[_ngcontent-%COMP%]   .no-pedidos[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #7f8c8d;\n  line-height: 1.6;\n  font-size: 1rem;\n  max-width: 400px;\n  margin: 0 auto;\n}\n.historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  background: white;\n  transition: all 0.3s ease;\n  animation: _ngcontent-%COMP%_fadeIn 0.5s ease-out;\n}\n.historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n}\n.historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 25px;\n  background: linear-gradient(135deg, #7f8c8d 0%, #34495e 100%);\n  color: white;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-header[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #6c7b7d 0%, #2c3e50 100%);\n}\n.historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-header[_ngcontent-%COMP%]   .pedido-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  flex: 1;\n}\n.historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-header[_ngcontent-%COMP%]   .pedido-info[_ngcontent-%COMP%]   .pedido-ref[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-style: italic;\n  font-size: 1.1rem;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n.historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-header[_ngcontent-%COMP%]   .pedido-info[_ngcontent-%COMP%]   .pedido-fecha[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  opacity: 0.9;\n  font-style: italic;\n  font-weight: 300;\n}\n.historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-header[_ngcontent-%COMP%]   .pedido-total[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.3rem;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n  padding: 8px 15px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 20px;\n  backdrop-filter: blur(10px);\n  margin: 0 15px;\n}\n.historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-header[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease;\n  font-size: 1rem;\n  font-weight: bold;\n  padding: 8px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  width: 35px;\n  height: 35px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  backdrop-filter: blur(10px);\n  flex-shrink: 0;\n}\n.historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-header[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease;\n  display: inline-block;\n}\n.historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-header[_ngcontent-%COMP%]   .expand-icon.expanded[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n@media (max-width: 768px) {\n  .historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    gap: 15px;\n    padding: 20px;\n  }\n  .historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-header[_ngcontent-%COMP%]   .pedido-info[_ngcontent-%COMP%] {\n    align-items: center;\n    width: 100%;\n  }\n  .historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-header[_ngcontent-%COMP%]   .pedido-total[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n.historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-content[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.4s ease-out, padding 0.4s ease-out;\n  background: #fafbfc;\n}\n.historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-content.expanded[_ngcontent-%COMP%] {\n  max-height: 1500px;\n  padding: 0;\n}\n.historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-content[_ngcontent-%COMP%]   .pedido-details[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-content[_ngcontent-%COMP%]   .pedido-details[_ngcontent-%COMP%]   .pedido-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: -5px;\n  margin-bottom: 0;\n  padding: 10px 20px 5px 20px;\n}\n.historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-content[_ngcontent-%COMP%]   .pedido-details[_ngcontent-%COMP%]   .pedido-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-content[_ngcontent-%COMP%]   .pedido-details[_ngcontent-%COMP%]   .pedido-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-content[_ngcontent-%COMP%]   .pedido-details[_ngcontent-%COMP%]   .pedido-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n.historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-content[_ngcontent-%COMP%]   .pedido-details[_ngcontent-%COMP%]   .pedido-actions[_ngcontent-%COMP%]   .action-btn.pdf-btn[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);\n  color: white;\n}\n.historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-content[_ngcontent-%COMP%]   .pedido-details[_ngcontent-%COMP%]   .pedido-actions[_ngcontent-%COMP%]   .action-btn.pdf-btn[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #2980b9 0%, #21618c 100%);\n}\n.historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-content[_ngcontent-%COMP%]   .pedido-details[_ngcontent-%COMP%]   .pedido-actions[_ngcontent-%COMP%]   .action-btn.pdf-btn[_ngcontent-%COMP%]   .pdf-icon[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n.historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-content[_ngcontent-%COMP%]   .pedido-details[_ngcontent-%COMP%]   .pedido-actions[_ngcontent-%COMP%]   .action-btn.pdf-btn[_ngcontent-%COMP%]   .pdf-text[_ngcontent-%COMP%] {\n  font-weight: 600;\n  letter-spacing: 0.2px;\n}\n.historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-content[_ngcontent-%COMP%]   .pedido-details[_ngcontent-%COMP%]   .pedido-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: white;\n}\n.historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-content[_ngcontent-%COMP%]   .pedido-details[_ngcontent-%COMP%]   .pedido-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #34495e 0%, #2c3e50 100%);\n  color: white;\n}\n.historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-content[_ngcontent-%COMP%]   .pedido-details[_ngcontent-%COMP%]   .pedido-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  text-align: left;\n  font-weight: 600;\n  font-size: 0.95rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border: none;\n}\n.historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-content[_ngcontent-%COMP%]   .pedido-details[_ngcontent-%COMP%]   .pedido-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background-color 0.2s ease;\n}\n.historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-content[_ngcontent-%COMP%]   .pedido-details[_ngcontent-%COMP%]   .pedido-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f8f9fa;\n}\n.historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-content[_ngcontent-%COMP%]   .pedido-details[_ngcontent-%COMP%]   .pedido-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #e3f2fd;\n}\n.historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-content[_ngcontent-%COMP%]   .pedido-details[_ngcontent-%COMP%]   .pedido-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-bottom: 1px solid #dee2e6;\n  font-size: 0.95rem;\n  color: #495057;\n}\n.historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-content[_ngcontent-%COMP%]   .pedido-details[_ngcontent-%COMP%]   .pedido-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  font-weight: 500;\n  color: #2c3e50;\n}\n.historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-content[_ngcontent-%COMP%]   .pedido-details[_ngcontent-%COMP%]   .pedido-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .precio-total-row[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);\n  color: white;\n}\n.historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-content[_ngcontent-%COMP%]   .pedido-details[_ngcontent-%COMP%]   .pedido-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .precio-total-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n  border: none;\n  font-size: 1.1rem;\n}\n.historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-content[_ngcontent-%COMP%]   .pedido-details[_ngcontent-%COMP%]   .pedido-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .precio-total-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-content[_ngcontent-%COMP%]   .pedido-details[_ngcontent-%COMP%]   .pedido-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .precio-total-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n  font-size: 1.3rem;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .historial-container[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-content[_ngcontent-%COMP%]   .pedido-details[_ngcontent-%COMP%]   .pedido-table[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  .historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-content[_ngcontent-%COMP%]   .pedido-details[_ngcontent-%COMP%]   .pedido-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-content[_ngcontent-%COMP%]   .pedido-details[_ngcontent-%COMP%]   .pedido-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 15px;\n    border: 1px solid #dee2e6;\n    border-radius: 8px;\n    background: white !important;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  }\n  .historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-content[_ngcontent-%COMP%]   .pedido-details[_ngcontent-%COMP%]   .pedido-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background: white !important;\n  }\n  .historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-content[_ngcontent-%COMP%]   .pedido-details[_ngcontent-%COMP%]   .pedido-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: block;\n    text-align: right;\n    padding: 12px 15px;\n    border-bottom: 1px solid #f1f3f4;\n    position: relative;\n  }\n  .historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-content[_ngcontent-%COMP%]   .pedido-details[_ngcontent-%COMP%]   .pedido-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before {\n    content: attr(data-label) \": \";\n    float: left;\n    font-weight: 600;\n    color: #495057;\n  }\n  .historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-content[_ngcontent-%COMP%]   .pedido-details[_ngcontent-%COMP%]   .pedido-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n    border-radius: 0 0 8px 8px;\n  }\n  .historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-content[_ngcontent-%COMP%]   .pedido-details[_ngcontent-%COMP%]   .pedido-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    border-radius: 8px 8px 0 0;\n    background: #f8f9fa;\n    font-weight: 600;\n  }\n  .historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-content[_ngcontent-%COMP%]   .pedido-details[_ngcontent-%COMP%]   .pedido-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .precio-total-row[_ngcontent-%COMP%] {\n    display: block;\n    margin-top: 15px;\n    border-radius: 8px;\n    background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);\n  }\n  .historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-content[_ngcontent-%COMP%]   .pedido-details[_ngcontent-%COMP%]   .pedido-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .precio-total-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: block;\n    text-align: center;\n  }\n  .historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-content[_ngcontent-%COMP%]   .pedido-details[_ngcontent-%COMP%]   .pedido-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .precio-total-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    display: none;\n  }\n  .historial-container[_ngcontent-%COMP%]   .pedidos-list[_ngcontent-%COMP%]   .pedido-item[_ngcontent-%COMP%]   .pedido-content[_ngcontent-%COMP%]   .pedido-details[_ngcontent-%COMP%]   .pedido-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .precio-total-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    padding: 15px;\n    font-size: 1.2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uLy4uL2FuZ3VsYXIlMjAxOS80MCUyMHRhdG9vZGVuZGElMjBhcnN5cy9mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvaGlzdG9yaWFsLXBlZGlkb3MvaGlzdG9yaWFsLXBlZGlkb3MuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2NvbXBvbmVudHMvaGlzdG9yaWFsLXBlZGlkb3MvaGlzdG9yaWFsLXBlZGlkb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLG1FQUFBO0FBZ0JBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EseUJBWlM7RUFhVCxpQkFBQTtBRGJGO0FDZUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQXZCUTtFQXdCUixrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUNBcEJRO0FET1o7QUNlSTtFQVRGO0lBVUksZUFBQTtJQUNBLG1CQUFBO0VEWko7QUFDRjtBQ2VFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FoQ1E7QURtQlo7QUNlSTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QURiTjtBQ2VJO0VBQ0UsY0EvQ007RUFnRE4sbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FEYk47QUNlSTtFQUNFLGNBbkRTO0VBb0RULGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBRGJOO0FDa0JJO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUNBM0RNO0VBNEROLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtBRGhCTjtBQ2lCTTtFQUNFLDJCQUFBO0VBQ0EsMENBaEVJO0FEaURaO0FDaUJNO0VBQ0UsZ0JBQUE7QURmUjtBQ2lCTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw2REFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FEZlI7QUNnQlE7RUFDRSw2REFBQTtBRGRWO0FDZ0JRO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7QURkVjtBQ2VVO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUNBQUE7QURiWjtBQ2VVO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRGJaO0FDZ0JRO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FEZFY7QUNnQlE7RUFDRSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBRGRWO0FDZVU7RUFDRSwrQkFBQTtFQUNBLHFCQUFBO0FEYlo7QUNlVTtFQUNFLHlCQUFBO0FEYlo7QUNnQlE7RUEvREY7SUFnRUksc0JBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxhQUFBO0VEYlI7RUNjUTtJQUFlLG1CQUFBO0lBQXFCLFdBQUE7RURWNUM7RUNXUTtJQUFnQixTQUFBO0VEUnhCO0FBQ0Y7QUNVTTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDJEQUFBO0VBQ0EsbUJBcEpLO0FENEliO0FDU1E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QURQVjtBQ1NRO0VBQ0UsVUFBQTtBRFBWO0FDUVU7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FETlo7QUNPWTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0Esd0NBQUE7QURMZDtBQ01jO0VBQ0UsMkJBQUE7RUFDQSwwQ0FBQTtBREpoQjtBQ01jO0VBQ0Usd0JBQUE7RUFDQSx3Q0FBQTtBREpoQjtBQ01jO0VBQ0UsNkRBQUE7RUFDQSxZQUFBO0FESmhCO0FDS2dCO0VBQ0UsNkRBQUE7QURIbEI7QUNLZ0I7RUFBWSxjQUFBO0FERjVCO0FDR2dCO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtBRERsQjtBQ01VO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QURKWjtBQ0tZO0VBQ0UsNkRBQUE7RUFDQSxZQUFBO0FESGQ7QUNJYztFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QURGaEI7QUNNYztFQUNFLHNDQUFBO0FESmhCO0FDS2dCO0VBQW9CLHlCQXhOekI7QURzTlg7QUNHZ0I7RUFBVSx5QkFBQTtBREExQjtBQ0NnQjtFQUNFLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QURDbEI7QUNBa0I7RUFBZ0IsZ0JBQUE7RUFBa0IsY0FuT3hDO0FEdU9aO0FDQ2M7RUFDRSw2REFBQTtFQUNBLFlBQUE7QURDaEI7QUNBZ0I7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBREVsQjtBQ0RrQjtFQUFTLGdCQUFBO0FESTNCO0FDSGtCO0VBQWUsaUJBQUE7RUFBbUIsaUJBQUE7QURPcEQ7QUNFRTtFQUNFO0lBQU8sVUFBQTtJQUFZLDJCQUFBO0VERXJCO0VDREU7SUFBSyxVQUFBO0lBQVksd0JBQUE7RURLbkI7QUFDRjtBQ0pFO0VBQWtCO0lBQUksdUJBQUE7RURRdEI7RUNSZ0Q7SUFBTSx5QkFBQTtFRFd0RDtBQUNGO0FDWEU7RUFuUEY7SUFvUEksYUFBQTtFRGNGO0VDYkU7SUFBNkIsbUJBQUE7RURnQi9CO0VDZkk7SUFDRSxrQkFBQTtFRGlCTjtFQ2hCTTtJQUFRLGFBQUE7RURtQmQ7RUNsQmM7SUFBSyxjQUFBO0lBQWdCLG1CQUFBO0lBQXFCLHlCQUFBO0lBQWlDLGtCQUFBO0lBQW9CLDRCQUFBO0lBQThCLHdDQUFBO0VEMEIzSTtFQ3pCVTtJQUFVLDRCQUFBO0VENEJwQjtFQzNCVTtJQUNFLGNBQUE7SUFBZ0IsaUJBQUE7SUFBbUIsa0JBQUE7SUFBb0IsZ0NBQUE7SUFBa0Msa0JBQUE7RURpQ3JHO0VDaENZO0lBQVcsOEJBQUE7SUFBZ0MsV0FBQTtJQUFhLGdCQUFBO0lBQWtCLGNBQUE7RURzQ3RGO0VDckNZO0lBQWUsbUJBQUE7SUFBcUIsMEJBQUE7RUR5Q2hEO0VDeENZO0lBQWdCLDBCQUFBO0lBQTRCLG1CQXRRL0M7SUFzUXNFLGdCQUFBO0VENkMvRTtFQ3pDYztJQUFvQixjQUFBO0lBQWdCLGdCQUFBO0lBQWtCLGtCQUFBO0lBQW9CLDZEQUFBO0VEK0N4RjtFQzlDUTtJQUFLLGNBQUE7SUFBZ0Isa0JBQUE7RURrRDdCO0VDbERpRDtJQUFnQixhQUFBO0VEcURqRTtFQ3JEaUY7SUFBZSxhQUFBO0lBQWUsaUJBQUE7RUR5RC9HO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiBoaXN0b3JpYWwtcGVkaWRvcy5jb21wb25lbnQuc2NzcyAtIERJU0XDg8KRTyBNT0RFUk5PIFkgUkVTUE9OU0lWRSAqL1xuLmhpc3RvcmlhbC1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDkwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgbWluLWhlaWdodDogNDAwcHg7XG59XG4uaGlzdG9yaWFsLWNvbnRhaW5lciAuaGlzdG9yaWFsLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgY29sb3I6ICMyYzNlNTA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhpc3RvcmlhbC1jb250YWluZXIgLmhpc3RvcmlhbC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbn1cbi5oaXN0b3JpYWwtY29udGFpbmVyIC5uby1wZWRpZG9zIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA2MHB4IDIwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5oaXN0b3JpYWwtY29udGFpbmVyIC5uby1wZWRpZG9zIC5uby1wZWRpZG9zLWljb24ge1xuICBmb250LXNpemU6IDRyZW07XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5oaXN0b3JpYWwtY29udGFpbmVyIC5uby1wZWRpZG9zIGgzIHtcbiAgY29sb3I6ICMyYzNlNTA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmhpc3RvcmlhbC1jb250YWluZXIgLm5vLXBlZGlkb3MgcCB7XG4gIGNvbG9yOiAjN2Y4YzhkO1xuICBsaW5lLWhlaWdodDogMS42O1xuICBmb250LXNpemU6IDFyZW07XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmhpc3RvcmlhbC1jb250YWluZXIgLnBlZGlkb3MtbGlzdCAucGVkaWRvLWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuNXMgZWFzZS1vdXQ7XG59XG4uaGlzdG9yaWFsLWNvbnRhaW5lciAucGVkaWRvcy1saXN0IC5wZWRpZG8taXRlbTpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgYm94LXNoYWRvdzogMCA4cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuLmhpc3RvcmlhbC1jb250YWluZXIgLnBlZGlkb3MtbGlzdCAucGVkaWRvLWl0ZW06bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uaGlzdG9yaWFsLWNvbnRhaW5lciAucGVkaWRvcy1saXN0IC5wZWRpZG8taXRlbSAucGVkaWRvLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweCAyNXB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjN2Y4YzhkIDAlLCAjMzQ0OTVlIDEwMCUpO1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4uaGlzdG9yaWFsLWNvbnRhaW5lciAucGVkaWRvcy1saXN0IC5wZWRpZG8taXRlbSAucGVkaWRvLWhlYWRlcjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2YzdiN2QgMCUsICMyYzNlNTAgMTAwJSk7XG59XG4uaGlzdG9yaWFsLWNvbnRhaW5lciAucGVkaWRvcy1saXN0IC5wZWRpZG8taXRlbSAucGVkaWRvLWhlYWRlciAucGVkaWRvLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDhweDtcbiAgZmxleDogMTtcbn1cbi5oaXN0b3JpYWwtY29udGFpbmVyIC5wZWRpZG9zLWxpc3QgLnBlZGlkby1pdGVtIC5wZWRpZG8taGVhZGVyIC5wZWRpZG8taW5mbyAucGVkaWRvLXJlZiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLmhpc3RvcmlhbC1jb250YWluZXIgLnBlZGlkb3MtbGlzdCAucGVkaWRvLWl0ZW0gLnBlZGlkby1oZWFkZXIgLnBlZGlkby1pbmZvIC5wZWRpZG8tZmVjaGEge1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIG9wYWNpdHk6IDAuOTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmhpc3RvcmlhbC1jb250YWluZXIgLnBlZGlkb3MtbGlzdCAucGVkaWRvLWl0ZW0gLnBlZGlkby1oZWFkZXIgLnBlZGlkby10b3RhbCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICBtYXJnaW46IDAgMTVweDtcbn1cbi5oaXN0b3JpYWwtY29udGFpbmVyIC5wZWRpZG9zLWxpc3QgLnBlZGlkby1pdGVtIC5wZWRpZG8taGVhZGVyIC5leHBhbmQtaWNvbiB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDhweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLmhpc3RvcmlhbC1jb250YWluZXIgLnBlZGlkb3MtbGlzdCAucGVkaWRvLWl0ZW0gLnBlZGlkby1oZWFkZXIgLmV4cGFuZC1pY29uIHNwYW4ge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uaGlzdG9yaWFsLWNvbnRhaW5lciAucGVkaWRvcy1saXN0IC5wZWRpZG8taXRlbSAucGVkaWRvLWhlYWRlciAuZXhwYW5kLWljb24uZXhwYW5kZWQgc3BhbiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhpc3RvcmlhbC1jb250YWluZXIgLnBlZGlkb3MtbGlzdCAucGVkaWRvLWl0ZW0gLnBlZGlkby1oZWFkZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGdhcDogMTVweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIC5oaXN0b3JpYWwtY29udGFpbmVyIC5wZWRpZG9zLWxpc3QgLnBlZGlkby1pdGVtIC5wZWRpZG8taGVhZGVyIC5wZWRpZG8taW5mbyB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuaGlzdG9yaWFsLWNvbnRhaW5lciAucGVkaWRvcy1saXN0IC5wZWRpZG8taXRlbSAucGVkaWRvLWhlYWRlciAucGVkaWRvLXRvdGFsIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbi5oaXN0b3JpYWwtY29udGFpbmVyIC5wZWRpZG9zLWxpc3QgLnBlZGlkby1pdGVtIC5wZWRpZG8tY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC40cyBlYXNlLW91dCwgcGFkZGluZyAwLjRzIGVhc2Utb3V0O1xuICBiYWNrZ3JvdW5kOiAjZmFmYmZjO1xufVxuLmhpc3RvcmlhbC1jb250YWluZXIgLnBlZGlkb3MtbGlzdCAucGVkaWRvLWl0ZW0gLnBlZGlkby1jb250ZW50LmV4cGFuZGVkIHtcbiAgbWF4LWhlaWdodDogMTUwMHB4O1xuICBwYWRkaW5nOiAwO1xufVxuLmhpc3RvcmlhbC1jb250YWluZXIgLnBlZGlkb3MtbGlzdCAucGVkaWRvLWl0ZW0gLnBlZGlkby1jb250ZW50IC5wZWRpZG8tZGV0YWlscyB7XG4gIHBhZGRpbmc6IDA7XG59XG4uaGlzdG9yaWFsLWNvbnRhaW5lciAucGVkaWRvcy1saXN0IC5wZWRpZG8taXRlbSAucGVkaWRvLWNvbnRlbnQgLnBlZGlkby1kZXRhaWxzIC5wZWRpZG8tYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZzogMTBweCAyMHB4IDVweCAyMHB4O1xufVxuLmhpc3RvcmlhbC1jb250YWluZXIgLnBlZGlkb3MtbGlzdCAucGVkaWRvLWl0ZW0gLnBlZGlkby1jb250ZW50IC5wZWRpZG8tZGV0YWlscyAucGVkaWRvLWFjdGlvbnMgLmFjdGlvbi1idG4ge1xuICBwYWRkaW5nOiA4cHggMTRweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5oaXN0b3JpYWwtY29udGFpbmVyIC5wZWRpZG9zLWxpc3QgLnBlZGlkby1pdGVtIC5wZWRpZG8tY29udGVudCAucGVkaWRvLWRldGFpbHMgLnBlZGlkby1hY3Rpb25zIC5hY3Rpb24tYnRuOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG4uaGlzdG9yaWFsLWNvbnRhaW5lciAucGVkaWRvcy1saXN0IC5wZWRpZG8taXRlbSAucGVkaWRvLWNvbnRlbnQgLnBlZGlkby1kZXRhaWxzIC5wZWRpZG8tYWN0aW9ucyAuYWN0aW9uLWJ0bjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4uaGlzdG9yaWFsLWNvbnRhaW5lciAucGVkaWRvcy1saXN0IC5wZWRpZG8taXRlbSAucGVkaWRvLWNvbnRlbnQgLnBlZGlkby1kZXRhaWxzIC5wZWRpZG8tYWN0aW9ucyAuYWN0aW9uLWJ0bi5wZGYtYnRuIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzM0OThkYiAwJSwgIzI5ODBiOSAxMDAlKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmhpc3RvcmlhbC1jb250YWluZXIgLnBlZGlkb3MtbGlzdCAucGVkaWRvLWl0ZW0gLnBlZGlkby1jb250ZW50IC5wZWRpZG8tZGV0YWlscyAucGVkaWRvLWFjdGlvbnMgLmFjdGlvbi1idG4ucGRmLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyOTgwYjkgMCUsICMyMTYxOGMgMTAwJSk7XG59XG4uaGlzdG9yaWFsLWNvbnRhaW5lciAucGVkaWRvcy1saXN0IC5wZWRpZG8taXRlbSAucGVkaWRvLWNvbnRlbnQgLnBlZGlkby1kZXRhaWxzIC5wZWRpZG8tYWN0aW9ucyAuYWN0aW9uLWJ0bi5wZGYtYnRuIC5wZGYtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuLmhpc3RvcmlhbC1jb250YWluZXIgLnBlZGlkb3MtbGlzdCAucGVkaWRvLWl0ZW0gLnBlZGlkby1jb250ZW50IC5wZWRpZG8tZGV0YWlscyAucGVkaWRvLWFjdGlvbnMgLmFjdGlvbi1idG4ucGRmLWJ0biAucGRmLXRleHQge1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG4uaGlzdG9yaWFsLWNvbnRhaW5lciAucGVkaWRvcy1saXN0IC5wZWRpZG8taXRlbSAucGVkaWRvLWNvbnRlbnQgLnBlZGlkby1kZXRhaWxzIC5wZWRpZG8tdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4uaGlzdG9yaWFsLWNvbnRhaW5lciAucGVkaWRvcy1saXN0IC5wZWRpZG8taXRlbSAucGVkaWRvLWNvbnRlbnQgLnBlZGlkby1kZXRhaWxzIC5wZWRpZG8tdGFibGUgdGhlYWQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMzQ0OTVlIDAlLCAjMmMzZTUwIDEwMCUpO1xuICBjb2xvcjogd2hpdGU7XG59XG4uaGlzdG9yaWFsLWNvbnRhaW5lciAucGVkaWRvcy1saXN0IC5wZWRpZG8taXRlbSAucGVkaWRvLWNvbnRlbnQgLnBlZGlkby1kZXRhaWxzIC5wZWRpZG8tdGFibGUgdGhlYWQgdGgge1xuICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBib3JkZXI6IG5vbmU7XG59XG4uaGlzdG9yaWFsLWNvbnRhaW5lciAucGVkaWRvcy1saXN0IC5wZWRpZG8taXRlbSAucGVkaWRvLWNvbnRlbnQgLnBlZGlkby1kZXRhaWxzIC5wZWRpZG8tdGFibGUgdGJvZHkgdHIge1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcbn1cbi5oaXN0b3JpYWwtY29udGFpbmVyIC5wZWRpZG9zLWxpc3QgLnBlZGlkby1pdGVtIC5wZWRpZG8tY29udGVudCAucGVkaWRvLWRldGFpbHMgLnBlZGlkby10YWJsZSB0Ym9keSB0cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xufVxuLmhpc3RvcmlhbC1jb250YWluZXIgLnBlZGlkb3MtbGlzdCAucGVkaWRvLWl0ZW0gLnBlZGlkby1jb250ZW50IC5wZWRpZG8tZGV0YWlscyAucGVkaWRvLXRhYmxlIHRib2R5IHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZjJmZDtcbn1cbi5oaXN0b3JpYWwtY29udGFpbmVyIC5wZWRpZG9zLWxpc3QgLnBlZGlkby1pdGVtIC5wZWRpZG8tY29udGVudCAucGVkaWRvLWRldGFpbHMgLnBlZGlkby10YWJsZSB0Ym9keSB0ciB0ZCB7XG4gIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgY29sb3I6ICM0OTUwNTc7XG59XG4uaGlzdG9yaWFsLWNvbnRhaW5lciAucGVkaWRvcy1saXN0IC5wZWRpZG8taXRlbSAucGVkaWRvLWNvbnRlbnQgLnBlZGlkby1kZXRhaWxzIC5wZWRpZG8tdGFibGUgdGJvZHkgdHIgdGQ6Zmlyc3QtY2hpbGQge1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzJjM2U1MDtcbn1cbi5oaXN0b3JpYWwtY29udGFpbmVyIC5wZWRpZG9zLWxpc3QgLnBlZGlkby1pdGVtIC5wZWRpZG8tY29udGVudCAucGVkaWRvLWRldGFpbHMgLnBlZGlkby10YWJsZSB0Zm9vdCAucHJlY2lvLXRvdGFsLXJvdyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM3NGI5ZmYgMCUsICMwOTg0ZTMgMTAwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5oaXN0b3JpYWwtY29udGFpbmVyIC5wZWRpZG9zLWxpc3QgLnBlZGlkby1pdGVtIC5wZWRpZG8tY29udGVudCAucGVkaWRvLWRldGFpbHMgLnBlZGlkby10YWJsZSB0Zm9vdCAucHJlY2lvLXRvdGFsLXJvdyB0ZCB7XG4gIHBhZGRpbmc6IDE4cHggMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cbi5oaXN0b3JpYWwtY29udGFpbmVyIC5wZWRpZG9zLWxpc3QgLnBlZGlkby1pdGVtIC5wZWRpZG8tY29udGVudCAucGVkaWRvLWRldGFpbHMgLnBlZGlkby10YWJsZSB0Zm9vdCAucHJlY2lvLXRvdGFsLXJvdyB0ZCBzdHJvbmcge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmhpc3RvcmlhbC1jb250YWluZXIgLnBlZGlkb3MtbGlzdCAucGVkaWRvLWl0ZW0gLnBlZGlkby1jb250ZW50IC5wZWRpZG8tZGV0YWlscyAucGVkaWRvLXRhYmxlIHRmb290IC5wcmVjaW8tdG90YWwtcm93IHRkOmxhc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaGlzdG9yaWFsLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuICAuaGlzdG9yaWFsLWNvbnRhaW5lciAucGVkaWRvcy1saXN0IC5wZWRpZG8taXRlbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICAuaGlzdG9yaWFsLWNvbnRhaW5lciAucGVkaWRvcy1saXN0IC5wZWRpZG8taXRlbSAucGVkaWRvLWNvbnRlbnQgLnBlZGlkby1kZXRhaWxzIC5wZWRpZG8tdGFibGUge1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgfVxuICAuaGlzdG9yaWFsLWNvbnRhaW5lciAucGVkaWRvcy1saXN0IC5wZWRpZG8taXRlbSAucGVkaWRvLWNvbnRlbnQgLnBlZGlkby1kZXRhaWxzIC5wZWRpZG8tdGFibGUgdGhlYWQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmhpc3RvcmlhbC1jb250YWluZXIgLnBlZGlkb3MtbGlzdCAucGVkaWRvLWl0ZW0gLnBlZGlkby1jb250ZW50IC5wZWRpZG8tZGV0YWlscyAucGVkaWRvLXRhYmxlIHRib2R5IHRyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgfVxuICAuaGlzdG9yaWFsLWNvbnRhaW5lciAucGVkaWRvcy1saXN0IC5wZWRpZG8taXRlbSAucGVkaWRvLWNvbnRlbnQgLnBlZGlkby1kZXRhaWxzIC5wZWRpZG8tdGFibGUgdGJvZHkgdHI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmhpc3RvcmlhbC1jb250YWluZXIgLnBlZGlkb3MtbGlzdCAucGVkaWRvLWl0ZW0gLnBlZGlkby1jb250ZW50IC5wZWRpZG8tZGV0YWlscyAucGVkaWRvLXRhYmxlIHRib2R5IHRyIHRkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYzZjQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5oaXN0b3JpYWwtY29udGFpbmVyIC5wZWRpZG9zLWxpc3QgLnBlZGlkby1pdGVtIC5wZWRpZG8tY29udGVudCAucGVkaWRvLWRldGFpbHMgLnBlZGlkby10YWJsZSB0Ym9keSB0ciB0ZDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCkgXCI6IFwiO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICM0OTUwNTc7XG4gIH1cbiAgLmhpc3RvcmlhbC1jb250YWluZXIgLnBlZGlkb3MtbGlzdCAucGVkaWRvLWl0ZW0gLnBlZGlkby1jb250ZW50IC5wZWRpZG8tZGV0YWlscyAucGVkaWRvLXRhYmxlIHRib2R5IHRyIHRkOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7XG4gIH1cbiAgLmhpc3RvcmlhbC1jb250YWluZXIgLnBlZGlkb3MtbGlzdCAucGVkaWRvLWl0ZW0gLnBlZGlkby1jb250ZW50IC5wZWRpZG8tZGV0YWlscyAucGVkaWRvLXRhYmxlIHRib2R5IHRyIHRkOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbiAgLmhpc3RvcmlhbC1jb250YWluZXIgLnBlZGlkb3MtbGlzdCAucGVkaWRvLWl0ZW0gLnBlZGlkby1jb250ZW50IC5wZWRpZG8tZGV0YWlscyAucGVkaWRvLXRhYmxlIHRmb290IC5wcmVjaW8tdG90YWwtcm93IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNzRiOWZmIDAlLCAjMDk4NGUzIDEwMCUpO1xuICB9XG4gIC5oaXN0b3JpYWwtY29udGFpbmVyIC5wZWRpZG9zLWxpc3QgLnBlZGlkby1pdGVtIC5wZWRpZG8tY29udGVudCAucGVkaWRvLWRldGFpbHMgLnBlZGlkby10YWJsZSB0Zm9vdCAucHJlY2lvLXRvdGFsLXJvdyB0ZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5oaXN0b3JpYWwtY29udGFpbmVyIC5wZWRpZG9zLWxpc3QgLnBlZGlkby1pdGVtIC5wZWRpZG8tY29udGVudCAucGVkaWRvLWRldGFpbHMgLnBlZGlkby10YWJsZSB0Zm9vdCAucHJlY2lvLXRvdGFsLXJvdyB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuaGlzdG9yaWFsLWNvbnRhaW5lciAucGVkaWRvcy1saXN0IC5wZWRpZG8taXRlbSAucGVkaWRvLWNvbnRlbnQgLnBlZGlkby1kZXRhaWxzIC5wZWRpZG8tdGFibGUgdGZvb3QgLnByZWNpby10b3RhbC1yb3cgdGQ6bGFzdC1jaGlsZCB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxufSIsIi8qIGhpc3RvcmlhbC1wZWRpZG9zLmNvbXBvbmVudC5zY3NzIC0gRElTRcODwpFPIE1PREVSTk8gWSBSRVNQT05TSVZFICovXG5cbiRwcmltYXJ5LWNvbG9yOiAjN2Y4YzhkO1xuJHByaW1hcnktZGFyazogIzM0NDk1ZTtcbiRzZWNvbmRhcnktZGFyazogIzJjM2U1MDtcbiR0ZXh0LWRhcms6ICMyYzNlNTA7XG4kdGV4dC1saWdodDogIzY2NjtcbiR0ZXh0LWxpZ2h0ZXI6ICM3ZjhjOGQ7XG4kYm9yZGVyLWNvbG9yOiAjZGVlMmU2O1xuJGJnLWxpZ2h0OiAjZjhmOWZhO1xuJGJnLWxpZ2h0ZXI6ICNmYWZiZmM7XG4kc2hhZG93LXNtOiAwIDJweCA0cHggcmdiYSgwLDAsMCwwLjEpO1xuJHNoYWRvdy1tZDogMCA0cHggMTVweCByZ2JhKDAsMCwwLDAuMSk7XG4kc2hhZG93LWxnOiAwIDhweCAyNXB4IHJnYmEoMCwwLDAsMC4xNSk7XG4kc2hhZG93LXhsOiAwIDZweCAyMHB4IHJnYmEoNTIsIDE1MiwgMjE5LCAwLjQpO1xuXG4uaGlzdG9yaWFsLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogOTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LWZhbWlseTogJ0FyaWFsJywgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWxpZ2h0O1xuICBtaW4taGVpZ2h0OiA0MDBweDtcblxuICAuaGlzdG9yaWFsLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICBjb2xvcjogJHRleHQtZGFyaztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICB0ZXh0LXNoYWRvdzogJHNoYWRvdy1zbTtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB9XG4gIH1cblxuICAubm8tcGVkaWRvcyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDYwcHggMjBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJveC1zaGFkb3c6ICRzaGFkb3ctbWQ7XG5cbiAgICAubm8tcGVkaWRvcy1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICBvcGFjaXR5OiAwLjc7XG4gICAgfVxuICAgIGgzIHtcbiAgICAgIGNvbG9yOiAkdGV4dC1kYXJrO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gICAgcCB7XG4gICAgICBjb2xvcjogJHRleHQtbGlnaHRlcjtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICB9XG5cbiAgLnBlZGlkb3MtbGlzdCB7XG4gICAgLnBlZGlkby1pdGVtIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGJveC1zaGFkb3c6ICRzaGFkb3ctbWQ7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICBhbmltYXRpb246IGZhZGVJbiAwLjVzIGVhc2Utb3V0O1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogJHNoYWRvdy1sZztcbiAgICAgIH1cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG4gICAgICAucGVkaWRvLWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMjBweCAyNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkcHJpbWFyeS1jb2xvciAwJSwgJHByaW1hcnktZGFyayAxMDAlKTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNmM3YjdkIDAlLCAkc2Vjb25kYXJ5LWRhcmsgMTAwJSk7XG4gICAgICAgIH1cbiAgICAgICAgLnBlZGlkby1pbmZvIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAucGVkaWRvLXJlZiB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBlZGlkby1mZWNoYSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjk7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAucGVkaWRvLXRvdGFsIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICAgIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAxNXB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICAgICAgICBtYXJnaW46IDAgMTVweDtcbiAgICAgICAgfVxuICAgICAgICAuZXhwYW5kLWljb24ge1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgICAgJi5leHBhbmRlZCBzcGFuIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGdhcDogMTVweDtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIC5wZWRpZG8taW5mbyB7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IHdpZHRoOiAxMDAlOyB9XG4gICAgICAgICAgLnBlZGlkby10b3RhbCB7IG1hcmdpbjogMDt9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5wZWRpZG8tY29udGVudCB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC40cyBlYXNlLW91dCwgcGFkZGluZyAwLjRzIGVhc2Utb3V0O1xuICAgICAgICBiYWNrZ3JvdW5kOiAkYmctbGlnaHRlcjtcbiAgICAgICAgJi5leHBhbmRlZCB7XG4gICAgICAgICAgbWF4LWhlaWdodDogMTUwMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLnBlZGlkby1kZXRhaWxzIHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIC5wZWRpZG8tYWN0aW9ucyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIGdhcDogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4IDVweCAyMHB4O1xuICAgICAgICAgICAgLmFjdGlvbi1idG4ge1xuICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMTRweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBnYXA6IDZweDtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJi5wZGYtYnRuIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMzQ5OGRiIDAlLCAjMjk4MGI5IDEwMCUpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyOTgwYjkgMCUsICMyMTYxOGMgMTAwJSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wZGYtaWNvbiB7IGZvbnQtc2l6ZTogMWVtOyB9XG4gICAgICAgICAgICAgICAgLnBkZi10ZXh0IHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wZWRpZG8tdGFibGUge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICB0aGVhZCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICRwcmltYXJ5LWRhcmsgMCUsICRzZWNvbmRhcnktZGFyayAxMDAlKTtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTZweCAyMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcbiAgICAgICAgICAgICAgICAmOm50aC1jaGlsZChldmVuKSB7IGJhY2tncm91bmQtY29sb3I6ICRiZy1saWdodDsgfVxuICAgICAgICAgICAgICAgICY6aG92ZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNmMmZkOyB9XG4gICAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTZweCAyMHB4O1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzQ5NTA1NztcbiAgICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQgeyBmb250LXdlaWdodDogNTAwOyBjb2xvcjogJHRleHQtZGFyazsgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGZvb3Qge1xuICAgICAgICAgICAgICAucHJlY2lvLXRvdGFsLXJvdyB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzc0YjlmZiAwJSwgIzA5ODRlMyAxMDAlKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMThweCAyMHB4O1xuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgICAgICAgICBzdHJvbmcgeyBmb250LXdlaWdodDogNzAwO31cbiAgICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7IHRleHQtYWxpZ246IHJpZ2h0OyBmb250LXNpemU6IDEuM3JlbTt9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO31cbiAgICB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTt9XG4gIH1cbiAgQGtleWZyYW1lcyBzcGluIHsgMCV7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO30gMTAwJXsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTt9IH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICAucGVkaWRvcy1saXN0IC5wZWRpZG8taXRlbSB7IG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAucGVkaWRvLWNvbnRlbnQgLnBlZGlkby1kZXRhaWxzIC5wZWRpZG8tdGFibGUge1xuICAgICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICAgIHRoZWFkIHsgZGlzcGxheTogbm9uZTt9XG4gICAgICAgIHRib2R5IHsgdHIgeyBkaXNwbGF5OiBibG9jazsgbWFyZ2luLWJvdHRvbTogMTVweDsgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjsgYm9yZGVyLXJhZGl1czogOHB4OyBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50OyBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICAgICAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7fVxuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jazsgdGV4dC1hbGlnbjogcmlnaHQ7IHBhZGRpbmc6IDEycHggMTVweDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYzZjQ7IHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgJjpiZWZvcmUgeyBjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpIFwiOiBcIjsgZmxvYXQ6IGxlZnQ7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjNDk1MDU3O31cbiAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHsgYm9yZGVyLWJvdHRvbTogbm9uZTsgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7fVxuICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHsgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7IGJhY2tncm91bmQ6ICRiZy1saWdodDsgZm9udC13ZWlnaHQ6IDYwMDt9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRmb290IHsgLnByZWNpby10b3RhbC1yb3cgeyBkaXNwbGF5OiBibG9jazsgbWFyZ2luLXRvcDogMTVweDsgYm9yZGVyLXJhZGl1czogOHB4OyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNzRiOWZmIDAlLCAjMDk4NGUzIDEwMCUpO1xuICAgICAgICAgIHRkIHsgZGlzcGxheTogYmxvY2s7IHRleHQtYWxpZ246IGNlbnRlcjsgJjpmaXJzdC1jaGlsZCB7IGRpc3BsYXk6IG5vbmU7fSAmOmxhc3QtY2hpbGQgeyBwYWRkaW5nOiAxNXB4OyBmb250LXNpemU6IDEuMnJlbTt9XG4gICAgICAgICAgfX1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 2865:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/product.service */ 6241);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _product_product_popup_product_popup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product/product-popup/product-popup.component */ 893);




function HomeComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Cargando productos...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function HomeComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No se encontraron productos disponibles.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function HomeComponent_div_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_div_4_div_2_Template_div_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const product_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.openProductPopup(product_r4, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("error", function HomeComponent_div_4_div_2_Template_img_error_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.productService.handleImageError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r3.productService.getProductImageSrc(product_r4), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", product_r4.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r4.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.formatPrice(product_r4.precio));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r4.descripcion);
  }
}
function HomeComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_div_4_div_1_Template, 3, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HomeComponent_div_4_div_2_Template, 8, 5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.randomProducts.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.randomProducts);
  }
}
class HomeComponent {
  // Constructor del componente donde inyectamos las dependencias
  constructor(productService) {
    this.productService = productService;
    // Array para almacenar todos los productos
    this.products = [];
    // Array para almacenar los productos aleatorios que se mostrarán
    this.randomProducts = [];
    // Indicador de carga
    this.loading = false;
  }
  // Método de ciclo de vida que se ejecuta cuando Angular ha terminado de inicializar el componente
  ngOnInit() {
    // Cargamos la lista de productos
    this.loadProducts();
  }
  // Método para cargar productos desde el servicio y seleccionar aleatorios
  loadProducts() {
    this.loading = true;
    console.log('HomeComponent: Cargando productos...');
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        console.log('HomeComponent: Productos cargados:', products);
        // Seleccionar productos aleatorios
        this.selectRandomProducts();
        this.loading = false;
      },
      error: error => {
        console.error('HomeComponent: Error loading products', error);
        this.loading = false;
      }
    });
  }
  // Método para seleccionar productos aleatorios
  selectRandomProducts() {
    // Crear una copia del array original para no modificarlo
    const productsCopy = [...this.products];
    this.randomProducts = [];
    // Determinar cuántos productos seleccionar (8 o menos si no hay suficientes)
    const numToSelect = Math.min(8, productsCopy.length);
    // Seleccionar productos aleatorios
    for (let i = 0; i < numToSelect; i++) {
      // Generar un índice aleatorio
      const randomIndex = Math.floor(Math.random() * productsCopy.length);
      // Añadir el producto al array de aleatorios
      this.randomProducts.push(productsCopy[randomIndex]);
      // Eliminar el producto seleccionado para no repetirlo
      productsCopy.splice(randomIndex, 1);
    }
    console.log('HomeComponent: Productos aleatorios seleccionados:', this.randomProducts);
  }
  // Método para abrir el popup del producto - CLAVE PARA SOLUCIONAR EL PROBLEMA
  openProductPopup(product, event) {
    // Prevenir la navegación por defecto que causaría el router-link
    event.preventDefault();
    event.stopPropagation();
    console.log('HomeComponent: Abriendo popup para producto:', product.nombre);
    // Usar el servicio para mostrar el popup en lugar de navegar a la página de detalle
    this.productService.selectProductForPopup(product);
  }
  // Método para formatear el precio 
  formatPrice(price) {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR'
    }).format(price);
  }
  static {
    this.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 6,
      vars: 2,
      consts: [["class", "loading-indicator", 4, "ngIf"], [1, "category-header"], ["id", "titulo"], ["id", "articulos", 4, "ngIf"], [1, "loading-indicator"], ["id", "articulos"], ["class", "no-products", 4, "ngIf"], ["class", "articulo", 3, "click", 4, "ngFor", "ngForOf"], [1, "no-products"], [1, "articulo", 3, "click"], [3, "src", "alt", "error"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 3, 0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "novedades");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, HomeComponent_div_4_Template, 3, 2, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-product-popup");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _product_product_popup_product_popup_component__WEBPACK_IMPORTED_MODULE_1__.ProductPopupComponent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 1453:
/*!*****************************************************************!*\
  !*** ./src/app/components/login-popup/login-popup.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPopupComponent: () => (/* binding */ LoginPopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
// login-popup.component.ts - VERSIÓN CORREGIDA






function LoginPopupComponent_div_0_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20)(1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u26A0\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.errorMessage, " ");
  }
}
function LoginPopupComponent_div_0_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "INICIAR SESI\u00D3N");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginPopupComponent_div_0_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Cargando... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginPopupComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginPopupComponent_div_0_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.onOverlayClick($event));
    })("keydown", function LoginPopupComponent_div_0_Template_div_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.onKeyDown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2)(2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginPopupComponent_div_0_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.cerrarPopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6)(8, "form", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginPopupComponent_div_0_Template_form_ngSubmit_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.iniciarSesion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9)(11, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Usuario:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginPopupComponent_div_0_Template_input_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.usuario = $event);
    })("keypress", function LoginPopupComponent_div_0_Template_input_keypress_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.onKeyPress($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9)(15, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Contrase\u00F1a:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginPopupComponent_div_0_Template_input_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.contrasena = $event);
    })("keypress", function LoginPopupComponent_div_0_Template_input_keypress_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.onKeyPress($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, LoginPopupComponent_div_0_div_18_Template, 4, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, LoginPopupComponent_div_0_span_20_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, LoginPopupComponent_div_0_span_21_Template, 3, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 18)(23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u00BFNo est\u00E1s registrado? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginPopupComponent_div_0_Template_a_click_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      ctx_r14.irARegistro();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event.preventDefault());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\u00A1Reg\u00EDstrate!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r0.isVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.usuario)("disabled", ctx_r0.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.contrasena)("disabled", ctx_r0.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.isLoading || !ctx_r0.usuario || !ctx_r0.contrasena);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isLoading);
  }
}
class LoginPopupComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.isVisible = false;
    this.returnUrl = '/'; // ✅ AGREGADO: Input faltante
    this.fromCheckout = false; // ✅ AGREGADO: Input faltante
    this.closePopup = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.loginSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(); // ✅ CORREGIDO: Cambiar a <any> para pasar el usuario
    this.switchToRegistro = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.usuario = '';
    this.contrasena = '';
    this.isLoading = false;
    this.errorMessage = '';
  }
  ngOnInit() {
    // Escuchar cambios en isVisible para manejar scroll del body
    this.handleBodyScroll();
  }
  ngOnChanges() {
    // Manejar scroll del body cuando cambia la visibilidad
    this.handleBodyScroll();
  }
  ngOnDestroy() {
    // Restaurar scroll al destruir el componente
    document.body.style.overflow = 'auto';
  }
  // Manejar el scroll del body
  handleBodyScroll() {
    if (this.isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
  // Método para cerrar el popup
  cerrarPopup() {
    this.closePopup.emit();
    this.resetForm();
    document.body.style.overflow = 'auto'; // Restaurar scroll
  }
  // Método para cerrar el popup al hacer click en el overlay
  onOverlayClick(event) {
    if (event.target === event.currentTarget) {
      this.cerrarPopup();
    }
  }
  // Método para iniciar sesión
  iniciarSesion() {
    if (!this.usuario || !this.contrasena) {
      this.errorMessage = 'Por favor, completa todos los campos';
      return;
    }
    this.isLoading = true;
    this.errorMessage = '';
    this.authService.login(this.usuario, this.contrasena).subscribe({
      next: response => {
        this.isLoading = false;
        console.log('✅ Login exitoso en popup:', response);
        // ✅ IMPORTANTE: Emitir el usuario completo, no solo void
        this.loginSuccess.emit(response);
        this.cerrarPopup();
      },
      error: error => {
        this.isLoading = false;
        this.errorMessage = error.message || 'Usuario o contraseña incorrectos';
        console.error('❌ Error en login:', error);
      }
    });
  }
  // Método para navegar al registro
  irARegistro() {
    this.switchToRegistro.emit();
    this.resetForm();
  }
  // Método para resetear el formulario
  resetForm() {
    this.usuario = '';
    this.contrasena = '';
    this.errorMessage = '';
    this.isLoading = false;
  }
  // Método para manejar Enter en los campos
  onKeyPress(event) {
    if (event.key === 'Enter') {
      this.iniciarSesion();
    }
  }
  // Método para manejar la tecla Escape
  onKeyDown(event) {
    if (event.key === 'Escape') {
      this.cerrarPopup();
    }
  }
  static {
    this.ɵfac = function LoginPopupComponent_Factory(t) {
      return new (t || LoginPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoginPopupComponent,
      selectors: [["app-login-popup"]],
      inputs: {
        isVisible: "isVisible",
        returnUrl: "returnUrl",
        fromCheckout: "fromCheckout"
      },
      outputs: {
        closePopup: "closePopup",
        loginSuccess: "loginSuccess",
        switchToRegistro: "switchToRegistro"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "login-popup-overlay", "tabindex", "0", 3, "active", "click", "keydown", 4, "ngIf"], ["tabindex", "0", 1, "login-popup-overlay", 3, "click", "keydown"], [1, "login-popup-container"], ["type", "button", 1, "close-popup-btn", 3, "click"], [1, "login-popup-header"], [1, "login-title", 2, "font-family", "'Montserrat', Arial, sans-serif !important", "font-style", "normal !important", "font-weight", "600 !important"], [1, "login-popup-content"], [3, "ngSubmit"], ["loginForm", "ngForm"], [1, "form-group"], ["for", "usuario"], ["type", "text", "id", "usuario", "name", "usuario", "placeholder", "Introduce tu usuario", "required", "", "autocomplete", "username", 3, "ngModel", "disabled", "ngModelChange", "keypress"], ["for", "contrasena"], ["type", "password", "id", "contrasena", "name", "contrasena", "placeholder", "Introduce tu contrase\u00F1a", "required", "", "autocomplete", "current-password", 3, "ngModel", "disabled", "ngModelChange", "keypress"], ["class", "error-message", 4, "ngIf"], ["type", "submit", 1, "login-btn", 3, "disabled"], [4, "ngIf"], ["class", "loading-text", 4, "ngIf"], [1, "register-link"], ["href", "#", 3, "click"], [1, "error-message"], [1, "error-icon"], [1, "loading-text"], [1, "spinner"]],
      template: function LoginPopupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoginPopupComponent_div_0_Template, 27, 10, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isVisible);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
      styles: ["@charset \"UTF-8\";\n/* login-popup.component.scss - COLORES GRISES CORPORATIVOS UNIFICADOS */\n/* Variables con colores grises corporativos */\n/* CR\u00CDTICO: Overlay del popup con z-index muy alto */\n.login-popup-overlay {\n  position: fixed !important;\n  top: 0 !important;\n  left: 0 !important;\n  width: 100vw !important;\n  height: 100vh !important;\n  background-color: rgba(0, 0, 0, 0.6) !important;\n  z-index: 99999 !important;\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center !important;\n  backdrop-filter: blur(3px) !important;\n  animation: fadeIn 0.3s ease-out !important;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    backdrop-filter: blur(0px);\n  }\n  to {\n    opacity: 1;\n    backdrop-filter: blur(3px);\n  }\n}\n/* Contenedor principal del popup */\n.login-popup-container {\n  background-color: white !important;\n  border-radius: 12px !important;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4) !important;\n  width: 90% !important;\n  max-width: 420px !important;\n  max-height: 90vh !important;\n  overflow: hidden !important;\n  position: relative !important;\n  animation: slideInUp 0.4s ease-out !important;\n}\n\n@keyframes slideInUp {\n  from {\n    transform: translateY(50px) scale(0.95);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n  }\n}\n/* Bot\u00F3n de cerrar */\n.close-popup-btn {\n  position: absolute !important;\n  top: 15px !important;\n  right: 15px !important;\n  background: rgba(255, 255, 255, 0.9) !important;\n  border: none !important;\n  font-size: 24px !important;\n  color: #666 !important;\n  cursor: pointer !important;\n  z-index: 100001 !important;\n  width: 35px !important;\n  height: 35px !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  border-radius: 50% !important;\n  transition: all 0.2s ease !important;\n  font-weight: bold !important;\n  line-height: 1 !important;\n}\n.close-popup-btn:hover {\n  background-color: rgb(255, 255, 255) !important;\n  color: #333 !important;\n  transform: scale(1.1) !important;\n}\n.close-popup-btn:active {\n  transform: scale(0.95) !important;\n}\n\n/* Encabezado del popup - GRIS CORPORATIVO */\n.login-popup-header {\n  background-color: #52667a !important;\n  color: white !important;\n  padding: 15px 30px !important;\n  text-align: center !important;\n  position: relative !important;\n}\n.login-popup-header .login-title {\n  margin: 0 !important;\n  font-family: \"Montserrat\", Arial, sans-serif !important;\n  font-size: 2.2em !important;\n  font-weight: 600 !important;\n  font-style: normal !important;\n  text-transform: uppercase !important;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2) !important;\n  color: white !important;\n  letter-spacing: 1px !important;\n}\n.login-popup-header::after {\n  content: \"\" !important;\n  position: absolute !important;\n  bottom: 0 !important;\n  left: 50% !important;\n  transform: translateX(-50%) !important;\n  width: 60px !important;\n  height: 3px !important;\n  background: rgba(255, 255, 255, 0.3) !important;\n  border-radius: 2px !important;\n}\n\n/* Contenido del popup */\n.login-popup-content {\n  padding: 25px 30px 30px !important;\n  background: white !important;\n}\n.login-popup-content form {\n  display: flex !important;\n  flex-direction: column !important;\n  gap: 24px !important;\n}\n\n/* Grupos de formulario */\n.form-group {\n  display: flex !important;\n  flex-direction: column !important;\n  gap: 8px !important;\n}\n.form-group label {\n  font-weight: 600 !important;\n  color: #333 !important;\n  font-size: 0.9em !important;\n  text-transform: uppercase !important;\n  letter-spacing: 0.5px !important;\n  margin-bottom: 5px !important;\n}\n.form-group input {\n  padding: 14px 16px !important;\n  border: 2px solid #e0e0e0 !important;\n  border-radius: 8px !important;\n  font-size: 1em !important;\n  font-family: \"Montserrat\", sans-serif !important;\n  transition: all 0.2s ease !important;\n  background-color: #fafafa !important;\n}\n.form-group input:focus {\n  outline: none !important;\n  border-color: #52667a !important;\n  background-color: white !important;\n  box-shadow: 0 0 0 3px rgba(82, 102, 122, 0.1) !important;\n}\n.form-group input:disabled {\n  background-color: #f5f5f5 !important;\n  cursor: not-allowed !important;\n  opacity: 0.7 !important;\n}\n.form-group input::placeholder {\n  color: #999 !important;\n  font-style: italic !important;\n}\n\n/* Mensaje de error */\n.error-message {\n  background: linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%) !important;\n  color: #dc3545 !important;\n  padding: 12px 16px !important;\n  border-radius: 8px !important;\n  font-size: 0.9em !important;\n  border-left: 4px solid #dc3545 !important;\n  margin: 10px 0 !important;\n  display: flex !important;\n  align-items: center !important;\n  gap: 8px !important;\n  animation: slideInError 0.3s ease !important;\n}\n.error-message .error-icon {\n  font-size: 1.1em !important;\n}\n\n@keyframes slideInError {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/* Bot\u00F3n de login - GRIS CORPORATIVO */\n.login-btn {\n  background-color: #52667a !important;\n  color: white !important;\n  border: none !important;\n  padding: 16px 25px !important;\n  border-radius: 8px !important;\n  font-weight: bold !important;\n  font-size: 1em !important;\n  text-transform: uppercase !important;\n  letter-spacing: 1px !important;\n  cursor: pointer !important;\n  transition: all 0.2s ease !important;\n  margin-top: 10px !important;\n  position: relative !important;\n  overflow: hidden !important;\n  box-shadow: 0 4px 12px rgba(82, 102, 122, 0.3) !important;\n}\n.login-btn:hover:not(:disabled) {\n  background-color: #3d4d5c !important;\n  transform: translateY(-2px) !important;\n  box-shadow: 0 6px 16px rgba(82, 102, 122, 0.4) !important;\n}\n.login-btn:active:not(:disabled) {\n  transform: translateY(0) !important;\n}\n.login-btn:disabled {\n  background: #ccc !important;\n  cursor: not-allowed !important;\n  transform: none !important;\n  box-shadow: none !important;\n}\n.login-btn .loading-text {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  gap: 8px !important;\n}\n\n/* Spinner de carga */\n.spinner {\n  width: 16px !important;\n  height: 16px !important;\n  border: 2px solid rgba(255, 255, 255, 0.3) !important;\n  border-top: 2px solid white !important;\n  border-radius: 50% !important;\n  animation: spin 1s linear infinite !important;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/* Enlace de registro - GRIS CORPORATIVO */\n.register-link {\n  text-align: center !important;\n  margin-top: 25px !important;\n  padding-top: 20px !important;\n  border-top: 1px solid #eee !important;\n}\n.register-link p {\n  margin: 0 !important;\n  color: #666 !important;\n  font-size: 0.95em !important;\n}\n.register-link a {\n  color: #52667a !important;\n  text-decoration: none !important;\n  font-weight: bold !important;\n  transition: all 0.2s ease !important;\n}\n.register-link a:hover {\n  color: #3d4d5c !important;\n  text-decoration: underline !important;\n}\n\n/* Responsive */\n@media screen and (max-width: 768px) {\n  .login-popup-container {\n    width: 95% !important;\n    margin: 15px !important;\n  }\n  .login-popup-content {\n    padding: 20px 20px 20px !important;\n  }\n  .login-popup-header {\n    padding: 12px 25px !important;\n  }\n  .login-popup-header .login-title {\n    font-size: 1.6em !important;\n  }\n  .form-group input {\n    padding: 12px 14px !important;\n  }\n  .login-btn {\n    padding: 14px 20px !important;\n  }\n}\n@media screen and (max-width: 480px) {\n  .login-popup-overlay {\n    align-items: flex-start !important;\n    padding-top: 60px !important;\n  }\n  .login-popup-container {\n    width: 100% !important;\n    margin: 0 10px !important;\n    max-height: calc(100vh - 120px) !important;\n  }\n  .login-popup-header {\n    padding: 10px 20px !important;\n  }\n  .login-popup-header .login-title {\n    font-size: 1.4em !important;\n  }\n  .login-popup-content {\n    padding: 18px 18px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uLy4uL2FuZ3VsYXIlMjAxOS80MCUyMHRhdG9vZGVuZGElMjBhcnN5cy9mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvbG9naW4tcG9wdXAvbG9naW4tcG9wdXAuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2NvbXBvbmVudHMvbG9naW4tcG9wdXAvbG9naW4tcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLHdFQUFBO0FBRUEsOENBQUE7QUFTQSxvREFBQTtBQUNBO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLCtDQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtDQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQ0FBQTtFQUNBLDBDQUFBO0FEUEY7O0FDVUE7RUFDRTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFRFBGO0VDU0E7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RURQRjtBQUNGO0FDVUEsbUNBQUE7QUFDQTtFQUNFLGtDQUFBO0VBQ0EsOEJBQUE7RUFDQSxxREFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2Q0FBQTtBRFJGOztBQ1dBO0VBQ0U7SUFDRSx1Q0FBQTtJQUNBLFVBQUE7RURSRjtFQ1VBO0lBQ0UsaUNBQUE7SUFDQSxVQUFBO0VEUkY7QUFDRjtBQ1dBLG9CQUFBO0FBQ0E7RUFDRSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7QURURjtBQ1dFO0VBQ0UsK0NBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0FEVEo7QUNZRTtFQUNFLGlDQUFBO0FEVko7O0FDY0EsNENBQUE7QUFDQTtFQUNFLG9DQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7QURYRjtBQ2FFO0VBQ0Usb0JBQUE7RUFDQSx1REFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0Esb0RBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0FEWEo7QUNjRTtFQUNFLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0NBQUE7RUFDQSw2QkFBQTtBRFpKOztBQ2dCQSx3QkFBQTtBQUNBO0VBQ0Usa0NBQUE7RUFDQSw0QkFBQTtBRGJGO0FDZUU7RUFDRSx3QkFBQTtFQUNBLGlDQUFBO0VBQ0Esb0JBQUE7QURiSjs7QUNpQkEseUJBQUE7QUFDQTtFQUNFLHdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtBRGRGO0FDZ0JFO0VBQ0UsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FEZEo7QUNpQkU7RUFDRSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGdEQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtBRGZKO0FDaUJJO0VBQ0Usd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esd0RBQUE7QURmTjtBQ2tCSTtFQUNFLG9DQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBRGhCTjtBQ21CSTtFQUNFLHNCQUFBO0VBQ0EsNkJBQUE7QURqQk47O0FDc0JBLHFCQUFBO0FBQ0E7RUFDRSx3RUFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EseUNBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0FEbkJGO0FDcUJFO0VBQ0UsMkJBQUE7QURuQko7O0FDdUJBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsNEJBQUE7RURwQkY7RUNzQkE7SUFDRSxVQUFBO0lBQ0Esd0JBQUE7RURwQkY7QUFDRjtBQ3VCQSxzQ0FBQTtBQUNBO0VBQ0Usb0NBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHlEQUFBO0FEckJGO0FDdUJFO0VBQ0Usb0NBQUE7RUFDQSxzQ0FBQTtFQUNBLHlEQUFBO0FEckJKO0FDd0JFO0VBQ0UsbUNBQUE7QUR0Qko7QUN5QkU7RUFDRSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBRHZCSjtBQzBCRTtFQUNFLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0FEeEJKOztBQzRCQSxxQkFBQTtBQUNBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFEQUFBO0VBQ0Esc0NBQUE7RUFDQSw2QkFBQTtFQUNBLDZDQUFBO0FEekJGOztBQzRCQTtFQUNFO0lBQUssdUJBQUE7RUR4Qkw7RUN5QkE7SUFBTyx5QkFBQTtFRHRCUDtBQUNGO0FDd0JBLDBDQUFBO0FBQ0E7RUFDRSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQ0FBQTtBRHRCRjtBQ3dCRTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBRHRCSjtBQ3lCRTtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0FEdkJKO0FDeUJJO0VBQ0UseUJBQUE7RUFDQSxxQ0FBQTtBRHZCTjs7QUM0QkEsZUFBQTtBQUNBO0VBQ0U7SUFDRSxxQkFBQTtJQUNBLHVCQUFBO0VEekJGO0VDNEJBO0lBQ0Usa0NBQUE7RUQxQkY7RUM2QkE7SUFDRSw2QkFBQTtFRDNCRjtFQzZCRTtJQUNFLDJCQUFBO0VEM0JKO0VDK0JBO0lBQ0UsNkJBQUE7RUQ3QkY7RUNnQ0E7SUFDRSw2QkFBQTtFRDlCRjtBQUNGO0FDaUNBO0VBQ0U7SUFDRSxrQ0FBQTtJQUNBLDRCQUFBO0VEL0JGO0VDa0NBO0lBQ0Usc0JBQUE7SUFDQSx5QkFBQTtJQUNBLDBDQUFBO0VEaENGO0VDbUNBO0lBQ0UsNkJBQUE7RURqQ0Y7RUNtQ0U7SUFDRSwyQkFBQTtFRGpDSjtFQ3FDQTtJQUNFLDZCQUFBO0VEbkNGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiBsb2dpbi1wb3B1cC5jb21wb25lbnQuc2NzcyAtIENPTE9SRVMgR1JJU0VTIENPUlBPUkFUSVZPUyBVTklGSUNBRE9TICovXG4vKiBWYXJpYWJsZXMgY29uIGNvbG9yZXMgZ3Jpc2VzIGNvcnBvcmF0aXZvcyAqL1xuLyogQ1LDg8KNVElDTzogT3ZlcmxheSBkZWwgcG9wdXAgY29uIHotaW5kZXggbXV5IGFsdG8gKi9cbi5sb2dpbi1wb3B1cC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gIHRvcDogMCAhaW1wb3J0YW50O1xuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk5OSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCkgIWltcG9ydGFudDtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC4zcyBlYXNlLW91dCAhaW1wb3J0YW50O1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XG4gIH1cbn1cbi8qIENvbnRlbmVkb3IgcHJpbmNpcGFsIGRlbCBwb3B1cCAqL1xuLmxvZ2luLXBvcHVwLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEycHggIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAyMHB4IDYwcHggcmdiYSgwLCAwLCAwLCAwLjQpICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiA0MjBweCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiA5MHZoICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gIGFuaW1hdGlvbjogc2xpZGVJblVwIDAuNHMgZWFzZS1vdXQgIWltcG9ydGFudDtcbn1cblxuQGtleWZyYW1lcyBzbGlkZUluVXAge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCkgc2NhbGUoMC45NSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi8qIEJvdMODwrNuIGRlIGNlcnJhciAqL1xuLmNsb3NlLXBvcHVwLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICB0b3A6IDE1cHggIWltcG9ydGFudDtcbiAgcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICM2NjYgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDEwMDAwMSAhaW1wb3J0YW50O1xuICB3aWR0aDogMzVweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxICFpbXBvcnRhbnQ7XG59XG4uY2xvc2UtcG9wdXAtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKSAhaW1wb3J0YW50O1xufVxuLmNsb3NlLXBvcHVwLWJ0bjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpICFpbXBvcnRhbnQ7XG59XG5cbi8qIEVuY2FiZXphZG8gZGVsIHBvcHVwIC0gR1JJUyBDT1JQT1JBVElWTyAqL1xuLmxvZ2luLXBvcHVwLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjY2N2EgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDE1cHggMzBweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG59XG4ubG9naW4tcG9wdXAtaGVhZGVyIC5sb2dpbi10aXRsZSB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIEFyaWFsLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMi4yZW0gIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xuICB0ZXh0LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweCAhaW1wb3J0YW50O1xufVxuLmxvZ2luLXBvcHVwLWhlYWRlcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICBib3R0b206IDAgIWltcG9ydGFudDtcbiAgbGVmdDogNTAlICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSAhaW1wb3J0YW50O1xuICB3aWR0aDogNjBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDNweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi8qIENvbnRlbmlkbyBkZWwgcG9wdXAgKi9cbi5sb2dpbi1wb3B1cC1jb250ZW50IHtcbiAgcGFkZGluZzogMjVweCAzMHB4IDMwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbn1cbi5sb2dpbi1wb3B1cC1jb250ZW50IGZvcm0ge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgZ2FwOiAyNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi8qIEdydXBvcyBkZSBmb3JtdWxhcmlvICovXG4uZm9ybS1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICBnYXA6IDhweCAhaW1wb3J0YW50O1xufVxuLmZvcm0tZ3JvdXAgbGFiZWwge1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG59XG4uZm9ybS1ncm91cCBpbnB1dCB7XG4gIHBhZGRpbmc6IDE0cHggMTZweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTBlMGUwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDFlbSAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhICFpbXBvcnRhbnQ7XG59XG4uZm9ybS1ncm91cCBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjNTI2NjdhICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDgyLCAxMDIsIDEyMiwgMC4xKSAhaW1wb3J0YW50O1xufVxuLmZvcm0tZ3JvdXAgaW5wdXQ6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1ICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMC43ICFpbXBvcnRhbnQ7XG59XG4uZm9ybS1ncm91cCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzk5OSAhaW1wb3J0YW50O1xuICBmb250LXN0eWxlOiBpdGFsaWMgIWltcG9ydGFudDtcbn1cblxuLyogTWVuc2FqZSBkZSBlcnJvciAqL1xuLmVycm9yLW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmZlYmVlIDAlLCAjZmZjZGQyIDEwMCUpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEycHggMTZweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNkYzM1NDUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAxMHB4IDAgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGdhcDogOHB4ICFpbXBvcnRhbnQ7XG4gIGFuaW1hdGlvbjogc2xpZGVJbkVycm9yIDAuM3MgZWFzZSAhaW1wb3J0YW50O1xufVxuLmVycm9yLW1lc3NhZ2UgLmVycm9yLWljb24ge1xuICBmb250LXNpemU6IDEuMWVtICFpbXBvcnRhbnQ7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJbkVycm9yIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuLyogQm90w4PCs24gZGUgbG9naW4gLSBHUklTIENPUlBPUkFUSVZPICovXG4ubG9naW4tYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyNjY3YSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDE2cHggMjVweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxZW0gIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogMXB4ICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDgyLCAxMDIsIDEyMiwgMC4zKSAhaW1wb3J0YW50O1xufVxuLmxvZ2luLWJ0bjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDRkNWMgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDE2cHggcmdiYSg4MiwgMTAyLCAxMjIsIDAuNCkgIWltcG9ydGFudDtcbn1cbi5sb2dpbi1idG46YWN0aXZlOm5vdCg6ZGlzYWJsZWQpIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApICFpbXBvcnRhbnQ7XG59XG4ubG9naW4tYnRuOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogI2NjYyAhaW1wb3J0YW50O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG4ubG9naW4tYnRuIC5sb2FkaW5nLXRleHQge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZ2FwOiA4cHggIWltcG9ydGFudDtcbn1cblxuLyogU3Bpbm5lciBkZSBjYXJnYSAqL1xuLnNwaW5uZXIge1xuICB3aWR0aDogMTZweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE2cHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZSAhaW1wb3J0YW50O1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuLyogRW5sYWNlIGRlIHJlZ2lzdHJvIC0gR1JJUyBDT1JQT1JBVElWTyAqL1xuLnJlZ2lzdGVyLWxpbmsge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMjVweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMjBweCAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZSAhaW1wb3J0YW50O1xufVxuLnJlZ2lzdGVyLWxpbmsgcCB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzY2NiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDAuOTVlbSAhaW1wb3J0YW50O1xufVxuLnJlZ2lzdGVyLWxpbmsgYSB7XG4gIGNvbG9yOiAjNTI2NjdhICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlICFpbXBvcnRhbnQ7XG59XG4ucmVnaXN0ZXItbGluayBhOmhvdmVyIHtcbiAgY29sb3I6ICMzZDRkNWMgIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcbn1cblxuLyogUmVzcG9uc2l2ZSAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmxvZ2luLXBvcHVwLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMTVweCAhaW1wb3J0YW50O1xuICB9XG4gIC5sb2dpbi1wb3B1cC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5sb2dpbi1wb3B1cC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDEycHggMjVweCAhaW1wb3J0YW50O1xuICB9XG4gIC5sb2dpbi1wb3B1cC1oZWFkZXIgLmxvZ2luLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZvcm0tZ3JvdXAgaW5wdXQge1xuICAgIHBhZGRpbmc6IDEycHggMTRweCAhaW1wb3J0YW50O1xuICB9XG4gIC5sb2dpbi1idG4ge1xuICAgIHBhZGRpbmc6IDE0cHggMjBweCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAubG9naW4tcG9wdXAtb3ZlcmxheSB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDogNjBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5sb2dpbi1wb3B1cC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwIDEwcHggIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTIwcHgpICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmxvZ2luLXBvcHVwLWhlYWRlciB7XG4gICAgcGFkZGluZzogMTBweCAyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmxvZ2luLXBvcHVwLWhlYWRlciAubG9naW4tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS40ZW0gIWltcG9ydGFudDtcbiAgfVxuICAubG9naW4tcG9wdXAtY29udGVudCB7XG4gICAgcGFkZGluZzogMThweCAxOHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iLCIvKiBsb2dpbi1wb3B1cC5jb21wb25lbnQuc2NzcyAtIENPTE9SRVMgR1JJU0VTIENPUlBPUkFUSVZPUyBVTklGSUNBRE9TICovXG5cbi8qIFZhcmlhYmxlcyBjb24gY29sb3JlcyBncmlzZXMgY29ycG9yYXRpdm9zICovXG4kcHJpbWFyeTogIzUyNjY3YTtcbiRwcmltYXJ5LWRhcms6ICMzZDRkNWM7XG4kcHJpbWFyeS1saWdodDogI2MyY2RkNjtcbiRiYWNrZ3JvdW5kOiB3aGl0ZTtcbiRkZWZhdWx0LWZvbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiRlcnJvci1jb2xvcjogI2RjMzU0NTtcbiRzdWNjZXNzLWNvbG9yOiAjMmU3ZDMyO1xuXG4vKiBDUsODwo1USUNPOiBPdmVybGF5IGRlbCBwb3B1cCBjb24gei1pbmRleCBtdXkgYWx0byAqL1xuLmxvZ2luLXBvcHVwLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTk5ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KSAhaW1wb3J0YW50O1xuICBhbmltYXRpb246IGZhZGVJbiAwLjNzIGVhc2Utb3V0ICFpbXBvcnRhbnQ7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcbiAgfVxufVxuXG4vKiBDb250ZW5lZG9yIHByaW5jaXBhbCBkZWwgcG9wdXAgKi9cbi5sb2dpbi1wb3B1cC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgMjBweCA2MHB4IHJnYmEoMCwgMCwgMCwgMC40KSAhaW1wb3J0YW50O1xuICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogNDIwcHggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogOTB2aCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICBhbmltYXRpb246IHNsaWRlSW5VcCAwLjRzIGVhc2Utb3V0ICFpbXBvcnRhbnQ7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJblVwIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpIHNjYWxlKDAuOTUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi8qIEJvdMODwrNuIGRlIGNlcnJhciAqL1xuLmNsb3NlLXBvcHVwLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICB0b3A6IDE1cHggIWltcG9ydGFudDtcbiAgcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICM2NjYgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDEwMDAwMSAhaW1wb3J0YW50O1xuICB3aWR0aDogMzVweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxICFpbXBvcnRhbnQ7XG4gIFxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgJjphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSkgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vKiBFbmNhYmV6YWRvIGRlbCBwb3B1cCAtIEdSSVMgQ09SUE9SQVRJVk8gKi9cbi5sb2dpbi1wb3B1cC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTVweCAzMHB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgXG4gIC5sb2dpbi10aXRsZSB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgQXJpYWwsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDIuMmVtICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbiAgICB0ZXh0LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHggIWltcG9ydGFudDtcbiAgfVxuICBcbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogNTAlICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDYwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDNweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8qIENvbnRlbmlkbyBkZWwgcG9wdXAgKi9cbi5sb2dpbi1wb3B1cC1jb250ZW50IHtcbiAgcGFkZGluZzogMjVweCAzMHB4IDMwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbiAgXG4gIGZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gICAgZ2FwOiAyNHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLyogR3J1cG9zIGRlIGZvcm11bGFyaW8gKi9cbi5mb3JtLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIGdhcDogOHB4ICFpbXBvcnRhbnQ7XG4gIFxuICBsYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcbiAgfVxuICBcbiAgaW5wdXQge1xuICAgIHBhZGRpbmc6IDE0cHggMTZweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlMGUwZTAgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDFlbSAhaW1wb3J0YW50O1xuICAgIGZvbnQtZmFtaWx5OiAkZGVmYXVsdC1mb250ICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmEgIWltcG9ydGFudDtcbiAgICBcbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnkgIWltcG9ydGFudDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgkcHJpbWFyeSwgMC4xKSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBcbiAgICAmOmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjUgIWltcG9ydGFudDtcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcbiAgICAgIG9wYWNpdHk6IDAuNyAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBcbiAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogIzk5OSAhaW1wb3J0YW50O1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi8qIE1lbnNhamUgZGUgZXJyb3IgKi9cbi5lcnJvci1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmZWJlZSAwJSwgI2ZmY2RkMiAxMDAlKSAhaW1wb3J0YW50O1xuICBjb2xvcjogJGVycm9yLWNvbG9yICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEycHggMTZweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICRlcnJvci1jb2xvciAhaW1wb3J0YW50O1xuICBtYXJnaW46IDEwcHggMCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZ2FwOiA4cHggIWltcG9ydGFudDtcbiAgYW5pbWF0aW9uOiBzbGlkZUluRXJyb3IgMC4zcyBlYXNlICFpbXBvcnRhbnQ7XG4gIFxuICAuZXJyb3ItaWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjFlbSAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJbkVycm9yIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuXG4vKiBCb3TDg8KzbiBkZSBsb2dpbiAtIEdSSVMgQ09SUE9SQVRJVk8gKi9cbi5sb2dpbi1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDE2cHggMjVweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxZW0gIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogMXB4ICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKCRwcmltYXJ5LCAwLjMpICFpbXBvcnRhbnQ7XG4gIFxuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1kYXJrICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogMCA2cHggMTZweCByZ2JhKCRwcmltYXJ5LCAwLjQpICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gICY6YWN0aXZlOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgJjpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZDogI2NjYyAhaW1wb3J0YW50O1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcbiAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5sb2FkaW5nLXRleHQge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBnYXA6IDhweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8qIFNwaW5uZXIgZGUgY2FyZ2EgKi9cbi5zcGlubmVyIHtcbiAgd2lkdGg6IDE2cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wOiAycHggc29saWQgd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGUgIWltcG9ydGFudDtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG4vKiBFbmxhY2UgZGUgcmVnaXN0cm8gLSBHUklTIENPUlBPUkFUSVZPICovXG4ucmVnaXN0ZXItbGluayB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAyNXB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlICFpbXBvcnRhbnQ7XG4gIFxuICBwIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzY2NiAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMC45NWVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIGEge1xuICAgIGNvbG9yOiAkcHJpbWFyeSAhaW1wb3J0YW50O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAhaW1wb3J0YW50O1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICRwcmltYXJ5LWRhcmsgIWltcG9ydGFudDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi8qIFJlc3BvbnNpdmUgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5sb2dpbi1wb3B1cC1jb250YWluZXIge1xuICAgIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDE1cHggIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmxvZ2luLXBvcHVwLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5sb2dpbi1wb3B1cC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDEycHggMjVweCAhaW1wb3J0YW50O1xuICAgIFxuICAgIC5sb2dpbi10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDEuNmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gIFxuICAuZm9ybS1ncm91cCBpbnB1dCB7XG4gICAgcGFkZGluZzogMTJweCAxNHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5sb2dpbi1idG4ge1xuICAgIHBhZGRpbmc6IDE0cHggMjBweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5sb2dpbi1wb3B1cC1vdmVybGF5IHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiA2MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5sb2dpbi1wb3B1cC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwIDEwcHggIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTIwcHgpICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5sb2dpbi1wb3B1cC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDEwcHggMjBweCAhaW1wb3J0YW50O1xuICAgIFxuICAgIC5sb2dpbi10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDEuNGVtICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gIFxuICAubG9naW4tcG9wdXAtY29udGVudCB7XG4gICAgcGFkZGluZzogMThweCAxOHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 6125:
/*!*************************************************************!*\
  !*** ./src/app/components/orderline/orderline.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderLineComponent: () => (/* binding */ OrderLineComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 7581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/product.service */ 6241);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);





function OrderLineComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind4"](3, 1, ctx_r0.productPrice, "EUR", "symbol", "1.2-2"));
  }
}
function OrderLineComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind4"](3, 1, ctx_r1.productPrice * ctx_r1.line.cantidad, "EUR", "symbol", "1.2-2"));
  }
}
class OrderLineComponent {
  // Constructor con inyección de servicios
  constructor(productService) {
    this.productService = productService;
    // Evento para notificar al componente padre cuando se elimina la línea
    this.removeLine = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    // Evento para notificar al componente padre cuando se actualiza la cantidad
    this.updateQuantity = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    // Propiedad para la imagen del producto
    this.productImage = '';
    // Propiedad para el precio del producto
    this.productPrice = 0;
  }
  // Método para eliminar la línea
  ngOnInit() {
    // Si tenemos el id del producto, cargamos su imagen y datos
    if (this.line.idprod) {
      this.loadProductData();
    }
    // Log para depuración
    console.log('OrderLine inicializado con:', this.line);
  }
  // Método para cargar los datos del producto (imagen y precio)
  loadProductData() {
    this.productService.getProduct(this.line.idprod).subscribe({
      next: product => {
        if (product) {
          // Guardamos la imagen
          if (product.imagen) {
            this.productImage = product.imagen;
          } else {
            this.productImage = 'assets/images/products/default.jpg';
          }
          // Guardamos el precio
          if (product.precio) {
            this.productPrice = product.precio;
          }
        } else {
          // Imagen por defecto si no existe el producto
          this.productImage = 'assets/images/products/default.jpg';
        }
      },
      error: error => {
        console.error('Error loading product data', error);
        // Imagen por defecto en caso de error
        this.productImage = 'assets/images/products/default.jpg';
      }
    });
  }
  removeOrderLine() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará el producto de tu pedido',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#52667a',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.isConfirmed) {
        this.removeLine.emit(this.line);
      }
    });
  }
  // Método para incrementar la cantidad
  incrementQuantity() {
    const newQuantity = this.line.cantidad + 1;
    this.updateQuantity.emit({
      line: this.line,
      newQuantity
    });
  }
  // Método para decrementar la cantidad
  decrementQuantity() {
    if (this.line.cantidad > 1) {
      const newQuantity = this.line.cantidad - 1;
      this.updateQuantity.emit({
        line: this.line,
        newQuantity
      });
    } else {
      // Si intenta reducir a 0, preguntamos si quiere eliminar
      this.removeOrderLine();
    }
  }
  // Método para manejar cambios directos en el campo de cantidad
  onQuantityChange(event) {
    const input = event.target;
    const newQuantity = parseInt(input.value, 10);
    // Validar la cantidad
    if (isNaN(newQuantity) || newQuantity < 1) {
      // Restaurar el valor anterior
      input.value = this.line.cantidad.toString();
      return;
    }
    // Emitir el evento de actualización
    this.updateQuantity.emit({
      line: this.line,
      newQuantity
    });
  }
  static {
    this.ɵfac = function OrderLineComponent_Factory(t) {
      return new (t || OrderLineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: OrderLineComponent,
      selectors: [["app-orderline"]],
      inputs: {
        line: "line"
      },
      outputs: {
        removeLine: "removeLine",
        updateQuantity: "updateQuantity"
      },
      decls: 24,
      vars: 6,
      consts: [[1, "orderline-container"], [1, "product-info"], [1, "product-image"], ["alt", "Imagen del producto", 1, "miniatura", 3, "src"], [1, "product-details"], [1, "color-info"], [1, "color-value"], [1, "quantity-control"], [1, "quantity-btn", "minus", 3, "click"], ["type", "number", "min", "1", 1, "quantity-input", 3, "value", "change"], [1, "quantity-btn", "plus", 3, "click"], [1, "price-info"], ["class", "unit-price", 4, "ngIf"], ["class", "subtotal", 4, "ngIf"], [1, "remove-action"], [1, "remove-btn", 3, "click"], [1, "eliminar"], [1, "unit-price"], [1, "subtotal"]],
      template: function OrderLineComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Color: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7)(12, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderLineComponent_Template_button_click_12_listener() {
            return ctx.decrementQuantity();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "-");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function OrderLineComponent_Template_input_change_14_listener($event) {
            return ctx.onQuantityChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderLineComponent_Template_button_click_15_listener() {
            return ctx.incrementQuantity();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "+");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, OrderLineComponent_div_18_Template, 4, 6, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, OrderLineComponent_div_19_Template, 4, 6, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 14)(21, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderLineComponent_Template_button_click_21_listener() {
            return ctx.removeOrderLine();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.productImage || "assets/images/products/default.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.line.nombre);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.line.color);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.line.cantidad);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.productPrice);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.productPrice);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe],
      styles: [".orderline-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 15px 0;\n  border-bottom: 1px solid #eaeaea;\n  position: relative;\n}\n@media (max-width: 768px) {\n  .orderline-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n\n.product-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex: 3;\n}\n.product-info[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n.product-info[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]   img.miniatura[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  object-fit: cover;\n  border-radius: 4px;\n}\n.product-info[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 5px 0;\n  font-size: 16px;\n  font-weight: 500;\n}\n.product-info[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .color-info[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  margin: 0;\n}\n.product-info[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .color-info[_ngcontent-%COMP%]   .color-value[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.quantity-control[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex: 1;\n  justify-content: center;\n}\n.quantity-control[_ngcontent-%COMP%]   .quantity-btn[_ngcontent-%COMP%] {\n  background: #f2f2f2;\n  border: none;\n  width: 30px;\n  height: 30px;\n  border-radius: 4px;\n  font-size: 16px;\n  font-weight: bold;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.2s;\n}\n.quantity-control[_ngcontent-%COMP%]   .quantity-btn[_ngcontent-%COMP%]:hover {\n  background-color: #e0e0e0;\n}\n.quantity-control[_ngcontent-%COMP%]   .quantity-btn.minus[_ngcontent-%COMP%] {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.quantity-control[_ngcontent-%COMP%]   .quantity-btn.plus[_ngcontent-%COMP%] {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.quantity-control[_ngcontent-%COMP%]   .quantity-input[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 30px;\n  text-align: center;\n  border: 1px solid #f2f2f2;\n  margin: 0;\n  -moz-appearance: textfield;\n}\n.quantity-control[_ngcontent-%COMP%]   .quantity-input[_ngcontent-%COMP%]::-webkit-outer-spin-button, .quantity-control[_ngcontent-%COMP%]   .quantity-input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.quantity-control[_ngcontent-%COMP%]   .quantity-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #52667a;\n}\n\n.price-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  flex: 1;\n}\n.price-info[_ngcontent-%COMP%]   .unit-price[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n}\n.price-info[_ngcontent-%COMP%]   .subtotal[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: #52667a;\n}\n\n.remove-action[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.remove-action[_ngcontent-%COMP%]   .remove-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 5px;\n}\n.remove-action[_ngcontent-%COMP%]   .remove-btn[_ngcontent-%COMP%]   .eliminar[_ngcontent-%COMP%] {\n  color: #d33;\n  font-size: 20px;\n  font-weight: bold;\n}\n.remove-action[_ngcontent-%COMP%]   .remove-btn[_ngcontent-%COMP%]   .eliminar[_ngcontent-%COMP%]:hover {\n  color: #bd2020;\n}\n\n@media (max-width: 768px) {\n  .orderline-container[_ngcontent-%COMP%] {\n    padding: 15px 10px;\n  }\n  .product-info[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    width: 100%;\n  }\n  .quantity-control[_ngcontent-%COMP%], .price-info[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: space-between;\n    margin: 8px 0;\n  }\n  .remove-action[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    margin: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9vcmRlcmxpbmUvb3JkZXJsaW5lLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vYW5ndWxhciUyMDE5LzQwJTIwdGF0b29kZW5kYSUyMGFyc3lzL2Zyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9vcmRlcmxpbmUvb3JkZXJsaW5lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREdJO0VBUko7SUFTTSxzQkFBQTtJQUNBLHVCQUFBO0VDQUo7QUFDRjs7QURJRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLE9BQUE7QUNESjtBRElJO0VBQ0Usa0JBQUE7QUNGTjtBRElNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRlI7QURRTTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDTlI7QURTTTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ1BSO0FEU1E7RUFDRSxnQkFBQTtBQ1BWOztBRGNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsT0FBQTtFQUNBLHVCQUFBO0FDWEo7QURhSTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQ0FBQTtBQ1hOO0FEYU07RUFDRSx5QkFBQTtBQ1hSO0FEY007RUFDRSwwQkFBQTtFQUNBLDZCQUFBO0FDWlI7QURlTTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7QUNiUjtBRGlCSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtBQ2ZOO0FEaUJNO0VBRUUsd0JBQUE7RUFDQSxTQUFBO0FDaEJSO0FEbUJNO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0FDakJSOztBRHVCRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsT0FBQTtBQ3BCSjtBRHNCSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDcEJOO0FEdUJJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ3JCTjs7QUQwQkU7RUFDRSxpQkFBQTtBQ3ZCSjtBRHlCSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDdkJOO0FEeUJNO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ3ZCUjtBRHlCUTtFQUNFLGNBQUE7QUN2QlY7O0FEOEJFO0VBQ0U7SUFDRSxrQkFBQTtFQzNCSjtFRDhCRTtJQUNFLG1CQUFBO0lBQ0EsV0FBQTtFQzVCSjtFRCtCRTs7SUFFRSxXQUFBO0lBQ0EsOEJBQUE7SUFDQSxhQUFBO0VDN0JKO0VEZ0NFO0lBQ0Usa0JBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7RUM5Qko7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEVzdGlsb3MgcGFyYSBlbCBjb21wb25lbnRlIE9yZGVyTGluZVxuLm9yZGVybGluZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNXB4IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYWVhZWE7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIFxuICAgIC8vIFBhcmEgbcODwrN2aWxlcywgY2FtYmlhciBhIGRpc3Bvc2ljacODwrNuIHZlcnRpY2FsXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgfVxuICB9XG4gIFxuICAvLyBFc3RpbG9zIHBhcmEgbGEgaW5mb3JtYWNpw4PCs24gZGVsIHByb2R1Y3RvXG4gIC5wcm9kdWN0LWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4OiAzO1xuICAgIFxuICAgIC8vIEltYWdlbiBkZWwgcHJvZHVjdG9cbiAgICAucHJvZHVjdC1pbWFnZSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICBcbiAgICAgIGltZy5taW5pYXR1cmEge1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyBEZXRhbGxlcyBkZWwgcHJvZHVjdG9cbiAgICAucHJvZHVjdC1kZXRhaWxzIHtcbiAgICAgIGg0IHtcbiAgICAgICAgbWFyZ2luOiAwIDAgNXB4IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmNvbG9yLWluZm8ge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIFxuICAgICAgICAuY29sb3ItdmFsdWUge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC8vIENvbnRyb2wgZGUgY2FudGlkYWRcbiAgLnF1YW50aXR5LWNvbnRyb2wge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIFxuICAgIC5xdWFudGl0eS1idG4ge1xuICAgICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgJi5taW51cyB7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgJi5wbHVzIHtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLnF1YW50aXR5LWlucHV0IHtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2YyZjJmMjtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvLyBGaXJlZm94XG4gICAgICBcbiAgICAgICY6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG4gICAgICAmOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgICBcbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3JkZXItY29sb3I6ICM1MjY2N2E7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAvLyBJbmZvcm1hY2nDg8KzbiBkZSBwcmVjaW9zXG4gIC5wcmljZS1pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGZsZXg6IDE7XG4gICAgXG4gICAgLnVuaXQtcHJpY2Uge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6ICM2NjY7XG4gICAgfVxuICAgIFxuICAgIC5zdWJ0b3RhbCB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgY29sb3I6ICM1MjY2N2E7XG4gICAgfVxuICB9XG4gIFxuICAvLyBCb3TDg8KzbiBwYXJhIGVsaW1pbmFyXG4gIC5yZW1vdmUtYWN0aW9uIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBcbiAgICAucmVtb3ZlLWJ0biB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgXG4gICAgICAuZWxpbWluYXIge1xuICAgICAgICBjb2xvcjogI2QzMztcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiBkYXJrZW4oI2QzMywgMTAlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLy8gUmVzcG9uc2l2aWRhZCBwYXJhIHBhbnRhbGxhcyBwZXF1ZcODwrFhc1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAub3JkZXJsaW5lLWNvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gICAgfVxuICAgIFxuICAgIC5wcm9kdWN0LWluZm8ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBcbiAgICAucXVhbnRpdHktY29udHJvbCxcbiAgICAucHJpY2UtaW5mbyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgfVxuICAgIFxuICAgIC5yZW1vdmUtYWN0aW9uIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMTBweDtcbiAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfSIsIi5vcmRlcmxpbmUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VhZWFlYTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5vcmRlcmxpbmUtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG59XG5cbi5wcm9kdWN0LWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4OiAzO1xufVxuLnByb2R1Y3QtaW5mbyAucHJvZHVjdC1pbWFnZSB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5wcm9kdWN0LWluZm8gLnByb2R1Y3QtaW1hZ2UgaW1nLm1pbmlhdHVyYSB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4ucHJvZHVjdC1pbmZvIC5wcm9kdWN0LWRldGFpbHMgaDQge1xuICBtYXJnaW46IDAgMCA1cHggMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLnByb2R1Y3QtaW5mbyAucHJvZHVjdC1kZXRhaWxzIC5jb2xvci1pbmZvIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzY2NjtcbiAgbWFyZ2luOiAwO1xufVxuLnByb2R1Y3QtaW5mbyAucHJvZHVjdC1kZXRhaWxzIC5jb2xvci1pbmZvIC5jb2xvci12YWx1ZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5xdWFudGl0eS1jb250cm9sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleDogMTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ucXVhbnRpdHktY29udHJvbCAucXVhbnRpdHktYnRuIHtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbn1cbi5xdWFudGl0eS1jb250cm9sIC5xdWFudGl0eS1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xufVxuLnF1YW50aXR5LWNvbnRyb2wgLnF1YW50aXR5LWJ0bi5taW51cyB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbn1cbi5xdWFudGl0eS1jb250cm9sIC5xdWFudGl0eS1idG4ucGx1cyB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG4ucXVhbnRpdHktY29udHJvbCAucXVhbnRpdHktaW5wdXQge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMmYyZjI7XG4gIG1hcmdpbjogMDtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG4ucXVhbnRpdHktY29udHJvbCAucXVhbnRpdHktaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sIC5xdWFudGl0eS1jb250cm9sIC5xdWFudGl0eS1pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuLnF1YW50aXR5LWNvbnRyb2wgLnF1YW50aXR5LWlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiAjNTI2NjdhO1xufVxuXG4ucHJpY2UtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgZmxleDogMTtcbn1cbi5wcmljZS1pbmZvIC51bml0LXByaWNlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzY2Njtcbn1cbi5wcmljZS1pbmZvIC5zdWJ0b3RhbCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM1MjY2N2E7XG59XG5cbi5yZW1vdmUtYWN0aW9uIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4ucmVtb3ZlLWFjdGlvbiAucmVtb3ZlLWJ0biB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiA1cHg7XG59XG4ucmVtb3ZlLWFjdGlvbiAucmVtb3ZlLWJ0biAuZWxpbWluYXIge1xuICBjb2xvcjogI2QzMztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5yZW1vdmUtYWN0aW9uIC5yZW1vdmUtYnRuIC5lbGltaW5hcjpob3ZlciB7XG4gIGNvbG9yOiAjYmQyMDIwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm9yZGVybGluZS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgfVxuICAucHJvZHVjdC1pbmZvIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5xdWFudGl0eS1jb250cm9sLFxuICAucHJpY2UtaW5mbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbjogOHB4IDA7XG4gIH1cbiAgLnJlbW92ZS1hY3Rpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6450:
/*!*****************************************************************************!*\
  !*** ./src/app/components/password-confirm-modal/password-confirm-modal.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PasswordConfirmModalComponent: () => (/* binding */ PasswordConfirmModalComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_htdocs_angular_19_40_tatoodenda_arsys_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 4796);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);

// src/app/components/password-confirm-modal/password-confirm-modal.component.ts





function PasswordConfirmModalComponent_div_0__svg_svg_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "path", 35)(2, "circle", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PasswordConfirmModalComponent_div_0__svg_svg_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "path", 37)(2, "line", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PasswordConfirmModalComponent_div_0_p_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "circle", 15)(3, "line", 40)(4, "line", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.errorMessage, " ");
  }
}
function PasswordConfirmModalComponent_div_0_span_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Confirmar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PasswordConfirmModalComponent_div_0_span_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 42);
  }
}
function PasswordConfirmModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PasswordConfirmModalComponent_div_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.onCancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PasswordConfirmModalComponent_div_0_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 3)(3, "div", 4)(4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "svg", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "rect", 7)(7, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Confirmaci\u00F3n de Seguridad");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Por tu seguridad, confirma tu contrase\u00F1a para continuar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9)(13, "div", 10)(14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 11)(17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "circle", 15)(24, "polyline", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function PasswordConfirmModalComponent_div_0_Template_form_ngSubmit_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.onConfirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 18)(29, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Contrase\u00F1a actual");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 20)(32, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PasswordConfirmModalComponent_div_0_Template_input_ngModelChange_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.password = $event);
    })("input", function PasswordConfirmModalComponent_div_0_Template_input_input_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.hasError = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PasswordConfirmModalComponent_div_0_Template_button_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.togglePasswordVisibility());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, PasswordConfirmModalComponent_div_0__svg_svg_34_Template, 3, 0, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, PasswordConfirmModalComponent_div_0__svg_svg_35_Template, 3, 0, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, PasswordConfirmModalComponent_div_0_p_36_Template, 6, 1, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 25)(38, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PasswordConfirmModalComponent_div_0_Template_button_click_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.onCancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, PasswordConfirmModalComponent_div_0_span_41_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, PasswordConfirmModalComponent_div_0_span_42_Template, 1, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "svg", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "circle", 15)(46, "line", 32)(47, "line", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Esta acci\u00F3n requiere autenticaci\u00F3n adicional para proteger tu cuenta");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.getUserInitials());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx_r0.currentUser == null ? null : ctx_r0.currentUser.username) || "Usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx_r0.currentUser == null ? null : ctx_r0.currentUser.email) || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.currentDateTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("error", ctx_r0.hasError);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("invalid", ctx_r0.hasError);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("type", ctx_r0.showPassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.showPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.showPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.hasError);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r0.password || ctx_r0.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.isLoading);
  }
}
class PasswordConfirmModalComponent {
  constructor(authService) {
    this.authService = authService;
    this.confirmed = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.cancelled = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.isVisible = false;
    this.password = '';
    this.showPassword = false;
    this.hasError = false;
    this.errorMessage = '';
    this.isLoading = false;
    this.currentUser = null;
    this.currentDateTime = '';
  }
  ngOnInit() {
    console.log('🔐 PasswordConfirmModalComponent inicializado');
    this.currentUser = this.authService.currentUserValue;
    console.log('👤 Usuario actual:', this.currentUser);
    this.updateDateTime();
    // Actualizar fecha y hora cada segundo
    this.intervalId = setInterval(() => {
      this.updateDateTime();
    }, 1000);
  }
  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  /**
   * Actualizar fecha y hora actual
   */
  updateDateTime() {
    const now = new Date();
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    };
    this.currentDateTime = now.toLocaleDateString('es-ES', options);
  }
  /**
   * Obtener iniciales del usuario para el avatar
   */
  getUserInitials() {
    if (!this.currentUser?.username) {
      return 'U';
    }
    const username = this.currentUser.username;
    const parts = username.split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return username.substring(0, 2).toUpperCase();
  }
  /**
   * Mostrar/ocultar contraseña
   */
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  /**
   * Manejar cambios en el input de contraseña
   */
  onPasswordInput(event) {
    const input = event.target;
    this.password = input.value;
    this.hasError = false;
  }
  /**
   * Abrir modal
   */
  open() {
    console.log('📂 Abriendo modal de confirmación de contraseña');
    this.isVisible = true;
    this.password = '';
    this.hasError = false;
    this.errorMessage = '';
    this.showPassword = false;
    this.isLoading = false;
    // Focus en el input después de la animación
    setTimeout(() => {
      const input = document.getElementById('password');
      if (input) {
        input.focus();
      }
    }, 300);
  }
  /**
   * Cerrar modal
   */
  close() {
    console.log('❌ Cerrando modal de confirmación de contraseña');
    this.isVisible = false;
    this.password = '';
    this.hasError = false;
    this.errorMessage = '';
  }
  /**
   * Manejar confirmación
   */
  onConfirm() {
    var _this = this;
    return (0,_Applications_MAMP_htdocs_angular_19_40_tatoodenda_arsys_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.password) {
        _this.hasError = true;
        _this.errorMessage = 'Por favor, ingresa tu contraseña';
        return;
      }
      _this.isLoading = true;
      _this.hasError = false;
      try {
        // Verificar contraseña con el backend
        const username = _this.currentUser?.username || '';
        console.log('🔍 Verificando contraseña para usuario:', username);
        // Intentar login para verificar contraseña
        const user = yield _this.authService.login(username, _this.password).toPromise();
        console.log('✅ Contraseña verificada correctamente');
        // Si llega aquí, la contraseña es correcta
        _this.isLoading = false;
        _this.confirmed.emit(_this.password);
        _this.close();
      } catch (error) {
        console.error('❌ Error al verificar contraseña:', error);
        _this.isLoading = false;
        _this.hasError = true;
        _this.errorMessage = 'Contraseña incorrecta. Inténtalo de nuevo.';
      }
    })();
  }
  /**
   * Manejar cancelación
   */
  onCancel() {
    console.log('🚫 Usuario canceló la confirmación de contraseña');
    this.cancelled.emit();
    this.close();
  }
  static {
    this.ɵfac = function PasswordConfirmModalComponent_Factory(t) {
      return new (t || PasswordConfirmModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: PasswordConfirmModalComponent,
      selectors: [["app-password-confirm-modal"]],
      outputs: {
        confirmed: "confirmed",
        cancelled: "cancelled"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "modal-overlay", 3, "click"], [1, "modal-container", 3, "click"], [1, "modal-header"], [1, "header-content"], [1, "icon-wrapper"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2", "ry", "2"], ["d", "M7 11V7a5 5 0 0 1 10 0v4"], [1, "user-info-card"], [1, "user-avatar"], [1, "user-details"], [1, "user-email"], [1, "session-info"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12 6 12 12 16 14"], [1, "password-form", 3, "ngSubmit"], [1, "form-group"], ["for", "password"], [1, "input-wrapper"], ["id", "password", "name", "password", "placeholder", "Ingresa tu contrase\u00F1a", "autocomplete", "current-password", "required", "", 3, "type", "ngModel", "ngModelChange", "input"], ["type", "button", "tabindex", "-1", 1, "toggle-password", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], [1, "button-group"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], [1, "modal-footer"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x1", "12", "y1", "16", "x2", "12", "y2", "12"], ["x1", "12", "y1", "8", "x2", "12.01", "y2", "8"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"], ["x1", "1", "y1", "1", "x2", "23", "y2", "23"], [1, "error-message"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], [1, "loading-spinner"]],
      template: function PasswordConfirmModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PasswordConfirmModalComponent_div_0_Template, 50, 16, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isVisible);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
      styles: ["\n\n\n\n\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.6);\n  z-index: 99999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  backdrop-filter: blur(3px);\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    backdrop-filter: blur(0px);\n  }\n  to {\n    opacity: 1;\n    backdrop-filter: blur(3px);\n  }\n}\n\n\n.modal-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);\n  width: 90%;\n  max-width: 480px;\n  max-height: 90vh;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_slideInUp 0.4s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_slideInUp {\n  from {\n    transform: translateY(50px) scale(0.95);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n  }\n}\n\n\n.modal-header[_ngcontent-%COMP%] {\n  background-color: #52667a;\n  color: white;\n  padding: 30px;\n  text-align: center;\n  position: relative;\n}\n.modal-header[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 60px;\n  height: 3px;\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 2px;\n}\n.modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 8px;\n}\n.modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  color: white;\n}\n.modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 1.8em;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9em;\n  opacity: 0.95;\n  font-weight: 400;\n}\n\n\n\n.user-info-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 20px 30px;\n  background: linear-gradient(to bottom, #f8f9fa, white);\n  border-bottom: 1px solid #e0e0e0;\n}\n.user-info-card[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  background: linear-gradient(135deg, #52667a 0%, #3d4d5c 100%);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  box-shadow: 0 2px 8px rgba(82, 102, 122, 0.3);\n}\n.user-info-card[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 700;\n  font-size: 1.3em;\n  font-family: \"Montserrat\", sans-serif;\n}\n.user-info-card[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.user-info-card[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-size: 1.1em;\n  font-weight: 600;\n  color: #333;\n  font-family: \"Montserrat\", sans-serif;\n}\n.user-info-card[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%] {\n  margin: 0 0 6px 0;\n  font-size: 0.85em;\n  color: #666;\n}\n.user-info-card[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .session-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.8em;\n  color: #999;\n}\n.user-info-card[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .session-info[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  color: #52667a;\n}\n\n\n\n.password-form[_ngcontent-%COMP%] {\n  padding: 25px 30px 30px;\n}\n.password-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.password-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  color: #333;\n  font-size: 0.9em;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 10px;\n  font-family: \"Montserrat\", sans-serif;\n}\n.password-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.password-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-wrapper.error[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n  background-color: #fff5f5;\n}\n.password-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 50px 14px 16px;\n  border: 2px solid #e0e0e0;\n  border-radius: 8px;\n  font-size: 1em;\n  font-family: \"Montserrat\", sans-serif;\n  transition: all 0.2s ease;\n  background-color: #fafafa;\n}\n.password-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #52667a;\n  background-color: white;\n  box-shadow: 0 0 0 3px rgba(82, 102, 122, 0.1);\n}\n.password-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input.invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.password-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #999;\n  font-style: italic;\n}\n.password-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .toggle-password[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #666;\n  transition: color 0.2s ease;\n}\n.password-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .toggle-password[_ngcontent-%COMP%]:hover {\n  color: #52667a;\n}\n.password-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .toggle-password[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.password-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 8px;\n  padding: 10px 12px;\n  background: linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%);\n  color: #dc3545;\n  border-radius: 6px;\n  font-size: 0.85em;\n  border-left: 4px solid #dc3545;\n  animation: _ngcontent-%COMP%_slideInError 0.3s ease;\n}\n.password-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  flex-shrink: 0;\n}\n\n@keyframes _ngcontent-%COMP%_slideInError {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n\n.button-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 24px;\n}\n.button-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 14px 20px;\n  border: none;\n  border-radius: 8px;\n  font-weight: bold;\n  font-size: 0.95em;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-family: \"Montserrat\", sans-serif;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.button-group[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #666;\n  border: 2px solid #e0e0e0;\n}\n.button-group[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #ebebeb;\n  border-color: #d0d0d0;\n}\n.button-group[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.button-group[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #52667a;\n  color: white;\n  box-shadow: 0 4px 12px rgba(82, 102, 122, 0.3);\n}\n.button-group[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #3d4d5c;\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(82, 102, 122, 0.4);\n}\n.button-group[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.button-group[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:disabled {\n  background: #ccc;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.button-group[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top: 2px solid white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 20px 30px;\n  background: #f8f9fa;\n  border-top: 1px solid #e0e0e0;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 0.85em;\n  color: #666;\n}\n.modal-footer[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  color: #52667a;\n  flex-shrink: 0;\n}\n.modal-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  line-height: 1.4;\n}\n\n\n\n@media screen and (max-width: 768px) {\n  .modal-container[_ngcontent-%COMP%] {\n    width: 95%;\n    margin: 15px;\n  }\n  .modal-header[_ngcontent-%COMP%] {\n    padding: 25px 20px;\n  }\n  .modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n  }\n  .modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.85em;\n  }\n  .user-info-card[_ngcontent-%COMP%] {\n    padding: 18px 20px;\n  }\n  .password-form[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .button-group[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .button-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 480px) {\n  .modal-overlay[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    padding-top: 60px;\n  }\n  .modal-container[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0 10px;\n    max-height: calc(100vh - 120px);\n  }\n  .modal-header[_ngcontent-%COMP%] {\n    padding: 20px 18px;\n  }\n  .modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%] {\n    width: 45px;\n    height: 45px;\n  }\n  .modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 22px;\n    height: 22px;\n  }\n  .modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.3em;\n  }\n  .modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.8em;\n  }\n  .user-info-card[_ngcontent-%COMP%] {\n    padding: 16px 18px;\n  }\n  .user-info-card[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%] {\n    width: 48px;\n    height: 48px;\n  }\n  .user-info-card[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 1.1em;\n  }\n  .password-form[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    padding: 16px 18px;\n    font-size: 0.8em;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYXNzd29yZC1jb25maXJtLW1vZGFsL3Bhc3N3b3JkLWNvbmZpcm0tbW9kYWwuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL2FuZ3VsYXIlMjAxOS80MCUyMHRhdG9vZGVuZGElMjBhcnN5cy9mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvcGFzc3dvcmQtY29uZmlybS1tb2RhbC9wYXNzd29yZC1jb25maXJtLW1vZGFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUVBQUE7QUFFQSxzRUFBQTtBQVNBLGtCQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSwrQkFBQTtBQ1JGOztBRFdBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUNSRjtFRFVBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0VDUkY7QUFDRjtBRFdBLG9CQUFBO0FBQ0E7RUFDRSxpQkFsQ1c7RUFtQ1gsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtBQ1RGOztBRFlBO0VBQ0U7SUFDRSx1Q0FBQTtJQUNBLFVBQUE7RUNURjtFRFdBO0lBQ0UsaUNBQUE7SUFDQSxVQUFBO0VDVEY7QUFDRjtBRFlBLDJDQUFBO0FBQ0E7RUFDRSx5QkE1RFE7RUE2RFIsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDVkY7QURZRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUNWSjtBRGFFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FDWEo7QURhSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNYTjtBRGFNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDWFI7QURlSTtFQUNFLFNBQUE7RUFDQSxxQ0FuR1M7RUFvR1QsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtBQ2JOO0FEZ0JJO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDZE47O0FEbUJBLG1CQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxzREFBQTtFQUNBLGdDQUFBO0FDaEJGO0FEa0JFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSw2REFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsNkNBQUE7QUNoQko7QURrQkk7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQTVJUztBQzRIZjtBRG9CRTtFQUNFLE9BQUE7QUNsQko7QURvQkk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EscUNBeEpTO0FDc0lmO0FEcUJJO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNuQk47QURzQkk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDcEJOO0FEc0JNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQS9LRTtBQzJKVjs7QUQwQkEsa0JBQUE7QUFDQTtFQUNFLHVCQUFBO0FDdkJGO0FEeUJFO0VBQ0UsbUJBQUE7QUN2Qko7QUR5Qkk7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FoTVM7QUN5S2Y7QUQwQkk7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ3hCTjtBRDBCTTtFQUNFLHFCQXhNTTtFQXlNTix5QkFBQTtBQ3hCUjtBRDJCTTtFQUNFLFdBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EscUNBbk5PO0VBb05QLHlCQUFBO0VBQ0EseUJBQUE7QUN6QlI7QUQyQlE7RUFDRSxhQUFBO0VBQ0EscUJBN05BO0VBOE5BLHVCQUFBO0VBQ0EsNkNBQUE7QUN6QlY7QUQ0QlE7RUFDRSxxQkE5Tkk7QUNvTWQ7QUQ2QlE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUMzQlY7QUQrQk07RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FDN0JSO0FEK0JRO0VBQ0UsY0ExUEE7QUM2TlY7QURnQ1E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQzlCVjtBRG1DSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw2REFBQTtFQUNBLGNBdFFRO0VBdVFSLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0FDakNOO0FEbUNNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDakNSOztBRHVDQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDRCQUFBO0VDcENGO0VEc0NBO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VDcENGO0FBQ0Y7QUR1Q0EsaUJBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNyQ0Y7QUR1Q0U7RUFDRSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHFDQWxUVztFQW1UWCxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ3JDSjtBRHVDSTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDckNOO0FEdUNNO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBQ3JDUjtBRHdDTTtFQUNFLHNCQUFBO0FDdENSO0FEMENJO0VBQ0UseUJBM1VJO0VBNFVKLFlBQUE7RUFDQSw4Q0FBQTtBQ3hDTjtBRDBDTTtFQUNFLHlCQS9VTztFQWdWUCwyQkFBQTtFQUNBLDhDQUFBO0FDeENSO0FEMkNNO0VBQ0Usd0JBQUE7QUN6Q1I7QUQ0Q007RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDMUNSO0FENkNNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtBQzNDUjs7QURpREE7RUFDRTtJQUFLLHVCQUFBO0VDN0NMO0VEOENBO0lBQU8seUJBQUE7RUMzQ1A7QUFDRjtBRDZDQSxpQkFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQzNDRjtBRDZDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0EvWE07RUFnWU4sY0FBQTtBQzNDSjtBRDhDRTtFQUNFLGdCQUFBO0FDNUNKOztBRGdEQSxlQUFBO0FBQ0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxZQUFBO0VDN0NGO0VEZ0RBO0lBQ0Usa0JBQUE7RUM5Q0Y7RURpREk7SUFDRSxnQkFBQTtFQy9DTjtFRGtESTtJQUNFLGlCQUFBO0VDaEROO0VEcURBO0lBQ0Usa0JBQUE7RUNuREY7RURzREE7SUFDRSxhQUFBO0VDcERGO0VEdURBO0lBQ0Usc0JBQUE7RUNyREY7RUR1REU7SUFDRSxXQUFBO0VDckRKO0FBQ0Y7QUR5REE7RUFDRTtJQUNFLHVCQUFBO0lBQ0EsaUJBQUE7RUN2REY7RUQwREE7SUFDRSxXQUFBO0lBQ0EsY0FBQTtJQUNBLCtCQUFBO0VDeERGO0VEMkRBO0lBQ0Usa0JBQUE7RUN6REY7RUQ0REk7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQzFETjtFRDRETTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VDMURSO0VEOERJO0lBQ0UsZ0JBQUE7RUM1RE47RUQrREk7SUFDRSxnQkFBQTtFQzdETjtFRGtFQTtJQUNFLGtCQUFBO0VDaEVGO0VEa0VFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUNoRUo7RURrRUk7SUFDRSxnQkFBQTtFQ2hFTjtFRHFFQTtJQUNFLGFBQUE7RUNuRUY7RURzRUE7SUFDRSxrQkFBQTtJQUNBLGdCQUFBO0VDcEVGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBwYXNzd29yZC1jb25maXJtLW1vZGFsLnNjc3MgLSBDT0xPUkVTIEdSSVNFUyBDT1JQT1JBVElWT1MgVU5JRklDQURPUyAqL1xuXG4vKiBWYXJpYWJsZXMgY29uIGNvbG9yZXMgZ3Jpc2VzIGNvcnBvcmF0aXZvcyAoaWd1YWwgcXVlIGxvZ2luLXBvcHVwKSAqL1xuJHByaW1hcnk6ICM1MjY2N2E7XG4kcHJpbWFyeS1kYXJrOiAjM2Q0ZDVjO1xuJHByaW1hcnktbGlnaHQ6ICNjMmNkZDY7XG4kYmFja2dyb3VuZDogd2hpdGU7XG4kZGVmYXVsdC1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4kZXJyb3ItY29sb3I6ICNkYzM1NDU7XG4kc3VjY2Vzcy1jb2xvcjogIzJlN2QzMjtcblxuLyogTW9kYWwgb3ZlcmxheSAqL1xuLm1vZGFsLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIHotaW5kZXg6IDk5OTk5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZS1vdXQ7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcbiAgfVxufVxuXG4vKiBNb2RhbCBjb250YWluZXIgKi9cbi5tb2RhbC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMCAyMHB4IDYwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDQ4MHB4O1xuICBtYXgtaGVpZ2h0OiA5MHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBhbmltYXRpb246IHNsaWRlSW5VcCAwLjRzIGVhc2Utb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlSW5VcCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KSBzY2FsZSgwLjk1KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4vKiBIZWFkZXIgY29uIGNvbG9yZXMgZ3Jpc2VzIGNvcnBvcmF0aXZvcyAqL1xuLm1vZGFsLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgfVxuXG4gIC5oZWFkZXItY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMnB4O1xuXG4gICAgLmljb24td3JhcHBlciB7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4gICAgICBzdmcge1xuICAgICAgICB3aWR0aDogMjZweDtcbiAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaDIge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1mYW1pbHk6ICRkZWZhdWx0LWZvbnQ7XG4gICAgICBmb250LXNpemU6IDEuOGVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgdGV4dC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgb3BhY2l0eTogMC45NTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICB9XG59XG5cbi8qIFVzZXIgaW5mbyBjYXJkICovXG4udXNlci1pbmZvLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE2cHg7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2Y4ZjlmYSwgd2hpdGUpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcblxuICAudXNlci1hdmF0YXIge1xuICAgIHdpZHRoOiA1NnB4O1xuICAgIGhlaWdodDogNTZweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkcHJpbWFyeSAwJSwgJHByaW1hcnktZGFyayAxMDAlKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKCRwcmltYXJ5LCAwLjMpO1xuXG4gICAgc3BhbiB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICAgIGZvbnQtZmFtaWx5OiAkZGVmYXVsdC1mb250O1xuICAgIH1cbiAgfVxuXG4gIC51c2VyLWRldGFpbHMge1xuICAgIGZsZXg6IDE7XG5cbiAgICBoMyB7XG4gICAgICBtYXJnaW46IDAgMCA0cHggMDtcbiAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICBmb250LWZhbWlseTogJGRlZmF1bHQtZm9udDtcbiAgICB9XG5cbiAgICAudXNlci1lbWFpbCB7XG4gICAgICBtYXJnaW46IDAgMCA2cHggMDtcbiAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xuICAgICAgY29sb3I6ICM2NjY7XG4gICAgfVxuXG4gICAgLnNlc3Npb24taW5mbyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogNnB4O1xuICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgIGNvbG9yOiAjOTk5O1xuXG4gICAgICBzdmcge1xuICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qIFBhc3N3b3JkIGZvcm0gKi9cbi5wYXNzd29yZC1mb3JtIHtcbiAgcGFkZGluZzogMjVweCAzMHB4IDMwcHg7XG5cbiAgLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICBsYWJlbCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAkZGVmYXVsdC1mb250O1xuICAgIH1cblxuICAgIC5pbnB1dC13cmFwcGVyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAmLmVycm9yIGlucHV0IHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkZXJyb3ItY29sb3I7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY1ZjU7XG4gICAgICB9XG5cbiAgICAgIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDE0cHggNTBweCAxNHB4IDE2cHg7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlMGUwZTA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZGVmYXVsdC1mb250O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgkcHJpbWFyeSwgMC4xKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuaW52YWxpZCB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkZXJyb3ItY29sb3I7XG4gICAgICAgIH1cblxuICAgICAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC50b2dnbGUtcGFzc3dvcmQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAxMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgICAgIH1cblxuICAgICAgICBzdmcge1xuICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5lcnJvci1tZXNzYWdlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA4cHg7XG4gICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmZlYmVlIDAlLCAjZmZjZGQyIDEwMCUpO1xuICAgICAgY29sb3I6ICRlcnJvci1jb2xvcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xuICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAkZXJyb3ItY29sb3I7XG4gICAgICBhbmltYXRpb246IHNsaWRlSW5FcnJvciAwLjNzIGVhc2U7XG5cbiAgICAgIHN2ZyB7XG4gICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlSW5FcnJvciB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuLyogQnV0dG9uIGdyb3VwICovXG4uYnV0dG9uLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuXG4gIC5idG4ge1xuICAgIGZsZXg6IDE7XG4gICAgcGFkZGluZzogMTRweCAyMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAwLjk1ZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgZm9udC1mYW1pbHk6ICRkZWZhdWx0LWZvbnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgJi5idG4tc2Vjb25kYXJ5IHtcbiAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlMGUwZTA7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xuICAgICAgICBib3JkZXItY29sb3I6ICNkMGQwZDA7XG4gICAgICB9XG5cbiAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmJ0bi1wcmltYXJ5IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKCRwcmltYXJ5LCAwLjMpO1xuXG4gICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktZGFyaztcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDZweCAxNnB4IHJnYmEoJHByaW1hcnksIDAuNCk7XG4gICAgICB9XG5cbiAgICAgICY6YWN0aXZlOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgfVxuXG4gICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2NjYztcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgfVxuXG4gICAgICAubG9hZGluZy1zcGlubmVyIHtcbiAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG4vKiBNb2RhbCBmb290ZXIgKi9cbi5tb2RhbC1mb290ZXIge1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTBlMGUwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICBjb2xvcjogIzY2NjtcblxuICBzdmcge1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gIH1cblxuICBzcGFuIHtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICB9XG59XG5cbi8qIFJlc3BvbnNpdmUgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tb2RhbC1jb250YWluZXIge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWFyZ2luOiAxNXB4O1xuICB9XG5cbiAgLm1vZGFsLWhlYWRlciB7XG4gICAgcGFkZGluZzogMjVweCAyMHB4O1xuXG4gICAgLmhlYWRlci1jb250ZW50IHtcbiAgICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC51c2VyLWluZm8tY2FyZCB7XG4gICAgcGFkZGluZzogMThweCAyMHB4O1xuICB9XG5cbiAgLnBhc3N3b3JkLWZvcm0ge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cblxuICAuYnV0dG9uLWdyb3VwIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLmJ0biB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLm1vZGFsLW92ZXJsYXkge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICB9XG5cbiAgLm1vZGFsLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDEyMHB4KTtcbiAgfVxuXG4gIC5tb2RhbC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDIwcHggMThweDtcblxuICAgIC5oZWFkZXItY29udGVudCB7XG4gICAgICAuaWNvbi13cmFwcGVyIHtcbiAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgIGhlaWdodDogNDVweDtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgIHdpZHRoOiAyMnB4O1xuICAgICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC51c2VyLWluZm8tY2FyZCB7XG4gICAgcGFkZGluZzogMTZweCAxOHB4O1xuXG4gICAgLnVzZXItYXZhdGFyIHtcbiAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgaGVpZ2h0OiA0OHB4O1xuXG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucGFzc3dvcmQtZm9ybSB7XG4gICAgcGFkZGluZzogMThweDtcbiAgfVxuXG4gIC5tb2RhbC1mb290ZXIge1xuICAgIHBhZGRpbmc6IDE2cHggMThweDtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICB9XG59IiwiLyogcGFzc3dvcmQtY29uZmlybS1tb2RhbC5zY3NzIC0gQ09MT1JFUyBHUklTRVMgQ09SUE9SQVRJVk9TIFVOSUZJQ0FET1MgKi9cbi8qIFZhcmlhYmxlcyBjb24gY29sb3JlcyBncmlzZXMgY29ycG9yYXRpdm9zIChpZ3VhbCBxdWUgbG9naW4tcG9wdXApICovXG4vKiBNb2RhbCBvdmVybGF5ICovXG4ubW9kYWwtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgei1pbmRleDogOTk5OTk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC4zcyBlYXNlLW91dDtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xuICB9XG59XG4vKiBNb2RhbCBjb250YWluZXIgKi9cbi5tb2RhbC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMCAyMHB4IDYwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDQ4MHB4O1xuICBtYXgtaGVpZ2h0OiA5MHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBhbmltYXRpb246IHNsaWRlSW5VcCAwLjRzIGVhc2Utb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlSW5VcCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KSBzY2FsZSgwLjk1KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLyogSGVhZGVyIGNvbiBjb2xvcmVzIGdyaXNlcyBjb3Jwb3JhdGl2b3MgKi9cbi5tb2RhbC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI2NjdhO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1vZGFsLWhlYWRlcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4ubW9kYWwtaGVhZGVyIC5oZWFkZXItY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbn1cbi5tb2RhbC1oZWFkZXIgLmhlYWRlci1jb250ZW50IC5pY29uLXdyYXBwZXIge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4ubW9kYWwtaGVhZGVyIC5oZWFkZXItY29udGVudCAuaWNvbi13cmFwcGVyIHN2ZyB7XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tb2RhbC1oZWFkZXIgLmhlYWRlci1jb250ZW50IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS44ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRleHQtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLm1vZGFsLWhlYWRlciAuaGVhZGVyLWNvbnRlbnQgcCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgb3BhY2l0eTogMC45NTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLyogVXNlciBpbmZvIGNhcmQgKi9cbi51c2VyLWluZm8tY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTZweDtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZjhmOWZhLCB3aGl0ZSk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xufVxuLnVzZXItaW5mby1jYXJkIC51c2VyLWF2YXRhciB7XG4gIHdpZHRoOiA1NnB4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM1MjY2N2EgMCUsICMzZDRkNWMgMTAwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSg4MiwgMTAyLCAxMjIsIDAuMyk7XG59XG4udXNlci1pbmZvLWNhcmQgLnVzZXItYXZhdGFyIHNwYW4ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbn1cbi51c2VyLWluZm8tY2FyZCAudXNlci1kZXRhaWxzIHtcbiAgZmxleDogMTtcbn1cbi51c2VyLWluZm8tY2FyZCAudXNlci1kZXRhaWxzIGgzIHtcbiAgbWFyZ2luOiAwIDAgNHB4IDA7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG59XG4udXNlci1pbmZvLWNhcmQgLnVzZXItZGV0YWlscyAudXNlci1lbWFpbCB7XG4gIG1hcmdpbjogMCAwIDZweCAwO1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgY29sb3I6ICM2NjY7XG59XG4udXNlci1pbmZvLWNhcmQgLnVzZXItZGV0YWlscyAuc2Vzc2lvbi1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiAjOTk5O1xufVxuLnVzZXItaW5mby1jYXJkIC51c2VyLWRldGFpbHMgLnNlc3Npb24taW5mbyBzdmcge1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBjb2xvcjogIzUyNjY3YTtcbn1cblxuLyogUGFzc3dvcmQgZm9ybSAqL1xuLnBhc3N3b3JkLWZvcm0ge1xuICBwYWRkaW5nOiAyNXB4IDMwcHggMzBweDtcbn1cbi5wYXNzd29yZC1mb3JtIC5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5wYXNzd29yZC1mb3JtIC5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXNpemU6IDAuOWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbn1cbi5wYXNzd29yZC1mb3JtIC5mb3JtLWdyb3VwIC5pbnB1dC13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnBhc3N3b3JkLWZvcm0gLmZvcm0tZ3JvdXAgLmlucHV0LXdyYXBwZXIuZXJyb3IgaW5wdXQge1xuICBib3JkZXItY29sb3I6ICNkYzM1NDU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY1ZjU7XG59XG4ucGFzc3dvcmQtZm9ybSAuZm9ybS1ncm91cCAuaW5wdXQtd3JhcHBlciBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNHB4IDUwcHggMTRweCAxNnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTBlMGUwO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG59XG4ucGFzc3dvcmQtZm9ybSAuZm9ybS1ncm91cCAuaW5wdXQtd3JhcHBlciBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogIzUyNjY3YTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDgyLCAxMDIsIDEyMiwgMC4xKTtcbn1cbi5wYXNzd29yZC1mb3JtIC5mb3JtLWdyb3VwIC5pbnB1dC13cmFwcGVyIGlucHV0LmludmFsaWQge1xuICBib3JkZXItY29sb3I6ICNkYzM1NDU7XG59XG4ucGFzc3dvcmQtZm9ybSAuZm9ybS1ncm91cCAuaW5wdXQtd3JhcHBlciBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzk5OTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLnBhc3N3b3JkLWZvcm0gLmZvcm0tZ3JvdXAgLmlucHV0LXdyYXBwZXIgLnRvZ2dsZS1wYXNzd29yZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEycHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogIzY2NjtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlO1xufVxuLnBhc3N3b3JkLWZvcm0gLmZvcm0tZ3JvdXAgLmlucHV0LXdyYXBwZXIgLnRvZ2dsZS1wYXNzd29yZDpob3ZlciB7XG4gIGNvbG9yOiAjNTI2NjdhO1xufVxuLnBhc3N3b3JkLWZvcm0gLmZvcm0tZ3JvdXAgLmlucHV0LXdyYXBwZXIgLnRvZ2dsZS1wYXNzd29yZCBzdmcge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuLnBhc3N3b3JkLWZvcm0gLmZvcm0tZ3JvdXAgLmVycm9yLW1lc3NhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZmViZWUgMCUsICNmZmNkZDIgMTAwJSk7XG4gIGNvbG9yOiAjZGMzNTQ1O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNkYzM1NDU7XG4gIGFuaW1hdGlvbjogc2xpZGVJbkVycm9yIDAuM3MgZWFzZTtcbn1cbi5wYXNzd29yZC1mb3JtIC5mb3JtLWdyb3VwIC5lcnJvci1tZXNzYWdlIHN2ZyB7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlSW5FcnJvciB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbi8qIEJ1dHRvbiBncm91cCAqL1xuLmJ1dHRvbi1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTJweDtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cbi5idXR0b24tZ3JvdXAgLmJ0biB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDAuOTVlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYnV0dG9uLWdyb3VwIC5idG4uYnRuLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGNvbG9yOiAjNjY2O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTBlMGUwO1xufVxuLmJ1dHRvbi1ncm91cCAuYnRuLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xuICBib3JkZXItY29sb3I6ICNkMGQwZDA7XG59XG4uYnV0dG9uLWdyb3VwIC5idG4uYnRuLXNlY29uZGFyeTphY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xufVxuLmJ1dHRvbi1ncm91cCAuYnRuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyNjY3YTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoODIsIDEwMiwgMTIyLCAwLjMpO1xufVxuLmJ1dHRvbi1ncm91cCAuYnRuLmJ0bi1wcmltYXJ5OmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkNGQ1YztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICBib3gtc2hhZG93OiAwIDZweCAxNnB4IHJnYmEoODIsIDEwMiwgMTIyLCAwLjQpO1xufVxuLmJ1dHRvbi1ncm91cCAuYnRuLmJ0bi1wcmltYXJ5OmFjdGl2ZTpub3QoOmRpc2FibGVkKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbn1cbi5idXR0b24tZ3JvdXAgLmJ0bi5idG4tcHJpbWFyeTpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIHRyYW5zZm9ybTogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5idXR0b24tZ3JvdXAgLmJ0bi5idG4tcHJpbWFyeSAubG9hZGluZy1zcGlubmVyIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBib3JkZXItdG9wOiAycHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi8qIE1vZGFsIGZvb3RlciAqL1xuLm1vZGFsLWZvb3RlciB7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMGUwZTA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgZm9udC1zaXplOiAwLjg1ZW07XG4gIGNvbG9yOiAjNjY2O1xufVxuLm1vZGFsLWZvb3RlciBzdmcge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBjb2xvcjogIzUyNjY3YTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG4ubW9kYWwtZm9vdGVyIHNwYW4ge1xuICBsaW5lLWhlaWdodDogMS40O1xufVxuXG4vKiBSZXNwb25zaXZlICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubW9kYWwtY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTUlO1xuICAgIG1hcmdpbjogMTVweDtcbiAgfVxuICAubW9kYWwtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAyNXB4IDIwcHg7XG4gIH1cbiAgLm1vZGFsLWhlYWRlciAuaGVhZGVyLWNvbnRlbnQgaDIge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gIH1cbiAgLm1vZGFsLWhlYWRlciAuaGVhZGVyLWNvbnRlbnQgcCB7XG4gICAgZm9udC1zaXplOiAwLjg1ZW07XG4gIH1cbiAgLnVzZXItaW5mby1jYXJkIHtcbiAgICBwYWRkaW5nOiAxOHB4IDIwcHg7XG4gIH1cbiAgLnBhc3N3b3JkLWZvcm0ge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbiAgLmJ1dHRvbi1ncm91cCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuYnV0dG9uLWdyb3VwIC5idG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAubW9kYWwtb3ZlcmxheSB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZy10b3A6IDYwcHg7XG4gIH1cbiAgLm1vZGFsLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDEyMHB4KTtcbiAgfVxuICAubW9kYWwtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAyMHB4IDE4cHg7XG4gIH1cbiAgLm1vZGFsLWhlYWRlciAuaGVhZGVyLWNvbnRlbnQgLmljb24td3JhcHBlciB7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICB9XG4gIC5tb2RhbC1oZWFkZXIgLmhlYWRlci1jb250ZW50IC5pY29uLXdyYXBwZXIgc3ZnIHtcbiAgICB3aWR0aDogMjJweDtcbiAgICBoZWlnaHQ6IDIycHg7XG4gIH1cbiAgLm1vZGFsLWhlYWRlciAuaGVhZGVyLWNvbnRlbnQgaDIge1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gIH1cbiAgLm1vZGFsLWhlYWRlciAuaGVhZGVyLWNvbnRlbnQgcCB7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgfVxuICAudXNlci1pbmZvLWNhcmQge1xuICAgIHBhZGRpbmc6IDE2cHggMThweDtcbiAgfVxuICAudXNlci1pbmZvLWNhcmQgLnVzZXItYXZhdGFyIHtcbiAgICB3aWR0aDogNDhweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gIH1cbiAgLnVzZXItaW5mby1jYXJkIC51c2VyLWF2YXRhciBzcGFuIHtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICB9XG4gIC5wYXNzd29yZC1mb3JtIHtcbiAgICBwYWRkaW5nOiAxOHB4O1xuICB9XG4gIC5tb2RhbC1mb290ZXIge1xuICAgIHBhZGRpbmc6IDE2cHggMThweDtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9081:
/*!*******************************************************************************!*\
  !*** ./src/app/components/product/product-detail/product-detail.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductDetailComponent: () => (/* binding */ ProductDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/product.service */ 6241);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/cart.service */ 6868);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);






function ProductDetailComponent_img_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 17);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.getImagePath(ctx_r0.product), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", ctx_r0.product.nombre);
  }
}
function ProductDetailComponent_div_10_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductDetailComponent_div_10_img_1_Template_img_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const color_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.changeColor(color_r4.color));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const color_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", color_r4.color)("src", ctx_r3.getImagePath(ctx_r3.product, color_r4), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", color_r4.color);
  }
}
function ProductDetailComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProductDetailComponent_div_10_img_1_Template, 1, 3, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.colors);
  }
}
function ProductDetailComponent_div_16_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const color_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", color_r8.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", color_r8.color, " ");
  }
}
function ProductDetailComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21)(1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Selecciona color:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProductDetailComponent_div_16_Template_select_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.selectedColor = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ProductDetailComponent_div_16_option_4_Template, 2, 2, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.selectedColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.colors);
  }
}
class ProductDetailComponent {
  constructor(route, productService, cartService) {
    this.route = route;
    this.productService = productService;
    this.cartService = cartService;
    // Datos del producto
    this.product = null;
    // Opciones de producto
    this.colors = [];
    this.sizes = [];
    // Selecciones actuales
    this.selectedColor = '';
    this.selectedSize = '';
    this.quantity = 1;
    // Estado de carga
    this.loading = true;
    // Variable para controlar la visibilidad del popup
    this.showPopup = false;
    // Imágenes
    this.currentImageIndex = 0;
    this.relatedProducts = [];
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = +params['id'];
      this.loadProductDetails(productId);
      this.loadProductColors(productId);
      this.loadRelatedProducts(productId);
    });
  }
  // Cargar detalles del producto
  loadProductDetails(productId) {
    this.loading = true;
    this.productService.getProduct(productId).subscribe({
      next: product => {
        this.product = product;
        this.loading = false;
      },
      error: error => {
        console.error('Error loading product details', error);
        this.loading = false;
      }
    });
  }
  // Cargar colores disponibles
  loadProductColors(productId) {
    this.productService.getProductColors(productId).subscribe({
      next: colors => this.colors = colors,
      error: error => console.error('Error loading product colors', error)
    });
  }
  // Cargar productos relacionados
  loadRelatedProducts(productId) {
    this.productService.getProducts().subscribe({
      next: products => {
        this.relatedProducts = products.filter(p => p.id !== productId).slice(0, 4);
      },
      error: error => console.error('Error loading related products', error)
    });
  }
  // Método para obtener la ruta de la imagen del producto
  getImagePath(product, color) {
    if (!product) {
      return this.productService.defaultImage; // Usar imagen por defecto
    }

    return this.productService.getProductImageSrc(product);
  }
  // Método para cambiar el color del producto
  changeColor(colorCode) {
    this.selectedColor = colorCode;
  }
  // Método para formatear el precio
  formatPrice(price) {
    if (price === undefined) return '€0.00';
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR'
    }).format(price);
  }
  // Cambiar imagen actual
  changeImage(index) {
    this.currentImageIndex = index;
  }
  // Cambiar tamaño seleccionado
  selectSize(size) {
    this.selectedSize = size;
  }
  // Incrementar cantidad
  incrementQuantity() {
    this.quantity++;
  }
  // Decrementar cantidad
  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  // Cerrar popup del producto
  closeProductPopup() {
    this.showPopup = false;
  }
  // Abrir popup del producto
  openProductPopup() {
    this.showPopup = true;
  }
  // Añadir al carrito
  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product, this.quantity, this.selectedColor, this.selectedSize);
    }
  }
  static {
    this.ɵfac = function ProductDetailComponent_Factory(t) {
      return new (t || ProductDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ProductDetailComponent,
      selectors: [["app-product-detail"]],
      decls: 28,
      vars: 11,
      consts: [[1, "product-overlay"], [1, "product-popup"], [1, "product-header"], [1, "close-product", 3, "click"], [1, "product-content"], [1, "product-image-container"], ["class", "product-image", 3, "src", "alt", 4, "ngIf"], ["class", "product-thumbnails", 4, "ngIf"], [1, "product-details"], [1, "product-price"], [1, "product-description"], ["class", "color-selector", 4, "ngIf"], [1, "quantity-control"], [1, "quantity-buttons"], [1, "quantity-btn", 3, "click"], ["type", "number", "min", "1", 1, "quantity-input", 3, "ngModel", "ngModelChange"], [1, "add-to-cart-btn", 3, "click"], [1, "product-image", 3, "src", "alt"], [1, "product-thumbnails"], ["class", "thumbnail", 3, "id", "src", "alt", "click", 4, "ngFor", "ngForOf"], [1, "thumbnail", 3, "id", "src", "alt", "click"], [1, "color-selector"], ["for", "color-select"], ["id", "color-select", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
      template: function ProductDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductDetailComponent_Template_button_click_5_listener() {
            return ctx.closeProductPopup();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4)(8, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ProductDetailComponent_img_9_Template, 1, 2, "img", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ProductDetailComponent_div_10_Template, 2, 1, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8)(12, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ProductDetailComponent_div_16_Template, 5, 2, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 12)(18, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Cantidad:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 13)(21, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductDetailComponent_Template_button_click_21_listener() {
            return ctx.decrementQuantity();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "-");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProductDetailComponent_Template_input_ngModelChange_23_listener($event) {
            return ctx.quantity = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductDetailComponent_Template_button_click_24_listener() {
            return ctx.incrementQuantity();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "+");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductDetailComponent_Template_button_click_26_listener() {
            return ctx.addToCart();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " A\u00D1ADIR AL CARRITO ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.showPopup);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.showPopup);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.product == null ? null : ctx.product.nombre);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.product);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.colors.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.formatPrice(ctx.product == null ? null : ctx.product.precio), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.product == null ? null : ctx.product.descripcion);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.colors.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.quantity);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 2007:
/*!***************************************************************************!*\
  !*** ./src/app/components/product/product-list/product-list.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductListComponent: () => (/* binding */ ProductListComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/product.service */ 6241);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/category.service */ 4354);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _product_popup_product_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product-popup/product-popup.component */ 893);









function ProductListComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Cargando productos...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ProductListComponent_div_2_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r6.currentCategory.descripcion);
  }
}
function ProductListComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ProductListComponent_div_2_p_3_Template, 2, 1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.currentCategory.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.currentCategory.descripcion);
  }
}
function ProductListComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Ver todo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ProductListComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Novedades");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ProductListComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "No se encontraron productos.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ProductListComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductListComponent_div_7_Template_div_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const product_r7 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.openProductPopup(product_r7, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("error", function ProductListComponent_div_7_Template_img_error_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.handleImageError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r7 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r5.productService.getProductImageSrc(product_r7), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", product_r7.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r7.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.formatPrice(product_r7.precio));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r7.descripcion);
  }
}
class ProductListComponent {
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
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd)).subscribe(() => {
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
    } else {
      // También obtener datos de la ruta para compatibilidad con data: { isViewAll: true }
      const routeData = this.route.snapshot.data;
      if (routeData && routeData['isViewAll']) {
        console.log('Detectado isViewAll en los datos de la ruta');
        this.isViewAll = true;
        this.categoryId = null;
        this.currentCategory = null;
        this.loadAllProducts();
      } else {
        this.isViewAll = false;
        const params = this.route.snapshot.params;
        if (params['id']) {
          this.categoryId = +params['id'];
          this.loadCategoryDetails();
          this.loadProductsByCategory();
        } else if (this.router.url === '/') {
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
        next: category => {
          this.currentCategory = category;
          // console.log('Categoría cargada:', category);
          this.loading = false;
        },
        error: error => {
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
        next: products => {
          if (Array.isArray(products) && products.length > 0) {
            this.products = products;
            // console.log('Productos cargados para categoría:', products);
          } else {
            this.products = [];
            // console.log('No se encontraron productos para esta categoría');
          }

          this.loading = false;
        },
        error: error => {
          // console.error(`Error al cargar productos para categoría ${this.categoryId}:`, error);
          this.products = [];
          this.loading = false;
        }
      });
    } else {
      this.loading = false;
    }
  }
  // Método para cargar todos los productos (para la vista "Ver Todo")
  loadAllProducts() {
    this.loading = true;
    // console.log('Cargando TODOS los productos para Ver Todo...');
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        // console.log('Todos los productos cargados:', products);
        this.loading = false;
      },
      error: error => {
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
      next: products => {
        this.products = products;
        // console.log('Productos destacados cargados:', products);
        this.loading = false;
      },
      error: error => {
        // console.error('Error al cargar productos destacados:', error);
        // Como alternativa, cargar algunos productos aleatorios
        this.loadSomeProducts();
      }
    });
  }
  // Método alternativo para cargar algunos productos (por si falla getFeaturedProducts)
  loadSomeProducts() {
    this.productService.getProducts().subscribe({
      next: products => {
        // Tomar solo algunos productos para mostrar (por ejemplo, 8)
        this.products = products.slice(0, 8);
        this.loading = false;
      },
      error: error => {
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

  static {
    this.ɵfac = function ProductListComponent_Factory(t) {
      return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_category_service__WEBPACK_IMPORTED_MODULE_1__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ProductListComponent,
      selectors: [["app-product-list"]],
      decls: 9,
      vars: 6,
      consts: [[1, "product-list-container"], ["class", "loading-indicator", 4, "ngIf"], ["class", "category-header", 4, "ngIf"], ["class", "no-products", 4, "ngIf"], ["id", "articulos"], ["class", "articulo", 3, "click", 4, "ngFor", "ngForOf"], [1, "loading-indicator"], [1, "category-header"], ["id", "titulo"], [4, "ngIf"], [1, "no-products"], [1, "articulo", 3, "click"], [3, "src", "alt", "error"], [1, "description"]],
      template: function ProductListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProductListComponent_div_1_Template, 3, 0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ProductListComponent_div_2_Template, 4, 2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ProductListComponent_div_3_Template, 3, 0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ProductListComponent_div_4_Template, 3, 0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ProductListComponent_div_5_Template, 3, 0, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ProductListComponent_div_7_Template, 8, 5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "app-product-popup");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentCategory && !ctx.isViewAll);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isViewAll);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.currentCategory && !ctx.isViewAll);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.products.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.products);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _product_popup_product_popup_component__WEBPACK_IMPORTED_MODULE_2__.ProductPopupComponent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 893:
/*!*****************************************************************************!*\
  !*** ./src/app/components/product/product-popup/product-popup.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductPopupComponent: () => (/* binding */ ProductPopupComponent)
/* harmony export */ });
/* harmony import */ var _helpers_product_image_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/product-image-helper */ 9504);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/product.service */ 6241);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/cart.service */ 6868);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);






function ProductPopupComponent_ng_container_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.getColorsMessage());
  }
}
function ProductPopupComponent_ng_container_2_div_16_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const color_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", color_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, color_r7), " ");
  }
}
function ProductPopupComponent_ng_container_2_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 21)(1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Selecciona un color:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProductPopupComponent_ng_container_2_div_16_Template_select_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.selectedColor = $event);
    })("ngModelChange", function ProductPopupComponent_ng_container_2_div_16_Template_select_ngModelChange_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.onColorChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ProductPopupComponent_ng_container_2_div_16_option_4_Template, 3, 4, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.selectedColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.availableColors);
  }
}
function ProductPopupComponent_ng_container_2_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Color:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 1, ctx_r3.selectedColor));
  }
}
function ProductPopupComponent_ng_container_2_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "A\u00D1ADIR AL CARRITO");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ProductPopupComponent_ng_container_2_span_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "CARGANDO...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ProductPopupComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 3)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductPopupComponent_ng_container_2_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.closePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5)(7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ProductPopupComponent_ng_container_2_div_9_Template, 3, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9)(11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ProductPopupComponent_ng_container_2_div_16_Template, 5, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, ProductPopupComponent_ng_container_2_div_17_Template, 6, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 14)(19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Cantidad:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 15)(22, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductPopupComponent_ng_container_2_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.decrementQuantity());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " \u2212 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProductPopupComponent_ng_container_2_Template_input_ngModelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.quantity = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductPopupComponent_ng_container_2_Template_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r15.incrementQuantity());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " + ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductPopupComponent_ng_container_2_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.addToCart());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, ProductPopupComponent_ng_container_2_span_28_Template, 2, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, ProductPopupComponent_ng_container_2_span_29_Template, 2, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.currentProduct.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r0.getImagePath(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", ctx_r0.currentProduct.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.availableColors.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](13, 13, ctx_r0.currentProduct.precio, "EUR", "symbol", "1.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.currentProduct.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.hasMultipleColors());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.hasMultipleColors() && ctx_r0.availableColors.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r0.quantity <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r0.loading || !ctx_r0.currentProduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.loading);
  }
}
class ProductPopupComponent {
  constructor(productService, cartService) {
    this.productService = productService;
    this.cartService = cartService;
    this.currentProduct = null;
    this.isOpen = false;
    this.quantity = 1;
    this.selectedColor = '';
    this.availableColors = [];
    this.loading = false;
    this.currentImageSrc = '';
    this.subscription = null;
  }
  ngOnInit() {
    // Suscripción al observable de producto seleccionado
    this.subscription = this.productService.selectedProduct$.subscribe(product => {
      if (product) {
        console.log('🛍️ ProductPopupComponent recibió producto:', product.nombre);
        this.currentProduct = product;
        this.isOpen = true;
        this.resetOptions();
        this.loadProductColors();
      } else {
        this.currentProduct = null;
        this.isOpen = false;
      }
    });
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  loadProductColors() {
    if (!this.currentProduct) return;
    this.loading = true;
    this.productService.getProductColors(this.currentProduct.id).subscribe({
      next: colors => {
        this.loading = false;
        let filteredColors = (colors || []).filter(c => !!c && c.toLowerCase() !== "default");
        // ✅ CORRECCIÓN: Lógica especial por nombre (case-insensitive)
        const nombre = (this.currentProduct?.nombre || "").toLowerCase();
        // ✅ Plug con corazón: SOLO caoba
        if (nombre.includes("plug con corazon") || nombre.includes("plug con corazón")) {
          console.log('🎯 Producto "Plug con corazón" detectado, forzando color caoba');
          filteredColors = ['caoba'];
        }
        // Otros productos específicos
        else if (nombre === "plug" || nombre === "plug de silicona" || nombre === "expander espiral" || nombre === "set de dilatadores" || nombre === "set de dilatadores 6 euros" || nombre === "set de dilatadores 9 euros" || nombre === "set de expanders curvados") {
          filteredColors = filteredColors.filter(c => c.toLowerCase() !== "default");
        }
        // Si se queda vacío, fallback "Estándar"
        if (filteredColors.length === 0) {
          filteredColors = ['Estándar'];
        }
        this.availableColors = filteredColors;
        this.selectedColor = filteredColors[0] || '';
        console.log('✅ Colores cargados:', this.availableColors, '| Seleccionado:', this.selectedColor);
        this.updateImageForSelectedColor();
      },
      error: err => {
        console.error('❌ Error cargando colores:', err);
        this.loading = false;
        // Fallback con la misma lógica
        const nombre = this.currentProduct?.nombre?.toLowerCase() || "";
        let fallbackColors = [];
        if (nombre.includes("plug con corazon") || nombre.includes("plug con corazón")) {
          console.log('🎯 Error en carga, forzando caoba para "Plug con corazón"');
          fallbackColors = ["caoba"];
        } else {
          fallbackColors = _helpers_product_image_helper__WEBPACK_IMPORTED_MODULE_0__.ProductImageHelper.getAvailableColors(this.currentProduct?.nombre || '').filter(c => !!c && c.toLowerCase() !== "default");
        }
        if (fallbackColors.length === 0) fallbackColors = ['Estándar'];
        this.availableColors = fallbackColors;
        this.selectedColor = fallbackColors[0] || '';
        console.log('✅ Colores fallback:', this.availableColors);
        this.updateImageForSelectedColor();
      }
    });
  }
  /** ✅ CORREGIDO: Método que usa el helper para construir la ruta correcta */
  updateImageForSelectedColor() {
    if (!this.currentProduct) return;
    console.log('🖼️ Actualizando imagen para:', {
      producto: this.currentProduct.nombre,
      color: this.selectedColor
    });
    // ✅ USAR EL HELPER EN LUGAR DE CONSTRUCCIÓN MANUAL
    this.currentImageSrc = _helpers_product_image_helper__WEBPACK_IMPORTED_MODULE_0__.ProductImageHelper.getProductImageSrc(this.currentProduct, this.selectedColor);
    console.log('✅ Imagen construida por helper:', this.currentImageSrc);
  }
  /** ✅ MEJORADO: Añadir al carrito con imagen correcta */
  addToCart() {
    if (!this.currentProduct) return;
    console.log('🛒 Añadiendo al carrito:', {
      producto: this.currentProduct.nombre,
      color: this.selectedColor,
      cantidad: this.quantity,
      imagen: this.currentImageSrc
    });
    // ✅ Crear una copia del producto con la imagen correcta
    const productWithImage = {
      ...this.currentProduct,
      imagenSeleccionada: this.currentImageSrc // Añadir campo extra con imagen
    };
    // Añadir al carrito
    this.cartService.addToCart(productWithImage, this.quantity, this.selectedColor);
    console.log(`✅ Producto añadido: ${this.currentProduct.nombre} - Color: ${this.selectedColor} - Cantidad: ${this.quantity}`);
    // Cerrar el popup
    this.closePopup();
  }
  /** Manejar cambio de color */
  onColorChange() {
    console.log('🎨 Color cambiado a:', this.selectedColor);
    this.updateImageForSelectedColor();
  }
  /** Cerrar el popup */
  closePopup() {
    console.log('🚪 Cerrando popup...');
    // Primero limpiar el producto actual para ocultar el modal
    this.currentProduct = null;
    this.isOpen = false;
    // Luego limpiar el servicio
    this.productService.clearSelectedProduct();
  }
  /** Incrementar cantidad */
  incrementQuantity() {
    if (this.quantity < 99) {
      this.quantity++;
    }
  }
  /** Decrementar cantidad (mínimo 1) */
  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  /** Resetear opciones al abrir el popup */
  resetOptions() {
    this.quantity = 1;
    this.selectedColor = '';
    this.availableColors = [];
    this.currentImageSrc = '';
  }
  /** Método para obtener la imagen con el color seleccionado */
  getImagePath() {
    if (this.currentImageSrc) {
      return this.currentImageSrc;
    }
    if (!this.currentProduct) {
      return 'assets/images/default.jpg';
    }
    return _helpers_product_image_helper__WEBPACK_IMPORTED_MODULE_0__.ProductImageHelper.getProductImageSrc(this.currentProduct, this.selectedColor);
  }
  /** Verificar si hay múltiples colores disponibles */
  hasMultipleColors() {
    return this.availableColors.length > 1;
  }
  /** Obtener mensaje de colores disponibles */
  getColorsMessage() {
    if (this.availableColors.length <= 1) {
      return 'Color único disponible';
    }
    return `${this.availableColors.length} colores disponibles`;
  }
  static {
    this.ɵfac = function ProductPopupComponent_Factory(t) {
      return new (t || ProductPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ProductPopupComponent,
      selectors: [["app-product-popup"]],
      decls: 3,
      vars: 5,
      consts: [[1, "product-overlay"], [1, "product-popup"], [4, "ngIf"], [1, "product-header"], ["aria-label", "Cerrar ventana", 1, "close-product", 3, "click"], [1, "product-content"], [1, "product-image-container"], [1, "product-image", 3, "src", "alt"], ["class", "colors-indicator", 4, "ngIf"], [1, "product-details"], [1, "product-price"], [1, "product-description"], ["class", "color-selector", 4, "ngIf"], ["class", "single-color-display", 4, "ngIf"], [1, "quantity-selector"], [1, "quantity-controls"], ["type", "button", "aria-label", "Disminuir", 1, "quantity-btn", 3, "disabled", "click"], ["type", "number", "min", "1", "max", "99", "readonly", "", 1, "quantity-input", 3, "ngModel", "ngModelChange"], ["type", "button", "aria-label", "Aumentar", 1, "quantity-btn", 3, "click"], [1, "add-to-cart-btn", 3, "disabled", "click"], [1, "colors-indicator"], [1, "color-selector"], ["for", "color-select"], ["id", "color-select", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "single-color-display"], [1, "color-badge"]],
      template: function ProductPopupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ProductPopupComponent_ng_container_2_Template, 30, 18, "ng-container", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.currentProduct !== null);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.currentProduct !== null);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentProduct);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe],
      styles: ["@charset \"UTF-8\";\n\n\n\n\n.product-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 999;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.3s ease, visibility 0.3s ease;\n}\n\n.product-overlay.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n\n\n\n.product-popup[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0.95);\n  background-color: white;\n  z-index: 9999;\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  max-width: 500px;\n  max-height: 90vh;\n  border-radius: 10px;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n  overflow: hidden;\n}\n.product-popup.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: translate(-50%, -50%) scale(1);\n}\n\n\n\n.product-popup[_ngcontent-%COMP%], .product-popup[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif !important;\n  color: #434d56;\n  font-weight: 400;\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n  box-sizing: border-box;\n}\n\n\n\n.product-popup[_ngcontent-%COMP%]   .product-header[_ngcontent-%COMP%] {\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center !important;\n  padding: 15px 20px !important;\n  border-bottom: 1px solid #eaeaea !important;\n  background-color: #52667a !important;\n  color: white !important;\n  position: relative !important;\n}\n.product-popup[_ngcontent-%COMP%]   .product-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  font-size: 20px !important;\n  font-weight: 500 !important;\n  color: white !important;\n  text-align: center !important;\n}\n\n\n\n.product-popup[_ngcontent-%COMP%]   .close-product[_ngcontent-%COMP%] {\n  background: none !important;\n  border: none !important;\n  color: white !important;\n  font-size: 28px !important;\n  cursor: pointer !important;\n  padding: 0 !important;\n  line-height: 0.8 !important;\n  transition: transform 0.2s !important;\n  position: absolute !important;\n  top: 50% !important;\n  right: 20px !important;\n  transform: translateY(-50%) !important;\n  width: auto !important;\n  height: auto !important;\n}\n.product-popup[_ngcontent-%COMP%]   .close-product[_ngcontent-%COMP%]:hover {\n  transform: translateY(-50%) scale(1.2) !important;\n}\n\n\n\n.product-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  padding: 28px 32px 24px 32px;\n  overflow-y: auto;\n  flex: 1;\n}\n\n\n\n.product-image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .product-image[_ngcontent-%COMP%] {\n  max-width: 260px;\n  width: 100%;\n  height: auto;\n  margin: 0 auto 4px auto;\n  display: block;\n}\n\n\n\n.colors-indicator[_ngcontent-%COMP%] {\n  font-size: 16px;\n  text-align: center;\n  margin: 16px 0 0 0;\n  opacity: 0.72;\n  font-style: italic;\n}\n\n\n\n.product-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n\n\n.product-price[_ngcontent-%COMP%] {\n  font-size: 2rem !important;\n  font-weight: bold;\n  color: #2c5f8d;\n  margin: 0;\n  text-align: center;\n}\n\n\n\n.product-description[_ngcontent-%COMP%] {\n  color: #666;\n  line-height: 1.6;\n  margin: 0;\n  font-size: 15px !important;\n}\n\n\n\n.color-selector[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  margin-top: 22px;\n}\n\n.color-selector[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 220px;\n  text-align: center;\n  font-size: 16px !important;\n  padding: 10px 15px;\n  border-radius: 8px;\n  border: 1px solid #ddd;\n  background: #fff;\n  color: #434d56;\n}\n\n\n\n.single-color-display[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.single-color-display[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n  font-size: 14px !important;\n}\n.single-color-display[_ngcontent-%COMP%]   .color-badge[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  padding: 5px 12px;\n  border-radius: 15px;\n  font-size: 14px !important;\n  color: #333;\n  border: 1px solid #ddd;\n}\n\n\n\n.quantity-selector[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n.quantity-selector[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n  font-size: 14px !important;\n}\n\n\n\n.quantity-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  width: -moz-fit-content;\n  width: fit-content;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.quantity-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-color: #f5f5f5;\n  border: none;\n  font-size: 20px !important;\n  font-weight: bold;\n  cursor: pointer;\n  transition: background-color 0.2s;\n  color: #333;\n}\n.quantity-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #e0e0e0;\n}\n.quantity-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  background-color: #d0d0d0;\n}\n.quantity-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.quantity-btn[_ngcontent-%COMP%]:first-child {\n  border-right: 1px solid #ddd;\n}\n.quantity-btn[_ngcontent-%COMP%]:last-child {\n  border-left: 1px solid #ddd;\n}\n\n.quantity-input[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 40px;\n  border: none;\n  text-align: center;\n  font-size: 16px !important;\n  font-weight: bold;\n  background-color: white;\n  color: #333;\n  -moz-appearance: textfield;\n}\n.quantity-input[_ngcontent-%COMP%]::-webkit-inner-spin-button, .quantity-input[_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n\n\n.add-to-cart-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 16px 0;\n  background: #52667a;\n  color: white !important;\n  font-size: 16px !important;\n  font-weight: 600;\n  border: none;\n  border-radius: 8px;\n  text-align: center;\n  letter-spacing: 0.02em;\n  cursor: pointer;\n  transition: background 0.2s, transform 0.12s;\n}\n.add-to-cart-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: white !important;\n}\n.add-to-cart-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #3d4d5c;\n  color: white !important;\n}\n.add-to-cart-btn[_ngcontent-%COMP%]:hover:not(:disabled)   span[_ngcontent-%COMP%] {\n  color: white !important;\n}\n.add-to-cart-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  color: white !important;\n  background: #52667a;\n  cursor: not-allowed;\n}\n.add-to-cart-btn[_ngcontent-%COMP%]:disabled   span[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\n\n\n@media (max-width: 768px) {\n  .product-popup[_ngcontent-%COMP%] {\n    width: 98%;\n    max-height: 95vh;\n  }\n  .product-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 20px;\n    gap: 20px;\n  }\n  .product-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n  .product-price[_ngcontent-%COMP%] {\n    font-size: 24px !important;\n  }\n  .product-image[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n\n\n@media (max-width: 480px) {\n  .product-popup[_ngcontent-%COMP%] {\n    width: 99%;\n    max-height: 98vh;\n    border-radius: 8px;\n  }\n  .product-header[_ngcontent-%COMP%] {\n    padding: 12px 14px !important;\n  }\n  .product-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px !important;\n  }\n  .close-product[_ngcontent-%COMP%] {\n    font-size: 24px !important;\n  }\n  .product-content[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .product-price[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n  .add-to-cart-btn[_ngcontent-%COMP%] {\n    padding: 11px 16px;\n    font-size: 14px !important;\n  }\n  .quantity-btn[_ngcontent-%COMP%] {\n    width: 36px;\n    height: 36px;\n    font-size: 18px !important;\n  }\n  .quantity-input[_ngcontent-%COMP%] {\n    width: 48px;\n    height: 36px;\n    font-size: 14px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uLy4uL2FuZ3VsYXIlMjAxOS80MCUyMHRhdG9vZGVuZGElMjBhcnN5cy9mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LXBvcHVwL3Byb2R1Y3QtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LXBvcHVwL3Byb2R1Y3QtcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLGNBQUE7QUFJQSwyQkFBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtREFBQTtBRERGOztBQ0dBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FEQUY7O0FDR0EsbUNBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDRDQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBREFGO0FDRUU7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtBREFKOztBQ0lBLG9DQUFBO0FBQ0E7O0VBRUUsZ0RBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0VBQ0Esc0JBQUE7QURERjs7QUNJQSxtREFBQTtBQUNBO0VBQ0Usd0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtBRERGO0FDR0U7RUFDRSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0FEREo7O0FDS0Esb0RBQUE7QUFDQTtFQUNFLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QURGRjtBQ0lFO0VBQ0UsaURBQUE7QURGSjs7QUNNQSx3QkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxPQUFBO0FESEY7O0FDTUEseUJBQUE7QUFDQTs7RUFFRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FESEY7O0FDTUEseUJBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FESEY7O0FDTUEsMEJBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QURIRjs7QUNNQSxXQUFBO0FBQ0E7RUFDRSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBREhGOztBQ01BLGdCQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsMEJBQUE7QURIRjs7QUNNQSxrQ0FBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QURIRjs7QUNLQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FERkY7O0FDS0EsMkJBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QURGRjtBQ0dFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QURESjtBQ0dFO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QURESjs7QUNLQSx5QkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FERkY7QUNHRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FEREo7O0FDS0EsMEJBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLE1BQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FERkY7O0FDSUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0FEREY7QUNFRTtFQUNFLHlCQUFBO0FEQUo7QUNFRTtFQUNFLHlCQUFBO0FEQUo7QUNFRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBREFKO0FDRUU7RUFDRSw0QkFBQTtBREFKO0FDRUU7RUFDRSwyQkFBQTtBREFKOztBQ0dBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBTUEsMEJBQUE7QURMRjtBQ0FFO0VBRUUsd0JBQUE7RUFDQSxTQUFBO0FEQ0o7O0FDSUEsNEJBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBeFFRO0VBeVFSLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsNENBQUE7QURERjtBQ0dFO0VBQ0UsdUJBQUE7QURESjtBQ0lFO0VBQ0UsbUJBdlJXO0VBd1JYLHVCQUFBO0FERko7QUNJSTtFQUNFLHVCQUFBO0FERk47QUNLRTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQWxTTTtFQW1TTixtQkFBQTtBREhKO0FDS0k7RUFDRSx1QkFBQTtBREhOOztBQ1FBLHlCQUFBO0FBQ0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxnQkFBQTtFRExGO0VDT0E7SUFDRSxzQkFBQTtJQUNBLGFBQUE7SUFDQSxTQUFBO0VETEY7RUNPQTtJQUNFLDBCQUFBO0VETEY7RUNPQTtJQUNFLDBCQUFBO0VETEY7RUNPQTtJQUNFLGVBQUE7RURMRjtBQUNGO0FDUUEseUJBQUE7QUFDQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7RURORjtFQ1FBO0lBQ0UsNkJBQUE7RURORjtFQ1FBO0lBQ0UsMEJBQUE7RURORjtFQ1FBO0lBQ0UsMEJBQUE7RURORjtFQ1FBO0lBQ0UsYUFBQTtFRE5GO0VDUUE7SUFDRSwwQkFBQTtFRE5GO0VDUUE7SUFDRSxrQkFBQTtJQUNBLDBCQUFBO0VETkY7RUNRQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsMEJBQUE7RURORjtFQ1FBO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSwwQkFBQTtFRE5GO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiBWYXJpYWJsZXMgKi9cbi8qIE92ZXJsYXkgLSBGb25kbyBvc2N1cm8gKi9cbi5wcm9kdWN0LW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB6LWluZGV4OiA5OTk7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UsIHZpc2liaWxpdHkgMC4zcyBlYXNlO1xufVxuXG4ucHJvZHVjdC1vdmVybGF5LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi8qIENvbnRlbmVkb3IgcHJpbmNpcGFsIGRlbCBwb3B1cCAqL1xuLnByb2R1Y3QtcG9wdXAge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAuOTUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogOTk5OTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWF4LWhlaWdodDogOTB2aDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5wcm9kdWN0LXBvcHVwLmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xufVxuXG4vKiBFc3RpbG9zIGdlbmVyYWxlcyBwYXJhIGVsIHBvcHVwICovXG4ucHJvZHVjdC1wb3B1cCxcbi5wcm9kdWN0LXBvcHVwICoge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgY29sb3I6ICM0MzRkNTY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBDYWJlY2VyYSBkZWwgcG9wdXAgLSBFU1RJTE9TIElEw4PCiU5USUNPUyBBTCBDQVJUICovXG4ucHJvZHVjdC1wb3B1cCAucHJvZHVjdC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTVweCAyMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWFlYWVhICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjY2N2EgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xufVxuLnByb2R1Y3QtcG9wdXAgLnByb2R1Y3QtaGVhZGVyIGgyIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLyogQm90w4PCs24gZGUgY2llcnJlIChYKSAtIEVTVElMT1MgSUTDg8KJTlRJQ09TIEFMIENBUlQgKi9cbi5wcm9kdWN0LXBvcHVwIC5jbG9zZS1wcm9kdWN0IHtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjhweCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMC44ICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICB0b3A6IDUwJSAhaW1wb3J0YW50O1xuICByaWdodDogMjBweCAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgIWltcG9ydGFudDtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG4ucHJvZHVjdC1wb3B1cCAuY2xvc2UtcHJvZHVjdDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgxLjIpICFpbXBvcnRhbnQ7XG59XG5cbi8qIENvbnRlbmlkbyBkZWwgcG9wdXAgKi9cbi5wcm9kdWN0LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE4cHg7XG4gIHBhZGRpbmc6IDI4cHggMzJweCAyNHB4IDMycHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGZsZXg6IDE7XG59XG5cbi8qIENvbnRlbmVkb3IgZGUgaW1hZ2VuICovXG4ucHJvZHVjdC1pbWFnZS1jb250YWluZXIgaW1nLFxuLnByb2R1Y3QtaW1hZ2Uge1xuICBtYXgtd2lkdGg6IDI2MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDAgYXV0byA0cHggYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIEluZGljYWRvciBkZSBjb2xvcmVzICovXG4uY29sb3JzLWluZGljYXRvciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDE2cHggMCAwIDA7XG4gIG9wYWNpdHk6IDAuNzI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLyogRGV0YWxsZXMgZGVsIHByb2R1Y3RvICovXG4ucHJvZHVjdC1kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4vKiBQcmVjaW8gKi9cbi5wcm9kdWN0LXByaWNlIHtcbiAgZm9udC1zaXplOiAycmVtICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzJjNWY4ZDtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIERlc2NyaXBjacODwrNuICovXG4ucHJvZHVjdC1kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiAjNjY2O1xuICBsaW5lLWhlaWdodDogMS42O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4vKiBDb21ibyBjZW50cmFkbyB5IGFuY2hvIGdyYW5kZSAqL1xuLmNvbG9yLXNlbGVjdG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAyMnB4O1xufVxuXG4uY29sb3Itc2VsZWN0b3Igc2VsZWN0IHtcbiAgd2lkdGg6IDIyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICM0MzRkNTY7XG59XG5cbi8qIERpc3BsYXkgZGUgY29sb3Igw4PCum5pY28gKi9cbi5zaW5nbGUtY29sb3ItZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cbi5zaW5nbGUtY29sb3ItZGlzcGxheSBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn1cbi5zaW5nbGUtY29sb3ItZGlzcGxheSAuY29sb3ItYmFkZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICBwYWRkaW5nOiA1cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMzMzO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xufVxuXG4vKiBTZWxlY3RvciBkZSBjYW50aWRhZCAqL1xuLnF1YW50aXR5LXNlbGVjdG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuLnF1YW50aXR5LXNlbGVjdG9yIGxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xufVxuXG4vKiBDb250cm9sZXMgZGUgY2FudGlkYWQgKi9cbi5xdWFudGl0eS1jb250cm9scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5xdWFudGl0eS1idG4ge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG4gIGNvbG9yOiAjMzMzO1xufVxuLnF1YW50aXR5LWJ0bjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG59XG4ucXVhbnRpdHktYnRuOmFjdGl2ZTpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMGQwZDA7XG59XG4ucXVhbnRpdHktYnRuOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC40O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuLnF1YW50aXR5LWJ0bjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGQ7XG59XG4ucXVhbnRpdHktYnRuOmxhc3QtY2hpbGQge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5xdWFudGl0eS1pbnB1dCB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzMzMztcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG4ucXVhbnRpdHktaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sIC5xdWFudGl0eS1pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBCb3TDg8KzbiBhw4PCsWFkaXIgYWwgY2Fycml0byAqL1xuLmFkZC10by1jYXJ0LWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNnB4IDA7XG4gIGJhY2tncm91bmQ6ICM1MjY2N2E7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMsIHRyYW5zZm9ybSAwLjEycztcbn1cbi5hZGQtdG8tY2FydC1idG4gc3BhbiB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuLmFkZC10by1jYXJ0LWJ0bjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQ6ICMzZDRkNWM7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuLmFkZC10by1jYXJ0LWJ0bjpob3Zlcjpub3QoOmRpc2FibGVkKSBzcGFuIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4uYWRkLXRvLWNhcnQtYnRuOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzUyNjY3YTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi5hZGQtdG8tY2FydC1idG46ZGlzYWJsZWQgc3BhbiB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4vKiBSZXNwb25zaXZlIC0gVGFibGV0cyAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wcm9kdWN0LXBvcHVwIHtcbiAgICB3aWR0aDogOTglO1xuICAgIG1heC1oZWlnaHQ6IDk1dmg7XG4gIH1cbiAgLnByb2R1Y3QtY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGdhcDogMjBweDtcbiAgfVxuICAucHJvZHVjdC1oZWFkZXIgaDIge1xuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5wcm9kdWN0LXByaWNlIHtcbiAgICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbiAgfVxuICAucHJvZHVjdC1pbWFnZSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59XG4vKiBSZXNwb25zaXZlIC0gTcODwrN2aWxlcyAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5wcm9kdWN0LXBvcHVwIHtcbiAgICB3aWR0aDogOTklO1xuICAgIG1heC1oZWlnaHQ6IDk4dmg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB9XG4gIC5wcm9kdWN0LWhlYWRlciB7XG4gICAgcGFkZGluZzogMTJweCAxNHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnByb2R1Y3QtaGVhZGVyIGgyIHtcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgfVxuICAuY2xvc2UtcHJvZHVjdCB7XG4gICAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnByb2R1Y3QtY29udGVudCB7XG4gICAgcGFkZGluZzogMTJweDtcbiAgfVxuICAucHJvZHVjdC1wcmljZSB7XG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFkZC10by1jYXJ0LWJ0biB7XG4gICAgcGFkZGluZzogMTFweCAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICB9XG4gIC5xdWFudGl0eS1idG4ge1xuICAgIHdpZHRoOiAzNnB4O1xuICAgIGhlaWdodDogMzZweDtcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgfVxuICAucXVhbnRpdHktaW5wdXQge1xuICAgIHdpZHRoOiA0OHB4O1xuICAgIGhlaWdodDogMzZweDtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgfVxufSIsIi8qIFZhcmlhYmxlcyAqL1xuJHByaW1hcnk6ICM1MjY2N2E7XG4kcHJpbWFyeS1kYXJrOiAjM2Q0ZDVjO1xuXG4vKiBPdmVybGF5IC0gRm9uZG8gb3NjdXJvICovXG4ucHJvZHVjdC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgei1pbmRleDogOTk5O1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLCB2aXNpYmlsaXR5IDAuM3MgZWFzZTtcbn1cbi5wcm9kdWN0LW92ZXJsYXkuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLyogQ29udGVuZWRvciBwcmluY2lwYWwgZGVsIHBvcHVwICovXG4ucHJvZHVjdC1wb3B1cCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC45NSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiA5OTk5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBtYXgtaGVpZ2h0OiA5MHZoO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDVweCAyMHB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBcbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcbiAgfVxufVxuXG4vKiBFc3RpbG9zIGdlbmVyYWxlcyBwYXJhIGVsIHBvcHVwICovXG4ucHJvZHVjdC1wb3B1cCxcbi5wcm9kdWN0LXBvcHVwICoge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNDM0ZDU2O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogQ2FiZWNlcmEgZGVsIHBvcHVwIC0gRVNUSUxPUyBJRMODwolOVElDT1MgQUwgQ0FSVCAqL1xuLnByb2R1Y3QtcG9wdXAgLnByb2R1Y3QtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDE1cHggMjBweCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VhZWFlYSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gIFxuICBoMiB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8qIEJvdMODwrNuIGRlIGNpZXJyZSAoWCkgLSBFU1RJTE9TIElEw4PCiU5USUNPUyBBTCBDQVJUICovXG4ucHJvZHVjdC1wb3B1cCAuY2xvc2UtcHJvZHVjdCB7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDI4cHggIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDAuOCAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgdG9wOiA1MCUgIWltcG9ydGFudDtcbiAgcmlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgxLjIpICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLyogQ29udGVuaWRvIGRlbCBwb3B1cCAqL1xuLnByb2R1Y3QtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMThweDtcbiAgcGFkZGluZzogMjhweCAzMnB4IDI0cHggMzJweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgZmxleDogMTtcbn1cblxuLyogQ29udGVuZWRvciBkZSBpbWFnZW4gKi9cbi5wcm9kdWN0LWltYWdlLWNvbnRhaW5lciBpbWcsXG4ucHJvZHVjdC1pbWFnZSB7XG4gIG1heC13aWR0aDogMjYwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvIDRweCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogSW5kaWNhZG9yIGRlIGNvbG9yZXMgKi9cbi5jb2xvcnMtaW5kaWNhdG9yIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTZweCAwIDAgMDtcbiAgb3BhY2l0eTogMC43MjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4vKiBEZXRhbGxlcyBkZWwgcHJvZHVjdG8gKi9cbi5wcm9kdWN0LWRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIwcHg7XG59XG5cbi8qIFByZWNpbyAqL1xuLnByb2R1Y3QtcHJpY2Uge1xuICBmb250LXNpemU6IDJyZW0gIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMmM1ZjhkO1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogRGVzY3JpcGNpw4PCs24gKi9cbi5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6ICM2NjY7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi8qIENvbWJvIGNlbnRyYWRvIHkgYW5jaG8gZ3JhbmRlICovXG4uY29sb3Itc2VsZWN0b3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDIycHg7XG59XG4uY29sb3Itc2VsZWN0b3Igc2VsZWN0IHtcbiAgd2lkdGg6IDIyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICM0MzRkNTY7XG59XG5cbi8qIERpc3BsYXkgZGUgY29sb3Igw4PCum5pY28gKi9cbi5zaW5nbGUtY29sb3ItZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNvbG9yLWJhZGdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgfVxufVxuXG4vKiBTZWxlY3RvciBkZSBjYW50aWRhZCAqL1xuLnF1YW50aXR5LXNlbGVjdG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBsYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgfVxufVxuXG4vKiBDb250cm9sZXMgZGUgY2FudGlkYWQgKi9cbi5xdWFudGl0eS1jb250cm9scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucXVhbnRpdHktYnRuIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuICBjb2xvcjogIzMzMztcbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbiAgfVxuICAmOmFjdGl2ZTpub3QoOmRpc2FibGVkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QwZDBkMDtcbiAgfVxuICAmOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgfVxuICAmOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkO1xuICB9XG4gICY6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGRkO1xuICB9XG59XG4ucXVhbnRpdHktaW5wdXQge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICMzMzM7XG4gICY6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG4gICY6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG5cbi8qIEJvdMODwrNuIGHDg8KxYWRpciBhbCBjYXJyaXRvICovXG4uYWRkLXRvLWNhcnQtYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE2cHggMDtcbiAgYmFja2dyb3VuZDogJHByaW1hcnk7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMsIHRyYW5zZm9ybSAwLjEycztcbiAgXG4gIHNwYW4ge1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1kYXJrO1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIFxuICAgIHNwYW4ge1xuICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gICY6ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIFxuICAgIHNwYW4ge1xuICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi8qIFJlc3BvbnNpdmUgLSBUYWJsZXRzICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnByb2R1Y3QtcG9wdXAge1xuICAgIHdpZHRoOiA5OCU7XG4gICAgbWF4LWhlaWdodDogOTV2aDtcbiAgfVxuICAucHJvZHVjdC1jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZ2FwOiAyMHB4O1xuICB9XG4gIC5wcm9kdWN0LWhlYWRlciBoMiB7XG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnByb2R1Y3QtcHJpY2Uge1xuICAgIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xuICB9XG4gIC5wcm9kdWN0LWltYWdlIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLyogUmVzcG9uc2l2ZSAtIE3Dg8KzdmlsZXMgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAucHJvZHVjdC1wb3B1cCB7XG4gICAgd2lkdGg6IDk5JTtcbiAgICBtYXgtaGVpZ2h0OiA5OHZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgfVxuICAucHJvZHVjdC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDEycHggMTRweCAhaW1wb3J0YW50O1xuICB9XG4gIC5wcm9kdWN0LWhlYWRlciBoMiB7XG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNsb3NlLXByb2R1Y3Qge1xuICAgIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xuICB9XG4gIC5wcm9kdWN0LWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDEycHg7XG4gIH1cbiAgLnByb2R1Y3QtcHJpY2Uge1xuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5hZGQtdG8tY2FydC1idG4ge1xuICAgIHBhZGRpbmc6IDExcHggMTZweDtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgfVxuICAucXVhbnRpdHktYnRuIHtcbiAgICB3aWR0aDogMzZweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnF1YW50aXR5LWlucHV0IHtcbiAgICB3aWR0aDogNDhweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 513:
/*!*******************************************************************************!*\
  !*** ./src/app/components/product/search-results/search-results.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchResultsComponent: () => (/* binding */ SearchResultsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/product.service */ 6241);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _product_popup_product_popup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product-popup/product-popup.component */ 893);





function SearchResultsComponent_h1_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" resultados de la b\u00FAsqueda para \"", ctx_r0.searchTerm, "\" ");
  }
}
function SearchResultsComponent_h1_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " no se han encontrado productos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SearchResultsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Buscando productos...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SearchResultsComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Intenta con otros t\u00E9rminos de b\u00FAsqueda como:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul")(4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "anillo, banana, labret, barbell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "plug, t\u00FAnel, expander");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "piercing, dilataci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function SearchResultsComponent_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchResultsComponent_div_6_div_1_Template_div_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const product_r6 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.openProductPopup(product_r6, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("error", function SearchResultsComponent_div_6_div_1_Template_img_error_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.handleImageError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r5.productService.getProductImageSrc(product_r6), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", product_r6.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r6.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.formatPrice(product_r6.precio));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r6.descripcion);
  }
}
function SearchResultsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SearchResultsComponent_div_6_div_1_Template, 8, 5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.products);
  }
}
class SearchResultsComponent {
  constructor(route, productService // ✅ Hacer público para usar en template
  ) {
    this.route = route;
    this.productService = productService;
    // Array para almacenar los productos encontrados
    this.products = [];
    // Variable para almacenar el término de búsqueda
    this.searchTerm = '';
    // Variable para controlar el estado de carga
    this.loading = true;
  }
  ngOnInit() {
    // Suscribirse a los cambios en los parámetros de consulta (query parameters)
    this.route.queryParams.subscribe({
      next: params => {
        // Obtener el término de búsqueda de los parámetros
        this.searchTerm = params['term'] || '';
        console.log('🔍 SearchResultsComponent - Término recibido:', this.searchTerm);
        // Si hay un término de búsqueda, buscar productos
        if (this.searchTerm) {
          this.searchProducts();
        } else {
          // Si no hay término, inicializar con array vacío
          this.products = [];
          this.loading = false;
        }
      }
    });
  }
  // ✅ Método para buscar productos
  searchProducts() {
    this.loading = true;
    console.log('🔍 Iniciando búsqueda para:', this.searchTerm);
    // Llamar al servicio para buscar productos
    this.productService.searchProducts(this.searchTerm).subscribe({
      next: products => {
        console.log('✅ Productos recibidos:', products.length);
        // Almacenar los productos encontrados
        this.products = products;
        this.loading = false;
      },
      error: error => {
        console.error('❌ Error searching products', error);
        this.products = [];
        this.loading = false;
      }
    });
  }
  // ✅ Método auxiliar para formatear precios como moneda
  formatPrice(price) {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR'
    }).format(price);
  }
  // ✅ Método para abrir popup de producto
  openProductPopup(product, event) {
    // Prevenir la navegación por defecto
    event.preventDefault();
    event.stopPropagation();
    console.log('🔍 SearchResults: Abriendo popup para producto:', product.nombre);
    // Usar el servicio para mostrar el popup
    this.productService.selectProductForPopup(product);
  }
  // ✅ Método para manejar errores de carga de imágenes
  handleImageError(event) {
    this.productService.handleImageError(event);
  }
  static {
    this.ɵfac = function SearchResultsComponent_Factory(t) {
      return new (t || SearchResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: SearchResultsComponent,
      selectors: [["app-search-results"]],
      decls: 8,
      vars: 5,
      consts: [[1, "search-results-container"], [1, "category-header"], ["id", "titulo", 4, "ngIf"], ["class", "loading-indicator", 4, "ngIf"], ["class", "no-results", 4, "ngIf"], ["id", "articulos", 4, "ngIf"], ["id", "titulo"], [1, "loading-indicator"], [1, "spinner"], [1, "no-results"], ["id", "articulos"], ["class", "articulo", 3, "click", 4, "ngFor", "ngForOf"], [1, "articulo", 3, "click"], [3, "src", "alt", "error"], [1, "description"]],
      template: function SearchResultsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SearchResultsComponent_h1_2_Template, 2, 1, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SearchResultsComponent_h1_3_Template, 2, 0, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SearchResultsComponent_div_4_Template, 4, 0, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SearchResultsComponent_div_5_Template, 10, 0, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SearchResultsComponent_div_6_Template, 2, 1, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "app-product-popup");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.products.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.products.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.products.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.products.length > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _product_popup_product_popup_component__WEBPACK_IMPORTED_MODULE_1__.ProductPopupComponent],
      styles: ["@charset \"UTF-8\";\n.search-results-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n  font-family: Arial, sans-serif;\n}\n\n.category-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 15px;\n}\n.category-header[_ngcontent-%COMP%]   #titulo[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-family: \"Brush Script MT\", cursive;\n  color: #333;\n  margin-bottom: 15px;\n  font-weight: normal;\n  font-style: italic;\n}\n.category-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 1rem;\n}\n\n.loading-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 50px 0;\n}\n.loading-indicator[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #666;\n  margin-bottom: 15px;\n}\n.loading-indicator[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #3498db;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 15px;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.no-results[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 50px 0;\n  color: #666;\n}\n.no-results[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin: 10px 0;\n}\n.no-results[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 20px;\n  text-align: center;\n  display: inline-block;\n}\n.no-results[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 8px 0;\n  color: #666;\n  font-size: 1rem;\n}\n.no-results[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  content: \"\u2022 \";\n  margin-right: 5px;\n}\n\n#articulos[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: 30px;\n  margin-top: 30px;\n}\n#articulos[_ngcontent-%COMP%]   .articulo[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  border-radius: 0 !important;\n  overflow: visible !important;\n  transition: none !important;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  border: none !important;\n  box-shadow: none !important;\n  margin: 5px 10px;\n  padding: 10px;\n  width: 230px;\n}\n#articulos[_ngcontent-%COMP%]   .articulo[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: none !important;\n}\n#articulos[_ngcontent-%COMP%]   .articulo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px !important;\n  height: 150px !important;\n  object-fit: contain;\n  transition: none !important;\n  background-color: transparent !important;\n  margin: 0 auto;\n}\n#articulos[_ngcontent-%COMP%]   .articulo[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: none !important;\n}\n#articulos[_ngcontent-%COMP%]   .articulo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.4em !important;\n  margin: 10px 0 8px 0 !important;\n  color: #333;\n  font-weight: normal !important;\n  padding: 0 !important;\n  overflow: visible;\n  white-space: normal;\n  word-wrap: break-word;\n  text-overflow: clip;\n  text-align: center !important;\n}\n#articulos[_ngcontent-%COMP%]   .articulo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: normal !important;\n  color: #000;\n  font-size: 1.3em !important;\n  display: block;\n  margin: 5px 0 !important;\n  padding: 0 15px !important;\n  text-align: center !important;\n}\n#articulos[_ngcontent-%COMP%]   .articulo[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%], #articulos[_ngcontent-%COMP%]   .articulo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 1.1em !important;\n  margin: 10px auto 0 !important;\n  padding: 0 !important;\n  line-height: 1.5 !important;\n  width: 100%;\n  overflow: visible !important;\n  white-space: normal;\n  word-wrap: break-word;\n  text-align: justify !important;\n  text-overflow: clip;\n}\n\n@media (max-width: 768px) {\n  #articulos[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    gap: 20px;\n  }\n  #articulos[_ngcontent-%COMP%]   .articulo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 200px;\n  }\n  .category-header[_ngcontent-%COMP%]   #titulo[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n@media (max-width: 480px) {\n  #articulos[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n    gap: 15px;\n  }\n  #articulos[_ngcontent-%COMP%]   .articulo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 150px;\n  }\n  #articulos[_ngcontent-%COMP%]   .articulo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  #articulos[_ngcontent-%COMP%]   .articulo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uLy4uL2FuZ3VsYXIlMjAxOS80MCUyMHRhdG9vZGVuZGElMjBhcnN5cy9mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC9zZWFyY2gtcmVzdWx0cy9zZWFyY2gtcmVzdWx0cy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0L3NlYXJjaC1yZXN1bHRzL3NlYXJjaC1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0doQjtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBRERGOztBQ0tBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBREZGO0FDSUU7RUFDRSxpQkFBQTtFQUNBLHVDQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBREZKO0FDS0U7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBREhKOztBQ1FBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QURMRjtBQ09FO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QURMSjtBQ1FFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0FETko7O0FDVUE7RUFDRTtJQUFLLHVCQUFBO0VETkw7RUNPQTtJQUFPLHlCQUFBO0VESlA7QUFDRjtBQ09BO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBRExGO0FDT0U7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QURMSjtBQ1FFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBRE5KO0FDUUk7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUROTjtBQ1FNO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FETlI7O0FDYUE7RUFDRSxhQUFBO0VBQ0EsNERBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QURWRjtBQ1lFO0VBQ0Usd0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QURWSjtBQ1lJO0VBQ0Usc0JBQUE7RUFDQSwyQkFBQTtBRFZOO0FDYUk7RUFDRSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHdDQUFBO0VBQ0EsY0FBQTtBRFhOO0FDY0k7RUFDRSwwQkFBQTtBRFpOO0FDZ0JJO0VBQ0UsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBRGROO0FDaUJJO0VBQ0UsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0FEZk47QUNrQkk7O0VBRUUsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QURoQk47O0FDdUJBO0VBQ0U7SUFDRSw0REFBQTtJQUNBLFNBQUE7RURwQkY7RUN1Qkk7SUFDRSxhQUFBO0VEckJOO0VDMEJBO0lBQ0UsZUFBQTtFRHhCRjtBQUNGO0FDMkJBO0VBQ0U7SUFDRSw0REFBQTtJQUNBLFNBQUE7RUR6QkY7RUM0Qkk7SUFDRSxhQUFBO0VEMUJOO0VDNkJJO0lBQ0UsZUFBQTtFRDNCTjtFQzhCSTtJQUNFLGVBQUE7RUQ1Qk47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5zZWFyY2gtcmVzdWx0cy1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuLmNhdGVnb3J5LWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5jYXRlZ29yeS1oZWFkZXIgI3RpdHVsbyB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBmb250LWZhbWlseTogXCJCcnVzaCBTY3JpcHQgTVRcIiwgY3Vyc2l2ZTtcbiAgY29sb3I6ICMzMzM7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5jYXRlZ29yeS1oZWFkZXIgcCB7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5sb2FkaW5nLWluZGljYXRvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA1MHB4IDA7XG59XG4ubG9hZGluZy1pbmRpY2F0b3IgcCB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogIzY2NjtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5sb2FkaW5nLWluZGljYXRvciAuc3Bpbm5lciB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlcjogNHB4IHNvbGlkICNmM2YzZjM7XG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCAjMzQ5OGRiO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4ubm8tcmVzdWx0cyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNTBweCAwO1xuICBjb2xvcjogIzY2Njtcbn1cbi5uby1yZXN1bHRzIHAge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG4ubm8tcmVzdWx0cyB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLm5vLXJlc3VsdHMgdWwgbGkge1xuICBwYWRkaW5nOiA4cHggMDtcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5uby1yZXN1bHRzIHVsIGxpOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiw6LCgMKiIFwiO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuI2FydGljdWxvcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgZ2FwOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuI2FydGljdWxvcyAuYXJ0aWN1bG8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDVweCAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMjMwcHg7XG59XG4jYXJ0aWN1bG9zIC5hcnRpY3Vsbzpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbiNhcnRpY3Vsb3MgLmFydGljdWxvIGltZyB7XG4gIHdpZHRoOiAxNTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4jYXJ0aWN1bG9zIC5hcnRpY3Vsbzpob3ZlciBpbWcge1xuICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbn1cbiNhcnRpY3Vsb3MgLmFydGljdWxvIGgyIHtcbiAgZm9udC1zaXplOiAxLjRlbSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDEwcHggMCA4cHggMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzMzMztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHRleHQtb3ZlcmZsb3c6IGNsaXA7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuI2FydGljdWxvcyAuYXJ0aWN1bG8gaDMge1xuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDEuM2VtICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDVweCAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbiNhcnRpY3Vsb3MgLmFydGljdWxvIC5kZXNjcmlwdGlvbixcbiNhcnRpY3Vsb3MgLmFydGljdWxvIHAge1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAxLjFlbSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDEwcHggYXV0byAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDEuNSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XG4gIHRleHQtb3ZlcmZsb3c6IGNsaXA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAjYXJ0aWN1bG9zIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gICAgZ2FwOiAyMHB4O1xuICB9XG4gICNhcnRpY3Vsb3MgLmFydGljdWxvIGltZyB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgfVxuICAuY2F0ZWdvcnktaGVhZGVyICN0aXR1bG8ge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICNhcnRpY3Vsb3Mge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcbiAgICBnYXA6IDE1cHg7XG4gIH1cbiAgI2FydGljdWxvcyAuYXJ0aWN1bG8gaW1nIHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICB9XG4gICNhcnRpY3Vsb3MgLmFydGljdWxvIGgyIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbiAgI2FydGljdWxvcyAuYXJ0aWN1bG8gaDMge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufSIsIi8vIHNlYXJjaC1yZXN1bHRzLmNvbXBvbmVudC5zY3NzXG4vLyBFc3RpbG9zIElEw4PCiU5USUNPUyBhIHByb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzXG5cbi5zZWFyY2gtcmVzdWx0cy1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuLy8gw6LCnMKFIFTDg8KtdHVsbyBkZSBiw4PCunNxdWVkYSAoSUTDg8KJTlRJQ08gYSAuY2F0ZWdvcnktdGl0bGUpXG4uY2F0ZWdvcnktaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuXG4gICN0aXR1bG8ge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnQnJ1c2ggU2NyaXB0IE1UJywgY3Vyc2l2ZTtcbiAgICBjb2xvcjogIzMzMztcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICB9XG5cbiAgcCB7XG4gICAgY29sb3I6ICM2NjY7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG5cbi8vIMOiwpzChSBJbmRpY2Fkb3IgZGUgY2FyZ2Fcbi5sb2FkaW5nLWluZGljYXRvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA1MHB4IDA7XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgY29sb3I6ICM2NjY7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuXG4gIC5zcGlubmVyIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyOiA0cHggc29saWQgI2YzZjNmMztcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgIzM0OThkYjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuLy8gw6LCnMKFIE1lbnNhamUgc2luIHJlc3VsdGFkb3Ncbi5uby1yZXN1bHRzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1MHB4IDA7XG4gIGNvbG9yOiAjNjY2O1xuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIG1hcmdpbjogMTBweCAwO1xuICB9XG5cbiAgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgbGkge1xuICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcblxuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIsOiwoDCoiBcIjtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIMOiwpzChSBHcmlkIGRlIHByb2R1Y3RvcyAtIFNPQlJFU0NSSUJJRU5ETyBlc3RpbG9zIGdsb2JhbGVzXG4jYXJ0aWN1bG9zIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICBnYXA6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG5cbiAgLmFydGljdWxvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDVweCAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgd2lkdGg6IDIzMHB4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogMTUwcHggIWltcG9ydGFudDtcbiAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuXG4gICAgJjpob3ZlciBpbWcge1xuICAgICAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLy8gw6LCnMKFIENPUlJFQ0NJw4PCk046IEVzdGlsb3MgZGUgdGV4dG8gc2luIG5lZ3JpdGFzIHkgdGFtYcODwrFvcyBtw4PCoXMgZ3JhbmRlc1xuICAgIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMS40ZW0gIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbjogMTBweCAwIDhweCAwICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGNsaXA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBoMyB7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogIzAwMDtcbiAgICAgIGZvbnQtc2l6ZTogMS4zZW0gIWltcG9ydGFudDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luOiA1cHggMCAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuZGVzY3JpcHRpb24sXG4gICAgcCB7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICAgIGZvbnQtc2l6ZTogMS4xZW0gIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbjogMTBweCBhdXRvIDAgIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjUgIWltcG9ydGFudDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XG4gICAgICB0ZXh0LW92ZXJmbG93OiBjbGlwO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIMOwwp/Ck8KxIFJlc3BvbnNpdmVcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAjYXJ0aWN1bG9zIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gICAgZ2FwOiAyMHB4O1xuXG4gICAgLmFydGljdWxvIHtcbiAgICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNhdGVnb3J5LWhlYWRlciAjdGl0dWxvIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICNhcnRpY3Vsb3Mge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcbiAgICBnYXA6IDE1cHg7XG5cbiAgICAuYXJ0aWN1bG8ge1xuICAgICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgIH1cblxuICAgICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICB9XG5cbiAgICAgIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 339:
/*!***********************************************************************!*\
  !*** ./src/app/components/registro-popup/registro-popup.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegistroPopupComponent: () => (/* binding */ RegistroPopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 7581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ 4796);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);









function RegistroPopupComponent_div_0_div_19_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "El nombre de usuario es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegistroPopupComponent_div_0_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegistroPopupComponent_div_0_div_19_span_1_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.f["username"].errors == null ? null : ctx_r1.f["username"].errors["required"]);
  }
}
function RegistroPopupComponent_div_0_div_27_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "La contrase\u00F1a es obligatoria");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegistroPopupComponent_div_0_div_27_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "La contrase\u00F1a debe tener m\u00EDnimo 6 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegistroPopupComponent_div_0_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegistroPopupComponent_div_0_div_27_span_1_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RegistroPopupComponent_div_0_div_27_span_2_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.f["password"].errors == null ? null : ctx_r2.f["password"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.f["password"].errors == null ? null : ctx_r2.f["password"].errors["minlength"]);
  }
}
function RegistroPopupComponent_div_0_div_36_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "El nombre completo es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegistroPopupComponent_div_0_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegistroPopupComponent_div_0_div_36_span_1_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.f["nombre"].errors == null ? null : ctx_r3.f["nombre"].errors["required"]);
  }
}
function RegistroPopupComponent_div_0_div_42_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "El email es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegistroPopupComponent_div_0_div_42_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "El email no es v\u00E1lido");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegistroPopupComponent_div_0_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegistroPopupComponent_div_0_div_42_span_1_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RegistroPopupComponent_div_0_div_42_span_2_Template, 2, 0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.f["email"].errors == null ? null : ctx_r4.f["email"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.f["email"].errors == null ? null : ctx_r4.f["email"].errors["minlength"]);
  }
}
function RegistroPopupComponent_div_0_div_51_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "La direcci\u00F3n es obligatoria");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegistroPopupComponent_div_0_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegistroPopupComponent_div_0_div_51_span_1_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.f["direccion"].errors == null ? null : ctx_r5.f["direccion"].errors["required"]);
  }
}
function RegistroPopupComponent_div_0_div_57_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "La ciudad es obligatoria");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegistroPopupComponent_div_0_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegistroPopupComponent_div_0_div_57_span_1_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.f["ciudad"].errors == null ? null : ctx_r6.f["ciudad"].errors["required"]);
  }
}
function RegistroPopupComponent_div_0_div_62_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "El c\u00F3digo postal es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegistroPopupComponent_div_0_div_62_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Debe contener 5 d\u00EDgitos");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegistroPopupComponent_div_0_div_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegistroPopupComponent_div_0_div_62_span_1_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RegistroPopupComponent_div_0_div_62_span_2_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.f["cp"].errors == null ? null : ctx_r7.f["cp"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.f["cp"].errors == null ? null : ctx_r7.f["cp"].errors["pattern"]);
  }
}
function RegistroPopupComponent_div_0_span_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 37);
  }
}
function RegistroPopupComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegistroPopupComponent_div_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r19.onClose());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegistroPopupComponent_div_0_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 3)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Crear cuenta");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Completa tus datos para empezar a comprar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegistroPopupComponent_div_0_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r22.onClose());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5)(10, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RegistroPopupComponent_div_0_Template_form_ngSubmit_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r23.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7)(12, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "CREDENCIALES DE ACCESO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 8)(15, "div", 9)(16, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "USUARIO *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, RegistroPopupComponent_div_0_div_19_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 8)(21, "div", 9)(22, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "CONTRASE\u00D1A *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegistroPopupComponent_div_0_Template_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r24.togglePasswordVisibility());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, RegistroPopupComponent_div_0_div_27_Template, 3, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 7)(29, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "INFORMACI\u00D3N PERSONAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 8)(32, "div", 9)(33, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "NOMBRE COMPLETO *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, RegistroPopupComponent_div_0_div_36_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 8)(38, "div", 9)(39, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "EMAIL *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, RegistroPopupComponent_div_0_div_42_Template, 3, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 7)(44, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "DIRECCI\u00D3N DE ENV\u00CDO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 8)(47, "div", 9)(48, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "DIRECCI\u00D3N *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("blur", function RegistroPopupComponent_div_0_Template_input_blur_50_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r25.autoCompleteCP());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, RegistroPopupComponent_div_0_div_51_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 23)(53, "div", 24)(54, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "CIUDAD *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("blur", function RegistroPopupComponent_div_0_Template_input_blur_56_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r26.autoCompleteCP());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, RegistroPopupComponent_div_0_div_57_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 24)(59, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "C\u00D3DIGO POSTAL *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](62, RegistroPopupComponent_div_0_div_62_Template, 3, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, " CREAR CUENTA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](65, RegistroPopupComponent_div_0_span_65_Template, 1, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 31)(67, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, " \u00BFYa tienes cuenta? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegistroPopupComponent_div_0_Template_a_click_69_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r27.switchToLoginModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Inicia sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.registerForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("invalid", ctx_r0.submitted && ctx_r0.f["username"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f["username"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("invalid", ctx_r0.submitted && ctx_r0.f["password"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx_r0.showPassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f["password"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("invalid", ctx_r0.submitted && ctx_r0.f["nombre"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f["nombre"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("invalid", ctx_r0.submitted && ctx_r0.f["email"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f["email"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("invalid", ctx_r0.submitted && ctx_r0.f["direccion"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f["direccion"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("invalid", ctx_r0.submitted && ctx_r0.f["ciudad"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f["ciudad"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("invalid", ctx_r0.submitted && ctx_r0.f["cp"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f["cp"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.loading || ctx_r0.registerForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loading);
  }
}
class RegistroPopupComponent {
  constructor(formBuilder, router, authService, http) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.authService = authService;
    this.http = http;
    this.isVisible = false;
    this.closePopup = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.registroSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.switchToLogin = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.loading = false;
    this.submitted = false;
    this.showPassword = false;
    this.apiKey = 'AIzaSyDY3YQ6aNb7YXoz13RIxq5fVyzdbak7sQ0';
    this.registerForm = this.formBuilder.group({
      username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)]],
      nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
      direccion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      ciudad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      cp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(/^\d{5}$/)]]
    });
  }
  ngOnInit() {
    console.log('✅ RegistroPopupComponent inicializado');
  }
  get f() {
    return this.registerForm.controls;
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  close() {
    this.closePopup.emit();
  }
  onClose() {
    this.close();
  }
  switchToLoginModal(event) {
    event.preventDefault();
    this.switchToLogin.emit();
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    this.authService.register(this.registerForm.value).subscribe({
      next: data => {
        this.loading = false;
        this.registerForm.reset();
        this.submitted = false;
        this.registroSuccess.emit();
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
          title: '¡Cuenta creada!',
          text: 'Tu cuenta ha sido creada correctamente. Ahora puedes iniciar sesión.',
          icon: 'success',
          confirmButtonColor: '#4facfe',
          confirmButtonText: 'Entendido',
          timer: 4000,
          timerProgressBar: true
        });
      },
      error: error => {
        this.loading = false;
        let errorMessage = 'No se pudo crear la cuenta. Por favor, intenta de nuevo.';
        if (error.message) errorMessage = error.message;
        if (error.message && error.message.includes('username')) {
          errorMessage = 'El nombre de usuario ya está en uso. Elige otro.';
        }
        if (error.message && error.message.includes('email')) {
          errorMessage = 'El email ya está registrado.';
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
          title: 'Error al crear cuenta',
          text: errorMessage,
          icon: 'error',
          confirmButtonColor: '#dc3545',
          confirmButtonText: 'Entendido'
        });
      }
    });
  }
  autoCompleteCP() {
    const direccion = this.registerForm.get('direccion')?.value;
    const ciudad = this.registerForm.get('ciudad')?.value;
    if (!direccion || !ciudad) {
      return;
    }
    const direccionCompleta = encodeURIComponent(`${direccion}, ${ciudad}`);
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${direccionCompleta}&key=${this.apiKey}`;
    this.http.get(url).subscribe({
      next: resultado => {
        if (resultado.status === 'OK' && resultado.results && resultado.results.length > 0) {
          const components = resultado.results[0].address_components;
          const postal = components.find(comp => comp.types.includes('postal_code'));
          if (postal) {
            this.registerForm.get('cp')?.setValue(postal.long_name);
          }
        }
      },
      error: err => {
        //alert('No se pudo obtener código postal automáticamente.'+ err);
        console.warn('No se pudo obtener código postal automáticamente.', err);
      }
    });
  }
  static {
    this.ɵfac = function RegistroPopupComponent_Factory(t) {
      return new (t || RegistroPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: RegistroPopupComponent,
      selectors: [["app-registro-popup"]],
      inputs: {
        isVisible: "isVisible"
      },
      outputs: {
        closePopup: "closePopup",
        registroSuccess: "registroSuccess",
        switchToLogin: "switchToLogin"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "modal-overlay", 3, "click"], [1, "modal-container", 3, "click"], [1, "modal-header"], ["aria-label", "Cerrar", 1, "close-btn", 3, "click"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], [1, "form-section"], [1, "form-row"], [1, "form-group", "full-width"], ["for", "username"], ["type", "text", "id", "username", "formControlName", "username", "placeholder", "Elige un nombre de usuario"], ["class", "error-message", 4, "ngIf"], ["for", "password"], [1, "password-input-wrapper"], ["id", "password", "formControlName", "password", "placeholder", "M\u00EDnimo 6 caracteres", 3, "type"], ["type", "button", 1, "toggle-password", 3, "click"], ["for", "nombre"], ["type", "text", "id", "nombre", "formControlName", "nombre", "placeholder", "Tu nombre y apellidos"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "tu@email.com"], ["for", "direccion"], ["type", "text", "id", "direccion", "formControlName", "direccion", "placeholder", "Calle, n\u00FAmero, piso\u2026", 3, "blur"], [1, "form-row", "two-columns"], [1, "form-group"], ["for", "ciudad"], ["type", "text", "id", "ciudad", "formControlName", "ciudad", "placeholder", "Tu ciudad", 3, "blur"], ["for", "cp"], ["type", "text", "id", "cp", "formControlName", "cp", "placeholder", "00000"], ["type", "submit", 1, "btn-submit", 3, "disabled"], ["class", "loading-spinner", 4, "ngIf"], [1, "footer-links"], ["href", "#", 3, "click"], [1, "error-message"], [4, "ngIf"], ["El", "", 4, "ngIf"], ["El", ""], [1, "loading-spinner"]],
      template: function RegistroPopupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, RegistroPopupComponent_div_0_Template, 71, 25, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isVisible);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
      styles: ["@charset \"UTF-8\";\n\n\n\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed !important;\n  top: 0 !important;\n  left: 0 !important;\n  width: 100vw !important;\n  height: 100vh !important;\n  background-color: rgba(0, 0, 0, 0.6) !important;\n  z-index: 9999 !important;\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center !important;\n  backdrop-filter: blur(4px) !important;\n  animation: _ngcontent-%COMP%_fadeInOverlay 0.3s ease-out !important;\n  padding: 15px !important;\n  box-sizing: border-box !important;\n}\n\n@keyframes _ngcontent-%COMP%_fadeInOverlay {\n  from {\n    opacity: 0;\n    backdrop-filter: blur(0px);\n  }\n  to {\n    opacity: 1;\n    backdrop-filter: blur(4px);\n  }\n}\n\n\n.modal-container[_ngcontent-%COMP%] {\n  background: white !important;\n  border-radius: 12px !important;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3) !important;\n  max-width: 620px !important;\n  width: 100% !important;\n  max-height: 90vh !important;\n  overflow: hidden !important;\n  position: relative !important;\n  animation: _ngcontent-%COMP%_slideInPopup 0.3s ease-out !important;\n  display: flex !important;\n  flex-direction: column !important;\n}\n\n@keyframes _ngcontent-%COMP%_slideInPopup {\n  from {\n    opacity: 0;\n    transform: translateY(-30px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex !important;\n  flex-direction: column !important;\n  align-items: center !important;\n  justify-content: center !important;\n  background-color: #52667a !important;\n  color: white !important;\n  padding: 34px 35px 25px 35px !important;\n  position: relative !important;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;\n  text-align: center !important;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0 !important;\n  font-family: \"Montserrat\", sans-serif !important;\n  font-size: 28px !important;\n  font-weight: 600 !important;\n  color: white !important;\n  text-align: center !important;\n  line-height: 1.2 !important;\n}\n.modal-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  font-size: 15px !important;\n  color: rgba(255, 255, 255, 0.92) !important;\n  text-align: center !important;\n  font-weight: 400 !important;\n  line-height: 1.3 !important;\n}\n\n\n\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute !important;\n  top: 50% !important;\n  right: 20px !important;\n  transform: translateY(-50%) !important;\n  background: none !important;\n  border: none !important;\n  color: white !important;\n  font-size: 28px !important;\n  cursor: pointer !important;\n  padding: 0 !important;\n  line-height: 0.8 !important;\n  transition: all 0.2s ease !important;\n  width: auto !important;\n  height: auto !important;\n  z-index: 100 !important;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-50%) scale(1.2) !important;\n}\n.close-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(-50%) scale(0.95) !important;\n}\n.close-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block !important;\n}\n\n\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 30px 40px 35px !important;\n  overflow-y: auto !important;\n  max-height: calc(90vh - 100px) !important;\n  \n\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px !important;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1 !important;\n  border-radius: 3px !important;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c2cdd6 !important;\n  border-radius: 3px !important;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #52667a !important;\n}\n\n\n\nform[_ngcontent-%COMP%] {\n  display: flex !important;\n  flex-direction: column !important;\n  gap: 0 !important;\n}\n\n\n\n.form-section[_ngcontent-%COMP%] {\n  margin-bottom: 28px !important;\n}\n.form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  font-weight: 600 !important;\n  color: #52667a !important;\n  margin: 0 0 18px 0 !important;\n  padding-bottom: 8px !important;\n  border-bottom: 2px solid #f0f0f0 !important;\n  text-transform: uppercase !important;\n  letter-spacing: 0.5px !important;\n}\n\n\n\n.form-row[_ngcontent-%COMP%] {\n  display: flex !important;\n  gap: 15px !important;\n  margin-bottom: 18px !important;\n}\n.form-row.two-columns[_ngcontent-%COMP%] {\n  display: grid !important;\n  grid-template-columns: 1fr 1fr !important;\n}\n.form-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0 !important;\n}\n\n\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex !important;\n  flex-direction: column !important;\n}\n.form-group.full-width[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block !important;\n  margin-bottom: 8px !important;\n  font-weight: 600 !important;\n  color: #333 !important;\n  font-size: 13px !important;\n  text-transform: uppercase !important;\n  letter-spacing: 0.3px !important;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100% !important;\n  padding: 12px 16px !important;\n  border: 2px solid #e0e0e0 !important;\n  border-radius: 8px !important;\n  font-size: 15px !important;\n  font-family: \"Montserrat\", sans-serif !important;\n  transition: all 0.2s ease !important;\n  box-sizing: border-box !important;\n  background-color: #fafafa !important;\n  color: #333 !important;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  border-color: #52667a !important;\n  background-color: white !important;\n  box-shadow: 0 0 0 3px rgba(82, 102, 122, 0.1) !important;\n}\n.form-group[_ngcontent-%COMP%]   input.invalid[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   input.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545 !important;\n  background-color: #fff5f5 !important;\n}\n.form-group[_ngcontent-%COMP%]   input.invalid[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   input.is-invalid[_ngcontent-%COMP%]:focus {\n  border-color: #dc3545 !important;\n  box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1) !important;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #999 !important;\n  font-style: italic !important;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%]:disabled {\n  background-color: #ccc !important;\n  cursor: not-allowed !important;\n  opacity: 0.6 !important;\n  transform: none !important;\n  box-shadow: none !important;\n}\n.form-group[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: #dc3545 !important;\n  font-size: 12px !important;\n  margin-top: 6px !important;\n  display: block !important;\n  font-weight: 500 !important;\n  padding-left: 4px !important;\n  animation: _ngcontent-%COMP%_slideInError 0.3s ease-out !important;\n}\n.form-group[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block !important;\n}\n\n@keyframes _ngcontent-%COMP%_slideInError {\n  from {\n    opacity: 0;\n    transform: translateX(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n\n\n.password-input-wrapper[_ngcontent-%COMP%] {\n  position: relative !important;\n  display: flex !important;\n  align-items: center !important;\n  flex-direction: column !important;\n}\n.password-input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: 45px !important;\n}\n.password-input-wrapper[_ngcontent-%COMP%]   .toggle-password[_ngcontent-%COMP%] {\n  position: absolute !important;\n  right: 12px !important;\n  background: none !important;\n  border: none !important;\n  cursor: pointer !important;\n  padding: 8px !important;\n  color: #6c757d !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  transition: color 0.2s ease !important;\n}\n.password-input-wrapper[_ngcontent-%COMP%]   .toggle-password[_ngcontent-%COMP%]:hover {\n  color: #52667a !important;\n}\n.password-input-wrapper[_ngcontent-%COMP%]   .toggle-password[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block !important;\n}\n\n\n\n.btn-submit[_ngcontent-%COMP%] {\n  width: 100% !important;\n  padding: 15px !important;\n  background-color: #52667a !important;\n  color: white !important;\n  border: none !important;\n  border-radius: 8px !important;\n  font-size: 16px !important;\n  font-weight: 600 !important;\n  text-transform: uppercase !important;\n  letter-spacing: 1px !important;\n  cursor: pointer !important;\n  transition: all 0.2s ease !important;\n  margin-top: 10px !important;\n  font-family: \"Montserrat\", sans-serif !important;\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #3d4d5c !important;\n  transform: translateY(-2px) !important;\n  box-shadow: 0 4px 12px rgba(82, 102, 122, 0.3) !important;\n}\n.btn-submit[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0) !important;\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  background-color: #ccc !important;\n  cursor: not-allowed !important;\n  opacity: 0.7 !important;\n  transform: none !important;\n  box-shadow: none !important;\n}\n.btn-submit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: white !important;\n}\n.btn-submit[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 18px !important;\n  height: 18px !important;\n  border: 2px solid rgba(255, 255, 255, 0.3) !important;\n  border-top-color: white !important;\n  border-radius: 50% !important;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite !important;\n  display: inline-block !important;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n\n.footer-links[_ngcontent-%COMP%] {\n  text-align: center !important;\n  margin-top: 25px !important;\n  padding-top: 20px !important;\n  border-top: 1px solid #eee !important;\n}\n.footer-links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  color: #666 !important;\n  font-size: 14px !important;\n}\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #52667a !important;\n  text-decoration: none !important;\n  font-weight: 600 !important;\n  transition: all 0.2s ease !important;\n}\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #3d4d5c !important;\n  text-decoration: underline !important;\n}\n\n\n\n@media (max-width: 768px) {\n  .modal-container[_ngcontent-%COMP%] {\n    width: 95% !important;\n    margin: 15px !important;\n  }\n  .modal-header[_ngcontent-%COMP%] {\n    padding: 20px 25px !important;\n  }\n  .modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 22px !important;\n  }\n  .modal-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 13px !important;\n    white-space: normal !important;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 25px !important;\n  }\n  .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    padding: 12px 14px !important;\n    font-size: 14px !important;\n  }\n  .btn-submit[_ngcontent-%COMP%] {\n    padding: 14px !important;\n    font-size: 15px !important;\n  }\n}\n@media (max-width: 480px) {\n  .modal-overlay[_ngcontent-%COMP%] {\n    padding: 10px !important;\n  }\n  .modal-container[_ngcontent-%COMP%] {\n    margin: 0 !important;\n    max-height: 95vh !important;\n  }\n  .modal-header[_ngcontent-%COMP%] {\n    padding: 18px 20px !important;\n  }\n  .modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n  .modal-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px !important;\n    white-space: normal !important;\n  }\n  .close-btn[_ngcontent-%COMP%] {\n    right: 15px !important;\n    font-size: 24px !important;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 20px !important;\n  }\n  .form-section[_ngcontent-%COMP%] {\n    margin-bottom: 24px !important;\n  }\n  .form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 14px !important;\n    margin-bottom: 15px !important;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    margin-bottom: 16px !important;\n  }\n  .form-row.two-columns[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n    gap: 16px !important;\n  }\n  .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 12px !important;\n    margin-bottom: 6px !important;\n  }\n  .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    padding: 11px 14px !important;\n    font-size: 14px !important;\n  }\n  .btn-submit[_ngcontent-%COMP%] {\n    padding: 13px !important;\n    font-size: 14px !important;\n  }\n  .footer-links[_ngcontent-%COMP%] {\n    margin-top: 20px !important;\n    padding-top: 18px !important;\n  }\n  .footer-links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 13px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uLy4uL2FuZ3VsYXIlMjAxOS80MCUyMHRhdG9vZGVuZGElMjBhcnN5cy9mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0cm8tcG9wdXAvcmVnaXN0cm8tcG9wdXAuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0cm8tcG9wdXAvcmVnaXN0cm8tcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLHNFQUFBO0FBU0Esa0NBQUE7QUFDQTtFQUNFLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSwrQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDhCQUFBO0VBQ0EscUNBQUE7RUFDQSxpREFBQTtFQUNBLHdCQUFBO0VBQ0EsaUNBQUE7QURORjs7QUNTQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0VETkY7RUNRQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFRE5GO0FBQ0Y7QUNTQSxpREFBQTtBQUNBO0VBQ0UsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLHFEQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLGdEQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQ0FBQTtBRFBGOztBQ1VBO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esd0NBQUE7RURQRjtFQ1NBO0lBQ0UsVUFBQTtJQUNBLGlDQUFBO0VEUEY7QUFDRjtBQ1VBLHNEQUFBO0FBQ0E7RUFDRSx3QkFBQTtFQUNBLGlDQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsdUJBQUE7RUFDQSx1Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsNERBQUE7RUFDQSw2QkFBQTtBRFJGO0FDVUU7RUFDRSw2QkFBQTtFQUNBLGdEQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtBRFJKO0FDV0U7RUFDRSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkNBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7QURUSjs7QUNhQSxvQ0FBQTtBQUNBO0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0FEVkY7QUNZRTtFQUNFLGlEQUFBO0FEVko7QUNhRTtFQUNFLGtEQUFBO0FEWEo7QUNjRTtFQUNFLHlCQUFBO0FEWko7O0FDZ0JBLCtCQUFBO0FBQ0E7RUFDRSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0EseUNBQUE7RUFFQSw0QkFBQTtBRGRGO0FDZUU7RUFDRSxxQkFBQTtBRGJKO0FDZ0JFO0VBQ0UsOEJBQUE7RUFDQSw2QkFBQTtBRGRKO0FDaUJFO0VBQ0UsOEJBQUE7RUFDQSw2QkFBQTtBRGZKO0FDaUJJO0VBQ0UsOEJBQUE7QURmTjs7QUNvQkEsMkJBQUE7QUFDQTtFQUNFLHdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtBRGpCRjs7QUNvQkEseUNBQUE7QUFDQTtFQUNFLDhCQUFBO0FEakJGO0FDbUJFO0VBQ0UsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLDJDQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQ0FBQTtBRGpCSjs7QUNxQkEscUNBQUE7QUFDQTtFQUNFLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSw4QkFBQTtBRGxCRjtBQ29CRTtFQUNFLHdCQUFBO0VBQ0EseUNBQUE7QURsQko7QUNxQkU7RUFDRSwyQkFBQTtBRG5CSjs7QUN1QkEscUNBQUE7QUFDQTtFQUNFLHdCQUFBO0VBQ0EsaUNBQUE7QURwQkY7QUNzQkU7RUFDRSxzQkFBQTtBRHBCSjtBQ3VCRTtFQUNFLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdDQUFBO0FEckJKO0FDd0JFO0VBQ0Usc0JBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLGdEQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7QUR0Qko7QUN3Qkk7RUFDRSx3QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSx3REFBQTtBRHRCTjtBQ3lCSTtFQUVFLGdDQUFBO0VBQ0Esb0NBQUE7QUR4Qk47QUMwQk07RUFDRSxnQ0FBQTtFQUNBLHVEQUFBO0FEeEJSO0FDNEJJO0VBQ0Usc0JBQUE7RUFDQSw2QkFBQTtBRDFCTjtBQ2dDTTtFQUNFLGlDQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QUQ5QlI7QUNtQ0U7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnREFBQTtBRGpDSjtBQ21DSTtFQUNFLHlCQUFBO0FEakNOOztBQ3NDQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDRCQUFBO0VEbkNGO0VDcUNBO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VEbkNGO0FBQ0Y7QUNzQ0EsaURBQUE7QUFDQTtFQUNFLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0FEcENGO0FDc0NFO0VBQ0UsOEJBQUE7QURwQ0o7QUN1Q0U7RUFDRSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHNDQUFBO0FEckNKO0FDdUNJO0VBQ0UseUJBQUE7QURyQ047QUN3Q0k7RUFDRSx5QkFBQTtBRHRDTjs7QUMyQ0EsZ0NBQUE7QUFDQTtFQUNFLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsZ0RBQUE7QUR4Q0Y7QUMwQ0U7RUFDRSxvQ0FBQTtFQUNBLHNDQUFBO0VBQ0EseURBQUE7QUR4Q0o7QUMyQ0U7RUFDRSxtQ0FBQTtBRHpDSjtBQzRDRTtFQUNFLGlDQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QUQxQ0o7QUM2Q0U7RUFDRSx1QkFBQTtBRDNDSjtBQzhDRTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxREFBQTtFQUNBLGtDQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQ0FBQTtFQUNBLGdDQUFBO0FENUNKOztBQ2dEQTtFQUNFO0lBQ0UseUJBQUE7RUQ3Q0Y7QUFDRjtBQ2dEQSw2QkFBQTtBQUNBO0VBQ0UsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUNBQUE7QUQ5Q0Y7QUNnREU7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QUQ5Q0o7QUNpREU7RUFDRSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQ0FBQTtBRC9DSjtBQ2lESTtFQUNFLHlCQUFBO0VBQ0EscUNBQUE7QUQvQ047O0FDb0RBLGtDQUFBO0FBQ0E7RUFDRTtJQUNFLHFCQUFBO0lBQ0EsdUJBQUE7RURqREY7RUNvREE7SUFDRSw2QkFBQTtFRGxERjtFQ29ERTtJQUNFLDBCQUFBO0VEbERKO0VDcURFO0lBQ0UsMEJBQUE7SUFDQSw4QkFBQTtFRG5ESjtFQ3VEQTtJQUNFLHdCQUFBO0VEckRGO0VDd0RBO0lBQ0UsNkJBQUE7SUFDQSwwQkFBQTtFRHRERjtFQ3lEQTtJQUNFLHdCQUFBO0lBQ0EsMEJBQUE7RUR2REY7QUFDRjtBQzBEQTtFQUNFO0lBQ0Usd0JBQUE7RUR4REY7RUMyREE7SUFDRSxvQkFBQTtJQUNBLDJCQUFBO0VEekRGO0VDNERBO0lBQ0UsNkJBQUE7RUQxREY7RUM0REU7SUFDRSwwQkFBQTtFRDFESjtFQzZERTtJQUNFLDBCQUFBO0lBQ0EsOEJBQUE7RUQzREo7RUMrREE7SUFDRSxzQkFBQTtJQUNBLDBCQUFBO0VEN0RGO0VDZ0VBO0lBQ0Usd0JBQUE7RUQ5REY7RUNpRUE7SUFDRSw4QkFBQTtFRC9ERjtFQ2lFRTtJQUNFLDBCQUFBO0lBQ0EsOEJBQUE7RUQvREo7RUNtRUE7SUFDRSw4QkFBQTtFRGpFRjtFQ21FRTtJQUNFLHFDQUFBO0lBQ0Esb0JBQUE7RURqRUo7RUNzRUU7SUFDRSwwQkFBQTtJQUNBLDZCQUFBO0VEcEVKO0VDdUVFO0lBQ0UsNkJBQUE7SUFDQSwwQkFBQTtFRHJFSjtFQ3lFQTtJQUNFLHdCQUFBO0lBQ0EsMEJBQUE7RUR2RUY7RUMwRUE7SUFDRSwyQkFBQTtJQUNBLDRCQUFBO0VEeEVGO0VDMEVFO0lBQ0UsMEJBQUE7RUR4RUo7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qIHJlZ2lzdHJvLXBvcHVwLmNvbXBvbmVudC5zY3NzIC0gVU5JRklDQURPIENPTiBHUklTRVMgQ09SUE9SQVRJVk9TICovXG4vKiA9PT09PSBPVkVSTEFZIERFTCBNT0RBTCA9PT09PSAqL1xuLm1vZGFsLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTkgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpICFpbXBvcnRhbnQ7XG4gIGFuaW1hdGlvbjogZmFkZUluT3ZlcmxheSAwLjNzIGVhc2Utb3V0ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDE1cHggIWltcG9ydGFudDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50O1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbk92ZXJsYXkge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xuICB9XG59XG4vKiA9PT09PSBDT05URU5FRE9SIERFTCBNT0RBTCAtIE3Dg8KBUyBBTkNITyA9PT09PSAqL1xuLm1vZGFsLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEycHggIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAyMHB4IDYwcHggcmdiYSgwLCAwLCAwLCAwLjMpICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogNjIwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogOTB2aCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICBhbmltYXRpb246IHNsaWRlSW5Qb3B1cCAwLjNzIGVhc2Utb3V0ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlSW5Qb3B1cCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KSBzY2FsZSgwLjk1KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSk7XG4gIH1cbn1cbi8qID09PT09IEhFQURFUiBERUwgTU9EQUwgLSBFU1RJTE8gQ09SUE9SQVRJVk8gPT09PT0gKi9cbi5tb2RhbC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI2NjdhICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAzNHB4IDM1cHggMjVweCAzNXB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuLm1vZGFsLWhlYWRlciBoMiB7XG4gIG1hcmdpbjogMCAwIDEycHggMCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyOHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMS4yICFpbXBvcnRhbnQ7XG59XG4ubW9kYWwtaGVhZGVyIHAge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTIpICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjMgIWltcG9ydGFudDtcbn1cblxuLyogPT09PT0gQk9Uw4PCk04gREUgQ0VSUkFSIChYKSA9PT09PSAqL1xuLmNsb3NlLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICB0b3A6IDUwJSAhaW1wb3J0YW50O1xuICByaWdodDogMjBweCAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjhweCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMC44ICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgIWltcG9ydGFudDtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDEwMCAhaW1wb3J0YW50O1xufVxuLmNsb3NlLWJ0bjpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgxLjIpICFpbXBvcnRhbnQ7XG59XG4uY2xvc2UtYnRuOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgwLjk1KSAhaW1wb3J0YW50O1xufVxuLmNsb3NlLWJ0biBzdmcge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG4vKiA9PT09PSBCT0RZIERFTCBNT0RBTCA9PT09PSAqL1xuLm1vZGFsLWJvZHkge1xuICBwYWRkaW5nOiAzMHB4IDQwcHggMzVweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy15OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IGNhbGMoOTB2aCAtIDEwMHB4KSAhaW1wb3J0YW50O1xuICAvKiBTY3JvbGxiYXIgcGVyc29uYWxpemFkbyAqL1xufVxuLm1vZGFsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDZweCAhaW1wb3J0YW50O1xufVxuLm1vZGFsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcbn1cbi5tb2RhbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICNjMmNkZDYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG59XG4ubW9kYWwtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNTI2NjdhICFpbXBvcnRhbnQ7XG59XG5cbi8qID09PT09IEZPUk1VTEFSSU8gPT09PT0gKi9cbmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgZ2FwOiAwICFpbXBvcnRhbnQ7XG59XG5cbi8qID09PT09IFNFQ0NJT05FUyBERUwgRk9STVVMQVJJTyA9PT09PSAqL1xuLmZvcm0tc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDI4cHggIWltcG9ydGFudDtcbn1cbi5mb3JtLXNlY3Rpb24gaDMge1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzUyNjY3YSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgMCAxOHB4IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDhweCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2YwZjBmMCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweCAhaW1wb3J0YW50O1xufVxuXG4vKiA9PT09PSBGSUxBUyBERUwgRk9STVVMQVJJTyA9PT09PSAqL1xuLmZvcm0tcm93IHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBnYXA6IDE1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xufVxuLmZvcm0tcm93LnR3by1jb2x1bW5zIHtcbiAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgIWltcG9ydGFudDtcbn1cbi5mb3JtLXJvdzpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuXG4vKiA9PT09PSBHUlVQT1MgREUgRk9STVVMQVJJTyA9PT09PSAqL1xuLmZvcm0tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbn1cbi5mb3JtLWdyb3VwLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuLmZvcm0tZ3JvdXAgbGFiZWwge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiA4cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHggIWltcG9ydGFudDtcbn1cbi5mb3JtLWdyb3VwIGlucHV0IHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTJweCAxNnB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlMGUwZTAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAhaW1wb3J0YW50O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmEgIWltcG9ydGFudDtcbiAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcbn1cbi5mb3JtLWdyb3VwIGlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICM1MjY2N2EgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoODIsIDEwMiwgMTIyLCAwLjEpICFpbXBvcnRhbnQ7XG59XG4uZm9ybS1ncm91cCBpbnB1dC5pbnZhbGlkLCAuZm9ybS1ncm91cCBpbnB1dC5pcy1pbnZhbGlkIHtcbiAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY1ZjUgIWltcG9ydGFudDtcbn1cbi5mb3JtLWdyb3VwIGlucHV0LmludmFsaWQ6Zm9jdXMsIC5mb3JtLWdyb3VwIGlucHV0LmlzLWludmFsaWQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICNkYzM1NDUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMjIwLCA1MywgNjksIDAuMSkgIWltcG9ydGFudDtcbn1cbi5mb3JtLWdyb3VwIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOTk5ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYyAhaW1wb3J0YW50O1xufVxuLmZvcm0tZ3JvdXAgaW5wdXQgLmJ0bi1zdWJtaXQ6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMC42ICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG4uZm9ybS1ncm91cCAuZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA2cHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDRweCAhaW1wb3J0YW50O1xuICBhbmltYXRpb246IHNsaWRlSW5FcnJvciAwLjNzIGVhc2Utb3V0ICFpbXBvcnRhbnQ7XG59XG4uZm9ybS1ncm91cCAuZXJyb3ItbWVzc2FnZSBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuQGtleWZyYW1lcyBzbGlkZUluRXJyb3Ige1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG4vKiA9PT09PSBXUkFQUEVSIFBBUkEgSU5QVVQgREUgQ09OVFJBU0XDg8KRQSA9PT09PSAqL1xuLnBhc3N3b3JkLWlucHV0LXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbn1cbi5wYXNzd29yZC1pbnB1dC13cmFwcGVyIGlucHV0IHtcbiAgcGFkZGluZy1yaWdodDogNDVweCAhaW1wb3J0YW50O1xufVxuLnBhc3N3b3JkLWlucHV0LXdyYXBwZXIgLnRvZ2dsZS1wYXNzd29yZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICByaWdodDogMTJweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbiAgcGFkZGluZzogOHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNmM3NTdkICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UgIWltcG9ydGFudDtcbn1cbi5wYXNzd29yZC1pbnB1dC13cmFwcGVyIC50b2dnbGUtcGFzc3dvcmQ6aG92ZXIge1xuICBjb2xvcjogIzUyNjY3YSAhaW1wb3J0YW50O1xufVxuLnBhc3N3b3JkLWlucHV0LXdyYXBwZXIgLnRvZ2dsZS1wYXNzd29yZCBzdmcge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG4vKiA9PT09PSBCT1TDg8KTTiBERSBTVUJNSVQgPT09PT0gKi9cbi5idG4tc3VibWl0IHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI2NjdhICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xufVxuLmJ0bi1zdWJtaXQ6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q0ZDVjICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoODIsIDEwMiwgMTIyLCAwLjMpICFpbXBvcnRhbnQ7XG59XG4uYnRuLXN1Ym1pdDphY3RpdmU6bm90KDpkaXNhYmxlZCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgIWltcG9ydGFudDtcbn1cbi5idG4tc3VibWl0OmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYyAhaW1wb3J0YW50O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDAuNyAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuLmJ0bi1zdWJtaXQgc3BhbiB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuLmJ0bi1zdWJtaXQgLmxvYWRpbmctc3Bpbm5lciB7XG4gIHdpZHRoOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMThweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gIGFuaW1hdGlvbjogc3BpbiAwLjZzIGxpbmVhciBpbmZpbml0ZSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi8qID09PT09IEZPT1RFUiBMSU5LUyA9PT09PSAqL1xuLmZvb3Rlci1saW5rcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAyNXB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlICFpbXBvcnRhbnQ7XG59XG4uZm9vdGVyLWxpbmtzIHAge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICM2NjYgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG59XG4uZm9vdGVyLWxpbmtzIGEge1xuICBjb2xvcjogIzUyNjY3YSAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlICFpbXBvcnRhbnQ7XG59XG4uZm9vdGVyLWxpbmtzIGE6aG92ZXIge1xuICBjb2xvcjogIzNkNGQ1YyAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xufVxuXG4vKiA9PT09PSBSRVNQT05TSVZFIERFU0lHTiA9PT09PSAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tb2RhbC1jb250YWluZXIge1xuICAgIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDE1cHggIWltcG9ydGFudDtcbiAgfVxuICAubW9kYWwtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAyMHB4IDI1cHggIWltcG9ydGFudDtcbiAgfVxuICAubW9kYWwtaGVhZGVyIGgyIHtcbiAgICBmb250LXNpemU6IDIycHggIWltcG9ydGFudDtcbiAgfVxuICAubW9kYWwtaGVhZGVyIHAge1xuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgfVxuICAubW9kYWwtYm9keSB7XG4gICAgcGFkZGluZzogMjVweCAhaW1wb3J0YW50O1xuICB9XG4gIC5mb3JtLWdyb3VwIGlucHV0IHtcbiAgICBwYWRkaW5nOiAxMnB4IDE0cHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgfVxuICAuYnRuLXN1Ym1pdCB7XG4gICAgcGFkZGluZzogMTRweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLm1vZGFsLW92ZXJsYXkge1xuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgfVxuICAubW9kYWwtY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiA5NXZoICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1vZGFsLWhlYWRlciB7XG4gICAgcGFkZGluZzogMThweCAyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1vZGFsLWhlYWRlciBoMiB7XG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1vZGFsLWhlYWRlciBwIHtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNsb3NlLWJ0biB7XG4gICAgcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbiAgfVxuICAubW9kYWwtYm9keSB7XG4gICAgcGFkZGluZzogMjBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5mb3JtLXNlY3Rpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHggIWltcG9ydGFudDtcbiAgfVxuICAuZm9ybS1zZWN0aW9uIGgzIHtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZvcm0tcm93IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZvcm0tcm93LnR3by1jb2x1bW5zIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAhaW1wb3J0YW50O1xuICAgIGdhcDogMTZweCAhaW1wb3J0YW50O1xuICB9XG4gIC5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiA2cHggIWltcG9ydGFudDtcbiAgfVxuICAuZm9ybS1ncm91cCBpbnB1dCB7XG4gICAgcGFkZGluZzogMTFweCAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmJ0bi1zdWJtaXQge1xuICAgIHBhZGRpbmc6IDEzcHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgfVxuICAuZm9vdGVyLWxpbmtzIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDE4cHggIWltcG9ydGFudDtcbiAgfVxuICAuZm9vdGVyLWxpbmtzIHAge1xuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICB9XG59IiwiLyogcmVnaXN0cm8tcG9wdXAuY29tcG9uZW50LnNjc3MgLSBVTklGSUNBRE8gQ09OIEdSSVNFUyBDT1JQT1JBVElWT1MgKi9cblxuJHByaW1hcnk6ICM1MjY2N2E7XG4kcHJpbWFyeS1kYXJrOiAjM2Q0ZDVjO1xuJHByaW1hcnktbGlnaHQ6ICNjMmNkZDY7XG4kZXJyb3ItY29sb3I6ICNkYzM1NDU7XG4kYmFja2dyb3VuZDogd2hpdGU7XG4kZGVmYXVsdC1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG5cbi8qID09PT09IE9WRVJMQVkgREVMIE1PREFMID09PT09ICovXG4ubW9kYWwtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICB0b3A6IDAgIWltcG9ydGFudDtcbiAgbGVmdDogMCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwdncgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNikgIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5OSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCkgIWltcG9ydGFudDtcbiAgYW5pbWF0aW9uOiBmYWRlSW5PdmVybGF5IDAuM3MgZWFzZS1vdXQgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94ICFpbXBvcnRhbnQ7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluT3ZlcmxheSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gIH1cbn1cblxuLyogPT09PT0gQ09OVEVORURPUiBERUwgTU9EQUwgLSBNw4PCgVMgQU5DSE8gPT09PT0gKi9cbi5tb2RhbC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgMjBweCA2MHB4IHJnYmEoMCwgMCwgMCwgMC4zKSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDYyMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDkwdmggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgYW5pbWF0aW9uOiBzbGlkZUluUG9wdXAgMC4zcyBlYXNlLW91dCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbn1cblxuQGtleWZyYW1lcyBzbGlkZUluUG9wdXAge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCkgc2NhbGUoMC45NSk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpO1xuICB9XG59XG5cbi8qID09PT09IEhFQURFUiBERUwgTU9EQUwgLSBFU1RJTE8gQ09SUE9SQVRJVk8gPT09PT0gKi9cbi5tb2RhbC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMzRweCAzNXB4IDI1cHggMzVweCAhaW1wb3J0YW50OyAvLyBtw4PCoXMgcGFkZGluZyBhcnJpYmFcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG5cbiAgaDIge1xuICAgIG1hcmdpbjogMCAwIDEycHggMCAhaW1wb3J0YW50O1xuICAgIGZvbnQtZmFtaWx5OiAkZGVmYXVsdC1mb250ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyOHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjIgIWltcG9ydGFudDtcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTIpICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjMgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vKiA9PT09PSBCT1TDg8KTTiBERSBDRVJSQVIgKFgpID09PT09ICovXG4uY2xvc2UtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHRvcDogNTAlICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyOHB4ICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAwLjggIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAhaW1wb3J0YW50O1xuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgei1pbmRleDogMTAwICFpbXBvcnRhbnQ7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDEuMikgIWltcG9ydGFudDtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMC45NSkgIWltcG9ydGFudDtcbiAgfVxuXG4gIHN2ZyB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vKiA9PT09PSBCT0RZIERFTCBNT0RBTCA9PT09PSAqL1xuLm1vZGFsLWJvZHkge1xuICBwYWRkaW5nOiAzMHB4IDQwcHggMzVweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy15OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IGNhbGMoOTB2aCAtIDEwMHB4KSAhaW1wb3J0YW50O1xuXG4gIC8qIFNjcm9sbGJhciBwZXJzb25hbGl6YWRvICovXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogNnB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogI2YxZjFmMSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LWxpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi8qID09PT09IEZPUk1VTEFSSU8gPT09PT0gKi9cbmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgZ2FwOiAwICFpbXBvcnRhbnQ7XG59XG5cbi8qID09PT09IFNFQ0NJT05FUyBERUwgRk9STVVMQVJJTyA9PT09PSAqL1xuLmZvcm0tc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDI4cHggIWltcG9ydGFudDtcblxuICBoMyB7XG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAkcHJpbWFyeSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMCAwIDE4cHggMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiA4cHggIWltcG9ydGFudDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2YwZjBmMCAhaW1wb3J0YW50O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHggIWltcG9ydGFudDtcbiAgfVxufVxuXG4vKiA9PT09PSBGSUxBUyBERUwgRk9STVVMQVJJTyA9PT09PSAqL1xuLmZvcm0tcm93IHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBnYXA6IDE1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xuXG4gICYudHdvLWNvbHVtbnMge1xuICAgIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgIWltcG9ydGFudDtcbiAgfVxuXG4gICY6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8qID09PT09IEdSVVBPUyBERSBGT1JNVUxBUklPID09PT09ICovXG4uZm9ybS1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuXG4gICYuZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDhweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDEycHggMTZweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlMGUwZTAgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogJGRlZmF1bHQtZm9udCAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgIWltcG9ydGFudDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnkgIWltcG9ydGFudDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgkcHJpbWFyeSwgMC4xKSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgICYuaW52YWxpZCxcbiAgICAmLmlzLWludmFsaWQge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkZXJyb3ItY29sb3IgIWltcG9ydGFudDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY1ZjUgIWltcG9ydGFudDtcblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGVycm9yLWNvbG9yICFpbXBvcnRhbnQ7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKCRlcnJvci1jb2xvciwgMC4xKSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cblxuICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiAjOTk5ICFpbXBvcnRhbnQ7XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWMgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuYnRuLXN1Ym1pdCB7XG4gICAgICAvLyAuLi4gZXN0aWxvcyBleGlzdGVudGVzIC4uLlxuICAgIFxuICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2MgIWltcG9ydGFudDtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZCAhaW1wb3J0YW50O1xuICAgICAgICBvcGFjaXR5OiAwLjYgIWltcG9ydGFudDsgLy8gVW4gcG9jbyBtw4PCoXMgZGUgb3BhY2lkYWQgcGFyYSBxdWUgc2Ugbm90ZSBtZWpvclxuICAgICAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5lcnJvci1tZXNzYWdlIHtcbiAgICBjb2xvcjogJGVycm9yLWNvbG9yICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogNnB4ICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiA0cHggIWltcG9ydGFudDtcbiAgICBhbmltYXRpb246IHNsaWRlSW5FcnJvciAwLjNzIGVhc2Utb3V0ICFpbXBvcnRhbnQ7XG5cbiAgICBzcGFuIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJbkVycm9yIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuXG4vKiA9PT09PSBXUkFQUEVSIFBBUkEgSU5QVVQgREUgQ09OVFJBU0XDg8KRQSA9PT09PSAqL1xuLnBhc3N3b3JkLWlucHV0LXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcblxuICBpbnB1dCB7XG4gICAgcGFkZGluZy1yaWdodDogNDVweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnRvZ2dsZS1wYXNzd29yZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgcmlnaHQ6IDEycHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogOHB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM2Yzc1N2QgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlICFpbXBvcnRhbnQ7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAkcHJpbWFyeSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIHN2ZyB7XG4gICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG4vKiA9PT09PSBCT1TDg8KTTiBERSBTVUJNSVQgPT09PT0gKi9cbi5idG4tc3VibWl0IHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAxcHggIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogJGRlZmF1bHQtZm9udCAhaW1wb3J0YW50O1xuXG4gICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWRhcmsgIWltcG9ydGFudDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCkgIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoJHByaW1hcnksIDAuMykgIWltcG9ydGFudDtcbiAgfVxuXG4gICY6YWN0aXZlOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgIWltcG9ydGFudDtcbiAgfVxuXG4gICY6ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2MgIWltcG9ydGFudDtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XG4gICAgb3BhY2l0eTogMC43ICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgc3BhbiB7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubG9hZGluZy1zcGlubmVyIHtcbiAgICB3aWR0aDogMThweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMThweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci10b3AtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gICAgYW5pbWF0aW9uOiBzcGluIDAuNnMgbGluZWFyIGluZmluaXRlICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuLyogPT09PT0gRk9PVEVSIExJTktTID09PT09ICovXG4uZm9vdGVyLWxpbmtzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDI1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDIwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWUgIWltcG9ydGFudDtcblxuICBwIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzY2NiAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgYSB7XG4gICAgY29sb3I6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgIWltcG9ydGFudDtcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICRwcmltYXJ5LWRhcmsgIWltcG9ydGFudDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi8qID09PT09IFJFU1BPTlNJVkUgREVTSUdOID09PT09ICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1vZGFsLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMTVweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1vZGFsLWhlYWRlciB7XG4gICAgcGFkZGluZzogMjBweCAyNXB4ICFpbXBvcnRhbnQ7XG5cbiAgICBoMiB7XG4gICAgICBmb250LXNpemU6IDIycHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIC5tb2RhbC1ib2R5IHtcbiAgICBwYWRkaW5nOiAyNXB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZm9ybS1ncm91cCBpbnB1dCB7XG4gICAgcGFkZGluZzogMTJweCAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYnRuLXN1Ym1pdCB7XG4gICAgcGFkZGluZzogMTRweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAubW9kYWwtb3ZlcmxheSB7XG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1vZGFsLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogOTV2aCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1vZGFsLWhlYWRlciB7XG4gICAgcGFkZGluZzogMThweCAyMHB4ICFpbXBvcnRhbnQ7XG5cbiAgICBoMiB7XG4gICAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIC5jbG9zZS1idG4ge1xuICAgIHJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubW9kYWwtYm9keSB7XG4gICAgcGFkZGluZzogMjBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZvcm0tc2VjdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweCAhaW1wb3J0YW50O1xuXG4gICAgaDMge1xuICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgLmZvcm0tcm93IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4ICFpbXBvcnRhbnQ7XG5cbiAgICAmLnR3by1jb2x1bW5zIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyICFpbXBvcnRhbnQ7XG4gICAgICBnYXA6IDE2cHggIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICAuZm9ybS1ncm91cCB7XG4gICAgbGFiZWwge1xuICAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiA2cHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBpbnB1dCB7XG4gICAgICBwYWRkaW5nOiAxMXB4IDE0cHggIWltcG9ydGFudDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIC5idG4tc3VibWl0IHtcbiAgICBwYWRkaW5nOiAxM3B4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZm9vdGVyLWxpbmtzIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDE4cHggIWltcG9ydGFudDtcblxuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 4607:
/*!**************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class FooterComponent {
  constructor() {
    // Propiedad para almacenar el año actual (para el copyright)
    this.currentYear = new Date().getFullYear();
  }
  ngOnInit() {
    // Posibles inicializaciones adicionales
  }
  static {
    this.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 8,
      vars: 1,
      consts: [["src", "https://angular.io/assets/images/logos/angular/angular.svg", "alt", "Logo de Angular", 1, "angular-logo"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer")(1, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Ecommerce con Angular ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00A9 Txema Serrano S\u00E1nchez");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentYear, " TatooDenda");
        }
      },
      styles: ["@charset \"UTF-8\";\n\n\n\n\nfooter[_ngcontent-%COMP%] {\n  background-color: #52667a !important; \n\n  color: white !important;\n  padding: 25px 0 !important; \n\n  text-align: center !important;\n  margin-top: auto !important; \n\n  \n\n  width: 100vw !important; \n\n  position: relative !important;\n  left: 50% !important; \n\n  right: 50% !important;\n  margin-left: -50vw !important; \n\n  margin-right: -50vw !important; \n\n  box-sizing: border-box !important; \n\n}\n\n\n\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 8px 0 !important;\n  color: white !important;\n  font-family: \"Montserrat\", sans-serif !important;\n  font-size: 18px !important; \n\n  font-weight: 500 !important; \n\n}\n\n\n\n.angular-logo[_ngcontent-%COMP%] {\n  height: 40px !important; \n\n  width: auto !important;\n  vertical-align: middle !important;\n  margin-right: 12px !important; \n\n  \n\n}\n\n\n\n\n\n\n\n\n\n\n\n@media screen and (max-width: 768px) {\n  footer[_ngcontent-%COMP%] {\n    padding: 15px 10px !important;\n  }\n  footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px !important; \n\n    flex-direction: column !important;\n    gap: 8px !important; \n\n  }\n  .angular-logo[_ngcontent-%COMP%] {\n    height: 35px !important; \n\n    margin-right: 0 !important;\n    margin-bottom: 5px !important; \n\n  }\n  footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n    font-size: 14px !important; \n\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uLy4uL2FuZ3VsYXIlMjAxOS80MCUyMHRhdG9vZGVuZGElMjBhcnN5cy9mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLHNDQUFBO0FBRUEsa0RBQUE7QUFDQTtFQUNFLG9DQUFBLEVBQUEsK0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBLEVBQUEsOENBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBLEVBQUEsK0JBQUE7RUFFQSxvRUFBQTtFQUNBLHVCQUFBLEVBQUEsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBLEVBQUEsMkNBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBLEVBQUEsdURBQUE7RUFDQSw4QkFBQSxFQUFBLHFEQUFBO0VBQ0EsaUNBQUEsRUFBQSxzREFBQTtBREFGOztBQ0dBLHlDQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnREFBQTtFQUNBLDBCQUFBLEVBQUEsNkJBQUE7RUFDQSwyQkFBQSxFQUFBLG1DQUFBO0FEQUY7O0FDR0Esb0JBQUE7QUFDQTtFQUNFLHVCQUFBLEVBQUEsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0EsNkJBQUEsRUFBQSw0QkFBQTtFQUNBLDhEQUFBO0FEQUY7O0FDR0EsMkNBQUE7QUFDQTs7OztHQUFBO0FBTUEsOEJBQUE7QUFDQTtFQUNFO0lBQ0UsNkJBQUE7RURERjtFQ0lBO0lBQ0UsMEJBQUEsRUFBQSx5QkFBQTtJQUNBLGlDQUFBO0lBQ0EsbUJBQUEsRUFBQSxxQkFBQTtFREZGO0VDS0E7SUFDRSx1QkFBQSxFQUFBLHlCQUFBO0lBQ0EsMEJBQUE7SUFDQSw2QkFBQSxFQUFBLHdCQUFBO0VESEY7RUNNQTtJQUNFLDBCQUFBLEVBQUEseUJBQUE7RURKRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyogZm9vdGVyLmNvbXBvbmVudC5zY3NzIC0gQ09SUkVHSURPICovXG4vKiBGb290ZXIgY29uIGVsIG1pc21vIGNvbG9yIGdyaXMgcXVlIGxvcyBwb3B1cHMgKi9cbmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjY2N2EgIWltcG9ydGFudDsgLyogTWlzbW8gY29sb3IgcXVlIGxvcyBwb3B1cHMgKi9cbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDI1cHggMCAhaW1wb3J0YW50OyAvKiBBdW1lbnRhZG8gZGUgMjBweCBhIDI1cHggcGFyYSBtw4PCoXMgZXNwYWNpbyAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogYXV0byAhaW1wb3J0YW50OyAvKiBQYXJhIHF1ZSBzZSBwZWd1ZSBhbCBmb25kbyAqL1xuICAvKiBUw4PCiUNOSUNBIFBBUkEgVE9NQVIgVE9ETyBFTCBBTkNITyBERUwgTkFWRUdBRE9SIChjb21vIGVsIG5hdmJhcikgKi9cbiAgd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7IC8qIEFuY2hvIGNvbXBsZXRvIGRlbCB2aWV3cG9ydCAqL1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgbGVmdDogNTAlICFpbXBvcnRhbnQ7IC8qIFTDg8KpY25pY2EgcGFyYSBleHRlbmRlciBhIGFuY2hvIGNvbXBsZXRvICovXG4gIHJpZ2h0OiA1MCUgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IC01MHZ3ICFpbXBvcnRhbnQ7IC8qIERlc3BsYXphciBhIGxhIGl6cXVpZXJkYSBwYXJhIG9jdXBhciB0b2RvIGVsIGFuY2hvICovXG4gIG1hcmdpbi1yaWdodDogLTUwdncgIWltcG9ydGFudDsgLyogRGVzcGxhemFyIGEgbGEgZGVyZWNoYSBwYXJhIG9jdXBhciB0b2RvIGVsIGFuY2hvICovXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3ggIWltcG9ydGFudDsgLyogQXNlZ3VyYXIgcXVlIHBhZGRpbmcgeSBib3JkZXIgbm8gYWZlY3RlbiBlbCBhbmNobyAqL1xufVxuXG4vKiBFc3RpbG9zIHBhcmEgbG9zIHDDg8KhcnJhZm9zIGRlbCBmb290ZXIgKi9cbmZvb3RlciBwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogOHB4IDAgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDsgLyogQXVtZW50YWRvIGRlIDE0cHggYSAxOHB4ICovXG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDsgLyogQXVtZW50YWRvIGVsIHBlc28gZGUgNDAwIGEgNTAwICovXG59XG5cbi8qIExvZ28gZGUgQW5ndWxhciAqL1xuLmFuZ3VsYXItbG9nbyB7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50OyAvKiBBdW1lbnRhZG8gZGUgMzBweCBhIDQwcHggKi9cbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDEycHggIWltcG9ydGFudDsgLyogQXVtZW50YWRvIGRlIDhweCBhIDEycHggKi9cbiAgLyogRWxpbWluYWRvIGVsIGZpbHRybyBwYXJhIHF1ZSBzZSB2ZWEgZWwgbG9nbyByb2pvIG9yaWdpbmFsICovXG59XG5cbi8qIEHDg8KxbyBkZWwgY29weXJpZ2h0IGNvbiBlc3RpbG8gZGlmZXJlbnRlICovXG4vKiBmb290ZXIgcDpsYXN0LWNoaWxkIHtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDAuOSAhaW1wb3J0YW50OyBcbiAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG59ICovXG4vKiBSZXNwb25zaXZlIHBhcmEgZWwgZm9vdGVyICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICBmb290ZXIge1xuICAgIHBhZGRpbmc6IDE1cHggMTBweCAhaW1wb3J0YW50O1xuICB9XG4gIGZvb3RlciBwIHtcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDsgLyogQXVtZW50YWRvIHBhcmEgbcODwrN2aWwgKi9cbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gICAgZ2FwOiA4cHggIWltcG9ydGFudDsgLyogQXVtZW50YWRvIGVsIGdhcCAqL1xuICB9XG4gIC5hbmd1bGFyLWxvZ28ge1xuICAgIGhlaWdodDogMzVweCAhaW1wb3J0YW50OyAvKiBBdW1lbnRhZG8gcGFyYSBtw4PCs3ZpbCAqL1xuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50OyAvKiBBdW1lbnRhZG8gZWwgbWFyZ2VuICovXG4gIH1cbiAgZm9vdGVyIHA6bGFzdC1jaGlsZCB7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7IC8qIEF1bWVudGFkbyBwYXJhIG3Dg8KzdmlsICovXG4gIH1cbn0iLCIvKiBmb290ZXIuY29tcG9uZW50LnNjc3MgLSBDT1JSRUdJRE8gKi9cblxuLyogRm9vdGVyIGNvbiBlbCBtaXNtbyBjb2xvciBncmlzIHF1ZSBsb3MgcG9wdXBzICovXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI2NjdhICFpbXBvcnRhbnQ7IC8qIE1pc21vIGNvbG9yIHF1ZSBsb3MgcG9wdXBzICovXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAyNXB4IDAgIWltcG9ydGFudDsgLyogQXVtZW50YWRvIGRlIDIwcHggYSAyNXB4IHBhcmEgbcODwqFzIGVzcGFjaW8gKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IGF1dG8gIWltcG9ydGFudDsgLyogUGFyYSBxdWUgc2UgcGVndWUgYWwgZm9uZG8gKi9cbiAgXG4gIC8qIFTDg8KJQ05JQ0EgUEFSQSBUT01BUiBUT0RPIEVMIEFOQ0hPIERFTCBOQVZFR0FET1IgKGNvbW8gZWwgbmF2YmFyKSAqL1xuICB3aWR0aDogMTAwdncgIWltcG9ydGFudDsgLyogQW5jaG8gY29tcGxldG8gZGVsIHZpZXdwb3J0ICovXG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICBsZWZ0OiA1MCUgIWltcG9ydGFudDsgLyogVMODwqljbmljYSBwYXJhIGV4dGVuZGVyIGEgYW5jaG8gY29tcGxldG8gKi9cbiAgcmlnaHQ6IDUwJSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogLTUwdncgIWltcG9ydGFudDsgLyogRGVzcGxhemFyIGEgbGEgaXpxdWllcmRhIHBhcmEgb2N1cGFyIHRvZG8gZWwgYW5jaG8gKi9cbiAgbWFyZ2luLXJpZ2h0OiAtNTB2dyAhaW1wb3J0YW50OyAvKiBEZXNwbGF6YXIgYSBsYSBkZXJlY2hhIHBhcmEgb2N1cGFyIHRvZG8gZWwgYW5jaG8gKi9cbiAgYm94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50OyAvKiBBc2VndXJhciBxdWUgcGFkZGluZyB5IGJvcmRlciBubyBhZmVjdGVuIGVsIGFuY2hvICovXG59XG5cbi8qIEVzdGlsb3MgcGFyYSBsb3MgcMODwqFycmFmb3MgZGVsIGZvb3RlciAqL1xuZm9vdGVyIHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiA4cHggMCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDsgLyogQXVtZW50YWRvIGRlIDE0cHggYSAxOHB4ICovXG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDsgLyogQXVtZW50YWRvIGVsIHBlc28gZGUgNDAwIGEgNTAwICovXG59XG5cbi8qIExvZ28gZGUgQW5ndWxhciAqL1xuLmFuZ3VsYXItbG9nbyB7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50OyAvKiBBdW1lbnRhZG8gZGUgMzBweCBhIDQwcHggKi9cbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDEycHggIWltcG9ydGFudDsgLyogQXVtZW50YWRvIGRlIDhweCBhIDEycHggKi9cbiAgLyogRWxpbWluYWRvIGVsIGZpbHRybyBwYXJhIHF1ZSBzZSB2ZWEgZWwgbG9nbyByb2pvIG9yaWdpbmFsICovXG59XG5cbi8qIEHDg8KxbyBkZWwgY29weXJpZ2h0IGNvbiBlc3RpbG8gZGlmZXJlbnRlICovXG4vKiBmb290ZXIgcDpsYXN0LWNoaWxkIHtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDAuOSAhaW1wb3J0YW50OyBcbiAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG59ICovXG5cbi8qIFJlc3BvbnNpdmUgcGFyYSBlbCBmb290ZXIgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIGZvb3RlciB7XG4gICAgcGFkZGluZzogMTVweCAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIGZvb3RlciBwIHtcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDsgLyogQXVtZW50YWRvIHBhcmEgbcODwrN2aWwgKi9cbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gICAgZ2FwOiA4cHggIWltcG9ydGFudDsgLyogQXVtZW50YWRvIGVsIGdhcCAqL1xuICB9XG4gIFxuICAuYW5ndWxhci1sb2dvIHtcbiAgICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDsgLyogQXVtZW50YWRvIHBhcmEgbcODwrN2aWwgKi9cbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDsgLyogQXVtZW50YWRvIGVsIG1hcmdlbiAqL1xuICB9XG4gIFxuICBmb290ZXIgcDpsYXN0LWNoaWxkIHtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDsgLyogQXVtZW50YWRvIHBhcmEgbcODwrN2aWwgKi9cbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 6687:
/*!**************************************************************!*\
  !*** ./src/app/components/shared/header/header.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


class HeaderComponent {
  constructor(router) {
    this.router = router;
  }
  // Método para navegar a la página principal
  goToHome() {
    this.router.navigate(['/']);
  }
  static {
    this.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 3,
      vars: 0,
      consts: [[1, "home", "tienda-title", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header")(1, "h1", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_h1_click_1_listener() {
            return ctx.goToHome();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tienda online");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
      },
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap);\n  \n\nheader[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100vw; \n\n  height: 250px; \n\n  margin: 0; \n\n  padding: 0; \n\n  overflow: hidden; \n\n  z-index: 5; \n\n  left: 50%; \n\n  right: 50%; \n\n  margin-left: -50vw; \n\n  margin-right: -50vw; \n\n  box-sizing: border-box; \n\n  background-image: url('background.jpg');\n  background-size: auto; \n\n  background-repeat: repeat; \n\n  background-position: center; \n\n}\n\nheader[_ngcontent-%COMP%]   h1.tienda-title[_ngcontent-%COMP%], h1.tienda-title[_ngcontent-%COMP%], .tienda-title[_ngcontent-%COMP%] {\n  font-family: 'Great Vibes', cursive !important;\n  font-size: 5rem !important;\n  font-weight: normal !important;\n  color: #000 !important;\n  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.7) !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  cursor: pointer !important;\n  text-align: center !important;\n  width: 100% !important;\n  position: absolute !important;\n  top: 50% !important;\n  left: 50% !important;\n  transform: translate(-50%, -50%) !important;\n  transition: font-size 0.3s ease, text-shadow 0.3s ease !important;\n}\n\n\n \n.tienda-title[_ngcontent-%COMP%]:hover {\n  font-size: 7rem !important; \n\n  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3) !important; \n\n}  \n\n\n \n@media (max-width: 768px) {\n  .tienda-title[_ngcontent-%COMP%] {\n    font-size: 3.5rem !important; \n\n  }\n  \n  .tienda-title[_ngcontent-%COMP%]:hover {\n    font-size: 5rem !important; \n\n  }\n  \n  header[_ngcontent-%COMP%] {\n    height: 120px; \n\n  }\n}\n\n\n\n@media (min-width: 769px) and (max-width: 1024px) {\n  header[_ngcontent-%COMP%] {\n    height: 200px; \n\n  }\n  \n  .tienda-title[_ngcontent-%COMP%] {\n    font-size: 4.5rem !important;\n  }\n  \n  .tienda-title[_ngcontent-%COMP%]:hover {\n    font-size: 6rem !important;\n  }\n}\n\n\n\n@media (min-width: 1800px) {\n  header[_ngcontent-%COMP%] {\n    height: 300px; \n\n  }\n  \n  .tienda-title[_ngcontent-%COMP%] {\n    font-size: 6rem !important;\n  }\n  \n  .tienda-title[_ngcontent-%COMP%]:hover {\n    font-size: 8rem !important;\n  }\n}\n\n\n\n.home[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-decoration: none;\n  color: inherit;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtEQUFrRDs7QUFHbEQ7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWSxFQUFFLGlDQUFpQztFQUMvQyxhQUFhLEVBQUUscUNBQXFDO0VBQ3BELFNBQVMsRUFBRSxnQ0FBZ0M7RUFDM0MsVUFBVSxFQUFFLHFCQUFxQjtFQUNqQyxnQkFBZ0IsRUFBRSw2QkFBNkI7RUFDL0MsVUFBVSxFQUFFLDRCQUE0QjtFQUN4QyxTQUFTLEVBQUUsNEJBQTRCO0VBQ3ZDLFVBQVUsRUFBRSw0QkFBNEI7RUFDeEMsa0JBQWtCLEVBQUUsMENBQTBDO0VBQzlELG1CQUFtQixFQUFFLDBDQUEwQztFQUMvRCxzQkFBc0IsRUFBRSwwREFBMEQ7RUFDbEYsdUNBQTRFO0VBQzVFLHFCQUFxQixFQUFFLHlCQUF5QjtFQUNoRCx5QkFBeUIsRUFBRSxzQkFBc0I7RUFDakQsMkJBQTJCLEVBQUUsc0JBQXNCO0FBQ3JEOztBQUVBO0VBQ0UsOENBQThDO0VBQzlDLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLDREQUE0RDtFQUM1RCxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLDJDQUEyQztFQUMzQyxpRUFBaUU7QUFDbkU7O0FBRUEsNERBQTREO0FBQzVEO0VBQ0UsMEJBQTBCLEVBQUUsb0NBQW9DO0VBQ2hFLHNEQUFzRCxFQUFFLDJCQUEyQjtBQUNyRjs7QUFFQSxzQ0FBc0M7QUFDdEM7RUFDRTtJQUNFLDRCQUE0QixFQUFFLHVDQUF1QztFQUN2RTs7RUFFQTtJQUNFLDBCQUEwQixFQUFFLHdDQUF3QztFQUN0RTs7RUFFQTtJQUNFLGFBQWEsRUFBRSxrQ0FBa0M7RUFDbkQ7QUFDRjs7QUFFQSwwREFBMEQ7QUFDMUQ7RUFDRTtJQUNFLGFBQWEsRUFBRSxtQ0FBbUM7RUFDcEQ7O0VBRUE7SUFDRSw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRTtJQUNFLGFBQWEsRUFBRSx3Q0FBd0M7RUFDekQ7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRjs7QUFFQSxtREFBbUQ7QUFDbkQ7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBJbXBvcnRhciBsYSBmdWVudGUgc2kgbm8gbG8gaGFzIGhlY2hvIHRvZGF2w4PCrWEgKi8gXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HcmVhdCtWaWJlcyZkaXNwbGF5PXN3YXAnKTsgIFxuXG5oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDB2dzsgLyogQW5jaG8gY29tcGxldG8gZGUgbGEgdmVudGFuYSAqL1xuICBoZWlnaHQ6IDI1MHB4OyAvKiBBbHR1cmEgYWp1c3RhYmxlIHNlZ8ODwrpuIG5lY2VzaXRlcyAqL1xuICBtYXJnaW46IDA7IC8qIEVsaW1pbmFyIG3Dg8KhcmdlbmVzIGxhdGVyYWxlcyAqL1xuICBwYWRkaW5nOiAwOyAvKiBFbGltaW5hciBwYWRkaW5nICovXG4gIG92ZXJmbG93OiBoaWRkZW47IC8qIENvbnRyb2xhciBkZXNib3JkYW1pZW50byAqL1xuICB6LWluZGV4OiA1OyAvKiBQb3NpY2lvbmFtaWVudG8gei1pbmRleCAqL1xuICBsZWZ0OiA1MCU7IC8qIENlbnRyYXIgaG9yaXpvbnRhbG1lbnRlICovXG4gIHJpZ2h0OiA1MCU7IC8qIENlbnRyYXIgaG9yaXpvbnRhbG1lbnRlICovXG4gIG1hcmdpbi1sZWZ0OiAtNTB2dzsgLyogVMODwqljbmljYSBwYXJhIGV4dGVuZGVyIGEgdG9kbyBlbCBhbmNobyAqL1xuICBtYXJnaW4tcmlnaHQ6IC01MHZ3OyAvKiBUw4PCqWNuaWNhIHBhcmEgZXh0ZW5kZXIgYSB0b2RvIGVsIGFuY2hvICovXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIEFzZWd1cmFyIHF1ZSBwYWRkaW5nIHkgYm9yZGVyIHNlIGluY2x1eWFuIGVuIGVsIGFuY2hvICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kL2JhY2tncm91bmQuanBnJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogYXV0bzsgLyogTm8gZXN0aXJhciBsYSBpbWFnZW4gKi9cbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDsgLyogUmVwZXRpciBlbCBwYXRyw4PCs24gKi9cbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50cmFyIGVsIHBhdHLDg8KzbiAqL1xufVxuXG5oZWFkZXIgaDEudGllbmRhLXRpdGxlLCBoMS50aWVuZGEtdGl0bGUsIC50aWVuZGEtdGl0bGUge1xuICBmb250LWZhbWlseTogJ0dyZWF0IFZpYmVzJywgY3Vyc2l2ZSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDVyZW0gIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHRvcDogNTAlICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDUwJSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBmb250LXNpemUgMC4zcyBlYXNlLCB0ZXh0LXNoYWRvdyAwLjNzIGVhc2UgIWltcG9ydGFudDtcbn1cblxuLyogRWZlY3RvIGRlIGNhbWJpbyBkZSB0YW1hw4PCsW8gZGUgZnVlbnRlIGFsIHBhc2FyIGVsIGN1cnNvciAqLyBcbi50aWVuZGEtdGl0bGU6aG92ZXIge1xuICBmb250LXNpemU6IDdyZW0gIWltcG9ydGFudDsgLyogQWp1c3RhZG8gcGFyYSBtZWpvciBleHBlcmllbmNpYSAqL1xuICB0ZXh0LXNoYWRvdzogM3B4IDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpICFpbXBvcnRhbnQ7IC8qIFNvbWJyYSBtw4PCoXMgcHJvbnVuY2lhZGEgKi9cbn0gIFxuXG4vKiBBanVzdGVzIHBhcmEgZGlzcG9zaXRpdm9zIG3Dg8KzdmlsZXMgKi8gXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnRpZW5kYS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAzLjVyZW0gIWltcG9ydGFudDsgLyogVGFtYcODwrFvIGJhc2UgbcODwqFzIHBlcXVlw4PCsW8gZW4gbcODwrN2aWxlcyAqL1xuICB9XG4gIFxuICAudGllbmRhLXRpdGxlOmhvdmVyIHtcbiAgICBmb250LXNpemU6IDVyZW0gIWltcG9ydGFudDsgLyogVGFtYcODwrFvIGhvdmVyIG3Dg8KhcyBwZXF1ZcODwrFvIGVuIG3Dg8KzdmlsZXMgKi9cbiAgfVxuICBcbiAgaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDEyMHB4OyAvKiBBbHR1cmEgbcODwqFzIHBlcXVlw4PCsWEgZW4gbcODwrN2aWxlcyAqL1xuICB9XG59XG5cbi8qIE1lZGlhIHF1ZXJpZXMgYWRpY2lvbmFsZXMgcGFyYSBhc2VndXJhciByZXNwb25zaXZpZGFkICovXG5AbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDIwMHB4OyAvKiBBbHR1cmEgaW50ZXJtZWRpYSBwYXJhIHRhYmxldHMgKi9cbiAgfVxuICBcbiAgLnRpZW5kYS10aXRsZSB7XG4gICAgZm9udC1zaXplOiA0LjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLnRpZW5kYS10aXRsZTpob3ZlciB7XG4gICAgZm9udC1zaXplOiA2cmVtICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLyogUGFyYSBwYW50YWxsYXMgbXV5IGdyYW5kZXMgKi9cbkBtZWRpYSAobWluLXdpZHRoOiAxODAwcHgpIHtcbiAgaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDMwMHB4OyAvKiBBbHR1cmEgbWF5b3IgcGFyYSBwYW50YWxsYXMgZ3JhbmRlcyAqL1xuICB9XG4gIFxuICAudGllbmRhLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDZyZW0gIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLnRpZW5kYS10aXRsZTpob3ZlciB7XG4gICAgZm9udC1zaXplOiA4cmVtICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLyogQ2xhc2UgYWRpY2lvbmFsIHBhcmEgZWwgY29tcG9ydGFtaWVudG8gZGUgY2xpYyAqL1xuLmhvbWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 8693:
/*!**************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/category.service */ 4354);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ 4796);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/cart.service */ 6868);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../login-popup/login-popup.component */ 1453);
/* harmony import */ var _registro_popup_registro_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../registro-popup/registro-popup.component */ 339);










const _c0 = function (a1) {
  return ["/category", a1];
};
function NavbarComponent_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 15)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " DILATACIONES ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ul", 17)(4, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " T\u00DANELES ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " PLUGS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " EXPANDERS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data_id", (tmp_0_0 = ctx_r0.getDilatacionesCategory()) == null ? null : tmp_0_0.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](4, _c0, ctx_r0.getSubcategoryId("TUNELES")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](6, _c0, ctx_r0.getSubcategoryId("PLUGS")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c0, ctx_r0.getSubcategoryId("EXPANDERS")));
  }
}
function NavbarComponent_li_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 15)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " PIERCINGS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ul", 17)(4, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " BANANAS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " LABRETS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " BARBELLS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " CIRCULAR BARBELLS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " ANILLOS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data_id", (tmp_0_0 = ctx_r1.getPiercingsCategory()) == null ? null : tmp_0_0.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](6, _c0, ctx_r1.getSubcategoryId("BANANAS")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c0, ctx_r1.getSubcategoryId("LABRETS")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c0, ctx_r1.getSubcategoryId("BARBELLS")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](12, _c0, ctx_r1.getSubcategoryId("CIRCULAR BARBELLS")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](14, _c0, ctx_r1.getSubcategoryId("ANILLOS")));
  }
}
function NavbarComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NavbarComponent_ng_container_15_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.onProfileClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NavbarComponent_ng_container_15_Template_div_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("alt", "Perfil de " + (ctx_r2.currentUser.username || ctx_r2.currentUser.nombre));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.currentUser.username || ctx_r2.currentUser.nombre);
  }
}
function NavbarComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NavbarComponent_ng_container_16_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.onProfileClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
}
function NavbarComponent_p_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ctx_r4.cartService.cartItems)) == null ? null : tmp_0_0.length);
  }
}
const _c1 = function () {
  return ["/"];
};
const _c2 = function () {
  return ["/ver-todo"];
};
class NavbarComponent {
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
    this.userSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
    this.cartSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
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
      if (cartPopup) cartPopup.classList.remove('active');
      if (cartOverlay) cartOverlay.classList.remove('active');
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
    } else {
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
    const normalizedSearchName = name.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const category = this.categories.find(cat => {
      const normalizedCatName = cat.nombre.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return normalizedCatName === normalizedSearchName;
    });
    // console.log(`Buscando categoría: "${name}" (normalizado: "${normalizedSearchName}")`);
    if (category) {
      // console.log(`Categoría encontrada: ${category.nombre} (ID: ${category.id})`);
    } else {
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
        console.log('Categorías cargadas:', categories);
        this.categories = categories;
      },
      error: error => console.error('Error loading categories', error)
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
    if (!dilataciones) return [];
    const subcategories = this.categories.filter(category => category.padre === dilataciones.id && category.nombre.toUpperCase() !== 'DILATACIONES');
    console.log('Subcategorías de DILATACIONES:', subcategories);
    return subcategories;
  }
  /**
   * Obtiene subcategorías filtradas para DILATACIONES
   */
  getFilteredSubcategoriesForDilataciones() {
    const dilataciones = this.getDilatacionesCategory();
    if (!dilataciones) return [];
    const excludedNames = ['EXPANDERS', 'PLUGS', 'TUNELES', 'TÚNELES'];
    return this.categories.filter(category => category.padre === dilataciones.id && !excludedNames.includes(category.nombre.toUpperCase()));
  }
  /**
   * Obtiene subcategorías filtradas para PIERCINGS
   */
  getFilteredSubcategoriesForPiercings() {
    const piercings = this.getPiercingsCategory();
    if (!piercings) return [];
    const excludedNames = ['ANILLOS', 'BANANAS', 'BARBELLS', 'CIRCULAR BARBELLS', 'LABRETS'];
    return this.categories.filter(category => category.padre === piercings.id && !excludedNames.includes(category.nombre.toUpperCase()));
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
        queryParams: {
          term: this.searchTerm.trim()
        }
      });
      // ✅ Limpiar el campo de búsqueda después de buscar
      this.searchTerm = '';
    } else {
      console.log('⚠️ Navbar: Término de búsqueda vacío');
    }
  }
  static {
    this.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_category_service__WEBPACK_IMPORTED_MODULE_0__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 23,
      vars: 14,
      consts: [["id", "menu"], [1, "menuitem", "home", 3, "routerLink"], ["class", "menuitem elem", 4, "ngIf"], ["id", "fincat", 1, "menuitem"], [1, "nav-link", 3, "routerLink"], [1, "right-items"], ["id", "search", 1, "menuitem"], ["type", "text", "id", "searchinput", "placeholder", "Buscar art\u00EDculo......", 3, "ngModel", "ngModelChange", "keyup.enter"], ["id", "searchicon", "src", "assets/images/icons/search.png", "alt", "bot\u00F3n de b\u00FAsqueda", 3, "click"], [1, "menuitem", "profile-section"], [4, "ngIf"], ["id", "carrito", 3, "click"], ["src", "assets/images/icons/cart.png", "alt", "Carrito"], [3, "isVisible", "closePopup", "loginSuccess", "switchToRegistro"], [3, "isVisible", "closePopup", "registroSuccess", "switchToLogin"], [1, "menuitem", "elem"], [1, "categoria"], [1, "subcat"], [1, "menuitem", "categoria", 3, "routerLink"], [1, "user-info", 3, "click"], ["src", "assets/images/icons/login.png", "id", "imgprofile", 3, "alt"], [1, "username-display"], ["title", "Cerrar sesi\u00F3n", 1, "logout-icon", 3, "click"], ["src", "assets/images/icons/logout.png", "alt", "Cerrar sesi\u00F3n", 1, "logout-img"], [1, "login-only", 3, "click"], ["src", "assets/images/icons/login.png", "id", "imgprofile", "alt", "Iniciar sesi\u00F3n"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nav")(1, "div")(2, "ul", 0)(3, "li", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "HOME");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, NavbarComponent_li_5_Template, 10, 10, "li", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, NavbarComponent_li_6_Template, 14, 16, "li", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "li", 3)(8, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "VER TODO");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 5)(11, "li", 6)(12, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function NavbarComponent_Template_input_ngModelChange_12_listener($event) {
            return ctx.searchTerm = $event;
          })("keyup.enter", function NavbarComponent_Template_input_keyup_enter_12_listener() {
            return ctx.search();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "img", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NavbarComponent_Template_img_click_13_listener() {
            return ctx.search();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "li", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, NavbarComponent_ng_container_15_Template, 7, 2, "ng-container", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, NavbarComponent_ng_container_16_Template, 3, 0, "ng-container", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "li", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_17_listener() {
            return ctx.toggleCartAndLog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, NavbarComponent_p_19_Template, 3, 3, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "app-login-popup", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("closePopup", function NavbarComponent_Template_app_login_popup_closePopup_21_listener() {
            return ctx.onCloseLoginPopup();
          })("loginSuccess", function NavbarComponent_Template_app_login_popup_loginSuccess_21_listener() {
            return ctx.onLoginSuccess();
          })("switchToRegistro", function NavbarComponent_Template_app_login_popup_switchToRegistro_21_listener() {
            return ctx.switchToRegistro();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "app-registro-popup", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("closePopup", function NavbarComponent_Template_app_registro_popup_closePopup_22_listener() {
            return ctx.onCloseRegistroPopup();
          })("registroSuccess", function NavbarComponent_Template_app_registro_popup_registroSuccess_22_listener() {
            return ctx.onRegistroSuccess();
          })("switchToLogin", function NavbarComponent_Template_app_registro_popup_switchToLogin_22_listener() {
            return ctx.switchToLogin();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          let tmp_7_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](12, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.getDilatacionesCategory());
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.getPiercingsCategory());
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](13, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isUserLoggedIn && ctx.currentUser);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isUserLoggedIn);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](20, 10, ctx.cartService.cartItems)) == null ? null : tmp_7_0.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("isVisible", ctx.showLoginPopup);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("isVisible", ctx.showRegistroPopup);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_3__.LoginPopupComponent, _registro_popup_registro_popup_component__WEBPACK_IMPORTED_MODULE_4__.RegistroPopupComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
      styles: ["\n\n\n\n\n\n\nnav[_ngcontent-%COMP%] {\n  width: 100vw; \n\n  background-color: #fff;\n  \n\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);\n  padding: 10px 0;\n  border-radius: 0; \n\n  margin: 0; \n\n  margin-bottom: 15px; \n\n  position: relative; \n\n  z-index: 100; \n\n  left: 50%; \n\n  right: 50%;\n  margin-left: -50vw; \n\n  margin-right: -50vw; \n\n  box-sizing: border-box; \n\n}\n\n#menu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0;\n  \n\n  width: 95%;\n  max-width: 1400px; \n\n  margin: 0 auto; \n\n  list-style: none;\n  position: relative;\n}\n\n\n\n#menu[_ngcontent-%COMP%]   li.menuitem[_ngcontent-%COMP%] {\n  padding: 6px 0;\n  cursor: pointer;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 16px;\n  white-space: nowrap;\n  position: relative; \n\n}\n\n\n\n.menuitem.elem[_ngcontent-%COMP%], .menuitem.home[_ngcontent-%COMP%], #fincat[_ngcontent-%COMP%] {\n  font-size: 18px; \n\n  padding: 10px 0; \n\n  margin-right: 55px; \n\n}\n\n\n\n.menuitem.elem[_ngcontent-%COMP%] {\n  position: relative;\n  padding-bottom: 20px; \n\n}\n\n\n\n#fincat[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n\n\n\n.right-items[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: auto; \n\n  margin-right: 40px; \n\n  gap: 25px; \n\n}\n\n\n\n#search[_ngcontent-%COMP%] {\n  position: relative;\n  margin-left: -15px; \n\n}\n\n\n\n.right-items[_ngcontent-%COMP%]:has(.login-only) {\n  gap: 25px; \n\n}\n\n\n\n.right-items[_ngcontent-%COMP%]:has(.login-only)   #search[_ngcontent-%COMP%] {\n  margin-left: 0; \n\n}\n\n\n\n.right-items[_ngcontent-%COMP%]:has(.profile-section) {\n  gap: 25px; \n\n}\n\n#searchinput[_ngcontent-%COMP%] {\n  \n\n  padding: 10px 16px; \n\n  border: 1px solid #ddd;\n  border-radius: 4px; \n\n  width: 320px; \n\n  height: 20px; \n\n  font-size: 16px;\n  box-sizing: content-box; \n\n}\n\n#searchicon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n}\n\n\n\n\n\n\n.profile-section[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-items: center !important;\n  gap: 25px; \n\n}\n\n\n\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px; \n\n  padding: 8px 12px;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.user-info[_ngcontent-%COMP%]:hover {\n  background-color: rgba(82, 102, 122, 0.1);\n}\n\n\n\n.login-only[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 8px 12px; \n\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.login-only[_ngcontent-%COMP%]:hover {\n  background-color: rgba(82, 102, 122, 0.1);\n}\n\n\n\n.username-display[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n  font-size: 14px;\n  text-transform: none;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  max-width: 150px; \n\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n\n\n.user-info[_ngcontent-%COMP%]:hover   .username-display[_ngcontent-%COMP%] {\n  color: #52667a;\n}\n\n\n\n#imgprofile[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  flex-shrink: 0; \n\n}\n\n\n\n\n\n\n.logout-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8px 10px; \n\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.logout-icon[_ngcontent-%COMP%]:hover {\n  background-color: rgba(220, 53, 69, 0.1); \n\n}\n\n\n\n.logout-img[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  opacity: 0.7;\n  transition: all 0.2s ease;\n}\n\n.logout-icon[_ngcontent-%COMP%]:hover   .logout-img[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1.1);\n}\n\n\n\n\n\n\n#carrito[_ngcontent-%COMP%] {\n  \n\n  cursor: pointer;\n  position: relative;\n}\n\n#carrito[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n}\n\n#carrito[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  background-color: #52667a;\n  color: white;\n  font-size: 12px;\n  width: 22px;\n  height: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n}\n\n\n\n\n\n\n.menuitem[_ngcontent-%COMP%]:hover {\n  color: #52667a;\n}\n\n\n\n.subcat[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%; \n\n  left: 0;\n  background-color: white;\n  padding: 10px; \n\n  border-radius: 4px; \n\n  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);\n  display: none;\n  z-index: 100;\n  min-width: 240px;\n  margin-top: 10px; \n\n  border: 1px solid #f1f1f1; \n\n  transition: opacity 0.3s; \n\n  opacity: 0;\n}\n\n\n\n.elem[_ngcontent-%COMP%]   .subcat[_ngcontent-%COMP%] {\n  animation-fill-mode: forwards;\n}\n\n\n\n.subcat[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 15px 25px; \n\n  border-bottom: 1px solid #e0e0e0; \n\n  text-align: left;\n  margin: 0; \n\n  font-weight: 500; \n\n  text-transform: none; \n\n  font-size: 16px; \n\n  transition: background-color 0.2s ease; \n\n  display: block;\n  width: 100%;\n  letter-spacing: 0.5px;\n  box-sizing: border-box;\n}\n\n\n\n.subcat[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  margin-top: 0; \n\n}\n\n.subcat[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0f0; \n\n  color: #52667a; \n\n}\n\n\n\n.menuitem.elem[_ngcontent-%COMP%]:hover   .subcat[_ngcontent-%COMP%] {\n  display: block;\n  opacity: 1;\n  transition-delay: 0s; \n\n}\n\n\n\n.subcat[_ngcontent-%COMP%]:after {\n  content: '';\n  position: absolute;\n  top: -20px; \n\n  left: 0;\n  width: 100%;\n  height: 20px;\n  background: transparent; \n\n}\n\n\n\n.subcat[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n\n\n.subcat[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  border-top: none;\n}\n\n\n\n\n\n\n@media (max-width: 768px) {\n  .username-display[_ngcontent-%COMP%] {\n    display: none;\n  }\n  \n  .user-info[_ngcontent-%COMP%] {\n    gap: 0;\n  }\n  \n  .profile-section[_ngcontent-%COMP%] {\n    gap: 5px; \n\n  }\n  \n  \n\n  #menu[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  \n  .menuitem.elem[_ngcontent-%COMP%], .menuitem.home[_ngcontent-%COMP%], #fincat[_ngcontent-%COMP%] {\n    margin: 5px 15px;\n  }\n  \n  .right-items[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-top: 5px;\n    width: 100%;\n    justify-content: center;\n    gap: 30px; \n\n    margin-right: 30px;\n  }\n  \n  \n\n  #search[_ngcontent-%COMP%] {\n    margin-left: 5px;\n  }\n  \n  .profile-section[_ngcontent-%COMP%] {\n    gap: 15px; \n\n  }\n  \n  .user-info[_ngcontent-%COMP%] {\n    gap: 4px;\n  }\n  \n  #searchinput[_ngcontent-%COMP%] {\n    width: 200px; \n\n  }\n  \n  \n\n  .subcat[_ngcontent-%COMP%] {\n    position: static;\n    width: 100%;\n    box-shadow: none;\n    margin-top: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBEQUEwRDtBQUMxRCxzRUFBc0U7O0FBRXRFLDZCQUE2QjtBQUM3QjtFQUNFLFlBQVksRUFBRSxnQ0FBZ0M7RUFDOUMsc0JBQXNCO0VBQ3RCLHFDQUFxQztFQUNyQyx5Q0FBeUM7RUFDekMsZUFBZTtFQUNmLGdCQUFnQixFQUFFLGdDQUFnQztFQUNsRCxTQUFTLEVBQUUsc0JBQXNCO0VBQ2pDLG1CQUFtQixFQUFFLGlEQUFpRDtFQUN0RSxrQkFBa0IsRUFBRSxxQ0FBcUM7RUFDekQsWUFBWSxFQUFFLG9EQUFvRDtFQUNsRSxTQUFTLEVBQUUsMkNBQTJDO0VBQ3RELFVBQVU7RUFDVixrQkFBa0IsRUFBRSx1REFBdUQ7RUFDM0UsbUJBQW1CLEVBQUUscURBQXFEO0VBQzFFLHNCQUFzQixFQUFFLHNEQUFzRDtBQUNoRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLHlEQUF5RDtFQUN6RCxVQUFVO0VBQ1YsaUJBQWlCLEVBQUUsOENBQThDO0VBQ2pFLGNBQWMsRUFBRSx5QkFBeUI7RUFDekMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQSxzREFBc0Q7QUFDdEQ7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBRSwwREFBMEQ7QUFDaEY7O0FBRUEsdURBQXVEO0FBQ3ZEO0VBQ0UsZUFBZSxFQUFFLHNCQUFzQjtFQUN2QyxlQUFlLEVBQUUscUJBQXFCO0VBQ3RDLGtCQUFrQixFQUFFLDRDQUE0QztBQUNsRTs7QUFFQSw0REFBNEQ7QUFDNUQ7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CLEVBQUUsaUVBQWlFO0FBQ3pGOztBQUVBLCtEQUErRDtBQUMvRDtFQUNFLGVBQWU7QUFDakI7O0FBRUEsK0RBQStEO0FBQy9EO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBRSxtQ0FBbUM7RUFDdEQsa0JBQWtCLEVBQUUsNkRBQTZEO0VBQ2pGLFNBQVMsRUFBRSxxREFBcUQ7QUFDbEU7O0FBRUEsOERBQThEO0FBQzlEO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFFLG1DQUFtQztBQUN6RDs7QUFFQSw2REFBNkQ7QUFDN0Q7RUFDRSxTQUFTLEVBQUUseURBQXlEO0FBQ3RFOztBQUVBLGlFQUFpRTtBQUNqRTtFQUNFLGNBQWMsRUFBRSx5RUFBeUU7QUFDM0Y7O0FBRUEsOERBQThEO0FBQzlEO0VBQ0UsU0FBUyxFQUFFLGlFQUFpRTtBQUM5RTs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyxrQkFBa0IsRUFBRSxtREFBbUQ7RUFDdkUsc0JBQXNCO0VBQ3RCLGtCQUFrQixFQUFFLGlEQUFpRDtFQUNyRSxZQUFZLEVBQUUsK0JBQStCO0VBQzdDLFlBQVksRUFBRSxtQ0FBbUM7RUFDakQsZUFBZTtFQUNmLHVCQUF1QixFQUFFLCtDQUErQztBQUMxRTs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsUUFBUTtFQUNSLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQSxzRUFBc0U7O0FBRXRFLG9DQUFvQztBQUNwQztFQUNFLHdCQUF3QjtFQUN4Qiw4QkFBOEI7RUFDOUIsU0FBUyxFQUFFLHdDQUF3QztBQUNyRDs7QUFFQSxxRUFBcUU7QUFDckU7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVEsRUFBRSwyQkFBMkI7RUFDckMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBLHlDQUF5QztBQUN6QztFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCLEVBQUUsOEJBQThCO0VBQ2pELGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBLDREQUE0RDtBQUM1RDtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFFLGdDQUFnQztFQUNsRCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBLGdDQUFnQztBQUNoQztFQUNFLGNBQWM7QUFDaEI7O0FBRUEsMEJBQTBCO0FBQzFCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjLEVBQUUsaURBQWlEO0FBQ25FOztBQUVBLGdEQUFnRDs7QUFFaEQsbUNBQW1DO0FBQ25DO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUJBQWlCLEVBQUUscUNBQXFDO0VBQ3hELGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usd0NBQXdDLEVBQUUsdUJBQXVCO0FBQ25FOztBQUVBLHNCQUFzQjtBQUN0QjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixxQkFBcUI7QUFDdkI7O0FBRUEsd0NBQXdDOztBQUV4QyxpQ0FBaUM7QUFDakM7RUFDRSxzREFBc0Q7RUFDdEQsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQSxvREFBb0Q7O0FBRXBELDJDQUEyQztBQUMzQztFQUNFLGNBQWM7QUFDaEI7O0FBRUEsMkNBQTJDO0FBQzNDO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVMsRUFBRSx5REFBeUQ7RUFDcEUsT0FBTztFQUNQLHVCQUF1QjtFQUN2QixhQUFhLEVBQUUsb0JBQW9CO0VBQ25DLGtCQUFrQixFQUFFLG1DQUFtQztFQUN2RCwwQ0FBMEM7RUFDMUMsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUUscURBQXFEO0VBQ3ZFLHlCQUF5QixFQUFFLG1DQUFtQztFQUM5RCx3QkFBd0IsRUFBRSwrQ0FBK0M7RUFDekUsVUFBVTtBQUNaOztBQUVBLHFFQUFxRTtBQUNyRTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQSx5REFBeUQ7QUFDekQ7RUFDRSxrQkFBa0IsRUFBRSwyQ0FBMkM7RUFDL0QsZ0NBQWdDLEVBQUUsOENBQThDO0VBQ2hGLGdCQUFnQjtFQUNoQixTQUFTLEVBQUUsMERBQTBEO0VBQ3JFLGdCQUFnQixFQUFFLHVCQUF1QjtFQUN6QyxvQkFBb0IsRUFBRSxtQ0FBbUM7RUFDekQsZUFBZSxFQUFFLDZCQUE2QjtFQUM5QyxzQ0FBc0MsRUFBRSxtQ0FBbUM7RUFDM0UsY0FBYztFQUNkLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCOztBQUVBLDhFQUE4RTtBQUM5RTtFQUNFLGFBQWEsRUFBRSxxRUFBcUU7QUFDdEY7O0FBRUE7RUFDRSx5QkFBeUIsRUFBRSxzQkFBc0I7RUFDakQsY0FBYyxFQUFFLHdDQUF3QztBQUMxRDs7QUFFQSx5REFBeUQ7QUFDekQ7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLG9CQUFvQixFQUFFLHdCQUF3QjtBQUNoRDs7QUFFQSw0REFBNEQ7QUFDNUQ7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVUsRUFBRSx5QkFBeUI7RUFDckMsT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCLEVBQUUsc0NBQXNDO0FBQ2pFOztBQUVBLDRDQUE0QztBQUM1QztFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQSxnREFBZ0Q7QUFDaEQ7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUEsa0NBQWtDOztBQUVsQyw4RkFBOEY7QUFDOUY7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLE1BQU07RUFDUjs7RUFFQTtJQUNFLFFBQVEsRUFBRSwwQ0FBMEM7RUFDdEQ7O0VBRUEsNkNBQTZDO0VBQzdDO0lBQ0UsZUFBZTtJQUNmLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0lBQ2YsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixTQUFTLEVBQUUsOEJBQThCO0lBQ3pDLGtCQUFrQjtFQUNwQjs7RUFFQSw2REFBNkQ7RUFDN0Q7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxTQUFTLEVBQUUsa0NBQWtDO0VBQy9DOztFQUVBO0lBQ0UsUUFBUTtFQUNWOztFQUVBO0lBQ0UsWUFBWSxFQUFFLDZDQUE2QztFQUM3RDs7RUFFQSxzQ0FBc0M7RUFDdEM7SUFDRSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyAqL1xuLyogRXN0aWxvcyBwYXJhIGVsIG5hdmJhciBjb24gbWVuw4PCunMgZGVzcGxlZ2FibGVzIHkgbm9tYnJlIGRlIHVzdWFyaW8gKi9cblxuLyogTW9kaWZpY2FjaW9uZXMgYWwgbmF2YmFyICovXG5uYXYge1xuICB3aWR0aDogMTAwdnc7IC8qIEFuY2hvIGNvbXBsZXRvIGRlbCB2aWV3cG9ydCAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAvKiBTb21icmEgbcODwqFzIGludGVuc2EgeSBwcm9udW5jaWFkYSAqL1xuICBib3gtc2hhZG93OiAwIDhweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgcGFkZGluZzogMTBweCAwO1xuICBib3JkZXItcmFkaXVzOiAwOyAvKiBFbGltaW5hciBib3JkZXMgcmVkb25kZWFkb3MgKi9cbiAgbWFyZ2luOiAwOyAvKiBFbGltaW5hciBtw4PCoXJnZW5lcyAqL1xuICBtYXJnaW4tYm90dG9tOiAxNXB4OyAvKiBTZXBhcmFjacODwrNuIGRlIDE1cHggY29uIGVsIGNvbnRlbmlkbyBpbmZlcmlvciAqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIFBhcmEgZWwgcG9zaWNpb25hbWllbnRvIGNvcnJlY3RvICovXG4gIHotaW5kZXg6IDEwMDsgLyogQXNlZ3VyYXIgcXVlIGVzdMODwqkgcG9yIGVuY2ltYSBkZSBvdHJvcyBlbGVtZW50b3MgKi9cbiAgbGVmdDogNTAlOyAvKiBUw4PCqWNuaWNhIHBhcmEgZXh0ZW5kZXIgYSBhbmNobyBjb21wbGV0byAqL1xuICByaWdodDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTUwdnc7IC8qIERlc3BsYXphciBhIGxhIGl6cXVpZXJkYSBwYXJhIG9jdXBhciB0b2RvIGVsIGFuY2hvICovXG4gIG1hcmdpbi1yaWdodDogLTUwdnc7IC8qIERlc3BsYXphciBhIGxhIGRlcmVjaGEgcGFyYSBvY3VwYXIgdG9kbyBlbCBhbmNobyAqL1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBBc2VndXJhciBxdWUgcGFkZGluZyB5IGJvcmRlciBubyBhZmVjdGVuIGVsIGFuY2hvICovXG59XG5cbiNtZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgLyogQ29udGVuaWRvIGNlbnRyYWRvIGNvbiBtw4PCoXhpbW8gYW5jaG8gcGFyYSBsZWdpYmlsaWRhZCAqL1xuICB3aWR0aDogOTUlO1xuICBtYXgtd2lkdGg6IDE0MDBweDsgLyogVW4gcG9jbyBtw4PCoXMgYW1wbGlvIHBhcmEgcGFudGFsbGFzIGdyYW5kZXMgKi9cbiAgbWFyZ2luOiAwIGF1dG87IC8qIENlbnRyYXIgZWwgY29udGVuaWRvICovXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLyogQWp1c3RhbW9zIGVsIHBhZGRpbmcgdmVydGljYWwgcGFyYSByZWR1Y2lyIGFsdHVyYSAqL1xuI21lbnUgbGkubWVudWl0ZW0ge1xuICBwYWRkaW5nOiA2cHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogSW1wb3J0YW50ZSBwYXJhIHBvc2ljaW9uYXIgbG9zIHN1Ym1lbsODwrpzIGNvcnJlY3RhbWVudGUgKi9cbn1cblxuLyogSGFjZXIgbcODwqFzIGdyYW5kZSBlbCB0ZXh0byBkZSBsb3MgbWVuw4PCunMgcHJpbmNpcGFsZXMgKi9cbi5tZW51aXRlbS5lbGVtLCAubWVudWl0ZW0uaG9tZSwgI2ZpbmNhdCB7XG4gIGZvbnQtc2l6ZTogMThweDsgLyogQXVtZW50YWRvIGRlIDE2cHggKi9cbiAgcGFkZGluZzogMTBweCAwOyAvKiBBdW1lbnRhZG8gZGUgNnB4ICovXG4gIG1hcmdpbi1yaWdodDogNTVweDsgLyogQXVtZW50YWRvIHBhcmEgbcODwqFzIGVzcGFjaWFkbyBob3Jpem9udGFsICovXG59XG5cbi8qIE1lam9yYXIgZWwgw4PCoXJlYSBkZSBob3ZlciBwYXJhIGxvcyBlbGVtZW50b3MgcHJpbmNpcGFsZXMgKi9cbi5tZW51aXRlbS5lbGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDsgLyogQcODwrFhZGlyIGVzcGFjaW8gYWJham8gcGFyYSBmYWNpbGl0YXIgbW92aW1pZW50byBoYWNpYSBzdWJtZW7Dg8K6ICovXG59XG5cbi8qIEVsaW1pbmFyIG1hcmdlbiBkZXJlY2hvIGRlbCDDg8K6bHRpbW8gw4PCrXRlbSBkZSBtZW7Dg8K6IChWRVIgVE9ETykgKi9cbiNmaW5jYXQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi8qIEdydXBvIGRlIGVsZW1lbnRvcyBhIGxhIGRlcmVjaGEgLSBtw4PCoXMgZXNwYWNpbyBhIGxhIGRlcmVjaGEgKi9cbi5yaWdodC1pdGVtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvOyAvKiBFbXB1amEgZXN0ZSBncnVwbyBhIGxhIGRlcmVjaGEgKi9cbiAgbWFyZ2luLXJpZ2h0OiA0MHB4OyAvKiBSZWR1Y2lkbyBkZSA2MHB4IGEgNDBweCBwYXJhIGRhciBtw4PCoXMgZXNwYWNpbyBhbCBidXNjYWRvciAqL1xuICBnYXA6IDI1cHg7IC8qIFJlZHVjaWRvIGRlIDM1cHggYSAyNXB4IHBhcmEgY29tcGFjdGFyIGVsZW1lbnRvcyAqL1xufVxuXG4vKiBDYW1wbyBkZSBiw4PCunNxdWVkYSAtIGFqdXN0ZSBkaW7Dg8KhbWljbyBzZWfDg8K6biBlc3RhZG8gZGUgbG9naW4gKi9cbiNzZWFyY2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDsgLyogQWp1c3RhZG8gcGFyYSBtZWpvciBlcXVpbGlicmlvICovXG59XG5cbi8qIEN1YW5kbyBOTyBoYXkgdXN1YXJpbyBsb2d1ZWFkbywgZGlzdHJpYnVpciB1bmlmb3JtZW1lbnRlICovXG4ucmlnaHQtaXRlbXM6aGFzKC5sb2dpbi1vbmx5KSB7XG4gIGdhcDogMjVweDsgLyogQcODwrpuIG3Dg8KhcyByZWR1Y2lkbyBwYXJhIGVsaW1pbmFyIGxhIGRpc3RhbmNpYSBleGNlc2l2YSAqL1xufVxuXG4vKiBBanVzdGUgZXNwZWPDg8KtZmljbyBkZWwgY2FtcG8gZGUgYsODwrpzcXVlZGEgY3VhbmRvIG5vIGhheSBzZXNpw4PCs24gKi9cbi5yaWdodC1pdGVtczpoYXMoLmxvZ2luLW9ubHkpICNzZWFyY2gge1xuICBtYXJnaW4tbGVmdDogMDsgLyogU2luIG1hcmdpbiBuZWdhdGl2byBjdWFuZG8gbm8gaGF5IHNlc2nDg8KzbiBwYXJhIGFjZXJjYXIgbcODwqFzIGEgVkVSIFRPRE8gKi9cbn1cblxuLyogQ3VhbmRvIFPDg8KNIGhheSB1c3VhcmlvIGxvZ3VlYWRvLCBtYW50ZW5lciBlc3BhY2lhZG8gbm9ybWFsICovXG4ucmlnaHQtaXRlbXM6aGFzKC5wcm9maWxlLXNlY3Rpb24pIHtcbiAgZ2FwOiAyNXB4OyAvKiBFc3BhY2lhZG8gcmVkdWNpZG8gY3VhbmRvIGhheSBtw4PCumx0aXBsZXMgZWxlbWVudG9zIGRlIHVzdWFyaW8gKi9cbn1cblxuI3NlYXJjaGlucHV0IHtcbiAgLyogSGFjZW1vcyBlbCBjdWFkcm8gbcODwqFzIGN1YWRyYWRvIHkgYWx0byAqL1xuICBwYWRkaW5nOiAxMHB4IDE2cHg7IC8qIEF1bWVudGFtb3MgZWwgcGFkZGluZyB2ZXJ0aWNhbCBwYXJhIG3Dg8KhcyBhbHR1cmEgKi9cbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogNHB4OyAvKiBSZWR1Y2ltb3MgZWwgcmFkaW8gcGFyYSBoYWNlcmxvIG3Dg8KhcyBjdWFkcmFkbyAqL1xuICB3aWR0aDogMzIwcHg7IC8qIEF1bWVudGFkbyBkZSAyNDBweCBhIDMyMHB4ICovXG4gIGhlaWdodDogMjBweDsgLyogQWx0dXJhIGV4cGzDg8KtY2l0YSBwYXJhIGVsIGNhbXBvICovXG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIEFzZWd1cmEgcXVlIGVsIHBhZGRpbmcgc2Ugc3VtYSBhIGxhIGFsdHVyYSAqL1xufVxuXG4jc2VhcmNoaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbn1cblxuLyogPT09PT0gRVNUSUxPUyBQQVJBIEVMIFBFUkZJTCBDT04gTk9NQlJFIERFIFVTVUFSSU8gWSBMT0dPVVQgPT09PT0gKi9cblxuLyogQ29udGVuZWRvciBwcmluY2lwYWwgZGVsIHBlcmZpbCAqL1xuLnByb2ZpbGUtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBnYXA6IDI1cHg7IC8qIFJlZHVjaWRvIHBhcmEgbWFudGVuZXIgY29uc2lzdGVuY2lhICovXG59XG5cbi8qIEluZm9ybWFjacODwrNuIGRlbCB1c3VhcmlvIChub21icmUgKyBpY29ubyBkZSBwZXJmaWwpIC0gTcODwoFTIFBFR0FET1MgKi9cbi51c2VyLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDsgLyogTm9tYnJlIHBlZ2FkbyBhbCBpY29ubyAqL1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbi51c2VyLWluZm86aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgyLCAxMDIsIDEyMiwgMC4xKTtcbn1cblxuLyogU29sbyBsb2dpbiAoY3VhbmRvIG5vIGVzdMODwqEgbG9ndWVhZG8pICovXG4ubG9naW4tb25seSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweCAxMnB4OyAvKiBDb25zaXN0ZW50ZSBjb24gdXNlci1pbmZvICovXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuXG4ubG9naW4tb25seTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODIsIDEwMiwgMTIyLCAwLjEpO1xufVxuXG4vKiBOb21icmUgZGVsIHVzdWFyaW8gKGEgbGEgZGVyZWNoYSBkZWwgaWNvbm8sIHNpbiBjb3J0YXIpICovXG4udXNlcm5hbWUtZGlzcGxheSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1heC13aWR0aDogMTUwcHg7IC8qIE3Dg8KhcyBhbmNobyBwYXJhIGV2aXRhciBjb3J0ZSAqL1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLyogSG92ZXIgZWZmZWN0IHBhcmEgZWwgbm9tYnJlICovXG4udXNlci1pbmZvOmhvdmVyIC51c2VybmFtZS1kaXNwbGF5IHtcbiAgY29sb3I6ICM1MjY2N2E7XG59XG5cbi8qIEljb25vIGRlIHBlcmZpbC9sb2dpbiAqL1xuI2ltZ3Byb2ZpbGUge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBmbGV4LXNocmluazogMDsgLyogTm8gcGVybWl0aXIgcXVlIGVsIGljb25vIHNlIGhhZ2EgbcODwqFzIHBlcXVlw4PCsW8gKi9cbn1cblxuLyogPT09PT0gRVNUSUxPUyBQQVJBIEVMIElDT05PIERFIExPR09VVCA9PT09PSAqL1xuXG4vKiBDb250ZW5lZG9yIGRlbCBpY29ubyBkZSBsb2dvdXQgKi9cbi5sb2dvdXQtaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA4cHggMTBweDsgLyogTcODwqFzIHBhZGRpbmcgcGFyYSBtw4PCoXMgZsODwqFjaWwgY2xpY2sgKi9cbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbi5sb2dvdXQtaWNvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIwLCA1MywgNjksIDAuMSk7IC8qIEZvbmRvIHJvaml6byBzdXRpbCAqL1xufVxuXG4vKiBJbWFnZW4gZGVsIGxvZ291dCAqL1xuLmxvZ291dC1pbWcge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBvcGFjaXR5OiAwLjc7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbi5sb2dvdXQtaWNvbjpob3ZlciAubG9nb3V0LWltZyB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLyogPT09PT0gRVNUSUxPUyBQQVJBIEVMIENBUlJJVE8gPT09PT0gKi9cblxuLyogQWp1c3RhciBlbCBpY29ubyBkZWwgY2Fycml0byAqL1xuI2NhcnJpdG8ge1xuICAvKiBtYXJnaW4tbGVmdCBtYW5lamFkbyBwb3IgZ2FwIGRlbCBjb250ZW5lZG9yIHBhZHJlICovXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jY2Fycml0byBpbWcge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4jY2Fycml0byBwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMHB4O1xuICByaWdodDogLTEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjY2N2E7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vKiA9PT09PSBFU1RJTE9TIFBBUkEgTE9TIE1FTsODwppTIERFU1BMRUdBQkxFUyA9PT09PSAqL1xuXG4vKiBFZmVjdG8gaG92ZXIgZW4gbG9zIGVsZW1lbnRvcyBkZWwgbWVuw4PCuiAqL1xuLm1lbnVpdGVtOmhvdmVyIHtcbiAgY29sb3I6ICM1MjY2N2E7XG59XG5cbi8qIEVzdGlsb3MgcGFyYSBsb3Mgc3VibWVuw4PCunMgZGVzcGxlZ2FibGVzICovXG4uc3ViY2F0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7IC8qIFBvc2ljaW9uYSBlbCBzdWJtZW7Dg8K6IGp1c3RvIGRlYmFqbyBkZWwgZWxlbWVudG8gcGFkcmUgKi9cbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHg7IC8qIFBhZGRpbmcgaW50ZXJubyAqL1xuICBib3JkZXItcmFkaXVzOiA0cHg7IC8qIEJvcmRlcyBsaWdlcmFtZW50ZSByZWRvbmRlYWRvcyAqL1xuICBib3gtc2hhZG93OiAwIDZweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHotaW5kZXg6IDEwMDtcbiAgbWluLXdpZHRoOiAyNDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDsgLyogRXNwYWNpbyBlbnRyZSBlbCBtZW7Dg8K6IHByaW5jaXBhbCB5IGVsIGRlc3BsZWdhYmxlICovXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7IC8qIEJvcmRlIHN1dGlsIGFscmVkZWRvciBkZWwgbWVuw4PCuiAqL1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7IC8qIFRyYW5zaWNpw4PCs24gc3VhdmUgcGFyYSBhcGFyZWNlci9kZXNhcGFyZWNlciAqL1xuICBvcGFjaXR5OiAwO1xufVxuXG4vKiBBanVzdGFyIGVsIHRpZW1wbyBxdWUgcGVybWFuZWNlIHZpc2libGUgZWwgbWVuw4PCuiBkZXNwdcODwqlzIGRlIHNhbGlyICovXG4uZWxlbSAuc3ViY2F0IHtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi8qIEVsZW1lbnRvcyBkZSBzdWJtZW7Dg8K6IG3Dg8KhcyBhbHRvcyB5IGNvbiBtZWpvciBlc3BhY2lhZG8gKi9cbi5zdWJjYXQgbGkge1xuICBwYWRkaW5nOiAxNXB4IDI1cHg7IC8qIE3Dg8KhcyBhbHR1cmEgcGFyYSBjYWRhIGVsZW1lbnRvIGRlbCBtZW7Dg8K6ICovXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwOyAvKiBVbmEgw4PCum5pY2EgbMODwq1uZWEgZGUgc2VwYXJhY2nDg8KzbiBtw4PCoXMgdmlzaWJsZSAqL1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW46IDA7IC8qIEVsaW1pbmFyIGN1YWxxdWllciBtYXJnZW4gcGFyYSBldml0YXIgZXNwYWNpb3MgZXh0cmFzICovXG4gIGZvbnQtd2VpZ2h0OiA1MDA7IC8qIFRleHRvIG1lbm9zIHBlc2FkbyAqL1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTsgLyogUGFyYSBxdWUgbm8gZXN0w4PCqSBlbiBtYXnDg8K6c2N1bGFzICovXG4gIGZvbnQtc2l6ZTogMTZweDsgLyogVGFtYcODwrFvIGRlIHRleHRvIGFkZWN1YWRvICovXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlOyAvKiBUcmFuc2ljacODwrNuIHN1YXZlIHBhcmEgZWwgaG92ZXIgKi9cbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIEVsaW1pbmFtb3MgZWwgbWFyZ2VuIGVudHJlIGVsZW1lbnRvcyBwYXJhIGV2aXRhciBlbCBlZmVjdG8gZGUgZG9ibGUgbMODwq1uZWEgKi9cbi5zdWJjYXQgbGkgKyBsaSB7XG4gIG1hcmdpbi10b3A6IDA7IC8qIEVsaW1pbmFtb3MgZWwgZXNwYWNpbyBlbnRyZSBlbGVtZW50b3MgcXVlIGNhdXNhYmEgbGEgZG9ibGUgbMODwq1uZWEgKi9cbn1cblxuLnN1YmNhdCBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7IC8qIENvbG9yIG3Dg8KhcyB2aXNpYmxlICovXG4gIGNvbG9yOiAjNTI2NjdhOyAvKiBDb2xvciBjb2hlcmVudGUgY29uIGhvdmVyIHByaW5jaXBhbCAqL1xufVxuXG4vKiBSZWdsYSBjcnVjaWFsIHBhcmEgbW9zdHJhciBlbCBzdWJtZW7Dg8K6IGFsIGhhY2VyIGhvdmVyICovXG4ubWVudWl0ZW0uZWxlbTpob3ZlciAuc3ViY2F0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzOyAvKiBTaW4gcmV0cmFzbyBpbmljaWFsICovXG59XG5cbi8qIEHDg8KxYWRpciB6b25hIGRlIGNvbnRpbnVpZGFkIHBhcmEgZmFjaWxpdGFyIGxhIG5hdmVnYWNpw4PCs24gKi9cbi5zdWJjYXQ6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yMHB4OyAvKiBDb25lY3RhIGNvbiBlbCBwYWRyZSAqL1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgLyogSW52aXNpYmxlIHBlcm8gXCJjYXB0dXJhXCIgZWwgaG92ZXIgKi9cbn1cblxuLyogRWxpbWluYW1vcyBsYSBsw4PCrW5lYSBkZWwgw4PCumx0aW1vIGVsZW1lbnRvICovXG4uc3ViY2F0IGxpOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4vKiBFbGltaW5hciBsw4PCrW5lYSBzdXBlcmlvciBkZWwgcHJpbWVyIGVsZW1lbnRvICovXG4uc3ViY2F0IGxpOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn1cblxuLyogPT09PT0gUkVTUE9OU0lWRSBERVNJR04gPT09PT0gKi9cblxuLyogUmVzcG9uc2l2ZSBwYXJhIGVsIG5vbWJyZSBkZSB1c3VhcmlvIC0gRW4gbcODwrN2aWxlcywgb2N1bHRhciBlbCB0ZXh0byB5IHNvbG8gbW9zdHJhciBpY29ub3MgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAudXNlcm5hbWUtZGlzcGxheSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgLnVzZXItaW5mbyB7XG4gICAgZ2FwOiAwO1xuICB9XG4gIFxuICAucHJvZmlsZS1zZWN0aW9uIHtcbiAgICBnYXA6IDVweDsgLyogUmVkdWNpciBlc3BhY2lvIGVudHJlIGljb25vcyBlbiBtw4PCs3ZpbCAqL1xuICB9XG4gIFxuICAvKiBBanVzdGUgZ2VuZXJhbCBwYXJhIGRpc3Bvc2l0aXZvcyBtw4PCs3ZpbGVzICovXG4gICNtZW51IHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5tZW51aXRlbS5lbGVtLCAubWVudWl0ZW0uaG9tZSwgI2ZpbmNhdCB7XG4gICAgbWFyZ2luOiA1cHggMTVweDtcbiAgfVxuICBcbiAgLnJpZ2h0LWl0ZW1zIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAzMHB4OyAvKiBHYXAgcHJvcG9yY2lvbmFsIGVuIG3Dg8KzdmlsICovXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICB9XG4gIFxuICAvKiBBanVzdGFtb3MgZWwgY2FtcG8gZGUgYsODwrpzcXVlZGEgcGFyYSBkaXNwb3NpdGl2b3MgbcODwrN2aWxlcyAqL1xuICAjc2VhcmNoIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG4gIFxuICAucHJvZmlsZS1zZWN0aW9uIHtcbiAgICBnYXA6IDE1cHg7IC8qIEdhcCBpbnRlcm5vIHJlZHVjaWRvIGVuIG3Dg8KzdmlsICovXG4gIH1cbiAgXG4gIC51c2VyLWluZm8ge1xuICAgIGdhcDogNHB4O1xuICB9XG4gIFxuICAjc2VhcmNoaW5wdXQge1xuICAgIHdpZHRoOiAyMDBweDsgLyogTWFudGVuZW1vcyB1biBhbmNobyBtw4PCoXMgcGVxdWXDg8KxbyBlbiBtw4PCs3ZpbCAqL1xuICB9XG4gIFxuICAvKiBBanVzdGUgcGFyYSBsb3Mgc3VibWVuw4PCunMgZW4gbcODwrN2aWwgKi9cbiAgLnN1YmNhdCB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 7273:
/*!**************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileComponent: () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 7581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _password_confirm_modal_password_confirm_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../password-confirm-modal/password-confirm-modal */ 6450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ 4796);
/* harmony import */ var _historial_pedidos_historial_pedidos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../historial-pedidos/historial-pedidos.component */ 2765);
// Importación para trabajar con formularios reactivos

// Importación para alertas

// ✅ Importar el nuevo componente de modal






class ProfileComponent {
  // Constructor con inyección de dependencias
  constructor(formBuilder,
  // Para crear formularios reactivos
  authService // Para obtener/actualizar datos del usuario
  ) {
    this.formBuilder = formBuilder;
    this.authService = authService;
    // Propiedad para almacenar datos del usuario actual
    this.currentUser = null;
    // Obtener el usuario actual desde el servicio de autenticación
    this.currentUser = this.authService.currentUserValue;
    // Inicializar el formulario con los datos actuales del usuario
    this.profileForm = this.formBuilder.group({
      username: [this.currentUser?.username, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      password: [''],
      email: [this.currentUser?.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
      nombre: [this.currentUser?.nombre, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      direccion: [this.currentUser?.direccion, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      ciudad: [this.currentUser?.ciudad, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      cp: [this.currentUser?.cp, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
  }
  // Método que se ejecuta al inicializar el componente
  ngOnInit() {
    console.log('✅ ProfileComponent inicializado');
    console.log('👤 Usuario actual:', this.currentUser);
  }
  /**
   * Método para iniciar el proceso de actualización del perfil
   * Abre el modal de confirmación de contraseña
   */
  updateProfile() {
    // Validar que el formulario sea válido
    if (this.profileForm.invalid) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: 'Formulario inválido',
        text: 'Por favor, completa todos los campos correctamente',
        icon: 'warning',
        confirmButtonColor: '#52667a'
      });
      return;
    }
    console.log('🔐 Abriendo modal de confirmación de contraseña...');
    // ✅ Abrir el modal profesional
    this.passwordModal.open();
  }
  /**
   * Callback ejecutado cuando el usuario confirma su contraseña correctamente
   * @param password - La contraseña confirmada (ya verificada)
   */
  onPasswordConfirmed(password) {
    console.log('✅ Contraseña confirmada, procediendo a actualizar perfil...');
    if (!this.currentUser) {
      console.error('❌ No hay usuario actual');
      return;
    }
    // Crear objeto usuario con los datos del formulario
    const updatedUser = {
      ...this.profileForm.value,
      id: this.currentUser.id
    };
    // Si no se ingresó nueva contraseña, eliminar esa propiedad
    if (!updatedUser.password || updatedUser.password.trim() === '') {
      delete updatedUser.password;
    }
    console.log('📦 Datos a actualizar:', {
      ...updatedUser,
      password: '***'
    });
    // Llamar al servicio para actualizar los datos
    this.authService.updateUser(updatedUser).subscribe({
      next: data => {
        console.log('✅ Perfil actualizado exitosamente:', data);
        // Actualizar el usuario actual en el componente
        this.currentUser = this.authService.currentUserValue;
        // Si se cambió la contraseña, limpiar el campo
        if (updatedUser.password) {
          this.profileForm.patchValue({
            password: ''
          });
        }
        // Mostrar mensaje de éxito con diseño moderno
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
          title: '¡Perfil actualizado!',
          text: 'Tus datos se han actualizado correctamente',
          icon: 'success',
          confirmButtonColor: '#667eea',
          confirmButtonText: 'Entendido',
          timer: 3000,
          timerProgressBar: true
        });
      },
      error: error => {
        console.error('❌ Error al actualizar perfil:', error);
        // Mostrar mensaje de error detallado
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
          title: 'Error al actualizar',
          text: error.message || 'No se pudieron actualizar los datos. Por favor, intenta de nuevo.',
          icon: 'error',
          confirmButtonColor: '#dc3545',
          confirmButtonText: 'Entendido'
        });
      }
    });
  }
  /**
   * Callback ejecutado cuando el usuario cancela la confirmación de contraseña
   */
  onPasswordCancelled() {
    console.log('❌ Actualización de perfil cancelada por el usuario');
    // Opcional: Mostrar un mensaje sutil
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: 'Actualización cancelada',
      text: 'No se realizaron cambios en tu perfil',
      icon: 'info',
      confirmButtonColor: '#52667a',
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false
    });
  }
  static {
    this.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      viewQuery: function ProfileComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_password_confirm_modal_password_confirm_modal__WEBPACK_IMPORTED_MODULE_1__.PasswordConfirmModalComponent, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.passwordModal = _t.first);
        }
      },
      decls: 45,
      vars: 2,
      consts: [["id", "divdatos"], ["id", "titulo"], [3, "formGroup", "ngSubmit"], ["type", "text", "id", "txtusername", "formControlName", "username", "size", "10"], ["type", "password", "id", "txtpass", "formControlName", "password", "size", "10", "placeholder", "Dejar vac\u00EDo para no cambiar"], ["type", "email", "id", "txtemail", "formControlName", "email", "size", "20"], ["type", "text", "id", "txtnombre", "formControlName", "nombre", "size", "25"], ["type", "text", "id", "txtdireccion", "formControlName", "direccion", "size", "30"], ["type", "text", "id", "txtciudad", "formControlName", "ciudad", "size", "15"], ["type", "text", "id", "txtcp", "formControlName", "cp", "size", "5"], ["colspan", "2", 2, "text-align", "center"], ["type", "submit", "id", "actualizarDatos", "value", "ACTUALIZAR DATOS", 3, "disabled"], [3, "confirmed", "cancelled"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Datos");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "form", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_3_listener() {
            return ctx.updateProfile();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "table")(5, "tr")(6, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Nombre de usuario:");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "tr")(11, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Contrase\u00F1a:");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "tr")(16, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "E-mail:");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "tr")(21, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Nombre completo:");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "tr")(26, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Direcci\u00F3n:");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "tr")(31, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Ciudad:");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "tr")(36, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "C\u00F3digo postal:");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](39, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "tr")(41, "td", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "app-historial-pedidos");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "app-password-confirm-modal", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("confirmed", function ProfileComponent_Template_app_password_confirm_modal_confirmed_44_listener($event) {
            return ctx.onPasswordConfirmed($event);
          })("cancelled", function ProfileComponent_Template_app_password_confirm_modal_cancelled_44_listener() {
            return ctx.onPasswordCancelled();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.profileForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.profileForm.valid);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _historial_pedidos_historial_pedidos_component__WEBPACK_IMPORTED_MODULE_3__.HistorialPedidosComponent, _password_confirm_modal_password_confirm_modal__WEBPACK_IMPORTED_MODULE_1__.PasswordConfirmModalComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1620:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 4796);
/* harmony import */ var _services_login_popup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/login-popup.service */ 6764);




class AuthGuard {
  constructor(router, authService, loginPopupService) {
    this.router = router;
    this.authService = authService;
    this.loginPopupService = loginPopupService;
  }
  canActivate(route, state) {
    console.log('🛡️ AuthGuard verificando acceso a:', state.url);
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
      console.log('✅ Usuario autenticado:', currentUser.username);
      return true;
    }
    console.log('❌ Usuario no autenticado, abriendo popup de login');
    // ✅ SOLO abrir popup, NO navegar
    this.loginPopupService.openForCheckout(state.url);
    // ✅ Simplemente retornar false para bloquear la navegación
    return false;
  }
  static {
    this.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_login_popup_service__WEBPACK_IMPORTED_MODULE_1__.LoginPopupService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 9504:
/*!*************************************************!*\
  !*** ./src/app/helpers/product-image-helper.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductImageHelper: () => (/* binding */ ProductImageHelper)
/* harmony export */ });
// src/app/helpers/product-image-helper.ts - VERSIÓN COMPLETA CORREGIDA
class ProductImageHelper {
  // ✅ MAPEO COMPLETO ACTUALIZADO
  static {
    this.PRODUCT_FOLDER_MAP = {
      // ========== ANILLOS (dentro de piercing/) ==========
      'anillo con corazón': {
        folder: 'piercing/anillo/anillo-corazon',
        colors: ['dorado', 'negro', 'plateado'],
        fallbackColor: 'dorado'
      },
      'anillo corazón': {
        folder: 'piercing/anillo/anillo-corazon',
        colors: ['dorado', 'negro', 'plateado'],
        fallbackColor: 'dorado'
      },
      'anillo con corazon': {
        folder: 'piercing/anillo/anillo-corazon',
        colors: ['dorado', 'negro', 'plateado'],
        fallbackColor: 'dorado'
      },
      'anillo corazon': {
        folder: 'piercing/anillo/anillo-corazon',
        colors: ['dorado', 'negro', 'plateado'],
        fallbackColor: 'dorado'
      },
      'anillo con bisagra': {
        folder: 'piercing/anillo/anillo-bisagra',
        colors: ['dorado', 'azul', 'cobre', 'negro', 'multicolor'],
        fallbackColor: 'dorado'
      },
      'anillo bisagra': {
        folder: 'piercing/anillo/anillo-bisagra',
        colors: ['dorado', 'azul', 'cobre', 'negro', 'multicolor'],
        fallbackColor: 'dorado'
      },
      'anillo fino': {
        folder: 'piercing/anillo/anillo-bisagra',
        colors: ['azul', 'cobre', 'dorado', 'negro', 'multicolor'],
        fallbackColor: 'dorado'
      },
      'aro para nostril': {
        folder: 'piercing/anillo/aro-nostril',
        colors: ['azul', 'multicolor', 'negro'],
        fallbackColor: 'azul'
      },
      'aro nostril': {
        folder: 'piercing/anillo/aro-nostril',
        colors: ['azul', 'multicolor', 'negro'],
        fallbackColor: 'azul'
      },
      'segment ring': {
        folder: 'piercing/anillo/segment-ring',
        colors: ['dorado', 'azul', 'multicolor', 'rosa'],
        fallbackColor: 'dorado'
      },
      // ========== BANANAS (dentro de piercing/) ==========
      'banana con rosa': {
        folder: 'piercing/banana/banana-flor',
        colors: ['rosa', 'azul', 'celeste', 'rojo', 'verde'],
        fallbackColor: 'rosa'
      },
      'banana flor': {
        folder: 'piercing/banana/banana-flor',
        colors: ['azul', 'celeste', 'rojo', 'rosa', 'verde'],
        fallbackColor: 'rosa'
      },
      'banana con flor': {
        folder: 'piercing/banana/banana-flor',
        colors: ['rosa', 'azul', 'celeste', 'rojo', 'verde'],
        fallbackColor: 'rosa'
      },
      'banana con gema': {
        folder: 'piercing/banana/banana-gema',
        colors: ['azul', 'morado', 'transparente', 'rojo', 'verde', 'trebol'],
        fallbackColor: 'azul'
      },
      'banana gema': {
        folder: 'piercing/banana/banana-gema',
        colors: ['azul', 'morado', 'transparente', 'rojo', 'verde', 'trebol'],
        fallbackColor: 'azul'
      },
      'banana simple': {
        folder: 'piercing/banana/banana-simple',
        colors: ['dorado', 'plateado', 'multicolor'],
        fallbackColor: 'dorado'
      },
      'banana para ombligo dorada': {
        folder: 'piercing/banana/banana-simple',
        colors: ['dorado'],
        fallbackColor: 'dorado'
      },
      'banana para ombligo plateada': {
        folder: 'piercing/banana/banana-simple',
        colors: ['plateado'],
        fallbackColor: 'plateado'
      },
      // ========== BARBELLS (dentro de piercing/) ==========
      'barbell con alas': {
        folder: 'piercing/barbell/barbell-alas',
        colors: ['plateado'],
        fallbackColor: 'plateado'
      },
      'barbells alas': {
        folder: 'piercing/barbell/barbell-alas',
        colors: ['plateado'],
        fallbackColor: 'plateado'
      },
      'barbell alas': {
        folder: 'piercing/barbell/barbell-alas',
        colors: ['plateado'],
        fallbackColor: 'plateado'
      },
      'barbell flecha': {
        folder: 'piercing/barbell/barbell-flecha',
        colors: ['dorado', 'negro', 'plateado'],
        fallbackColor: 'dorado'
      },
      'barbells flecha': {
        folder: 'piercing/barbell/barbell-flecha',
        colors: ['dorado', 'negro', 'plateado'],
        fallbackColor: 'dorado'
      },
      'barbell con flecha': {
        folder: 'piercing/barbell/barbell-flecha',
        colors: ['dorado', 'negro', 'plateado'],
        fallbackColor: 'dorado'
      },
      'barbell largo': {
        folder: 'piercing/barbell/barbell-largo',
        colors: ['dorado', 'azul', 'cobre', 'multicolor'],
        fallbackColor: 'dorado'
      },
      'barbells largo': {
        folder: 'piercing/barbell/barbell-largo',
        colors: ['dorado', 'azul', 'cobre', 'multicolor'],
        fallbackColor: 'dorado'
      },
      // ========== CIRCULAR BARBELLS (dentro de piercing/) ==========
      'circular barbell con piedra': {
        folder: 'piercing/circular-barbell/circular-barbell-piedra',
        colors: ['cristal', 'negro'],
        fallbackColor: 'cristal'
      },
      'circular barbell piedra': {
        folder: 'piercing/circular-barbell/circular-barbell-piedra',
        colors: ['cristal', 'negro'],
        fallbackColor: 'cristal'
      },
      'circular barbell con flecha': {
        folder: 'piercing/circular-barbell/circular-barbell-coni',
        colors: ['dorado', 'cobre', 'negro'],
        fallbackColor: 'dorado'
      },
      'circular barbell flecha': {
        folder: 'piercing/circular-barbell/circular-barbell-coni',
        colors: ['dorado', 'cobre', 'negro'],
        fallbackColor: 'dorado'
      },
      'circular barbell con bola cóni': {
        folder: 'piercing/circular-barbell/circular-barbell-coni',
        colors: ['dorado', 'cobre', 'negro'],
        fallbackColor: 'dorado'
      },
      'circular barbell con bola coni': {
        folder: 'piercing/circular-barbell/circular-barbell-coni',
        colors: ['dorado', 'cobre', 'negro'],
        fallbackColor: 'dorado'
      },
      // ========== LABRETS (dentro de piercing/) ==========
      'labret corazón': {
        folder: 'piercing/labret/labret-corazon',
        colors: ['dorado', 'negro', 'plateado', 'rosa'],
        fallbackColor: 'dorado'
      },
      'labret con corazón': {
        folder: 'piercing/labret/labret-corazon',
        colors: ['dorado', 'negro', 'plateado', 'rosa'],
        fallbackColor: 'dorado'
      },
      'labret corazon': {
        folder: 'piercing/labret/labret-corazon',
        colors: ['dorado', 'negro', 'plateado', 'rosa'],
        fallbackColor: 'dorado'
      },
      'labret simple': {
        folder: 'piercing/labret/labret-simple',
        colors: ['dorado', 'cobre', 'negro', 'multicolor'],
        fallbackColor: 'dorado'
      },
      'labret triángulo': {
        folder: 'piercing/labret/labret-triangulos',
        colors: ['dorado', 'negro', 'plateado', 'rosa'],
        fallbackColor: 'dorado'
      },
      'labret triangulo': {
        folder: 'piercing/labret/labret-triangulos',
        colors: ['dorado', 'negro', 'plateado', 'rosa'],
        fallbackColor: 'dorado'
      },
      'labret con triángulo': {
        folder: 'piercing/labret/labret-triangulos',
        colors: ['dorado', 'negro', 'plateado', 'rosa'],
        fallbackColor: 'dorado'
      },
      'labret triangulos': {
        folder: 'piercing/labret/labret-triangulos',
        colors: ['dorado', 'negro', 'plateado', 'rosa'],
        fallbackColor: 'dorado'
      },
      // ========== PLUGS - CORRECCIÓN CRÍTICA ==========
      "plug": {
        folder: 'dilatador/plug/plug-simple',
        colors: ['verde', 'azul', 'blanco', 'morado', 'negro'],
        fallbackColor: 'verde'
      },
      'plug simple': {
        folder: 'dilatador/plug/plug-simple',
        colors: ['verde', 'azul', 'blanco', 'morado', 'negro'],
        fallbackColor: 'verde'
      },
      'plug de acrílico': {
        folder: 'dilatador/plug/plug-simple',
        colors: ['verde', 'azul', 'blanco', 'morado', 'negro'],
        fallbackColor: 'verde'
      },
      'plug de acrilico': {
        folder: 'dilatador/plug/plug-simple',
        colors: ['verde', 'azul', 'blanco', 'morado', 'negro'],
        fallbackColor: 'verde'
      },
      'plug de silicona': {
        folder: 'dilatador/plug/plug-dobles',
        colors: ['azul', 'beige', 'morado', 'rojo', 'verde'],
        fallbackColor: 'azul'
      },
      'plug silicona': {
        folder: 'dilatador/plug/plug-dobles',
        colors: ['azul', 'beige', 'morado', 'rojo', 'verde'],
        fallbackColor: 'azul'
      },
      // ✅ CRÍTICO: Plug con corazón - SOLO CAOBA
      // ✅ VERSIÓN CORRECTA (cámbiala por esta):
      'plug con corazón': {
        folder: 'dilatador/plug/plug-dobles',
        colors: ['caoba'],
        fallbackColor: 'caoba'
      },
      'plug con corazon': {
        folder: 'dilatador/plug/plug-dobles',
        colors: ['caoba'],
        fallbackColor: 'caoba'
      },
      'plug doble': {
        folder: 'dilatador/plug/plug-dobles',
        colors: ['azul', 'beige', 'morado', 'rojo', 'verde'],
        fallbackColor: 'azul'
      },
      'plug dobles': {
        folder: 'dilatador/plug/plug-dobles',
        colors: ['azul', 'beige', 'morado', 'rojo', 'verde'],
        fallbackColor: 'azul'
      },
      // ========== DILATADORES Y EXPANDERS ==========
      'set de dilatadores': {
        folder: 'dilatador/set-dilatadores',
        colors: ['rosa', 'blanco', 'plateado', 'violeta'],
        fallbackColor: 'rosa'
      },
      'set dilatadores': {
        folder: 'dilatador/set-dilatadores',
        colors: ['rosa', 'blanco', 'plateado', 'violeta'],
        fallbackColor: 'rosa'
      },
      'set de expanders de 1.1 a 15 mm': {
        folder: 'dilatador/set-dilatadores',
        colors: ['blanco', 'rosa', 'plateado', 'violeta'],
        fallbackColor: 'rosa'
      },
      'set de expanders de 1,1 a 15 mm': {
        folder: 'dilatador/set-dilatadores',
        colors: ['blanco', 'rosa', 'plateado', 'violeta'],
        fallbackColor: 'rosa'
      },
      dilatador: {
        folder: 'dilatador/dilatador simple',
        colors: ['negro', 'rojo'],
        fallbackColor: 'negro'
      },
      dilatadores: {
        folder: 'dilatador/dilatador simple',
        colors: ['negro', 'rojo'],
        fallbackColor: 'negro'
      },
      'expander duo': {
        folder: 'dilatador/expander/expander-duo',
        colors: ['celeste', 'dorado', 'verde'],
        fallbackColor: 'celeste'
      },
      'expander con duo': {
        folder: 'dilatador/expander/expander-duo',
        colors: ['celeste', 'dorado', 'verde'],
        fallbackColor: 'celeste'
      },
      'expander medusa': {
        folder: 'dilatador/expander/expander-medusa',
        colors: ['negro', 'verde'],
        fallbackColor: 'negro'
      },
      'expander con medusa': {
        folder: 'dilatador/expander/expander-medusa',
        colors: ['negro', 'verde'],
        fallbackColor: 'negro'
      },
      'expander espiral': {
        folder: 'dilatador/expander/expander-duo',
        colors: ['celeste', 'morado', 'verde'],
        fallbackColor: 'celeste'
      },
      'expander en espiral': {
        folder: 'dilatador/expander/expander-duo',
        colors: ['celeste', 'morado', 'verde'],
        fallbackColor: 'celeste'
      },
      'set de expanders curvados': {
        folder: 'dilatador/expander/expander-medusa',
        colors: ['negro', 'verde'],
        fallbackColor: 'negro'
      },
      'set de expanders': {
        folder: 'dilatador/set-dilatadores',
        colors: ['blanco', 'rosa', 'plateado', 'violeta'],
        fallbackColor: 'blanco'
      },
      'set expanders curvados': {
        folder: 'dilatador/expander/expander-medusa',
        colors: ['negro', 'verde'],
        fallbackColor: 'negro'
      },
      'set expanders': {
        folder: 'dilatador/set-dilatadores',
        colors: ['blanco', 'rosa', 'plateado', 'violeta'],
        fallbackColor: 'blanco'
      },
      // ========== TÚNELES ==========
      'túnel de acrílico': {
        folder: 'dilatador/tunel/tunel-acrilico',
        colors: ['rojo', 'azul', 'blanco', 'negro', 'amarillo'],
        fallbackColor: 'rojo'
      },
      'tunel de acrílico': {
        folder: 'dilatador/tunel/tunel-acrilico',
        colors: ['rojo', 'azul', 'blanco', 'negro', 'amarillo'],
        fallbackColor: 'rojo'
      },
      'túnel acrílico': {
        folder: 'dilatador/tunel/tunel-acrilico',
        colors: ['rojo', 'azul', 'blanco', 'negro', 'amarillo'],
        fallbackColor: 'rojo'
      },
      'tunel acrilico': {
        folder: 'dilatador/tunel/tunel-acrilico',
        colors: ['rojo', 'azul', 'blanco', 'negro', 'amarillo'],
        fallbackColor: 'rojo'
      },
      'túnel de metal': {
        folder: 'dilatador/tunel/tunel-metal',
        colors: ['dorado', 'azul', 'cobre'],
        fallbackColor: 'dorado'
      },
      'tunel de metal': {
        folder: 'dilatador/tunel/tunel-metal',
        colors: ['dorado', 'azul', 'cobre'],
        fallbackColor: 'dorado'
      },
      'túnel metal': {
        folder: 'dilatador/tunel/tunel-metal',
        colors: ['dorado', 'azul', 'cobre'],
        fallbackColor: 'dorado'
      },
      'tunel metal': {
        folder: 'dilatador/tunel/tunel-metal',
        colors: ['dorado', 'azul', 'cobre'],
        fallbackColor: 'dorado'
      },
      'túnel de acero': {
        folder: 'dilatador/tunel/tunel-metal',
        colors: ['dorado', 'azul', 'cobre'],
        fallbackColor: 'dorado'
      },
      'tunel de acero': {
        folder: 'dilatador/tunel/tunel-metal',
        colors: ['dorado', 'azul', 'cobre'],
        fallbackColor: 'dorado'
      },
      'túnel orfebre': {
        folder: 'dilatador/tunel/tunel-orfebre',
        colors: ['dorado', 'plateado'],
        fallbackColor: 'dorado'
      },
      'tunel orfebre': {
        folder: 'dilatador/tunel/tunel-orfebre',
        colors: ['dorado', 'plateado'],
        fallbackColor: 'dorado'
      },
      'túnel mandala': {
        folder: 'dilatador/tunel/tunel-orfebre',
        colors: ['dorado', 'plateado'],
        fallbackColor: 'dorado'
      },
      'tunel mandala': {
        folder: 'dilatador/tunel/tunel-orfebre',
        colors: ['dorado', 'plateado'],
        fallbackColor: 'dorado'
      },
      'túnel de silicona': {
        folder: 'dilatador/tunel/tunel-silicona',
        colors: ['azul', 'blanco', 'rojo', 'rosa', 'negro', 'verde'],
        fallbackColor: 'azul'
      },
      'tunel de silicona': {
        folder: 'dilatador/tunel/tunel-silicona',
        colors: ['azul', 'blanco', 'rojo', 'rosa', 'negro', 'verde'],
        fallbackColor: 'azul'
      },
      'túnel silicona': {
        folder: 'dilatador/tunel/tunel-silicona',
        colors: ['azul', 'blanco', 'rojo', 'rosa', 'negro', 'verde'],
        fallbackColor: 'azul'
      },
      'tunel silicona': {
        folder: 'dilatador/tunel/tunel-silicona',
        colors: ['azul', 'blanco', 'rojo', 'rosa', 'negro', 'verde'],
        fallbackColor: 'azul'
      },
      túnel: {
        folder: 'dilatador/tunel/tunel-silicona',
        colors: ['azul', 'blanco', 'rojo', 'rosa', 'negro', 'verde'],
        fallbackColor: 'azul'
      },
      tunel: {
        folder: 'dilatador/tunel/tunel-silicona',
        colors: ['azul', 'blanco', 'rojo', 'rosa', 'negro', 'verde'],
        fallbackColor: 'azul'
      },
      piercing: {
        folder: 'piercing/anillo/anillo-bisagra',
        colors: ['cobre', 'dorado', 'negro', 'multicolor'],
        fallbackColor: 'dorado'
      }
    };
  }
  static getProductImageSrc(product, selectedColor) {
    if (!product || !product.nombre) {
      return this.getFallbackImage();
    }
    const nombre = product.nombre.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
    console.log('🖼️ getProductImageSrc:', {
      nombre,
      nombreOriginal: product.nombre,
      selectedColor,
      carpetaimg: product.carpetaimg
    });
    // ✅ REGLA ESPECIAL 1: Plug con corazón - HARDCODED
    if (nombre.includes('plug con corazon') || nombre.includes('plug con corazón')) {
      console.log('🎯 PLUG CON CORAZÓN detectado');
      return 'assets/images/dilatador/plug/plug-dobles/caoba.jpg';
    }
    // ✅ REGLA ESPECIAL 2: "Plug" genérico SOLO si es EXACTAMENTE "plug"
    // ⚠️ IMPORTANTE: Debe ir DESPUÉS de buscar en el mapeo
    // Para que "plug de silicona", "plug doble", etc. se procesen primero
    // ESTRATEGIA 1: Buscar configuración específica PRIMERO
    const productConfig = this.findProductConfig(nombre);
    if (productConfig) {
      console.log('✅ Config encontrada:', productConfig.folder);
      const imagePath = this.getImagePathForProduct(productConfig, selectedColor, nombre);
      console.log('✅ Ruta final:', imagePath);
      return imagePath;
    }
    // ESTRATEGIA 2: Buscar por palabras clave
    const keywordConfig = this.findByKeywords(nombre);
    if (keywordConfig) {
      console.log('✅ Keyword config:', keywordConfig.folder);
      const imagePath = this.getImagePathForProduct(keywordConfig, selectedColor, nombre);
      console.log('✅ Ruta final:', imagePath);
      return imagePath;
    }
    // ESTRATEGIA 3: Buscar por tipo
    const typeConfig = this.findByProductType(nombre);
    if (typeConfig) {
      console.log('✅ Type config:', typeConfig.folder);
      const imagePath = this.getImagePathForProduct(typeConfig, selectedColor, nombre);
      console.log('✅ Ruta final:', imagePath);
      return imagePath;
    }
    // ✅ SOLO SI NO SE ENCONTRÓ NADA y es exactamente "plug", usar fallback de plug genérico
    if (nombre === "plug") {
      console.log('🎯 PLUG GENÉRICO detectado como último recurso');
      return 'assets/images/dilatador/plug/plug-simple/negro.jpg';
    }
    // ESTRATEGIA 4: Fallback
    console.warn('⚠️ No se encontró configuración para:', nombre);
    return this.getFallbackImage();
  }
  /**
   * ✅ OBTENER COLORES DISPONIBLES
   */
  static getAvailableColors(productName) {
    const nombre = productName.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
    console.log('🎨 getAvailableColors para:', nombre);
    // ✅ REGLA ESPECIAL: Plug con corazón
    if (nombre.includes('plug con corazon') || nombre.includes('plug con corazón')) {
      console.log('🎯 Retornando solo [caoba]');
      return ['caoba'];
    }
    const config = this.findProductConfig(nombre) || this.findByKeywords(nombre) || this.findByProductType(nombre);
    if (config) {
      // Filtrar "default" de los colores visibles
      const colorsFiltered = config.colors.filter(c => c.toLowerCase() !== 'default');
      return colorsFiltered.length > 0 ? colorsFiltered : ['Estándar'];
    }
    return ['Estándar'];
  }
  /**
   * ✅ FALLBACK IMAGE
   */
  static getFallbackImage() {
    return 'assets/images/default.jpg';
  }
  /**
   * ✅ BUSCAR CONFIGURACIÓN ESPECÍFICA
   */
  static findProductConfig(productName) {
    const normalizedName = productName.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
    for (const [key, config] of Object.entries(this.PRODUCT_FOLDER_MAP)) {
      const normalizedKey = key.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
      if (normalizedName === normalizedKey) {
        console.log(`🎯 Configuración exacta: ${key}`);
        return config;
      }
    }
    return null;
  }
  /**
   * ✅ BUSCAR POR PALABRAS CLAVE
   */
  static findByKeywords(productName) {
    if (productName.includes('plug con corazon') || productName.includes('plug con corazón')) {
      return null;
    }
    const keywordMap = {
      bisagra: {
        folder: 'piercing/anillo/anillo-bisagra',
        colors: ['dorado', 'azul', 'cobre', 'negro', 'multicolor'],
        fallbackColor: 'dorado'
      },
      corazon: {
        folder: 'piercing/anillo/anillo-corazon',
        colors: ['dorado', 'negro', 'plateado'],
        fallbackColor: 'dorado'
      },
      triangulo: {
        folder: 'piercing/labret/labret-triangulos',
        colors: ['dorado', 'negro', 'plateado', 'rosa'],
        fallbackColor: 'dorado'
      },
      flecha: {
        folder: 'piercing/barbell/barbell-flecha',
        colors: ['dorado', 'negro', 'plateado'],
        fallbackColor: 'plateado'
      },
      alas: {
        folder: 'piercing/barbell/barbell-alas',
        colors: ['plateado'],
        fallbackColor: 'plateado'
      },
      gema: {
        folder: 'piercing/banana/banana-gema',
        colors: ['azul', 'morado', 'transparente', 'rojo', 'verde'],
        fallbackColor: 'azul'
      },
      acrilico: {
        folder: 'dilatador/tunel/tunel-acrilico',
        colors: ['azul', 'blanco', 'rojo', 'negro', 'amarillo'],
        fallbackColor: 'azul'
      },
      acrílico: {
        folder: 'dilatador/tunel/tunel-acrilico',
        colors: ['azul', 'blanco', 'rojo', 'negro', 'amarillo'],
        fallbackColor: 'azul'
      },
      metal: {
        folder: 'dilatador/tunel/tunel-metal',
        colors: ['azul', 'cobre', 'dorado'],
        fallbackColor: 'dorado'
      },
      acero: {
        folder: 'dilatador/tunel/tunel-metal',
        colors: ['azul', 'cobre', 'dorado'],
        fallbackColor: 'dorado'
      },
      orfebre: {
        folder: 'dilatador/tunel/tunel-orfebre',
        colors: ['dorado', 'plateado'],
        fallbackColor: 'dorado'
      },
      mandala: {
        folder: 'dilatador/tunel/tunel-orfebre',
        colors: ['dorado', 'plateado'],
        fallbackColor: 'dorado'
      },
      silicona: {
        folder: 'dilatador/tunel/tunel-silicona',
        colors: ['azul', 'blanco', 'rojo', 'rosa', 'negro', 'verde'],
        fallbackColor: 'azul'
      },
      nostril: {
        folder: 'piercing/anillo/aro-nostril',
        colors: ['azul', 'multicolor', 'negro'],
        fallbackColor: 'azul'
      },
      ombligo: {
        folder: 'piercing/banana/banana-simple',
        colors: ['dorado', 'plateado', 'multicolor'],
        fallbackColor: 'dorado'
      },
      piedra: {
        folder: 'piercing/circular-barbell/circular-barbell-piedra',
        colors: ['cristal', 'negro'],
        fallbackColor: 'cristal'
      },
      cóni: {
        folder: 'piercing/circular-barbell/circular-barbell-coni',
        colors: ['dorado', 'cobre', 'negro'],
        fallbackColor: 'dorado'
      },
      coni: {
        folder: 'piercing/circular-barbell/circular-barbell-coni',
        colors: ['dorado', 'cobre', 'negro'],
        fallbackColor: 'dorado'
      },
      bola: {
        folder: 'piercing/circular-barbell/circular-barbell-coni',
        colors: ['dorado', 'cobre', 'negro'],
        fallbackColor: 'dorado'
      },
      duo: {
        folder: 'dilatador/expander/expander-duo',
        colors: ['celeste', 'dorado', 'verde'],
        fallbackColor: 'celeste'
      },
      medusa: {
        folder: 'dilatador/expander/expander-medusa',
        colors: ['negro', 'verde'],
        fallbackColor: 'negro'
      },
      espiral: {
        folder: 'dilatador/expander/expander-duo',
        colors: ['celeste', 'dorado', 'verde'],
        fallbackColor: 'celeste'
      },
      curvados: {
        folder: 'dilatador/expander/expander-medusa',
        colors: ['negro', 'verde'],
        fallbackColor: 'negro'
      },
      curvado: {
        folder: 'dilatador/expander/expander-medusa',
        colors: ['negro', 'verde'],
        fallbackColor: 'negro'
      },
      rosa: {
        folder: 'piercing/banana/banana-flor',
        colors: ['azul', 'celeste', 'rojo', 'rosa', 'verde'],
        fallbackColor: 'rosa'
      },
      flor: {
        folder: 'piercing/banana/banana-flor',
        colors: ['azul', 'celeste', 'rojo', 'rosa', 'verde'],
        fallbackColor: 'rosa'
      }
    };
    for (const [keyword, config] of Object.entries(keywordMap)) {
      if (productName.includes(keyword)) {
        console.log(`🎯 Keyword match: "${keyword}"`);
        return config;
      }
    }
    return null;
  }
  /**
   * ✅ BUSCAR POR TIPO DE PRODUCTO
   */
  static findByProductType(productName) {
    const typeMap = {
      anillo: {
        folder: 'piercing/anillo/anillo-bisagra',
        colors: ['dorado', 'azul', 'cobre', 'negro', 'multicolor'],
        fallbackColor: 'dorado'
      },
      aro: {
        folder: 'piercing/anillo/aro-nostril',
        colors: ['azul', 'multicolor', 'negro'],
        fallbackColor: 'azul'
      },
      banana: {
        folder: 'piercing/banana/banana-simple',
        colors: ['dorado', 'plateado', 'multicolor'],
        fallbackColor: 'dorado'
      },
      barbell: {
        folder: 'piercing/barbell/barbell-flecha',
        colors: ['dorado', 'negro', 'plateado'],
        fallbackColor: 'plateado'
      },
      labret: {
        folder: 'piercing/labret/labret-simple',
        colors: ['cobre', 'dorado', 'negro', 'multicolor'],
        fallbackColor: 'dorado'
      },
      plug: {
        folder: 'dilatador/plug/plug-simple',
        colors: ['amarillo', 'azul', 'blanco', 'morado', 'negro', 'verde'],
        fallbackColor: 'negro'
      },
      tunel: {
        folder: 'dilatador/tunel/tunel-silicona',
        colors: ['azul', 'blanco', 'rojo', 'rosa', 'negro', 'verde'],
        fallbackColor: 'azul'
      },
      túnel: {
        folder: 'dilatador/tunel/tunel-silicona',
        colors: ['azul', 'blanco', 'rojo', 'rosa', 'negro', 'verde'],
        fallbackColor: 'azul'
      },
      expander: {
        folder: 'dilatador/expander/expander-duo',
        colors: ['celeste', 'dorado', 'verde'],
        fallbackColor: 'celeste'
      },
      dilatador: {
        folder: 'dilatador/dilatador simple',
        colors: ['negro', 'rojo'],
        fallbackColor: 'negro'
      },
      piercing: {
        folder: 'piercing/anillo/anillo-bisagra',
        colors: ['dorado', 'azul', 'cobre', 'negro', 'multicolor'],
        fallbackColor: 'dorado'
      },
      circular: {
        folder: 'piercing/circular-barbell/circular-barbell-piedra',
        colors: ['cristal', 'negro'],
        fallbackColor: 'cristal'
      },
      set: {
        folder: 'dilatador/set-dilatadores',
        colors: ['blanco', 'rosa', 'plateado', 'violeta'],
        fallbackColor: 'rosa'
      }
    };
    for (const [type, config] of Object.entries(typeMap)) {
      if (productName.includes(type)) {
        console.log(`🎯 Type match: "${type}"`);
        return config;
      }
    }
    return null;
  }
  /**
   * ✅ OBTENER RUTA DE IMAGEN
   */
  static getImagePathForProduct(config, selectedColor, productName) {
    const {
      folder,
      colors,
      fallbackColor
    } = config;
    console.log('🔧 getImagePathForProduct:', {
      folder,
      selectedColor,
      fallbackColor,
      colors: colors.slice(0, 3) // Solo mostrar primeros 3 para no saturar logs
    });
    // ✅ PASO 1: Si hay un color seleccionado y está disponible
    if (selectedColor) {
      const colorLower = selectedColor.toLowerCase();
      const colorsLower = colors.map(c => c.toLowerCase());
      if (colorsLower.includes(colorLower)) {
        const imagePath = `assets/images/${folder}/${colorLower}.jpg`;
        console.log('🎨 Color seleccionado:', imagePath);
        return imagePath;
      }
    }
    // ✅ PASO 2: Usar el color de fallback
    if (fallbackColor) {
      const fallbackLower = fallbackColor.toLowerCase();
      const colorsLower = colors.map(c => c.toLowerCase());
      if (colorsLower.includes(fallbackLower)) {
        const imagePath = `assets/images/${folder}/${fallbackLower}.jpg`;
        console.log('🔄 Usando fallback:', imagePath);
        return imagePath;
      }
    }
    // ✅ PASO 3: Usar el primer color disponible
    if (colors.length > 0) {
      const firstColor = colors[0].toLowerCase();
      const imagePath = `assets/images/${folder}/${firstColor}.jpg`;
      console.log('📌 Usando primer color:', imagePath);
      return imagePath;
    }
    // ✅ PASO 4: Fallback final
    console.warn('⚠️ Sin colores disponibles para:', folder);
    return this.getFallbackImage();
  }
  /**
   * ✅ VERIFICAR SI EXISTE VARIANTE DE COLOR
   */
  static hasColorVariant(productName, color) {
    const availableColors = this.getAvailableColors(productName);
    return availableColors.includes(color.toLowerCase());
  }
  /**
   * ✅ OBTENER CARPETA DEL PRODUCTO
   */
  static getProductFolder(productName) {
    const config = this.findProductConfig(productName.toLowerCase()) || this.findByKeywords(productName.toLowerCase()) || this.findByProductType(productName.toLowerCase());
    return config ? config.folder : 'default';
  }
  /**
   * ✅ DEBUG DEL PRODUCTO
   */
  static debugProduct(productName) {
    console.group(`🛠 Debug para producto: ${productName}`);
    const config = this.findProductConfig(productName.toLowerCase()) || this.findByKeywords(productName.toLowerCase()) || this.findByProductType(productName.toLowerCase());
    if (config) {
      console.log('📁 Carpeta:', config.folder);
      console.log('🎨 Colores disponibles:', config.colors);
      console.log('🔄 Color de fallback:', config.fallbackColor);
      console.log('🖼️ Imagen por defecto:', this.getImagePathForProduct(config, undefined, productName));
      config.colors.forEach(color => {
        console.log(`  • ${color}: ${this.getImagePathForProduct(config, color, productName)}`);
      });
    } else {
      console.log('❌ No se encontraron configuraciones para este producto');
    }
    console.groupEnd();
  }
}

/***/ }),

/***/ 472:
/*!**************************************************!*\
  !*** ./src/app/interceptors/auth.interceptor.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthInterceptor: () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 4796);


class AuthInterceptor {
  constructor(authService) {
    this.authService = authService;
  }
  intercept(request, next) {
    // Obtener el usuario actual completo
    const currentUser = this.authService.currentUserValue;
    const token = currentUser?.token;
    console.log('🔐 AuthInterceptor - Interceptando petición:', {
      url: request.url,
      method: request.method,
      hasUser: !!currentUser,
      hasToken: !!token,
      tokenPreview: token ? token.substring(0, 20) + '...' : 'NO TOKEN'
    });
    // Si existe token, añadirlo a los headers
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('✅ Token JWT añadido a la petición');
    } else {
      console.warn('⚠️ No hay token disponible para añadir a la petición');
      console.warn('⚠️ Estado del usuario:', {
        hasCurrentUser: !!currentUser,
        username: currentUser?.username,
        userKeys: currentUser ? Object.keys(currentUser) : []
      });
    }
    return next.handle(request);
  }
  static {
    this.ɵfac = function AuthInterceptor_Factory(t) {
      return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 8036:
/*!***************************************************!*\
  !*** ./src/app/interceptors/error.interceptor.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorInterceptor: () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



class ErrorInterceptor {
  constructor() {}
  intercept(request, next) {
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(error => {
      // Añadir información detallada sobre el error
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Error del lado del cliente
        errorMessage = `Error del cliente: ${error.error.message}`;
      } else {
        // Error del lado del servidor
        errorMessage = `Código de error: ${error.status}\nMensaje: ${error.message}`;
        // Información adicional sobre la solicitud que falló
        const url = request.urlWithParams;
        const method = request.method;
        console.error('Error en solicitud HTTP:', {
          url,
          method,
          status: error.status,
          statusText: error.statusText,
          error: error.error,
          headers: request.headers
        });
        // Manejo específico según el código de error
        switch (error.status) {
          case 0:
            console.error('No se pudo conectar al servidor. Verifica tu conexión a internet o si el servidor está en funcionamiento.');
            break;
          case 404:
            console.error(`El recurso solicitado no existe: ${url}`);
            break;
          case 401:
            console.error('No autorizado. Por favor, inicia sesión nuevamente.');
            break;
          case 403:
            console.error('Acceso prohibido. No tienes permiso para acceder a este recurso.');
            break;
          case 500:
            console.error('Error interno del servidor. Por favor, intenta más tarde.');
            break;
          default:
            console.error(`Error HTTP desconocido: ${error.status}`);
            break;
        }
      }
      // Devolver el error para que los componentes puedan manejarlo
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => error);
    }));
  }
  static {
    this.ɵfac = function ErrorInterceptor_Factory(t) {
      return new (t || ErrorInterceptor)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ErrorInterceptor,
      factory: ErrorInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 5589:
/*!*********************************!*\
  !*** ./src/app/models/order.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderUtils: () => (/* binding */ OrderUtils)
/* harmony export */ });
// src/app/models/order.ts - Interfaces completas y corregidas
/**
 * Funciones de utilidad para conversión entre formatos
 */
class OrderUtils {
  /**
   * Convierte Order (frontend) a OrderBackend
   */
  static toBackendFormat(order) {
    return {
      id: order.id,
      iduser: order.usuario_id,
      fecha: order.fecha.split('T')[0],
      total: order.total,
      lineas: order.lineas?.map(line => ({
        id: line.id,
        idpedido: line.idpedido,
        idprod: line.idprod,
        color: line.color,
        cant: line.cantidad,
        nombre: line.nombre,
        precio: line.precio,
        product: line.product // ✅ PRESERVAR: Objeto producto
      }))
    };
  }
  /**
   * ✅ CORREGIDO: Convierte OrderBackend a Order (frontend)
   * Ahora preserva el precio y el objeto product
   */
  static fromBackendFormat(orderBackend) {
    console.log('📦 Transformando OrderBackend a Order:', orderBackend);
    return {
      id: orderBackend.id,
      usuario_id: orderBackend.iduser,
      fecha: orderBackend.fecha,
      total: orderBackend.total,
      estado: orderBackend.estado || '',
      lineas: orderBackend.lineas?.map(line => {
        const transformedLine = {
          id: line.id,
          idpedido: line.idpedido,
          idprod: line.idprod,
          color: line.color,
          cantidad: line.cant,
          nombre: line.nombre,
          precio: line.precio || 0,
          product: line.product
        };
        console.log(`📋 Línea transformada: ${transformedLine.nombre} - Precio: ${transformedLine.precio}`);
        return transformedLine;
      })
    };
  }
  /**
   * Convierte CartItem[] a OrderLine[]
   */
  static cartItemsToOrderLines(cartItems, orderId = 0) {
    return cartItems.map(item => ({
      idpedido: orderId,
      idprod: item.id,
      color: item.color || 'Estándar',
      cantidad: item.cantidad,
      nombre: item.nombre || '',
      precio: item.precio,
      product: item.producto // ✅ AÑADIDO: Incluir producto
    }));
  }
  /**
   * Valida que un pedido tenga todos los campos requeridos
   */
  static validateOrder(order) {
    const errors = [];
    if (!order.usuario_id || order.usuario_id <= 0) {
      errors.push('ID de usuario requerido');
    }
    if (!order.total || order.total <= 0) {
      errors.push('Total debe ser mayor a 0');
    }
    if (!order.lineas || order.lineas.length === 0) {
      errors.push('El pedido debe contener al menos un producto');
    }
    if (order.lineas) {
      order.lineas.forEach((line, index) => {
        if (!line.idprod || line.idprod <= 0) {
          errors.push(`Línea ${index + 1}: ID de producto requerido`);
        }
        if (!line.cantidad || line.cantidad <= 0) {
          errors.push(`Línea ${index + 1}: Cantidad debe ser mayor a 0`);
        }
        if (!line.color) {
          errors.push(`Línea ${index + 1}: Color requerido`);
        }
      });
    }
    return {
      valid: errors.length === 0,
      errors
    };
  }
}

/***/ }),

/***/ 3663:
/*!*****************************************!*\
  !*** ./src/app/pipes/image-url.pipe.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageUrlPipe: () => (/* binding */ ImageUrlPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class ImageUrlPipe {
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
    } else if (categoriaId && categoryFolderMap[categoriaId]) {
      // Usar la carpeta basada en la categoría
      folder = categoryFolderMap[categoriaId];
    }
    console.log(`Generando ruta de imagen: assets/images/${folder}/${imagen}`);
    return `assets/images/${folder}/${imagen}`;
  }
  static {
    this.ɵfac = function ImageUrlPipe_Factory(t) {
      return new (t || ImageUrlPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "imageUrl",
      type: ImageUrlPipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 4796:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);






class AuthService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/users`;
    console.log('🔧 AuthService inicializado');
    console.log('📍 API URL:', this.apiUrl);
    const storedUser = localStorage.getItem('currentUser');
    this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(storedUser ? JSON.parse(storedUser) : null);
    this.currentUser = this.currentUserSubject.asObservable();
    if (storedUser) {
      console.log('👤 Usuario restaurado del localStorage:', JSON.parse(storedUser));
    }
  }
  get currentUserValue() {
    return this.currentUserSubject.value;
  }
  login(username, password) {
    console.log('🚀 Intentando login para usuario:', username);
    console.log('📡 URL de login:', `${this.apiUrl}/login`);
    const loginData = {
      username,
      password
    };
    console.log('📦 Datos de login:', {
      username,
      password: '***'
    });
    return this.http.post(`${this.apiUrl}/login`, loginData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(user => {
      console.log('✅ Login exitoso, respuesta del servidor:', user);
      // Guardar en localStorage
      localStorage.setItem('currentUser', JSON.stringify(user));
      console.log('💾 Usuario guardado en localStorage');
      // Actualizar BehaviorSubject
      this.currentUserSubject.next(user);
      console.log('🔄 Usuario actualizado en BehaviorSubject');
      return user;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('login')));
  }
  register(user) {
    console.log('🚀 Intentando registro de usuario:', user.username);
    console.log('📡 URL de registro:', `${this.apiUrl}/register`);
    console.log('📦 Datos de registro:', {
      ...user,
      password: '***'
    });
    return this.http.post(`${this.apiUrl}/register`, user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
      console.log('✅ Registro exitoso, respuesta del servidor:', response);
      return response;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('registro')));
  }
  updateUser(user) {
    console.log('🚀 Actualizando usuario:', user.id);
    console.log('📡 URL de actualización:', `${this.apiUrl}/${user.id}`);
    return this.http.put(`${this.apiUrl}/${user.id}`, user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(updatedUser => {
      console.log('✅ Usuario actualizado:', updatedUser);
      if (this.currentUserValue && this.currentUserValue.id === updatedUser.id) {
        const userToStore = {
          ...updatedUser
        };
        delete userToStore.password;
        localStorage.setItem('currentUser', JSON.stringify(userToStore));
        this.currentUserSubject.next(userToStore);
        console.log('🔄 Usuario actual actualizado');
      }
      return updatedUser;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('actualización de usuario')));
  }
  logout() {
    console.log('👋 Cerrando sesión de usuario');
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/']);
  }
  isAdmin() {
    const isAdminUser = this.currentUserValue?.username === 'admin';
    console.log('🔐 Verificando si es admin:', isAdminUser);
    return isAdminUser;
  }
  /**
   * Obtener el token JWT del usuario actual
   * AÑADIDO: Para compatibilidad con OrderService
   */
  getToken() {
    const currentUser = this.currentUserValue;
    if (currentUser && currentUser.token) {
      console.log('🔑 Token obtenido para usuario:', currentUser.username);
      return currentUser.token;
    }
    console.warn('⚠️ No hay token disponible - usuario no autenticado');
    return null;
  }
  /**
   * Verificar si el usuario está autenticado
   * AÑADIDO: Para compatibilidad con OrderService
   */
  isLoggedIn() {
    const user = this.currentUserValue;
    const hasToken = this.getToken();
    const isAuthenticated = !!(user && hasToken);
    console.log('🔍 Verificando autenticación:', {
      hasUser: !!user,
      hasToken: !!hasToken,
      isAuthenticated
    });
    return isAuthenticated;
  }
  // Método mejorado para manejo de errores
  handleError(operation = 'operation') {
    return error => {
      console.error(`❌ Error en ${operation}:`, error);
      let userMessage = 'Ha ocurrido un error inesperado';
      if (error.error instanceof ErrorEvent) {
        // Error del lado del cliente
        console.error('💻 Error del cliente:', error.error.message);
        userMessage = 'Error de conexión. Verifica tu internet.';
      } else {
        // Error del servidor
        console.error(`🔥 Error del servidor ${error.status}:`, error.error);
        switch (error.status) {
          case 0:
            userMessage = 'No se puede conectar al servidor. ¿Está el backend ejecutándose?';
            console.error('🚨 CORS o servidor no accesible en:', this.apiUrl);
            break;
          case 401:
            userMessage = 'Usuario o contraseña incorrectos';
            break;
          case 400:
            userMessage = error.error?.message || 'Datos inválidos';
            break;
          case 409:
            userMessage = 'El usuario ya existe';
            break;
          case 500:
            userMessage = 'Error interno del servidor';
            break;
          default:
            userMessage = `Error del servidor: ${error.status}`;
        }
      }
      console.error('📢 Mensaje para el usuario:', userMessage);
      // Crear un error con el mensaje para el usuario
      const clientError = new Error(userMessage);
      clientError.originalError = error;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => clientError);
    };
  }
  static {
    this.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 6868:
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartService: () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class CartService {
  // Getters para los observables
  get cartItems() {
    return this._cartItems.asObservable();
  }
  // Añadido: Alias para cartItems como cart$ para solucionar el error en navbar.component.ts
  get cart$() {
    return this._cartItems.asObservable();
  }
  // Getter y setter para isCartOpen
  get isCartOpen() {
    return this._isCartOpen.value;
  }
  set isCartOpen(value) {
    this._isCartOpen.next(value);
  }
  // Observable para isCartOpen (por si se necesita suscribir)
  get isCartOpenObservable() {
    return this._isCartOpen.asObservable();
  }
  constructor() {
    this._cartItems = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    this._isCartOpen = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    // Recuperar carrito del localStorage al iniciar
    this.loadCart();
  }
  // Cargar carrito desde localStorage
  loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const items = JSON.parse(savedCart);
        // Asegurar compatibilidad - añadir quantity como alias de cantidad
        const updatedItems = items.map(item => ({
          ...item,
          quantity: item.cantidad // Agregar quantity como alias de cantidad
        }));

        this._cartItems.next(updatedItems);
      } catch (e) {
        console.error('Error parsing cart from localStorage:', e);
        this._cartItems.next([]);
      }
    }
  }
  // Métodos para abrir/cerrar el carrito
  openCart() {
    console.log('CartService.openCart: Abriendo carrito...');
    // Establecer el estado
    this._isCartOpen.next(true);
    this.isCartOpen = true;
    // Manipular el DOM directamente para asegurar visibilidad
    setTimeout(() => {
      // Añadir clase a body
      document.body.classList.add('cart-open');
      // Obtener referencias a los elementos del carrito
      const cartModal = document.querySelector('.cart-modal');
      const cartPopup = document.querySelector('.cart-popup');
      const cartOverlay = document.querySelector('.cart-overlay');
      // Aplicar clases active
      if (cartModal) {
        cartModal.classList.add('active');
        console.log('CartService: Añadida clase active a .cart-modal');
      } else {
        console.warn('CartService: No se encontró elemento .cart-modal');
      }
      if (cartPopup) {
        cartPopup.classList.add('active');
        // Asegurar visibilidad con estilos inline
        cartPopup.style.display = 'flex';
        cartPopup.style.transform = 'translateX(0)';
        console.log('CartService: Añadida clase active a .cart-popup');
      } else {
        console.warn('CartService: No se encontró elemento .cart-popup');
      }
      if (cartOverlay) {
        cartOverlay.classList.add('active');
        // Asegurar visibilidad con estilos inline
        cartOverlay.style.display = 'block';
        console.log('CartService: Añadida clase active a .cart-overlay');
      } else {
        console.warn('CartService: No se encontró elemento .cart-overlay');
      }
      // Truco fallback adicional para estilos problemáticos
      const styleEl = document.createElement('style');
      styleEl.id = 'cart-force-styles';
      styleEl.innerHTML = `
        .cart-popup.active {
          display: flex !important;
          transform: translateX(0) !important;
          opacity: 1 !important;
          visibility: visible !important;
        }
        .cart-overlay.active {
          display: block !important;
          opacity: 1 !important;
        }
      `;
      // Eliminar si ya existe
      const existingStyle = document.getElementById('cart-force-styles');
      if (existingStyle) {
        existingStyle.remove();
      }
      document.head.appendChild(styleEl);
      console.log('CartService.openCart: Carrito abierto y visible');
    }, 0);
  }
  closeCart() {
    console.log('CartService.closeCart: Cerrando carrito...');
    // Establecer el estado
    this._isCartOpen.next(false);
    this.isCartOpen = false;
    // Manipular el DOM directamente para asegurar ocultamiento
    setTimeout(() => {
      // Quitar clase del body
      document.body.classList.remove('cart-open');
      // Obtener referencias a los elementos del carrito
      const cartModal = document.querySelector('.cart-modal');
      const cartPopup = document.querySelector('.cart-popup');
      const cartOverlay = document.querySelector('.cart-overlay');
      // Quitar clases active
      if (cartModal) {
        cartModal.classList.remove('active');
      }
      if (cartPopup) {
        cartPopup.classList.remove('active');
        // Opcional: resetear el transform para que la próxima apertura tenga animación
        setTimeout(() => {
          if (!this.isCartOpen) {
            // Verificamos que no se haya abierto de nuevo
            cartPopup.style.transform = 'translateX(100%)';
          }
        }, 300); // Esperamos a que termine la transición
      }

      if (cartOverlay) {
        cartOverlay.classList.remove('active');
      }
      console.log('CartService.closeCart: Carrito cerrado correctamente');
    }, 0);
  }
  // Método para alternar la visibilidad del carrito
  toggleCart() {
    if (this.isCartOpen) {
      this.closeCart();
    } else {
      this.openCart();
    }
  }
  // Método compatible con la nueva implementación
  setCartVisibility(isVisible) {
    if (isVisible) {
      this.openCart();
    } else {
      this.closeCart();
    }
  }
  // Guardar carrito en localStorage
  saveCart(items) {
    // Asegurar que cada item tenga quantity como alias de cantidad
    const itemsWithQuantity = items.map(item => ({
      ...item,
      quantity: item.cantidad
    }));
    this._cartItems.next(itemsWithQuantity);
    localStorage.setItem('cart', JSON.stringify(itemsWithQuantity));
  }
  // Obtener elementos del carrito actual
  getCartItems() {
    return this._cartItems.getValue();
  }
  // Añadir producto al carrito
  addToCart(product, quantity = 1, color, size) {
    const currentItems = this.getCartItems();
    // Buscar si el producto ya está en el carrito con las mismas opciones
    const existingItemIndex = currentItems.findIndex(item => item.producto?.id === product.id && item.color === color && item.talla === size);
    if (existingItemIndex !== -1) {
      // Si ya existe, incrementamos la cantidad
      const updatedItems = [...currentItems];
      updatedItems[existingItemIndex].cantidad += quantity;
      updatedItems[existingItemIndex].quantity = updatedItems[existingItemIndex].cantidad;
      this._cartItems.next(updatedItems);
    } else {
      // Si no existe, añadimos un nuevo item
      const newItem = {
        id: product.id || Date.now(),
        producto: product,
        cantidad: quantity,
        quantity: quantity,
        color: color,
        talla: size,
        precio: product.precio,
        nombre: product.nombre,
        // Esta línea es opcional ahora que usamos producto
        imagen: `assets/images/${product.carpetaimg}/${product.imagen}`
      };
      this._cartItems.next([...currentItems, newItem]);
    }
    // Guardar en localStorage
    this.saveCart(this.getCartItems());
    // Abrir el carrito automáticamente al añadir producto
    // this.openCart();
  }
  // Actualizar cantidad de un item
  updateQuantity(itemId, quantity) {
    if (quantity <= 0) {
      this.removeItem(itemId);
      return;
    }
    const currentItems = this.getCartItems();
    const updatedItems = currentItems.map(item => item.id === itemId ? {
      ...item,
      cantidad: quantity,
      quantity: quantity
    } : item);
    this._cartItems.next(updatedItems);
    this.saveCart(updatedItems);
  }
  // Para compatibilidad con código existente
  updateItemQuantity(itemId, color, quantity) {
    if (quantity <= 0) {
      this.removeItem(itemId, color);
      return;
    }
    const currentItems = this.getCartItems();
    const updatedItems = currentItems.map(item => {
      if (item.id === itemId && item.color === color) {
        return {
          ...item,
          cantidad: quantity,
          quantity: quantity
        };
      }
      return item;
    });
    this._cartItems.next(updatedItems);
    this.saveCart(updatedItems);
  }
  // Eliminar un item del carrito
  removeItem(itemId, color) {
    const currentItems = this.getCartItems();
    let updatedItems;
    if (color) {
      // Si se especifica el color, filtramos por ID y color
      updatedItems = currentItems.filter(item => !(item.id === itemId && item.color === color));
    } else {
      // Si no se especifica color, filtramos solo por ID
      updatedItems = currentItems.filter(item => item.id !== itemId);
    }
    this._cartItems.next(updatedItems);
    this.saveCart(updatedItems);
    // IMPORTANTE: Comentado para evitar el cierre automático del carrito
    // Ahora dejamos que el componente decida cuándo cerrar el carrito
    // if (updatedItems.length === 0) {
    //   this.closeCart();
    // }
  }
  // Vaciar el carrito
  clearCart() {
    this._cartItems.next([]);
    localStorage.removeItem('cart');
    // Cerrar el carrito al vaciarlo
    this.closeCart();
  }
  // Calcular el total del carrito
  getTotal() {
    return this.getCartItems().reduce((total, item) => total + item.precio * item.cantidad, 0);
  }
  // Alias para getTotal (para compatibilidad)
  getCartTotal() {
    return this.getTotal();
  }
  // Obtener el número de items en el carrito
  getItemCount() {
    return this.getCartItems().reduce((count, item) => count + item.cantidad, 0);
  }
  static {
    this.ɵfac = function CartService_Factory(t) {
      return new (t || CartService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CartService,
      factory: CartService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4354:
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryService: () => (/* binding */ CategoryService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 6443);





class CategoryService {
  constructor(http) {
    this.http = http;
    // Corregido: Usando la ruta correcta
    this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/categorias`;
    // Cache para almacenar categorías
    this.categoriesCache = null;
    this.categoryCache = {};
  }
  // Obtener todas las categorías
  getCategories() {
    // Si ya tenemos las categorías en caché, las devolvemos directamente
    if (this.categoriesCache) {
      console.log('Devolviendo categorías desde caché');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.categoriesCache);
    }
    console.log('Solicitando categorías desde:', this.apiUrl);
    return this.http.get(this.apiUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(categories => {
      console.log('Categorías obtenidas del servidor:', categories);
      // Guardar en caché para futuras solicitudes
      this.categoriesCache = categories;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => this.handleError(error)));
  }
  // Obtener una categoría específica por ID
  getCategory(id) {
    // Si ya tenemos esta categoría en caché, la devolvemos directamente
    if (this.categoryCache[id]) {
      console.log(`Devolviendo categoría ${id} desde caché`);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.categoryCache[id]);
    }
    // Si tenemos todas las categorías en caché, buscamos la que necesitamos
    if (this.categoriesCache) {
      const category = this.categoriesCache.find(c => c.id === id);
      if (category) {
        console.log(`Categoría ${id} encontrada en el caché general`);
        this.categoryCache[id] = category; // Guardar en caché individual
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(category);
      }
    }
    // Si no está en caché, la solicitamos al servidor
    console.log(`Solicitando categoría ${id} desde: ${this.apiUrl}/${id}`);
    return this.http.get(`${this.apiUrl}/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(category => {
      console.log(`Categoría ${id} obtenida del servidor:`, category);
      // Guardar en caché para futuras solicitudes
      this.categoryCache[id] = category;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => this.handleError(error)));
  }
  // Obtener subcategorías de una categoría específica
  getSubcategories(parentId) {
    // Si ya tenemos todas las categorías en caché, filtramos las subcategorías
    if (this.categoriesCache) {
      const subcategories = this.categoriesCache.filter(c => c.padre === parentId);
      console.log(`Subcategorías de ${parentId} obtenidas de caché:`, subcategories);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(subcategories);
    }
    // Si no tenemos el caché, obtenemos todas las categorías y luego filtramos
    return this.getCategories().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(categories => {
      const subcategories = categories.filter(c => c.padre === parentId);
      console.log(`Subcategorías de ${parentId}:`, subcategories);
      return subcategories;
    }));
  }
  // Añadir una nueva categoría
  addCategory(category) {
    return this.http.post(this.apiUrl, category).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(newCategory => {
      console.log('Nueva categoría añadida:', newCategory);
      // Invalidar caché para que se recarguen los datos
      this.clearCache();
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => this.handleError(error)));
  }
  // Actualizar una categoría existente
  updateCategory(id, category) {
    return this.http.put(`${this.apiUrl}/${id}`, category).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(updatedCategory => {
      console.log(`Categoría ${id} actualizada:`, updatedCategory);
      // Invalidar caché para que se recarguen los datos
      this.clearCache();
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => this.handleError(error)));
  }
  // Eliminar una categoría
  deleteCategory(id) {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(() => {
      console.log(`Categoría ${id} eliminada`);
      // Invalidar caché para que se recarguen los datos
      this.clearCache();
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => this.handleError(error)));
  }
  // Limpiar caché
  clearCache() {
    this.categoriesCache = null;
    this.categoryCache = {};
    console.log('Caché de categorías limpiado');
  }
  // Método para manejar errores que retorna un Observable
  handleError(error) {
    console.error('Error en CategoryService:', error);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => error);
  }
  static {
    this.ɵfac = function CategoryService_Factory(t) {
      return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: CategoryService,
      factory: CategoryService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 6764:
/*!*************************************************!*\
  !*** ./src/app/services/login-popup.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPopupService: () => (/* binding */ LoginPopupService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class LoginPopupService {
  constructor() {
    // ✅ BehaviorSubject privado con estado inicial
    this.loginPopupStateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({
      isOpen: false,
      returnUrl: '',
      fromCheckout: false
    });
    // ✅ Observable público para que los componentes se suscriban
    this.loginPopupState$ = this.loginPopupStateSubject.asObservable();
    console.log('🔧 LoginPopupService inicializado');
  }
  /**
   * Abrir el popup de login
   */
  open(returnUrl = '', fromCheckout = false) {
    console.log('🔓 LoginPopupService: Abriendo popup', {
      returnUrl,
      fromCheckout
    });
    this.loginPopupStateSubject.next({
      isOpen: true,
      returnUrl,
      fromCheckout
    });
  }
  /**
   * Abrir desde checkout (método específico)
   */
  openForCheckout(returnUrl = '') {
    console.log('🛒 LoginPopupService: Abriendo desde checkout');
    this.open(returnUrl, true);
  }
  /**
   * Cerrar el popup de login
   */
  close() {
    console.log('❌ LoginPopupService: Cerrando popup');
    this.loginPopupStateSubject.next({
      isOpen: false,
      returnUrl: '',
      fromCheckout: false
    });
  }
  /**
   * Obtener el estado actual
   */
  getCurrentState() {
    return this.loginPopupStateSubject.value;
  }
  static {
    this.ɵfac = function LoginPopupService_Factory(t) {
      return new (t || LoginPopupService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LoginPopupService,
      factory: LoginPopupService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 8674:
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderService: () => (/* binding */ OrderService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _models_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/order */ 5589);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ 4796);








class OrderService {
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
    this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/pedidos`;
    console.log('🔧 OrderService inicializado');
    console.log('📍 API URL:', this.apiUrl);
  }
  /**
   * ✅ Método privado para obtener headers con autenticación JWT
   */
  getAuthHeaders() {
    const token = this.authService.getToken();
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    console.log('🔐 Headers de autenticación creados:', {
      hasToken: !!token,
      tokenPreview: token ? token.substring(0, 20) + '...' : 'No token'
    });
    return headers;
  }
  /**
   * ✅ Verificar si el usuario está autenticado
   */
  checkAuthentication() {
    if (!this.authService.isLoggedIn()) {
      console.error('❌ Usuario no autenticado');
      throw new Error('Usuario no autenticado. Por favor, inicia sesión.');
    }
    console.log('✅ Usuario autenticado correctamente');
    return true;
  }
  /**
   * ✅ CORREGIDO: Obtener todos los pedidos de un usuario específico por su ID
   */
  getOrders({
    userId
  }) {
    console.log('🚀 Obteniendo pedidos para usuario:', userId);
    this.checkAuthentication();
    const headers = this.getAuthHeaders();
    return this.http.get(`${this.apiUrl}/user/${userId}`, {
      headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
      console.log('📦 Respuesta del backend (getOrders):', response);
      // ✅ MANEJO DE DIFERENTES FORMATOS DE RESPUESTA
      let ordersBackend;
      if (Array.isArray(response)) {
        // El backend devuelve directamente un array
        ordersBackend = response;
      } else if (response && Array.isArray(response.data)) {
        // El backend devuelve { data: [...] }
        ordersBackend = response.data;
      } else if (response && Array.isArray(response.pedidos)) {
        // El backend devuelve { pedidos: [...] }
        ordersBackend = response.pedidos;
      } else {
        // No hay pedidos o formato desconocido
        console.warn('⚠️ Formato de respuesta inesperado o sin pedidos:', response);
        return [];
      }
      console.log(`✅ Se encontraron ${ordersBackend.length} pedidos`);
      // Transformar cada pedido del formato backend al frontend
      return ordersBackend.map(orderBackend => _models_order__WEBPACK_IMPORTED_MODULE_1__.OrderUtils.fromBackendFormat(orderBackend));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('obtener pedidos')));
  }
  /**
   * ✅ Obtener un pedido específico por su ID
   */
  getOrder(id) {
    console.log('🚀 Obteniendo pedido con ID:', id);
    this.checkAuthentication();
    const headers = this.getAuthHeaders();
    return this.http.get(`${this.apiUrl}/${id}`, {
      headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('obtener pedido')));
  }
  /**
   * ✅ Crear un nuevo pedido (VERSIÓN CORREGIDA)
   */
  createOrder(order) {
    console.log('🚀 Creando nuevo pedido:', order);
    // Verificar autenticación
    this.checkAuthentication();
    const currentUser = this.authService.currentUserValue;
    if (!currentUser || !currentUser.id) {
      console.error('❌ No hay usuario actual disponible o sin ID');
      throw new Error('Usuario no autenticado o sin ID válido');
    }
    // ✅ CRÍTICO: Asegurar que userId está presente
    const userId = order.usuario_id || currentUser.id;
    console.log('👤 Usuario ID final:', userId);
    // ✅ Validar el pedido antes de enviarlo
    const validation = _models_order__WEBPACK_IMPORTED_MODULE_1__.OrderUtils.validateOrder(order);
    if (!validation.valid) {
      console.error('❌ Pedido inválido:', validation.errors);
      throw new Error(`Pedido inválido: ${validation.errors.join(', ')}`);
    }
    // ✅ Preparar datos para el backend con verificación explícita
    const orderBackendData = {
      iduser: userId,
      fecha: new Date().toISOString().split('T')[0],
      total: Number(order.total.toFixed(2)),
      // CRÍTICO: envía las líneas bajo la clave 'lineas'
      lineas: order.lineas?.map(line => ({
        idprod: line.idprod,
        color: line.color || 'Estándar',
        cant: line.cantidad,
        nombre: line.nombre || '',
        precio: line.precio !== undefined ? line.precio : line.product.precio
      })) || []
    };
    // ✅ VERIFICACIÓN ADICIONAL antes de enviar
    if (!orderBackendData.iduser || orderBackendData.iduser <= 0) {
      console.error('❌ CRÍTICO: iduser inválido antes de enviar:', orderBackendData);
      throw new Error('ID de usuario inválido');
    }
    console.log('📦 Datos finales a enviar al backend:', JSON.stringify(orderBackendData, null, 2));
    const headers = this.getAuthHeaders();
    // ✅ Realizar petición HTTP con manejo de respuesta
    console.log("Datos finales a enviar al backend", JSON.stringify(orderBackendData, null, 2));
    return this.http.post(this.apiUrl, orderBackendData, {
      headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
      console.log('✅ Respuesta completa del backend (createOrder):', response);
      // ✅ MANEJO DE DIFERENTES FORMATOS DE RESPUESTA
      let orderBackend;
      // EXTRA CRÍTICO - sólo el pedido!
      if (response.data && response.data.pedido) {
        orderBackend = response.data.pedido; // ← PEDIDO DIRECTO
      } else if (response.pedido) {
        orderBackend = response.pedido;
      } else if (response.id) {
        orderBackend = response;
      } else {
        orderBackend = response;
      }
      console.log('📦 OrderBackend extraído:', orderBackend);
      // Transformar al formato frontend
      const orderFrontend = _models_order__WEBPACK_IMPORTED_MODULE_1__.OrderUtils.fromBackendFormat(orderBackend);
      console.log('✅ Order Frontend (con ID):', orderFrontend);
      console.log('🎫 NÚMERO DE PEDIDO:', orderFrontend.id);
      return orderFrontend; // ← DEVUELVE SOLO EL PEDIDO
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('crear pedido')));
  }
  /**
   * ✅ Obtener pedidos del usuario actual
   */
  getUserOrders() {
    console.log('🚀 Obteniendo pedidos del usuario actual');
    const currentUser = this.authService.currentUserValue;
    if (!currentUser || !currentUser.id) {
      throw new Error('Usuario no autenticado o sin ID');
    }
    return this.getOrders({
      userId: currentUser.id
    });
  }
  /**
   * ✅ Alias para getOrder (mejor nombre)
   */
  getOrderById(orderId) {
    return this.getOrder(orderId);
  }
  /**
   * ✅ Cancelar un pedido
   */
  cancelOrder(orderId) {
    console.log('🚀 Cancelando pedido:', orderId);
    this.checkAuthentication();
    const headers = this.getAuthHeaders();
    return this.http.patch(`${this.apiUrl}/${orderId}/cancel`, {}, {
      headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('cancelar pedido')));
  }
  /**
   * ✅ Actualizar estado de un pedido (admin)
   */
  updateOrderStatus(orderId, status) {
    console.log('🚀 Actualizando estado del pedido:', orderId, 'a:', status);
    this.checkAuthentication();
    const headers = this.getAuthHeaders();
    return this.http.patch(`${this.apiUrl}/${orderId}/status`, {
      status
    }, {
      headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('actualizar estado del pedido')));
  }
  /**
   * ✅ Obtener resumen de pedidos del usuario
   */
  getOrdersSummary() {
    console.log('🚀 Obteniendo resumen de pedidos del usuario actual');
    this.checkAuthentication();
    const headers = this.getAuthHeaders();
    return this.http.get(`${this.apiUrl}/summary`, {
      headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('obtener resumen de pedidos')));
  }
  /**
   * ✅ Método mejorado para manejo de errores
   */
  handleError(operation = 'operation') {
    return error => {
      console.error(`❌ Error en ${operation}:`, error);
      let userMessage = 'Ha ocurrido un error inesperado';
      if (error.error instanceof ErrorEvent) {
        // Error del lado del cliente
        console.error('💻 Error del cliente:', error.error.message);
        userMessage = 'Error de conexión. Verifica tu internet.';
      } else {
        // Error del servidor
        console.error(`🔥 Error del servidor ${error.status}:`, error.error);
        switch (error.status) {
          case 0:
            userMessage = 'No se puede conectar al servidor. ¿Está el backend ejecutándose?';
            console.error('🚨 CORS o servidor no accesible en:', this.apiUrl);
            break;
          case 401:
            userMessage = 'Tu sesión ha expirado. Por favor, inicia sesión nuevamente.';
            this.authService.logout();
            break;
          case 403:
            userMessage = 'No tienes permisos para realizar esta operación.';
            break;
          case 400:
            userMessage = error.error?.message || 'Datos inválidos enviados al servidor.';
            break;
          case 404:
            userMessage = 'Recurso no encontrado. Puede que el pedido no exista.';
            break;
          case 422:
            userMessage = 'Error de validación en los datos enviados.';
            break;
          case 500:
            userMessage = 'Error interno del servidor. Inténtalo más tarde.';
            break;
          default:
            userMessage = `Error del servidor: ${error.status}. ${error.error?.message || ''}`;
        }
      }
      console.error('📢 Mensaje para el usuario:', userMessage);
      const clientError = new Error(userMessage);
      clientError.originalError = error;
      clientError.status = error.status;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => clientError);
    };
  }
  /**
   * ✅ Método de utilidad para debug
   */
  debug() {
    console.log('🔍 OrderService Debug Info:', {
      apiUrl: this.apiUrl,
      isLoggedIn: this.authService.isLoggedIn(),
      currentUser: this.authService.currentUserValue,
      hasToken: !!this.authService.getToken()
    });
  }
  // Añade esto en la clase OrderService
  /**
   * Obtener las líneas de un pedido concreto por su ID
   */
  getOrderLines(pedidoId) {
    const headers = this.getAuthHeaders();
    return this.http.get(`${this.apiUrl}/${pedidoId}/lineas`, {
      headers
    });
  }
  /**
   * ✅ Enviar albarán por email
   */
  enviarAlbaranPorEmail(pedido, usuario, pdfBase64) {
    this.checkAuthentication();
    const headers = this.getAuthHeaders();
    return this.http.post(`${this.apiUrl}/enviar-albaran-email`, {
      pedido,
      usuario,
      pdfBase64
    }, {
      headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('enviar albarán por email')));
  }
  static {
    this.ɵfac = function OrderService_Factory(t) {
      return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      token: OrderService,
      factory: OrderService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 3724:
/*!*****************************************!*\
  !*** ./src/app/services/pdf.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PdfService: () => (/* binding */ PdfService)
/* harmony export */ });
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf */ 2752);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class PdfService {
  constructor() {}
  /** MÉTODO AUXILIAR: Agregar pie de página */
  agregarPieDePagina(pdf, numeroPagina) {
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const yPosition = pageHeight - 20;
    pdf.setFontSize(8);
    pdf.setTextColor(150, 150, 150);
    pdf.text('Este documento fue generado automáticamente', 20, yPosition);
    pdf.text(`Página ${numeroPagina}`, pageWidth - 30, yPosition);
  }
  /** MÉTODO AUXILIAR: Agregar encabezado de tabla */
  agregarEncabezadoTabla(pdf, yPosition) {
    const pageWidth = pdf.internal.pageSize.getWidth();
    const lightGray = [242, 243, 244];
    pdf.setFillColor(lightGray[0], lightGray[1], lightGray[2]);
    pdf.rect(20, yPosition - 5, pageWidth - 40, 8, 'F');
    pdf.setFontSize(9);
    pdf.setTextColor(0, 0, 0);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Producto', 25, yPosition);
    pdf.text('Color', 120, yPosition);
    pdf.text('Cantidad', 160, yPosition, {
      align: 'right'
    });
    pdf.text('Precio', pageWidth - 25, yPosition, {
      align: 'right'
    });
    pdf.setFont('helvetica', 'normal');
    return yPosition + 10;
  }
  /** Genera un albarán PDF y lo retorna como Blob */
  generarAlbaran(pedido, lineas, usuario) {
    return new Promise((resolve, reject) => {
      try {
        const pdf = new jspdf__WEBPACK_IMPORTED_MODULE_0__["default"]('p', 'mm', 'a4');
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        let yPosition = 20;
        let numeroPagina = 1;
        const primaryColor = [82, 102, 122];
        // ========== ENCABEZADO ==========
        pdf.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        pdf.rect(0, 0, pageWidth, 40, 'F');
        pdf.setTextColor(255, 255, 255);
        pdf.setFontSize(24);
        pdf.text('ALBARÁN', 20, 25);
        pdf.setFontSize(10);
        pdf.text(`Ref: #${pedido.id}`, 20, 32);
        // ========== INFORMACIÓN DEL COMPRADOR ==========
        yPosition = 55;
        if (usuario) {
          pdf.setTextColor(0, 0, 0);
          pdf.setFontSize(12);
          pdf.text('Información del Comprador', 20, yPosition);
          yPosition += 10;
          pdf.setFontSize(10);
          pdf.text(`Nombre: ${usuario.nombre || 'N/A'}`, 20, yPosition);
          yPosition += 7;
          pdf.text(`Email: ${usuario.email || 'N/A'}`, 20, yPosition);
          yPosition += 7;
          pdf.text(`Dirección: ${usuario.direccion || 'N/A'}`, 20, yPosition);
          yPosition += 7;
          pdf.text(`Ciudad: ${usuario.ciudad || 'N/A'} - CP: ${usuario.cp || 'N/A'}`, 20, yPosition);
          yPosition += 15;
        }
        // ========== INFORMACIÓN DEL PEDIDO ==========
        pdf.setTextColor(0, 0, 0);
        pdf.setFontSize(12);
        pdf.text('Información del Pedido', 20, yPosition);
        yPosition += 10;
        pdf.setFontSize(10);
        pdf.text(`Fecha: ${this.formatearFecha(pedido.fecha)}`, 20, yPosition);
        yPosition += 7;
        pdf.text(`Referencia: #${pedido.id}`, 20, yPosition);
        yPosition += 7;
        pdf.text(`${pedido.total.toFixed(2)} €`, 20, yPosition); // <--- Cambio aquí
        // ========== TABLA DE PRODUCTOS ==========
        yPosition += 20;
        pdf.setFontSize(11);
        pdf.setFont('helvetica', 'bold');
        pdf.text('Productos', 20, yPosition);
        yPosition += 10;
        yPosition = this.agregarEncabezadoTabla(pdf, yPosition);
        // ========== FILAS DE PRODUCTOS ==========
        pdf.setFont('helvetica', 'normal');
        lineas.forEach(linea => {
          const nombre = linea.nombre || 'Sin nombre';
          const color = linea.color || 'N/A';
          const cantidadRaw = linea.cantidad !== undefined ? linea.cantidad : linea.cant;
          const cantidad = parseInt(cantidadRaw) || 0;
          const precioRaw = linea.precio !== undefined ? linea.precio : linea.product?.precio;
          const precio = parseFloat(precioRaw) || 0;
          const precioLinea = precio * cantidad;
          if (yPosition > pageHeight - 40) {
            this.agregarPieDePagina(pdf, numeroPagina);
            pdf.addPage();
            numeroPagina++;
            yPosition = 20;
            yPosition = this.agregarEncabezadoTabla(pdf, yPosition);
          }
          pdf.text(nombre, 25, yPosition);
          pdf.text(color, 120, yPosition);
          pdf.text(cantidad.toString(), 160, yPosition, {
            align: 'right'
          });
          pdf.text(`${precioLinea.toFixed(2)} €`, pageWidth - 25, yPosition, {
            align: 'right'
          }); // <--- Cambio aquí
          yPosition += 8;
        });
        // ========== LÍNEA SEPARADORA Y TOTAL ==========
        yPosition += 5;
        pdf.setDrawColor(200, 200, 200);
        pdf.line(20, yPosition, pageWidth - 20, yPosition);
        yPosition += 10;
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(12);
        pdf.text('TOTAL:', 20, yPosition);
        pdf.text(`${pedido.total.toFixed(2)} €`, pageWidth - 21, yPosition, {
          align: 'right'
        }); // <--- Cambio aquí
        this.agregarPieDePagina(pdf, numeroPagina);
        const pdfBlob = pdf.output('blob');
        resolve(pdfBlob);
      } catch (error) {
        reject(error);
      }
    });
  }
  formatearFecha(fecha) {
    if (!fecha) return '';
    try {
      const date = new Date(fecha);
      return date.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    } catch (e) {
      return '';
    }
  }
  static {
    this.ɵfac = function PdfService_Factory(t) {
      return new (t || PdfService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: PdfService,
      factory: PdfService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 6241:
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductService: () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _helpers_product_image_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/product-image-helper */ 9504);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 6443);
// Importaciones correctas de RxJS








class ProductService {
  setSelectedProduct(product) {
    this.selectedProductSubject.next(product);
  }
  // Método para limpiar el producto seleccionado
  clearSelectedProduct() {
    console.log('Limpiando producto seleccionado');
    this.selectedProductSubject.next(null);
  }
  constructor(http) {
    this.http = http;
    // Corregido: Usando la ruta correcta
    this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/productos`;
    this.categoryUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/categorias`;
    // Subject para el popup de producto
    // En product.service.ts
    this.selectedProductSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    this.selectedProduct$ = this.selectedProductSubject.asObservable();
    // ✅ MAPEO ACTUALIZADO BASADO EN LA ESTRUCTURA REAL DE ASSETS
    this.PRODUCT_COLORS_MAP = {
      // ========== ANILLOS (dentro de piercing/) ==========
      'anillo con corazón': ['dorado', 'negro', 'plateado'],
      'anillo corazón': ['dorado', 'negro', 'plateado'],
      'anillo con corazon': ['dorado', 'negro', 'plateado'],
      'anillo corazon': ['dorado', 'negro', 'plateado'],
      'anillo fino': ['azul', 'cobre', 'dorado', 'negro', 'multicolor'],
      'anillo con bisagra': ['azul', 'cobre', 'dorado', 'negro', 'multicolor'],
      'anillo bisagra': ['azul', 'cobre', 'dorado', 'negro', 'multicolor'],
      'aro para nostril': ['azul', 'multicolor', 'negro'],
      'aro nostril': ['azul', 'multicolor', 'negro'],
      'segment ring': ['azul', 'dorado', 'multicolor', 'rosa'],
      // ========== BANANAS (dentro de piercing/) ==========
      'banana con rosa': ['azul', 'celeste', 'rojo', 'rosa', 'verde'],
      'banana flor': ['azul', 'celeste', 'rojo', 'rosa', 'verde'],
      'banana con flor': ['azul', 'celeste', 'rojo', 'rosa', 'verde'],
      'banana con gema': ['azul', 'morado', 'transparente', 'rojo', 'verde', 'trebol'],
      'banana gema': ['azul', 'morado', 'transparente', 'rojo', 'verde', 'trebol'],
      'banana simple': ['dorado', 'plateado', 'multicolor'],
      'banana para el ombligo': ['dorado', 'plateado', 'multicolor'],
      'banana para ombligo': ['dorado', 'plateado', 'multicolor'],
      // ========== BARBELLS (dentro de piercing/) ==========
      'barbell con alas': ['plateado'],
      'barbells alas': ['plateado'],
      'barbell alas': ['plateado'],
      'barbell flecha': ['dorado', 'negro', 'plateado'],
      'barbells flecha': ['dorado', 'negro', 'plateado'],
      'barbell con flecha': ['dorado', 'negro', 'plateado'],
      'barbell largo': ['azul', 'cobre', 'dorado', 'mulicolor'],
      'barbells largo': ['azul', 'cobre', 'dorado', 'mulicolor'],
      // ========== CIRCULAR BARBELLS (dentro de piercing/) ==========
      'circular barbell con flecha': ['dorado', 'cobrejpg', 'negro'],
      'circular barbell flecha': ['dorado', 'cobrejpg', 'negro'],
      'circular barbell con piedra': ['cristal', 'negro'],
      'circular barbell piedra': ['cristal', 'negro'],
      // ========== LABRETS (dentro de piercing/) ==========
      'labret corazón': ['dorado', 'negro', 'plateado', 'rosa'],
      'labret con corazón': ['dorado', 'negro', 'plateado', 'rosa'],
      'labret corazon': ['dorado', 'negro', 'plateado', 'rosa'],
      'labret simple': ['cobre', 'dorado', 'negro', 'multicolor'],
      'labret triángulo': ['dorado', 'negro', 'plateado', 'rosa'],
      'labret triangulo': ['dorado', 'negro', 'plateado', 'rosa'],
      'labret con triángulo': ['dorado', 'negro', 'plateado', 'rosa'],
      'labret triangulos': ['dorado', 'negro', 'plateado', 'rosa'],
      // ========== PLUGS ==========
      'plug simple': ['amarillo', 'azul', 'morado', 'negro', 'blanco', 'verde'],
      plug: ['amarillo', 'azul', 'morado', 'negro', 'blanco', 'verde'],
      'plug doble': ['amarillo', 'azul', 'beige', 'caoba', 'morado', 'rojo', 'verde'],
      'plug dobles': ['amarillo', 'azul', 'beige', 'caoba', 'morado', 'rojo', 'verde'],
      'plug de silicona': ['amarillo', 'azul', 'beige', 'morado', 'rojo', 'verde'],
      'plug silicona': ['amarillo', 'azul', 'beige', 'morado', 'rojo', 'verde'],
      // ========== DILATADORES Y EXPANDERS ==========
      'set de dilatadores': ['blanco', 'rosa', 'plateado', 'violeta'],
      dilatadores: ['negro', 'rojo'],
      dilatador: ['negro', 'rojo'],
      'expander duo': ['celeste', 'dorado', 'verde'],
      'expander con duo': ['celeste', 'dorado', 'verde'],
      'expander medusa': ['negro', 'verde'],
      'expander con medusa': ['negro', 'verde'],
      // ========== TÚNELES (organizados por material) ==========
      'túnel de acrílico': ['azul', 'blanco', 'rojo', 'negro', 'amarillo'],
      'tunel de acrílico': ['azul', 'blanco', 'rojo', 'negro', 'amarillo'],
      'túnel acrílico': ['azul', 'blanco', 'rojo', 'negro', 'amarillo'],
      'tunel acrilico': ['azul', 'blanco', 'rojo', 'negro', 'amarillo'],
      'túnel de metal': ['azul', 'cobre', 'dorado'],
      'tunel de metal': ['azul', 'cobre', 'dorado'],
      'túnel metal': ['azul', 'cobre', 'dorado'],
      'tunel metal': ['azul', 'cobre', 'dorado'],
      'túnel orfebre': ['dorado', 'plateado'],
      'tunel orfebre': ['dorado', 'plateado'],
      'túnel mandala': ['dorado', 'plateado'],
      'tunel mandala': ['dorado', 'plateado'],
      'túnel de silicona': ['azul', 'blanco', 'rojo', 'rosa', 'negro', 'verde'],
      'tunel de silicona': ['azul', 'blanco', 'rojo', 'rosa', 'negro', 'verde'],
      'túnel silicona': ['azul', 'blanco', 'rojo', 'rosa', 'negro', 'verde'],
      'tunel silicona': ['azul', 'blanco', 'rojo', 'rosa', 'negro', 'verde'],
      // ========== GENÉRICOS ==========
      'túnel simple': ['azul', 'blanco', 'rojo', 'rosa', 'negro', 'verde'],
      'tunel simple': ['azul', 'blanco', 'rojo', 'rosa', 'negro', 'verde'],
      túnel: ['azul', 'blanco', 'rojo', 'rosa', 'negro', 'verde'],
      tunel: ['azul', 'blanco', 'rojo', 'rosa', 'negro', 'verde'],
      // ========== PIERCINGS GENERALES ==========
      piercing: ['azul', 'cobre', 'dorado', 'negro', 'multicolor']
    };
    // Imagen por defect
    this.defaultImage = 'assets/images/default.jpg';
  }
  // Método para obtener todos los productos
  getProducts() {
    return this.http.get(this.apiUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('Error al obtener productos:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([]);
    }));
  }
  // Método para obtener un producto específico
  getProduct(id) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error(`Error al obtener producto ${id}:`, error);
      throw error;
    }));
  }
  // Método pour obtener productos por categoría
  getProductsByCategory(categoryId) {
    const url = `${this.apiUrl}/categoria/${categoryId}`;
    console.log('Solicitando productos por categoría:', categoryId, 'desde:', url);
    return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([]);
    }));
  }
  // Método para obtener una categoría específica
  getCategory(id) {
    const url = `${this.categoryUrl}/${id}`;
    return this.http.get(url);
  }
  // ✅ MÉTODO MEJORADO PARA OBTENER COLORES ESPECÍFICOS DEL PRODUCTO
  getProductColors(productId) {
    console.log('🎨 Obteniendo colores para producto ID:', productId);
    // Primero obtenemos el producto para conocer su nombre
    return this.getProduct(productId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(product => {
      if (!product || !product.nombre) {
        console.warn('⚠️ Producto no encontrado o sin nombre');
        return ['Estándar'];
      }
      const productName = product.nombre.toLowerCase().trim();
      console.log('🔍 Buscando colores para:', productName);
      // Usar ProductImageHelper para obtener colores consistentes
      const availableColors = _helpers_product_image_helper__WEBPACK_IMPORTED_MODULE_1__.ProductImageHelper.getAvailableColors(productName);
      console.log('✅ Colores disponibles:', availableColors);
      return availableColors.length > 0 ? availableColors : ['Estándar'];
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('❌ Error obteniendo colores del producto:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(['Estándar']);
    }));
  }
  // ✅ MÉTODO ALTERNATIVO PARA OBTENER COLORES (usando mapeo local como fallback)
  getAvailableColorsForProduct(productName) {
    // Normalizar el nombre del producto
    const normalizedName = productName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Quitar tildes
    .trim();
    console.log('🔍 Nombre normalizado:', normalizedName);
    // PASO 1: Buscar coincidencias exactas primero
    for (const [key, colors] of Object.entries(this.PRODUCT_COLORS_MAP)) {
      const normalizedKey = key.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
      if (normalizedName === normalizedKey) {
        console.log(`🎯 Coincidencia exacta: "${key}" -> [${colors.join(', ')}]`);
        return colors;
      }
    }
    // PASO 2: Estrategia de coincidencias parciales flexibles
    const bestMatch = this.findBestPartialMatch(normalizedName);
    if (bestMatch.length > 0) {
      return bestMatch;
    }
    // PASO 3: Buscar por palabras clave específicas
    const keywordMatch = this.findByKeywords(normalizedName);
    if (keywordMatch.length > 0) {
      return keywordMatch;
    }
    // PASO 4: Buscar por tipo de producto
    const typeMatch = this.findByProductType(normalizedName);
    if (typeMatch.length > 0) {
      return typeMatch;
    }
    // Si no hay coincidencias específicas, devolver colores por defecto
    console.log('⚠️ No se encontraron colores específicos, usando por defecto');
    return ['Estándar'];
  }
  // ✅ ESTRATEGIA 3: Coincidencias parciales flexibles mejoradas
  findBestPartialMatch(productName) {
    let bestMatch = {
      key: '',
      colors: [],
      score: 0
    };
    for (const [key, colors] of Object.entries(this.PRODUCT_COLORS_MAP)) {
      const normalizedKey = key.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
      // Calcular puntuación de similitud
      const score = this.calculateSimilarityScore(productName, normalizedKey);
      if (score > bestMatch.score && score > 0.6) {
        // Umbral de similitud
        bestMatch = {
          key,
          colors,
          score
        };
      }
    }
    if (bestMatch.score > 0.6) {
      console.log(`🎯 Mejor coincidencia parcial: "${bestMatch.key}" (score: ${bestMatch.score.toFixed(2)}) -> [${bestMatch.colors.join(', ')}]`);
      return bestMatch.colors;
    }
    return [];
  }
  // ✅ Calcular puntuación de similitud entre dos strings
  calculateSimilarityScore(str1, str2) {
    const words1 = str1.split(' ').filter(w => w.length > 2); // Solo palabras de más de 2 caracteres
    const words2 = str2.split(' ').filter(w => w.length > 2);
    if (words1.length === 0 || words2.length === 0) return 0;
    let matchCount = 0;
    let totalWords = Math.max(words1.length, words2.length);
    // Contar palabras que coinciden exactamente
    for (const word1 of words1) {
      if (words2.includes(word1)) {
        matchCount += 1;
      } else {
        // Buscar coincidencias parciales (una palabra contiene a la otra)
        for (const word2 of words2) {
          if (word1.includes(word2) || word2.includes(word1)) {
            matchCount += 0.7; // Puntuación menor para coincidencias parciales
            break;
          }
        }
      }
    }
    return matchCount / totalWords;
  }
  // ✅ Búsqueda por palabras clave específicas
  findByKeywords(productName) {
    const keywordMatches = {
      bisagra: ['azul', 'cobre', 'dorado', 'negro', 'multicolor'],
      corazon: ['dorado', 'negro', 'plateado', 'rosa'],
      triangulo: ['dorado', 'negro', 'plateado', 'rosa'],
      flecha: ['dorado', 'negro', 'plateado'],
      alas: ['plateado'],
      gema: ['azul', 'morado', 'transparente', 'rojo', 'verde'],
      acrilico: ['azul', 'blanco', 'rojo', 'negro', 'amarillo'],
      acrílico: ['azul', 'blanco', 'rojo', 'negro', 'amarillo'],
      silicona: ['azul', 'blanco', 'rojo', 'rosa', 'negro', 'verde'],
      metal: ['azul', 'cobre', 'dorado'],
      orfebre: ['dorado', 'plateado'],
      mandala: ['dorado', 'plateado'],
      nostril: ['azul', 'multicolor', 'negro'],
      ombligo: ['dorado', 'plateado', 'multicolor'],
      piedra: ['cristal', 'negro'],
      duo: ['celeste', 'dorado', 'verde'],
      medusa: ['negro', 'verde'],
      rosa: ['azul', 'celeste', 'rojo', 'rosa', 'verde'],
      flor: ['azul', 'celeste', 'rojo', 'rosa', 'verde']
    };
    for (const [keyword, colors] of Object.entries(keywordMatches)) {
      if (productName.includes(keyword)) {
        console.log(`🎯 Keyword match: "${keyword}" -> [${colors.join(', ')}]`);
        return colors;
      }
    }
    return [];
  }
  // ✅ Búsqueda por tipo de producto
  findByProductType(productName) {
    const typeMatches = {
      anillo: ['azul', 'cobre', 'dorado', 'negro', 'multicolor'],
      aro: ['azul', 'multicolor', 'negro'],
      banana: ['azul', 'dorado', 'plateado', 'verde', 'rojo'],
      barbell: ['azul', 'cobre', 'dorado', 'negro', 'plateado'],
      labret: ['cobre', 'dorado', 'negro', 'plateado', 'rosa'],
      plug: ['amarillo', 'azul', 'negro', 'blanco', 'verde'],
      tunel: ['azul', 'blanco', 'dorado', 'plateado', 'rojo', 'verde'],
      túnel: ['azul', 'blanco', 'dorado', 'plateado', 'rojo', 'verde'],
      expander: ['celeste', 'dorado', 'negro', 'verde'],
      dilatador: ['blanco', 'negro', 'rosa', 'rojo', 'plateado', 'violeta'],
      piercing: ['azul', 'cobre', 'dorado', 'negro', 'multicolor']
    };
    for (const [type, colors] of Object.entries(typeMatches)) {
      if (productName.includes(type)) {
        console.log(`🎯 Type match: "${type}" -> [${colors.join(', ')}]`);
        return colors;
      }
    }
    return [];
  }
  // Método para seleccionar un producto para el popup
  selectProductForPopup(product) {
    this.selectedProductSubject.next(product);
  }
  // Método para cerrar el popup
  closeProductPopup() {
    this.selectedProductSubject.next(null);
  }
  // Método para añadir un nuevo producto
  addProduct(product) {
    return this.http.post(this.apiUrl, product);
  }
  // Método para subir imágenes de productos
  uploadProductImages(productId, files) {
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append('images', file, file.name);
    });
    return this.http.post(`${this.apiUrl}/${productId}/images`, formData);
  }
  // Método para actualizar un producto existente
  updateProduct(productId, product) {
    const url = `${this.apiUrl}/${productId}`;
    return this.http.put(url, product);
  }
  // Método para eliminar un producto
  deleteProduct(productId) {
    const url = `${this.apiUrl}/${productId}`;
    return this.http.delete(url);
  }
  // Método para buscar productos
  searchProducts(term) {
    const url = `${this.apiUrl}/search?q=${term}`;
    return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error(`Error al buscar productos con término "${term}":`, error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([]);
    }));
  }
  // Método para obtener la ruta de la imagen del producto
  getProductImageSrc(product, selectedColor) {
    return _helpers_product_image_helper__WEBPACK_IMPORTED_MODULE_1__.ProductImageHelper.getProductImageSrc(product, selectedColor);
  }
  // Método para obtener productos destacados (para la página principal)
  getFeaturedProducts() {
    console.log('Solicitando productos destacados desde:', this.apiUrl);
    return this.getProducts().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(products => {
      return products.slice(0, 8);
    }));
  }
  // Método mejorado para manejar errores de carga de imágenes
  handleImageError(event) {
    const img = event.target;
    const originalSrc = img.src;
    console.error(`Error al cargar imagen: ${originalSrc}`);
    img.src = this.defaultImage;
    img.onerror = null;
  }
  static {
    this.ɵfac = function ProductService_Factory(t) {
      return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: ProductService,
      factory: ProductService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// src/environments/environment.ts
const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api' // Asegúrate de que este puerto coincida con tu backend
};

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map