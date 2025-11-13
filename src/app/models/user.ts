// src/app/models/user.ts - MODELO USER UNIFICADO

/**
 * Interfaz del modelo User
 * Define la estructura de un usuario en el sistema
 */
export interface User {
  id: number;
  username: string;
  nombre: string;
  email: string;
  password?: string;      // Opcional (no se envía desde el backend)
  direccion: string;
  ciudad: string;
  cp: string;
  role?: string;          // Opcional (por defecto 'user')
  token?: string;         // ✅ Opcional: Token JWT (solo en respuestas de login)
  createdAt?: Date;
  updatedAt?: Date;
  
  // ✅ Campos para recuperación de contraseña
  resetToken?: string | null;
  resetTokenExpiry?: Date | null;
}