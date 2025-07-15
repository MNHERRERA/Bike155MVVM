import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CrearEventoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bike155 - Crear Evento</Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#002F6C' 
  },
  title: { 
    fontSize: 24, 
    color: '#FFCC00', 
    fontWeight: 'bold' 
  },
});
