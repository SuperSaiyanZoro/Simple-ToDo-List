import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const AnimeCharacter: React.FC = () => {
  const { theme } = useTheme();
  const [isBouncing, setIsBouncing] = useState(false);
  
  // Trigger animation on hover
  const handleMouseEnter = () => {
    setIsBouncing(true);
  };
  
  const handleMouseLeave = () => {
    setIsBouncing(false);
  };
  
  // Animation for the character
  const animationClass = isBouncing
    ? 'animate-bounce'
    : 'hover:scale-110 transition-transform';

  return (
    <div 
      className="fixed bottom-4 right-4 z-10 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={theme === 'light' 
          ? "https://i.ibb.co/ChFB04L/anime-character-light.png" 
          : "https://i.ibb.co/56J7yXB/anime-character-dark.png"}
        alt="Anime mascot"
        className={`w-16 h-16 md:w-24 md:h-24 ${animationClass}`}
        draggable="false"
      />
    </div>
  );
};

export default AnimeCharacter;