import { Link } from "react-router-dom"
import mlbLogo from '../assets/mlbLogo.webp'
function LandingPage() {
    return (
        <section className="hero-top">
            <article className="hero-article">
                {/* <p>EST. 1936</p> */}
                <h1>MLB Hall of Fame Predict</h1>
                {/* <p>Counless Stars</p> */}
            </article>

            <article className='img-article'>
                <img className='logo' src={mlbLogo} alt="" />
                <h1>Predicting Tomorrow's Stars</h1>
                <Link className="btn" to="/predict">Start Predicting</Link>
            </article>
        </section>
    )
}

export default LandingPage
// import { Link } from "react-router-dom"
// function LandingPage() {
//     return (
//         <section className="hero-section">
//             <article className="hero-article">
//                 <h1>MLB Hall of fame predictor</h1>
//                 <p>Predicting Tomorrow's Stars</p>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, atque?</p>
//                 <Link to='/predict'>Start Predicting</Link>
//             </article>
//         </section>
//     )
// }

// export default LandingPage
