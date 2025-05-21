import { Link } from "react-router-dom"
function PredictionResults({ viewResults, viewGraph, viewPlayerComp, results, playerCompStats, newPrediction }) {
    return (
        <section className="results-section">
            <article className="btn-container">
                <button onClick={viewResults}>View Results</button>
                <button onClick={viewGraph}>Model Statistic Graph</button>
                <button onClick={viewPlayerComp}>View Player Comparison</button>
            </article>

            <article className="prediction-results">
                <p>{results}</p>
                <button onClick={newPrediction} className="new-prediction-btn">Make a New Prediction</button>
            </article>

            <article className="results-player-comparable">
                <h2>Player Comparable</h2>
                <table className="content-table">
                    <thead>
                        <tr>
                            <th>Player Name</th>
                            <th>Years Played</th>
                            <th>Ganes Played</th>
                            <th>Total Hits</th>
                            <th>Home Runs</th>
                            <th>Total RBI</th>
                            <th>Career Batting Average</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td>{playerCompStats.playerName}</td>
                        <td>{playerCompStats.YRS}</td>
                        <td>{playerCompStats.G}</td>
                        <td>{playerCompStats.H}</td>
                        <td>{playerCompStats.HR}</td>
                        <td>{playerCompStats.RBI}</td>
                        <td>{playerCompStats.BA}</td>
                    </tbody>
                </table>
            </article>
        </section>
    )
}

export default PredictionResults
