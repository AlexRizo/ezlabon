export const EquipoComponent = ({ children, title = '', p1 = '', p2 = '' }) => {
    return (
        <div className='flex flex-col items-center gap-7'>
            <div className="h-[135px] flex items-end">
                { children }
            </div>
            <div className='text-center'>
                <h1 className='text-2xl'>{ title }</h1>
                { p1 && <p className='text-lg'>{ p1 }</p> }
                { p2 && <p className='text-lg'>{ p2 }</p> }
            </div>
        </div>
    )
}
