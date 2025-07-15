import { Suscripcion } from '../models/Suscripcion';
import { api } from './api';

export const suscripcionService = {
  getSuscripciones: async (): Promise<any[]> => {
    const response = await api.get('/Suscripciones/eventos');
    return response.data;
  },

  createSuscripcion: async (suscripcion: Suscripcion): Promise<void> => {
    await api.post('/Suscripciones', suscripcion);
  },
};
