import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from './UI'
import { resetScroll } from './helpers/scrollToTop'

export const EzlabonApp = () => {    
    resetScroll();

    return (
        <>
            <Navbar />
            
            <Outlet />

            <Footer />
        </>
    )
}
