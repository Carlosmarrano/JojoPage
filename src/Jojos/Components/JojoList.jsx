import { useMemo, useState } from "react"
import { JojoCard } from "./JojoCard";
import { JojoByChapter } from "../helpers/getJojoByChapter";


export const JojoList = ({ chapter }) => {

    const Jojos = useMemo( () => JojoByChapter(chapter), [chapter]);
    const [ currentPage, setCurrentPage] = useState(0)

    const JojosFiltered = () => {

        return Jojos.slice(currentPage, currentPage + 5);
    }

    const nextPage = () => {
        if( Jojos.length > currentPage + 5)
        setCurrentPage( currentPage + 5 );
    }

    const prevPage = () => {
        if( currentPage > 0)
        setCurrentPage( currentPage - 5 );
    }

    return(
        <>
            <div className="container-button">
                <button className="button" onClick={prevPage}>Anterior</button>
                <button className="button" onClick={nextPage}>Siguiente</button>
            </div>
                
            <div className="container-card row rows-cols-1 row-cols-md-4 g-4 mt-4 d-flex">
                {
                    JojosFiltered().map( jojo => (
                        <JojoCard
                            key={ jojo.id}
                            {...jojo}
                        />
                        
                    ) )
                }

            </div>
        </>
    )

}