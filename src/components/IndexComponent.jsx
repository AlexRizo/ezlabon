export const IndexComponent = ({ title = '', img = '', custom = '' }) => {
    return (
        <div className={`w-full h-screen ${ img } bg-no-repeat bg-cover ${ custom }`}>
            <div className='w-full h-full bg-black/30 flex items-center font-semibold text-6xl'>
                <h1 className='ml-48'>{ title }</h1>
                <img src="/img/down-arrow.png" alt="Down Arrow" className='absolute left-[48%] bottom-10' />
            </div>
        </div>
    )
}
