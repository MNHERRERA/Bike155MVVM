import * as Location from 'expo-location';
import { router } from 'expo-router';
import { useState } from 'react';
import { Alert } from 'react-native';
import { api } from '../services/api';

export function useCrearRutaViewModel() {
  const [descripcion, setDescripcion] = useState('');
  const [tipoBike, setTipoBike] = useState('');
  const [fecha] = useState(new Date().toISOString());
  const [latitud, setLatitud] = useState<number | null>(null);
  const [longitud, setLongitud] = useState<number | null>(null);

  const obtenerUbicacionActual = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permiso denegado', 'Necesitas permitir la ubicación.');
      return;
    }

    const loc = await Location.getCurrentPositionAsync({});
    setLatitud(loc.coords.latitude);
    setLongitud(loc.coords.longitude);
  };

  const crearRuta = async () => {
    if (!descripcion.trim() || !tipoBike.trim() || latitud === null || longitud === null) {
      Alert.alert('Error', 'Completa todos los campos y obtén la ubicación antes de guardar.');
      return;
    }

    try {
      await api.post('/Rutas', {
        id: 0,
        ubicacion: descripcion,
        fecha,
        latitud,
        longitud,
        bike: tipoBike,
        eventos: [],
      });

      Alert.alert('Éxito', 'Ruta creada correctamente.');
      router.replace('/(tabs)/HomeScreen');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No se pudo crear la ruta.');
    }
  };

  return {
    descripcion,
    setDescripcion,
    tipoBike,
    setTipoBike,
    latitud,
    longitud,
    obtenerUbicacionActual,
    crearRuta,
  };
}
