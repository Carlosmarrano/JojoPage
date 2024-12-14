import { Navigate, Route, Routes } from "react-router-dom"
import { BattleTendency, DiamondIsUnbreakable, GoldenWind, HomePage, JoJolion, PhantomBlood, SearchPage, StardustCrusaders, SteelBallRun, StoneOcean } from "../pages"
import { JojoPage } from "../pages/JojoPage"

import {  CharacterRedirect } from "../pages/CharacterRedirect"


export const JojoRoutes = () => {

    return(
        <>

            <div className="container">
                <Routes>
                    <Route path="/HomePage" element={ < HomePage /> }/>
                    <Route path="/PhantomBlood" element={ < PhantomBlood /> }/>
                    <Route path="/BattleTendency" element={ < BattleTendency /> }/>
                    <Route path="/StardustCrusaders" element={ < StardustCrusaders /> }/>
                    <Route path="/DiamondIsUnbreakable" element={ < DiamondIsUnbreakable /> }/>
                    <Route path="/GoldenWind" element={ < GoldenWind /> }/>
                    <Route path="/StoneOcean" element={ < StoneOcean /> }/>
                    <Route path="/SteelBallRun" element={ < SteelBallRun /> }/>
                    <Route path="/JoJolion" element={ < JoJolion /> }/>

                    <Route path="name/:id" element={ < SearchPage /> }/>

                    <Route path="jojo/:id" element={ <JojoPage/>}/>

                    <Route path="CharacterRedirect" element={ <CharacterRedirect/>}/>


                    <Route path="/" element={ <Navigate to="/HomePage"/> } />
                </Routes>
            </div>
        </>
    )

}