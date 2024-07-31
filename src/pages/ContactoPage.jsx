import { useRef, useState } from 'react';
import { ButtonComponent, IndexComponent, ModalComponent } from '../components/';
import { MailIcon, PhoneIcon, UbicationIcon, WhatsAppIcon } from '../icons';
import { useForm } from '../hooks/useForm';
import { emailSender } from '../helpers/sendEmail';

const formData = {
    nombre: '',
    empresa: '',
    correo: '',
    telefono: '',
    contenedores: '',
    contenedores2: '',
    mercancia: '',
    peso: '',
    carga: '',
    descarga: '',
    servicios: '',
    detalles: ''
};


export const ContactoPage = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)

    const formRef = useRef();

    const { 
        formState,
        onInputChange, 
        onResetForm, 
        nombre,
        empresa,
        correo,
        telefono, 
        contenedores,
        contenedores2,
        mercancia,
        peso,
        carga,
        descarga,
        servicios,
        detalles 
    } = useForm(formData);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({ formState });
        // onResetForm();
        setIsOpenModal(true);
        emailSender(formState);
    }; 
    
    return (
        <>
            <IndexComponent title={ <span className='font-semibold'>¡Pon tu carga<br className='hidden xl:block' /> en nuestras<br className='hidden xl:block' /> manos!</span>} titleCustom='-translate-y-28 xl:translate-y-0 xl:translate-x-52 xl:text-7xl text-4xl leading-8' img='custom-bg-contacto-page' custom='bg-bottom' black="bg-black/25" />

            <div className='container m-auto'>
                <h1 className='text-[#2E5AFC] text-3xl xl:text-5xl font-semibold text-center bg-[#F5F5F5] xl:bg-transparent px-10 py-4 xl:py-16'>Cotiza tu transporte de carga:</h1>
                <form ref={ formRef } onSubmit={ onSubmit } className='bg-[#F5F5F5] xl:px-32 px-10 xl:py-20 flex flex-col gap-6 xl:gap-16'>
                    <div className='flex flex-col gap-2 xl:gap-4 text-sm xl:text-xl'>
                        <h2 className='text-[#2E5AFC] text-lg xl:text-2xl font-semibold'>Datos Personales:</h2>
                        <input className='rounded-none placeholder:opacity-95 py-3 px-3 xl:p-4 text-black font-normal' type="text" name="nombre" placeholder='Nombre:' required onChange={ onInputChange } value={ nombre } />
                        <input className='rounded-none placeholder:opacity-95 py-3 px-3 xl:p-4 text-black font-normal' type="text" name="empresa" placeholder='Empresa:' required onChange={ onInputChange } value={ empresa } />
                        <input className='rounded-none placeholder:opacity-95 py-3 px-3 xl:p-4 text-black font-normal' type="email" name="correo" placeholder='Correo Electrónico:' required onChange={ onInputChange } value={ correo } />
                        <input className='rounded-none placeholder:opacity-95 py-3 px-3 xl:p-4 text-black font-normal' type="tel" name="telefono" placeholder='Teléfono:' required onChange={ onInputChange } value={ telefono } />
                    </div>

                    <div className='flex flex-col gap-2 xl:gap-4 text-sm xl:text-xl'>
                        <h2 className='text-[#2E5AFC] text-lg xl:text-2xl leading-none xl:leading-normal font-semibold'>Detalles de solicitud <br className='xl:hidden' /> de transporte:</h2>
                        <input
                            className='rounded-none hidden xl:block placeholder:opacity-95 py-3 px-6 xl:p-4 text-black font-normal'
                            type="number"
                            name="contenedores"
                            placeholder='Número de contenedores o plataformas para carga suelta:'
                            onChange={ onInputChange } value={ contenedores }
                        />
                        <textarea 
                            name="contenedores2" 
                            id="contenedores2"
                            className='rounded-none xl:hidden placeholder:opacity-95 py-1 px-3 xl:p-4 text-black font-normal resize-none'
                            placeholder='Número de contenedores o plataformas para carga suelta:'
                            onChange={ onInputChange } value={ contenedores2 }
                        ></textarea>
                        <input className='rounded-none placeholder:opacity-95 pb-5 pt-1 px-2 xl:p-4 text-black font-normal' type="text" name="mercancia" placeholder='Tipo de mercancía:' required onChange={ onInputChange } value={ mercancia } />
                        <input className='rounded-none placeholder:opacity-95 pb-5 pt-1 px-2 xl:p-4 text-black font-normal' type="text" name="peso" placeholder='Peso de mercancía:' required onChange={ onInputChange } value={ peso } />
                        <input className='rounded-none placeholder:opacity-95 pb-5 pt-1 px-2 xl:p-4 text-black font-normal' type="text" name="carga" placeholder='¿Dónde se carga?' required onChange={ onInputChange } value={ carga } />
                        <input className='rounded-none placeholder:opacity-95 pb-5 pt-1 px-2 xl:p-4 text-black font-normal' type="text" name="descarga" placeholder='¿Dónde se descarga?' required onChange={ onInputChange } value={ descarga } />
                        <textarea className='rounded-none placeholder:opacity-95 pb-5 pt-1 px-2 xl:p-4 text-black font-normal resize-none' name="servicios" rows="3" placeholder='¿Qué otro(s) servicio(s) necesitas?' onChange={ onInputChange } value={ servicios } ></textarea>
                        <textarea className='rounded-none placeholder:opacity-95 pb-5 pt-1 px-2 xl:p-4 text-black font-normal resize-none' name="detalles" rows="3" placeholder='¿Hay algún otro detalle que quieras agregar?' onChange={ onInputChange } value={ detalles } ></textarea>
                    </div>
                    <div className='flex items-center justify-center mb-6 xl:mb-0 xl:mt-5'>
                        <ButtonComponent content='Enviar' custom='font-bold px-16 xl:px-[6rem] py-2.5 xl:py-4' />
                    </div>
                </form>
            </div>
            <div>
                <div></div>
            </div>
            <div className='xl:mt-24 container m-auto'>
                <div className='w-full h-[369px] xl:h-[580px]'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2240.208516671752!2d-103.72225430840699!3d19.214122078477505!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472496826b1280f7%3A0xb0bda412172e38a!2sEZLABON%20LOG%C3%8DSTICA%20INTEGRAL%20SA%20DE%20CV!5e0!3m2!1ses-419!2smx!4v1721164272907!5m2!1ses-419!2smx"
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                <div className="xl:px-40 px-10 xl:pb-20 mb-7 xl:m-0">
                    <h1 className='text-lg leading-5 xl:leading-normal xl:text-xl text-[#2E5AFC] font-bold my-5 xl:mb-16'>Con base en Manzanillo y Colima, con cobertura en todo el <br className='xl:hidden' /> territorio Nacional.</h1>
                    <div className='flex flex-col gap-3 xl:gap-10'>
                        <div className='text-sm xl:text-xl flex items-center gap-3 xl:gap-5 text-black'>
                            <div className='w-[21px] xl:w-[40px] flex justify-center'>
                                <UbicationIcon className="w-[10px] xl:w-[17px]" />
                            </div>
                            <p>KM 220 carretera Jiquilpan-Manzanillo</p>
                        </div>
                        <div className='text-sm xl:text-xl flex items-center gap-3 xl:gap-5 text-black'>
                            <div className='w-[21px] xl:w-[40px] flex justify-center'>
                                <PhoneIcon className="w-[15px] xl:w-[27px]" />
                            </div>
                            <p>312-307-3620 ext 1358</p>
                        </div>
                        <div className='text-sm xl:text-xl flex items-center gap-3 xl:gap-5 text-black'>
                            <div className='w-[21px] xl:w-[40px] flex justify-center'>
                                <WhatsAppIcon className="w-[20px] xl:w-[36px] h-min" />
                            </div>
                            <p>312-102-1117</p>
                        </div>
                        <div className='xl:flex gap-32 hidden'>
                            <div className='flex flex-col gap-10'>
                                <div className="flex items-center gap-3 xl:gap-5 text-black" >
                                    <div className='w-[21px] xl:w-[40px] flex justify-center'>
                                        <MailIcon className="w-[21px] xl:w-[38px]" />
                                    </div>
                                    <span className='text-sm xl:text-xl'>
                                        <h1 className='text-[#2E5AFC] font-bold'>contacto:</h1>
                                        <p>administracion@ezlabon.mx</p>
                                    </span>
                                </div>
                                <div className="flex items-center just gap-5 text-black" >
                                    <div className='w-[21px] xl:w-[40px] flex justify-center'>
                                        <MailIcon className="w-[21px] xl:w-[38px]" />
                                    </div>
                                    <span className='text-sm xl:text-xl'>
                                        <h1 className='text-[#2E5AFC] font-bold'>cotizaciones:</h1>
                                        <p>rbayardo@ezlabon.mx</p>
                                    </span>
                                </div>
                            </div>
                            <div className='flex flex-col xl:gap-10'>
                                <div className="flex items-center just gap-5 text-black" >
                                    <div className='w-[21px] xl:w-[40px] flex justify-center'>
                                        <MailIcon className="w-[21px] xl:w-[38px]" />
                                    </div>
                                    <span className='text-xl'>
                                        <h1 className='text-[#2E5AFC] font-bold'>embarques:</h1>
                                        <p>trafico@ezlabon.mx</p>
                                    </span>
                                </div>
                                <div className="flex items-center just gap-5 text-black" >
                                    <div className='w-[21px] xl:w-[40px] flex justify-center'>
                                        <MailIcon className="w-[21px] xl:w-[38px]" />
                                    </div>
                                    <span className='text-xl'>
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