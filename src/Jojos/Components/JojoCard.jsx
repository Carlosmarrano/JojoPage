import { Link } from "react-router-dom";

export const JojoCard = ({
    id,
    name,
    chapter,
    image,
}) => {

    return (
        <Link className="card link-underline link-underline-opacity-0" to={`/jojo/${id}`}>
            <h5 className="card-title text-center">{name}</h5>

            <div className="img-container">
                <img src={image} alt={name} className="card-img"/>
            </div>

            <p className="card-text text-center">{chapter}</p>
        </Link>
    );
};
