import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Countries from './components/Countries';
import About from './components/About';
import NoPage from './components/NoPage'; 
import CountryDetail from './components/CountryDetail';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <div className='background'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="countries" element={<Countries />} />
          <Route path="about" element={<About />} />
          <Route path="/country/:name" element={<CountryDetail />} />
          <Route path="*" element={<NoPage />} /> {/* This is your fallback for undefined routes */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
