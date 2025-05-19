function PlayerCompSection({ viewResults, viewGraph, viewPlayerComp, playerCompStats, formState }) {
    console.log("State below is from the form: ")
    console.log(formState)
    return (
        <section className="results-section">
            <article className="btn-container">
                <button onClick={viewResults}>View Results</button>
                <button onClick={viewGraph}>View Graph</button>
                <button onClick={viewPlayerComp}>View Player Comp</button>
            </article>
            <h1>View Your Player Comparison</h1>
            <article className="comparison-section">
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
                        <td>User input player</td>
                        <td>{formState.YRS}</td>
                        <td>{formState.G}</td>
                        <td>{formState.H}</td>
                        <td>{formState.HR}</td>
                        <td>{formState.RBI}</td>
                        <td>{formState.BA}</td>
                    </tbody>
                </table>
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

export default PlayerCompSection