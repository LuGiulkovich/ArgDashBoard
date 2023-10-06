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



export default function BarraClima({ siHorarios, siTemperatura }) {

  const hora = siHorarios;
  let dia;
  let horas = [];

  // para ver como se comporta el grafico de linea le tengo que pasar los datos
  const temperatura = siTemperatura;

  function separarDatos (elemento) {
    dia = elemento.slice(11, 16);
    horas.push(dia);
  }

  hora.forEach(separarDatos);

  // data: como se muestra mi grafica
  var midata = {
    labels: horas,
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
        max: 35,
      },
      x: {
        ticks: { color: "#fff" },
      },
    },
  };

  return (
    <div>
      <Bar data={midata} options={mioptions} />
    </div>
  );
}
