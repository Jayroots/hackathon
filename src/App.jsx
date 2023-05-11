import Carrousel from './components/Carrousel'
import './styles/import.scss'
import NavBar from './components/global/NavBar';
import './import.scss';
import Footer from './components/global/Footer';
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages_components/HomePage"
import Contact from "./pages_components/Contact";
import CreateAlbum from './pages_components/CreateAlbum';
import Team from "./pages_components/Team";


function App() {
  return (
    <>
      <NavBar />





      <main className="appStyle">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/album" element={<CreateAlbum />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />

        </Routes>
      </main>
      <Footer />


    </>
  );
}

export default App;