import React from 'react'
import {View, Text, Button, TextInput, StyleSheet, Image} from 'react-native';
import {PokemonView} from "./PokemonView";

export const PokedexView = (props) =>
            <View style={styles.container}>
                <Text style={styles.textContainer}>Enter Pokémon name for Pokédex to generate</Text>
                <TextInput placeholder={'Pokémon'}
                           style={styles.textContainer}
                           onChangeText={ (pokémon) => props.updatePokémonEntree(pokémon) } />
                <Button title={'Generate Pokémon'}
                        onPress={() => props.retrievePokémon()} />

                { props.hasPokémon ?
                    <PokemonView indexId={props.indexId}
                                 pokémon={props.pokémon}
                                 renderPokémonImage={props.renderPokémonImage}
                                 renderTypes={props.renderTypes}
                                 renderAbilities={props.renderAbilities}/>
                    :
                    <View style={styles.errorMessage}>
                        { props.showErrorMessage ?
                                <Text>Incorrect Pokémon Name Enter</Text>
                                :
                                <Text/>
                        }
                    </View>
                }
            </View>;

const styles = StyleSheet.create({
    container: {
       marginTop: '5%'
    },
    textContainer: {
        color: 'black',
        marginBottom: '5%',
        fontSize: 15
    },
    inputContainer: {
        marginTop: '40%'
    },
    text: {
        fontSize: 10
    },
    errorMessage: {
        marginTop: '20%',
        marginLeft: '20%'
    }
});
