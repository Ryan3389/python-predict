import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import LandingPage from './Pages/LandingPage.jsx'
import PredictPage from './Pages/PredictPage.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <h1>Error, page not found</h1>,
        children: [
            {
                index: true,
                element: <LandingPage />
            },
            {
                path: '/predict',
                element: <PredictPage />
            }
        ]
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
