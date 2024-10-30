import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Pagenotfound from './pages/Pagenotfound';
import Services from './pages/Services';
import Teams from './pages/Teams';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/teams" element={< Teams />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Pagenotfound />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
