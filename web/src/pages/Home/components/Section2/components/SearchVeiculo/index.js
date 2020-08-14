import React, { useState, useEffect } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

export default function SearchVeiculo(props) {
    const { veiculos, setVeiculoBuscado, atualizar } = props;
    const [value, setValue] = useState('');

    function onSubmit(e){
        e.preventDefault();
        var flag = 0;
        veiculos.forEach(v => {
            console.log(v.c)
            if ((v.c).toLowerCase() == value) {
                setVeiculoBuscado(v);
                flag = 1;
            }
        })
        if(!flag){
            setVeiculoBuscado(null);
        }
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
