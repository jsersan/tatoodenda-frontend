// =================================
// COMPONENTE DE LOADING INTELIGENTE
// =================================

// src/app/shared/loading-indicator/loading-indicator.component.ts

import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ AÑADIR ESTO
import { ApiWakeUpService } from '../../services/wake-up.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-loading-indicator',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loading-overlay" *ngIf="showWakingMessage">
      <div class="loading-card">
        <div class="spinner"></div>
        <h3>🌅 Despertando servidor...</h3>
        <p>Primera carga puede tardar 30-50 segundos</p>
        <p class="tip">💡 Esto solo ocurre tras 15 minutos de inactividad</p>
        
        <div class="progress-bar" *ngIf="responseTime > 0">
          <div class="progress-fill" 
               [style.width.%]="getProgress()">
          </div>
        </div>
        
        <p class="time" *ngIf="responseTime > 0">
          {{ getTimeInSeconds() }}s transcurridos
        </p>
      </div>
    </div>
  `,
    styles: [`
    .loading-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      backdrop-filter: blur(5px);
    }

    .loading-card {
      background: white;
      border-radius: 16px;
      padding: 40px;
      text-align: center;
      max-width: 400px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    }

    .spinner {
      width: 60px;
      height: 60px;
      margin: 0 auto 20px;
      border: 4px solid #f3f3f3;
      border-top: 4px solid #667eea;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    h3 {
      color: #333;
      margin: 0 0 10px;
      font-size: 24px;
    }

    p {
      color: #666;
      margin: 8px 0;
    }

    .tip {
      font-size: 14px;
      color: #999;
      margin-top: 16px;
    }

    .progress-bar {
      width: 100%;
      height: 8px;
      background: #f0f0f0;
      border-radius: 4px;
      overflow: hidden;
      margin: 20px 0 10px;
    }

    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #667eea, #764ba2);
      transition: width 0.3s ease;
    }

    .time {
      font-weight: bold;
      color: #667eea;
      font-size: 18px;
    }
  `]
})
export class LoadingIndicatorComponent implements OnInit, OnDestroy {
  showWakingMessage = false;
  responseTime = 0;
  private destroy$ = new Subject<void>();
  private startTime = 0;

  constructor(public wakeUpService: ApiWakeUpService) {}

  ngOnInit() {
    this.wakeUpService.status$
      .pipe(takeUntil(this.destroy$))
      .subscribe(status => {
        if (!status.isAwake && this.startTime === 0) {
          this.showWakingMessage = true;
          this.startTime = Date.now();
          
          const interval = setInterval(() => {
            this.responseTime = Date.now() - this.startTime;
            
            if (status.isAwake) {
              clearInterval(interval);
              setTimeout(() => {
                this.showWakingMessage = false;
                this.startTime = 0;
                this.responseTime = 0;
              }, 1000);
            }
          }, 500);
        } else if (status.isAwake && this.startTime > 0) {
          this.responseTime = status.responseTime;
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ✅ Método para calcular el progreso
  getProgress(): number {
    return Math.min((this.responseTime / 50000) * 100, 100);
  }

  // ✅ Método para formatear el tiempo en segundos
  getTimeInSeconds(): string {
    return (this.responseTime / 1000).toFixed(1);
  }
}