export function isNotEmpty(item){
    return item !== null && item !== '' && item !== undefined;
}

export function hasMonster(data){
    return isNotEmpty(data);
}

export function capitalizeFirstLetter(item){
    let firstLetter = item.substring(0,1);
    return item.replace(firstLetter, firstLetter.toUpperCase());
}
