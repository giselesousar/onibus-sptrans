import React, {useState, useEffect} from 'react';
import './App.css';
import Routes from './routes';
import api from './services/api';


function App() {

  const [estaAutenticado, setEstaAutenticado] = useState(null);

  useEffect(() => {
    api.post(`Login/Autenticar?token=${process.env.TOKEN}`)
      .then(response => {
          setEstaAutenticado(response.data);
      })
  }, [])

  return (
    <>
      {estaAutenticado === false ? <h1>Problemas na autentificação. Recarregue a página!</h1> : <Routes/> }
    </>
  );
}

export default App;
