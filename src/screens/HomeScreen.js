import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar'
// components
import Navbar from '../components/Navbar';
import InfoBubble from '../components/InfoBubble';
import { colors } from '../styles';

import HomeSingleContent from '../components/HomeSingleContent';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <StatusBar style="light" />
  
        
        <HomeSingleContent />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorBackground
  },
});