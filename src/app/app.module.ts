// src/app/app.module.ts - VERSIÓN CORREGIDA

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // ✅ AÑADIDO
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

// Interceptors
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';

// Componentes
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
import { LoginPopupComponent } from './components/login-popup/login-popup.component';
import { RegistroPopupComponent } from './components/registro-popup/registro-popup.component';
import { HistorialPedidosComponent } from './components/historial-pedidos/historial-pedidos.component';
import { PasswordConfirmModalComponent } from './components/password-confirm-modal/password-confirm-modal';

// Servicios
import { PdfService } from './services/pdf.service';
import { ApiWakeUpService } from './services/api-wake-up.service'; // ✅ AÑADIDO

@NgModule({
  declarations: [
    // ✅ CRÍTICO: AppComponent DEBE estar aquí
    AppComponent,
    
    // Pipes
    ImageUrlPipe,
    
    // Componentes compartidos
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    BannerComponent,
    
    // Componentes de páginas
    HomeComponent,
    ProfileComponent,
    CheckoutComponent,
    
    // Componentes de productos
    ProductListComponent,
    ProductDetailComponent,
    ProductPopupComponent,
    SearchResultsComponent,
    
    // Componentes de pedidos
    OrderLineComponent,
    HistorialPedidosComponent,
    
    // Componentes de carrito
    CartComponent,
    
    // Componentes de admin
    AdminComponent,
    CategoryManagerComponent,
    ProductManagerComponent,
    
    // Modales y popups
    LoginPopupComponent,
    RegistroPopupComponent,
    PasswordConfirmModalComponent
  ],
  imports: [
    BrowserModule,
    CommonModule, // ✅ AÑADIDO para *ngIf
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    // Interceptors
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    
    // Servicios
    PdfService,
    ApiWakeUpService, // ✅ AÑADIDO
    
    // HttpClient
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent] // ✅ CRÍTICO: Debe estar aquí
})
export class AppModule { }