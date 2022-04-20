import './App.css'
import { useEffect } from 'react';

function App() {

  const [data, setdata] = useState([{}])

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
    </div>
  );
}

export default App;
