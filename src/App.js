
import './App.css';
import { NabvarHeader } from './components/nabvar/NabvarHeader';
import Portada from './components/portada/portada';
import Marcas from './components/Nuestro-productos/Marcas';
import { Loarder } from './components/Page-Loarder/Loarder';
import About from './components/About-us/About';
import Footer from './components/footer/Footer';
import Contactos from './components/contactos/Contactos';







 export function App() {
  return (
    <div className="App">
      <NabvarHeader />
        <Portada />
        <Marcas />
        <Loarder />
        <About />
        <Contactos/>
        <Footer /> 
    </div>
  );
}

export default App;
