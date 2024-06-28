export const ServicesComponent = ({ title = true, services = {} }) => {
    return (
        <div className={`bg-half-gradient text-black pt-10`}>
            <h1 className={`text-[#2E5AFC] font-semibold text-6xl text-center mb-10 ${ !title && 'hidden' }`}>SERVICIOS</h1>
            <div className='flex justify-center items-end'>
                <div className='flex flex-col items-center relative z-30 gap-3 text-xl translate-x-20 -translate-y-7'  >
                    <div className='text-center'>
                        <p>{ services[1].p1 }</p>
                        { services[1].p2 && <p>{ services[1].p2 }</p> }
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16.72" height="93.89" viewBox="0 0 16.72 93.89">
                            <g id="Grupo_48" data-name="Grupo 48" transform="translate(-1321.3 -292.83)">
                                <line id="Línea_9" data-name="Línea 9" y2="86.98" transform="translate(1329.66 292.83)" fill="none" stroke="#2e5afc" strokeMiterlimit="10" strokeWidth="1"/>
                                <circle id="Elipse_11" data-name="Elipse 11" cx="8.36" cy="8.36" r="8.36" transform="translate(1321.3 370)" fill="#2e5afc"/>
                            </g>
                        </svg>
                    </div>
                    <div className='bg-white rounded-full p-7'>
                        <div className="rounded-full w-[450px] h-[450px] bg-white overflow-hidden relative">
                            <div className={`w-full h-full absolute bg-[url('/img/services/${ services[1].img }')] bg-cover bg-no-repeat ${ services[1].custom }`}></div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center relative z-20 gap-3 text-xl' >
                    <div className='bg-white rounded-full p-7'>
                        <div className="rounded-full w-[450px] h-[450px] bg-white overflow-hidden relative">
                            <div className={`w-full h-full absolute bg-[url('/img/services/${services[2].img}')] bg-cover bg-no-repeat ${ services[2].custom }`}></div>
                        </div>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16.72" height="93.89" viewBox="0 0 16.72 93.89">
                            <g id="Grupo_48" data-name="Grupo 48" transform="translate(-1321.3 -292.83)">
                                <line id="Línea_9" data-name="Línea 9" y2="86.98" transform="translate(1329.66 292.83)" fill="none" stroke="#2e5afc" strokeMiterlimit="10" strokeWidth="1"/>
                                <circle id="Elipse_11" data-name="Elipse 11" cx="8.36" cy="8.36" r="8.36" transform="translate(1321.3 370)" fill="#2e5afc"/>
                            </g>
                        </svg>
                    </div>
                    <div className='text-center'>
                        <p>{ services[2].p1 }</p>
                        { services[2].p2 && <p>{ services[2].p2 }</p> }
                    </div>
                </div>
                <div className='flex flex-col items-center relative gap-3 text-xl -translate-x-20 -translate-y-7' >
                    <div className='text-center'>
                        <p>{ services[3].p1 }</p>
                        { services[3].p2 && <p>{ services[3].p2 }</p> }
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16.72" height="93.89" viewBox="0 0 16.72 93.89">
                            <g id="Grupo_48" data-name="Grupo 48" transform="translate(-1321.3 -292.83)">
                                <line id="Línea_9" data-name="Línea 9" y2="86.98" transform="translate(1329.66 292.83)" fill="none" stroke="#2e5afc" strokeMiterlimit="10" strokeWidth="1"/>
                                <circle id="Elipse_11" data-name="Elipse 11" cx="8.36" cy="8.36" r="8.36" transform="translate(1321.3 370)" fill="#2e5afc"/>
                            </g>
                        </svg>
                    </div>
                    <div className='bg-white rounded-full p-7'>
                        <div className="rounded-full w-[450px] h-[450px] bg-white overflow-hidden relative">
                            <div className={`w-full h-full absolute bg-[url('/img/services/${ services[3].img }')] bg-cover bg-no-repeat ${ services[3].custom }`}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
