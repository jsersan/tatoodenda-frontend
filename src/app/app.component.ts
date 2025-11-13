// app.component.ts - OPTIMIZADO PARA RENDER

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LoginPopupService, LoginPopupState } from './services/login-popup.service';
import { KeepAliveService } from './services/keep-alive.service'; // ✅ NUEVO
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent implements OnInit {
  title = 'ecommerce-app';

  // Control de popups
  showLoginPopup = false;
  loginReturnUrl = '';
  loginFromCheckout = false;
  showRegistroPopup = false;

  constructor(
    private router: Router,
    private loginPopupService: LoginPopupService,
    private keepAliveService: KeepAliveService // ✅ NUEVO
  ) {
    console.log('🚀 AppComponent inicializado');
  }

  ngOnInit(): void {
    // ✅ CRÍTICO: Iniciar keep-alive inmediatamente
    this.keepAliveService.startKeepAlive();

    // Suscribirse al servicio de login popup con tipo explícito
    this.loginPopupService.loginPopupState$.subscribe((state: LoginPopupState) => {
      console.log('📢 Estado de login popup cambió:', state);
      this.showLoginPopup = state.isOpen;
      this.loginReturnUrl = state.returnUrl;
      this.loginFromCheckout = state.fromCheckout;
    });

    // Scroll al inicio en cada navegación
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0);
      });
  }

  /**
   * Cerrar popup de login
   */
  onLoginPopupClose(): void {
    console.log('❌ Cerrando popup de login');
    this.showLoginPopup = false;
    this.loginPopupService.close();
  }

  /**
   * Login exitoso
   */
  onLoginSuccess(returnUrl: string): void {
    console.log('✅ Login exitoso, navegando a:', returnUrl);
    this.showLoginPopup = false;
    
    if (returnUrl && returnUrl !== '/') {
      this.router.navigate([returnUrl]);
    }
  }

  /**
   * Cambiar de login a registro
   */
  onSwitchToRegister(): void {
    console.log('🔄 Cambiando de login a registro');
    this.showLoginPopup = false;
    setTimeout(() => {
      this.showRegistroPopup = true;
    }, 200);
  }

  /**
   * Cerrar popup de registro
   */
  onCloseRegistroPopup(): void {
    console.log('❌ Cerrando popup de registro');
    this.showRegistroPopup = false;
  }

  /**
   * Registro exitoso
   */
  onRegistroSuccess(): void {
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
  onSwitchToLogin(): void {
    console.log('🔄 Cambiando de registro a login');
    this.showRegistroPopup = false;
    setTimeout(() => {
      this.showLoginPopup = true;
    }, 200);
  }
}