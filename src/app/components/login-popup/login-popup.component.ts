// login-popup.component.ts - VERSIÓN MEJORADA CON MENSAJES PROFESIONALES

import { Component, OnInit, Output, EventEmitter, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { KeepAliveService } from '../../services/keep-alive.service';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class LoginPopupComponent implements OnInit {
  @Input() isVisible: boolean = false;
  @Input() returnUrl: string = '/';
  @Input() fromCheckout: boolean = false;
  
  @Output() closePopup = new EventEmitter<void>();
  @Output() loginSuccess = new EventEmitter<any>();
  @Output() switchToRegistro = new EventEmitter<void>();

  usuario: string = '';
  contrasena: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';
  
  isWarmingUp: boolean = false;
  warmUpMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private keepAliveService: KeepAliveService
  ) { }

  ngOnInit(): void {
    this.handleBodyScroll();
  }

  ngOnChanges(): void {
    this.handleBodyScroll();
    
    if (this.isVisible && !this.isWarmingUp) {
      this.warmUpBackendIfNeeded();
    }
  }

  ngOnDestroy(): void {
    document.body.style.overflow = 'auto';
  }

  private async warmUpBackendIfNeeded(): Promise<void> {
    if (!this.fromCheckout) return;

    this.isWarmingUp = true;
    this.warmUpMessage = 'Preparando conexión...';
    
    console.log('🔥 Pre-calentando backend...');
    
    try {
      await this.keepAliveService.warmUpBackend();
      this.warmUpMessage = '';
    } catch (error) {
      console.warn('⚠️ Pre-calentamiento falló (no crítico):', error);
    } finally {
      this.isWarmingUp = false;
    }
  }

  private handleBodyScroll(): void {
    if (this.isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  cerrarPopup(): void {
    this.closePopup.emit();
    this.resetForm();
    document.body.style.overflow = 'auto';
  }

  onOverlayClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.cerrarPopup();
    }
  }

  /**
   * ✅ MEJORADO: Mensajes de error profesionales
   */
  iniciarSesion(): void {
    // Validación de campos vacíos
    if (!this.usuario.trim()) {
      this.errorMessage = 'Por favor, introduce tu nombre de usuario';
      return;
    }

    if (!this.contrasena) {
      this.errorMessage = 'Por favor, introduce tu contraseña';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    
    const startTime = Date.now();
    let timeoutWarning: any;
    
    // Advertencia si tarda más de 5 segundos
    timeoutWarning = setTimeout(() => {
      if (this.isLoading) {
        this.errorMessage = 'Conectando con el servidor, por favor espera...';
        console.log('⏳ Backend está despertando...');
      }
    }, 5000);

    this.authService.login(this.usuario, this.contrasena).subscribe({
      next: (response) => {
        clearTimeout(timeoutWarning);
        const duration = Date.now() - startTime;
        
        this.isLoading = false;
        console.log(`✅ Login exitoso en ${duration}ms:`, response);
        
        this.loginSuccess.emit(response);
        this.cerrarPopup();
      },
      error: (error) => {
        clearTimeout(timeoutWarning);
        const duration = Date.now() - startTime;
        
        this.isLoading = false;
        
        // ✅ MENSAJES PROFESIONALES según el tipo de error
        console.error(`❌ Error en login (${duration}ms):`, error);
        
        // Primero verificamos el código de estado HTTP
        // Error 401 o 403 - Credenciales incorrectas (MÁS COMÚN)
        if (error.status === 401 || error.status === 403) {
          this.errorMessage = 'Usuario o contraseña incorrectos';
        }
        // Error 0 - Sin conexión
        else if (error.status === 0) {
          this.errorMessage = 'No se pudo conectar al servidor. Verifica tu conexión a internet';
        }
        // Error 503 - Servidor no disponible
        else if (error.status === 503) {
          this.errorMessage = 'El servidor está iniciando. Espera 30 segundos e inténtalo de nuevo';
        }
        // Error 500 - Error del servidor
        else if (error.status === 500) {
          this.errorMessage = 'Error en el servidor. Por favor, inténtalo más tarde';
        }
        // Error 429 - Demasiadas peticiones
        else if (error.status === 429) {
          this.errorMessage = 'Demasiados intentos. Espera unos minutos e inténtalo de nuevo';
        }
        // Error 404 - Endpoint no encontrado
        else if (error.status === 404) {
          this.errorMessage = 'Servicio no disponible. Contacta con soporte';
        }
        // Timeout - Servidor tarda mucho
        else if (duration > 30000) {
          this.errorMessage = 'El servidor tardó demasiado en responder. Inténtalo de nuevo';
        }
        // Si hay un mensaje del backend, intentar traducirlo
        else if (error.error?.message) {
          this.errorMessage = this.translateErrorMessage(error.error.message);
        }
        // Si hay texto de error HTTP
        else if (error.statusText && error.statusText !== 'Unknown Error') {
          this.errorMessage = 'Error al iniciar sesión. Verifica tus credenciales';
        }
        // Error genérico como último recurso
        else {
          this.errorMessage = 'Error al iniciar sesión. Inténtalo de nuevo';
        }
      }
    });
  }

  /**
   * ✅ NUEVO: Traducir mensajes de error del backend a español profesional
   */
  private translateErrorMessage(message: string): string {
    const errorMessages: { [key: string]: string } = {
      'Invalid credentials': 'Usuario o contraseña incorrectos',
      'User not found': 'El usuario no existe',
      'Incorrect password': 'Contraseña incorrecta',
      'Account locked': 'Tu cuenta ha sido bloqueada. Contacta con soporte.',
      'Account disabled': 'Tu cuenta ha sido desactivada. Contacta con soporte.',
      'Email not verified': 'Debes verificar tu email antes de iniciar sesión',
      'Too many attempts': 'Demasiados intentos fallidos. Espera unos minutos.',
      'Unauthorized': 'No autorizado. Verifica tus credenciales.',
    };

    // Buscar mensaje coincidente
    for (const [key, value] of Object.entries(errorMessages)) {
      if (message.toLowerCase().includes(key.toLowerCase())) {
        return value;
      }
    }

    // Si no hay coincidencia, devolver el mensaje original o uno genérico
    return message || 'Error al iniciar sesión. Inténtalo de nuevo.';
  }

  irARegistro(): void {
    this.switchToRegistro.emit();
    this.resetForm();
  }

  private resetForm(): void {
    this.usuario = '';
    this.contrasena = '';
    this.errorMessage = '';
    this.isLoading = false;
    this.warmUpMessage = '';
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.iniciarSesion();
    }
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.cerrarPopup();
    }
  }
}