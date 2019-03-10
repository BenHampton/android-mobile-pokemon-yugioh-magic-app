import {FIND_BY_POKEMON, POKE_V2_URL} from "../config/PokeApiConfig";
import axios from "axios";
import {
    hasPokémon,
    retrievePokémonAbilities,
    retrievePokémonImage,
    retrievePokémonTypes
} from "../util/RetrievePokemonUtil";

export function retrievePokémonService(pokemon, _this){

    let FIND_BY_POKEMON_URI = FIND_BY_POKEMON.replace('{name}', pokemon.toLowerCase());
    console.log("Retrieve Pokemon " + pokemon + " from: " + POKE_V2_URL + FIND_BY_POKEMON_URI);

    axios.get(POKE_V2_URL + FIND_BY_POKEMON_URI)
        .then(response => response.data)
        .then(data => {
            _this.setState({pokémon: data.name,
                            indexId: data.id,
                            abilities: retrievePokémonAbilities(data.abilities),
                            pokémonTypes: retrievePokémonTypes(data.types),
                            pokémonImage: retrievePokémonImage(data.sprites),
                            hasPokémon: hasPokémon(data),
                            showErrorMessage: false });
            return data;
        })
        .catch(error => {
            console.log("Error occurred retrieving Pokemon " + pokemon + " from: " + POKE_V2_URL + FIND_BY_POKEMON_URI);
            console.log('Error: ' + error);
            _this.setState({hasPokémon: false,
                            showErrorMessage: true});
        })


}
