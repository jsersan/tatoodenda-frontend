// profile.component.ts - ARCHIVO COMPLETO ACTUALIZADO

// Importaciones necesarias de Angular
import { Component, OnInit, ViewChild } from '@angular/core';
// Importación para trabajar con formularios reactivos
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// Importación de servicios necesarios
import { AuthService } from '../../../services/auth.service';
// Importación de modelos de datos
import { User } from '../../../models/user';
// Importación para alertas
import Swal from 'sweetalert2';
// ✅ Importar el nuevo componente de modal
import { PasswordConfirmModalComponent } from '../../password-confirm-modal/password-confirm-modal';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  // ✅ Referencia al modal de confirmación de contraseña
  @ViewChild(PasswordConfirmModalComponent) passwordModal!: PasswordConfirmModalComponent;
  
  // Propiedad para almacenar datos del usuario actual
  currentUser: User | null = null;
  
  // FormGroup para manejar el formulario de actualización de perfil
  profileForm: FormGroup;

  // Constructor con inyección de dependencias
  constructor(
    private formBuilder: FormBuilder,     // Para crear formularios reactivos
    private authService: AuthService      // Para obtener/actualizar datos del usuario
  ) {
    // Obtener el usuario actual desde el servicio de autenticación
    this.currentUser = this.authService.currentUserValue;
    
    // Inicializar el formulario con los datos actuales del usuario
    this.profileForm = this.formBuilder.group({
      username: [this.currentUser?.username, Validators.required],
      password: [''],  // Campo opcional, vacío por defecto
      email: [this.currentUser?.email, [Validators.required, Validators.email]],
      nombre: [this.currentUser?.nombre, Validators.required],
      direccion: [this.currentUser?.direccion, Validators.required],
      ciudad: [this.currentUser?.ciudad, Validators.required],
      cp: [this.currentUser?.cp, Validators.required]
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
  updateProfile(): void {
    // Validar que el formulario sea válido
    if (this.profileForm.invalid) {
      Swal.fire({
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
  onPasswordConfirmed(password: string): void {
    console.log('✅ Contraseña confirmada, procediendo a actualizar perfil...');
    
    if (!this.currentUser) {
      console.error('❌ No hay usuario actual');
      return;
    }

    // Crear objeto usuario con los datos del formulario
    const updatedUser: User = {
      ...this.profileForm.value,
      id: this.currentUser.id
    };
    
    // Si no se ingresó nueva contraseña, eliminar esa propiedad
    if (!updatedUser.password || updatedUser.password.trim() === '') {
      delete updatedUser.password;
    }
    
    console.log('📦 Datos a actualizar:', { ...updatedUser, password: '***' });
    
    // Llamar al servicio para actualizar los datos
    this.authService.updateUser(updatedUser).subscribe({
      next: (data) => {
        console.log('✅ Perfil actualizado exitosamente:', data);
        
        // Actualizar el usuario actual en el componente
        this.currentUser = this.authService.currentUserValue;
        
        // Si se cambió la contraseña, limpiar el campo
        if (updatedUser.password) {
          this.profileForm.patchValue({ password: '' });
        }
        
        // Mostrar mensaje de éxito con diseño moderno
        Swal.fire({
          title: '¡Perfil actualizado!',
          text: 'Tus datos se han actualizado correctamente',
          icon: 'success',
          confirmButtonColor: '#667eea',
          confirmButtonText: 'Entendido',
          timer: 3000,
          timerProgressBar: true
        });
      },
      error: (error) => {
        console.error('❌ Error al actualizar perfil:', error);
        
        // Mostrar mensaje de error detallado
        Swal.fire({
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
  onPasswordCancelled(): void {
    console.log('❌ Actualización de perfil cancelada por el usuario');
    
    // Opcional: Mostrar un mensaje sutil
    Swal.fire({
      title: 'Actualización cancelada',
      text: 'No se realizaron cambios en tu perfil',
      icon: 'info',
      confirmButtonColor: '#52667a',
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false
    });
  }
}