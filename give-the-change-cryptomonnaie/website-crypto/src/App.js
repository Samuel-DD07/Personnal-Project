import './App.css'
import { useState, useEffect } from 'react';
import MyCrypto from './components/MyCrypto';

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

        <h1>Bienvenue sur The Give-The-Change-Crypto.</h1>
        <h3>Ce projet a pour but de permettre aux possesseurs de cryptomonnaie de "faire la monnaie".
          <br></br>C'est à dire changer son <mark>Bitcoin</mark> en plusieurs cryptomonnaies comme : <mark>Ethereum</mark>, <mark>Solana</mark>, <mark>Tether</mark>.</h3>
        <h3><em>Attention, ceci est un projet et non un produit !</em></h3>

        {data ?
        <MyCrypto data={data}/>
        :
        <h1>Chargement . . .</h1>}

        <footer>
            <h3>Site Web développé par Samuel Dorismond.</h3>
        </footer>
    </div>
  );
}

export default App;
