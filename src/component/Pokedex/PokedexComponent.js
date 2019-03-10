import React from 'react'
import {View, Text, Image, Keyboard, StyleSheet} from 'react-native';
import {retrievePokémonService} from "../../service/RetrievePokémonService";
import {PokedexView} from "./PokedexView";

class PokedexComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pokémonEntree: '',
            pokémon: '',
            indexId: '',
            pokémonImage: '',
            pokémonTypes: [],
            abilities: [],
            hasPokémon: false,
            showErrorMessage: false
        };
        this.retrievePokémon = this.retrievePokémon.bind(this);
        this.updatePokémonEntree = this.updatePokémonEntree.bind(this);
        this.renderPokémonImage = this.renderPokémonImage.bind(this);
        this.renderTypes = this.renderTypes.bind(this);
        this.renderAbilities = this.renderAbilities.bind(this);
    }

    componentDidMount() {
        //TODO retrieve pokemonList
    }

    retrievePokémon(){
        Keyboard.dismiss();
        retrievePokémonService(this.state.pokémonEntree, this);
    }

    updatePokémonEntree(pokémon){
        this.setState({pokémonEntree: pokémon})
    }

    renderPokémonImage(){
        return(
            <Image style={{width: 200, height: 200, marginLeft: 30}} source={{uri: this.state.pokémonImage}}/>
            )
    }

    renderAbilities(){
        let abilitiesLength = this.state.abilities.length - 1;
       return this.state.abilities.map( (ability, key) => {
           return(
               <Text key={key}>{ability.name}{abilitiesLength === key ? '' : ", "}</Text>
           )
       })
    }

    renderTypes(){
        let typesLength = this.state.pokémonTypes.length - 1;
        return this.state.pokémonTypes.map( (type,key) => {
            return(
                <Text key={key}> { type.name } { typesLength === key ? '' : ", " }</Text>
            )
        })
    }

    render() {
        return (
           <PokedexView indexId={this.state.indexId}
                        pokémon={this.state.pokémon}
                        hasPokémon={this.state.hasPokémon}
                        pokémonTypes={this.state.pokémonTypes}
                        pokémonabilities={this.state.abilities}
                        showErrorMessage={this.state.showErrorMessage}
                        updatePokémonEntree={this.updatePokémonEntree}
                        retrievePokémon={this.retrievePokémon}
                        renderPokémonImage={this.renderPokémonImage}
                        renderTypes={this.renderTypes}
                        renderAbilities={this.renderAbilities}
           />
        );
    }
}

export default PokedexComponent;
