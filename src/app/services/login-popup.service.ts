// login-popup.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// ✅ Interface para el estado del popup
export interface LoginPopupState {
  isOpen: boolean;
  returnUrl: string;
  fromCheckout: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LoginPopupService {
  // ✅ BehaviorSubject privado con estado inicial
  private loginPopupStateSubject = new BehaviorSubject<LoginPopupState>({
    isOpen: false,
    returnUrl: '',
    fromCheckout: false
  });

  // ✅ Observable público para que los componentes se suscriban
  public loginPopupState$: Observable<LoginPopupState> = this.loginPopupStateSubject.asObservable();

  constructor() {
    console.log('🔧 LoginPopupService inicializado');
  }

  /**
   * Abrir el popup de login
   */
  open(returnUrl: string = '', fromCheckout: boolean = false): void {
    console.log('🔓 LoginPopupService: Abriendo popup', { returnUrl, fromCheckout });
    this.loginPopupStateSubject.next({
      isOpen: true,
      returnUrl,
      fromCheckout
    });
  }

  /**
   * Abrir desde checkout (método específico)
   */
  openForCheckout(returnUrl: string = ''): void {
    console.log('🛒 LoginPopupService: Abriendo desde checkout');
    this.open(returnUrl, true);
  }

  /**
   * Cerrar el popup de login
   */
  close(): void {
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
  getCurrentState(): LoginPopupState {
    return this.loginPopupStateSubject.value;
  }
}