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



export default function BarraClima({ siHorarios, siTemperatura, siMaxima }) {

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
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderColor: "#b300ff",
        borderWidth: 1,
        hoverBackgroundColor: "#fff",
        borderRadius: 50,
        hoverBorderColor: "#ff7b00",
        data: temperatura,
      },
    ],
  };

  // option: como funciona mi grafica
  var mioptions = {
    //maintainAspectRatio: false; me deja cambiarle el tamaño
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        min: 0,
        max: siMaxima,
        ticks: { color: "#fff" },
      },
      x: {
        ticks: { color: "#fff" },
      },
    },
  };

  return (
    <div className="TamañoBarra">
      <Bar data={midata} options={mioptions} />
    </div>
  );
}
