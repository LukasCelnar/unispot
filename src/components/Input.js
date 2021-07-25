import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { colors } from '../styles';


export default function Input({ placeholder, numberOfLines, scale }) {
  return (
    <TextInput
      style={scale === 'big' ? styles.inputBig : styles.inputSmall}
      placeholder={placeholder}
      multiline = {true}
      numberOfLines = {numberOfLines}
      placeholderTextColor={colors.colorPrimary}
      autoCapitalize='none'
      autoCorrect={false}
      textAlignVertical={ numberOfLines > 1 ? 'top' : 'center'}
    />
  );
}

const styles = StyleSheet.create({
  inputBig: {
    width: '90%',
    borderColor: colors.colorPrimary,
    margin: 10,
    fontSize: 25,
    color: colors.colorPrimary,
    padding: 5,
    borderBottomWidth: 2,
  },
  inputSmall: {
    width: '60%',
    borderColor: colors.colorPrimary,
    margin: 10,
    fontSize: 15,
    color: colors.colorPrimary,
    padding: 5,
    borderBottomWidth: 2,
  },
});