import { EquipoComponent, IndexComponent, ServicesComponent } from '../components'
import { CamaIcon, CamionIcon, DollysIcon, GruaIcon, MontacargasIcon, PlataformaPropiaIcon, PlataformasIcon, TallerIcon, TractoCamionIcon } from '../icons'

const services1 = {
    1: {
        p1: 'Autotransporte',
        p2: 'de carga federal',
        img: 'custom-bg-autotransporte',
        custom: ''
    },
    2: {
        p1: 'Traslados foráneos',
        p2: '',
        img: 'custom-bg-traslados-foraneos',
        custom: 'bg-[left_-1.70rem_top_-1rem] xl:bg-[left_-5rem_top_-3rem] scale-[1.9]'
    },
    3: {
        p1: 'Traslados locales',
        p2: '',
        img: 'custom-bg-traslados-locales',
        custom: 'bg-[-3rem] xl:bg-[-6rem] xl:scale-[1.1]'
    }
}

const services2 = {
    1: {
        p1: 'Consolidación y desconsolidación',
        p2: 'de mercancía',
        img: 'custom-bg-consolidacion',
        custom: 'xl:bg-[-8.50rem]'
    },
    2: {
        p1: 'Almacenaje bajo',
        p2: 'techo y aire libre',
        img: 'custom-bg-almacenamiento',
        custom: 'bg-center xl:bg-[-7rem] xl:scale-[1.1]'
    },
    3: {
        p1: 'Servicio especializado con',
        p2: 'exceso de peso y dimensiones',
        img: 'custom-bg-exceso',
        custom: 'bg-[center_-11rem]'
    }
}

const teamData = [
    {
        icon: <TractoCamionIcon className="w-[75px] h-min xl:w-[130px]" />,
        title: 'Tracto Camiones',
        p: 'para full y sencillo',
        custom: 'order-1'
    },
    {
        icon: <PlataformasIcon className="w-[75px] h-min xl:w-[130px]" />,
        title: 'Plataformas de 40 pies',
        p: <span>para carga suelta y <br className='cl:hidden'/> carga contenerizada</span>,
        custom: 'order-2'
    },
    {
        icon: <DollysIcon className="w-[80px] h-min xl:w-[150px]" />,
        title: <span>Equipo de <br /> arrastre de dollys</span>,
        custom: 'order-7 xl:order-3',
    },
    {
        icon: <MontacargasIcon className="w-[65px] h-min xl:w-[120px]" />,
        title: 'Montacargas',
        custom: 'order-3 xl:order-4'
    },
    {
        icon: <GruaIcon className="w-[75px] h-min xl:w-[130px]" />,
        title: 'Grúa',
        custom: 'order-4 xl:order-5'
    },
    {
        icon: <CamaIcon className="w-[103px] h-min xl:w-[190px]" />,
        title: 'Cama baja',
        custom: 'order-9 xl:order-6'
    },
    {
        icon: <CamionIcon className="w-[81px] h-min xl:w-[150px]" />,
        title: 'Camión de volteo',
        custom: 'order-5 xl:order-7'
    },
    {
        icon: <TallerIcon className="w-[45px] h-min xl:w-[70px]" />,
        title: 'Taller completamente equipado',
        p: <span>para el mantenimiento y <br/> cuidado de nuestras unidades</span>,
        custom: 'order-6 xl:order-8'
    },
    {
        icon: <PlataformaPropiaIcon className="w-[69px] h-min xl:w-[130px]" />,
        title: 'Plataforma propia (ARBA)',
        p: <span>de rastreo satelital y monitoreo <br/> completo de las unidades</span>,
        custom: 'order-8 xl:order-9'
    }
]

export const ServicesPage = () => {
    return (
        <>
            <IndexComponent title='Servicios' titleCustom="-translate-y-32 xl:-translate-y-10 xl:translate-x-36" img='custom-bg-servicios-page' black='bg-black/30' />
        
            <ServicesComponent services={ services1 } />

            <div className='mt-16 hidden xl:block xl:relative xl:overflow-hidden xl:h-[960px]'>
                <div className='w-full h-28 bg-[#F5F5F5]'></div>
                <div className="absolute -translate-x-20 translate-y-14 xl:bg-[url('/img/home/experience-bg-2.png')] w-[2125px] h-[820px] bg-cover bg-no-repeat rotate-[4deg] z-10"></div>
                <ServicesComponent title={ false } services={ services2 } bg="bg-half-gradient-2" >
                    <div className='absolute w-full h-2/4 bg-[#F5F5F5] z-20 top-0'></div>
                </ServicesComponent>
            </div>

            <div className='container mt-1 xl:m-auto bg-[#F5F5F5] text-black py-10 xl:py-12'>
                <h1 className='text-center text-[#2E5AFC] text-3xl xl:m-0 mb-6 xl:text-5xl font-semibold'>Equipo</h1>
                <div className='grid xl:grid-cols-3 gap-y-2 xl:gap-y-5 grid-cols-2 h-screen'>
                    {
                        teamData.map((item, index) => {
                            return (
                                <EquipoComponent key={ index } title={ item.title } p={ item.p } custom={ item.custom } >
                                    { item.icon }
                                </EquipoComponent>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex items-center justify-center gap-4 xl:py-16 xl:mt-5 py-5 xl:px-0 px-[3.25rem]'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="38.832" height="38.833" viewBox="0 0 38.832 38.833">
                        <g id="Grupo_128" data-name="Grupo 128" transform="translate(0 0)">
                            <path id="Trazado_477" data-name="Trazado 477" d="M38.832,19.417A19.416,19.416,0,1,1,19.415,0,19.417,19.417,0,0,1,38.832,19.417" transform="translate(0 0)" fill="#2e5afc"/>
                            <path id="Trazado_478" data-name="Trazado 478" d="M17.452,30.008l-.776-1.2q-3.148-4.88-6.3-9.762a8.383,8.383,0,1,1,15.3-6.118,8.07,8.07,0,0,1-1.151,6.113c-2.3,3.6-4.63,7.189-6.947,10.782C17.548,29.875,17.51,29.923,17.452,30.008Zm4.2-15.468a4.193,4.193,0,1,0-4.189,4.2A4.2,4.2,0,0,0,21.649,14.54Z" transform="translate(1.957 1.329)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.017"/>
                        </g>
                    </svg>
                </div>
                <h1 className='xl:text-2xl text-sm text-black xl:text-gray-400'>Todas nuestras unidades cuentan con equipo de rastreo satelital GPS.</h1>
            </div>
        </>
    )
}
