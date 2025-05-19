
import Form from "../components/Form"
import { useState } from "react"
import BarGraph from "../components/BarChart"
import PredictionResults from "../components/PredictionResults"
import PlayerCompSection from "../components/PlayerComp"
import GraphComponent from "../components/GraphComponent"
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
        playerName: "",
        YRS: null,
        G: null,
        H: null,
        doubles: null,
        homeRuns: null,
        RBI: null,
        BA: null
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
                        borderColor: "rgba(54, 162, 235, 1)",
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
                    <PredictionResults
                        viewResults={handleViewResults}
                        viewGraph={handleViewGraph}
                        viewPlayerComp={handleViewPlayerComp}
                        results={predictResults}
                        playerCompStats={playerCompStats}
                    />
                    :
                    pageLayout === "graph" ?
                        <GraphComponent
                            graphStats={graphData}
                            viewResults={handleViewResults}
                            viewGraph={handleViewGraph}
                            viewPlayerComp={handleViewPlayerComp}

                        />
                        :
                        <PlayerCompSection
                            playerCompStats={playerCompStats}
                            viewResults={handleViewResults}
                            viewGraph={handleViewGraph}
                            viewPlayerComp={handleViewPlayerComp}
                            formState={formState}
                        />
            }
        </>
    )
}

export default PredictPage
