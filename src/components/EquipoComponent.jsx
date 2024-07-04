export const EquipoComponent = ({ children, title = '', p1 = '', p2 = '', custom = '' }) => {
    return (
        <div className={ `flex flex-col items-center xl:gap-7 ${ custom }` }>
            <div className="h-[64px] xl:h-[135px] flex items-end">
                { children }
            </div>
            <div className='text-center'>
                { 
                    !p1 && !p2 
                        ? <h1 className='xl:text-2xl text-xs'>{ title }</h1>
                        : <h1 className='xl:text-2xl'>{ title }</h1> 
                }
                { p1 && <p className='xl:text-lg text-xs'>{ p1 }</p> }
                { p2 && <p className='xl:text-lg text-xs'>{ p2 }</p> }
            </div>
        </div>
    )
}