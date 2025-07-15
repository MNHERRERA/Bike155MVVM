export interface Evento {
  id: number;
  nombre: string;
  descripcion: string;
  fecha: string;
  userId: number;
  rutaId: number;
  bike?: string;
}
