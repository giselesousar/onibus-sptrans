import React from 'react';
import { Row, Col, Tab, ListGroup, Container } from 'react-bootstrap';

import BuscarOnibus from './components/BuscarOnibus';
import BuscarParadas from './components/BuscarParadas';

export default function Mapa(props) {

    return (
        <Container style={{ marginTop: 30, marginBottom: 30 }}>
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
                            justifyContent: "center",
                            marginTop: 20
                        }}>
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
                <Col sm={4}>
                    <ListGroup>
                        <ListGroup.Item variant="success" action href="#link1">
                            Buscar ônibus
        </ListGroup.Item>
                        <ListGroup.Item variant="success" action href="#link2">
                            Buscar paradas
        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col sm={8}>
                    <Tab.Content>
                        <Tab.Pane eventKey="#link1">
                            <BuscarOnibus/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link2">
                            <BuscarParadas/>
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