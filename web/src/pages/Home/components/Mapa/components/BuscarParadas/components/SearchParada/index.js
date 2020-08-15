import React, {useState} from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import {FaPlus, FaMinus} from 'react-icons/fa'
import api from '../../../../../../../../services/api'

export default function SearchParada(props){
    const { setParadas, veiculo, mostrarParadas, setMostrarParadas} = props;
    const [value, setValue] = useState('');
    const [selectValue, setSelectValue] = useState('linha');

    const [exibirFiltros, setExibirFiltros] = useState(false);

    function onSubmit(e){
        e.preventDefault();
        if(value === ""){
            return;
        }
        if(exibirFiltros){

        api.get(
            selectValue == "linha" ?
            `Parada/BuscarParadasPorLinha?codigoLinha=${value}`
            :
            `Parada/BuscarParadasPorCorredor?codigoCorredor=${value}`
        ).then(response => {
            setParadas(response.data);
        }).catch(function(error){
            //error
        })

    }else{
        api.get(`Parada/Buscar?termosBusca=${value}`)
            .then(response => {
                setParadas(response.data);
            })
            .catch(function(error){
                //error
            })
        }
        setValue('');
    }

    return (
        <>
            <Form inline onSubmit={onSubmit}>
                <FormControl 
                    type="text" 
                    placeholder="Nome ou endereço" 
                    className="mr-sm-2" 
                    value={value}
                    onChange={(e) => {setValue(e.target.value)}}
                />
                 {
                    exibirFiltros && 
                    <Form.Control
                        as="select"
                        onChange={(e) => {
                        setSelectValue(e.target.value);
                    }}>
                    <option value="linha">Linhas</option>
                    <option value="corredor">Corredores</option>
                    </Form.Control>
                }
                <Button variant="outline-success" type="submit">Search</Button>
               
                <Button variant="outline-success" onClick={() => {
                    setExibirFiltros(!exibirFiltros);
                }} >{exibirFiltros ?<FaMinus/> : <FaPlus/> } filtro</Button>
            </Form> 
        </>
    )
}