import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = ({ character }) => {
  return (
    <div className="character-item">
      <h3>{character.name}</h3>
      <img src={character.image} alt={character.name} />
      <p>Género: {character.gender}</p>
      <p>Estado: {character.status}</p>
      <Link to={`/character/${character.id}`}>Ver Detalles</Link>
    </div>
  );
};

export default CharacterCard;

// creacion de las tarjetas de los personajes y aplicando react-router para ver pagina de detalle.