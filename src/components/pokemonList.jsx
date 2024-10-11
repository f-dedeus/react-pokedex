import React from 'react';

function PokemonList({ pokemonList, onSelectPokemon }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {pokemonList.map((pokemon) => (
        <div
          key={pokemon.name}
          onClick={() => onSelectPokemon(pokemon.name)}
          className="cursor-pointer p-4 bg-white shadow-md rounded-lg text-center"
        >
          <p className="text-lg font-bold capitalize">{pokemon.name}</p>
        </div>
      ))}
    </div>
  );
}

export default PokemonList;
