import {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import { JojoArcData } from "../data/JojosData"; 

export const JojoHome = () => {

    const [loadedImages, setLoadedImages] = useState({});

    const handleImageLoad = (id) => {
        setLoadedImages((prev => ({...prev, [id]: true})));
    };

    useEffect(() => {
        JojoArcData.forEach((arc) => {
            const preloadLink = document.createElement("link");
            preloadLink.rel = "preload";
            preloadLink.href = arc.image;
            preloadLink.as = "image";
            document.head.appendChild(preloadLink);

            return () => {
                document.head.removeChild(preloadLink);
            };
        });
    }, []);

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
                        style={{
                            filter: loadedImages[arc.id] ? "none" : "blur(10px)",
                            transition: "filter 0.3s ease-in-out",
                        }}
                        onLoad={() => handleImageLoad(arc.id)}
                    />
                </NavLink>
            ))}
        </div>
    )
}