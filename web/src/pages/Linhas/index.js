import React, {useState} from 'react';
import { Container, Card, ListGroup, Form, FormControl, Button } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { useHistory } from 'react-router-dom';

export default function Linhas(props) {

    const busca = props.location.state.busca;
    const history = useHistory();

    const [filtro, setFiltro] = useState(busca);
    const [value, setValue] = useState('');

    function handleGoBack() {
        history.goBack();
    }

    function onChange(e){
        setValue(e.target.value);
        if(e.target.value.length > 0 ){
            setFiltro(busca.filter(item => { return item.lt.match(e.target.value)}))
        }else{
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
                        <h3>Buscar por Linhas</h3>
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
                        <ListGroup variant="flush">
                            {
                                filtro.map(item => {
                                    return <ListGroup.Item key={item.cl}>
                                                {item.lt} <br/>
                                                {item.sl === 1 ? 
                                                <p>
                                                    {item.tp}<FaArrowRight color="green"/>{item.ts}
                                                </p> :
                                                 <p>
                                                 {item.ts}<FaArrowRight color="green"/>{item.tp}
                                             </p> 
                                                }
                                            </ListGroup.Item>
                                })
                            }
                        </ListGroup>
                        
                    </Card>
                    </Container>


            </Card>
        </Container>
    )
}