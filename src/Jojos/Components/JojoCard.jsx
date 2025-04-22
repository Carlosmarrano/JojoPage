import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const JojoCard = ({
    id,
    name,
    chapter,
    image,
}) => {

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const preloadLink = document.createElement("link");
        preloadLink.rel = "preload";
        preloadLink.href = image;
        preloadLink.as = "image";
        document.head.appendChild(preloadLink);

        return ()  => {
            document.head.removeChild(preloadLink);
        };
    }, [image]);

    const handleImageLoad = () => {
        setIsLoaded(true);
    }

    return (
        <Link className="card link-underline link-underline-opacity-0" to={`/jojo/${id}`}>
            <h5 className="card-title text-center">{name}</h5>

            <div className="img-container" style={{position: "relative"}}>
                <img alt={image} src={image} className="card-img" style={{  filter: isLoaded ? "none" : "blur(10px)", transition: "filter 0.3s ease-in-out" }} onLoad={handleImageLoad}/>
            </div>

            <p className="card-text text-center">{chapter}</p>
        </Link>
    );
};
