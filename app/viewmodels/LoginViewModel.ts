import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert } from 'react-native';

import { useUser } from '../../context/UserContext';
import { Usuario } from '../models/Usuario';
import { userService } from '../services/userService';

export function LoginViewModel() {
  const [userInput, setUserInput] = useState('');
  const router = useRouter();
  const { setUser } = useUser();

  const iniciarSesion = async () => {
    const nombreIngresado = userInput.trim().toLowerCase();

    if (!nombreIngresado) {
      Alert.alert('Campo vacío', 'Ingrese su nombre de usuario');
      return;
    }

    try {
      const usuarios = await userService.getUsers();
      const usuarioEncontrado = usuarios.find(
        (u: Usuario) => u.nombre.trim().toLowerCase() === nombreIngresado
      );

      if (usuarioEncontrado) {
        setUser(usuarioEncontrado.nombre); // o setUser(usuarioEncontrado)
        router.replace('./HomeScreen');
      } else {
        Alert.alert('Error', 'Usuario no encontrado');
      }
    } catch (error: any) {
      console.error('Error al conectar con el servidor:', error?.message);
      Alert.alert('Error', 'No se pudo conectar con el servidor');
    }
  };

  return {
    username: userInput,
    setUsername: setUserInput,
    iniciarSesion,
  };
}
