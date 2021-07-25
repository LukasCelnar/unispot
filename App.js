import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// screens
import SigninScreen from './src/screens/SigninScreen';
import AddPartyScreen from './src/screens/AddPartyScreen';

export default function App() {
  return (
    <AddPartyScreen />
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
