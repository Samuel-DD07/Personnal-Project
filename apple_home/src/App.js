import './App.css'
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import IphoneStart from './components/Iphone-Start';
import FilmApple from './components/Film-Apple';
import ProduitApple from './components/Grille-Produit-Apple';
import Modalite from './components/Modalite';
import FooterLink from './components/Footer-link';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <IphoneStart />
      <FilmApple />
      <ProduitApple />
      <Modalite />
      <FooterLink />
    </div>
  );
}

export default App;
