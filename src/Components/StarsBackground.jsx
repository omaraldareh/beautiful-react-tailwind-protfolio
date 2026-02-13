import { useState, useEffect } from "react";

const generateStars = () => {
  const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);
  return Array.from({ length: numberOfStars }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.5,
    duration: Math.random() * 4 + 2,
  }));
};

const generateMeteors = () => {
  return Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: Math.random() * 1.5 + 0.8, 
    x: Math.random() * 100,
    y: Math.random() * 40,
    delay: Math.random() * 1.5, 
    duration: Math.random() * 4 + 3,
  }));
};



export default function StarsBackground() {
  const [stars, setStars] = useState(generateStars);
  const [meteors] = useState(generateMeteors);

  useEffect(() => {
    const handleResize = () => {
      setStars(generateStars());
    };

    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-transparent">
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className="star animate-pulse-subtle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={`meteor-${meteor.id}`}
          className="meteor animate-meteor"
          style={{
            width: `${meteor.size * 35}px`,
            height: `${meteor.size * 2}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.duration}s`,
          }}
        />
      ))}
    </div>
  );
}


