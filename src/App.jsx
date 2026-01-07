import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import CharacterDetail from "./pages/CharacterDetail";
import Factions from "./pages/Factions";


export default function App() {
  return (
    <BrowserRouter>
      <AppNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<CharacterDetail />} />
        <Route path="/factions" element={<Factions />} />
      </Routes>
    </BrowserRouter>
  );
}
