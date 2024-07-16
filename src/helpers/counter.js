import { useState, useEffect } from 'react';

export const useCounter = () => {
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(null);
  const [interval, setIntervalValue] = useState(80);

  const init = ({ limit, interval = 80 }) => {
    setLimit(limit);
    setIntervalValue(interval);
  };

  useEffect(() => {
    if (limit === null) return;

    const base = limit < 10 ? 0.2 : limit < 1000 ? 1 : limit < 10000 ? 15 : 100;

    const timer = setInterval(() => {
      setCount(prevCount => {
        if (prevCount < limit) {
          return prevCount + base;
        } else {
          clearInterval(timer);
          return prevCount;
        }
      });
    }, interval); 

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(timer);
  }, [limit, interval]);

  return { init, count };
};