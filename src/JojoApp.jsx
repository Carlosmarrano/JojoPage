import { Navbar } from "./ui/components/Navbar"
import { AppRouter } from "./router/AppRouter"
import { Footer } from "./Jojos/pages"



export const JojoApp = () => {
    return(
        <>
            <Navbar/>
            <AppRouter/>
            <Footer/>
        </>
    )
}