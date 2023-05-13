
import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from "./pages/home/HomePage";
import ArtistesPage from './pages/artistes/ArtistesPage';
import Signup from "./pages/signup/SignupPage";





function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<HomePage />} />
      <Route path="*"  element={<HomePage />} /> 
      {/* Renvoi par défaut a la homepage si l'url est incorrect */}
      <Route path="/artistes"  element={<ArtistesPage />} />
      <Route path="/signup"  element={<Signup />} />

      
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
