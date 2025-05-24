// profile.component.ts - Con mejor manejo de errores
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { OrderService } from '../../../services/order.service';
import { User } from '../../../models/user';
import { Order } from '../../../models/order';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser: User | null = null;
  orders: Order[] = [];
  profileForm!: FormGroup; // Usar ! para indicar que se inicializará definitivamente
  expandedOrders: { [key: number]: boolean } = {};
  isLoadingOrders: boolean = false;
  ordersError: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private orderService: OrderService
  ) {
    // Obtener el usuario actual
    this.currentUser = this.authService.currentUserValue;
    console.log('Usuario actual en perfil:', this.currentUser);
    
    // Inicializar el formulario SIEMPRE, incluso si no hay usuario
    this.initializeForm();
    
    // Verificar si el usuario está logueado
    if (!this.currentUser) {
      console.error('No hay usuario logueado');
      Swal.fire({
        title: 'Error',
        text: 'No hay usuario logueado. Redirigiendo al inicio...',
        icon: 'error',
        confirmButtonColor: '#52667a'
      }).then(() => {
        // Redirigir al inicio o página de login
        window.location.href = '/';
      });
      return;
    }
  }

  /**
   * Inicializar el formulario con los datos del usuario o valores por defecto
   */
  private initializeForm(): void {
    this.profileForm = this.formBuilder.group({
      username: [this.currentUser?.username || '', Validators.required],
      password: [''],
      email: [this.currentUser?.email || '', [Validators.required, Validators.email]],
      nombre: [this.currentUser?.nombre || '', Validators.required],
      direccion: [this.currentUser?.direccion || '', Validators.required],
      ciudad: [this.currentUser?.ciudad || '', Validators.required],
      cp: [this.currentUser?.cp || '', Validators.required]
    });
  }

  ngOnInit() {
    console.log('Inicializando ProfileComponent...');
    
    // Verificar el estado de autenticación
    this.checkAuthenticationStatus();
    
    // Cargar los pedidos del usuario
    this.loadOrders();
  }

  /**
   * Verificar el estado de autenticación
   */
  private checkAuthenticationStatus(): void {
    const token = this.authService.getToken();
    const isLoggedIn = this.authService.isLoggedIn();
    
    console.log('Estado de autenticación:');
    console.log('- Token presente:', !!token);
    console.log('- Token (primeros 20 chars):', token ? token.substring(0, 20) + '...' : 'No token');
    console.log('- Usuario logueado:', isLoggedIn);
    console.log('- Usuario actual:', this.currentUser);
    
    if (!isLoggedIn || !token) {
      console.error('Usuario no autenticado correctamente');
      this.ordersError = 'No estás autenticado correctamente. Por favor, inicia sesión nuevamente.';
    }
  }

  /**
   * Cargar los pedidos del usuario con mejor manejo de errores
   */
  loadOrders(): void {
    if (!this.currentUser || !this.currentUser.id) {
      console.error('No se puede cargar pedidos: usuario o ID de usuario no disponible');
      this.ordersError = 'Error: No se pudo identificar al usuario actual.';
      return;
    }

    console.log('Cargando pedidos para usuario ID:', this.currentUser.id);
    this.isLoadingOrders = true;
    this.ordersError = null;

    // Verificar token antes de hacer la petición
    const token = this.authService.getToken();
    if (!token) {
      console.error('No hay token de autenticación disponible');
      this.ordersError = 'No hay token de autenticación. Por favor, inicia sesión nuevamente.';
      this.isLoadingOrders = false;
      return;
    }

    this.orderService.getOrders({ userId: this.currentUser.id }).subscribe({
      next: (orders) => {
        console.log('Pedidos cargados exitosamente:', orders);
        this.orders = orders;
        this.isLoadingOrders = false;
        
        // Inicializar el estado de expansión para cada pedido
        this.orders.forEach(order => {
          if (order.id) {
            this.expandedOrders[order.id] = false;
          }
        });
      },
      error: (error) => {
        console.error('Error al cargar pedidos:', error);
        this.isLoadingOrders = false;
        
        // Manejar diferentes tipos de errores
        if (error.status === 401) {
          this.ordersError = 'No tienes permisos para ver estos pedidos. Tu sesión puede haber expirado.';
          
          // Sugerir relogin
          Swal.fire({
            title: 'Sesión expirada',
            text: 'Tu sesión ha expirado. ¿Quieres volver a iniciar sesión?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#52667a',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, iniciar sesión',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
              this.authService.logout();
              window.location.href = '/';
            }
          });
        } else if (error.status === 403) {
          this.ordersError = 'No tienes permisos para acceder a esta información.';
        } else if (error.status === 404) {
          this.ordersError = 'No se encontraron pedidos para este usuario.';
        } else if (error.status === 0) {
          this.ordersError = 'Error de conexión. Verifica tu conexión a internet.';
        } else {
          this.ordersError = `Error del servidor (${error.status}): ${error.message || 'Error desconocido'}`;
        }
        
        // Mostrar error en consola para depuración
        console.error('Detalles completos del error:', {
          status: error.status,
          statusText: error.statusText,
          message: error.message,
          error: error.error,
          url: error.url
        });
      }
    });
  }

  /**
   * Método para recargar pedidos manualmente
   */
  reloadOrders(): void {
    console.log('Recargando pedidos manualmente...');
    this.loadOrders();
  }

  /**
   * Expandir/colapsar los detalles de un pedido
   */
  toggleOrderDetails(orderId: number): void {
    console.log('Toggling order details for order ID:', orderId);
    this.expandedOrders[orderId] = !this.expandedOrders[orderId];
  }

  /**
   * Verificar si un pedido está expandido
   */
  isOrderExpanded(orderId: number): boolean {
    return this.expandedOrders[orderId] || false;
  }

  /**
   * Actualizar los datos del perfil
   */
  updateProfile(): void {
    if (this.profileForm.invalid) {
      console.log('Formulario inválido:', this.profileForm.errors);
      Swal.fire({
        title: 'Formulario inválido',
        text: 'Por favor, completa todos los campos requeridos correctamente.',
        icon: 'warning',
        confirmButtonColor: '#52667a'
      });
      return;
    }

    // Solicitar confirmación de contraseña
    Swal.fire({
      title: 'Confirma tu identidad',
      text: 'Ingresa tu contraseña actual para actualizar tus datos',
      input: 'password',
      inputPlaceholder: 'Contraseña actual',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#52667a',
      cancelButtonColor: '#d33',
      inputValidator: (value) => {
        if (!value) {
          return 'Debes ingresar tu contraseña actual';
        }
        return null;
      }
    }).then((result) => {
      if (result.isConfirmed && this.currentUser) {
        // Crear objeto usuario con los datos del formulario
        const updatedUser: User = {
          ...this.profileForm.value,
          id: this.currentUser.id
        };
        
        // Si no se ingresó nueva contraseña, eliminar esa propiedad
        if (!updatedUser.password) {
          delete updatedUser.password;
        }
        
        console.log('Actualizando datos del usuario:', updatedUser);
        
        // Llamar al servicio para actualizar los datos
        this.authService.updateUser(updatedUser).subscribe({
          next: (response) => {
            console.log('Datos actualizados exitosamente:', response);
            
            Swal.fire({
              title: '¡Datos actualizados!',
              text: 'Tus datos se han actualizado correctamente.',
              icon: 'success',
              confirmButtonColor: '#52667a'
            });
          },
          error: (error) => {
            console.error('Error al actualizar datos:', error);
            
            let errorMessage = 'Hubo un problema al actualizar tus datos.';
            if (error.status === 401) {
              errorMessage = 'No tienes permisos para actualizar estos datos.';
            } else if (error.status === 400) {
              errorMessage = 'Los datos proporcionados no son válidos.';
            }
            
            Swal.fire({
              title: 'Error al actualizar',
              text: errorMessage,
              icon: 'error',
              confirmButtonColor: '#52667a'
            });
          }
        });
      }
    });
  }

  /**
   * Formatear precios con formato de moneda
   */
  formatPrice(price: number): string {
    return new Intl.NumberFormat('es-ES', { 
      style: 'currency', 
      currency: 'EUR' 
    }).format(price);
  }

  /**
   * Método para depuración - mostrar información del token
   */
  debugTokenInfo(): void {
    const token = this.authService.getToken();
    console.log('=== DEBUG TOKEN INFO ===');
    console.log('Token completo:', token);
    console.log('Usuario actual:', this.currentUser);
    console.log('¿Está logueado?:', this.authService.isLoggedIn());
    
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        console.log('Payload del token:', payload);
        console.log('Token expira en:', new Date(payload.exp * 1000));
        console.log('¿Token expirado?:', this.authService.isTokenExpired());
      } catch (error) {
        console.error('Error al decodificar token:', error);
      }
    }
    console.log('========================');
  }
}