import { Link } from "react-router-dom"
function LandingPage() {
    return (
        <section className="hero-section">
            <article className="hero-article">
                <h1>MLB Hall of fame predictor</h1>
                <p>Predicting Tomorrow's Stars</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, atque?</p>
                <Link to='/predict'>Start Predicting</Link>
            </article>
        </section>
    )
}

export default LandingPage
