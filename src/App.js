import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from "./views/home/Home";
import CardsPage from "./views/cardspage/CardsPage";
import About from "./views/propos/About"
import Unknown from "./views/404/Unknown";
import Navbar from './views/header/Header';
import Footer from './views/footer/Footer';

// A voir peut être la homepage (regarder google)
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Propos" element={<About />} />
          <Route path="/location/:id" element={<CardsPage />} />
          <Route path="*" element={<Unknown />} />     
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
