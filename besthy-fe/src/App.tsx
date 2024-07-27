import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DetakJantung from "./pages/DetakJantung";
import Laporan from "./pages/Laporan";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Psikoter from "./pages/Psikoter";
import About from "./pages/About";
import PraPsikotes from "./pages/PraPsikotes";
import Komunitas from "./pages/Komunitas";
import Dino from "./pages/games/Dino";
import GameMenu from "./pages/GameMenu";
import Music from "./pages/Music";
import Chatbot from "./pages/Chatbot";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/user/musik" element={<Music />} />
        <Route path="/user/laporan" element={<Laporan />} />
        <Route path="/user/pra-psikotes" element={<PraPsikotes />} />
        <Route path="/user/psikotes" element={<Psikoter />} />
        <Route path="/user/detakJantung" element={<DetakJantung />} />
        <Route path="/user/komunitas" element={<Komunitas />} />
        <Route path="/user/game-menu" element={<GameMenu />} />
        <Route path="/game/dino" element={<Dino />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
