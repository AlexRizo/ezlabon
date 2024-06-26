import { Outlet } from 'react-router-dom'
import { Navbar } from './UI'

export const EzlabonApp = () => {
    return (
        <>
            <Navbar />
            
            <Outlet />
        </>
    )
}
