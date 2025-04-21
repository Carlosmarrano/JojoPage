import { StandData } from "../data/JojosData";

export const StandByChapter = (chapter = '') => {
    const validChapters = ['Phantom Blood', 'Battle Tendency', 'Stardust Crusaders', 'Diamond is Unbreakable', 'Vento Aureo', 'Stone Ocean', 'Steel Ball Run', 'Jojolion'];
    if( !validChapters.includes( chapter )) {
        throw new Error(`Invalid chapter ${chapter} is not a valid chapter`);
    }

    return StandData.filter(stand => stand.chapter === chapter);
}