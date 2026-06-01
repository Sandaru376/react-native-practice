import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {  Stack } from 'expo-router'

const RootLayout = () => {
  return (
   <Stack>
        <Stack.Screen name="index" options={{ headerTitle: 'Home' }} />
        <Stack.Screen name="about" options={{ headerTitle: 'About' }} />
   </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({})