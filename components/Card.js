import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

// SCALE: ratio to zoom in or zoom out elements in all devices
import Scale from './Scale';
const SCALE = Scale.scale;

import upperFirstCharacter from '../external_function/upperFirstCharacter';

const Card = ({ typePlayer, choice: { uri, name } }) => {
    return (
        <View style={styles.choiceContainer}>
            <Text style={styles.choiceDescription}>{typePlayer}</Text>
            <Image source={{ uri }} resizeMode="contain" style={styles.choiceImage} />
            <Text style={styles.choiceCardTitle}>{upperFirstCharacter(name)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    choiceContainer: {
        flex: 1,
        alignItems: 'center',
    },
    choiceDescription: {
        fontSize: 25 * SCALE,
        color: '#250902',
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    choiceCardTitle: {
        fontSize: 30 * SCALE,
        color: '#250902'
    },
    choiceImage: {
        width: 150 * SCALE,
        height: 150 * SCALE,
        padding: 10 * SCALE,
    }
});

export default Card
