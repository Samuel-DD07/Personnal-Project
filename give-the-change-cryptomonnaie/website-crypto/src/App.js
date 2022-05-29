import './App.css'
import MyCryptoBefore from './components/MyCryptoBefore';
import MyCryptoAfter from './components/MyCryptoAfter';
import Button from './Button';
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

        <h1>Bienvenue sur The Give-The-Change-Crypto.</h1>
        <h3>Ce projet a pour but de permettre aux possesseurs de cryptomonnaie de "faire la monnaie".
          <br></br>C'est à dire changer son <mark>Bitcoin</mark> en plusieurs cryptomonnaies comme : <mark>Ethereum</mark>, <mark>Solana</mark>, <mark>Tether</mark>.</h3>
        <h3><em>Attention, ceci est un projet et non un produit !</em></h3>


        <div className='BeforeCrypto'>
            <h1>Votre cryptomonnaie :</h1>
            {data ?
              <MyCryptoBefore 
                ListCrypto={data} 
                number={2} 
                checkAmount={true}
              />
              :
              <h1>Chargement . . .</h1>}
        </div>

        <div className='AfterCrypto'>
              <h1>Votre monnaie :</h1>
              {data ?
              <MyCryptoAfter 
                ListCrypto={data} 
                number={2}
                checkAmount={false}
                />
              :
              <h1>Chargement . . .</h1>}
        </div>

        <Button />
    </div>
  );
}

export default App;
