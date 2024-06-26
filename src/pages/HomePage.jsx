import { ButtonComponent, CounterComponent } from "../components"

const counterData = [
    {
        counter: 50,
        text: 'Años de experiencia',
        subText: null
    },
    {
        counter: 1500,
        text: 'Clientes satisfechos',
        subText: null
    },
    {
        counter: 2100,
        text: 'Entregas en 2023',
        subText: '(contenedores y carga suelta)'
    },
    {
        counter: 3.2,
        text: 'Millones de kilómetros ',
        subText: 'recorridos en 2023'
    }
]

export const HomePage = () => {

    return (
        <>
            <div className="w-full h-screen flex flex-col items-center bg-[url('/img/home/bg-home.jpg')] bg-no-repeat bg-cover">
                <div className="flex flex-col h-full w-full items-end justify-center text-center">
                    <span className="flex flex-col items-center justify-center mt-28 mr-80">
                        <p className="text-3xl">
                            Especialistas en transporte
                        </p>
                        <h1 className="text-6xl font-semibold">
                            de carga federal
                        </h1>
                        <div className="absolute translate-y-44">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="197.223" viewBox="0 0 14 197.223">
                                <circle id="Elipse_16" data-name="Elipse 16" cx="7" cy="7" r="7" transform="translate(0 183.223)" fill="#fff"/>
                                <path id="Trazado_480" data-name="Trazado 480" d="M1419.718,581.285V391.063" transform="translate(-1412.718 -391.063)" fill="none" stroke="#fff" strokeWidth="1.5"/>
                            </svg>
                        </div>
                    </span>
                </div>
                <div className="flex flex-col h-full w-full items-start justify-center text-center">
                    <span className="flex flex-col items-center justify-center ml-60">
                        <div className="absolute translate-x-60 -translate-y-44">
                            <svg xmlns="http://www.w3.org/2000/svg" width="447.25" height="209.474" viewBox="0 0 447.25 209.474">
                                <circle id="Elipse_2" data-name="Elipse 2" cx="7" cy="7" r="7" transform="translate(433.25 40.026)" fill="#fff"/>
                                <path id="Trazado_479" data-name="Trazado 479" d="M503.741,655.623V446.9h439.5v45.715" transform="translate(-502.991 -446.149)" fill="none" stroke="#fff" strokeWidth="1.5"/>
                            </svg>
                        </div>
                        <p className="text-3xl">
                            Servicios integrales
                        </p>
                        <h1 className="text-6xl font-semibold">
                            de logística
                        </h1>
                    </span>
                </div>
                { 
                //? ButtonComponent puede recibir un { children } y 
                //? { content }, pero sólo puede usar uno de los 2 
                }
                <ButtonComponent custom='absolute -bottom-14 flex gap-1 pt-8'>
                    <img src="/img/clic-icon.png" alt="clic-here" />
                    Conoce más de nuestros <strong>servicios</strong>
                </ButtonComponent>
            </div>

            // * Sección de experiencia;  
            <div className="mt-24">
                <h1 className="text-5xl text-blue-700 font-semibold text-center">Experiencia</h1>
                <div className="flex flex-row items-center justify-center w-[85rem] h-[40rem] mt-16 mx-auto">
                    <div className="bg-gray-100 w-full h-full flex items-center justify-center">                            
                        <img src="/img/fletera-coliman.png" alt="" />
                        {/* <img src="/img/ezlabon-fletera-coliman.png" alt="fletera-coliman" /> */}
                    </div>
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-[#172D7E] to-[#2E5AFC]">
                        <p className="text-2xl pl-20 pr-10 leading-10">
                            <strong>ezlabon es la evolución de Fletera Coliman</strong>, una 
                            empresa con un trayecto de <strong>más de 50 años</strong>. Un 
                            negocio familiar que se ha formado durante tres 
                            generaciones y que se encuentra en una fase de 
                            transformación hacia una empresa y marca que 
                            reúne experiencia con preparación. Trabajamos 
                            con la misión de entregar <strong>Asoluciones efectivas 
                            de logística integral</strong> en el mercado mexicano.
                        </p>
                    </div>
                </div>
                <div className="absolute -translate-y-64 bg-[url('/img/home/experience-bg.png')] w-full h-full bg-cover bg-no-repeat bg-center">
                </div>
                <div className="text-black flex flex-row items-start justify-center mt-24">
                    {
                        counterData.map((data, i) => (
                            <CounterComponent key={ i } counter={ data.counter } text={ data.text } subText={ data.subText } />
                        ))
                    }
                </div>
            </div>

        </>
    )
}
