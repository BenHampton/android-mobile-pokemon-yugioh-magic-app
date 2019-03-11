import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const YuGiOhView = props =>
        <View style={styles.container}>
            <Text>
                <Text style={styles.textBold}>Race:</Text> {props.monsterRace}
            </Text>
            <Text style={styles.descriptionContainer}>
                <Text style={styles.textBold}>Description:</Text> {props.description}
            </Text>
            <View style={styles.imageContainer}>
                { props.renderImage('yuGiOh') }
            </View>
        </View>;

const styles = StyleSheet.create({
    container: {
        marginTop: -5,
        height: 600,
    },
    imageContainer: {
        height: 400,
        width: 250,
        marginTop: '10%',
        marginLeft: 25
    },
    descriptionContainer: {
        width: 325
    },
    textBold: {
        fontWeight: 'bold'
    }
});
