import React from "react";

export function retrieveYuGiOhMonster(response) {

    let monsterInfo = [];

    response[0].map( (monster, key) =>{
        if (key === 0){
            monsterInfo = monster;
        }
    });
    return monsterInfo;
}

export function retrieveYuGiOhTypes(type){

    let yuGiOhTypes = [];

    if (type !== ''){
        yuGiOhTypes.push(type)
    }
    return yuGiOhTypes;
}
