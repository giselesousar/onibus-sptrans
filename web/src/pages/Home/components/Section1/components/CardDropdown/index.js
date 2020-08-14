import React, { useState, useEffect } from 'react';
import {Form, FormControl, Button, Card} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import api from '../../../../../../services/api';

export default function CardDropdown(props) {

    const { title, path  } = props;

    const history = useHistory();

    const [corredores, setCorredores] = useState([]);
    const [value, setValue] = useState('');

    function onSubmit(){
        history.push({
            pathname: path,
            state: {
                codigo: value
            }
        })
    }

    function loadCorredores(){
        api.get("Corredor")
            .then(response => {
                setCorredores(response.data);
            })
            .catch(function(error) {

            })
    }
    useEffect(() => {
        loadCorredores();
    }, [])

    return (
        <Card body style={{
            width: "23rem"
        }}>
            <Card.Title>{title}</Card.Title>
            <Form inline onSubmit={onSubmit}>
            <Form.Control 
                style={{width: "15em"}} 
                as="select"
                onChange={(e) => {
                    setValue(e.target.value);
                }}
                
            >
                {
                    corredores.map(corredor => {
                        return(
                            <option value={corredor.cc} key={corredor.cc}>{corredor.nc}</option>
                        )
                    })
                }
                </Form.Control>
                <Button variant="outline-success" type="submit">Search</Button>
            </Form>
        </Card>
    )
}