import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// screens
import SigninScreen from './src/screens/SigninScreen';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <HomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});