import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="w-full flex flex-row justify-between items-center px-28 py-6 text-white absolute">
            <div>
                <NavLink to={'/'}>
                    <img src="/img/navbar/ezlabon-navbar.png" alt="" />
                </NavLink>
            </div>
            <div className="flex gap-36 text-2xl">
                <NavLink to={'/'}>
                    Inicio
                </NavLink>
                <NavLink>
                    Servicios
                </NavLink>
                <NavLink>
                    Contacto
                </NavLink>
            </div>
        </nav>
    )
}
