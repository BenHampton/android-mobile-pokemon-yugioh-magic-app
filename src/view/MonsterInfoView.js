import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {YuGiOhView} from "./YuGiOhView";
import {PokémonView} from "./PokémonView";

export const MonsterInfoView = props =>
    <View style={styles.container}>
        <Text>
            <Text style={styles.textBold}>Index:</Text> {props.id}
        </Text>
        <Text>
            <Text style={styles.textBold}>Name:</Text> {props.monster}
        </Text>
        <Text>
            <Text style={styles.textBold}>Type: </Text>{props.renderTypes()}
        </Text>
        { props.monsterBrand === 'Pokémon' ?
            <PokémonView renderAbilities={props.renderAbilities}
                         renderImage={props.renderImage}/>
            :
            <Text/>
        }
        { props.monsterBrand === 'Yu-Gi-Oh' ?
            <YuGiOhView monsterRace={props.monsterRace}
                        description={props.description}
                        renderImage={props.renderImage}/>
            :
            <Text/>
        }
    </View>;

const styles = StyleSheet.create({
    container: {
        marginTop: '10%',
        marginLeft: '10%'
    },
    textBold: {
        fontWeight: 'bold'
    }
});
