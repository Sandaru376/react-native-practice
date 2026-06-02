import { View, useColorScheme } from 'react-native'
import React from 'react'

import {Colors} from '../constants/Colors'

const ThemeCard = ({style, ...props}) => {
     const colorScheme = useColorScheme()
        const theme= Colors[colorScheme] ?? Colors.light
  return (
    <View style={[{ backgroundColor: theme.background }, style]} {...props}>
      <Text style={[{ color: theme.text }, props.style]}>ThemeCard</Text>
    </View>
  )
}

export default ThemeCard