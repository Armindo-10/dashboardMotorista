import { Routes, Route, } from "react-router-dom"
import Dashboard from "./pages/Dashboard";
import Slidbar from "./Components/Slidbar";
import Topbar from "./Components/topbar";
import Status from "./pages/Status";
import Perfil from "./pages/Perfil";
import EntregasPendentes from "./pages/EntregasPendentes";
import HistoricoEntregas from "./pages/HistoricoEntregas";
import NotFound from "./pages/NotFound";
import './App.css'


function App() {


  return (
    <div className="app-layout">
      <Slidbar />

      <div className="main-content">
        <Topbar />

        <Routes>
          <Route path="/" element={< NotFound />} />
          <Route path="/Dashboard" element={< Dashboard />} />
          <Route path="/EntregasPendentes" element={< EntregasPendentes />} />
          <Route path="/Status" element={< Status />} />
          <Route path="/perfil" element={< Perfil />} />
          <Route path="/Historico" element={< HistoricoEntregas />} />

        </Routes>
      </div>

    </div>
  )
}

export default App;
