import './App.css'
import MyCryptoBefore from './components/MyCryptoBefore';
import { useState, useEffect } from 'react';

function App() {

  const [data, setdata] = useState()

  useEffect(() =>{
    fetch("/dataCrypto").then(
      res => res.json()
    ).then(
      data => {
        setdata(data.dataCrypto)
      }
    )
  }, [data])

  return (
    <div className="App">
        {data ?
          <MyCryptoBefore ListCrypto={data} number={2}/>
          :
          <h1>Chargement</h1>}
    </div>
  );
}

export default App;
