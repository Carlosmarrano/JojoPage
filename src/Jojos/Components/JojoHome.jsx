import { NavLink } from "react-router-dom";
import { JojoArcData } from "../data/JojosData"; 
import { useEffect, useState } from "react";

export const JojoHome = () => {
    const [allLoaded, setAllLoaded] = useState(false); 
    const [imagesLoaded, setImagesLoaded] = useState(0); 

    const preloadImages = () => {
        const imagePromises = JojoArcData.map((arc) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = arc.image;
                img.onload = resolve;
                img.onerror = reject;
            });
        });
        return Promise.all(imagePromises);
    };

    useEffect(() => {
        let timer;

        preloadImages().then(() => {
            setImagesLoaded(JojoArcData.length); 
        });

        timer = setTimeout(() => {
            if (imagesLoaded === JojoArcData.length) {
                setAllLoaded(true); 
            }
        }, 700);

        return () => clearTimeout(timer);
    }, [imagesLoaded]); 

    return (
        <>
        {!allLoaded && (
            <div className="jojo-loader">
                <div className="jojo-spin"></div>
                <p className="jojo-text">Cargando...</p>
            </div>
        )}

        <div className="container-home row rows-cols-1 row-cols-md-4 g-4 mt-4 d-flex" style={{ visibility: allLoaded ? "visible" : "hidden" }}>
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
                        loading="eager"
                        onLoad={() => setImagesLoaded((prev) => prev + 1)} 
                    />
                </NavLink>
            ))}
        </div>
        </>
    );
};
