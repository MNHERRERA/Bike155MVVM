import { router } from 'expo-router';
import { useState } from 'react';
import { Alert } from 'react-native';
import { api } from '../services/api';

export function useCrearEventoViewModel() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [rutaId, setRutaId] = useState(0); // ID de la ruta a la que pertenece
  const [fecha] = useState(new Date().toISOString());

  const crearEvento = async () => {
    if (!nombre.trim() || !descripcion.trim() || !rutaId) {
      Alert.alert('Error', 'Completa todos los campos.');
      return;
    }

    try {
      await api.post('/Eventos', {
        nombre,
        descripcion,
        rutaId,
        userId: 0,
        fecha,
        bike: '',
      });

      Alert.alert('Éxito', 'Evento creado.');
      router.replace('/(tabs)/EventosScreen');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No se pudo crear el evento.');
    }
  };

  return { nombre, setNombre, descripcion, setDescripcion, rutaId, setRutaId, crearEvento };
}
