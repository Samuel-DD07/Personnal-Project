import './App.css'
import MyCryptoBefore from './components/MyCryptoBefore';
import MyCryptoAfter from './components/MyCryptoAfter';
import { useState, useEffect } from 'react';

function App() {

  const [data, setdata] = useState([{}])

  useEffect(() =>{
    fetch("/dataCrypto").then(
      res => res.json()
    ).then(
      data => {
        setdata(data.dataCrypto)
      }
    )
  }, [])

  return (
    <div className="App">
      {/*
        data ? 
            <h1>chargement</h1>
        :
            <MyCryptoBefore ListCrypto={data}/>
            /* <MyCryptoAfter /> */
      }

      <MyCryptoBefore ListCrypto={data}/>
    </div>
  );
}

export default App;
