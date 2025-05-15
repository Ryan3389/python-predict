import { Link } from "react-router-dom"
import mlbLogo from '../assets/mlbLogo.webp'
function LandingPage() {
    return (
        <section className="hero-section">
            <article className="hero-intro">
                <h1>Welcome to Baseball <br />Hall of Fame Predictor</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eaque fuga expedita! Aliquid asperiores alias aut quas id, impedit praesentium similique ipsa fugit. Facere, cum?</p>
                <Link to={"/predict"} className="cta-link">Start Predicting</Link>
            </article>
            <img src={mlbLogo} alt="MLB Logo" className="hero-img" />
        </section>
    )
}

export default LandingPage
