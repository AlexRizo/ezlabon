import React, { useEffect, useRef } from 'react'
import { useCounter } from '../helpers/counter';

export const CounterComponent = ({ counter = '1000', text = '', subText = '', interval = 80 }) => {
    const { init, count } = useCounter();
    const componentRef = useRef(null);

    const initCounter = () => init({ limit: counter, interval });
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Ejecuta la función cuando el componente es visible
                    initCounter();
                }
                });
            },
            {
                root: null, // El viewport es el root
                rootMargin: '0px', // Sin margen alrededor del root
                threshold: 0.5 // Ejecuta la función cuando el 50% del componente es visible
            }
        );
    
        if (componentRef.current) {
            observer.observe(componentRef.current);
        }
    
        // Limpia el observador al desmontar el componente
        return () => {
            if (componentRef.current) {
                observer.unobserve(componentRef.current);
            }
        };
      }, []);
    
    
    return (
        <div className="flex flex-col items-center justify-center gap-2 w-full">
            <p className='w-full text-center'>
                <span className='text-7xl text-[#2E5AFC]'>+</span>
                <span className='font-medium text-7xl'>{ Number.isInteger(count) ? count : count.toFixed(1) }</span>
            </p>
            <div className="hidden xl:block">
                <svg xmlns="http://www.w3.org/2000/svg" width="14.654" height="82.288" viewBox="0 0 14.654 82.288">
                    <g id="Grupo_122" data-name="Grupo 122" transform="translate(-486.958 -126.242)">
                        <line id="Línea_4" data-name="Línea 4" y2="76.232" transform="translate(494.285 126.242)" fill="none" stroke="#2e5afc" strokeMiterlimit="10" strokeWidth="1"/>
                        <path id="Trazado_358" data-name="Trazado 358" d="M570.27,228.538a7.327,7.327,0,1,1-7.327-7.327,7.327,7.327,0,0,1,7.327,7.327" transform="translate(-68.658 -27.335)" fill="#2e5afc"/>
                    </g>
                </svg>
            </div>
            <div className="xl:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="11.199" height="62.888" viewBox="0 0 11.199 62.888">
                    <g id="Grupo_135" data-name="Grupo 135" transform="translate(-1002.016 -1235.876)">
                        <line id="Línea_4" data-name="Línea 4" y2="58.26" transform="translate(1007.616 1235.876)" fill="none" stroke="#2e5afc" strokeMiterlimit="10" strokeWidth="1"/>
                        <path id="Trazado_358" data-name="Trazado 358" d="M566.815,226.811a5.6,5.6,0,1,1-5.6-5.6,5.6,5.6,0,0,1,5.6,5.6" transform="translate(446.4 1066.354)" fill="#2e5afc"/>
                    </g>
                </svg>
            </div>
            <span ref={ componentRef } className='text-center text-sm xl:text-xl'>
                <p>{ text }</p>
                { subText && <p>{ subText }</p> }
            </span>
        </div>
    )
}
