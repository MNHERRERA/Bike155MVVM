import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert } from 'react-native';
import { api } from '../services/api';

export function useLoginViewModel() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const login = async () => {
    if (!email.trim()) {
      Alert.alert('Error', 'Ingresa tu correo para iniciar sesión.');
      return;
    }

    setIsLoading(true);
    try {
      const res = await api.get('/Users');
      const user = res.data.find((u: any) => u.correo.toLowerCase() === email.toLowerCase());

      if (user) {
        Alert.alert('Bienvenido', `¡Hola ${user.nombre}!`);
        router.replace('/(tabs)/HomeScreen');
      } else {
        Alert.alert('Error', 'Usuario no encontrado.');
      }
    } catch (error) {
      Alert.alert('Error', 'No se pudo iniciar sesión.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { email, setEmail, login, isLoading };
}