import { EnvelopeIcon } from "@heroicons/react/24/outline"
import { NavLink } from "react-router-dom"
import { EzlabonIcon, PhoneOutlinedIcon } from "../icons"

export const Footer = () => {
    return (
        <footer className="bg-[#F5F5F5]">
            <div className="flex flex-col xl:flex-row items-center justify-between xl:px-56 py-10 xl:py-16 gap-9 container m-auto">
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
                    <NavLink to={"/"}>
                        <EzlabonIcon fill="#2E5AFC" className="w-[190px]" />
                    </NavLink>
                </div>
                <nav className="flex xl:flex-col gap-7 order-3 items-center">
                    <a href="tel:+523121021117" className="flex gap-2 text-[#2E5AFC] h-8" >
                        <PhoneOutlinedIcon />
                        <p>+52 312 1021 117</p>
                    </a>
                    <a href="mailto:administracion@ezlabon.mx" className="flex gap-2 text-[#2E5AFC] h-8" >
                        <EnvelopeIcon className="text-[#2E5AFC] h-8"/>
                        <p>administracion@ezlabon.mx</p>
                    </a>
                </nav>
            </div>
        </footer>
    )
}
