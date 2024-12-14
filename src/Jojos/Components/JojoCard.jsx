import { Link } from "react-router-dom";
 
export const JojoCard = ({
    id,
    name,
    japaneseName,
    image,
    abilities,
    nationality,
    catchphrase,
    family,
    chapter,
    living,
    isHuman,
    standUser,
}) => {

    const JojoImageUrl = `/assets/${id}.png`;

    return(
                    <Link className="card link-underline link-underline-opacity-0" to={ `/jojo/${id}` } >
                        <h5 className="card-title text-center">{ name }</h5>
                        <img src={ JojoImageUrl } className="card-img rounded mx-auto d-block" />
                        <p className="card-text text-center">{ chapter }</p>
                    </Link>
    )
}