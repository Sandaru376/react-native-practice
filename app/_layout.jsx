import React from 'react';
import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.navBackground,
        },
        headerTintColor: theme.title,
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerTitle: 'Home' }}
      />

      <Stack.Screen
        name="about"
        options={{ headerTitle: 'About' }}
      />
    </Stack>
  );
};

export default RootLayout;