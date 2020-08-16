import React, { useState } from 'react';
import Detail from '../../layouts/Detail';
import { Container, Card, Col,Accordion,ListGroup, Form, FormControl, Button } from 'react-bootstrap';
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
       
              <Detail title="Buscar por paradas">

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
                                    onChange={onChange}
                                />
                            </Form>
                        </Card.Header>
                        <ListGroup >

                            {
                                filtro.map(item => {
                                    return (
                                          <ListGroup.Item key={item.cp}>
                                              <strong> {item.np} </strong><br/>
                                               {item.ed} 
                                          </ListGroup.Item>
                                    )

                                })
                            }
                        </ListGroup>

                    </Card>
                </Col>
                </Container>

                </Detail>
    )
}