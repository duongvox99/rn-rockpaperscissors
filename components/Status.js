import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Scale from './Scale';
const SCALE = Scale.scale;

const Status = ({ result }) => {
    return (
        <View style={styles.status}>
            <Text style={styles.text}>{result}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    status: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 30 * SCALE,
        fontWeight: '700',
        color: 'red' 
    },
});

export default Status