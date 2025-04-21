import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getJojoById } from "../helpers/getJojoByid";
import { getStandByid } from "../helpers";

export const JojoPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const jojo = useMemo(() => getJojoById(id), [id]);
    const stand = useMemo(() => getStandByid(id), [id]);

    const onNavigateBack = () => {
        navigate(-1);
    };

    if (!jojo && !stand) {
        return <Navigate to="/HomePage" />;
    }

    return (
        <>
            <div className="container-Page row mt-5 px-3 px-sm-4 px-md-5 py-3 py-sm-4 mb-sm-5" style={{ backgroundColor: "purple", borderRadius: "10px" }}>
                
                <div className="col-12 col-md-4 mb-4 d-flex justify-content-center align-items-center">
                    <img
                        src={jojo?.image || stand?.image}
                        alt={jojo?.name || stand?.name}
                        className="img-fluid rounded"
                        style={{
                            objectFit: "contain",
                            width: "100%", 
                            height: "auto", 
                            maxHeight: "400px", 
                        }}
                    />
                </div>

                <div className="col-12 col-md-8 text-center text-md-start">
                   {jojo && (
                    <>
                        <h3 style={{color: "white"}}>{jojo.name}</h3>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"> <b>ABILITIES:</b> {jojo.abilities} </li>
                                <li className="list-group-item"> <b>CHAPTER:</b> {jojo.chapter} </li>
                                <li className="list-group-item"> <b>NATIONALITY:</b> {jojo.nationality} </li>
                                <li className="list-group-item"> <b>CATCHPHRASE:</b> {jojo.catchphrase} </li>
                                <li className="list-group-item"> <b>FAMILY:</b> {jojo.family} </li>
                            </ul>

                            <h5 className="mt-5" style={{color: "white"}}>Japanese Name</h5>
                            <p style={{color: "white"}}>{jojo.japaneseName}</p>
                    </>
                   )}

                   {stand && (
                    <>
                        <h3 style={{color: "white"}}>{ stand.name }</h3>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"> <b> japaneseName: </b> { stand.japaneseName }</li>
                                <li className="list-group-item"> <b> standUser: </b> { stand.standUser }</li>
                                <li className="list-group-item"> <b> chapter: </b> { stand.chapter }</li>
                                <li className="list-group-item"> <b> abilities: </b> { stand.abilities }</li>
                                <li className="list-group-item"> <b> battlecry: </b>  { stand.battlecry }</li>
                            </ul>
                    </>
                   )}

                   <button className="btn mt-3" onClick={onNavigateBack}>Regresar</button>
                </div>
            </div>
        </>
    );
};
