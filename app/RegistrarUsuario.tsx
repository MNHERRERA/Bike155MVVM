import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useRegisterUserViewModel } from '../viewmodels/RegistrarViewModel';

export default function RegistrarUsuario() {
  const { nombre, setNombre, correo, setCorreo, registerUser } = useRegisterUserViewModel();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bike155 - Registrar Usuario</Text>

      <TextInput
        placeholder="Nombre"
        placeholderTextColor="#ccc"
        value={nombre}
        onChangeText={setNombre}
        style={styles.input}
      />

      <TextInput
        placeholder="Correo"
        placeholderTextColor="#ccc"
        value={correo}
        onChangeText={setCorreo}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={registerUser}>
        <Text style={styles.buttonText}>Registrar</Text>
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
});
