import React, {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';

export default function Contador(props){
    const { atualizarDados, atualizar, setAtualizar } = props;

    const [contador, setContador] = useState(30);

    function handleCounter(){
        if(contador === 0){
           handleAtualizar();
        }else{
            setContador(contador - 1);
        }
        
    }
    function handleAtualizar(){
        setAtualizar(true);
        setContador(30);
    }
    useEffect(() => {
        const interval = setInterval(handleCounter, 1000);
      return () => {
            clearInterval(interval);
        };
    }, [contador]);
    useEffect(() => {
        atualizarDados();
        setAtualizar(false);
    }, [atualizar])

    return(
        <div>
            <h4>{contador}</h4>
            <Button onClick={handleAtualizar}>Atualizar</Button>
        </div>
    )
}