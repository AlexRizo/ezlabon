import { Navigate } from "react-router-dom";
import { EzlabonApp } from "../EzlabonApp";
import { HomePage, ServicesPage } from "../pages";

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
            }
        ]
    },
    {
        path: '/*',
        element: <Navigate to={'/'} />
    }
];