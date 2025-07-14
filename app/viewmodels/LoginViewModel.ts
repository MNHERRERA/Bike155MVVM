import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert } from 'react-native';

import { Usuario } from '../models/Usuario';
import { userService } from '../services/userService';



export function LoginViewModel() {
  const [user, setUserInput] = useState('');
  const router = useRouter();
 

  const iniciarSesion = async () => {
    const nombreIngresado = user.trim().toLowerCase();

    if (!nombreIngresado) {
      Alert.alert('Campo vacío', 'Ingrese su nombre de usuario');
      return;
    }

    try {
      const usuarios = await userService.getUsers();
      const existe = usuarios.some(
        (u: Usuario) => u.nombre.trim().toLowerCase() === nombreIngresado
      );

      if (existe) {
        
        router.replace('./screens/HomeScreen'); // Redirige al HomeScreen
      } else {
        Alert.alert('Error', 'Usuario no encontrado');
      }
    } catch (error: any) {
      console.error('Error al conectar con el servidor:', error?.message);
      Alert.alert('Error', 'No se pudo conectar con el servidor');
    }
  };

  return {
    username:user,
    setUsername:setUserInput,
    iniciarSesion,
  };
}
