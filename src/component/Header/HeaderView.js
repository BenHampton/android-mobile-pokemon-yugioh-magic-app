import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const HeaderView = (props) =>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>PokéAPI</Text>
            </View>;

const styles = StyleSheet.create({
    headerContainer:    {
        width: '100%',
        height: '20%',
        backgroundColor: '#ef5350'
    },
    header: {
        color: 'white',
        fontSize: 35,
        marginTop: 55,
        textAlign: 'center'
    }
});
