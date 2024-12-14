import { JojosData } from "../data/JojosData"


export const getJojoById = (id) => {

    return JojosData.find(jojo => jojo.id === id);
}