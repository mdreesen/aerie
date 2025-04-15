import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);



export default function DoughnutChart( { accounts }: DoughnutChartProps) {

    const data = {
        datasets: [
            {
                label: "Banks",
                data: [1250, 1230, 1100, ...accounts],
                backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
            }
        ],
        labels: ['Chase Bank', 'Glacier Bank', 'Here Bank']
    }
    return <Doughnut
     data={data} 
     options={{
        cutout: '60%',
        plugins: {
            legend: {
                display: false
            }
        }
     }}
     />
}