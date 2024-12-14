import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { JojoApp } from './JojoApp.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <JojoApp />
    </BrowserRouter>
)
