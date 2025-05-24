// registro-popup.component.ts
import { Component, OnInit, Output, EventEmitter, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro-popup',
  templateUrl: './registro-popup.component.html',
  styleUrls: ['./registro-popup.component.scss'],
  encapsulation: ViewEncapsulation.None // Permite que los estilos se apliquen globalmente
})
export class RegistroPopupComponent implements OnInit {
  @Input() isVisible: boolean = false;
  @Output() closePopup = new EventEmitter<void>();
  @Output() registroSuccess = new EventEmitter<void>();
  @Output() switchToLogin = new EventEmitter<void>(); // Para cambiar al login

  // Campos del formulario
  usuario: string = '';
  contrasena: string = '';
  nombreCompleto: string = '';
  email: string = '';
  direccion: string = '';
  ciudad: string = '';
  codigoPostal: string = '';
  
  // Estados del componente
  isLoading: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.handleBodyScroll();
  }

  ngOnChanges(): void {
    this.handleBodyScroll();
  }

  ngOnDestroy(): void {
    document.body.style.overflow = 'auto';
  }

  // Manejar el scroll del body
  private handleBodyScroll(): void {
    if (this.isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  // Método para cerrar el popup
  cerrarPopup(): void {
    this.closePopup.emit();
    this.resetForm();
    document.body.style.overflow = 'auto';
  }

  // Método para cerrar el popup al hacer click en el overlay
  onOverlayClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.cerrarPopup();
    }
  }

  // Método para registrarse
  registrarse(): void {
    // Validaciones básicas
    if (!this.usuario || !this.contrasena || !this.nombreCompleto || !this.email) {
      this.errorMessage = 'Por favor, completa todos los campos obligatorios';
      this.successMessage = '';
      return;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      this.errorMessage = 'Por favor, introduce un email válido';
      this.successMessage = '';
      return;
    }

    // Validar contraseña (mínimo 6 caracteres)
    if (this.contrasena.length < 6) {
      this.errorMessage = 'La contraseña debe tener al menos 6 caracteres';
      this.successMessage = '';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    // Crear objeto de usuario con los nombres correctos para la interfaz User
    const nuevoUsuario = {
      username: this.usuario,      // ✅ Mapeo correcto
      password: this.contrasena,   // ✅ Mapeo correcto  
      name: this.nombreCompleto,   // ✅ Mapeo correcto
      email: this.email,
      direccion: this.direccion,
      ciudad: this.ciudad,
      codigoPostal: this.codigoPostal
    };

    // Llamar al servicio de registro
    this.authService.register(nuevoUsuario).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.successMessage = '¡Registro exitoso! Bienvenido/a ' + this.nombreCompleto;
        this.errorMessage = '';
        
        // Emitir evento de éxito
        setTimeout(() => {
          this.registroSuccess.emit();
          this.cerrarPopup();
        }, 2000); // Mostrar mensaje por 2 segundos

        console.log('Registro exitoso:', response);
      },
      error: (error) => {
        this.isLoading = false;
        this.successMessage = '';
        
        // Manejar errores específicos
        if (error.status === 409) {
          this.errorMessage = 'El usuario o email ya existe';
        } else if (error.status === 400) {
          this.errorMessage = 'Datos inválidos. Verifica la información';
        } else {
          this.errorMessage = 'Error en el registro. Inténtalo de nuevo';
        }
        
        console.error('Error en registro:', error);
      }
    });
  }

  // Método para ir al login
  irALogin(): void {
    this.cerrarPopup();
    this.switchToLogin.emit(); // Emitir evento para cambiar al login
  }

  // Método para resetear el formulario
  private resetForm(): void {
    this.usuario = '';
    this.contrasena = '';
    this.nombreCompleto = '';
    this.email = '';
    this.direccion = '';
    this.ciudad = '';
    this.codigoPostal = '';
    this.errorMessage = '';
    this.successMessage = '';
    this.isLoading = false;
  }

  // Método para manejar la tecla Escape
  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.cerrarPopup();
    }
  }

  // Validaciones en tiempo real (opcionales)
  onEmailBlur(): void {
    if (this.email && !this.isValidEmail(this.email)) {
      this.errorMessage = 'Formato de email inválido';
    } else if (this.errorMessage === 'Formato de email inválido') {
      this.errorMessage = '';
    }
  }

  onPasswordBlur(): void {
    if (this.contrasena && this.contrasena.length < 6) {
      this.errorMessage = 'La contraseña debe tener al menos 6 caracteres';
    } else if (this.errorMessage === 'La contraseña debe tener al menos 6 caracteres') {
      this.errorMessage = '';
    }
  }

  // Método auxiliar para validar email
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}