import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <header className="w-full flex flex-row justify-between items-center px-28 py-6 text-white absolute">
            <nav>
                <NavLink to={'/'}>
                    <img src="/img/navbar/ezlabon-navbar.png" alt="" />
                </NavLink>
            </nav>
            <nav className="flex gap-36 text-2xl">
                <NavLink to={ '/' }>
                    Inicio
                </NavLink>
                <NavLink to={ '/servicios' }>
                    Servicios
                </NavLink>
                <NavLink to={ '/contacto' }>
                    Contacto
                </NavLink>
            </nav>
        </header>
    )
}
