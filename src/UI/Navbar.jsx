import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <header className="w-full flex justify-between items-center px-8 py-4 xl:px-28 xl:py-6 text-white absolute">
            <nav>
                <NavLink to={'/'}>
                    <img src="/img/navbar/ezlabon-navbar.png" className="w-40 xl:w-auto" alt="Ezlabon" />
                </NavLink>
            </nav>
            <nav 
                className="flex flex-col xl:flex-row gap-4 xl:gap-36 text-lg xl:text-2xl absolute xl:static bg-blue-200/60 xl:bg-[transparent] backdrop-blur-sm xl:backdrop-blur-none text-[#2E5AFC] xl:text-white top-14 right-8 xl:top-[initial] xl:right-[initial] px-7 py-5 xl:p-0"
            >
                <NavLink to={ '/' } className={({ isActive }) => `${ isActive && 'font-bold'}`} >
                    Inicio
                </NavLink>
                <NavLink to={ '/servicios' } className={({ isActive }) => `${ isActive && 'font-bold'}`} >
                    Servicios
                </NavLink>
                <NavLink to={ '/contacto' } className={({ isActive }) => `${ isActive && 'font-bold'}`} >
                    Contacto
                </NavLink>
            </nav>
            <nav className="xl:hidden">
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
