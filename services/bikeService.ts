import { Bike } from '../models/Bike';
import { api } from './api';

export const getBikes = async (): Promise<Bike[]> => {
  const response = await api.get('/Bikes');
  return response.data as Bike[];
};
