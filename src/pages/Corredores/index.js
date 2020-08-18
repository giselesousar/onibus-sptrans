import React, { useState, useEffect } from 'react';
import Detail from '../../layouts/Detail';
import { Container, Card, Col, ListGroup, Form, FormControl } from 'react-bootstrap';
import api from '../../services/api';

export default function Corredores(props) {

    const codigo = props.location.state.codigo;

    const [paradas, setParadas] = useState([]);
    const [value, setValue] = useState('');

    function loadParadas(){
        api.get(`Parada/BuscarParadasPorCorredor?codigoCorredor=${codigo}`)
            .then(response => {
                setParadas(response.data);
            })
            .catch(function(error){
                alert(error.message)
            })
    }

    useEffect(() => {
        loadParadas();
    },[])



    return (
        <Detail title="Paradas por corredor">
                <Container
                    style={{
                        display: "flex",
                        justifyContent: "center"
                    }}>
                    <Col>
                    <Card>
                        <Card.Header>
                            <Form inline >
                                <FormControl
                                style={{
                                    width:"100%"
                                }}
                                    type="text"
                                    placeholder="Filtrar"
                                    className="mr-sm-2"
                                    value={value}
                                />
                            </Form>
                        </Card.Header>
                    <ListGroup>
                        {paradas.map(parada => {
                            return(
                                <ListGroup.Item key={parada.cp}>
                                    <strong> {parada.np} </strong><br/>
                                        {parada.ed}
                                </ListGroup.Item>
                            )
                        })}
                    </ListGroup>
                    </Card>
                </Col>
                </Container>
            </Detail>
    )
}