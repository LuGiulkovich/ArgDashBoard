import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// para ver como se comporta el grafico de linea le tengo que pasar los datos
var temperatura = [18, 15, 18, 21, 30, 25, 20, 18, 15];
var hora = [
  "12:00 AM",
  "3:00 AM",
  "6:00 AM",
  "9:00 AM",
  "12:00 PM",
  "3:00 PM",
  "6:00 PM",
  "9:00 PM",
  "12:00 AM",
];

// data: como se muestra mi grafica
var midata = {
  labels: hora,
  // datasets es un array
  datasets: [
    //cada una de las lineas del grafico
    {
      label: "Temperatura",
      data: temperatura,
      backgroundColor: "#fff",
      borderRadius: 50,
    },
  ],
};

// option: como funciona mi grafica
var mioptions = {
  responsive: true,
  scales: {
    y: {
      min: 0,
      max: 40,
    },
    x: {
      ticks: { color: "#fff" },
    },
  },
};

export default function BarraClima() {
  return (
    <div>
      <Bar data={midata} options={mioptions}/>
    </div>    
  );
}
