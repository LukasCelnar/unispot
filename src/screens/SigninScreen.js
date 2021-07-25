import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { colors } from '../styles';

export default function SigninScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.header}>Sign in</Text>
        <View style={styles.iconBox}>
          <AntDesign style={styles.icon} name="user" size={24} color="black" />
        </View>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} >
            Sign in
          </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorBackground,
    alignItems: 'center',
  },
  header: {
    color: colors.colorPrimary,
    fontSize: 40,
    textAlign: 'center',
    marginTop: 200,
    textTransform: 'uppercase',
  },
  icon: {
    color: colors.colorPrimary,
    width: 150,
    height: 150,
    fontSize: 120,
    marginTop: 20,
    textAlign: 'center',
    borderRadius: 1000,
    borderColor: colors.colorPrimary,
    borderWidth: 5,
    padding: 10,
  },
  iconBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    borderWidth: 2,
    borderColor: colors.colorPrimary,
    width: 200,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 20,
    color: colors.colorPrimary,
    textTransform: 'uppercase',
    textAlign: 'center',
  }
});