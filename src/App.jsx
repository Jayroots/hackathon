import { Routes, Route } from "react-router-dom";
import './import.scss'
import HomePage from "./pages_components/HomePage"
import Contact from "./pages_components/Contact"

function App() {
  return (
    <>
      <main className="appStyle">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      
    </>
  );
}

export default App;