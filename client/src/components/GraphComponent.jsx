
import BarGraph from "./BarChart"
function GraphComponent({ viewResults, viewGraph, viewPlayerComp, graphStats }) {
    return (
        <section className="graph-section">
            <article className="btn-container">
                <button onClick={viewResults}>View Results</button>
                <button onClick={viewGraph}>Model Statistic Graph</button>
                <button onClick={viewPlayerComp}>View Player Comp</button>
            </article>
             <p>Checkout what player statistic most influenced your prediction</p>
            <BarGraph
                graphStats={graphStats}
            />
        </section>
            

    )
}

export default GraphComponent


// import BarGraph from "./BarChart"
// function GraphComponent({ viewResults, viewGraph, viewPlayerComp, graphStats }) {
//     return (
//         <>
//             <div className="btn-container">
//                 <button onClick={viewResults}>View Results</button>
//                 <button onClick={viewGraph}>View Graph</button>
//                 <button onClick={viewPlayerComp}>View Player Comp</button>
//             </div>

        
//             <BarGraph
//                 graphStats={graphStats}
//             />
//         </>

//     )
// }

// export default GraphComponent

