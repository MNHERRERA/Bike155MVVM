import { Tabs } from 'expo-router';
import React from 'react';
export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="HomeScreen" options={{ title: 'Inicio' }} />
      <Tabs.Screen name="CrearRutasScren" options={{ title: 'Crear Ruta' }} />
      <Tabs.Screen name="EventosScreen" options={{ title: 'Eventos' }} />
    </Tabs>
  );
}
