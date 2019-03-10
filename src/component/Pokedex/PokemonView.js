import React from 'react'
import {View, Text, StyleSheet} from 'react-native';

export const PokemonView = props =>
    <View style={styles.container}>
        <Text>
            Index: {props.indexId}
        </Text>
        <Text>
            Name: {props.pokémon}
        </Text>
        <Text>
            <Text>Type: </Text>{props.renderTypes()}
        </Text>
        <Text>
            <Text>Abilities: </Text>{ props.renderAbilities() }
        </Text>
        { props.renderPokémonImage() }
    </View>;

const styles = StyleSheet.create({
    container: {
        marginTop: '10%',
        marginLeft: '10%'
    }
});
