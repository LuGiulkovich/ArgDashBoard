import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
);

// para ver como se comporta el grafico de linea le tengo que pasar los datos
var temperatura = [10, 8, 7, 10, 15, 20, 18, 16, 12];
var meses = ["12:00 AM", "3:00 AM", "6:00 AM", "9:00 AM", "12:00 PM", "3:00 PM", "6:00 PM", "9:00 PM", "12:00 AM"];

// data: como se muestra mi grafica
var midata = {
    labels: meses,
    // datasets es un array
    datasets: [ //cada una de las lineas del grafico
        {
            label: 'Temperatura',
            data: temperatura,
            tension: 0.5,
            fill: true,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgb(255, 99, 132, 0.5)',
            pointRadius: 5,
            pointBorderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
        },
    ],
};

// option: como funciona mi grafica
var mioptions = {
    scales: {
        y : {
            min : 0
        },
        x : {
            ticks: { color: 'blue'}
        }
    },
    plugins: {
        legend: {
            display : false
        }
    }
};

export default function LineChart() {
    return <Line data={midata} options={mioptions} />
}