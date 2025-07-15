import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useLoginViewModel } from '../viewmodels/LoginViewModel';

export default function LoginScreen() {
  const { email, setEmail, login } = useLoginViewModel();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bike155 - Iniciar Sesión</Text>

      <TextInput
        placeholder="Correo"
        placeholderTextColor="#ccc"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkButton} onPress={() => router.push('/RegistrarUsuario')}>
        <Text style={styles.linkText}>¿No tienes cuenta? Regístrate aquí</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#002F6C', padding: 20 },
  title: { fontSize: 24, color: '#FFCC00', fontWeight: 'bold', marginBottom: 20 },
  input: { backgroundColor: '#fff', width: '100%', padding: 12, borderRadius: 8, marginBottom: 16, borderColor: '#FFCC00', borderWidth: 1 },
  button: { backgroundColor: '#DA291C', padding: 12, borderRadius: 8, width: '100%', alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  linkButton: { marginTop: 16 },
  linkText: { color: '#FFCC00', textDecorationLine: 'underline' },
});
