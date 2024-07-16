export const EquipoComponent = ({ children, title = '', p, custom = '' }) => {
    return (
        <div className={ `flex flex-col items-center xl:gap-4 ${ custom }` }>
            <div className="h-[64px] xl:h-[135px] flex items-end">
                { children }
            </div>
            <div className='text-center'>
                { 
                    !p 
                        ? <h1 className='xl:text-xl text-xs'>{ title }</h1>
                        : <h1 className='xl:text-xl'>{ title }</h1> 
                }
                { p && <p className='xl:text-base text-xs'>{ p }</p> }
            </div>
        </div>
    )
}