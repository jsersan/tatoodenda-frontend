import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
let ErrorInterceptor = class ErrorInterceptor {
    constructor() { }
    intercept(request, next) {
        return next.handle(request).pipe(catchError((error) => {
            // Añadir información detallada sobre el error
            let errorMessage = '';
            if (error.error instanceof ErrorEvent) {
                // Error del lado del cliente
                errorMessage = `Error del cliente: ${error.error.message}`;
            }
            else {
                // Error del lado del servidor
                errorMessage = `Código de error: ${error.status}\nMensaje: ${error.message}`;
                // Información adicional sobre la solicitud que falló
                const url = request.urlWithParams;
                const method = request.method;
                console.error('Error en solicitud HTTP:', {
                    url,
                    method,
                    status: error.status,
                    statusText: error.statusText,
                    error: error.error,
                    headers: request.headers
                });
                // Manejo específico según el código de error
                switch (error.status) {
                    case 0:
                        console.error('No se pudo conectar al servidor. Verifica tu conexión a internet o si el servidor está en funcionamiento.');
                        break;
                    case 404:
                        console.error(`El recurso solicitado no existe: ${url}`);
                        break;
                    case 401:
                        console.error('No autorizado. Por favor, inicia sesión nuevamente.');
                        break;
                    case 403:
                        console.error('Acceso prohibido. No tienes permiso para acceder a este recurso.');
                        break;
                    case 500:
                        console.error('Error interno del servidor. Por favor, intenta más tarde.');
                        break;
                    default:
                        console.error(`Error HTTP desconocido: ${error.status}`);
                        break;
                }
            }
            // Devolver el error para que los componentes puedan manejarlo
            return throwError(() => error);
        }));
    }
};
ErrorInterceptor = __decorate([
    Injectable()
], ErrorInterceptor);
export { ErrorInterceptor };
//# sourceMappingURL=error.interceptor.js.map