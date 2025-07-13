import { Ruta } from '../models/Ruta';
import { api } from './api';

export const getRutas = async (): Promise<Ruta[]> => {
  const response = await api.get('/Rutas');
  return response.data as Ruta[];
};

export const crearRuta = async (ruta: Ruta): Promise<void> => {
  await api.post('/Rutas', ruta);
};
