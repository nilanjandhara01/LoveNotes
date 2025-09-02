import React, { useEffect, useState } from "react";

function Hearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now(),
        left: Math.random() * 100,
        size: Math.random() * 20 + 20,
        duration: Math.random() * 5 + 5,
      };
      setHearts((prev) => [...prev, newHeart]);
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
      }, newHeart.duration * 1000);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          style={{
            position: "absolute",
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animation: `floatUp ${heart.duration}s linear`,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
}

export default Hearts;
