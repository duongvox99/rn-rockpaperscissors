import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Scale from './Scale';
const SCALE = Scale.scale;

const Status = ({ result }) => {
    return (
        <View style={styles.status}>
            <Text style={getResultColor(result)}>{result}</Text>
        </View>
    )
}

const getResultColor = (result) => {
    if (result === 'Victory!') return styles.textWin;
    if (result === 'Defeat!') return styles.textLose;
    return styles.textTie;
  };

const styles = StyleSheet.create({
    status: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textWin: {
        fontSize: 30 * SCALE,
        fontWeight: '700',
        color: 'green' 
    },
    textLose: {
        fontSize: 30 * SCALE,
        fontWeight: '700',
        color: 'red' 
    },
    textTie: {
        fontSize: 30 * SCALE,
        fontWeight: '700',
        color: 'blue' 
    },
});

export default Status