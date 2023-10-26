import React, {useState, useEffect} from 'react';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import Buses from '../Json/transporteApi1.json';

export const DashTransporte = () => {

    const position = [-34.65629, -58.65038]

const bus1 = [Buses[0].latitude, Buses[0].longitude ];
const bus2 = [Buses[1].latitude, Buses[1].longitude ];
const bus3 = [Buses[2].latitude, Buses[2].longitude ];

    /*const {segundos, setSegundos} = useState(0);*/

    /*useEffect(() => {
        const intervalo = setInterval(() => {
            fetch()...then
        }, 3100);
        return () => clearInterval(intervalo);
    }, []);*/

    return (
        <div className='Dash-trans'>
            <MapContainer center={position} zoom={11} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={bus1}>
                    <Popup>
                        Bus 1
                    </Popup>
                </Marker>
                <Marker position={bus2}>
                    <Popup>
                        Bus 2
                    </Popup>
                </Marker>
                <Marker position={bus3}>
                    <Popup>
                        Bus 3
                    </Popup>
                </Marker>
            </MapContainer>
        </div>

    )
}