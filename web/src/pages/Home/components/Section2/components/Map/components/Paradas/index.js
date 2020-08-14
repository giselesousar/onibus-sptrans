import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import {pointerBusIcon} from '../Icons'


export default function Paradas(props){
    const { parada } = props;

    return(
        <>
          {parada && <Marker key={parada.cp} position={[parada.py, parada.px]} icon={pointerBusIcon}>
                        <Popup>
                            {parada.np}
                        </Popup>
                    </Marker>
           }  
                    
        </>
    )
}