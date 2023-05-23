
import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from "./pages/home/HomePage";
import ArtistesPage from './pages/artistes/ArtistesPage';
import SignupPage from "./pages/signup/SignupPage";
import LoginPage from "./pages/login/LoginPage";
import TicketsPage from "./pages/tickets/TicketsPage";





function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<HomePage />} />
      <Route path="*"  element={<HomePage />} /> {/* Renvoi par défaut a la homepage si l'url est incorrect */}    
      <Route path="/artistes"  element={<ArtistesPage />} />
      <Route path="/signup"  element={<SignupPage />} />
      <Route path="/login"  element={<LoginPage />} />
      <Route path="/tickets"  element={<TicketsPage />} />

      
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
