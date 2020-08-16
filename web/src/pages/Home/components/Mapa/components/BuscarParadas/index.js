import React, { useState } from 'react';
import TooltipComponent from '../../../components/Tooltip';
import {Col, Row, Card, Button} from 'react-bootstrap';
import MapComponent from './components/Map';
import SearchParada from './components/SearchParada';


export default function BuscarParadas(props) {

    const {} = props;

    const [paradas, setParadas] = useState([]);

    return (
        <Col>
        <Row>
                <Card style={{
                    width: "100%"
                }} body>
                    <h4>Mostrar paradas no mapa <TooltipComponent content="Informe o código da linha para vizualizar a posição dos veículos dessa linha no mapa" /></h4>
                    <SearchParada
                        setParadas={setParadas}
                    />
                    
                </Card>
        </Row>
            <Row style={{
                justifyContent: "center",
                display: "flex",
                marginTop: 20
            }}>
                <MapComponent
                    paradas={paradas}
                />
            </Row>
        </Col>
    )
}