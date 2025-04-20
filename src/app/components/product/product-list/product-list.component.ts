import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { CategoryService } from '../../../services/category.service';
import { Product } from '../../../models/product';
import { Category } from '../../../models/category';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: []
})
export class ProductListComponent implements OnInit {
  // Array para almacenar los productos a mostrar
  products: Product[] = [];
  
  // Propiedad para almacenar la categoría actual
  currentCategory: Category | null = null;
  
  // Propiedad para almacenar el ID de categoría (de la URL)
  categoryId: number | null = null;
  
  constructor(
    private route: ActivatedRoute,           // Para acceder a los parámetros de la ruta
    private productService: ProductService,  // Para obtener productos
    private categoryService: CategoryService // Para obtener datos de la categoría
  ) { }

  ngOnInit(): void {
    // Suscribirse a los cambios en los parámetros de la ruta
    this.route.params.subscribe({
      next: (params) => {
        // Si hay un parámetro 'id', es una categoría específica
        if (params['id']) {
          this.categoryId = +params['id']; // Convertir a número
          this.loadCategoryDetails();
          this.loadProductsByCategory();
        } else {
          // Sin parámetro 'id', mostrar todos los productos
          this.categoryId = null;
          this.currentCategory = null;
          this.loadAllProducts();
        }
      }
    });
  }

  // Método para cargar los detalles de la categoría actual
  loadCategoryDetails(): void {
    if (this.categoryId) {
      this.categoryService.getCategory(this.categoryId).subscribe({
        next: (category) => {
          this.currentCategory = category;
        },
        error: (error) => console.error('Error loading category details', error)
      });
    }
  }

  // Método para cargar productos filtrados por categoría
  loadProductsByCategory(): void {
    if (this.categoryId) {
      this.productService.getProductsByCategory(this.categoryId).subscribe({
        next: (products) => {
          this.products = products;
        },
        error: (error) => console.error('Error loading products by category', error)
      });
    }
  }

  // Método para cargar todos los productos (sin filtro)
  loadAllProducts(): void {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
      },
      error: (error) => console.error('Error loading all products', error)
    });
  }

  // Método para formatear precio como moneda
  formatPrice(price: number): string {
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(price);
  }
}