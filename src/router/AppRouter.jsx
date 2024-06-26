import { Navigate } from "react-router-dom";
import { EzlabonApp } from "../EzlabonApp";
import { HomePage } from "../pages";

export const AppRouter = [
    {
        path: '/',
        element: <EzlabonApp />,
        children: [
            {
                path: '/',
                element: <HomePage />
            }
        ]
    },
    {
        path: '/*',
        element: <Navigate to={'/'} />
    }
];