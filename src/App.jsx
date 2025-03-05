import { BrowserRouter, Routes, Route } from "react-router-dom";
import NovoEvento from "./pages/novoEvento";
import Evento from "./pages/Evento";
import Ingressos from "./pages/Ingresso";
import Organizadores from "./pages/Organizadores";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/evento/novo" element={<NovoEvento />} />
          <Route path="/eventos" element={<Evento />} />
          <Route path="/ingresso" element={<Ingressos />} />
          <Route path="/organizadores" element={<Organizadores />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
