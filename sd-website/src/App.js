import './App.css';
import LinkNav from './datas/Link-data';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
        <Home 
          name="Samuel Dorismond"
          accroche="Je crée des sites web pour vous."
          link={LinkNav}
        />
    </div>
  );
}

export default App;
