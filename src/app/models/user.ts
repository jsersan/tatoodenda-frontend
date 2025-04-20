export interface User {
  token: any;
  id?: number;
  username: string;
  nombre: string;
  email: string;
  password?: string;
  direccion: string;
  ciudad: string;
  cp: string;
}