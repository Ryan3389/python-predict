
import BarGraph from "./BarChart"
function GraphComponent({ viewResults, viewGraph, viewPlayerComp, graphStats }) {
    return (
        <>
            <div className="btn-container">
                <button onClick={viewResults}>View Results</button>
                <button onClick={viewGraph}>View Graph</button>
                <button onClick={viewPlayerComp}>View Player Comp</button>
            </div>

            <BarGraph
                graphStats={graphStats}
            />
        </>

    )
}

export default GraphComponent

// import BarGraph from "./BarChart"
// function GraphComponent({ viewResults, viewGraph, viewPlayerComp, graphStats }) {
//     return (
//         <>
//             <article className="btn-container">
//                 <button onClick={viewResults}>View Results</button>
//                 <button onClick={viewGraph}>View Graph</button>
//                 <button onClick={viewPlayerComp}>View Player Comparison</button>
//             </article>
//             <BarGraph
//                 graphStats={graphStats}
//             />
//         </>

//     )
// }

// export default GraphComponent

