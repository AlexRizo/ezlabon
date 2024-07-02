import { NavLink } from "react-router-dom"
import { ButtonComponent, ClientsSliderComponent, CounterComponent } from "../components"

const counterData = [
    {
        counter: 50,
        text: 'Años de experiencia',
        subText: null
    },
    {
        counter: '1,500',
        text: 'Clientes satisfechos',
        subText: null
    },
    {
        counter: '2,100',
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
            <div className="w-full h-screen flex flex-col items-center bg-[url('/img/home/bg-home-mobile.jpg')] xl:bg-[url('/img/home/bg-home.jpg')] bg-no-repeat bg-cover bg-[-15rem] xl:bg-[0]">
                <div className="flex flex-col h-full w-full items-end justify-center text-center">
                    <span className="flex flex-col items-center justify-center mt-44 xl:mt-28 mr-10 xl:mr-80">
                        <p className="xl:text-3xl">
                            Especialistas en transporte
                        </p>
                        <h1 className="text-3xl xl:text-6xl font-semibold">
                            de carga federal
                        </h1>
                        <div className="xl:absolute xl:translate-y-44 mt-2 xl:m-0">
                            <div className="hidden xl:block">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="197.223" viewBox="0 0 14 197.223">
                                    <circle id="Elipse_16" data-name="Elipse 16" cx="7" cy="7" r="7" transform="translate(0 183.223)" fill="#fff"/>
                                    <path id="Trazado_480" data-name="Trazado 480" d="M1419.718,581.285V391.063" transform="translate(-1412.718 -391.063)" fill="none" stroke="#fff" strokeWidth="1.5"/>
                                </svg>
                            </div>
                            <div className="xl:hidden">
                                <svg id="Grupo_1" data-name="Grupo 1" xmlns="http://www.w3.org/2000/svg" width="6.414" height="90.355" viewBox="0 0 6.414 90.355">
                                    <circle id="Elipse_1" data-name="Elipse 1" cx="3.207" cy="3.207" r="3.207" transform="translate(0 83.941)" fill="#fff"/>
                                    <path id="Trazado_45" data-name="Trazado 45" d="M1419.718,478.211V391.063" transform="translate(-1416.511 -391.063)" fill="none" stroke="#fff" stroke-width="1.5"/>
                                </svg>
                            </div>
                        </div>
                    </span>
                </div>
                <div className="flex flex-col h-full w-full items-start justify-center text-center">
                    <span className="flex flex-col items-center justify-center ml-[4.5rem] xl:ml-60 mb-40">
                        <div className="xl:absolute xl:translate-x-60 xl:-translate-y-44">
                            <div className="hidden xl:block">
                                <svg xmlns="http://www.w3.org/2000/svg" width="447.25" height="209.474" viewBox="0 0 447.25 209.474">
                                    <circle id="Elipse_2" data-name="Elipse 2" cx="7" cy="7" r="7" transform="translate(433.25 40.026)" fill="#fff"/>
                                    <path id="Trazado_479" data-name="Trazado 479" d="M503.741,655.623V446.9h439.5v45.715" transform="translate(-502.991 -446.149)" fill="none" stroke="#fff" strokeWidth="1.5"/>
                                </svg>
                            </div>
                            <div className="xl:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" width="6.414" height="90.355" viewBox="0 0 6.414 90.355">
                                    <g id="Grupo_2" data-name="Grupo 2" transform="translate(6.414 90.355) rotate(180)">
                                        <circle id="Elipse_1" data-name="Elipse 1" cx="3.207" cy="3.207" r="3.207" transform="translate(0 83.941)" fill="#fff"/>
                                        <path id="Trazado_45" data-name="Trazado 45" d="M0,87.148V0" transform="translate(3.207 0)" fill="none" stroke="#fff" strokeWidth="1.5"/>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <p className="xl:text-3xl">
                            Servicios integrales
                        </p>
                        <h1 className="text-3xl xl:text-6xl font-bold">
                            de logística
                        </h1>
                    </span>
                </div>
                { 
                //? ButtonComponent puede recibir un { children } y 
                //? { content }, pero sólo puede usar uno de los 2 
                }
                <NavLink to={"/servicios"} className="absolute bottom-5 xl:-bottom-14 w-full xl:w-auto px-4 xl:p-0">
                    <ButtonComponent custom='flex justify-center gap-1 pt-3 xl:pt-8 px-0 w-full xl:w-auto text-sm'>
                        <img src="/img/clic-icon.png" className="w-5 xl:w-auto" alt="clic-here" />
                        Conoce más de nuestros <strong>servicios</strong>
                    </ButtonComponent>
                </NavLink>
            </div>

            <div className="xl:mt-24">
                <h1 className="text-3xl xl:text-5xl text-[#2E5AFC] font-semibold text-center py-5 xl:p-0">Experiencia</h1>
                <div className="flex flex-col xl:flex-row items-center justify-center w-full xl:w-[85rem] xl:h-[40rem] xl:mt-16 xl:mx-auto">
                    <div className="bg-gray-100 w-full h-full flex items-center justify-center p-10">                            
                        <img src="/img/fletera-coliman.png" className="w-56 xl:w-auto" alt="Fletera Coliman" />
                    </div>
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-[#172D7E] to-[#2E5AFC] px-10 py-20">
                        <p className="text-base xl:text-2xl xl:pl-20 xl:pr-10 leading-6 xl:leading-10">
                            <strong>ezlabon es la evolución de Fletera Coliman</strong>, una 
                            empresa con un trayecto de <strong>más de 50 años</strong>. Un 
                            negocio familiar que se ha formado durante tres 
                            generaciones y que se encuentra en una fase de 
                            transformación hacia una empresa y marca que 
                            reúne experiencia con preparación. Trabajamos 
                            con la misión de entregar <strong>soluciones efectivas 
                            de logística integral</strong> en el mercado mexicano.
                        </p>
                    </div>
                </div>
                <div className="absolute -translate-y-14 bg-[url('/img/home/experience-bg.png')] w-full h-[40rem] bg-cover bg-no-repeat bg-center">
                </div>
                <div className="text-black flex flex-col xl:flex-row xl:items-start justify-center xl:mt-32 xl:gap-28">
                    {
                        counterData.map((data, i) => (
                            <CounterComponent key={ i } counter={ data.counter } text={ data.text } subText={ data.subText } />
                        ))
                    }
                </div>
            </div>
            <div className="mt-5 xl:mt-72 flex flex-col items-center w-full">
                <h1 className="text-[#2E5AFC] text-2xl xl:text-4xl font-semibold xl:mb-8 py-4 px-28 xl:p-0 text-center">Algunos de nuestros clientes</h1>
                <div className="w-full">
                    <ClientsSliderComponent />
                </div>
            </div>
            <div className="xl:mt-16">
                <div className="absolute translate-y-[6rem] bg-[url('/img/home/contact-bg.png')] w-full h-[45rem] bg-cover bg-no-repeat bg-[-7rem]">
                </div>
                <div className="xl:mb-44 relative py-6 xl:p-0">
                    <ButtonComponent custom="flex font-bold xl:gap-1 xl:pt-7 xl:pb-4 px-16 xl:px-[8rem] m-auto">
                        <img src="/img/clic-icon.png" className="w-5 xl:w-auto" alt="clic-here" />
                        Contáctanos
                    </ButtonComponent>
                </div>
                <div className="w-full h-auto flex flex-col xl:flex-row xl:px-28 relative px-10">
                    <div className="w-full flex justify-center">
                        <p className="text-black text-base xl:text-2xl xl:w-[39rem] leading-7 xl:leading-10 xl:ml-24">
                            <strong>JUST IN TIME</strong> es una 
                            filosofía de la gestión empresarial que 
                            habla de consolidar un vínculo con empresa, 
                            mercado y sociedad. A través de la 
                            satisfacción de las necesidades de todas 
                            las partes mencionadas, especialmente la 
                            del mercado o cliente.
                            <br />
                            <br />
                            Cumpliendo con una producción y entrega del 
                            bien o servicio requerido, en el tiempo y 
                            forma acordados. Para cumplir con tal objetivo 
                            es esencial un ezlabon que tenga la experiencia 
                            y el conocimiento de logística integral, que 
                            convierta la necesidad en una solución.
                        </p>
                    </div>
                    <div className="w-full flex xl:justify-center mt-5 xl:m-0">
                        <img src="/img/home/just-in-time.png" className="w-80 xl:w-[476px]" alt="Just In Time" />
                    </div>
                </div>
            </div>
            <div className="mt-5 xl:mt-40 w-full p-11 bg-gradient-to-b xl:bg-gradient-to-br from-[#2E5AFC] to-[#172D7E] flex items-center justify-center">
                    <p className="text-base xl:text-2xl xl:w-[1364px] xl:leading-10">
                        Cada ezlabon existe para mantener la cadena en 
                        unidad y lograr comunicarla con sus dos extremos. 
                        Somos el ezlabon dedicado a entender cada parte 
                        de la cadena con el fin de conseguir consolidar 
                        su funcionalidad.
                        <br />
                        <br />
                        No vemos a la logística como una actividad, sino 
                        como una ventaja competitiva. Creemos en su 
                        coherencia con el valor agregado del producto. 
                        Conscientes de que vivimos en una sociedad 
                        globalizada y en cambio constante, tratamos de 
                        mantenernos adaptados a sus condiciones.
                        <br />
                        <br />
                        Somos ezlabon, un equipo de logística integral 
                        comprometido con el mercado, a empatizar con él 
                        y hacer lo que esté en nuestras manos para 
                        convertir su necesidad en una solución.
                    </p>
            </div>
        </>
    )
}