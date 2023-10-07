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

export const GaugeChart = ({siUvIndexMax}) => {

    const uvIndex = siUvIndexMax;
    const totalUv = 11 - siUvIndexMax;

    const data = {
        labels: ['Uv'],
        datasets: [{
            data: [uvIndex, totalUv],
            backgroundColor: [ '#7c73e6' , '#feeae3'],
            borderColor: ['#fff', '#fff'],
            borderRadius: 10,
            // Para hacerlo como un velocimetro haz lo de abajo
            circumference: 180,
            rotation: 270
        }]
    }

    const options = {
        plugins: {
            legend: {
              display: false // Establece display en false para ocultar las leyendas
            },
          },
    }

    const textoUv = {
        id: 'textoUv',
        beforeDatasetsDraw(chart) {
            const {ctx} = chart;

            const xCenter = chart.getDatasetMeta(0).data[0].x;
            const yCenter = chart.getDatasetMeta(0).data[0].y;

            ctx.save();
            ctx.fillStyle = '#430f59';
            ctx.font = '12px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'baseline';
            ctx.fillText(siUvIndexMax, xCenter, yCenter)
        }
    }

  return (
    <Doughnut data={data} options={options} plugins={[textoUv]}/>
  )
}
