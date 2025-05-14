import { Link } from "react-router-dom"
import mlbLogo from '../assets/mlbLogo.webp'
function LandingPage() {
    return (
        <section className="hero-section">
            <article className="hero-intro">
                <h1>Welcome to Best <br />Basketball Acadamy</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eaque fuga expedita! Aliquid asperiores alias aut quas id, impedit praesentium similique ipsa fugit. Facere, cum?</p>
                <Link to={"/predict"} className="cta-link">Start Predicting</Link>
            </article>
            <img src={mlbLogo} alt="MLB Logo" className="hero-img" />
        </section>
    )
}
// function LandingPage() {
//     return (
//         <section className="hero-top">
//             {/* <article className="hero-article">

//             </article>

//             <article className='img-article'>
//                 <h1>Predicting Tomorrow's Stars</h1>
//                 <Link className="btn" to="/predict">Start Predicting</Link>
//             </article> */}
//         </section>
//     )
// }

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
