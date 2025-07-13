import { Evento } from '../models/Evento';
import { api } from './api';

export const getEventos = async (): Promise<Evento[]> => {
  const response = await api.get('/Eventos');
  return response.data as Evento[];
};

export const createEvento = async (evento: Evento): Promise<void> => {
  await api.post('/Eventos', evento);
};
