import React, {useState, useEffect} from 'react';
import './App.css';
import Routes from './routes';
import api from './services/api';


function App() {

  const [estaAutenticado, setEstaAutenticado] = useState(false);

  useEffect(() => {
    api.post(`Login/Autenticar?token=${process.env.TOKEN}`)
      .then(response => {
          setEstaAutenticado(response.data);
      })
  }, [])

  return (
    <>
      {estaAutenticado && <Routes/>}
    </>
  );
}

export default App;
