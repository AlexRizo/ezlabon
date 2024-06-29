import { Navigate } from "react-router-dom";
import { EzlabonApp } from "../EzlabonApp";
import { ContactoPage, HomePage, ServicesPage } from "../pages";

export const AppRouter = [
    {
        path: '/',
        element: <EzlabonApp />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/servicios',
                element: <ServicesPage />
            },
            {
                path: '/contacto',
                element: <ContactoPage />
            }
        ]
    },
    {
        path: '/*',
        element: <Navigate to={'/'} />
    }
];