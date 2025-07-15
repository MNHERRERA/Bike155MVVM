import { Tabs } from 'expo-router';
import React from 'react';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="HomeScreen" options={{ title: 'Inicio' }} />
      <Tabs.Screen name="CrearRutaScreen" options={{ title: 'Crear Ruta' }} />
      <Tabs.Screen name="EventosScreen" options={{ title: 'Eventos' }} />
      <Tabs.Screen name="CrearEventoScreen" options={{ title: 'Crear Evento' }} />
    </Tabs>
  );
}
