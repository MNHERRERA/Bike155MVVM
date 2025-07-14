import { router } from 'expo-router';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
// Update the import path and extension if needed
import { loginStyles as styles } from '../styles/loginStyles';
import { RegistrarViewModel } from '../viewmodels/RegistrarViewModel';

export default function RegistrarUsuario() {
  const { nombre, setNombre, correo, setCorreo, registrarUsuario } = RegistrarViewModel();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Usuario</Text>

      <TextInput
        placeholder="Nombre"
        placeholderTextColor="#ccc"
        value={nombre}
        onChangeText={setNombre}
        style={styles.input}
        autoCapitalize="words"
      />

      <TextInput
        placeholder="Correo Electrónico"
        placeholderTextColor="#ccc"
        value={correo}
        onChangeText={setCorreo}
        style={styles.input}
        keyboardType="email-address"
      />

      <TouchableOpacity style={styles.button} onPress={registrarUsuario}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => router.push('/login')}
      >
        <Text style={styles.buttonText}>Volver a Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}