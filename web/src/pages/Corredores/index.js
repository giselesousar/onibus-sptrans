import React, { useState, useEffect } from 'react';
import Detail from '../../layouts/Detail';
import { Container, Card, Col,Accordion,ListGroup, Form, FormControl, Button } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

export default function Corredores(props) {

    const codigo = props.location.state.codigo;
    const history = useHistory();

    const [paradas, setParadas] = useState([]);
    const [value, setValue] = useState('');

    function handleGoBack() {
        history.goBack();
    }

    function loadParadas(){
        api.get(`Parada/BuscarParadasPorCorredor?codigoCorredor=${codigo}`)
            .then(response => {
                setParadas(response.data);
            })
            .catch(function(error){
                //erro
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
                                    type="text"
                                    placeholder="filtrar"
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