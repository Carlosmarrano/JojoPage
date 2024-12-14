import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getStandById } from "../helpers";

export const StandPage = () => {

    const {id} = useParams();
    const navigate = useNavigate();


    const stand = useMemo( () => getStandById(id), [id]);

    const onNavigateBack = () => {
        navigate(-1);
    }

    if(!stand){
        return <Navigate to="/HomePage" />
    }

    return(
        <>
        <div className="row mt-5">
            <div className="col-4">
                <img src={ `/assets/${id}.png` } alt={ stand.name } className="card-img" />
            </div>

            <div className="col-8">
                <h3>{ stand.alternateName }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> japaneseName: </b> { stand.japaneseName }</li>
                    <li className="list-group-item"> <b> standUser: </b> { stand.standUser }</li>
                    <li className="list-group-item"> <b> chapter: </b> { stand.chapter }</li>
                    <li className="list-group-item"> <b> abilities: </b> { stand.abilities }</li>
                    <li className="list-group-item"> <b> battlecry: </b>  { stand.battlecry }
                    </li>
                </ul>

                <button className="btn btn-outline-primary" onClick={ onNavigateBack }>Regresar</button>
            </div>
        </div>
        </>
    )
}













