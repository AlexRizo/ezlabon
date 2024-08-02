import React from 'react'

export const PoliticPage = ({ toggle }) => {
    return (
        <>
            <div className='w-screen h-screen fixed top-0 z-[9999] flex items-center justify-center'>
                <div  className='w-full h-full bg-black/60 absolute' onClick={() => toggle(false)}>
                </div>
                <iframe src="/Aviso de privacidad_ezlabon.mx_escritorio.pdf" type="application/pdf" width="80%" height="80%" className='xl:block hidden z-[100]' />
                <iframe src="/Aviso de privacidad_ezlabon.mx_mobile.pdf" type="application/pdf" width="90%" height="90%" className='xl:hidden z-[100] ' />
            </div>
        </>
    )
}
