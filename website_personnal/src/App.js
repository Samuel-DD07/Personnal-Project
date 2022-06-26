import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Apropos from './Components/Apropos';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Projets from './Components/Projets';

const data = [
  {
      Nom_Du_Projet: "Elocutio Paris Nord",
      Année: "2022",
      Link_Projet: "",
      Description: "Site web pour promouvoir un concours d'éloquence : Elocutio Paris Nord.",
      Langage_Use: ["HTML", "CSS", "JS"]
  },
  {
      Nom_Du_Projet: "Elocutio Paris Nord",
      Année: "2022",
      Link_Projet: "",
      Description: "Site web pour promouvoir un concours d'éloquence : Elocutio Paris Nord.",
      Langage_Use: ["HTML", "CSS", "JS"]
  },
  {
      Nom_Du_Projet: "Elocutio Paris Nord",
      Année: "2022",
      Link_Projet: "",
      Description: "Site web pour promouvoir un concours d'éloquence : Elocutio Paris Nord.",
      Langage_Use: ["HTML", "CSS", "JS"]
  }
]

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/">
            <Route exact path="/" element={<Home listOfProjets={data}/>}/>
            <Route exact path="/Projets" element={<Projets listOfProjets={data}/>}/>
            <Route exact path="/Apropos" element={<Apropos />}/>
            <Route exact path="/Contact" element={<Contact />}/>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
