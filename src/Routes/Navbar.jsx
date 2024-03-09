import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Lógica del formulario
    // Por ejemplo, podrías realizar alguna acción con la consulta de búsqueda aquí
    
    onSearch(searchQuery);
  };

  return (

    <div className='flex justify-center align-center margin' >
      <img
            className="w-20  bg-white rounded-full"
            src="https://res.cloudinary.com/djkxqbsns/image/upload/v1709975475/nuclio_xyq8wl.png"
            alt="Logo"
          />
   

    <form onSubmit={handleSubmit} className='flex'>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Buscar..."
      />
      <button type="submit">Buscar</button>
    </form>
    </div>
  );
}

export default SearchBar;
