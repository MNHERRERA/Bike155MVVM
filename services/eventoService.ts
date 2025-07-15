import { Evento } from '../models/Evento';
import { api } from './api';

export const eventoService = {
  getEventos: async (): Promise<Evento[]> => {
    const response = await api.get('/Eventos');
    return response.data;
  },

  createEvento: async (evento: Evento): Promise<void> => {
    await api.post('/Eventos', evento);
  },
};
