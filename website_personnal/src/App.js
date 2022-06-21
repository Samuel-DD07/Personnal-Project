import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Projets from './Components/Projets';

const data = ["Elocutio Paris Nord", "Wedding WebSite", "Give the change of the Cryptomonnaie"]

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/">
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/Projets" element={<Projets listOfProjets={data}/>}/>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
