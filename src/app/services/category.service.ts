import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Category } from '../models/category';
import { of } from 'rxjs';
import * as rxjsOperators from 'rxjs/operators';
import { catchError, map } from 'rxjs/operators';

// Este decorador permite que el servicio sea inyectable en otros componentes/servicios
@Injectable({
  providedIn: 'root' // Hace que este servicio esté disponible a nivel global en la aplicación
})
export class CategoryService {
  // URL base para las peticiones a la API de categorías, obtenida del archivo de entorno
  private apiUrl = `${environment.apiUrl}/categoria`;

  // Inyección de dependencias: HttpClient para realizar peticiones HTTP
  constructor(private http: HttpClient) { }

  // Método para obtener todas las categorías
  // Devuelve un Observable que emitirá un array de categorías
/*   getCategories(): Observable<Category[]> {

     const mockCategories: Category[] = [
      { id: 1, nombre: "Dilataciones", padre: 1 },
      { id: 2, nombre: "Piercings", padre: 2 },
      { id: 3, nombre: "Dilatadores Acrílicos", padre: 1 },
      { id: 4, nombre: "Dilatadores de Madera", padre: 1 },
      { id: 5, nombre: "Piercings de Labio", padre: 2 },
      { id: 6, nombre: "Piercings de Nariz", padre: 2 }
    ];
    
    return of(mockCategories);  */
    
    // Comentar temporalmente la llamada real a la API
    // return this.http.get<Category[]>(this.apiUrl);
  

/*   getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  } */

  getCategories(): Observable<Category[]> {
    return this.http.get<{error: boolean, data: any[]}>(`${this.apiUrl}/categoria`)
      .pipe(
        rxjsOperators.map((response) => {
          if (response.error) {
            throw new Error('Error al obtener categorías');
          }
          // Transformamos los datos recibidos al formato que espera nuestro modelo Category
          return response.data.map((cat) => ({
            id: cat.id,
            name: cat.nombre,
            parent: cat.padre
          }));
        }),
        rxjsOperators.catchError((error) => {
          console.error('Error al obtener categorías:', error);
          return of([]); // Devolvemos un array vacío en caso de error
        })
      );
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