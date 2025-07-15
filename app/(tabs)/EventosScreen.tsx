import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function EventosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bike155 - Eventos</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('../CrearEventoScreen')}>
        <Text style={styles.buttonText}>Crear Evento</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#002F6C', padding: 20 },
  title: { fontSize: 24, color: '#FFCC00', fontWeight: 'bold', marginBottom: 20 },
  button: { backgroundColor: '#DA291C', padding: 12, borderRadius: 8, width: '100%', alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
