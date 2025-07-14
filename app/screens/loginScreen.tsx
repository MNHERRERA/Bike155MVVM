import { router } from 'expo-router';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
// Update the import path and extension if needed
import { loginStyles as styles } from '../styles/loginStyles';
 
import { LoginViewModel } from '../viewmodels/LoginViewModel';


export default function LoginScreen() {
  const { username, setUsername, iniciarSesion } = LoginViewModel();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>

      <TextInput
        placeholder="Usuario"
        placeholderTextColor="#ccc"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.button} onPress={iniciarSesion}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => router.push('/registrar')}
      >
        <Text style={styles.buttonText}>Registrar Usuario</Text>
      </TouchableOpacity>
    </View>
  );
}


  
