// src/app/models/order.ts - Interfaces completas y corregidas
/**
 * Funciones de utilidad para conversión entre formatos
 */
export class OrderUtils {
    /**
     * Convierte Order (frontend) a OrderBackend
     */
    static toBackendFormat(order) {
        return {
            id: order.id,
            iduser: order.usuario_id,
            fecha: order.fecha.split('T')[0], // Asegurar formato YYYY-MM-DD
            total: order.total,
            lineas: order.lineas?.map(line => ({
                id: line.id,
                idpedido: line.idpedido,
                idprod: line.idprod,
                color: line.color,
                cant: line.cantidad, // cantidad -> cant
                nombre: line.nombre,
                precio: line.precio, // ✅ PRESERVAR: Precio unitario
                product: line.product // ✅ PRESERVAR: Objeto producto
            }))
        };
    }
    /**
     * ✅ CORREGIDO: Convierte OrderBackend a Order (frontend)
     * Ahora preserva el precio y el objeto product
     */
    static fromBackendFormat(orderBackend) {
        console.log('📦 Transformando OrderBackend a Order:', orderBackend);
        return {
            id: orderBackend.id,
            usuario_id: orderBackend.iduser,
            fecha: orderBackend.fecha,
            total: orderBackend.total,
            estado: orderBackend.estado || '', // <-- Añade esta línea. Valor por defecto si no existe.
            lineas: orderBackend.lineas?.map(line => {
                const transformedLine = {
                    id: line.id,
                    idpedido: line.idpedido,
                    idprod: line.idprod,
                    color: line.color,
                    cantidad: line.cant,
                    nombre: line.nombre,
                    precio: line.precio || 0,
                    product: line.product
                };
                console.log(`📋 Línea transformada: ${transformedLine.nombre} - Precio: ${transformedLine.precio}`);
                return transformedLine;
            })
        };
    }
    /**
     * Convierte CartItem[] a OrderLine[]
     */
    static cartItemsToOrderLines(cartItems, orderId = 0) {
        return cartItems.map(item => ({
            idpedido: orderId,
            idprod: item.id,
            color: item.color || 'Estándar',
            cantidad: item.cantidad,
            nombre: item.nombre || '',
            precio: item.precio, // ✅ AÑADIDO: Incluir precio del carrito
            product: item.producto // ✅ AÑADIDO: Incluir producto
        }));
    }
    /**
     * Valida que un pedido tenga todos los campos requeridos
     */
    static validateOrder(order) {
        const errors = [];
        if (!order.usuario_id || order.usuario_id <= 0) {
            errors.push('ID de usuario requerido');
        }
        if (!order.total || order.total <= 0) {
            errors.push('Total debe ser mayor a 0');
        }
        if (!order.lineas || order.lineas.length === 0) {
            errors.push('El pedido debe contener al menos un producto');
        }
        if (order.lineas) {
            order.lineas.forEach((line, index) => {
                if (!line.idprod || line.idprod <= 0) {
                    errors.push(`Línea ${index + 1}: ID de producto requerido`);
                }
                if (!line.cantidad || line.cantidad <= 0) {
                    errors.push(`Línea ${index + 1}: Cantidad debe ser mayor a 0`);
                }
                if (!line.color) {
                    errors.push(`Línea ${index + 1}: Color requerido`);
                }
            });
        }
        return {
            valid: errors.length === 0,
            errors
        };
    }
}
//# sourceMappingURL=order.js.map