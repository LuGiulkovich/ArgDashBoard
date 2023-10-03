import './App.css';
import { AmaOca } from './componentes/AmaOca';
import BarraClima from './componentes/BarraClima';
import { CalidadAire } from './componentes/CalidadAire';
import { EstadoViento } from './componentes/EstadoViento';
import { HoyDia } from './componentes/HoyDia';
import { Humedad } from './componentes/Humedad';
import { MinimaMaxima } from './componentes/MinimaMaxima';
import { UvIndex } from './componentes/UvIndex';
import { Visibilidad } from './componentes/Visibilidad';

function App() {
  return (
    <div className="Dash-clima Flex">
      <div className='Datos-importantes Grid W-40'>
        <p>Temperatura Actual</p>
        <HoyDia />
        <MinimaMaxima />
      </div>
      <div className='Datos-varios'>
        <div className='Grid'>
          <h1 className='Letra-fff'>Hoy</h1>
          <BarraClima />
        </div>
        <h1 className='Letra-fff'>Reflejos</h1>
        <div className='Grid Gap-10'>
          <div className='Flex Gap-10'>
            <UvIndex />
            <EstadoViento />
            <AmaOca />
          </div>
          <div className='Flex Gap-10'>
            <Humedad />
            <Visibilidad />
            <CalidadAire />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;