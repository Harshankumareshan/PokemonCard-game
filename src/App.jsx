// src/App.js
import React, { useState } from 'react';
import Welcome from './components/Welcome';
import PokemonCard from './components/PokemonCard';
import LikedPokemon from './components/LikedPokemon';
import DarkModeToggle from './components/DarkModeToggle';

const App = () => {
  const [playerName, setPlayerName] = useState('');
  const [likedPokemon, setLikedPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState('welcome');

  const handleLike = (pokemon) => {
    setLikedPokemon([...likedPokemon, pokemon]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-end p-4">
        <DarkModeToggle />
      </div>
      {currentPage === 'welcome' && <Welcome setPlayerName={setPlayerName} setCurrentPage={setCurrentPage} />}
      {currentPage === 'swipe' && (
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold font-mono mt-4 mb-2 text-red-400">Hello,{playerName}!</h1>
          <img src="/logo.png" alt="logo" className="h-16 md:h-24 mb-4" />
          <button onClick={() => setCurrentPage('liked')} className="bg-gradient-to-r from-green-500 to-yellow-500 text-black px-4 py-2 text-xl mt-6 rounded font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate">View Liked</button>
          <PokemonCard handleLike={handleLike} />
        </div>
      )}
      {currentPage === 'liked' && (
        <div className="flex flex-col items-center">
          <button onClick={() => setCurrentPage('swipe')} className="relative z-10 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">Back to Swiping</button>
          <LikedPokemon likedPokemon={likedPokemon} />
        </div>
      )}
    </div>
  );
};

export default App;
