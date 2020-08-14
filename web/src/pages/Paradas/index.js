import React, { useState } from 'react';
import { Container, Card, Accordion,ListGroup, Form, FormControl, Button } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { useHistory } from 'react-router-dom';

export default function Paradas(props) {

    const busca = props.location.state.busca;

    const history = useHistory();

    const [filtro, setFiltro] = useState(busca);
    const [value, setValue] = useState('');

    function handleGoBack() {
        history.goBack();
    }

    function onChange(e) {
        setValue(e.target.value);
        if (e.target.value.length > 0) {
            setFiltro(busca.filter(item => { return item.np.toLowerCase().match(e.target.value.toLowerCase()) || item.ed.toLowerCase().match(e.target.value.toLowerCase()) }))
        } else {
            setFiltro(busca);
        }
    }

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
                        <h3>Buscar por Paradas</h3>
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
                                    onChange={onChange}
                                />
                            </Form>
                        </Card.Header>
                        <ListGroup >

                            {
                                filtro.map(item => {
                                    return (
                                          <ListGroup.Item key={item.cp}>
                                               {item.np} 
                                          </ListGroup.Item>
                                    )

                                })
                            }
                        </ListGroup>

                    </Card>
                </Container>


            </Card>
        </Container>
    )
}