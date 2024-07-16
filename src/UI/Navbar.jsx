import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { EzlabonIcon } from "../icons";

export const Navbar = () => {
    const [openNavbar, setOpenNavbar] = useState(false);

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 50; // Cambiar este valor según la posición de scroll deseada
        setScrolled(isScrolled);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Limpieza del event listener al desmontar el componente
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    
    return (
        <header className={` w-full flex justify-between items-center px-8 py-4 xl:px-24 xl:py-5 text-white fixed ${ scrolled && 'bg-black/30 backdrop-blur-md' } transition-colors z-[1000]`}>
            <nav>
                <NavLink to={'/'}>
                    <EzlabonIcon className="w-[240px] h-min" />
                </NavLink>
            </nav>
            <nav 
                className={`${ openNavbar ? 'flex' : 'hidden' } xl:flex flex-col xl:flex-row gap-4 xl:gap-36 text-lg xl:text-[22px] absolute z-20 xl:static bg-blue-200/60 xl:bg-[initial] backdrop-blur-sm xl:backdrop-blur-none text-[#2E5AFC] xl:text-white top-14 right-8 xl:top-[initial] xl:right-[initial] px-8 py-6 xl:p-0`}
                onClick={ () => setOpenNavbar(false)}
            >
                <NavLink to={ '/' } className={({ isActive }) => `${ isActive && 'font-bold'} hover:font-bold text-center xl:w-[calc(88px+0.25rem)]`} >
                    Inicio
                </NavLink>
                <NavLink to={ '/servicios' } className={({ isActive }) => `${ isActive && 'font-bold'} hover:font-bold text-center xl:w-[calc(88px+0.25rem)]`} >
                    Servicios
                </NavLink>
                <NavLink to={ '/contacto' } className={({ isActive }) => `${ isActive && 'font-bold'} hover:font-bold text-center xl:w-[calc(88px+0.25rem)]`} >
                    Contacto
                </NavLink>
            </nav>
            <nav className="xl:hidden" onClick={ () => setOpenNavbar(!openNavbar) }>
                <svg xmlns="http://www.w3.org/2000/svg" width="35.381" height="26.626" viewBox="0 0 35.381 26.626">
                    <g id="Grupo_135" data-name="Grupo 135" transform="translate(0 1.5)">
                        <line id="Línea_1" data-name="Línea 1" x2="35.381" transform="translate(0)" fill="none" stroke="#fff" strokeWidth="3"/>
                        <line id="Línea_2" data-name="Línea 2" x2="35.381" transform="translate(0 7.875)" fill="none" stroke="#fff" strokeWidth="3"/>
                        <line id="Línea_3" data-name="Línea 3" x2="35.381" transform="translate(0 15.75)" fill="none" stroke="#fff" strokeWidth="3"/>
                        <line id="Línea_4" data-name="Línea 4" x2="35.381" transform="translate(0 23.626)" fill="none" stroke="#fff" strokeWidth="3"/>
                    </g>
                </svg>
            </nav>
        </header>
    )
}
