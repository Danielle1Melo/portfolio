"use client";

import { useEffect, useState } from 'react';

const Stars = () => {
  const [stars, setStars] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const starsArray = [];
      for (let i = 0; i < 50; i++) {
        const size = Math.random() * 3 + 1; 
        const left = Math.random() * 100; 
        const top = Math.random() * 100;    
        const delay = Math.random() * 2; 
        
        starsArray.push(
          <div
            key={i}
            className="star"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              top: `${top}%`,
              animationDelay: `${delay}s`
            }}
          />
        );
      }
      setStars(starsArray);
    };

    generateStars();
  }, []);

  return (
    <div className="stars">
      {stars}
    </div>
  );
};

export default Stars;
