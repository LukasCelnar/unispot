import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar'
// components
import Navbar from '../components/Navbar';
import InfoBubble from '../components/InfoBubble';
import { colors } from '../styles';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <StatusBar style="light" />

        <ImageBackground 
            source={require('../assets/party.jpg')}
            style={styles.image}
        >
            <Navbar />

        </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorBackground
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height + 100,
    }
});