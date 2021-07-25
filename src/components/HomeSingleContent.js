
import React from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground } from 'react-native';

import Navbar from './Navbar';
import InfoBubble from './InfoBubble';

export default function HomeSingleContent() {
  return (
    <View style={styles.container}>
        <ImageBackground 
            source={require('../assets/party.jpg')}
            style={styles.image}
        >
            <Navbar />


            <InfoBubble style={styles.infoBubble} />
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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