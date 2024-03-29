import { createBrowserRouter, type RouteObject } from 'react-router-dom'
// VIEWS
import HomePage from './pages/home'
import ContactPage from './pages/contact'
import ProjectsPage from './pages/projects'




const publicRoutes: RouteObject[] = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/contact',
        element: <ContactPage />
    },
    {
        path: '/projects',
        element: <ProjectsPage />
    },
]

export const router = createBrowserRouter([...publicRoutes])