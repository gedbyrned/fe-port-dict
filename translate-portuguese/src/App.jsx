import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import Nav from './components/Nav';
import { Routes, Route, Navigate} from 'react-router-dom';

function App() {
  return (
    <>
    <Header />
    <Nav />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
    </>
  ); 
}

export default App;
