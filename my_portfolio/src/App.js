import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Projets from './components/Projets';
import AproposDeMoi from './components/AproposDeMoi';
import Contact from './components/Contact';
import MyHeader from './components/MyHeader';
import Footer from './components/Footer';

const dataTest = [
  {
    année: "2022",
    Link: "",
    Titre: "Titre du projet.",
    Background: "https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  },
  {
    année: "2021",
    Link: "",
    Titre: "Titre du projet.",
    Background: "https://images.unsplash.com/photo-1620503374956-c942862f0372?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    année: "2020",
    Link: "",
    Titre: "Titre du projet.",
    Background: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
  }
]

function App() {
  return (
    <div className="App">
      <Router>
        <MyHeader />
        <Routes>
          <Route exact path='/'>
            <Route exact path='/' element={<Home data={dataTest}/>} />
            <Route exact path='/Projets' element={<Projets data={dataTest}/>} />
            <Route exact path='/AproposDeMoi' element={<AproposDeMoi />} />
            <Route exact path='/Contact' element={<Contact />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

// https://www.jashsak.com