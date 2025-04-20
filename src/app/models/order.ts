export interface Order {
  id?: number;
  iduser: number;
  fecha: string;
  total: number;
  lineas?: OrderLine[];
}

export interface OrderLine {
  id?: number;
  idpedido: number;
  idprod: number;
  color: string;
  cant: number;
  nombre?: string; // Nombre del producto (para mostrar)
}

export interface CartItem {
  id: number;
  nombre: string;
  precio: number;
  color: string;
  cantidad: number;
  imagen: string;
}