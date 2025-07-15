import React, { useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useCrearRutaViewModel } from '../../viewmodels/CrearRutaViewModel';

export default function CrearRutaScreen() {
  const {
    descripcion,
    setDescripcion,
    tipoBike,
    setTipoBike,
    latitud,
    longitud,
    obtenerUbicacionActual,
    crearRuta,
  } = useCrearRutaViewModel();

  useEffect(() => {
    obtenerUbicacionActual();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bike155 - Crear Ruta</Text>

      <TouchableOpacity style={styles.locationButton} onPress={obtenerUbicacionActual}>
        <Text style={styles.buttonText}>Obtener Ubicación Actual</Text>
      </TouchableOpacity>

      <Text style={styles.text}>Lat: {latitud ?? 'Cargando...'}</Text>
      <Text style={styles.text}>Lng: {longitud ?? 'Cargando...'}</Text>

      <TextInput
        placeholder="Descripción de la Ruta"
        placeholderTextColor="#ccc"
        value={descripcion}
        onChangeText={setDescripcion}
        style={styles.input}
      />

      <TextInput
        placeholder="Tipo de Bicicleta (ej: Montaña)"
        placeholderTextColor="#ccc"
        value={tipoBike}
        onChangeText={setTipoBike}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={crearRuta}>
        <Text style={styles.buttonText}>Guardar Ruta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#002F6C', padding: 20 },
  title: { fontSize: 24, color: '#FFCC00', fontWeight: 'bold', marginBottom: 16 },
  text: { color: '#fff', marginBottom: 8 },
  input: { backgroundColor: '#fff', width: '100%', padding: 12, borderRadius: 8, marginBottom: 16, borderColor: '#FFCC00', borderWidth: 1 },
  button: { backgroundColor: '#DA291C', padding: 12, borderRadius: 8, width: '100%', alignItems: 'center', marginTop: 10 },
  locationButton: { backgroundColor: '#004C99', padding: 12, borderRadius: 8, width: '100%', alignItems: 'center', marginBottom: 16 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
