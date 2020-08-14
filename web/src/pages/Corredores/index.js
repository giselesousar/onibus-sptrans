import React, { useState, useEffect } from 'react';
import { Container, Card, Accordion,ListGroup, Form, FormControl, Button } from 'react-bootstrap';
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
        <Container style={{
            display: "flex",
            justifyContent: "center"
        }}>
            <Card body style={{
                width: "80%",
                minHeight: "80vh",
                marginTop: 30,
                marginBottom: 30,

            }}>
                <Card.Title>
                    <Container style={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}>
                        <div style={{
                            cursor: "pointer"
                        }}
                            onClick={handleGoBack}
                        >
                            <FaArrowLeft />
                        </div>
                        <h3>Buscar por Corredores</h3>
                        <div></div>
                    </Container>
                </Card.Title>

                <Container
                    style={{
                        display: "flex",
                        justifyContent: "center"
                    }}>
                    <Card style={{ width: '80%' }}>
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
                                    {parada.np}
                                </ListGroup.Item>
                            )
                        })}
                    </ListGroup>
                    </Card>
                </Container>
            </Card>
        </Container>
    )
}