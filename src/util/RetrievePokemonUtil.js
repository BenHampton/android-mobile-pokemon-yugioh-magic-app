import React from "react";
import {capitalizeFirstLetter, isNotEmpty} from "./ServiceUtils";

export function retrievePokemonCollection(monsters){

    let monsterCollection = [];
    if(isNotEmpty(monsters)){
        monsters.map( (monster,key) => {
            monsterCollection.push(monster.name);
        });
    }

    return monsterCollection;
}

export function retrievePokémonAbilities(abilities){

    let pokémonAbility = [];

    if (isNotEmpty(abilities)){
        abilities.map(ability => {
            ability.ability.name = capitalizeFirstLetter(ability.ability.name);
            pokémonAbility.push(ability.ability)
        });

        return pokémonAbility;
    }
}

export function retrievePokémonTypes(types){

    let pokémonTypes = [];

    if (isNotEmpty(types)){
        types.map(type => {
            type.type.name = capitalizeFirstLetter(type.type.name);
            pokémonTypes.push(type.type)
        });
    }
    return pokémonTypes;
}

export function retrievePokémonImage(images) {

    if (isNotEmpty(images)) {
        return images.front_default;
    }
    return '';
}
