import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Ruta } from '../models/Ruta';
import { api } from '../services/api';

export function useHomeViewModel() {
  const [rutas, setRutas] = useState<Ruta[]>([]);
  const [loading, setLoading] = useState(false);

  const cargarRutas = async () => {
    try {
      setLoading(true);
      const response = await api.get<Ruta[]>('/Rutas');
      setRutas(response.data);
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No se pudieron cargar las rutas.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarRutas();
  }, []);

  return { rutas, loading, cargarRutas };
}
