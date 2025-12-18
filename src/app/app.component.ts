// app.component.ts - CORREGIDO CON CommonModule

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common'; // ✅ AÑADIDO
import { LoginPopupService, LoginPopupState } from './services/login-popup.service';
import { ApiWakeUpService } from './services/api-wake-up.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false // ✅ Mantener como false si usas app.module.ts
})
export class AppComponent implements OnInit {
  title = 'ecommerce-app';

  // Control de popups
  showLoginPopup = false;
  loginReturnUrl = '';
  loginFromCheckout = false;
  showRegistroPopup = false;

  // Estado de wake-up
  isBackendAwake = false;
  showLoadingOverlay = true;

  constructor(
    private router: Router,
    private loginPopupService: LoginPopupService,
    private apiWakeUpService: ApiWakeUpService
  ) {
    console.log('🚀 AppComponent inicializado');
  }

  ngOnInit(): void {
    // PASO 1: Despertar el backend INMEDIATAMENTE
    this.wakeUpBackend();

    // Suscribirse al servicio de login popup
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
   * Despertar el backend con feedback visual
   */
  private wakeUpBackend(): void {
    console.log('⏰ Despertando backend...');
    
    const startTime = Date.now();

    // ESTRATEGIA: Wake-up agresivo para Render.com
    this.apiWakeUpService.aggressiveWakeUp().subscribe({
      next: (success) => {
        const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
        
        if (success) {
          console.log(`✅ Backend despierto en ${elapsedTime}s`);
          this.isBackendAwake = true;
          
          // Ocultar overlay después de una breve transición
          setTimeout(() => {
            this.showLoadingOverlay = false;
          }, 300);
        } else {
          console.warn(`⚠️ Wake-up completado con advertencias (${elapsedTime}s)`);
          this.isBackendAwake = true;
          this.showLoadingOverlay = false;
        }
      },
      error: (error) => {
        console.error('❌ Error en wake-up:', error);
        // Aún así, permitir que la app continúe
        this.isBackendAwake = false;
        this.showLoadingOverlay = false;
      }
    });

    // Timeout de seguridad: ocultar overlay después de 30s
    setTimeout(() => {
      if (this.showLoadingOverlay) {
        console.warn('⏱️ Timeout de wake-up alcanzado, continuando...');
        this.showLoadingOverlay = false;
      }
    }, 30000);
  }

  onLoginPopupClose(): void {
    console.log('❌ Cerrando popup de login');
    this.showLoginPopup = false;
    this.loginPopupService.close();
  }

  onLoginSuccess(returnUrl: string): void {
    console.log('✅ Login exitoso, navegando a:', returnUrl);
    this.showLoginPopup = false;
    
    if (returnUrl && returnUrl !== '/') {
      this.router.navigate([returnUrl]);
    }
  }

  onSwitchToRegister(): void {
    console.log('🔄 Cambiando de login a registro');
    this.showLoginPopup = false;
    setTimeout(() => {
      this.showRegistroPopup = true;
    }, 200);
  }

  onCloseRegistroPopup(): void {
    console.log('❌ Cerrando popup de registro');
    this.showRegistroPopup = false;
  }

  onRegistroSuccess(): void {
    console.log('✅ Registro exitoso');
    this.showRegistroPopup = false;
    
    setTimeout(() => {
      this.showLoginPopup = true;
    }, 500);
  }

  onSwitchToLogin(): void {
    console.log('🔄 Cambiando de registro a login');
    this.showRegistroPopup = false;
    setTimeout(() => {
      this.showLoginPopup = true;
    }, 200);
  }
}