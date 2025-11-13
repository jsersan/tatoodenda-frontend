// src/app/services/keep-alive.service.ts
// ✅ MANTENER EL BACKEND ACTIVO EN RENDER
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { interval, catchError } from 'rxjs';
import { of } from 'rxjs';
let KeepAliveService = class KeepAliveService {
    constructor(http) {
        this.http = http;
        this.pingInterval = 14 * 60 * 1000; // 14 minutos (antes de que hiberne)
        this.isPinging = false;
    }
    /**
     * Inicia el sistema de keep-alive
     * Hace ping cada 14 minutos para evitar hibernación
     */
    startKeepAlive() {
        if (this.isPinging)
            return;
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
    pingServer() {
        const pingUrl = `${environment.apiUrl.replace('/api/', '')}/health`;
        console.log(`📡 Keep-Alive ping a: ${pingUrl}`);
        this.http.get(pingUrl, {
            responseType: 'text',
            headers: { 'X-Keep-Alive': 'true' }
        }).pipe(catchError(error => {
            console.warn('⚠️ Keep-Alive ping falló:', error.status);
            return of(null);
        })).subscribe(response => {
            if (response) {
                console.log('✅ Keep-Alive ping exitoso');
            }
        });
    }
    /**
     * Pre-calentamiento del backend antes del login
     * Útil para mostrar spinner mientras el backend despierta
     */
    warmUpBackend() {
        console.log('🔥 Calentando backend antes del login...');
        const warmUpUrl = `${environment.apiUrl.replace('/api/', '')}/health`;
        return new Promise((resolve) => {
            const startTime = Date.now();
            this.http.get(warmUpUrl, {
                responseType: 'text',
                headers: { 'X-Warm-Up': 'true' }
            }).pipe(catchError(() => of(null))).subscribe(() => {
                const duration = Date.now() - startTime;
                console.log(`✅ Backend calentado en ${duration}ms`);
                resolve(true);
            });
        });
    }
    /**
     * Detener el keep-alive (útil para testing)
     */
    stopKeepAlive() {
        this.isPinging = false;
        console.log('❌ Keep-Alive detenido');
    }
};
KeepAliveService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], KeepAliveService);
export { KeepAliveService };
//# sourceMappingURL=keep-alive.service.js.map