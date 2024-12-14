import { JojosData } from "../data/JojosData";


export const JojoByChapter = (chapter = '') => {
    const validChapters = ['Phantom Blood', 'Battle Tendency', 'Stardust Crusaders', 'Diamond is Unbreakable', 'Vento Aureo', 'Stone Ocean', 'Steel Ball Run', 'Jojolion'];
    if( !validChapters.includes( chapter )) {
        throw new Error(`Invalid chapter ${chapter} is not a valid chapter`);
    }

    return JojosData.filter(jojo => jojo.chapter === chapter);
}