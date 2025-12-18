// src/app/services/api-wake-up.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of, timer } from 'rxjs';
import { catchError, timeout, retry, tap, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiWakeUpService {
  private readonly WAKE_UP_TIMEOUT = 30000; // 30 segundos timeout
  private readonly RETRY_ATTEMPTS = 3;
  private readonly HEALTH_CHECK_ENDPOINT = `${environment.apiUrl}/health`;
  
  // Estado del servicio
  private isAwake = false;
  private isWakingUp = false;

  constructor(private http: HttpClient) {
    console.log('🔌 ApiWakeUpService inicializado');
  }

  /**
   * ✅ Despertar el backend con múltiples estrategias
   */
  wakeUpBackend(): Observable<boolean> {
    if (this.isAwake) {
      console.log('✅ Backend ya está despierto');
      return of(true);
    }

    if (this.isWakingUp) {
      console.log('⏳ Wake-up ya en progreso...');
      return this.waitForWakeUp();
    }

    console.log('🚀 Iniciando wake-up del backend...');
    this.isWakingUp = true;

    // ESTRATEGIA 1: Ping simple al health check
    return this.http.get(this.HEALTH_CHECK_ENDPOINT, { 
      responseType: 'text',
      headers: { 'X-Wake-Up': 'true' }
    }).pipe(
      timeout(this.WAKE_UP_TIMEOUT),
      retry(this.RETRY_ATTEMPTS),
      tap(() => {
        console.log('✅ Backend respondió al health check');
        this.isAwake = true;
        this.isWakingUp = false;
      }),
      switchMap(() => of(true)),
      catchError(error => {
        console.warn('⚠️ Health check falló, intentando endpoint alternativo:', error.message);
        return this.fallbackWakeUp();
      })
    );
  }

  /**
   * ✅ Wake-up alternativo usando endpoint de categorías (más ligero)
   */
  private fallbackWakeUp(): Observable<boolean> {
    const fallbackUrl = `${environment.apiUrl}/categorias`;
    
    console.log('🔄 Intentando wake-up con endpoint alternativo...');
    
    return this.http.get(fallbackUrl, { 
      responseType: 'json',
      headers: { 'X-Wake-Up': 'true' }
    }).pipe(
      timeout(this.WAKE_UP_TIMEOUT),
      retry(2),
      tap(() => {
        console.log('✅ Backend despierto (vía fallback)');
        this.isAwake = true;
        this.isWakingUp = false;
      }),
      switchMap(() => of(true)),
      catchError(error => {
        console.error('❌ Todos los intentos de wake-up fallaron:', error);
        this.isWakingUp = false;
        return of(false);
      })
    );
  }

  /**
   * ✅ Esperar a que termine el wake-up en progreso
   */
  private waitForWakeUp(): Observable<boolean> {
    return timer(0, 500).pipe(
      switchMap(() => {
        if (this.isAwake) {
          return of(true);
        }
        if (!this.isWakingUp) {
          return of(false);
        }
        return of(null as any);
      }),
      // Filtrar valores null y tomar el primer valor válido
      tap(value => {
        if (value !== null) {
          return value;
        }
      }),
      timeout(this.WAKE_UP_TIMEOUT),
      catchError(() => of(false))
    );
  }

  /**
   * ✅ Verificar si el backend está despierto
   */
  isBackendAwake(): boolean {
    return this.isAwake;
  }

  /**
   * ✅ Resetear estado (útil para testing)
   */
  resetState(): void {
    this.isAwake = false;
    this.isWakingUp = false;
  }

  /**
   * ✅ Wake-up agresivo con múltiples peticiones simultáneas
   * (útil para Render.com que hiberna después de 15 min de inactividad)
   */
  aggressiveWakeUp(): Observable<boolean> {
    console.log('⚡ Iniciando wake-up AGRESIVO...');
    
    const endpoints = [
      `${environment.apiUrl}/health`,
      `${environment.apiUrl}/categorias`,
      `${environment.apiUrl}/productos`
    ];

    // Hacer 3 peticiones simultáneas
    const requests = endpoints.map(url => 
      this.http.get(url, { 
        responseType: 'text',
        headers: { 'X-Wake-Up': 'true' }
      }).pipe(
        timeout(25000),
        catchError(err => {
          console.warn(`⚠️ Petición a ${url} falló:`, err.message);
          return of(null);
        })
      )
    );

    // Esperar a que al menos una responda
    return new Observable(observer => {
      let responded = false;
      
      requests.forEach(req => {
        req.subscribe({
          next: (response) => {
            if (response && !responded) {
              responded = true;
              this.isAwake = true;
              this.isWakingUp = false;
              console.log('✅ Backend despierto (modo agresivo)');
              observer.next(true);
              observer.complete();
            }
          }
        });
      });

      // Timeout de seguridad
      setTimeout(() => {
        if (!responded) {
          this.isWakingUp = false;
          console.error('❌ Wake-up agresivo falló');
          observer.next(false);
          observer.complete();
        }
      }, this.WAKE_UP_TIMEOUT);
    });
  }
}