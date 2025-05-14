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

            }
        </>
    )
}

export default PredictPage
// import Form from "../components/Form"
// import { useState } from "react"
// import BarGraph from "../components/BarChart"
// function PredictPage() {
//     const [formState, setFormState] = useState({
//         YRS: null,
//         G: null,
//         H: null,
//         doubles: null,
//         HR: null,
//         RBI: null,
//         BA: null

//     })
//     const [pageLayout, setPageLayout] = useState("form")
//     const [predictResults, setPredictResults ] = useState(null)
//     const [graphData, setGraphData] = useState(null)

//     const handleChange = (e) => {
//         const { name, value } = e.target
//         setFormState({
//             ...formState,
//             [name]: value
//         })
//     }

//     const handleFormSubmit = async (e) => {
//         e.preventDefault()

//         try {
//             const response = await fetch('/api/predict', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(formState)
//             })
//             if (!response.ok) {
//                 throw new Error("Failed to submit form")
//             }

//             const barChartData = {
//                labels: ["Years", "Games", "Hits", "Doubles", "Home Runs", "RBI", "Batting Average"],
//                datasets: [
//                 {
//                     label: "Player Stats",
//                     data: [2, 1, 0.5, -1, 0.8, 0.9, 1],
//                     backgroundColor: "rgba(255, 99, 132, 0.2)",
//                     borderColor: "rgba(54, 162, 235, 1",
//                     borderWidth: 1
//                 }
//                ]
//             }

//             setGraphData(barChartData)
//             const data = await response.json()

//             const featureImportances = JSON.parse(data.feature_importances)
//             const results = data.prediction
//             setPredictResults(results)
//             // console.log(featureImportances)

//             setPageLayout("prediction")
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     const fields = [
//         { name: "YRS", type: "text", label: "Years", placeholder: "24" },
//         { name: "G", type: "text", label: "Games", placeholder: "162" },
//         { name: "H", type: "text", label: "hits", placeholder: "1000" },
//         { name: "doubles", type: "text", label: "Doubles", placeholder: "162" },
//         { name: "HR", type: "text", label: "Home Runs", placeholder: "24" },
//         { name: "RBI", type: "text", label: "RBI", placeholder: "162" },
//         { name: "BA", type: "text", label: "Batting Average", placeholder: "162" },
//     ]

//     return (
//        <>
//         {pageLayout === "form" ?
//         <section className="form-section">
//             <h1>Enter your Favourite Players Stats</h1>
//             <Form
// fields={fields}
// formData={formState}
// handleChange={handleChange}
// handleFormSubmit={handleFormSubmit}
//             />
//         </section>
//         :
//         <section className="results-section">
//             <article>
//                 <h2>Results</h2>
//                 <p>{predictResults}</p>
//             </article>
//         </section>
//         }
//        </>
//     )
// }

// export default PredictPage
