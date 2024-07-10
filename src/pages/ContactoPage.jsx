import { useState } from 'react';
import { ButtonComponent, IndexComponent, ModalComponent } from '../components/';
import { MailIcon, PhoneIcon, UbicationIcon, WhatsAppIcon } from '../icons';

export const ContactoPage = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(data);
        setIsOpenModal(true);
    }; 
    
    return (
        <>
            <IndexComponent title={ <span className='font-semibold xl:text-7xl text-4xl'>¡Pon tu carga<br /> en nuestras<br /> manos!</span>} titleCustom='xl:translate-y-0' img='custom-bg-contacto-page' custom='bg-bottom' black="bg-black/25" />

            <div className='container m-auto'>
                <h1 className='text-[#2E5AFC] text-3xl xl:text-6xl font-semibold text-center bg-[#F5F5F5] xl:bg-transparent px-10 py-4 xl:py-16'>Cotiza tu transporte de carga:</h1>
                <form onSubmit={ onSubmit } className='bg-[#F5F5F5] xl:px-32 px-10 xl:py-20 flex flex-col gap-6 xl:gap-16'>
                    <div className='flex flex-col gap-2 xl:gap-4 text-sm xl:text-xl'>
                        <h2 className='text-[#2E5AFC] text-lg xl:text-2xl font-semibold'>Datos Personales:</h2>
                        <input className='placeholder:opacity-95 py-3 px-6 xl:p-4 text-black font-normal' type="text" name="nombre" placeholder='Nombre:' required />
                        <input className='placeholder:opacity-95 py-3 px-6 xl:p-4 text-black font-normal' type="text" name="empresa" placeholder='Empresa:' required />
                        <input className='placeholder:opacity-95 py-3 px-6 xl:p-4 text-black font-normal' type="email" name="correo" placeholder='Correo Electrónico:' required />
                        <input className='placeholder:opacity-95 py-3 px-6 xl:p-4 text-black font-normal' type="tel" name="telefono" placeholder='Teléfono:' required />
                    </div>

                    <div className='flex flex-col gap-2 xl:gap-4 text-sm xl:text-xl'>
                        <h2 className='text-[#2E5AFC] text-lg xl:text-2xl leading-none xl:leading-normal font-semibold'>Detalles de solicitud <br className='xl:hidden' /> de transporte:</h2>
                        <input
                            className='hidden xl:block placeholder:opacity-95 py-3 px-6 xl:p-4 text-black font-normal'
                            type="number"
                            name="cantidad"
                            placeholder='Número de contenedores o plataformas para carga suelta:'
                            required
                        />
                        <textarea 
                            name="cantidad" 
                            id="cantidad"
                            className='xl:hidden placeholder:opacity-95 py-1 px-3 xl:p-4 text-black font-normal resize-none'
                            type="number"
                            placeholder='Número de contenedores o plataformas para carga suelta:'
                            required
                        ></textarea>
                        <input className='placeholder:opacity-95 pb-5 pt-1 px-2 xl:p-4 text-black font-normal' type="text" name="tipo" placeholder='Tipo de mercancía:' required />
                        <input className='placeholder:opacity-95 pb-5 pt-1 px-2 xl:p-4 text-black font-normal' type="text" name="peso" placeholder='Peso de mercancía:' required />
                        <input className='placeholder:opacity-95 pb-5 pt-1 px-2 xl:p-4 text-black font-normal' type="text" name="carga" placeholder='¿Dónde se carga?' required />
                        <input className='placeholder:opacity-95 pb-5 pt-1 px-2 xl:p-4 text-black font-normal' type="text" name="descarga" placeholder='¿Dónde se descarga?' required />
                        <textarea className='placeholder:opacity-95 pb-5 pt-1 px-2 xl:p-4 text-black font-normal resize-none' name="servicios" rows="3" placeholder='¿Qué otro servicio(s) necesitas?'></textarea>
                        <textarea className='placeholder:opacity-95 pb-5 pt-1 px-2 xl:p-4 text-black font-normal resize-none' name="detalles" rows="3" placeholder='¿Hay algún otro detalle que quieras agregar?'></textarea>
                    </div>
                    <div className='flex items-center justify-center mb-6 xl:mb-0 xl:mt-5'>
                        <ButtonComponent content='Enviar' custom='font-bold px-16 xl:px-20 py-2.5 xl:py-4' />
                    </div>
                </form>
            </div>
            <div>
                <div></div>
            </div>
            <div className='xl:mt-24 container m-auto'>
                <div className='w-full h-[369px] xl:h-[580px]'>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3767.5512761865194!2d-103.72251062916021!3d19.214791701152517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDEyJzUwLjEiTiAxMDPCsDQzJzE5LjAiVw!5e0!3m2!1ses-419!2smx!4v1720638366715!5m2!1ses-419!2smx" 
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                </div>
                <div className="xl:px-40 px-10 xl:pb-20 mb-7 xl:m-0">
                    <h1 className='text-lg leading-5 xl:leading-normal xl:text-2xl text-[#2E5AFC] font-bold my-5 xl:mb-16'>Con base en Manzanillo y Colima, con cobertura en todo el <br className='xl:hidden' /> territorio Nacional.</h1>
                    <div className='flex flex-col gap-3 xl:gap-10'>
                        <div className='text-sm xl:text-2xl flex items-center gap-3 xl:gap-5 text-black'>
                            <div className='w-[21px] xl:w-[40px] flex justify-center'>
                                <UbicationIcon className="w-[10px] xl:w-auto" />
                            </div>
                            <p>KM 220 carretera Jiquilpan-Manzanillo</p>
                        </div>
                        <div className='text-sm xl:text-2xl flex items-center gap-3 xl:gap-5 text-black'>
                            <div className='w-[21px] xl:w-[40px] flex justify-center'>
                                <PhoneIcon className="w-[15px] xl:w-auto" />
                            </div>
                            <p>312-307-3620 ext 1358</p>
                        </div>
                        <div className='text-sm xl:text-2xl flex items-center gap-3 xl:gap-5 text-black'>
                            <div className='w-[21px] xl:w-[40px] flex justify-center'>
                                <WhatsAppIcon className="w-[20px] xl:w-auto" />
                            </div>
                            <p>312-102-1117</p>
                        </div>
                        <div className='xl:flex gap-32 hidden'>
                            <div className='flex flex-col gap-10'>
                                <div className="flex items-center gap-3 xl:gap-5 text-black" >
                                    <div className='w-[21px] xl:w-[40px] flex justify-center'>
                                        <MailIcon className="w-[21px] xl:w-auto" />
                                    </div>
                                    <span className='text-sm xl:text-2xl'>
                                        <h1 className='text-[#2E5AFC] font-bold'>contacto:</h1>
                                        <p>administracion@ezlabon.mx</p>
                                    </span>
                                </div>
                                <div className="flex items-center just gap-5 text-black" >
                                    <div className='w-[21px] xl:w-[40px] flex justify-center'>
                                        <MailIcon className="w-[21px] xl:w-auto" />
                                    </div>
                                    <span className='text-sm xl:text-2xl'>
                                        <h1 className='text-[#2E5AFC] font-bold'>cotizaciones:</h1>
                                        <p>rbayardo@ezlabon.mx</p>
                                    </span>
                                </div>
                            </div>
                            <div className='flex flex-col xl:gap-10'>
                                <div className="flex items-center just gap-5 text-black" >
                                    <div className='w-[21px] xl:w-[40px] flex justify-center'>
                                        <MailIcon className="w-[21px] xl:w-auto" />
                                    </div>
                                    <span className='text-2xl'>
                                        <h1 className='text-[#2E5AFC] font-bold'>embarques:</h1>
                                        <p>trafico@ezlabon.mx</p>
                                    </span>
                                </div>
                                <div className="flex items-center just gap-5 text-black" >
                                    <div className='w-[21px] xl:w-[40px] flex justify-center'>
                                        <MailIcon className="w-[21px] xl:w-auto" />
                                    </div>
                                    <span className='text-2xl'>
                                        <h1 className='text-[#2E5AFC] font-bold'>gerente admin:</h1>
                                        <p>heriberto@ezlabon.mx</p>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className='flex xl:flex-row flex-col gap-2 xl:hidden'>
                            <div className='flex flex-col gap-2'>
                                <div className="flex items-center gap-3 text-black" >
                                    <div className='w-[21px] flex justify-center'>
                                        <MailIcon className="w-[21px]" />
                                    </div>
                                    <span className='text-sm'>
                                        <h1 className='text-[#2E5AFC] font-bold'>contacto:</h1>
                                        <p>administracion@ezlabon.mx</p>
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 text-black" >
                                    <div className='w-[21px] flex justify-center'>
                                        <MailIcon className="w-[21px]" />
                                    </div>
                                    <span className='text-sm'>
                                        <h1 className='text-[#2E5AFC] font-bold'>embarques:</h1>
                                        <p>trafico@ezlabon.mx</p>
                                    </span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className="flex items-center gap-3 text-black" >
                                    <div className='w-[21px] flex justify-center'>
                                        <MailIcon className="w-[21px]" />
                                    </div>
                                    <span className='text-sm'>
                                        <h1 className='text-[#2E5AFC] font-bold'>cotizaciones:</h1>
                                        <p>rbayardo@ezlabon.mx</p>
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 text-black" >
                                    <div className='w-[21px] flex justify-center'>
                                        <MailIcon className="w-[21px]" />
                                    </div>
                                    <span className='text-sm'>
                                        <h1 className='text-[#2E5AFC] font-bold'>gerente admin:</h1>
                                        <p>heriberto@ezlabon.mx</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            { isOpenModal && <ModalComponent isOpen={ setIsOpenModal } />}
        </>
    )
}
