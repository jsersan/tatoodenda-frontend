// =================================
// HTTP INTERCEPTOR INTELIGENTE
// =================================

// src/app/interceptors/wake-up.interceptor.ts

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ApiWakeUpService } from '../services/api-wake-up.service';

@Injectable()
export class WakeUpInterceptor implements HttpInterceptor {
  constructor(private wakeUpService: ApiWakeUpService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Si es una request importante (POST, PUT, DELETE), asegurar que el servidor está despierto
    if (['POST', 'PUT', 'DELETE'].includes(req.method)) {
      return from(this.wakeUpService.ensureAwake()).pipe(
        switchMap(() => next.handle(req))
      );
    }
    
    return next.handle(req);
  }
}