import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const resetScroll = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }, 100);
    }, [pathname]);

    return null;
};