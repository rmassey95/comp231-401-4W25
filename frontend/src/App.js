import './App.css';
import Navbar from './Navbar';
import HomePage from './pages/HomePage/HomePage.js';
import Login from './pages/Login/Login.js';
import Register from './pages/Register/Register.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
