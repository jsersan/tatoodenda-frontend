// login-popup.component.ts - VERSIÓN CORREGIDA
import { Component, OnInit, Output, EventEmitter, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.scss'],
  encapsulation: ViewEncapsulation.None // CRÍTICO: Permite que los estilos se apliquen globalmente
})
export class LoginPopupComponent implements OnInit {
  @Input() isVisible: boolean = false;
  @Output() closePopup = new EventEmitter<void>();
  @Output() loginSuccess = new EventEmitter<void>();
  @Output() switchToRegistro = new EventEmitter<void>(); // NUEVO: Para cambiar al registro

  usuario: string = '';
  contrasena: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Escuchar cambios en isVisible para manejar scroll del body
    this.handleBodyScroll();
  }

  ngOnChanges(): void {
    // Manejar scroll del body cuando cambia la visibilidad
    this.handleBodyScroll();
  }

  ngOnDestroy(): void {
    // Restaurar scroll al destruir el componente
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
    document.body.style.overflow = 'auto'; // Restaurar scroll
  }

  // Método para cerrar el popup al hacer click en el overlay
  onOverlayClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.cerrarPopup();
    }
  }

  // Método para iniciar sesión
  iniciarSesion(): void {
    if (!this.usuario || !this.contrasena) {
      this.errorMessage = 'Por favor, completa todos los campos';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.authService.login(this.usuario, this.contrasena).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.loginSuccess.emit();
        this.cerrarPopup();
        console.log('Login exitoso');
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = 'Usuario o contraseña incorrectos';
        console.error('Error en login:', error);
      }
    });
  }

  // Método para navegar al registro
  irARegistro(): void {
    this.cerrarPopup();
    this.switchToRegistro.emit(); // Emitir evento para cambiar al registro
  }

  // Método para resetear el formulario
  private resetForm(): void {
    this.usuario = '';
    this.contrasena = '';
    this.errorMessage = '';
    this.isLoading = false;
  }

  // Método para manejar Enter en los campos
  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.iniciarSesion();
    }
  }

  // Método para manejar la tecla Escape
  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.cerrarPopup();
    }
  }
}