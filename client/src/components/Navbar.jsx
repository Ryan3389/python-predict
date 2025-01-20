function Navbar() {
    return (
        <header>
            <nav className="bg-backgroundColor w-screen text-secondaryColor h-[10vh]">

                <div className="flex flex-wrap items-center justify-between mx-auto p-4 w-[80%]">
                    <span className="self-center text-2xl  dark:text-white">HOF Predict App</span>
                    <div>
                        {/* <a className="py-2 px-3 cursor-pointer  nav-link">Home</a> */}
                        <a className="py-2 px-3 cursor-pointer nav-link">About</a>
                        <a className="py-2 px-3 cursor-pointer  nav-link">Github</a>
                        <a className="py-2 px-3 cursor-pointer  nav-link">Login</a>
                    </div>

                </div>

            </nav>
        </header>
    )
}

export default Navbar
// import mlb from '../assets/mlb.png'
// function Navbar() {
//     return (
//         <header>
//             <nav>
//                 <span className='nav-left'>
//                     <img className='mlb-logo' src={mlb} alt="Major League Baseball Logo" />
//                     <p>Major League <br /> Baseball</p>
//                 </span>
//                 <span className='nav-right'>
//                     <a href="#">About</a>
//                     <a href='#'>Login</a>
//                     <a href='#'>Signup</a>
//                 </span>
//             </nav>
//         </header>
//     )
// }
// export default Navbar
