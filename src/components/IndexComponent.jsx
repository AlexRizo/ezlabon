export const IndexComponent = ({ title, titleCustom, img = '', custom = '', black }) => {
    return (
        <div className={`w-full h-screen ${ img } bg-no-repeat bg-cover ${ custom } bg-right`}>
            <div className={`w-full h-full ${ black && black } flex items-center justify-center xl:justify-normal font-semibold xl:text-6xl text-4xl`}>
                <h1 className={`xl:ml-48 absolute xl:block -translate-y-28 px-16 ${ titleCustom }`}>{ title }</h1>
                <img src="/img/down-arrow.png" alt="Down Arrow" className='absolute bottom-24 xl:bottom-10 w-12 xl:w-auto' />
            </div>
        </div>
    )
}
