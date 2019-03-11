import {Button, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import React from "react";
import {MonsterInfoView} from "./MonsterInfoView";

export const MonsterView = (props) =>
    <View style={styles.container}>
        <ScrollView>
        <Text style={styles.textContainer}>Enter {props.monsterBrand} name for {props.apiName} to generate</Text>
        <TextInput placeholder={'Enter Monsters Name'}
                   style={styles.textContainer}
                   onChangeText={ (monster) => props.updateMonsterEntree(monster) } />

        <Button title={'Generate '+`${props.monsterBrand}`}
                onPress={() => props.retrieveMonster()} />

        { props.hasMonster ?
            <MonsterInfoView id={props.id}
                             monster={props.monster}
                             monsterBrand={props.monsterBrand}
                             monsterRace={props.monsterRace}
                             description={props.description}
                             renderImage={props.renderImage}
                             renderTypes={props.renderTypes}
                             renderAbilities={props.renderAbilities}/>
            :
            <View style={styles.errorMessage}>
                { props.showErrorMessage ?
                    <Text>Incorrect {props.monsterBrand} Name Enter</Text>
                    :
                    <Text/>
                }
            </View>
        }
        </ScrollView>
    </View>;

const styles = StyleSheet.create({
    container: {
        marginTop: '5%',
        marginBottom: '10%'
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
