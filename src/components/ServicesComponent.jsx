import { ConnectorIcon } from "../icons"

export const ServicesComponent = ({ title = true, services = {}, bg = 'bg-half-gradient', children }) => {
    return (
        <>
            <div className={`${ bg } text-black pt-10 relative hidden xl:block`}>
                { children }
                <h1 className={`text-[#2E5AFC] font-semibold text-5xl text-center mb-16 ${ !title && 'hidden' }`}>Servicios</h1>
                <div className='flex justify-center items-end'>
                    <div className='flex flex-col items-center relative z-50 gap-3 text-xl translate-x-20 -translate-y-7'  >
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
                        <div className='bg-white rounded-full p-6'>
                            <div className="rounded-full w-[390px] h-[390px] bg-white overflow-hidden relative">
                                <div className={`w-full h-full absolute ${ services[1].img } bg-cover bg-no-repeat ${ services[1].custom }`}></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center relative z-40 gap-3 text-xl' >
                        <div className='bg-white rounded-full p-6'>
                            <div className="rounded-full w-[390px] h-[390px] bg-white overflow-hidden relative">
                                <div className={`w-full h-full absolute ${services[2].img} bg-cover bg-no-repeat ${ services[2].custom }`}></div>
                            </div>
                        </div>
                        <div className="rotate-180">
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
                    <div className='flex flex-col items-center relative gap-3 text-xl -translate-x-20 -translate-y-7 z-30' >
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
                        <div className='bg-white rounded-full p-6'>
                            <div className="rounded-full w-[390px] h-[390px] bg-white overflow-hidden relative">
                                <div className={`w-full h-full absolute ${ services[3].img } bg-cover bg-no-repeat ${ services[3].custom }`}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${ bg } text-black relative xl:hidden overflow-hidden`}>
                { children }
                <h1 className={`text-[#2E5AFC] font-semibold text-3xl text-center py-4`}>Servicios</h1>
                <div className='flex flex-col justify-center items-center relative h-[900px]'>
                    <div className='flex flex-row-reverse items-center absolute z-50 text-sm top-0 translate-x-4'  >
                        <div className='text-start w-[105px]'>
                            <p>Autotransporte</p>
                            <p>de carga federal</p>
                        </div>
                        <div className="relative -translate-x-[0.50rem]">
                            <ConnectorIcon className="" />
                        </div>
                        <div className='bg-white rounded-full p-3'>
                            <div className="rounded-full w-[175px] h-[175px] bg-white overflow-hidden relative">
                                <div className={`w-full h-full absolute ${ services[1].img } bg-cover bg-no-repeat ${ services[1].custom }`}></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row-reverse items-center absolute z-40 text-sm top-0 translate-y-[8.50rem] -translate-x-4' >
                        <div className='bg-white rounded-full p-3'>
                            <div className="rounded-full w-[175px] h-[175px] bg-white overflow-hidden relative">
                                <div className={`w-full h-full absolute ${services[2].img} bg-cover bg-no-repeat ${ services[2].custom }`}></div>
                            </div>
                        </div>
                        <div className="rotate-180">
                            <ConnectorIcon className="w-[25px] h-min" />
                        </div>
                        <div className='text-end w-[105px]'>
                            <p>Traslados</p>
                            <p>foráneos</p>
                        </div>
                    </div>
                    <div className='flex flex-row-reverse items-center absolute z-30 text-sm top-0 translate-y-[17rem] translate-x-4' >
                        <div className='text-start w-[105px]'>
                            <p>Traslados</p>
                            <p>locales</p>
                        </div>
                        <div className="relative -translate-x-[0.50rem]">
                            <ConnectorIcon className="w-[25px] h-min" />
                        </div>
                        <div className='bg-white rounded-full p-3'>
                            <div className="rounded-full w-[175px] h-[175px] bg-white overflow-hidden relative">
                                <div className={`w-full h-full absolute ${ services[3].img } bg-cover bg-no-repeat bg-top`}></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row-reverse items-center absolute z-20 text-sm top-0 translate-y-[25.50rem] -translate-x-4' >
                        <div className='bg-white rounded-full p-3'>
                            <div className="rounded-full w-[175px] h-[175px] bg-white overflow-hidden relative">
                                <div className={`w-full h-full absolute custom-bg-consolidacion bg-cover bg-no-repeat bg-center`}></div>
                            </div>
                        </div>
                        <div className="rotate-180">
                            <ConnectorIcon className="w-[25px] h-min" />
                        </div>
                        <div className='text-end'>
                            <p>Consolidación y </p>
                            <p>desconsolidación</p>
                            <p>de mercancía</p>
                        </div>
                    </div>
                    <div className='flex flex-row-reverse items-center absolute z-10 text-sm top-0 translate-y-[34rem] translate-x-4' >
                        <div className='text-start w-[105px]'>
                            <p>Almacenaje</p>
                            <p>bajo techo</p>
                            <p>y aire libre</p>
                        </div>
                        <div className="relative -translate-x-[0.50rem]">
                            <ConnectorIcon className="w-[25px] h-min" />
                        </div>
                        <div className='bg-white rounded-full p-3'>
                            <div className="rounded-full w-[175px] h-[175px] bg-white overflow-hidden relative">
                                <div className={`w-full h-full absolute custom-bg-almacenamiento bg-cover bg-no-repeat`}></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row-reverse items-center absolute z-[1] text-sm top-0 translate-y-[42.50rem] -translate-x-4' >
                        <div className='bg-white rounded-full p-3'>
                            <div className="rounded-full w-[175px] h-[175px] bg-white overflow-hidden relative">
                                <div className={`w-full h-full absolute custom-bg-exceso bg-cover bg-no-repeat bg-bottom`}></div>
                            </div>
                        </div>
                        <div className="rotate-180">
                            <ConnectorIcon className="w-[25px] h-min" />
                        </div>
                        <div className='text-end'>
                            <p>Servicio</p>
                            <p>especializado con</p>
                            <p>exceso de peso</p>
                            <p>y dimensiones</p>
                            { services[2].p2 && <p>{ services[2].p2 }</p> }
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 translate-y-36 bg-[url('/img/home/experience-bg-mobile.png')] w-[530px] h-[660px] bg-cover bg-[-17rem] bg-no-repeat"></div>
            </div>
        </>
    )
}
