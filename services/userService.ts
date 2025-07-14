// app/services/userService.ts
import { Usuario } from '../models/Usuario';
import { api } from './api';

export const userService = {
  getUsers: async (): Promise<Usuario[]> => {
    const response = await api.get('/Users');
    return response.data as Usuario[];
  },

  createUser: async (usuario: Usuario): Promise<void> => {
    await api.post('/Users', usuario);
  },
};
