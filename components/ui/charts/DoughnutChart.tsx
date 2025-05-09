'use client';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart( { accounts }: DoughnutChartProps) {

    // Bank account names
    const accountNames = accounts.map((a) => a.name);

    // Bank account balances
    const balances = accounts.map((a) => a?.currentBalance);

    const data = {
        datasets: [
            {
                label: "Banks",
                data: balances,
                backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
            }
        ],
        labels: accountNames
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