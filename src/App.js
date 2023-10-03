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
    <div className="Dash-clima Grid">
      <div className='Datos-importantes Flex Gap-10'>
        <div className='Clima-Hoy Grid Gap-10'>
          <HoyDia />
          <MinimaMaxima />
        </div>
        <div className='Datos-Hoy Flex Gap-10'>
            <div className='Grid Gap-10'>
              <UvIndex />
              <Visibilidad />
              <AmaOca />
            </div>
            <div className='Grid Gap-10'>
              <Humedad />
              <EstadoViento />
              
              <CalidadAire />
            </div>
        </div>
      </div>
      <div className='Datos-barra'>
        <BarraClima />
      </div>
    </div>
  );
}

export default App;