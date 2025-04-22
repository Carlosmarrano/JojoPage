import { NavLink } from "react-router-dom";
import { JojoLogo } from "../../Jojos/data/JojosData";
import { useState } from "react";

const NavbarImage = JojoLogo.find((logo) => logo.id === "JojoLogo"); 

export const Navbar = () => {

    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const clickInLink = () => {
        if(window.innerWidth < 992){
            setIsNavbarOpen(false);
        }
    }

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark p-2">
                <NavLink to="/homePage">
                    <img src={NavbarImage.image} alt={NavbarImage.name} className="navbar-logo" id="mi-logo" />
                </NavLink>

                <button className="navbar-toggler" onClick={toggleNavbar} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`} id="navbarNav">
                    <div className="navbar-nav p-2 p-md-4 d-flex justify-content-center text-center text-lg-start w-100">
                        <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="PhantomBlood" onClick={clickInLink}>Phantom Blood</NavLink>
                        <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="BattleTendency" onClick={clickInLink}>Battle Tendency</NavLink>
                        <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="StardustCrusaders" onClick={clickInLink}>Stardust Crusaders</NavLink>
                        <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="DiamondIsUnbreakable" onClick={clickInLink}>Diamond is Unbreakable</NavLink>
                        <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="GoldenWind" onClick={clickInLink}>Golden Wind</NavLink>
                        <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="StoneOcean" onClick={clickInLink}>Stone Ocean</NavLink>
                        <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="SteelBallRun" onClick={clickInLink}>Steel Ball Run</NavLink>
                        <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="JoJolion" onClick={clickInLink}>Jojolion</NavLink>
                    </div>
                </div>
            </nav>
        </>
    );
};
