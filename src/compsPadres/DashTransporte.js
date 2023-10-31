import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import Buses from '../Json/transporteApi1.json';
import sunrise from '../iconos/sunrise.svg';

export const DashTransporte = () => {


    const numeros = Buses.map((bus) => bus.agency_id);
    console.log(numeros);

    /** Filtro por agencia id  */
    const busId60 = Buses.filter((bus) => bus.agency_id === 60).slice(0, 11);
    const busId82 = Buses.filter((bus) => bus.agency_id === 82).slice(0, 11);
    const busId72 = Buses.filter((bus) => bus.agency_id === 72).slice(0, 11);
    const busId63 = Buses.filter((bus) => bus.agency_id === 63).slice(0, 11);
    const busId14 = Buses.filter((bus) => bus.agency_id === 14).slice(0, 11);
    
    const todasLineas = busId60.concat(busId82, busId72, busId63, busId14);
    
    

    /** Determino la posicion para que este siempre centrado */
    const latitudes = todasLineas.map((lat) => lat.latitude);
    const longitudes = todasLineas.map((lon) => lon.longitude);

    let sumaLats = 0;
    let sumaLogs = 0;

    let cantLats = latitudes.length;
    let cantLogs = longitudes.length;


    for (let i = 0; i < latitudes.length; i++) {
        sumaLats += latitudes[i];
    }

    for (let i = 0; i < longitudes.length; i++) {
        sumaLogs += longitudes[i];
    }

    let promedioLat = sumaLats / cantLats;
    let promedioLong = sumaLogs / cantLogs;

    const position = [promedioLat, promedioLong];

    /** Ajusto el zoom */
    console.log(sumaLats);

    let zoomPromedio = 0;

    if (sumaLats < -1900) {
        zoomPromedio = 10;
    }

    /*const {segundos, setSegundos} = useState(0);*/

    /*useEffect(() => {
        const intervalo = setInterval(() => {
            fetch()...then
        }, 3100);
        return () => clearInterval(intervalo);
    }, []);*/

    return (
        <div className='Dash-trans'>
            {/* <div className='Flex'>
                <label form='lineas'>Linea:</label>
                <div>
                    <select name='lineas' id='lineas'>
                        {Buses.map((linea) => {
                            return (
                                <option>{linea["agency_name"]}</option>
                            )
                        })}
                    </select>
                </div>
            </div> */}
            <MapContainer center={position} zoom={zoomPromedio} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {todasLineas.map((item, index) => {
                    return (
                        <Marker key={index} position={[item["latitude"], item["longitude"]]}>
                            <Popup>
                                Agencia: {item["agency_name"]}.
                                Linea N°: {item["agency_id"]}, Velocidad: {item["speed"]}Km.
                            </Popup>
                        </Marker>
                    );
                })}
            </MapContainer>
        </div >

    )
}