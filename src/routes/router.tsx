import { createBrowserRouter } from "react-router-dom";

import HomePage from '../pages/HomePage/HomePage'
import AboutPage from "../pages/AboutPage/AboutPage";
import ServicesPage from "../pages/ServicesPage/ServicesPage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import TeamPage from "../pages/TeamPage/TeamPage";
import ErrorPage from '../pages/ErrorPage/ErrorPage'

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/about",
        element: <AboutPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/services",
        element: <ServicesPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/services/:item",
        element: <ServicesPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/team",
        element: <TeamPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/contacts",
        element: <ContactsPage />,
        errorElement: <ErrorPage />
    }
]);

export default router