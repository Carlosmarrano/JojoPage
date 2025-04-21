import { StandData } from "../data/JojosData";


export const getStandByName = (name = '') => {

    name = name.toLowerCase().trim();

    if( name.length === 0) return [];

    return StandData.filter(
        stand => stand.name.toLocaleLowerCase().includes(stand)
    );
};