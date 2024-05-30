// src/components/Welcome.js
import React, { useState } from 'react';
import SwiperComponent from './SwiperComponent';
import DarkModeToggle from './DarkModeToggle';

const Welcome = ({ setPlayerName, setCurrentPage }) => {
  const [name, setName] = useState('');

  const startGame = () => {
    setPlayerName(name);
    setCurrentPage('swipe');
  };

  return (
    <>
    <DarkModeToggle/>
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <img src="/logo.png" alt="logo" className="h-16 md:h-24 mb-4" />
      <h1 className="text-xl md:text-2xl font-mono text-yellow-500 text-center">
        Welcome to PokéSwipe!
      </h1>
      <SwiperComponent />
      <p className="mb-4 font-mono text-yellow-400 text-center text-sm md:text-base">
        Enter your name and start swiping through Pokémon to build your dream team.
      </p>
      <input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
  placeholder="Enter your name"
  className="border border-red-800 p-2 mb-4 w-full max-w-xs text-black"
/>

      <button
        onClick={startGame}
        class="relative order flex h-[50px] w-40 items-center justify-center overflow-hidden bg-yellow-400 text-black shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gray-800 before:duration-500 before:ease-out hover:shadow-yellow-600 hover:before:h-56 hover:before:w-56"
      >
         <span class="relative z-10">Start</span>
      </button>
    </div>
    </>
  );
};

export default Welcome;


