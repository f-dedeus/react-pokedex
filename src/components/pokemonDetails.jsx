import React from 'react';

function PokemonDetails({ pokemon }) {
  return (
    <div className="mt-8 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold capitalize">{pokemon.name}</h2>
      <img
        src={pokemon.sprites?.front_default}
        alt={pokemon.name}
        className="mx-auto"
      />
      <p><strong>Altura:</strong> {pokemon.height}</p>
      <p><strong>Peso:</strong> {pokemon.weight}</p>
      <div>
        <strong>Tipos:</strong>
        <ul>
          {pokemon.types.map(typeInfo => (
            <li key={typeInfo.type.name} className="capitalize">
              {typeInfo.type.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PokemonDetails;
