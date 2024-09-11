import React, { createContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext();
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const MAX_FAVORITES = 5; 

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (character) => {

    if (favorites.some(fav => fav.id === character.id)) return;

    let updatedFavorites = [...favorites];

    if (updatedFavorites.length >= MAX_FAVORITES) {

      updatedFavorites.shift();
    }

    updatedFavorites = [...updatedFavorites, character];

    setFavorites(updatedFavorites);
  };

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter(fav => fav.id !== id);
    setFavorites(updatedFavorites);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

// creacion del 'context' para manejas los personajes favoritos y manejo de las persistencia.