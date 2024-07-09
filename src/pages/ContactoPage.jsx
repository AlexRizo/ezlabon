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
            <IndexComponent title={<span className='font-semibold xl:text-6xl text-4xl'>¡Pon tu carga<br /> en nuestras<br /> manos!</span>} img='custom-bg-contacto-page' custom='bg-bottom' black={true} />

            <div className='container m-auto'>
                <h1 className='text-[#2E5AFC] text-3xl xl:text-6xl font-semibold text-center bg-[#F5F5F5] xl:bg-transparent px-10 py-4 xl:py-16'>Cotiza tu transporte de carga:</h1>
                <form onSubmit={ onSubmit } className='bg-[#F5F5F5] xl:px-32 px-10 xl:py-20 flex flex-col gap-6 xl:gap-16'>
                    <div className='flex flex-col gap-2 xl:gap-4 text-sm xl:text-xl'>
                        <h2 className='text-[#2E5AFC] text-lg xl:text-2xl font-semibold'>Datos Personales:</h2>
                        <input className='placeholder:opacity-75 py-3 px-6 xl:p-4 text-black font-normal' type="text" name="nombre" placeholder='Nombre:' required />
                        <input className='placeholder:opacity-75 py-3 px-6 xl:p-4 text-black font-normal' type="text" name="empresa" placeholder='Empresa:' required />
                        <input className='placeholder:opacity-75 py-3 px-6 xl:p-4 text-black font-normal' type="email" name="correo" placeholder='Correo Electrónico:' required />
                        <input className='placeholder:opacity-75 py-3 px-6 xl:p-4 text-black font-normal' type="tel" name="telefono" placeholder='Teléfono:' required />
                    </div>

                    <div className='flex flex-col gap-2 xl:gap-4 text-sm xl:text-xl'>
                        <h2 className='text-[#2E5AFC] text-lg xl:text-2xl leading-none xl:leading-normal font-semibold'>Detalles de solicitud <br className='xl:hidden' /> de transporte:</h2>
                        <input
                            className='hidden xl:block placeholder:opacity-75 py-3 px-6 xl:p-4 text-black font-normal'
                            type="number"
                            name="cantidad"
                            placeholder='Número de contenedores o plataformas para carga suelta:'
                            required
                        />
                        <textarea 
                            name="cantidad" 
                            id="cantidad"
                            className='xl:hidden placeholder:opacity-75 py-1 px-3 xl:p-4 text-black font-normal resize-none'
                            type="number"
                            placeholder='Número de contenedores o plataformas para carga suelta:'
                            required
                        ></textarea>
                        <input className='placeholder:opacity-75 pb-5 pt-1 px-2 xl:p-4 text-black font-normal' type="text" name="tipo" placeholder='Tipo de mercancía:' required />
                        <input className='placeholder:opacity-75 pb-5 pt-1 px-2 xl:p-4 text-black font-normal' type="text" name="peso" placeholder='Peso de mercancía:' required />
                        <input className='placeholder:opacity-75 pb-5 pt-1 px-2 xl:p-4 text-black font-normal' type="text" name="carga" placeholder='¿Dónde se carga?' required />
                        <input className='placeholder:opacity-75 pb-5 pt-1 px-2 xl:p-4 text-black font-normal' type="text" name="descarga" placeholder='¿Dónde se descarga?' required />
                        <textarea className='placeholder:opacity-75 pb-5 pt-1 px-2 xl:p-4 text-black font-normal resize-none' name="servicios" rows="3" placeholder='¿Qué otro servicio(s) necesitas?'></textarea>
                        <textarea className='placeholder:opacity-75 pb-5 pt-1 px-2 xl:p-4 text-black font-normal resize-none' name="detalles" rows="3" placeholder='¿Hay algún otro detalle que quieras agregar?'></textarea>
                    </div>
                    <div className='flex items-center justify-center mb-6 xl:mb-0 xl:mt-5'>
                        <ButtonComponent content='Enviar' custom='font-bold px-16 xl:px-20 xl:py-4' />
                    </div>
                </form>
            </div>
            <div>
                <div></div>
            </div>
            <div className='xl:mt-24 container m-auto'>
                <div className='w-full h-[369px] xl:h-[580px]'>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1883.7857870626465!2d-103.72324114338869!3d19.213905995486094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDEyJzUwLjEiTiAxMDPCsDQzJzE5LjAiVw!5e0!3m2!1ses-419!2smx!4v1720197524745!5m2!1ses-419!2smx"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        width="100%"
                        referrerPolicy="no-referrer-when-downgrade"
                    >
                    </iframe>
                    
                </div>
                <div className="xl:px-40 px-10 xl:pb-20 mb-7 xl:m-0">
                    <h1 className='text-lg leading-5 xl:leading-normal xl:text-2xl text-[#2E5AFC] font-bold my-5 xl:my-16'>Con base en Manzanillo y Colima, con cobertura en todo el <br className='xl:hidden' /> territorio Nacional.</h1>
                    <div className='flex flex-col gap-5 xl:gap-10'>
                        <div className='text-sm xl:text-2xl flex items-center xl:gap-5 text-black'>
                            <div className='w-[40px] flex justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="hidden xl:block" width="19.38" height="36.479" viewBox="0 0 19.38 36.479">
                                    <g id="Grupo_99" data-name="Grupo 99" transform="translate(0.5 0.5)">
                                        <ellipse id="Elipse_17" data-name="Elipse 17" cx="9.19" cy="9.19" rx="9.19" ry="9.19" transform="translate(0)" fill="none" stroke="#2e5afc" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                                        <line id="Línea_14" data-name="Línea 14" y2="17.099" transform="translate(9.19 18.38)" fill="none" stroke="#2e5afc" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                                    </g>
                                </svg>
                                <UbicationIcon />
                            </div>
                            <p>KM 220 carretera Jiquilpan-Manzanillo</p>
                        </div>
                        <div className='text-sm xl:text-2xl flex items-center xl:gap-5 text-black'>
                            <div className='w-[40px] flex justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="hidden xl:block" width="28.807" height="25.481" viewBox="0 0 28.807 25.481">
                                    <path id="Trazado_488" data-name="Trazado 488" d="M31.65,56.477a1.4,1.4,0,0,1-.046-.245,2.32,2.32,0,0,0-2-1.957c-1.838-.3-3.683-.571-5.524-.855a2.267,2.267,0,0,0-2.418,1.128c-.306.475-.623.943-.94,1.412a.664.664,0,0,1-.908.272c-.166-.074-.34-.132-.509-.2a15.317,15.317,0,0,1-6.676-5.375.832.832,0,0,1,.1-1.166c.383-.417.765-.835,1.134-1.264a2.28,2.28,0,0,0,.481-2.461q-1.066-2.686-2.191-5.353a2.066,2.066,0,0,0-1.875-1.289,9.484,9.484,0,0,0-1.846.012,2.535,2.535,0,0,0-1.223.478,7.685,7.685,0,0,0-2.909,7.984,17.669,17.669,0,0,0,4.084,7.733,23.708,23.708,0,0,0,10.276,7.009,16.577,16.577,0,0,0,6.081,1.228,9.832,9.832,0,0,0,1.737-.1A7.535,7.535,0,0,0,30.927,60.3,3.755,3.755,0,0,0,31.65,56.477Z" transform="translate(-3.592 -38.583)" fill="none" stroke="#2e5afc" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                                </svg>
                                <PhoneIcon />
                            </div>
                            <p>312-307-3620 ext 1358</p>
                        </div>
                        <div className='text-sm xl:text-2xl flex items-center xl:gap-5 text-black'>
                            <div className='w-[40px] flex justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="hidden xl:block" width="37.419" height="37.409" viewBox="0 0 37.419 37.409">
                                    <g id="Grupo_94" data-name="Grupo 94" transform="translate(0.505 0.503)">
                                        <path id="Trazado_486" data-name="Trazado 486" d="M19.621,107.5a18.679,18.679,0,0,1-9.31-2.478.735.735,0,0,0-.531-.078c-2.584.821-5.161,1.668-7.745,2.487a.767.767,0,0,1-.558-.115.461.461,0,0,1-.146-.586c.855-2.558,1.7-5.123,2.554-7.684a.629.629,0,0,0-.062-.578,18.018,18.018,0,0,1,1.9-21.078A17.509,17.509,0,0,1,17,71.26a17.692,17.692,0,0,1,16.6,6.555,17.223,17.223,0,0,1,4.086,11.764A17.745,17.745,0,0,1,30.96,103.4,17.709,17.709,0,0,1,19.621,107.5Z" transform="translate(-1.278 -71.091)" fill="none" stroke="#2e5afc" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                                        <path id="Trazado_487" data-name="Trazado 487" d="M26.7,89.845a.98.98,0,0,1-.034-.18A1.707,1.707,0,0,0,25.2,88.228c-1.351-.222-2.7-.418-4.057-.628a1.664,1.664,0,0,0-1.775.828c-.225.349-.458.694-.691,1.037a.485.485,0,0,1-.666.2c-.122-.054-.251-.1-.374-.149a11.238,11.238,0,0,1-4.9-3.947.611.611,0,0,1,.072-.857c.28-.306.56-.614.832-.928a1.674,1.674,0,0,0,.354-1.808c-.523-1.317-1.055-2.629-1.609-3.932a1.516,1.516,0,0,0-1.377-.946,7.119,7.119,0,0,0-1.355.008,1.877,1.877,0,0,0-.9.352,5.644,5.644,0,0,0-2.137,5.863,12.988,12.988,0,0,0,3,5.679,17.412,17.412,0,0,0,7.545,5.146,12.178,12.178,0,0,0,4.466.9,7.464,7.464,0,0,0,1.277-.072,5.535,5.535,0,0,0,3.27-2.324A2.758,2.758,0,0,0,26.7,89.845Z" transform="translate(1.516 -67.872)" fill="none" stroke="#2e5afc" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                                    </g>
                                </svg>
                                <WhatsAppIcon />
                            </div>
                            <p>312-102-1117</p>
                        </div>
                        <div className='xl:flex gap-36 hidden'>
                            <div className='flex flex-col gap-10'>
                                <div className="flex items-center xl:gap-5 text-black" >
                                    <div className='w-[40px] flex justify-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="hidden xl:block" width="39.524" height="26.696" viewBox="0 0 39.524 26.696">
                                            <g id="Grupo_95" data-name="Grupo 95" transform="translate(0.5 0.5)">
                                                <path id="Trazado_484" data-name="Trazado 484" d="M39.14,138.945a5.905,5.905,0,0,1-.532.977,1.982,1.982,0,0,1-1.649.662q-6.094-.007-12.187,0-10.965,0-21.927,0a2.214,2.214,0,0,1-1.509-.468,2.018,2.018,0,0,1-.72-1.626q.009-3.761,0-7.522v-13.8a2.026,2.026,0,0,1,2.264-2.277H36.7a2.11,2.11,0,0,1,2.444,1.637ZM1.356,115.336c5.012,4.261,12.276,9.933,17.289,14.193a1.823,1.823,0,0,0,2.478-.009c5-4.249,12.274-9.933,17.277-14.183" transform="translate(-0.616 -114.887)" fill="none" stroke="#2e5afc" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                                            </g>
                                        </svg>
                                        <MailIcon className="xl:hidden" />
                                    </div>
                                    <span className='text-sm xl:text-2xl'>
                                        <h1 className='text-[#2E5AFC] font-bold'>contacto:</h1>
                                        <p>administracion@ezlabon.mx</p>
                                    </span>
                                </div>
                                <div className="flex items-center just gap-5 text-black" >
                                    <div className='w-[40px] flex justify-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="hidden xl:block" width="39.524" height="26.696" viewBox="0 0 39.524 26.696">
                                            <g id="Grupo_95" data-name="Grupo 95" transform="translate(0.5 0.5)">
                                                <path id="Trazado_484" data-name="Trazado 484" d="M39.14,138.945a5.905,5.905,0,0,1-.532.977,1.982,1.982,0,0,1-1.649.662q-6.094-.007-12.187,0-10.965,0-21.927,0a2.214,2.214,0,0,1-1.509-.468,2.018,2.018,0,0,1-.72-1.626q.009-3.761,0-7.522v-13.8a2.026,2.026,0,0,1,2.264-2.277H36.7a2.11,2.11,0,0,1,2.444,1.637ZM1.356,115.336c5.012,4.261,12.276,9.933,17.289,14.193a1.823,1.823,0,0,0,2.478-.009c5-4.249,12.274-9.933,17.277-14.183" transform="translate(-0.616 -114.887)" fill="none" stroke="#2e5afc" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                                            </g>
                                        </svg>
                                        <MailIcon className="xl:hidden" />
                                    </div>
                                    <span className='text-sm xl:text-2xl'>
                                        <h1 className='text-[#2E5AFC] font-bold'>cotizaciones:</h1>
                                        <p>rbayardo@ezlabon.mx</p>
                                    </span>
                                </div>
                            </div>
                            <div className='flex flex-col xl:gap-10'>
                                <div className="flex items-center just gap-5 text-black" >
                                    <div className='w-[40px] flex justify-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="hidden xl:block" width="39.524" height="26.696" viewBox="0 0 39.524 26.696">
                                            <g id="Grupo_95" data-name="Grupo 95" transform="translate(0.5 0.5)">
                                                <path id="Trazado_484" data-name="Trazado 484" d="M39.14,138.945a5.905,5.905,0,0,1-.532.977,1.982,1.982,0,0,1-1.649.662q-6.094-.007-12.187,0-10.965,0-21.927,0a2.214,2.214,0,0,1-1.509-.468,2.018,2.018,0,0,1-.72-1.626q.009-3.761,0-7.522v-13.8a2.026,2.026,0,0,1,2.264-2.277H36.7a2.11,2.11,0,0,1,2.444,1.637ZM1.356,115.336c5.012,4.261,12.276,9.933,17.289,14.193a1.823,1.823,0,0,0,2.478-.009c5-4.249,12.274-9.933,17.277-14.183" transform="translate(-0.616 -114.887)" fill="none" stroke="#2e5afc" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                                            </g>
                                        </svg>
                                        <MailIcon className="xl:hidden" />
                                    </div>
                                    <span className='text-2xl'>
                                        <h1 className='text-[#2E5AFC] font-bold'>embarques:</h1>
                                        <p>trafico@ezlabon.mx</p>
                                    </span>
                                </div>
                                <div className="flex items-center just gap-5 text-black" >
                                    <div className='w-[40px] flex justify-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="hidden xl:block" width="39.524" height="26.696" viewBox="0 0 39.524 26.696">
                                            <g id="Grupo_95" data-name="Grupo 95" transform="translate(0.5 0.5)">
                                                <path id="Trazado_484" data-name="Trazado 484" d="M39.14,138.945a5.905,5.905,0,0,1-.532.977,1.982,1.982,0,0,1-1.649.662q-6.094-.007-12.187,0-10.965,0-21.927,0a2.214,2.214,0,0,1-1.509-.468,2.018,2.018,0,0,1-.72-1.626q.009-3.761,0-7.522v-13.8a2.026,2.026,0,0,1,2.264-2.277H36.7a2.11,2.11,0,0,1,2.444,1.637ZM1.356,115.336c5.012,4.261,12.276,9.933,17.289,14.193a1.823,1.823,0,0,0,2.478-.009c5-4.249,12.274-9.933,17.277-14.183" transform="translate(-0.616 -114.887)" fill="none" stroke="#2e5afc" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                                            </g>
                                        </svg>
                                        <MailIcon className="xl:hidden" />
                                    </div>
                                    <span className='text-2xl'>
                                        <h1 className='text-[#2E5AFC] font-bold'>gerente admin:</h1>
                                        <p>heriberto@ezlabon.mx</p>
                                    </span>
                                </div>
                            </div>
                        </div>



                        <div className='flex xl:flex-row flex-col gap-2 xl:gap-36 xl:hidden'>
                            <div className='flex flex-col gap-2 xl:gap-10'>
                                <div className="flex items-center xl:gap-5 text-black" >
                                    <div className='w-[40px] flex justify-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="hidden xl:block" width="39.524" height="26.696" viewBox="0 0 39.524 26.696">
                                            <g id="Grupo_95" data-name="Grupo 95" transform="translate(0.5 0.5)">
                                                <path id="Trazado_484" data-name="Trazado 484" d="M39.14,138.945a5.905,5.905,0,0,1-.532.977,1.982,1.982,0,0,1-1.649.662q-6.094-.007-12.187,0-10.965,0-21.927,0a2.214,2.214,0,0,1-1.509-.468,2.018,2.018,0,0,1-.72-1.626q.009-3.761,0-7.522v-13.8a2.026,2.026,0,0,1,2.264-2.277H36.7a2.11,2.11,0,0,1,2.444,1.637ZM1.356,115.336c5.012,4.261,12.276,9.933,17.289,14.193a1.823,1.823,0,0,0,2.478-.009c5-4.249,12.274-9.933,17.277-14.183" transform="translate(-0.616 -114.887)" fill="none" stroke="#2e5afc" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                                            </g>
                                        </svg>
                                        <MailIcon className="xl:hidden" />
                                    </div>
                                    <span className='text-sm xl:text-2xl'>
                                        <h1 className='text-[#2E5AFC] font-bold'>contacto:</h1>
                                        <p>administracion@ezlabon.mx</p>
                                    </span>
                                </div>
                                <div className="flex items-center xl:gap-5 text-black" >
                                    <div className='w-[40px] flex justify-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="hidden xl:block" width="39.524" height="26.696" viewBox="0 0 39.524 26.696">
                                            <g id="Grupo_95" data-name="Grupo 95" transform="translate(0.5 0.5)">
                                                <path id="Trazado_484" data-name="Trazado 484" d="M39.14,138.945a5.905,5.905,0,0,1-.532.977,1.982,1.982,0,0,1-1.649.662q-6.094-.007-12.187,0-10.965,0-21.927,0a2.214,2.214,0,0,1-1.509-.468,2.018,2.018,0,0,1-.72-1.626q.009-3.761,0-7.522v-13.8a2.026,2.026,0,0,1,2.264-2.277H36.7a2.11,2.11,0,0,1,2.444,1.637ZM1.356,115.336c5.012,4.261,12.276,9.933,17.289,14.193a1.823,1.823,0,0,0,2.478-.009c5-4.249,12.274-9.933,17.277-14.183" transform="translate(-0.616 -114.887)" fill="none" stroke="#2e5afc" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                                            </g>
                                        </svg>
                                        <MailIcon className="xl:hidden" />
                                    </div>
                                    <span className='text-sm xl:text-2xl'>
                                        <h1 className='text-[#2E5AFC] font-bold'>embarques:</h1>
                                        <p>trafico@ezlabon.mx</p>
                                    </span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 xl:gap-10'>
                                <div className="flex items-center xl:gap-5 text-black" >
                                    <div className='w-[40px] flex justify-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="hidden xl:block" width="39.524" height="26.696" viewBox="0 0 39.524 26.696">
                                            <g id="Grupo_95" data-name="Grupo 95" transform="translate(0.5 0.5)">
                                                <path id="Trazado_484" data-name="Trazado 484" d="M39.14,138.945a5.905,5.905,0,0,1-.532.977,1.982,1.982,0,0,1-1.649.662q-6.094-.007-12.187,0-10.965,0-21.927,0a2.214,2.214,0,0,1-1.509-.468,2.018,2.018,0,0,1-.72-1.626q.009-3.761,0-7.522v-13.8a2.026,2.026,0,0,1,2.264-2.277H36.7a2.11,2.11,0,0,1,2.444,1.637ZM1.356,115.336c5.012,4.261,12.276,9.933,17.289,14.193a1.823,1.823,0,0,0,2.478-.009c5-4.249,12.274-9.933,17.277-14.183" transform="translate(-0.616 -114.887)" fill="none" stroke="#2e5afc" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                                            </g>
                                        </svg>
                                        <MailIcon className="xl:hidden" />
                                    </div>
                                    <span className='text-sm xl:text-2xl'>
                                        <h1 className='text-[#2E5AFC] font-bold'>cotizaciones:</h1>
                                        <p>rbayardo@ezlabon.mx</p>
                                    </span>
                                </div>
                                <div className="flex items-center xl:gap-5 text-black" >
                                    <div className='w-[40px] flex justify-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="hidden xl:block" width="39.524" height="26.696" viewBox="0 0 39.524 26.696">
                                            <g id="Grupo_95" data-name="Grupo 95" transform="translate(0.5 0.5)">
                                                <path id="Trazado_484" data-name="Trazado 484" d="M39.14,138.945a5.905,5.905,0,0,1-.532.977,1.982,1.982,0,0,1-1.649.662q-6.094-.007-12.187,0-10.965,0-21.927,0a2.214,2.214,0,0,1-1.509-.468,2.018,2.018,0,0,1-.72-1.626q.009-3.761,0-7.522v-13.8a2.026,2.026,0,0,1,2.264-2.277H36.7a2.11,2.11,0,0,1,2.444,1.637ZM1.356,115.336c5.012,4.261,12.276,9.933,17.289,14.193a1.823,1.823,0,0,0,2.478-.009c5-4.249,12.274-9.933,17.277-14.183" transform="translate(-0.616 -114.887)" fill="none" stroke="#2e5afc" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                                            </g>
                                        </svg>
                                        <MailIcon className="xl:hidden" />
                                    </div>
                                    <span className='text-sm xl:text-2xl'>
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
