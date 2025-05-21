import { Link } from "react-router-dom"
import mlbLogo from '../assets/mlbLogo.webp'
function LandingPage() {
    return (
        <section className="hero-section">
            <article className="hero-intro">
                <h1>Welcome to Baseball <br />Hall of Fame Predictor</h1>
                <p>Welcome to LegendMeter. Enter your favourite players career stats, and predict if they will make it into the Hall of Fame. This AI model is trained with player stats from MLB's top 500 hits.</p>
                <Link to={"/predict"} className="cta-link">Start Predicting</Link>
            </article>
            <img src={mlbLogo} alt="MLB Logo" className="hero-img" />
        </section>
    )
}

export default LandingPage
