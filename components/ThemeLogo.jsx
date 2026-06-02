import React from 'react';
import { Image, useColorScheme } from 'react-native';

import DarkLogo from '../assets/darkbackground.png';
import LightLogo from '../assets/i.png';

const ThemeLogo = (props) => {
  const colorScheme = useColorScheme();

  const logoSource =
    colorScheme === 'dark'
      ? DarkLogo
      : LightLogo;

  return (
    <Image
      source={logoSource}
      {...props}
    />
  );
};

export default ThemeLogo;