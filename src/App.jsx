import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import NavBar from './components/NavBar'; // Asegúrate de que el camino sea el correcto
import { Home, VocesPublicas, VocesQueAcompanan, VocesQueSeQuedan, TuMemoria } from './components';

const App = () => {
  return (
    <Router className="sm:snap-y sm:snap-mandatory">
      <ScrollToTop />
      <NavBar /> {/* Aquí importa el componente NavBar */}
      
      {/* Rutas de las secciones */}
      <div className="pt-[110px]"> {/* Esto agrega el padding para evitar que el contenido se superponga al navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/voces-publicas" element={<VocesPublicas />} />
          <Route path="/voces-que-acompañan" element={<VocesQueAcompanan />} />
          <Route path="/voces-que-se-quedan" element={<VocesQueSeQuedan />} />
          <Route path="/tu-memoria" element={<TuMemoria />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
