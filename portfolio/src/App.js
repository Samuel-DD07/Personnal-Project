import Home from './components/Home';
import Header from './components/Header';
import dataIntro from './data/data-intro';
import Projets from './components/Projets';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/'>
            <Route exact path='/home' element={<Home data={dataIntro}/>} />
            <Route exact path='/Projets' element={<Projets data={dataIntro}/>} />
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
