import {FIND_ALL_POKEMON, FIND_BY_POKEMON, POKE_V2_URL} from "../config/PokeApiConfig";
import axios from "axios";
import {
    retrievePokemonCollection,
    retrievePokémonAbilities,
    retrievePokémonImage,
    retrievePokémonTypes
} from "../util/RetrievePokemonUtil";
import {capitalizeFirstLetter, hasMonster} from "../util/ServiceUtils";

export function retrievePokémonCollection(_this){
    console.log("Retrieve Pokemon names from: " + POKE_V2_URL + FIND_ALL_POKEMON);

    axios.get(POKE_V2_URL + FIND_ALL_POKEMON)
        .then(response => response.data)
        .then(data => {
            _this.setState({monsterCollection: retrievePokemonCollection(data.results) });
            return data;
        })
        .catch(error => {
            console.log("Error occurred retrieving Pokemon names from: " + POKE_V2_URL + FIND_ALL_POKEMON);
            console.log('Error: ' + error);
        })
}

export function retrievePokémonService(pokemon, _this){

    let FIND_BY_POKEMON_URI = FIND_BY_POKEMON.replace('{monster}', pokemon.toLowerCase());
    console.log("Retrieve Pokemon " + pokemon + " from: " + POKE_V2_URL + FIND_BY_POKEMON_URI);

    axios.get(POKE_V2_URL + FIND_BY_POKEMON_URI)
        .then(response => response.data)
        .then(data => {
            _this.setState({monster: capitalizeFirstLetter(data.name),
                            id: data.id,
                            abilities: retrievePokémonAbilities(data.abilities),
                            monsterTypes: retrievePokémonTypes(data.types),
                            image: retrievePokémonImage(data.sprites),
                            hasMonster: hasMonster(data),
                            showErrorMessage: false });
            return data;
        })
        .catch(error => {
            console.log("Error occurred retrieving Pokemon " + pokemon + " from: " + POKE_V2_URL + FIND_BY_POKEMON_URI);
            console.log('Error: ' + error);
            _this.setState({hasMonster: false,
                            showErrorMessage: true});
        })
}
