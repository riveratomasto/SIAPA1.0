import { BaseModel } from '../../../_metronic/shared/crud-table';


export interface Futemit extends BaseModel {
    id_fut: number;
    nro_fut: string;
    nom: string;
    pat: string;
    mat: string;
    email: string;
    cel: string;
    tel: string;
    direccion: string;
    dt_fut: string;
    url_adjuntos: string;
    num_folios: string;
    fecha_reg: Date;
    estado: number;
    num_doc: string;
    tipo_doc: string;
    titulo_fut: string;
    prioridad: string;
    id_est_mov: number;
  }
  



//   import { BaseModel } from '../../../_metronic/shared/crud-table';

// export interface Customer extends BaseModel {
//   id: number;
//   firstName: string;
//   lastName: string;
//   email: string;
//   userName: string;
//   gender: string;
//   status: number; // Active = 1 | Suspended = 2 | Pending = 3
//   dateOfBbirth: string;
//   dob: Date;
//   ipAddress: string;
//   type: number; // 1 = Business | 2 = Individual
// }
