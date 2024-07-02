export const IndexComponent = ({ title = '', img = '', custom = '' }) => {
    return (
        <div className={`w-full h-screen ${ img } bg-no-repeat bg-cover ${ custom } bg-right`}>
            <div className='w-full h-full xl:bg-black/30 flex items-center justify-center xl:justify-normal font-semibold xl:text-6xl text-4xl'>
                <h1 className='xl:ml-48 xl:uppercase absolute xl:block -translate-y-36'>{ title }</h1>
                <img src="/img/down-arrow.png" alt="Down Arrow" className='absolute left-[48%] bottom-10 w-12 xl:w-auto' />
            </div>
        </div>
    )
}
