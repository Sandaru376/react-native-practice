import { Stack } from "expo-router"
import { useColorScheme } from "react-native"
import { Colors } from "../constants/Colors"

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.navBackground,
        },
        headerTintColor: theme.title,
      }}
    >
      {/* HOME */}
      <Stack.Screen
        name="index"
        options={{ title: "Home" }}
      />

      {/* AUTH GROUP */}
      <Stack.Screen
        name="(auth)"
        options={{ headerShown: false }}
      />

      {/* DASHBOARD (TABS GROUP) */}
      <Stack.Screen
        name="(dashboard)"
        options={{ headerShown: false }}
      />
    </Stack>
  )
}