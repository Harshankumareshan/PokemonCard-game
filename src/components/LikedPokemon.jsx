import React from 'react';
import DarkModeToggle from './DarkModeToggle';

const LikedPokemon = ({ likedPokemon }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <DarkModeToggle />
      <h1 className="text-3xl font-bold mb-8 text-center text-red-400">Your Pokémon Dream Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-screen-lg">
        {likedPokemon.map(pokemon => (
          <div key={pokemon.id} className="border rounded-lg overflow-hidden border-black bg-yellow-300 shadow-md transition duration-300 hover:shadow-lg hover:scale-105">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt={pokemon.name} className="w-32 h-32 sm:w-40 sm:h-40 mx-auto" />
            <h2 className="text-lg font-bold text-center">{pokemon.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikedPokemon;
