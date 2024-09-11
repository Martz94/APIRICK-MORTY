import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CharacterDetail from "./pages/CharacterDetail";
import { FavoritesProvider } from "./context/FavoritesContext";
import Favorites from "./components/Favorites"; 
import Navbar from "./components/Navbar";
import './App.css';

const App = () => {
  return (
    <FavoritesProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
};

export default App;


