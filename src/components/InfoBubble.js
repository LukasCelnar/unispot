import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import MapView from 'react-native-maps';
import { colors } from '../styles';

// <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>

export default function InfoBubble() {

    const attendentList = [
        { name: 'Matous' },
        { name: 'Lukas' },
        { name: 'Thomas' }
    ];
    
    const renderAttendents = () => {
        return attendentList.map((attendent, i) => {
            return (
                <View key={i} style={styles.attendent}>
                    <AntDesign name="user" size={24} color={colors.colorPrimary} />
                    <Text style={styles.attendentName}>{attendent.name}</Text>
                </View>
            );
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.heading}>Halloween costume party</Text>
                <View style={styles.attendents}>
                    {renderAttendents()}
                </View>
                <Text style={styles.others}>And 6 others</Text>
                <Text style={styles.time}>17:00 út</Text>
            </View>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 'auto',
    marginBottom: 100,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  map: {
    width: '30%',
    height: 200,
    position: 'relative',
  },
  contentContainer: {
    backgroundColor: colors.colorBackground,
    height: 200,
    paddingLeft: 5,
    width: '60%',
    padding: 5,
  },
  attendents: {
    marginTop: 5 
  },
  others: {
    color: colors.colorPrimary
  },
  attendent: {
    flexDirection: 'row',
  },
  attendentName: {
    color: colors.colorPrimary
  },
  heading: {
    color: colors.colorPrimary,
    fontSize: 25,
    paddingRight: 20,
  },
  time: {
    color: colors.colorPrimary,
    fontSize: 20,
    marginTop: 5 
  }
});