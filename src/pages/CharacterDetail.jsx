import React, { useContext,useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FavoritesContext } from '../context/FavoritesContext';

const CharacterDetail = () => {
  const { id } = useParams();
  const { addFavorite, favorites } = useContext(FavoritesContext);
  const [character, setCharacter] = useState(null);

  const isFavorite = favorites.some(fav => fav.id === parseInt(id)); 

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.json())
      .then(data => setCharacter(data));
  }, [id]);

  if (!character) {
    return <div className='fav-text'>Cargando...</div>;
  }

  return (
    <div className='card-detail'>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin.name}</p>
      <button onClick={() => addFavorite(character)}
       disabled={isFavorite}>
        {favorites.some(fav => fav.id === character.id) ? 'Agregado' : 'Agregar a favoritos'}
      </button>
    </div>
  );
};

export default CharacterDetail;

/* tarjeta de los personajes a detalle y boton de agregar a favoritos con context y fech para obtener los personajes. */