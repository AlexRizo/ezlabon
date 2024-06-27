import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from './UI'

export const EzlabonApp = () => {
    return (
        <>
            <Navbar />
            
            <Outlet />

            <Footer />
        </>
    )
}
