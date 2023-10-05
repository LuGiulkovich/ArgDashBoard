import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

import { Doughnut } from 'react-chartjs-2';

ChartJS.register (
    ArcElement,
    Tooltip,
    Legend
);

export const GaugeChart = () => {

    const uvIndex = 6;

    const data = {
        labels: ['Uv'],
        datasets: [{
            data: [uvIndex, 11],
            backgroundColor: [ '#7c73e6' , '#feeae3'],
            borderColor: ['#fff', '#fff'],
            borderRadius: 10,
            // Para hacerlo como un velocimetro haz lo de abajo
            circumference: 180,
            rotation: 270
        }]
    }

    const options = {
    }

    const textoUv = {
        id: 'textoUv',
        beforeDatasetsDraw(chart) {
            const {ctx} = chart;

            const xCenter = chart.getDatasetMeta(0).data[0].x;
            const yCenter = chart.getDatasetMeta(0).data[0].y;

            ctx.save();
            ctx.fillStyle = '#430f59';
            ctx.font = 'bold 30px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'baseline';
            ctx.fillText(uvIndex, xCenter, yCenter)
        }
    }

  return (
    <Doughnut data={data} options={options} plugins={[textoUv]}/>
  )
}