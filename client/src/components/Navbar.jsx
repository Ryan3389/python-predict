import mlb from '../assets/mlb.png'
function Navbar() {
    return (
        <header>
            <nav>
                <span className='nav-left'>
                    <img className='mlb-logo' src={mlb} alt="Major League Baseball Logo" />
                    <p>Major League <br /> Baseball</p>
                </span>
                <span className='nav-right'>
                    <a href="#">About</a>
                    <a href='#'>Login</a>
                    <a href='#'>Signup</a>
                </span>
            </nav>
        </header>
    )
}
export default Navbar
