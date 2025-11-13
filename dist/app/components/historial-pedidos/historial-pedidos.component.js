import { __decorate } from "tslib";
import { Component } from '@angular/core';
import Swal from 'sweetalert2';
let HistorialPedidosComponent = class HistorialPedidosComponent {
    constructor(orderService, pdfService, authService) {
        this.orderService = orderService;
        this.pdfService = pdfService;
        this.authService = authService;
        this.pedidos = [];
        this.currentUser = null;
    }
    ngOnInit() {
        this.currentUser = this.authService.currentUserValue || null;
        this.loadPedidos();
    }
    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
    loadPedidos() {
        this.subscription = this.orderService.getUserOrders().subscribe({
            next: (orders) => {
                // Ordena del más reciente al más antiguo
                this.pedidos = orders
                    .sort((a, b) => {
                    const dateB = new Date(b.fecha).getTime();
                    const dateA = new Date(a.fecha).getTime();
                    if (dateB !== dateA) {
                        return dateB - dateA;
                    }
                    return (b.id ?? 0) - (a.id ?? 0);
                })
                    .map(p => ({ ...p, expanded: false }));
                console.log('✅ Pedidos cargados:', this.pedidos.length);
            },
            error: err => {
                console.error('❌ Error cargando pedidos:', err);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No se pudieron cargar los pedidos',
                    confirmButtonColor: '#52667a'
                });
            }
        });
    }
    /**
     * ✅ MÉTODO CORREGIDO PARA DESCARGAR ALBARÁN
     * Usa el servicio PDF del frontend (jsPDF) directamente
     */
    descargarAlbaran(pedidoId) {
        console.log('📄 Descargando albarán para pedido:', pedidoId);
        // Buscar el pedido en la lista actual
        const pedido = this.pedidos.find(p => p.id === pedidoId);
        if (!pedido) {
            console.error('❌ Pedido no encontrado:', pedidoId);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Pedido no encontrado',
                confirmButtonColor: '#52667a'
            });
            return;
        }
        if (!this.currentUser) {
            console.error('❌ Usuario no disponible');
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Usuario no disponible',
                confirmButtonColor: '#52667a'
            });
            return;
        }
        // ✅ VERIFICAR SI HAY LÍNEAS EN EL PEDIDO
        if (!pedido.lineas || pedido.lineas.length === 0) {
            console.warn('⚠️ El pedido no tiene líneas, obteniendo del servidor...');
            // Si no hay líneas, obtenerlas del servidor
            this.orderService.getOrderLines(pedido.id ?? 0).subscribe({
                next: (lineas) => {
                    console.log('✅ Líneas obtenidas del servidor:', lineas);
                    // Asignar las líneas al pedido
                    pedido.lineas = lineas;
                    // Generar el PDF con las líneas obtenidas
                    this.generarYDescargarPDF(pedido, lineas);
                },
                error: (err) => {
                    console.error('❌ Error obteniendo líneas del pedido:', err);
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'No se pudieron obtener los detalles del pedido',
                        confirmButtonColor: '#52667a'
                    });
                }
            });
        }
        else {
            console.log('✅ Pedido con líneas:', pedido.lineas.length);
            // Si ya hay líneas, generar el PDF directamente
            this.generarYDescargarPDF(pedido, pedido.lineas);
        }
    }
    /**
     * ✅ MÉTODO PRIVADO PARA GENERAR Y DESCARGAR EL PDF
     */
    generarYDescargarPDF(pedido, lineas) {
        console.log('🔧 Generando PDF...');
        console.log('📦 Pedido:', pedido);
        console.log('📋 Líneas:', lineas);
        console.log('👤 Usuario:', this.currentUser);
        // Mostrar indicador de carga
        Swal.fire({
            title: 'Generando albarán...',
            text: 'Por favor espere',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
        // ✅ USAR EL SERVICIO PDF DEL FRONTEND
        this.pdfService.generarAlbaran(pedido, lineas, this.currentUser)
            .then((pdfBlob) => {
            console.log('✅ PDF generado correctamente');
            // Cerrar indicador de carga
            Swal.close();
            // ✅ DESCARGAR EL PDF AUTOMÁTICAMENTE
            const url = window.URL.createObjectURL(pdfBlob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `Albaran_${pedido.id}_${new Date().toISOString().split('T')[0]}.pdf`;
            // Disparar la descarga
            document.body.appendChild(link);
            link.click();
            // Limpiar
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
            console.log('✅ Descarga iniciada');
            // Mostrar mensaje de éxito
            Swal.fire({
                icon: 'success',
                title: '¡Tatoodenda!',
                text: 'Albarán descargado correctamente',
                timer: 6000,
                showConfirmButton: false
            });
        })
            .catch((error) => {
            console.error('❌ Error generando PDF:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo generar el albarán. Por favor, inténtelo de nuevo.',
                confirmButtonColor: '#52667a'
            });
        });
    }
};
HistorialPedidosComponent = __decorate([
    Component({
        selector: 'app-historial-pedidos',
        templateUrl: './historial-pedidos.component.html',
        styleUrls: ['./historial-pedidos.component.scss'],
        standalone: false
    })
], HistorialPedidosComponent);
export { HistorialPedidosComponent };
//# sourceMappingURL=historial-pedidos.component.js.map