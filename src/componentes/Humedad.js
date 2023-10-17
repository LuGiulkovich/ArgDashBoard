import React from 'react'
import humedadIcon from '../iconos/humidity.svg';

export const Humedad = ({ siClimaDatos }) => {

  let humedad;
  const siUniHumedad = siClimaDatos["current_units"]["relativehumidity_2m"];
  const pseudoHumedad = siClimaDatos["current"]["relativehumidity_2m"];

  const rangoHumedad = ["Seco", "Normal", "Húmedo"];

  if (pseudoHumedad > 0 && pseudoHumedad <= 40) {
    humedad = rangoHumedad[0];
  } else if (pseudoHumedad > 40 && pseudoHumedad<= 60) {
    humedad = rangoHumedad[1];
  } else if (pseudoHumedad > 60) {
    humedad = rangoHumedad[2];
  }

  return (
    <div className='Humedad Back-fff Radius-10 Flex Around'>  
        <div className='Grid'>
          <p className='Letra-gris p-Humedad'>Humedad</p>
          <h1 className='Letra-35'>{pseudoHumedad}<span>{siUniHumedad} {humedad}</span></h1>
        </div>
        <img src={humedadIcon}  alt='Humedad Icono' width={'101px'}/>
    </div>
  )
}
