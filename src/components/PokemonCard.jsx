import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const PokemonCard = ({ handleLike }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetchRandomPokemon();
  }, []);

  const fetchRandomPokemon = async () => {
    const id = Math.floor(Math.random() * 898) + 1; // Pokémon IDs range from 1 to 898
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    setPokemon(data);
  };

  const handleLikeClick = () => {
    handleLike(pokemon);
    fetchRandomPokemon();
    triggerConfetti();
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 60,
    });
  };

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center mt-12 min-h-screen relative">
      {/* Behind Card */}
      <div className="absolute top-4 left-4 -z-10 transform rotate-6 w-72 h-64 bg-green-700 rounded-lg shadow-lg"></div>
      <div className="absolute top-0 left-2 -z-10 transform rotate-3 w-72 h-64 bg-red-500 rounded-lg shadow-lg"></div>
      {/* Main Card */}
      <div className="border-b-4 border-r-4 border-black p-4 md:p-6 rounded-lg shadow-lg bg-yellow-300 w-72 relative z-0">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          alt={pokemon.name}
          className="w-28 h-44 md:w-40 md:h-60 mx-auto"
        />
        <h2 className="text-xl md:text-3xl font-bold text-center capitalize mt-2 md:mt-4 border-b-2 border-black pb-1 md:pb-2">{pokemon.name}</h2>
        <div className="flex justify-between mt-2 md:mt-4">
          <div className="w-1/2 pr-2">
            <h3 className="font-bold mb-1 md:mb-2">Abilities:</h3>
            <ul className="list-disc list-inside">
              {pokemon.abilities.map((ability) => (
                <li key={ability.ability.name}>{ability.ability.name}</li>
              ))}
            </ul>
          </div>
          <div className="w-1/2 pl-2">
            <h3 className="font-bold">Types:</h3>
            <ul className="list-disc list-inside">
              {pokemon.types.map((type) => (
                <li key={type.type.name}>{type.type.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Buttons */}
      <div className="mt-2 md:mt-4 gap-4 md:gap-6 flex">
        <button
          onClick={handleLikeClick}
          className="animate-bounce focus:animate-none hover:animate-none inline-flex text-md md:text-base font-medium bg-red-900 mt-2 md:mt-3 px-3 md:px-4 py-1.5 md:py-2 rounded-lg tracking-wide text-white"
        >
          Like
        </button>
        <button
          onClick={fetchRandomPokemon}
          className="animate-bounce focus:animate-none hover:animate-none inline-flex text-md md:text-base font-medium bg-red-900 mt-2 md:mt-3 px-3 md:px-4 py-1.5 md:py-2 rounded-lg tracking-wide text-white"
        >
          Dislike
        </button>
      </div>
    </div>
  );
};

export default PokemonCard;
