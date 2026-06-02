import { StyleSheet,Pressable,Text } from 'react-native';
import React from 'react';

import ThemedView from '../../components/ThemedView';
import ThemeText from '../../components/ThemeText';
import Spacer from '../../components/Spacer';
import { Link } from 'expo-router';

const Login = () => {
  return (
    <ThemedView style={styles.container}>

      <Spacer height={20} />

      <ThemeText title={true} style={styles.title}>
        Login to your account
      </ThemeText>

      <Pressable 
      onPress={() => {
        console.log('Login button pressed');
      }}
      style={({pressed})=>[
        styles.button,
        pressed && styles.pressed
      ]}>
        <Text style={{color:'#f2f2f2'}}>  Login  </Text>
        
      </Pressable>

      <Spacer height={100} />

      <Link href="/register">
        <ThemeText style={{ textAlign: 'center' }}>
          Don't have an account? Register
        </ThemeText>
      </Link>

    </ThemedView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button:{
  backgroundColor:'#007AFF',
  padding:15,
  borderRadius:8,
},
  pressed:{ 
    opacity:0.8}
});