import "./App.css";
import Proyects from "./pages/Proyects";
import Index from "./pages/Index";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DarkModeContainer } from "./contexts/DarkModeContext";

function App() {
  
  return (
    <DarkModeContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/proyects" element={<Proyects />} />
        </Routes>
      </BrowserRouter>
    </DarkModeContainer>
  );
}

export default App;
