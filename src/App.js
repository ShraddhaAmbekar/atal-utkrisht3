import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Facilities from './pages/Facilities';
import Documents from './pages/Documents';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/facilities' element={<Facilities />} />
        <Route path='/documents' element={<Documents />} />
                <Route path='/contact' element={<Contact/>} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
