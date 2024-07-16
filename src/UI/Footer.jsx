import { EnvelopeIcon } from "@heroicons/react/24/outline"
import { NavLink } from "react-router-dom"
import { EzlabonIcon, PhoneOutlinedIcon } from "../icons"

export const Footer = () => {
    return (
        <footer className="flex flex-col xl:flex-row items-center justify-between xl:px-56 py-10 xl:py-20 bg-[#F5F5F5] gap-9">
            <nav className="text-[#2E5AFC] text-xl flex flex-col gap-2 items-center xl:items-start order-2 xl:order-1">
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
            <div className="order-1 xl:order-2">
                <EzlabonIcon fill="#2E5AFC" className="w-[200px]" />
            </div>
            <nav className="flex xl:flex-col gap-7 order-3 items-center">
                <a href="tel:+520000000000">
                    <PhoneOutlinedIcon />
                </a>
                <a href="mailto:ezlabon@ezlabon.com">
                    <EnvelopeIcon className="text-[#2E5AFC] h-9"/>
                </a>
            </nav>
        </footer>
    )
}
