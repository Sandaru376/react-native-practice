import React from 'react';
import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';

import ThemedView from '../components/ThemedView';
import ThemeText from '../components/ThemeText';
import Spacer from '../components/Speacer';

const About = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemeText style={styles.title} title>
        About
      </ThemeText>

      <Spacer height={20} />

      <ThemeText>
        This is the about page of the app.
      </ThemeText>

      <Spacer height={30} />

      <Link href="/">
        <ThemeText>
          Go to Home
        </ThemeText>
      </Link>
    </ThemedView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});