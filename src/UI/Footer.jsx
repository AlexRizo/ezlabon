import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline"
import { NavLink } from "react-router-dom"

export const Footer = () => {
    return (
        <footer className="flex items-center justify-between px-56 py-20 bg-[#F5F5F5]">
            <nav className="text-[#2E5AFC] text-2xl flex flex-col gap-3">
                <NavLink to={ '/' }>
                    Inicio
                </NavLink>
                <NavLink to={ '/servicio' }>
                    Servicios
                </NavLink>
                <NavLink to={ '/contacto' }>
                    Contacto
                </NavLink>
            </nav>
            <div>
                <img src="/img/footer/ezlabon.png" alt="Ezlabon" />
            </div>
            <nav className="flex flex-col gap-7">
                <a href="tel:+520000000000">
                    <PhoneIcon className="text-[#2E5AFC] h-8" />
                </a>
                <a href="mailto:ezlabon@ezlabon.com">
                    <EnvelopeIcon className="text-[#2E5AFC] h-10"/>
                </a>
            </nav>
        </footer>
    )
}
