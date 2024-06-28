import React from 'react'
import { EquipoComponent, ServicesComponent } from '../components'
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
        custom: 'bg-[left_-5rem_top_-3rem] scale-[1.9]'
    },
    3: {
        p1: 'Traslados locales',
        p2: '',
        img: 'custom-bg-traslados-locales',
        custom: 'bg-[-9rem]'
    }
}

const services2 = {
    1: {
        p1: 'Consolidación y desconsolidación',
        p2: 'de mercancía',
        img: 'custom-bg-consolidacion',
        custom: 'bg-[left_-8rem_top] '
    },
    2: {
        p1: 'Almacenamiento bajo',
        p2: 'techo y aire libre',
        img: 'custom-bg-almacenamiento',
        custom: 'bg-center'
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
        icon: <TractoCamionIcon />,
        title: 'Tracto Camiones',
        subTitle: 'para full y sencillo'
    },
    {
        icon: <PlataformasIcon />,
        title: 'Plataformas de 40 pies',
        p1: 'para carga suelta',
        p2: 'y carga contenerizada'
    },
    {
        icon: <DollysIcon />,
        title: 'Equipo de arrastre de dollys',
    },
    {
        icon: <MontacargasIcon />,
        title: 'Montacargas',
    },
    {
        icon: <GruaIcon />,
        title: 'Grúa',
    },
    {
        icon: <CamaIcon />,
        title: 'Cama baja',
    },
    {
        icon: <CamionIcon />,
        title: 'Camión de volteo',
    },
    {
        icon: <TallerIcon />,
        title: 'Taller completamente equipado',
        p1: 'para el mantenimiento y',
        p2: 'cuidado de nuestras unidades'
    },
    {
        icon: <PlataformaPropiaIcon />,
        title: 'Plataforma propia (ARBA)',
        p1: 'de rastreo satelital y monitoreo',
        p2: 'completo de las unidades'
    }
]

export const ServicesPage = () => {
    return (
        <>
            <div className="w-full h-screen bg-[url('/img/services/bg-services.jpg')] bg-no-repeat bg-cover">
                <div className='w-full h-full bg-black/30 flex items-center font-semibold text-6xl'>
                    <h1 className='ml-48'>SERVICIOS</h1>
                    <img src="/img/down-arrow.png" alt="Down Arrow" className='absolute left-[48%] bottom-10' />
                </div>
            </div>
        
            <ServicesComponent services={ services1 } />

            <div>
                <div className='w-full h-28 bg-[#F5F5F5]'></div>
                <div className="absolute translate-y-56 bg-[url('/img/home/experience-bg.png')] w-full h-[40rem] bg-cover bg-no-repeat bg-center z-10"></div>
                <ServicesComponent title={ false } services={ services2 } bg="bg-half-gradient-2" >
                    <div className='absolute w-full h-2/4 bg-[#F5F5F5] z-20 top-0'></div>
                </ServicesComponent>
            </div>

            <div className='grid grid-cols-3 my-52 container m-auto bg-[#F5F5F5] text-black gap-y-20 py-20'>
                {
                    teamData.map((item, index) => {
                        return (
                            <EquipoComponent key={ index } title={ item.title } p1={ item.p1 } p2={ item.p2 } >
                                { item.icon }
                            </EquipoComponent>
                        )
                    })
                }
            </div>
        </>
    )
}
