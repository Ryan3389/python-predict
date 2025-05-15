import Form from "../components/Form"
import { useState } from "react"
import BarGraph from "../components/BarChart"
function PredictPage() {
    const [formState, setFormState] = useState({
        YRS: null,
        G: null,
        H: null,
        doubles: null,
        HR: null,
        RBI: null,
        BA: null

    })
    const [playerCompStats, setPlayerCompStats] = useState({
        playerName: "", // Works
        YRS: null,
        G: null,
        H: null,
        doubles: null,
        homeRuns: null,
        RBI: null, // Works
        BA: null // Works
    })
    const [pageLayout, setPageLayout] = useState("form")
    const [predictResults, setPredictResults] = useState(null)
    const [graphData, setGraphData] = useState(null)


    const handleChange = (e) => {
        const { name, value } = e.target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch('/api/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formState)
            })
            if (!response.ok) {
                throw new Error("Failed to submit form")
            }

            const barChartData = {
                labels: ["Years", "Games", "Hits", "Doubles", "Home Runs", "RBI", "Batting Average"],
                datasets: [
                    {
                        label: "Player Stats",
                        data: [0.40, 0.02, 0.82, -0.27, 0.3, -0.02, 1.077],
                        backgroundColor: "rgba(255, 99, 132, 0.2)",
                        borderColor: "rgba(54, 162, 235, 1",
                        borderWidth: 1
                    }
                ]
            }

            const data = await response.json()
            const featureImportances = JSON.parse(data.feature_importances)
            const results = data.prediction
            const playerComp = JSON.parse(data.player_comp)
            setPlayerCompStats({
                playerName: playerComp.PLAYER,
                YRS: playerComp.YRS,
                G: playerComp.G,
                H: playerComp.H,
                HR: playerComp.HR,
                RBI: playerComp.RBI,
                BA: playerComp.BA,
            })
            console.log("PLAYER COMPARISON STATE : ")
            console.log(playerCompStats)

            setGraphData(barChartData)
            setPredictResults(results)
            setPageLayout("graph")
        } catch (error) {
            console.log(error)
        }
    }
    const fields = [
        { name: "YRS", type: "text", label: "Years", placeholder: "24" },
        { name: "G", type: "text", label: "Games", placeholder: "162" },
        { name: "H", type: "text", label: "hits", placeholder: "1000" },
        { name: "doubles", type: "text", label: "Doubles", placeholder: "162" },
        { name: "HR", type: "text", label: "Home Runs", placeholder: "24" },
        { name: "RBI", type: "text", label: "RBI", placeholder: "162" },
        { name: "BA", type: "text", label: "Batting Average", placeholder: "162" },
    ]

    const handleViewResults = () => {
        setPageLayout("prediction")
    }

    const handleViewGraph = () => {
        setPageLayout("graph")
    }

    const handleViewPlayerComp = () => {
        setPageLayout("comp")
    }

    return (
        <>
            {pageLayout === "form" ?
                <section className="form-section">
                    <Form
                        fields={fields}
                        formData={formState}
                        handleChange={handleChange}
                        handleFormSubmit={handleFormSubmit}
                    />
                </section>
                :
                pageLayout === "prediction" ?
                    <section className="results-section">
                        <div className="btn-container">
                            <button onClick={handleViewResults}>View Results</button>
                            <button onClick={handleViewGraph}>View Graph</button>
                        </div>

                        <h2>Results</h2>
                        <p>{predictResults}</p>
                    </section>
                    :
                    pageLayout === "graph" ?
                        <>
                            <div className="btn-container">
                                <button onClick={handleViewResults}>View Results</button>
                                <button onClick={handleViewGraph}>View Graph</button>
                                <button onClick={handleViewPlayerComp}>View Player Comparison</button>
                            </div>
                            <BarGraph
                                graphStats={graphData}
                            />
                        </>
                        :
                        <section className="player-comp-section">
                            <h1>View Your Player Comparison</h1>
                            <article>
                                <h3>Player Name: {playerCompStats.playerName}</h3>
                                <p>Years Played: {playerCompStats.YRS}</p>
                                <p>Games Played: {playerCompStats.G}</p>
                                <p>Career Hits Total: {playerCompStats.H}</p>
                                <p>Home Runs: {playerCompStats.HR}</p>
                                <p>Total Career RBI: {playerCompStats.RBI}</p>
                                <p>Career Batting Average: {playerCompStats.BA}</p>
                            </article>

                        </section>
            }
            {/* {pageLayout === "form" ?
                <section className="form-section">
                    <Form
                        fields={fields}
                        formData={formState}
                        handleChange={handleChange}
                        handleFormSubmit={handleFormSubmit}
                    />
                </section>
                : pageLayout === "prediction" ?
                    <section className="results-section">
                        <div className="btn-container">
                            <button onClick={handleViewResults}>View Results</button>
                            <button onClick={handleViewGraph}>View Graph</button>
                        </div>

                        <h2>Results</h2>
                        <p>{predictResults}</p>
                    </section>
                    :
                    <>
                        <div className="btn-container">
                            <button onClick={handleViewResults}>View Results</button>
                            <button onClick={handleViewGraph}>View Graph</button>
                        </div>
                        <BarGraph
                            graphStats={graphData}
                        />
                    </>

            } */}
        </>
    )
}

export default PredictPage
