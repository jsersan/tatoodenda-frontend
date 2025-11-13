// src/app/services/keep-alive.service.ts
// ✅ MANTENER EL BACKEND ACTIVO EN RENDER

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { interval, catchError } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeepAliveService {
  private pingInterval = 14 * 60 * 1000; // 14 minutos (antes de que hiberne)
  private isPinging = false;

  constructor(private http: HttpClient) {}

  /**
   * Inicia el sistema de keep-alive
   * Hace ping cada 14 minutos para evitar hibernación
   */
  startKeepAlive(): void {
    if (this.isPinging) return;
    
    console.log('🔄 Keep-Alive iniciado: ping cada 14 minutos');
    this.isPinging = true;

    // Ping inmediato al iniciar la app
    this.pingServer();

    // Ping cada 14 minutos
    interval(this.pingInterval).subscribe(() => {
      this.pingServer();
    });
  }

  /**
   * Hacer ping al endpoint /health del backend
   */
  private pingServer(): void {
    const pingUrl = `${environment.apiUrl.replace('/api/', '')}/health`;
    
    console.log(`📡 Keep-Alive ping a: ${pingUrl}`);

    this.http.get(pingUrl, { 
      responseType: 'text',
      headers: { 'X-Keep-Alive': 'true' }
    }).pipe(
      catchError(error => {
        console.warn('⚠️ Keep-Alive ping falló:', error.status);
        return of(null);
      })
    ).subscribe(response => {
      if (response) {
        console.log('✅ Keep-Alive ping exitoso');
      }
    });
  }

  /**
   * Pre-calentamiento del backend antes del login
   * Útil para mostrar spinner mientras el backend despierta
   */
  warmUpBackend(): Promise<boolean> {
    console.log('🔥 Calentando backend antes del login...');
    
    const warmUpUrl = `${environment.apiUrl.replace('/api/', '')}/health`;
    
    return new Promise((resolve) => {
      const startTime = Date.now();
      
      this.http.get(warmUpUrl, { 
        responseType: 'text',
        headers: { 'X-Warm-Up': 'true' }
      }).pipe(
        catchError(() => of(null))
      ).subscribe(() => {
        const duration = Date.now() - startTime;
        console.log(`✅ Backend calentado en ${duration}ms`);
        resolve(true);
      });
    });
  }

  /**
   * Detener el keep-alive (útil para testing)
   */
  stopKeepAlive(): void {
    this.isPinging = false;
    console.log('❌ Keep-Alive detenido');
  }
}