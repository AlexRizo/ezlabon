import React from 'react'
import { ServicesComponent } from '../components'

const services1 = {
    1: {
        p1: 'Autotransporte',
        p2: 'de carga federal',
        img: 'autotransporte.jpg',
        custom: ''
    },
    2: {
        p1: 'Traslados foráneos',
        p2: '',
        img: 'traslados.jpg',
        custom: 'bg-[left_-5rem_top_-3rem] scale-[1.9]'
    },
    3: {
        p1: 'Traslados locales',
        p2: '',
        img: 'traslados-loc.jpg',
        custom: 'bg-[-9rem]'
    }
}

const services2 = {
    1: {
        p1: 'Consolidación y desconsolidación',
        p2: 'de mercancía',
        img: 'autotransporte.jpg',
        custom: ''
    },
    2: {
        p1: 'Almacenamiento bajo',
        p2: 'techo y aire libre',
        img: 'traslados.jpg',
        custom: 'bg-[left_-5rem_top_-3rem] scale-[1.9]'
    },
    3: {
        p1: 'Servicio especializado con',
        p2: 'exceso de peso y dimensiones',
        img: 'traslados-loc.jpg',
        custom: 'bg-[-9rem]'
    }
}

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

            <ServicesComponent title={ false } services={ services2 } />
        </>
    )
}
