import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Mapa from './pages/Mapa';
import Plataforma from './pages/Plataforma';
import Relatos from './pages/Relatos';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-fundo text-texto">
      <Header />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Mapa />} />
          <Route path="/plataforma" element={<Plataforma />} />
          <Route path="/relatos" element={<Relatos />} />

          {/* Qualquer outra rota volta para o mapa */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App; 