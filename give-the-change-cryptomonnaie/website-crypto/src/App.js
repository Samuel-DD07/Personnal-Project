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
      <MyCryptoBefore ListCrypto={data}/>
      {/* <MyCryptoAfter /> */}
    </div>
  );
}

export default App;
