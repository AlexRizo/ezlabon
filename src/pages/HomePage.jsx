import { NavLink } from "react-router-dom"
import { ButtonComponent, ClientsSliderComponent, CounterComponent } from "../components"
import { useCounter } from "../helpers/counter"
import { PointerIcon } from "../icons";

export const HomePage = () => {
    const { init, count } = useCounter();

    
    const counterData = [
        {
            counter: 50,
            text: 'Años de experiencia',
            subText: null,
            interval: 30
        },
        {
            counter: 1500,
            text: 'Clientes satisfechos',
            subText: null,
            interval: 2
        },
        {
            counter: 2100,
            text: 'Entregas en 2023',
            subText: '(contenedores y carga suelta)',
            interval: 1
        },
        {
            counter: 3.2,
            text: 'Millones de kilómetros ',
            subText: 'recorridos en 2023',
            interval: 80
        }
    ];

    return (
        <>
            <div className="w-full h-screen flex flex-col items-center bg-[url('/img/home/bg-home-mobile.jpg')] xl:bg-[url('/img/home/bg-home.jpg')] bg-no-repeat bg-cover bg-right xl:bg-center">
                { 
                //? ButtonComponent puede recibir un { children } y 
                //? { content }, pero sólo puede usar uno de los 2 
                }
                <NavLink to={"/servicios"} className="absolute bottom-6 xl:-bottom-12 w-full xl:w-auto px-4 xl:p-0">
                    <ButtonComponent custom='flex justify-center gap-2 pt-3 xl:pt-7 xl:pb-3 px-0 w-full xl:w-auto text-sm'>
                        <PointerIcon className="rotate-[30deg] w-[26px] -translate-y-1" />
                        <p>Conoce más de nuestros <strong>servicios</strong></p>
                    </ButtonComponent>
                </NavLink>
            </div>

            <div className="relative overflow-hidden">
                <h1 className="text-3xl xl:text-5xl text-[#2E5AFC] font-semibold text-center py-5 xl:py-12 xl:mt-12">Experiencia</h1>
                <div className="flex flex-col xl:flex-row items-center justify-center w-full xl:w-[1170px] xl:h-[630px] xl:mx-auto">
                    <div className="bg-gray-100 w-full h-full flex items-center justify-center py-16">                            
                        <img src="/img/fletera-coliman.png" className="w-64 xl:w-[280px]" alt="Fletera Coliman" />
                    </div>
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-[#172D7E] to-[#2E5AFC]">
                        <p className="text-base xl:text-xl leading-6 xl:leading-[2.25rem] w-[340px] xl:w-[456px]">
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
                <div className="absolute -translate-x-72 translate-y-[3.25rem] xl:translate-x-0 xl:-translate-y-20 bg-[url('/img/home/experience-bg-mobile.png')] xl:bg-[url('/img/home/experience-bg.png')] w-[921px] xl:w-full h-[690px] xl:h-[40rem] bg-cover bg-no-repeat bg-center">
                </div>
                <div className="text-black flex flex-col xl:flex-row xl:items-start justify-center xl:mt-32 xl:gap-10 container m-auto xl:px-24">
                    {
                        counterData.map((data, i) => (
                            <CounterComponent key={ i } counter={ data.counter } text={ data.text } subText={ data.subText } interval={data.interval} />
                        ))
                    }
                </div>
            </div>
            <div className="mt-5 xl:mt-64 flex flex-col items-center w-full">
                <h1 className="text-[#2E5AFC] text-2xl xl:text-4xl font-semibold xl:mb-8 py-4 xl:px-28 xl:p-0 text-center">Algunos de <br className="xl:hidden" /> nuestros clientes</h1>
                <div className="w-full">
                    <ClientsSliderComponent />
                </div>
            </div>
            <div className="xl:mt-16">
                <div className="absolute translate-x-[-19.72rem] xl:translate-x-0 translate-y-60 xl:translate-y-[4.25rem] bg-[url('/img/home/experience-bg-mobile.png')] xl:bg-[url('/img/home/contact-bg.png')] w-[921px] xl:w-full h-[690px] xl:h-[45rem] bg-cover bg-no-repeat xl:bg-[-7rem]">
                </div>
                <div className="xl:mb-44 relative py-6 xl:p-0">
                    <NavLink to={"/contacto"} className="w-min flex m-auto" >
                        <ButtonComponent custom="flex font-bold xl:gap-3 py-3 xl:pt-7 xl:pb-4 px-16 xl:px-[7rem] m-auto text-lg">
                        <PointerIcon className="rotate-[30deg] w-[26px]" />
                            Contáctanos
                        </ButtonComponent>
                    </NavLink>
                </div>
                <div className="w-full h-auto flex flex-col xl:flex-row xl:px-28 relative container m-auto">
                    <div className="w-full flex justify-center">
                        <p className="text-black text-base xl:text-xl w-[345px] xl:w-[32rem] leading-7 xl:leading-9 ">
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
                    <div className="w-full flex xl:justify-center ml-6 mt-5 xl:m-0 relative">
                        <img src="/img/home/just-in-time.png" className="w-80 xl:w-[430px] xl:absolute xl:-top-1" alt="Just In Time" />
                    </div>
                </div>
            </div>
            <div className="mt-5 xl:mt-40 w-full py-11 bg-gradient-to-br xl:bg-gradient-to-br from-[#2E5AFC] to-[#0e2269] flex items-center justify-center">
                    <p className="text-base xl:text-xl w-[345px] xl:w-[1100px] xl:leading-9">
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