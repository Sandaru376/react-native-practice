import React from 'react';
import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';

import ThemedView from '../components/ThemedView';
import ThemeLogo from '../components/ThemeLogo';
import ThemeText from '../components/ThemeText';
import Spacer from '../components/Speacer';

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

      <Link href="/about">
        <ThemeText>
          Go to About
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