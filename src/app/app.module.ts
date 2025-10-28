// src/app/app.module.ts - ARCHIVO COMPLETO ACTUALIZADO

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

// Importar los interceptors
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';

// Componentes principales y compartidos
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { ProductPopupComponent } from './components/product/product-popup/product-popup.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AdminComponent } from './components/admin/admin.component';
import { CategoryManagerComponent } from './components/admin/category-manager/category-manager.component';
import { ProductManagerComponent } from './components/admin/product-manager/product-manager.component';
import { SearchResultsComponent } from './components/product/search-results/search-results.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { OrderLineComponent } from './components/orderline/orderline.component';
import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ImageUrlPipe } from './pipes/image-url.pipe';

// ✅ Componentes modales y popups
import { LoginPopupComponent } from './components/login-popup/login-popup.component';
import { RegistroPopupComponent } from './components/registro-popup/registro-popup.component';
import { HistorialPedidosComponent } from './components/historial-pedidos/historial-pedidos.component';
import { PasswordConfirmModalComponent } from './components/password-confirm-modal/password-confirm-modal';

// Servicios
import { PdfService } from './services/pdf.service';

@NgModule({
  declarations: [
    ImageUrlPipe,
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductPopupComponent,
    CartComponent,
    CheckoutComponent,
    AdminComponent,
    CategoryManagerComponent,
    ProductManagerComponent,
    SearchResultsComponent,
    ProfileComponent,
    OrderLineComponent,
    BannerComponent,
    HeaderComponent,
    // ✅ Modales y popups
    LoginPopupComponent,
    RegistroPopupComponent,
    HistorialPedidosComponent,
    PasswordConfirmModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    // ✅ Interceptors (el orden importa: primero Auth, luego Error)
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // Servicios
    PdfService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }