import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DisciplineContextProvider } from './context/disciplineContext';
import Login from './pages/Login';
import Home from './pages/Home';
import RecoverPassword from './pages/RecoverPassword';
import About from './pages/About/About';
import Discipline from './pages/Discipline';
import Grades from './pages/Grades';
import Frequency from './pages/Frequency';
import './App.css';

const App = () => {
  return (
    <DisciplineContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/recoverPassword" element={<RecoverPassword />} />
          <Route path='/about' element={ <About /> } />
          <Route path='/disciplina' element= { <Discipline /> } />
          <Route path='/atividades' element= { <Grades /> } />
          <Route path='/frequencia' element= { <Frequency /> } />
        </Routes>
      </BrowserRouter>
    </DisciplineContextProvider>
  );
};

export default App;