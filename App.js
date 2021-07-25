import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// screens
import SigninScreen from './src/screens/SigninScreen';
// components
import Navbar from './src/components/Navbar';
import InfoBubble from './src/components/InfoBubble';

export default function App() {
  return (
    <InfoBubble />
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