import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Category } from '../models/category';

// Este decorador permite que el servicio sea inyectable en otros componentes/servicios
@Injectable({
  providedIn: 'root' // Hace que este servicio esté disponible a nivel global en la aplicación
})
export class CategoryService {
  // URL base para las peticiones a la API de categorías, obtenida del archivo de entorno
  private apiUrl = `${environment.apiUrl}/categorias`;

  // Inyección de dependencias: HttpClient para realizar peticiones HTTP
  constructor(private http: HttpClient) { }

  // Método para obtener todas las categorías
  // Devuelve un Observable que emitirá un array de categorías
  getCategories(): Observable<Category[]> {
    // Realiza una petición GET a la API y castea la respuesta a un array de Categoria
    return this.http.get<Category[]>(this.apiUrl);
  }

  // Método para obtener una categoría específica por su ID
  getCategory(id: number): Observable<Category> {
    // Construye la URL para la categoría específica añadiendo el ID
    return this.http.get<Category>(`${this.apiUrl}/${id}`);
  }

  // Método para añadir una nueva categoría
  // Recibe un objeto Categoria y devuelve la categoría creada con su ID asignado
  addCategory(category: Category): Observable<Category> {
    // Realiza una petición POST enviando los datos de la categoría
    return this.http.post<Category>(this.apiUrl, category);
  }

  // Método para actualizar una categoría existente
  // Recibe un objeto Categoria con los datos actualizados, incluyendo el ID de la categoría a actualizar
  updateCategory(category: Category): Observable<Category> {
    // Realiza una petición PUT con los datos actualizados a la URL específica de esa categoría
    return this.http.put<Category>(`${this.apiUrl}/${category.id}`, category);
  }

  // Método para eliminar una categoría
  // Recibe el ID de la categoría a eliminar
  deleteCategory(id: number): Observable<any> {
    // Realiza una petición DELETE para la categoría con el ID especificado
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}