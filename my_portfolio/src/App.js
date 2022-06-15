import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Projets from './components/Projets';
import AproposDeMoi from './components/AproposDeMoi';
import Contact from './components/Contact';
import MyHeader from './components/MyHeader';

const dataTest = [
  {
    année: "2022",
    Titre: "Give The Change Cryptomonnaie",
    Logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png",
    Description: "Faites la monnaie en echangeant votre crypto.",
    Status: "En cours",
    Langages: ["HTML", "CSS", "JS", "React.JS", "Python", "Flask"],
    Background: "https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    Link: ""
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
      </Router>
    </div>
  );
}

export default App;

// https://www.jashsak.com