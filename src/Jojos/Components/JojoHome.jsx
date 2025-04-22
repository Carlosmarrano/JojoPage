import { NavLink } from "react-router-dom";
import { JojoArcData } from "../data/JojosData"; 

export const JojoHome = () => {

    return (
        <div className="container-home row rows-cols-1 row-cols-md-4 g-4 mt-4 d-flex">
            {JojoArcData.map((arc) => (
                <NavLink
                    key={arc.id}
                    className="text-center link-offset-2 link-underline link-underline-opacity-0"
                    to={`/${arc.id}`} 
                >
                    <img
                        src={arc.image} 
                        alt={arc.name}
                        className="img-fluid"
                        loading="lazy"
                        rel="preload"
                    />
                </NavLink>
            ))}
        </div>
    )
}