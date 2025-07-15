import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert } from 'react-native';
import { api } from '../services/api';

export function useRegisterUserViewModel() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const registerUser = async () => {
    if (!nombre.trim() || !correo.trim()) {
      Alert.alert('Error', 'Completa todos los campos.');
      return;
    }

    setIsLoading(true);
    try {
      await api.post('/Users', { nombre, correo });
      Alert.alert('Éxito', 'Usuario registrado correctamente.');
      router.replace('/loginScreen');
    } catch (error:any) {
        console.error('Error al registrar usuario:', error);
        if(error.reponse){
            console.error('Respuesta del servidor:', error.response.data);
            Alert.alert('Error',error.response.data?.message||'No se pudo registrar el usuario.');
            console.error(error);

        }else{
        Alert.alert('Error', 'No se pudo registrar el usuario.');
        } 
    }finally {
      setIsLoading(false);
    }
  };

  return { nombre, setNombre, correo, setCorreo, registerUser, isLoading };
}