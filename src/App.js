import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import RecoverPassword from './pages/RecoverPassword';
import About from './pages/About/About';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/recoverPassword" element={<RecoverPassword />} />
          <Route path='/about' element={ <About /> } />
        </Routes>
    </BrowserRouter>
  );
};

export default App;