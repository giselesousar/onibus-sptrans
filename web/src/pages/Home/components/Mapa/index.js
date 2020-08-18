import React from 'react';
import { Row, Col, Tab, ListGroup, Container } from 'react-bootstrap';

import BuscarOnibus from './components/BuscarOnibus';
import BuscarParadas from './components/BuscarParadas';
import PrevisaoChegada from './components/PrevisaoChegada';

export default function Mapa(props) {

    return (
        <Container style={{ marginTop: 50 }}>
                    <Row style={{
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <h1>Ver no mapa</h1>
                    </Row>
                    <Row style={{
                        marginTop: 30,
                        width: "100%"
                    }}>
                        <Col md={12} xs={12} style={{
                            alignItems: "center",
                            marginTop: 5
                        }}>
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#onibus">
            <Row>
                <Col sm={4}>
                    <ListGroup>
                        <ListGroup.Item variant="success" action href="#onibus">
                            Buscar ônibus
        </ListGroup.Item>
                        <ListGroup.Item variant="success" action href="#paradas">
                            Buscar paradas
        </ListGroup.Item>
                        <ListGroup.Item variant="success" action href="#previsao">
                            Previsão de chegada
        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col sm={8}>
                    <Tab.Content>
                        <Tab.Pane eventKey="#onibus">
                            <BuscarOnibus/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#paradas">
                            <BuscarParadas/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#previsao">
                            <PrevisaoChegada/>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
        </Col>
    </Row>
    </Container>
    )
}