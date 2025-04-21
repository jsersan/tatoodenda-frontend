// Importamos los decoradores y clases necesarias desde Angular
import { Component, OnInit } from '@angular/core';
// Importamos el modelo de datos para los productos
import { Product } from '../../models/product';
// Importamos el servicio que se encargará de obtener los productos de la API
import { ProductService } from '../../services/product.service';

// Decorador @Component que define las propiedades del componente Angular
@Component({
  // El selector CSS que se usará para insertar este componente en otras plantillas
  selector: 'app-home',
  // La ruta a la plantilla HTML que define la estructura visual de este componente
  templateUrl: './home.component.html',
  // Las rutas a los archivos de estilos para este componente específico
  styleUrls: ['./home.component.scss']
})
// La clase del componente que implementa OnInit (interfaz del ciclo de vida)
export class HomeComponent implements OnInit {
  // Propiedades de clase:
  
  // Array para almacenar los productos que se mostrarán en la página principal
  products: Product[] = [];
  
  // Array para almacenar las rutas a las imágenes del banner
  bannerImages: string[] = [];
  
  // Variable para mantener track de qué imagen del banner se está mostrando
  currentBannerIndex = 0;
  
  // Variable para almacenar la referencia al temporizador del banner
  // Necesario para detenerlo cuando el componente se destruya
  bannerInterval: any;

  // Constructor del componente donde inyectamos las dependencias
  // productService se inyecta automáticamente gracias al sistema de DI de Angular
  constructor(private productService: ProductService) { }

  // Método de ciclo de vida que se ejecuta cuando Angular ha terminado de inicializar el componente
  ngOnInit(): void {
    // Cargamos la lista de productos
    this.loadProducts();
    
    // Cargamos las imágenes del banner
    this.loadBannerImages();
    
    // Iniciamos la rotación automática del banner
    this.startBannerRotation();
  }

  // Método del ciclo de vida que se ejecuta cuando el componente va a ser destruido
  // Importante para limpiar recursos y evitar memory leaks
  ngOnDestroy(): void {
    // Si hay un intervalo de banner activo, lo eliminamos para evitar que siga ejecutándose
    if (this.bannerInterval) {
      clearInterval(this.bannerInterval);
    }
  }

  // Método para cargar productos desde el servicio
  loadProducts(): void {
    // Llamamos al método getProducts del servicio, que devuelve un Observable
    this.productService.getProducts().subscribe({
      // Cuando el Observable emite productos (éxito), los asignamos a la propiedad products
      next: (products) => this.products = products,
      // Si ocurre un error, lo registramos en la consola
      error: (error) => console.error('Error loading products', error)
    });
  }

  // Método para cargar las imágenes del banner
  // En una app real, esto podría venir de la API, pero aquí lo simulamos con rutas estáticas
  loadBannerImages(): void {
    this.bannerImages = [
      'assets/images/banner/banner1.jpg',
      'assets/images/banner/banner2.jpg'
    ];
  }

  // Método para iniciar la rotación automática del banner
  startBannerRotation(): void {
    // Configuramos un temporizador que llama a nextBanner cada 5 segundos
    this.bannerInterval = setInterval(() => {
      this.nextBanner();
    }, 5000);
  }

  // Método para mostrar la imagen anterior del banner
  prevBanner(): void {
    // Calculamos el nuevo índice: si estamos en la primera imagen, vamos a la última
    // Si no, simplemente retrocedemos una posición
    this.currentBannerIndex = 
      (this.currentBannerIndex === 0) 
      ? this.bannerImages.length - 1 
      : this.currentBannerIndex - 1;
  }

  // Método para mostrar la siguiente imagen del banner
  nextBanner(): void {
    // Calculamos el nuevo índice: si estamos en la última imagen, volvemos a la primera
    // Si no, avanzamos una posición
    this.currentBannerIndex = 
      (this.currentBannerIndex === this.bannerImages.length - 1) 
      ? 0 
      : this.currentBannerIndex + 1;
  }
}