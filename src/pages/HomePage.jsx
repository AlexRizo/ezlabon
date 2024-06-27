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

            <div className="mt-24">
                <h1 className="text-5xl text-[#2E5AFC] font-semibold text-center">Experiencia</h1>
                <div className="flex flex-row items-center justify-center w-[85rem] h-[40rem] mt-16 mx-auto">
                    <div className="bg-gray-100 w-full h-full flex items-center justify-center">                            
                        <img src="/img/fletera-coliman.png" alt="" />
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
                <div className="absolute -translate-y-14 bg-[url('/img/home/experience-bg.png')] w-full h-[40rem] bg-cover bg-no-repeat bg-center">
                </div>
                <div className="text-black flex flex-row items-start justify-center mt-32 gap-28">
                    {
                        counterData.map((data, i) => (
                            <CounterComponent key={ i } counter={ data.counter } text={ data.text } subText={ data.subText } />
                        ))
                    }
                </div>
            </div>

            <div className="mt-72 flex flex-col items-center w-full">
                <h1 className="text-[#2E5AFC] text-4xl font-semibold mb-8">Algunos de nuestros clientes</h1>
                <div className="w-full">
                    <ClientsSliderComponent />
                </div>
            </div>

            <div className="mt-16">
            <div className="absolute translate-y-[6rem] bg-[url('/img/home/contact-bg.png')] w-full h-[45rem] bg-cover bg-no-repeat bg-[-7rem]">
            </div>
                <div className="mb-44 relative">
                    <ButtonComponent custom="flex gap-1 pt-7 pb-4 font-bold px-[8rem] m-auto">
                        <img src="/img/clic-icon.png" alt="clic-here" />
                        Contáctanos
                    </ButtonComponent>
                </div>
                <div className="w-full h-auto flex px-28 relative">
                    <div className="w-full flex justify-center">
                        <p className="text-black text-2xl w-[39rem] leading-10 ml-24">
                            <strong>JUST IN TIME    </strong> es una 
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
                    <div className="w-full flex justify-center">
                        <img src="/img/home/just-in-time.png" width="476" alt="Just In Time" />
                    </div>
                </div>
            </div>

            <div className="mt-40 w-full p-12 bg-gradient-to-br from-[#2E5AFC] to-[#172D7E] flex items-center justify-center">
                    <p className="text-2xl w-[1364px] leading-10">
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