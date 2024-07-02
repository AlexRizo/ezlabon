export const ServicesComponent = ({ title = true, services = {}, bg = 'bg-half-gradient', children }) => {
    return (
        <div className={`${ bg } text-black xl:pt-10 relative`}>
            { children }
            <h1 className={`text-[#2E5AFC] font-semibold text-3xl xl:text-6xl text-center xl:mb-16 xl:uppercase py-4 xl:p-0 ${ !title && 'hidden' }`}>Servicios</h1>
            <div className='flex flex-col xl:flex-row justify-center items-start'>
                <div className='flex flex-row-reverse xl:flex-col items-center justify-start xl:justify-center relative z-50 gap-3 text-sm xl:text-xl xl:translate-x-20 xl:-translate-y-7 w-full xl:w-auto' >
                    <div className='xl:text-center relative -translate-x-7 xl:translate-x-[none] w-[105px] xl:w-auto'>
                        <p>{ services[1].p1 }</p>
                        { services[1].p2 && <p>{ services[1].p2 }</p> }
                    </div>
                    <div className="hidden xl:block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16.72" height="93.89" viewBox="0 0 16.72 93.89">
                            <g id="Grupo_48" data-name="Grupo 48" transform="translate(-1321.3 -292.83)">
                                <line id="Línea_9" data-name="Línea 9" y2="86.98" transform="translate(1329.66 292.83)" fill="none" stroke="#2e5afc" strokeMiterlimit="10" strokeWidth="1"/>
                                <circle id="Elipse_11" data-name="Elipse 11" cx="8.36" cy="8.36" r="8.36" transform="translate(1321.3 370)" fill="#2e5afc"/>
                            </g>
                        </svg>
                    </div>
                    <div className="relative xl:hidden -translate-x-[1.40rem]">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={26.396}
                        height={8.43}
                        viewBox="0 0 26.396 8.43"
                        >
                            <g data-name="Grupo 113" transform="rotate(90 13.198 13.198)">
                                <path
                                data-name="L\xEDnea 13"
                                transform="translate(4.215)"
                                fill="none"
                                stroke="#2e5afc"
                                strokeMiterlimit={10}
                                strokeWidth={1}
                                d="M0 0L0 22.912"
                                />
                                <path
                                data-name="Trazado 384"
                                d="M8.43 4.215A4.215 4.215 0 114.215 0 4.215 4.215 0 018.43 4.215"
                                transform="translate(0 17.966)"
                                fill="#2e5afc"
                                />
                            </g>
                        </svg>
                    </div>
                    <div className='bg-white rounded-full p-3 xl:p-7'>
                        <div className="rounded-full w-[175px] h-[175px] xl:w-[450px] xl:h-[450px] bg-white overflow-hidden relative">
                            <div className={`w-full h-full absolute ${ services[1].img } bg-cover bg-no-repeat ${ services[1].custom }`}></div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row-reverse xl:flex-col items-center justify-center relative z-40 gap-3 text-sm xl:text-xl w-full xl:w-auto -translate-y-16 xl:translate-y-0' >
                    <div className='bg-white rounded-full p-3 xl:p-7'>
                        <div className="rounded-full w-[175px] h-[175px] xl:w-[450px] xl:h-[450px] bg-white overflow-hidden relative">
                            <div className={`w-full h-full absolute ${services[2].img} bg-cover bg-no-repeat ${ services[2].custom }`}></div>
                        </div>
                    </div>
                    <div className="hidden xl:block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16.72" height="93.89" viewBox="0 0 16.72 93.89">
                            <g id="Grupo_48" data-name="Grupo 48" transform="translate(-1321.3 -292.83)">
                                <line id="Línea_9" data-name="Línea 9" y2="86.98" transform="translate(1329.66 292.83)" fill="none" stroke="#2e5afc" strokeMiterlimit="10" strokeWidth="1"/>
                                <circle id="Elipse_11" data-name="Elipse 11" cx="8.36" cy="8.36" r="8.36" transform="translate(1321.3 370)" fill="#2e5afc"/>
                            </g>
                        </svg>
                    </div>
                    <div className="relative xl:hidden translate-x-2 rotate-180">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={26.396}
                            height={8.43}
                            viewBox="0 0 26.396 8.43"
                        >
                            <g data-name="Grupo 117" transform="rotate(90 13.198 13.198)">
                                <path
                                data-name="L\xEDnea 13"
                                transform="translate(4.215)"
                                fill="none"
                                stroke="#2e5afc"
                                strokeMiterlimit={10}
                                strokeWidth={1}
                                d="M0 0L0 22.912"
                                />
                                <path
                                data-name="Trazado 384"
                                d="M8.43 4.215A4.215 4.215 0 114.215 0 4.215 4.215 0 018.43 4.215"
                                transform="translate(0 17.966)"
                                fill="#2e5afc"
                                />
                            </g>
                        </svg>
                    </div>
                    <div className='text-center w-min xl:w-auto relative xl:block translate-x-4 xl:translate-x-[none]'>
                        <p>{ services[2].p1 }</p>
                        { services[2].p2 && <p>{ services[2].p2 }</p> }
                    </div>
                </div>
                <div className='flex flex-row-reverse xl:flex-col items-center justify-start xl:justify-center relative gap-3 text-sm xl:text-xl -translate-y-28 xl:-translate-x-20 xl:-translate-y-7 z-30 w-full xl:w-auto' >
                    <div className='xl:text-center relative -translate-x-7 xl:translate-x-[none] w-[105px] xl:w-auto'>
                        <p>{ services[3].p1 }</p>
                        { services[3].p2 && <p>{ services[3].p2 }</p> }
                    </div>
                    <div className="hidden xl:block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16.72" height="93.89" viewBox="0 0 16.72 93.89">
                            <g id="Grupo_48" data-name="Grupo 48" transform="translate(-1321.3 -292.83)">
                                <line id="Línea_9" data-name="Línea 9" y2="86.98" transform="translate(1329.66 292.83)" fill="none" stroke="#2e5afc" strokeMiterlimit="10" strokeWidth="1"/>
                                <circle id="Elipse_11" data-name="Elipse 11" cx="8.36" cy="8.36" r="8.36" transform="translate(1321.3 370)" fill="#2e5afc"/>
                            </g>
                        </svg>
                    </div>
                    <div className="relative xl:hidden -translate-x-[1.40rem]">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={26.396}
                        height={8.43}
                        viewBox="0 0 26.396 8.43"
                        >
                            <g data-name="Grupo 113" transform="rotate(90 13.198 13.198)">
                                <path
                                data-name="L\xEDnea 13"
                                transform="translate(4.215)"
                                fill="none"
                                stroke="#2e5afc"
                                strokeMiterlimit={10}
                                strokeWidth={1}
                                d="M0 0L0 22.912"
                                />
                                <path
                                data-name="Trazado 384"
                                d="M8.43 4.215A4.215 4.215 0 114.215 0 4.215 4.215 0 018.43 4.215"
                                transform="translate(0 17.966)"
                                fill="#2e5afc"
                                />
                            </g>
                        </svg>
                    </div>
                    <div className='bg-white rounded-full p-3 xl:p-7'>
                        <div className="rounded-full w-[175px] h-[175px] xl:w-[450px] xl:h-[450px] bg-white overflow-hidden relative">
                            <div className={`w-full h-full absolute ${ services[3].img } bg-cover bg-no-repeat ${ services[3].custom }`}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
