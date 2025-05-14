import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import BarGraph from "./components/BarChart"
import './App.css'
function App() {
    return (
        <main>
            <Navbar />
            <Outlet />
            {/* <Footer /> */}
        </main>
    )
}



export default App