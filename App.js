import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// screens
import SigninScreen from './src/screens/SigninScreen';
// components
import Navbar from './src/components/Navbar';

export default function App() {
  return (
    <Navbar />
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