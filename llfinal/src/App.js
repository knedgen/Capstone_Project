import './App.css';
import {Routes, Route } from 'react-router-dom'
import Home from './pages/home.js';
import Reservations from './pages/reservations.js';
import About from './pages/about.js';
import Menu from './pages/menu.js';
import OrderOnline from './pages/orderonline.js';
import Login from './pages/login.js';



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/order" element={<OrderOnline />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </>
  );
}

export default App;
