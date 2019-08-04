import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import calPercent from '../external_function/calPercent';

import Scale from './Scale';
const SCALE = Scale.scale;

const History = ({ total, win, lose, tie }) => {
    return (
        <View style={styles.history}>
            <View style={styles.totalWrapper}>
                <Text style={styles.totalText}>Total: {total}</Text>
            </View>
            <View style={styles.win_lose_tie_Wrapper}>
                <View style={styles.subWrapper}>
                    <Text style={styles.text}>Win: {win}</Text>
                    <Text style={styles.text}>{calPercent(win, total, 1)} %</Text>
                </View>
                <View style={styles.subWrapper}>
                    <Text style={styles.text}>Lose: {lose}</Text>
                    <Text style={styles.text}>{calPercent(lose, total, 1)} %</Text>
                </View>
                <View style={styles.subWrapper}>
                    <Text style={styles.text}>Tie: {tie}</Text>
                    <Text style={styles.text}>{calPercent(tie, total, 1)} %</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    history: {
        flex: 1,
    },
    totalWrapper: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    win_lose_tie_Wrapper: {
        flex: 0.7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    totalText: {
        fontSize: 25 * SCALE,
        fontWeight: '500',
    },
    subWrapper: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20 * SCALE,
        fontWeight: '400',
    },
});

export default History