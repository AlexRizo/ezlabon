import { EnvelopeIcon } from "@heroicons/react/24/outline"
import { NavLink } from "react-router-dom"
import { EzlabonIcon, PhoneOutlinedIcon } from "../icons"

export const Footer = () => {
    return (
        <footer className="bg-[#F5F5F5]">
            <div className="flex flex-col xl:flex-row items-center justify-between xl:px-56 py-10 xl:py-16 xl:gap-9 gap-4 container m-auto">
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
                <nav className="flex xl:flex-col gap-7 order-3 items-center xl:items-end justify-center xl:w-[82px]">
                    <a href="tel:+523121021117" >
                        <PhoneOutlinedIcon />
                    </a>
                    <a href="mailto:administracion@ezlabon.mx" >
                        <EnvelopeIcon className="text-[#2E5AFC] h-8"/>
                    </a>
                </nav>
            </div>
            <div className="pb-3 pt-1 xl:p-3 text-center text-[#2E5AFC] border-t border-[#2E5AFC] text-lg">
                <span className="cursor-pointer">
                    Aviso de privacidad
                </span>
            </div>
        </footer>
    )
}
