import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const YuGiOhHeaderView = (props) =>
    <View style={styles.headerContainer}>
        <Text style={styles.header}>Yu-Gi-Oh API</Text>
    </View>;

const styles = StyleSheet.create({
    headerContainer:    {
        width: '100%',
        height: '20%',
        backgroundColor: '#C69A34'
    },
    header: {
        color: 'white',
        fontSize: 35,
        marginTop: 55,
        textAlign: 'center'
    }
});
