import { Component, OnInit, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs'
import { OrderService } from '../../services/order.service'
import { PdfService } from '../../services/pdf.service'
import { AuthService } from '../../services/auth.service'
import { Order, OrderLine } from '../../models/order'
import { User } from '../../models/user'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-historial-pedidos',
  templateUrl: './historial-pedidos.component.html',
  styleUrls: ['./historial-pedidos.component.scss']
})
export class HistorialPedidosComponent implements OnInit, OnDestroy {
  pedidos: (Order & { expanded?: boolean })[] = []
  currentUser: User | null = null
  private subscription?: Subscription

  constructor (
    private orderService: OrderService,
    private pdfService: PdfService,
    private authService: AuthService
  ) {}

  ngOnInit (): void {
    this.currentUser = this.authService.currentUserValue || null
    this.loadPedidos()
  }

  ngOnDestroy (): void {
    if (this.subscription) this.subscription.unsubscribe()
  }

  loadPedidos (): void {
    this.subscription = this.orderService.getUserOrders().subscribe({
      next: (orders: Order[]) => {
        // Ordena del más reciente al más antiguo
        this.pedidos = orders
          .sort((a, b) => {
            const dateB = new Date(b.fecha).getTime()
            const dateA = new Date(a.fecha).getTime()
            if (dateB !== dateA) {
              return dateB - dateA
            }
            return (b.id ?? 0) - (a.id ?? 0)
          })
          .map(p => ({ ...p, expanded: false }))
        
        console.log('✅ Pedidos cargados:', this.pedidos.length)
      },
      error: err => {
        console.error('❌ Error cargando pedidos:', err)
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudieron cargar los pedidos',
          confirmButtonColor: '#52667a'
        })
      }
    })
  }

  /**
   * ✅ MÉTODO CORREGIDO PARA DESCARGAR ALBARÁN
   * Usa el servicio PDF del frontend (jsPDF) directamente
   */
  descargarAlbaran(pedidoId: number): void {
    console.log('📄 Descargando albarán para pedido:', pedidoId)
    
    // Buscar el pedido en la lista actual
    const pedido = this.pedidos.find(p => p.id === pedidoId)
    
    if (!pedido) {
      console.error('❌ Pedido no encontrado:', pedidoId)
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Pedido no encontrado',
        confirmButtonColor: '#52667a'
      })
      return
    }

    if (!this.currentUser) {
      console.error('❌ Usuario no disponible')
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Usuario no disponible',
        confirmButtonColor: '#52667a'
      })
      return
    }

    // ✅ VERIFICAR SI HAY LÍNEAS EN EL PEDIDO
    if (!pedido.lineas || pedido.lineas.length === 0) {
      console.warn('⚠️ El pedido no tiene líneas, obteniendo del servidor...')
      
      // Si no hay líneas, obtenerlas del servidor
      this.orderService.getOrderLines(pedido.id ?? 0).subscribe({
        next: (lineas: OrderLine[]) => {
          console.log('✅ Líneas obtenidas del servidor:', lineas)
          
          // Asignar las líneas al pedido
          pedido.lineas = lineas
          
          // Generar el PDF con las líneas obtenidas
          this.generarYDescargarPDF(pedido, lineas)
        },
        error: (err) => {
          console.error('❌ Error obteniendo líneas del pedido:', err)
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudieron obtener los detalles del pedido',
            confirmButtonColor: '#52667a'
          })
        }
      })
    } else {
      console.log('✅ Pedido con líneas:', pedido.lineas.length)
      
      // Si ya hay líneas, generar el PDF directamente
      this.generarYDescargarPDF(pedido, pedido.lineas)
    }
  }

  /**
   * ✅ MÉTODO PRIVADO PARA GENERAR Y DESCARGAR EL PDF
   */
  private generarYDescargarPDF(pedido: Order, lineas: OrderLine[]): void {
    console.log('🔧 Generando PDF...')
    console.log('📦 Pedido:', pedido)
    console.log('📋 Líneas:', lineas)
    console.log('👤 Usuario:', this.currentUser)

    // Mostrar indicador de carga
    Swal.fire({
      title: 'Generando albarán...',
      text: 'Por favor espere',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      }
    })

    // ✅ USAR EL SERVICIO PDF DEL FRONTEND
    this.pdfService.generarAlbaran(pedido, lineas, this.currentUser)
      .then((pdfBlob: Blob) => {
        console.log('✅ PDF generado correctamente')
        
        // Cerrar indicador de carga
        Swal.close()
        
        // ✅ DESCARGAR EL PDF AUTOMÁTICAMENTE
        const url = window.URL.createObjectURL(pdfBlob)
        const link = document.createElement('a')
        link.href = url
        link.download = `Albaran_${pedido.id}_${new Date().toISOString().split('T')[0]}.pdf`
        
        // Disparar la descarga
        document.body.appendChild(link)
        link.click()
        
        // Limpiar
        document.body.removeChild(link)
        window.URL.revokeObjectURL(url)
        
        console.log('✅ Descarga iniciada')
        
        // Mostrar mensaje de éxito
        Swal.fire({
          icon: 'success',
          title: '¡Tatoodenda!',
          text: 'Albarán descargado correctamente',
          timer: 6000,
          showConfirmButton: false
        })
      })
      .catch((error) => {
        console.error('❌ Error generando PDF:', error)
        
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo generar el albarán. Por favor, inténtelo de nuevo.',
          confirmButtonColor: '#52667a'
        })
      })
  }
}
