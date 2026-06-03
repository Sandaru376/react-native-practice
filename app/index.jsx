import React from 'react';
import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';

import login from './(auth)/login';
import register from './(auth)/register';


import ThemedView from '../components/ThemedView';
import ThemeLogo from '../components/ThemeLogo';
import ThemeText from '../components/ThemeText';
import Spacer from '../components/Spacer';

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemeLogo
        style={{
          width: 150,
          height: 150,
        }}
      />



      <ThemeText style={styles.text} title>
        Home
      </ThemeText>

      <Spacer height={20} />

      <ThemeText>
        This is the home page.
      </ThemeText>

      <Spacer />

      <Link href="/login">
        <ThemeText>
          Go to Login
        </ThemeText>
      </Link>

      
      <Link href="/register">
        <ThemeText>
          Go to Register
        </ThemeText>
      </Link>

          <Link href="/profile">
        <ThemeText>
          Go to Register
        </ThemeText>
      </Link>

    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});