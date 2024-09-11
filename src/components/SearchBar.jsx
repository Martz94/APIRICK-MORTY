import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar personaje"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
    </div>
  );
};

export default SearchBar;

// barra de busqueda de los personajes