import { useState, useEffect } from 'react';

export const useCounter = () => {
    const [count, setCount] = useState(0);

    const init = ({ limit, interval = 80 }) => {
        const base = limit < 10 ? 0.2 : limit < 1000 ? 1 : limit < 10000 ? 10 : 100;

        useEffect(() => {
            const timer = setInterval(() => {
            if (count < limit) {
                setCount(prevCount => prevCount + base);
            }
            }, interval); // Cambia el intervalo de acuerdo a tus necesidades (ej. cada segundo)
    
            // Limpiar el intervalo al desmontar el componente
            return () => clearInterval(timer);
        }, [count, limit])
    };

    return { init, count };
};
