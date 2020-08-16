import React, { useState } from 'react';
import TooltipComponent from '../../../components/Tooltip';
import {Col, Row, Card, Button} from 'react-bootstrap';
import MapComponent from './components/Map';
import SearchParada from './components/SearchParada';
import {FaEyeSlash, FaTrash} from 'react-icons/fa'


export default function BuscarParadas(props) {

    const {} = props;

    const [paradas, setParadas] = useState([]);

    const [ocultar, setOcultar] = useState(false);

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
                    {
                        paradas.length > 0 &&
                        <>
                        <Button
                        variant="outline-success"
                        style={{margin: 5}}
                        onClick={() => {
                            setOcultar(!ocultar)
                        }}
                        ><FaEyeSlash/> ocultar</Button>
                        <Button variant="outline-danger" onClick={() => {
                            setParadas([]);
                        }}><FaTrash/></Button>
                        </>
                    }
                    
                </Card>
        </Row>
            <Row style={{
                justifyContent: "center",
                display: "flex",
                marginTop: 20
            }}>
                <MapComponent
                    paradas={ocultar ? [] : paradas}
                />
            </Row>
        </Col>
    )
}