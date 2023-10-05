import './App.css';
import { AmaOca } from './componentes/AmaOca';
import BarraClima from './componentes/BarraClima';
import { CalidadAire } from './componentes/CalidadAire';
import { EstadoViento } from './componentes/EstadoViento';
import { HoyDia } from './componentes/HoyDia';
import { Humedad } from './componentes/Humedad';
import { Localidad } from './componentes/Localidad';
import { MinimaMaxima } from './componentes/MinimaMaxima';
import { UvIndex } from './componentes/UvIndex';
import { Visibilidad } from './componentes/Visibilidad';
import json from './Json/practico1.json';

function App() {

  /* HoyDia.js */
  const hoyTemperatura = json.current_weather.temperature;
  const ddMmFfHh = json.current_weather.time;
  const unidadHoy = json.hourly_units.temperature_2m;

  /* EstadoViento.js */
  const velocidadViento = json.current_weather.windspeed;
  const direccionViento = json.current_weather.winddirection;
  const unidadVelViento = json.hourly_units.windspeed_10m;

  /* MinimaMaxima.js */
  const unidadMin = json.daily_units.temperature_2m_min;
  const unidadMax = json.daily_units.temperature_2m_max;

  /* Localidad.js */
  const localidad = json.timezone;

  return (
    <div className="Dash-clima Grid">
      <div className='Datos-importantes Flex Gap-10'>
        <div className='Clima-Hoy Grid Gap-10'>
          <HoyDia siHoyTemperatura={hoyTemperatura}
            siDdMmFfHh={ddMmFfHh}
            siUniHoy={unidadHoy}
          />
          <Localidad siLocalidad={localidad}/>
          <MinimaMaxima siUniMin={unidadMin}
            siUniMax={unidadMax}
          />
        </div>
        <div className='Datos-Hoy Flex Gap-10'>
          <div className='Contenidos Grid '>
            <UvIndex />
            <Visibilidad />
            <Humedad />
          </div>
          <div className='Contenidos Grid'>
            <AmaOca />
            <EstadoViento siVelocidad={velocidadViento}
              siDireccion={direccionViento}
              siUnidadVelViento={unidadVelViento}
            />
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