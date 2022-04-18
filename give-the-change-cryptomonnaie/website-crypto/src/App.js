import './App.css'
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import ElementCrypto from './components/ElementCrypto';
import AjouteElement from './components/AjouteElement';

function App() {

  const [data, setdata] = useState([{}])
  const [number, setNumber] = useState(1)

  useEffect(() =>{
    fetch("/dataCrypto").then(
      res => res.json()
    ).then(
      data => {
        setdata(data)
      }
    )
  }, [])


  return (
    <div className="App">
      <ElementCrypto numberElement={number}/>
      <AjouteElement numberStart={1} setNumber={setNumber}/>
    </div>
  );
}

export default App;
