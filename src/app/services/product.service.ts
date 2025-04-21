import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Product } from '../models/product';

// Este decorador permite que el servicio sea inyectable en otros componentes/servicios
@Injectable({
  providedIn: 'root' // Hace que este servicio esté disponible a nivel global en la aplicación
})
export class ProductService {
  // URL base para las peticiones a la API de productos
  private apiUrl = `${environment.apiUrl}/productos`;

  // Inyección de dependencias: HttpClient para realizar peticiones HTTP
  constructor(private http: HttpClient) { }

  // Método para obtener todos los productos
  // Devuelve un Observable que emitirá un array de productos
  getProducts(): Observable<Product[]> {
    // Realiza una petición GET a la API y castea la respuesta a un array de Productos
    return this.http.get<Product[]>(this.apiUrl);
  }

  // Método para obtener productos filtrados por categoría
  getProductsByCategory(categoryId: number): Observable<Product[]> {
    // Añade el parámetro de categoría a la URL
    return this.http.get<Product[]>(`${this.apiUrl}?categoria=${categoryId}`);
  }

  // Método para obtener un producto específico por su ID
  getProduct(id: number): Observable<Product> {
    // Construye la URL para el producto específico
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  // Método para buscar productos por término de búsqueda
  searchProducts(term: string): Observable<Product[]> {
    // Realiza una petición GET con el parámetro de búsqueda
    return this.http.get<Product[]>(`${this.apiUrl}/search?q=${term}`);
  }

  // Método para añadir un nuevo producto
  // Recibe un objeto Producto y devuelve el Productoo creado con su ID asignado
  addProduct(producto: Product): Observable<Product> {
    // Realiza una petición POST enviando los datos del producto
    return this.http.post<Product>(this.apiUrl, producto);
  }

  // Método para actualizar un producto existente
  updateProduct(producto: Product): Observable<Product> {
    // Realiza una petición PUT con los datos actualizados
    return this.http.put<Product>(`${this.apiUrl}/${producto.id}`, producto);
  }

  // Método para eliminar un producto
  deleteProduct(id: number): Observable<any> {
    // Realiza una petición DELETE para el producto con el ID especificado
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Método para obtener los colores disponibles para un producto
  getProductColors(productoId: number): Observable<any[]> {
    // Realiza una petición GET a la subURL de colores
    return this.http.get<any[]>(`${this.apiUrl}/${productoId}/colores`);
  }

  // Método para subir imágenes al servidor
  uploadProductImages(productId: number, files: File[]): Observable<any> {
  const formData = new FormData();
  
  // Añadir cada archivo al FormData
  files.forEach((file, index) => {
    formData.append('images', file, file.name);
  });
  
  // Enviar la petición POST al servidor
  return this.http.post<any>(`${this.apiUrl}/${productId}/images`, formData);
}
}