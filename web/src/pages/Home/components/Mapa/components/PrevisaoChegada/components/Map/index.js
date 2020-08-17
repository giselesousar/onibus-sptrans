import React, {useRef, useEffect} from 'react';
import { Map, TileLayer, Marker, Popup  } from 'react-leaflet';
import {pointerBusIcon, busIcon} from './components/Icons';

export default function MapComponent(props) {
    const { resultados } = props;

    const mapRef = useRef();
    const didMountRef = useRef(false) 
    useEffect(() => {
        if (didMountRef.current) { 
        if (mapRef.current) {
            mapRef.current.leafletElement.invalidateSize(false);
        }
        } 
        else didMountRef.current = true
    })

    return (
        <Map center={[-23.692865, -46.77835]} zoom={12} ref={mapRef} >
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {resultados &&
            <>
            <Marker position={[resultados.p.py, resultados.p.px]} icon={pointerBusIcon}>
                <Popup>
                    {resultados.p.np}
                </Popup>
            </Marker>
            {resultados.p.l && 
            resultados.p.l.map(linha => {
                return(
                    linha.vs.map(veiculo => {
                        return (
                            <Marker position={[veiculo.py, veiculo.px]} icon={busIcon}>
                                <Popup>
                                    {linha.c}<br/>
                                    Sentido: {linha.sl == "1" ? 
                                        "Terminal Principal para Terminal Secundário":
                                        "Terminal Secundário para Terminal Principal"
                                    }<br/>
                                    Origem: {linha.lt1}<br/>
                                    Destino: {linha.lt0}<br/>
                                    Previsão de chegada: {veiculo.t}
                                </Popup>
                            </Marker>
                        )
                    })

                    
                )
            })
        }
            </>
            }
        </Map>
    )
}
