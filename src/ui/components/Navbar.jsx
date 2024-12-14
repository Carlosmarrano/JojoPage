import { NavLink } from "react-router-dom"


export const Navbar = () => {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark p-2">
            <img src="assets/Jojo's-Logo.png" alt="Jojos" className="navbar-logo" id="mi-logo" />


            <div className="navbar-collapse">
                <div className="navbar-nav p-2 p-md-4">
                    <NavLink className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}` } to="HomePage">Home</NavLink>
                    <NavLink className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}` } to="PhantomBlood">Phantom Blood</NavLink>
                    <NavLink className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}` } to="BattleTendency">Battle Tendency</NavLink>
                    <NavLink className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}` } to="StardustCrusaders">Stardust Crusaders</NavLink>
                    <NavLink className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}` } to="DiamondIsUnbreakable">Diamond is Unbreakable</NavLink>
                    <NavLink className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}` } to="GoldenWind">Golden Wind</NavLink>
                    <NavLink className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}` } to="StoneOcean">Stone Ocean</NavLink>
                    <NavLink className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}` } to="SteelBallRun">Stell Ball Run</NavLink>
                    <NavLink className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}` } to="JoJolion">Jojolion</NavLink>
                    <NavLink className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}` } to="/name">Search</NavLink>
                </div>
            </div>
        </nav>

        </>
    )
}