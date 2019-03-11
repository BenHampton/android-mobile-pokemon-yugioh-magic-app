import React from "react";
import {StyleSheet, Text, View} from "react-native";

export const PokémonView = props =>
    <View style={styles.container}>
        <Text>
            <Text style={styles.textBold}>
                Abilities:
            </Text>
            { props.renderAbilities() }
        </Text>
        <View style={styles.imageContainer}>
            { props.renderImage('pokemon') }
        </View>
    </View>;

const styles = StyleSheet.create({
    container: {
        height: 350,
    },
    imageContainer: {
        marginLeft: 30
    },
    textBold: {
        fontWeight: 'bold'
    }
});
