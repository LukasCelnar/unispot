import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// screens
import SigninScreen from './src/screens/SigninScreen';

export default function App() {
  return (
    <SigninScreen />
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
