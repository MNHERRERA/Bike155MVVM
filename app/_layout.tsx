import { Stack } from 'expo-router';
import React from 'react';
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="/screens/loginScreen" options={{ headerShown: false }} />
      <Stack.Screen name="/screens/RegistrarUsuario" options={{ title: 'Registrar' }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
