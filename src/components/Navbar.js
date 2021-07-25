import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList } from 'react-native';
import { colors } from '../styles';
import { AntDesign } from '@expo/vector-icons';

export default function Navbar() {
    const [searchBarValue, setSearchBarValue] = useState('Hello')


    // remove me later
    const keyWordList = [
        'party',
        'drink',
        '18+',
        'cake',
        'food',
        'chips',
        'outdoor',
        'free',
        'highschool'
    ];

    const renderKeyWordButtons = () => {

        <FlatList
            data={keyWordList}
            renderItem={({item}) => {
                <Text style={styles.keyWord}>
                    {item}
                </Text>
            }}
            keyExtractor={item => item}
        />

        return keyWordList.map((keyWord, i) => {
            return (
                <Text key={i} style={styles.keyWord}>
                    {keyWord}
                </Text>
            );
        });
    };
    
    return (
        <View style={styles.container}>
            <View style={styles.innerContainerTop}>
                <TextInput 
                    style={styles.searchBar}
                    value={searchBarValue} 
                    onChangeText={setSearchBarValue}
                />
                <AntDesign 
                    style={styles.profileIcon} 
                    name="user" 
                    size={27} 
                    color={colors.colorPrimary} 
                />
            </View>
            <ScrollView 
                style={styles.innerContainerBotttom}
                horizontal
            >
                {renderKeyWordButtons()}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
    },
    innerContainerTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    innerContainerBotttom: {
        flexDirection: 'row',
        paddingLeft: 10,
        marginTop: 10,
        marginBottom: 10
    },
    searchBar: {
        borderColor: colors.colorPrimary,
        borderWidth: 1,
        color: colors.colorPrimary,
        width: '80%',
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 12,
        fontSize: 16
    },
    profileIcon: {
        borderRadius: 10000,
        borderColor: colors.colorPrimary,
        borderWidth: 1,
        padding: 5,
        marginLeft: 10
    },
    keyWord: {
        marginHorizontal: 10,
        color: colors.colorPrimary,
        fontSize: 16
    }
});