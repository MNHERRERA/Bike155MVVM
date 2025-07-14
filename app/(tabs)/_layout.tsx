import { Tabs } from 'expo-router';
import React from 'react';
export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ title: 'Inicio' }} />
      <Tabs.Screen name="crear" options={{ title: 'Crear Ruta' }} />
      <Tabs.Screen name="eventos" options={{ title: 'Eventos' }} />
    </Tabs>
  );
}
