import React, { useState } from 'react';
import {Form, FormControl, Button, Card} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import api from '../../../../../../services/api';

export default function CardComponent(props) {

    const { title, placeholder, path, linhas, paradas } = props;

    const history = useHistory();

    const [value, setValue] = useState('');

    function buscarLinhas(){
        api.get(`Linha/Buscar?termosBusca=${value}`)
            .then(response => {
                if(response.data == []){
                    alert("Informe um valor válido!")
                }else{
                    history.push({
                        pathname: path,
                        state : {
                            busca: response.data
                        }
                    });
                }
            })
            .catch(function(error) {

            })
    }

    function onSubmit(e){
        e.preventDefault()

        if(linhas){
            buscarLinhas();
        }

    }

    return (
        <Card body style={{
            width: "23rem"
        }}>
            <Card.Title>{title}</Card.Title>
            <Form inline onSubmit={onSubmit}>
                <FormControl
                    type="text"
                    placeholder={placeholder}
                    className="mr-sm-2"
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value)
                    }}
                />
                <Button variant="outline-success" type="submit">Search</Button>
            </Form>
        </Card>
    )
}