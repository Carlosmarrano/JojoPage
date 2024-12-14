import { NavLink } from "react-router-dom"


export const JojoHome = () => {

    return(
        <>
        <div className="container-home row rows-cols-1 row-cols-md-4 g-4 mt-4 d-flex">
            <NavLink className="text-center link-offset-2 link-underline link-underline-opacity-0"  to="/PhantomBlood"> <img src="assets/PB.jpg" alt="Phantom Blood" /></NavLink>
            <NavLink className="text-center link-offset-2 link-underline link-underline-opacity-0" to="/BattleTendency"> <img src="assets/BT.jpg" alt="Battle Tendency" /></NavLink>
            <NavLink className="text-center link-offset-2 link-underline link-underline-opacity-0" to="/StardustCrusaders"> <img src="assets/SC.webp" alt="Stardust Crusaders" /></NavLink>
            <NavLink className="text-center link-offset-2 link-underline link-underline-opacity-0" to="/DiamondIsUnbreakable"> <img src="assets/DIU.webp" alt="Diamond is Unbreakable" /></NavLink>
            <NavLink className="text-center link-offset-2 link-underline link-underline-opacity-0" to="/GoldenWind"> <img src="assets/GW.jpg" alt="Golden Wind" /></NavLink>
            <NavLink className="text-center link-offset-2 link-underline link-underline-opacity-0" to="/StoneOcean"> <img src="assets/SO.webp" alt="Stone Ocean" /></NavLink>
            <NavLink className="text-center link-offset-2 link-underline link-underline-opacity-0" to="/SteelBallRun"> <img src="assets/SBR.webp" alt="Stell Ball Run" /></NavLink>
            <NavLink className="text-center link-offset-2 link-underline link-underline-opacity-0" to="/JoJolion"> <img src="assets/JJ.webp" alt="JoJolion" /></NavLink>
        </div>
        </>
    )
}