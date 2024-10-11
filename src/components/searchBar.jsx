import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim() !== '') {
      onSearch(query.toLowerCase());
    }
  };

  return (
    <div className="flex justify-center mb-8">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Digite o nome ou número do Pokémon"
        className="border border-gray-300 rounded-l px-4 py-2 w-80"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-500 text-white rounded-r"
      >
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
