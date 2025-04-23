// Importamos los decoradores y clases necesarias desde Angular
import { Component, OnInit } from '@angular/core';
// Importamos el Router para manejar la navegación programática
import { Router } from '@angular/router';
// Importamos los servicios que necesitamos

import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { CategoryService } from 'src/app/services/category.service';

// Importamos los modelos de datos que vamos a utilizar
import { Category } from 'src/app/models/category';
import { User } from 'src/app/models/user';

@Component({
  // Selector que se usará para insertar este componente en otras plantillas
  selector: 'app-navbar',
  // Ruta a la plantilla HTML
  templateUrl: './navbar.component.html',
  // Ruta a los estilos específicos de este componente
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // Array para almacenar las categorías de productos
  categories: Category[] = [];
  
  // Variable para almacenar los datos del usuario actual, si está logueado
  currentUser: User | null = null;
  
  // Variable para almacenar el término de búsqueda ingresado por el usuario
  searchTerm: string = '';
  
  // Variable para almacenar el número de items en el carrito
  cartItemCount: number = 0;

  // Constructor con inyección de dependencias
  constructor(
    private categoryService: CategoryService,  // Para obtener las categorías
    private authService: AuthService,         // Para manejar la autenticación
    private cartService: CartService,         // Para interactuar con el carrito
    public router: Router                    // Para la navegación programática
  ) { }

  // Método del ciclo de vida que se ejecuta cuando se inicializa el componente
  ngOnInit(): void {
    // Cargar las categorías desde el backend
    this.loadCategories();
    
    // Suscribirse al observable currentUser para detectar cambios en el estado de autenticación
    this.authService.currentUser.subscribe({
      next: (user) => this.currentUser = user
    });
    
    // Suscribirse al observable cartItems para detectar cambios en el carrito
    this.cartService.cartItems.subscribe({
      next: (items) => this.cartItemCount = this.cartService.getCartItemCount()
    });
  }

  // Método para cargar las categorías desde el servicio
  loadCategories(): void {
    this.categoryService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
        console.log('Categorías cargadas:', categories); // Añade este log
        console.log('Categorías principales:', this.getMainCategories()); // Añade este log
      },
      error: (error) => console.error('Error loading categories', error)
    });
  }  

  // Método para procesar la búsqueda cuando el usuario la envía
  search(): void {
    // Verificar que el término de búsqueda no esté vacío
    if (this.searchTerm.trim()) {
      // Navegar a la página de resultados de búsqueda con el término como parámetro
      this.router.navigate(['/search'], { 
        queryParams: { term: this.searchTerm } 
      });
    }
  }

  // Método para cerrar sesión
  logout(): void {
    this.authService.logout();
  }

  // Método para verificar si el usuario actual es administrador
  isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  // Método para obtener solo las categorías principales (padre = id)
  getMainCategories(): Category[] {
    return this.categories.filter(cat => cat.id === cat.parent);
  }

  // Método para obtener subcategorías de una categoría principal
  getSubcategories(categoryId: number): Category[] {
    return this.categories.filter(cat => 
      cat.parent === categoryId && cat.id !== cat.parent
    );
  }
}