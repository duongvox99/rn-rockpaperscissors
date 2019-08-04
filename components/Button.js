import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import upperFirstCharacter from '../external_function/upperFirstCharacter';

const BEGIN_COLOR = 'rgb(100,13,20)';
const END_COLOR = 'rgb(196, 50, 60)';

import Scale from './Scale';
const SCALE = Scale.scale;

const Button = ({ name, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => onPress(name)}
        >
            <LinearGradient
                colors={[BEGIN_COLOR, END_COLOR]}
                style={styles.buttonGradient}>
                <Text style={styles.text}>{upperFirstCharacter(name)}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        // flex: 0.6,
        borderRadius: 10 * SCALE,
        height: 50 * SCALE,
        width: 200 * SCALE,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,

        // backgroundColor: '#640D14',
    },
    buttonGradient: {
        borderRadius: 10 * SCALE,
        height: 50 * SCALE,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 25 * SCALE,
        fontWeight: 'bold',
        color: 'white' 
    },
});

export default Button