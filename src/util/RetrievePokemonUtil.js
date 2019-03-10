import React from "react";
import {isNotEmpty} from "./ServiceUtils";

export function retrievePokémonAbilities(abilities){

    let pokémonAbility = [];

    if (abilities.length !== 0){
        abilities.map(ability => {
            pokémonAbility.push(ability.ability)
        });
        return pokémonAbility;
    }
}

export function retrievePokémonTypes(types){

    let pokémonTypes = [];

    if (types.length !== 0){
        types.map(type => {
            pokémonTypes.push(type.type)
        });
    }
    return pokémonTypes;
}

export function retrievePokémonImage(images) {

    if (images.length !== 0) {
        return images.front_default;
    }
    return '';
}

export function hasPokémon(data){
    return isNotEmpty(data);
}
