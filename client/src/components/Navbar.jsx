import { Link } from "react-router-dom"
function Navbar() {
    return (
        <header>
            <nav className="bg-backgroundColor w-screen text-secondaryColor h-[10vh]">

                <div className="flex flex-wrap items-center justify-between mx-auto p-4 w-[80%]">
                    <span className="self-center text-2xl  dark:text-white">LegendMeter</span>
                    <div>
                        <Link to={"/"} className="py-2 px-3 cursor-pointer  nav-link">Home</Link>
                        <Link to={"/predict"} className="py-2 px-3 cursor-pointer nav-link">Predict</Link>
                    </div>

                </div>

            </nav>
        </header>
    )
}

export default Navbar
