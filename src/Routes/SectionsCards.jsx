import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    //logica del formulario"""
    
    onSearch(searchQuery);
  };

  return (
    
    <form onSubmit={handleSubmit} className='flex'>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Buscar..."
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchBar;
