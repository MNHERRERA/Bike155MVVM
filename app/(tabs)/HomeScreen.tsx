import { router } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useHomeViewModel } from '../../viewmodels/HomeViewModel';

export default function HomeScreen() {
  const { rutas, loading } = useHomeViewModel();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bike155 - Home</Text>

      {loading ? (
        <Text style={styles.loadingText}>Cargando rutas...</Text>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {rutas.map((ruta) => (
            <View key={ruta.id} style={styles.item}>
              <Text style={styles.itemText}>Ubicación: {ruta.ubicacion}</Text>
              <Text style={styles.itemText}>Fecha: {new Date(ruta.fecha).toLocaleDateString()}</Text>
            </View>
          ))}
        </ScrollView>
      )}

      <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/CrearRutaScreen')}>
        <Text style={styles.buttonText}>Crear Ruta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/EventosScreen')}>
        <Text style={styles.buttonText}>Ver Eventos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#002F6C', padding: 16, alignItems: 'center' },
  title: { fontSize: 24, color: '#FFCC00', fontWeight: 'bold', marginVertical: 16 },
  loadingText: { color: '#fff' },
  scrollContent: { width: '100%' },
  item: { backgroundColor: '#004C99', padding: 12, marginVertical: 6, borderRadius: 8 },
  itemText: { color: '#fff' },
  button: { backgroundColor: '#DA291C', padding: 12, borderRadius: 8, width: '100%', alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
