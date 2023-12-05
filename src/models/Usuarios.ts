export interface Usuarios {
  id: number;
  username: string;
  contrasenia: string;
  nombres: string;
  apellidos: string;
  tipo_usuario: 'docente' | 'estudiante';
}
