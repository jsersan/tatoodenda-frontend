// order.service.ts - Actualizado para autenticación
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:3000/api'; // Ajusta según tu backend

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  /**
   * Obtener pedidos del usuario
   * El interceptor se encargará automáticamente de añadir el token Bearer
   */
  getOrders(params?: { userId?: number }): Observable<Order[]> {
    console.log('Obteniendo pedidos para el usuario:', params?.userId);
    
    // Construir parámetros de consulta si se proporcionan
    let httpParams = new HttpParams();
    if (params?.userId) {
      httpParams = httpParams.set('userId', params.userId.toString());
    }

    // El interceptor añadirá automáticamente las headers de autenticación
    return this.http.get<Order[]>(`${this.apiUrl}/orders`, { params: httpParams });
  }

  /**
   * Obtener un pedido específico por ID
   */
  getOrderById(orderId: number): Observable<Order> {
    console.log('Obteniendo pedido con ID:', orderId);
    
    return this.http.get<Order>(`${this.apiUrl}/orders/${orderId}`);
  }

  /**
   * Crear un nuevo pedido
   */
  createOrder(order: Order): Observable<any> {
    console.log('Creando nuevo pedido:', order);
    
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    return this.http.post<any>(`${this.apiUrl}/orders`, order, { headers });
  }

  /**
   * Actualizar el estado de un pedido
   */
  updateOrderStatus(orderId: number, status: string): Observable<any> {
    console.log('Actualizando estado del pedido:', orderId, 'a:', status);
    
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    return this.http.patch<any>(`${this.apiUrl}/orders/${orderId}/status`, 
      { status }, 
      { headers }
    );
  }

  /**
   * Obtener pedidos con filtros avanzados
   */
  getOrdersWithFilters(filters: {
    userId?: number;
    status?: string;
    dateFrom?: Date;
    dateTo?: Date;
    limit?: number;
    offset?: number;
  }): Observable<{ orders: Order[], total: number }> {
    console.log('Obteniendo pedidos con filtros:', filters);
    
    let httpParams = new HttpParams();
    
    // Añadir parámetros si existen
    if (filters.userId) {
      httpParams = httpParams.set('userId', filters.userId.toString());
    }
    if (filters.status) {
      httpParams = httpParams.set('status', filters.status);
    }
    if (filters.dateFrom) {
      httpParams = httpParams.set('dateFrom', filters.dateFrom.toISOString());
    }
    if (filters.dateTo) {
      httpParams = httpParams.set('dateTo', filters.dateTo.toISOString());
    }
    if (filters.limit) {
      httpParams = httpParams.set('limit', filters.limit.toString());
    }
    if (filters.offset) {
      httpParams = httpParams.set('offset', filters.offset.toString());
    }

    return this.http.get<{ orders: Order[], total: number }>(`${this.apiUrl}/orders/search`, { params: httpParams });
  }

  /**
   * Cancelar un pedido
   */
  cancelOrder(orderId: number, reason?: string): Observable<any> {
    console.log('Cancelando pedido:', orderId, 'Razón:', reason);
    
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = reason ? { reason } : {};
    
    return this.http.patch<any>(`${this.apiUrl}/orders/${orderId}/cancel`, body, { headers });
  }

  /**
   * Obtener el historial de un pedido específico
   */
  getOrderHistory(orderId: number): Observable<any[]> {
    console.log('Obteniendo historial del pedido:', orderId);
    
    return this.http.get<any[]>(`${this.apiUrl}/orders/${orderId}/history`);
  }

  /**
   * Método de ayuda para verificar si el usuario está autenticado
   * antes de hacer peticiones críticas
   */
  private checkAuthentication(): boolean {
    if (!this.authService.isLoggedIn()) {
      console.error('Usuario no autenticado');
      throw new Error('Usuario no autenticado. Por favor, inicia sesión.');
    }
    return true;
  }

  /**
   * Obtener estadísticas de pedidos del usuario actual
   */
  getUserOrderStats(): Observable<any> {
    this.checkAuthentication();
    console.log('Obteniendo estadísticas de pedidos del usuario');
    
    return this.http.get<any>(`${this.apiUrl}/orders/stats`);
  }
}