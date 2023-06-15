import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import RecoverPassword from './pages/RecoverPassword';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/recoverPassword" element={<RecoverPassword />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;