import axios from "axios";
import {YU_GI_OH_V2_URL, FIND_BY_YU_GI_OH} from "../config/YuGiOhConfig";
import {retrieveYuGiOhMonster,
        retrieveYuGiOhTypes} from "../util/RetrieveYuGiHoUtil";
import {hasMonster} from "../util/ServiceUtils";

export function retrieveYuGiOhService(yugioh, _this) {
    let YU_GI_OH = yugioh.replace(/\s+/g, '%20');
    let FIND_BY_YUGIOH_URI = FIND_BY_YU_GI_OH.replace('{monster}', YU_GI_OH);
    console.log("Retrieve YU-GI-OH " + yugioh + " from: " + YU_GI_OH_V2_URL + FIND_BY_YUGIOH_URI);

    axios.get(YU_GI_OH_V2_URL + FIND_BY_YUGIOH_URI)
        .then(response => response.data)
        .then(data => {

            let yuGiOhMonster = retrieveYuGiOhMonster(data);

            _this.setState({monster: yuGiOhMonster.name,
                            id: yuGiOhMonster.id,
                            description: yuGiOhMonster.desc,
                            monsterRace: yuGiOhMonster.race,
                            monsterTypes: retrieveYuGiOhTypes(yuGiOhMonster),
                            image: yuGiOhMonster.image_url,
                            hasMonster: hasMonster(data),
                            showErrorMessage: false });
            return data;
        })
        .catch(error => {
            console.log("Error occurred retrieving YU-GI-OH " + yugioh + " from: " + YU_GI_OH_V2_URL + FIND_BY_YUGIOH_URI);
            console.log('Error: ' + error);
            _this.setState({hasMonster: false,
                showErrorMessage: true});
        })
}
