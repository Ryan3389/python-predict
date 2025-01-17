import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import LandingPage from "./Pages/LandingPage"
import './App.css'
function App() {
    return (
        <main>
            <Navbar />
            <Outlet />
        </main>
    )
}

export default App