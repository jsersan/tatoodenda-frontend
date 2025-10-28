// src/app/components/password-confirm-modal/password-confirm-modal.component.ts

import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-password-confirm-modal',
  templateUrl: './password-confirm-modal.html',
  styleUrls: ['./password-confirm-modal.scss']
})
export class PasswordConfirmModalComponent implements OnInit, OnDestroy {
  @Output() confirmed = new EventEmitter<string>();
  @Output() cancelled = new EventEmitter<void>();

  isVisible = false;
  password = '';
  showPassword = false;
  hasError = false;
  errorMessage = '';
  isLoading = false;
  currentUser: User | null = null;
  currentDateTime = '';
  
  private intervalId: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    console.log('🔐 PasswordConfirmModalComponent inicializado');
    this.currentUser = this.authService.currentUserValue;
    console.log('👤 Usuario actual:', this.currentUser);
    this.updateDateTime();
    
    // Actualizar fecha y hora cada segundo
    this.intervalId = setInterval(() => {
      this.updateDateTime();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  /**
   * Actualizar fecha y hora actual
   */
  private updateDateTime(): void {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
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
  getUserInitials(): string {
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
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  /**
   * Manejar cambios en el input de contraseña
   */
  onPasswordInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.password = input.value;
    this.hasError = false;
  }

  /**
   * Abrir modal
   */
  open(): void {
    console.log('📂 Abriendo modal de confirmación de contraseña');
    this.isVisible = true;
    this.password = '';
    this.hasError = false;
    this.errorMessage = '';
    this.showPassword = false;
    this.isLoading = false;
    
    // Focus en el input después de la animación
    setTimeout(() => {
      const input = document.getElementById('password') as HTMLInputElement;
      if (input) {
        input.focus();
      }
    }, 300);
  }

  /**
   * Cerrar modal
   */
  close(): void {
    console.log('❌ Cerrando modal de confirmación de contraseña');
    this.isVisible = false;
    this.password = '';
    this.hasError = false;
    this.errorMessage = '';
  }

  /**
   * Manejar confirmación
   */
  async onConfirm(): Promise<void> {
    if (!this.password) {
      this.hasError = true;
      this.errorMessage = 'Por favor, ingresa tu contraseña';
      return;
    }

    this.isLoading = true;
    this.hasError = false;

    try {
      // Verificar contraseña con el backend
      const username = this.currentUser?.username || '';
      
      console.log('🔍 Verificando contraseña para usuario:', username);
      
      // Intentar login para verificar contraseña
      const user = await this.authService.login(username, this.password).toPromise();
      
      console.log('✅ Contraseña verificada correctamente');
      
      // Si llega aquí, la contraseña es correcta
      this.isLoading = false;
      this.confirmed.emit(this.password);
      this.close();
      
    } catch (error: any) {
      console.error('❌ Error al verificar contraseña:', error);
      this.isLoading = false;
      this.hasError = true;
      this.errorMessage = 'Contraseña incorrecta. Inténtalo de nuevo.';
    }
  }

  /**
   * Manejar cancelación
   */
  onCancel(): void {
    console.log('🚫 Usuario canceló la confirmación de contraseña');
    this.cancelled.emit();
    this.close();
  }
}