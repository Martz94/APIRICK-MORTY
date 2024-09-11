import React, { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';

const Favorites = () => {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  if (favorites.length === 0) {
    return <h3 className='fav-text'>No hay favoritos</h3>;
  }

  return (
    <div >
      <h2 className='fav-text'>Tus favoritos</h2>
      <ul>
        {favorites.map(favorite => (
          <li key={favorite.id} className='card-fav'>
            <img src={favorite.image} alt={favorite.name} />
            <p>{favorite.name}</p>
            <button onClick={() => removeFavorite(favorite.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
