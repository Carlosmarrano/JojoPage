import { JojosData } from "../data/JojosData";


export const getJojoByName = (name = '') => {

    name = name.toLowerCase().trim();

    if( name.length === 0) return [];

    return JojosData.filter(
        jojo => jojo.name.toLocaleLowerCase().includes(name)
    );
};