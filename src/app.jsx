import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/searchBar.jsx';
import PokemonList from './components/pokemonList.jsx';
import PokemonDetails from './components/pokemonDetails.jsx';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [page] = useState(1);
  const pokemonPerPage = 151;

  // Buscar a lista de Pokémon
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => setPokemonList(response.data.results))
      .catch(err => console.log(err));
  }, []);

  // Função de busca por nome ou número
  const handleSearch = (query) => {
    setSearchQuery(query);
    axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`)
      .then(response => setSelectedPokemon(response.data))
      .catch(err => console.log("Pokémon não encontrado."));
  };

  // Filtrar a lista de Pokémon paginada
  const paginatedPokemon = pokemonList.slice(
    (page - 1) * pokemonPerPage,
    page * pokemonPerPage
  );

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Pokedex</h1>

      {/* Barra de Busca */}
      <SearchBar onSearch={handleSearch} />

      {/* Detalhes do Pokémon */}
      {selectedPokemon && (
        <PokemonDetails pokemon={selectedPokemon} />
      )}

      {/* Listagem de Pokémon */}
      <PokemonList
        pokemonList={paginatedPokemon}
        onSelectPokemon={(name) => handleSearch(name)}
      />
    </div>
  );
}

export default App;
