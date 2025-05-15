function PredictionResults({ viewResults, viewGraph, viewPlayerComp, results }) {
    return (
        <section className="results-section">
            <div className="btn-container">
                <button onClick={viewResults}>View Results</button>
                <button onClick={viewGraph}>View Graph</button>
                <button onClick={viewPlayerComp}>View Player Comp</button>
            </div>

            <h2>Results</h2>
            <p>{results}</p>
        </section>
    )
}

export default PredictionResults