import {Pais} from './pais';
/*
* Modelo del usuario almacenado en el sistema
*/
export interface Usuario {
  id: number;
  nombre: string;
  apellido: string;
  nacionalidad: Pais;
  tipoDocumento: string;
  numeroDocumento: number;
  email: string;
  telefono: number;
  observacion: string;
  fecha: Date;
  estado: string;

}
