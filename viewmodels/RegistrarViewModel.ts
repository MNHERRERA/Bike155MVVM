import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert } from 'react-native';
import { api } from '../services/api';

export default function RegistrarViewModel() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const router = useRouter();

  const registrarUsuario = async () => {
    if (nombre.trim() !== '' && correo.trim() !== '') {
      try {
        const nuevoUsuario = {
          id: 0,
          nombre: nombre.trim(),
          correo: correo.trim(),
        };

        await api.post('/Users', nuevoUsuario);

        Alert.alert('Éxito', 'Usuario registrado correctamente');
        router.replace('./'); // Vuelve al login tras registrar
      } catch (error) {
        console.error(error);
        Alert.alert('Error', 'No se pudo registrar el usuario');
      }
    } else {
      Alert.alert('Error', 'Completa todos los campos');
    }
  };

  return {
    nombre,
    correo,
    setNombre,
    setCorreo,
    registrarUsuario,
  };
}
