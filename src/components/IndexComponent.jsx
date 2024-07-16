import { ArrowDownIcon } from "../icons"

export const IndexComponent = ({ title, titleCustom, img = '', custom = '', black }) => {
    return (
        <div className={`w-full h-screen ${ img } bg-no-repeat bg-cover ${ custom } bg-right`}>
            <div className={`w-full h-full ${ black && black } flex items-center justify-center xl:justify-normal font-semibold xl:text-7xl text-5xl`}>
                <h1 className={`absolute xl:block px-16 ${ titleCustom }`}>{ title }</h1>
                <ArrowDownIcon className="absolute bottom-24 xl:bottom-10 w-12 xl:w-auto xl:left-[48%] animate-pulse" />
            </div>
        </div>
    )
}