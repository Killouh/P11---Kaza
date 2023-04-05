import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from "./components/home/Home";
import CardsPage from "./components/cardspage/CardsPage";
import Propos from "./components/propos/Propos"
import Unknown from "./components/404/Unknown";
import Navbar from './components/header/Header';
import Footer from './components/footer/Footer';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Propos" element={<Propos />} />
          <Route path="/location/:id" element={<CardsPage />} />
          <Route path="*" element={<Unknown />} />     
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
