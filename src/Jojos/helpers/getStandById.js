import { StandData } from "../data/JojosData"


export const getStandByid = (id) => {

    return StandData.find(stand => stand.id === id);
}