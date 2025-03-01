import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import PageRegister from './pages/PageRegister';
import PageLogin from './pages/PageLogin';

function App() {

  return (
    <>
      {/* <Loading /> */}
        <Routes>
          <Route path="/*" element={<PageLogin />} />
          <Route path="/register" element={<PageRegister />} />
        </Routes>
    </>
  )
}

export default App
