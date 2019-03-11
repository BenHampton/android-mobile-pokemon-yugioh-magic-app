import React from 'react'
import {Text, Image, Keyboard, ScrollView, StyleSheet} from 'react-native';
import {retrievePokémonCollection, retrievePokémonService} from "../../service/RetrievePokémonService";
import {MonsterView} from "../../view/MonsterView";
import {retrieveYuGiOhService} from "../../service/RetrieveYuGiOhService";
import{ Dimensions } from "react-native";

class MonsterComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            monsterBrand: this.props.monsterBrand,
            apiName: this.props.apiName,
            monsterEntree: 'Blue-Eyes white dragon',
            id: '',
            monster: '',
            image: '',
            description: '',
            monsterRace: '',
            monsterSuggestions: [],
            monsterCollection: [],
            monsterTypes: [],
            abilities: [],
            hasMonster: false,
            showErrorMessage: false
        };
        this.retrieveMonster = this.retrieveMonster.bind(this);
        this.updateMonsterEntree = this.updateMonsterEntree.bind(this);
        this.renderImage = this.renderImage.bind(this);
        this.renderTypes = this.renderTypes.bind(this);
        this.renderAbilities = this.renderAbilities.bind(this);
        this.suggestMonster = this.suggestMonster.bind(this);
    }

    componentDidMount() {
        if (this.state.monsterBrand === 'Pokémon'){
            retrievePokémonCollection(this);
        } else if (this.state.monsterBrand === 'Yu-Gi-Oh'){
            //retrieveYuGiOhSCollection(this);
        }
    }

    retrieveMonster(){
        Keyboard.dismiss();
        if (this.state.monsterBrand === 'Pokémon'){
            retrievePokémonService(this.state.monsterEntree, this);
        } else if (this.state.monsterBrand === 'Yu-Gi-Oh'){
            retrieveYuGiOhService(this.state.monsterEntree, this)
        }
    }

    updateMonsterEntree(name){
        this.setState({monsterEntree: name})
    }

    renderImage(className){

        let styleName = '';

        if (className === 'pokemon'){
            styleName = styles.imagePokemon
        } else if (className === 'yuGiOh'){
            styleName = styles.imageYuGiOh
        }

        return(
            <Image style={styleName} source={{uri: this.state.image}}/>
        )
    }

    renderAbilities(){
        let abilitiesLength = this.state.abilities.length - 1;
        return this.state.abilities.map( (ability, key) => {
            return(
                <Text key={key}> {ability.name}{abilitiesLength === key ? '' : ", "}</Text>
            )
        })
    }

    renderTypes(){
        let typesLength = this.state.monsterTypes.length - 1;
        return this.state.monsterTypes.map( (type, key) => {
            return(
                <Text key={key}> { type.name }{ typesLength === key ? '' : ", " }</Text>
            )
        })
    }

    suggestMonster(event){
        let monsterSuggestions = this.state.monsterCollection.filter((monster) => {
            return monster.name.toLowerCase().startsWith(event.query.toLowerCase());
        });

        this.setState({monsterSuggestions: monsterSuggestions})
    }

    render() {

        const screenHeight = Dimensions.get('window').height;

        return (
            <MonsterView monsterBrand={this.state.monsterBrand}
                         apiName={this.state.apiName}
                         monsterCollection={this.state.monsterCollection}
                         monsterSuggestions={this.state.monsterSuggestions}
                         id={this.state.id}
                         types={this.state.monsterTypes}
                         monster={this.state.monster}
                         monsterRace={this.state.monsterRace}
                         description={this.state.description}
                         hasMonster={this.state.hasMonster}
                         showErrorMessage={this.state.showErrorMessage}
                         suggestMonster={this.suggestMonster}
                         updateMonsterEntree={this.updateMonsterEntree}
                         retrieveMonster={this.retrieveMonster}
                         renderImage={this.renderImage}
                         renderTypes={this.renderTypes}
                         renderAbilities={this.renderAbilities} />
        );
    }
}

const styles = StyleSheet.create({
    imagePokemon: {
        height: 250,
        width: 200
    },
    imageYuGiOh: {
        height: 350,
        width: 250,
    }
});

export default MonsterComponent;


