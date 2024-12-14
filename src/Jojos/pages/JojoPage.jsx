import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getJojoById } from "../helpers/getJojoByid";

export const JojoPage = () => {

    const {id} = useParams();
    const navigate = useNavigate();


    const jojo = useMemo( () => getJojoById(id), [id]);

    const onNavigateBack = () => {
        navigate(-1);
    }

    if(!jojo){
        return <Navigate to="/HomePage" />
    }

    return(
        <>
        <div className="container-Page row mt-5">
            <div className="container-image col-4">
                <img src={ `/assets/${id}.png` } alt={ jojo.name } className="card-img"/>
            </div>

            <div className="container-jojo col-8 text-center">
                <h3>{ jojo.name }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> ABILITIES: </b> { jojo.abilities }</li>
                    <li className="list-group-item"> <b> CHAPTER: </b> { jojo.chapter }</li>
                    <li className="list-group-item"> <b> NATIONALITY: </b> { jojo.nationality }</li>
                    <li className="list-group-item"> <b> CATCHPHRASE: </b> { jojo.catchphrase }</li>
                    <li className="list-group-item"> <b> FAMILY: </b>  { jojo.family }
                    </li>
                </ul>

                <h5 className="mt-5">Japonese Name</h5>
                <p>{ jojo.japaneseName }</p>

                <button className="btn" onClick={ onNavigateBack }>Regresar</button>
            </div>
        </div>
        </>
    )
}