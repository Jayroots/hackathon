
import NavBar from './components/global/NavBar';
import './import.scss';
import Footer from './components/global/Footer';
import { Routes, Route } from "react-router-dom";
import './import.scss';
import HomePage from "./pages_components/HomePage"
import Contact from "./pages_components/Contact";
import CreateAlbum from './pages_components/CreateAlbum';


function App() {
  return (
    <>

      <NavBar />
  
      
      <main className="appStyle">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/album" element={<CreateAlbum />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
          <Footer />

    </>
  );
}

export default App;