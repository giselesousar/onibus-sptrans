import React, {useRef, useEffect} from 'react';
import { Map, TileLayer } from 'react-leaflet';
import Paradas from './components/Paradas';

export default function MapComponent(props) {
    const { paradas } = props;

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
            {paradas.length > 0 && <Paradas paradas={paradas}/>}
        </Map>
    )
}
