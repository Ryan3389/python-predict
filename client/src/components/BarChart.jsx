import { Bar, Chart } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Legend
} from "chart.js"
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Legend
)

const barChartData = {
    labels: ["Years", "Games", "Hits", "Doubles", "Home Runs", "RBI", "Batting Average"],
    datasets: [
        {
            label: "Player Stats",
            data: [2, 1, 0.5, -1, 0.8, 0.9, 1],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(54, 162, 235, 1",
            borderWidth: 1
        }
    ]
}

function BarGraph({ graphStats }) {
    const options = {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 2, // width / height
    };

    return (
        <>
            <article className='bar-chart-wrapper'>
                <Bar className="bar-chart" options={options} data={graphStats} />
            </article>

        </>
    )
}
export default BarGraph