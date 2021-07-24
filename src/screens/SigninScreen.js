import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SigninScreen() {
  return (
    <View style={styles.container}>
        <Text>Signin</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});