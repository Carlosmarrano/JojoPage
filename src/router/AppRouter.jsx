import { Route, Routes } from "react-router-dom"
import { JojoRoutes } from "../Jojos/routes/JojoRoutes"


export const AppRouter = () => {

    return(
        <>
            <Routes>
                <Route path="/*" element={ <JojoRoutes/> }/>
            </Routes>
        </>
    )
}