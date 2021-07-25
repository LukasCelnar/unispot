import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import Input from '../components/Input';

import { colors } from '../styles';

const parametrs = ['alcohol', 'music', 'lights', 'food'];

export default function AddPartyScreen() {
    const [images, setImages] = useState([]);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [time, setTime] = useState('select time');
    const [date, setDate] = useState('select date');

    const pickImage = async () => {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                quality: 1,
              });
          
              console.log(result);
          
              if (!result.cancelled) {
                setImages([...images, result.uri]);
              }
      };

    const renderImages = () => {
        return images.map((image, i) => {
            return <Image style={styles.image} source={{ uri: image }} key={i} />
        })
    }

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
    
    const handleDate = (date) => {
        const day = date.getDate();
        const month = date.getMonth();
        const theTime = `${day}.${month}.`;
        
        setDate(theTime);
        hideDatePicker();
    };

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };
    
    const handleTime = (time) => {
        const hours = time.getHours();
        const minutes = time.getMinutes();
        let theTime = ``;
        if (minutes < 10) {
            theTime = `${hours}:0${minutes}`;
        } else {
            theTime = `${hours}:${minutes}`;
        }
        setTime(theTime);
        hideTimePicker();
    };

    

    return (
      <View style={styles.container}>
            <Input placeholder={'Name'} numberOfLines={1} scale={'big'} />
            <Input placeholder={'Description'} numberOfLines={1} scale={'small'} />
            <View style={styles.imageBox}>
            {renderImages()}
            <TouchableOpacity style={ images.length >= 3 ? {display: 'none'} : styles.button} title="Upload Image" onPress={pickImage}>
                <Text style={styles.buttonText}>
                    +
                </Text>  
            </TouchableOpacity>
            </View>

            <View style={styles.box}>
                <TouchableOpacity style={styles.time} title="Upload Image" onPress={showTimePicker}>
                    <Text style={styles.timeText} >
                        {time}
                    </Text>
                    <DateTimePickerModal
                      isVisible={isTimePickerVisible}
                      mode="time"
                      onConfirm={handleTime}
                      onCancel={hideTimePicker}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.date}  title="Upload Image" onPress={showDatePicker}>
                    <Text style={styles.dateText}>
                        {date}
                    </Text>
                    <DateTimePickerModal
                      isVisible={isDatePickerVisible}
                      mode="date"
                      onConfirm={handleDate}
                      onCancel={hideDatePicker}
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.createButton}>
                <Text style={styles.createButtonText}>
                    Create
                </Text>
            </TouchableOpacity>
      </View>
    );
}

// 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.colorBackground,
        paddingTop: 50,
        paddingLeft: 25,
        paddingRight: 25,
    },
    imageBox: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 80,
    },
    image: {
        margin: 10,
        height: 100,
        width: 100,
        borderRadius: 10,
    },
    button: {
        margin: 10,
        height: 100,
        width: 100,
        backgroundColor: colors.colorPrimary,
        color: colors.colorBackground,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText : {
        fontSize: 20,
        textTransform: 'uppercase',
    },
    createButton: {
        height: 55,
        width: '90%',
        borderRadius: 20,
        marginTop: 300,
        alignSelf: 'center',
        backgroundColor: colors.colorPrimary,
        justifyContent: 'center',
    },
    createButtonText: {
        fontSize: 30,
        textAlign: 'center',
        color: '#000',
    },
    alert: {
        color: colors.colorPrimary,
        fontSize: 20,
    },
    box: {
        marginTop: 20,
        width: '90%',
        borderRadius: 10,
        flexDirection: 'row',
    },
    time: {
        height: 35,
        width: '32%',
        backgroundColor: colors.colorGreyOne,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    timeText: { 
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    date: {
        width: '78%',
        height: 35,
        backgroundColor: colors.colorPrimary,
        justifyContent: 'center',
        paddingLeft: 15,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
});