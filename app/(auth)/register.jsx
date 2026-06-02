import { StyleSheet } from 'react-native';
import React from 'react';

import ThemedView from '../../components/ThemedView';
import ThemeText from '../../components/ThemeText';
import Spacer from '../../components/Spacer';
import { Link } from 'expo-router';

const Register = () => {
  return (
    <ThemedView style={styles.container}>

      <Spacer height={20} />

      <ThemeText title={true} style={styles.title}>
        Register your account
      </ThemeText>

      <Spacer height={100} />

      <Link href="/login">
        <ThemeText style={{ textAlign: 'center' }}>
          Already have an account? Login
        </ThemeText>
      </Link>

    </ThemedView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});