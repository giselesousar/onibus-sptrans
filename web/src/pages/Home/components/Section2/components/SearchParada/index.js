import React, {useState} from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import api from '../../../../../../services/api'

export default function SearchParada(props){
    const { setParada, veiculo} = props;
    const [value, setValue] = useState('');

    function onSubmit(e){
        e.preventDefault();
        api.get(`Previsao?codigoParada=${value}&codigoLinha=${veiculo.cl}`)
            .then(response => {
                setParada(response.data);
                console.log(`Previsao?codigoParada=${value}&codigoLinha=${veiculo.cl}`)
            })
        setValue('');
    }

    return (
        <>
            <Form inline onSubmit={onSubmit}>
                <FormControl 
                    type="text" 
                    placeholder="Letreiro ex: 407E-10" 
                    className="mr-sm-2" 
                    value={value}
                    onChange={(e) => {setValue(e.target.value)}}
                />
                <Button variant="outline-success" type="submit">Search</Button>
            </Form>
        </>
    )
}