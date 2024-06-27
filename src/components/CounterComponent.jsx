import React from 'react'

export const CounterComponent = ({ counter = '1000', text = '', subText = '' }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <p>
                <span className='text-8xl text-[#2E5AFC]'>+</span>
                <span className='font-medium text-7xl'>{ counter }</span>
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="14.654" height="82.288" viewBox="0 0 14.654 82.288">
                <g id="Grupo_122" data-name="Grupo 122" transform="translate(-486.958 -126.242)">
                    <line id="Línea_4" data-name="Línea 4" y2="76.232" transform="translate(494.285 126.242)" fill="none" stroke="#2e5afc" strokeMiterlimit="10" strokeWidth="1"/>
                    <path id="Trazado_358" data-name="Trazado 358" d="M570.27,228.538a7.327,7.327,0,1,1-7.327-7.327,7.327,7.327,0,0,1,7.327,7.327" transform="translate(-68.658 -27.335)" fill="#2e5afc"/>
                </g>
            </svg>
            <span className='text-center'>
                <p className='text-2xl'>{ text }</p>
                { subText && <p className='text-2xl'>{ subText }</p> }
            </span>
        </div>
    )
}
