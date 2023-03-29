import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from "./components/home/Home";
import Cards from "./components/cards/Cards";
import Propos from "./components/propos/Propos"
import Unknown from "./components/404/Unknown";
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cards/:id" element={<Cards />} />
          <Route path="/Propos" element={<Propos />} />
          <Route path="/*" element={<Unknown />} />
      </Routes>
    </div>
  );
}

export default App;
