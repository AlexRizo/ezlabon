export const ModalComponent = ({ isOpen }) => {

    const quitModal = () => {
        isOpen(false)
    }
    
    return (
        <div className="w-screen h-screen fixed z-[9999] flex items-center justify-center top-0">
            <div className="hidden xl:block bg-black/40 w-full h-full absolute" onClick={ quitModal }>
            </div>
            <div className="bg-white/60 backdrop-blur-md xl:px-10 px-3 flex flex-col relative xl:w-min w-4/5">
                    <div className="flex justify-end xl:pt-10 pt-2 xl:mb-20 cursor-pointer" onClick={ quitModal }>
                        <svg id="Grupo_111" data-name="Grupo 111" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="31.531" height="31.531" viewBox="0 0 31.531 31.531" className="w-5 xl:w-auto mb-8 xl:m-0">
                            <defs>
                                <clipPath id="clip-path">
                                <rect id="Rectángulo_120" data-name="Rectángulo 120" width="31.531" height="31.531" fill="none" stroke="#2e5afc" strokeWidth="6"/>
                                </clipPath>
                            </defs>
                            <g id="Grupo_110" data-name="Grupo 110" transform="translate(0 0)" clipPath="url(#clip-path)">
                                <line id="Línea_15" data-name="Línea 15" x2="29.576" y2="29.576" transform="translate(0.977 0.977)" fill="none" stroke="#2e5afc" strokeMiterlimit="10" strokeWidth="6"/>
                                <line id="Línea_16" data-name="Línea 16" x1="29.576" y2="29.576" transform="translate(0.978 0.977)" fill="none" stroke="#2e5afc" strokeMiterlimit="10" strokeWidth="6"/>
                            </g>
                        </svg>
                    </div>
                    <div className="text-[#2E5AFC] text-xl xl:text-5xl xl:w-[600px] text-center pb-16 xl:pb-32">
                        <h1 className="font-semibold">¡Gracias!</h1>
                        <p>
                            Tu mensaje ha sido <br className="xl:hidden" /> enviado, nos 
                            pondremos<br className="xl:hidden" /> en contacto contigo.
                        </p>
                    </div>
                </div>
        </div>
    )
}
