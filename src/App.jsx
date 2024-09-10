import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => setCharacters(response.data.results))
      .catch(error => console.log(error));
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar personajes"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div>
        {filteredCharacters.map(character => (
          <div key={character.id}>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;


sta