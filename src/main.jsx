import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//pages
import HomePage from './pages/HomePage.jsx'
import RecipesPage from './pages/RecipesPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ReservationPage from './pages/ReservationPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx' 
import SingleRecipesPage from './pages/SingleRecipesPage.jsx'
// Rutiranje
//1 Kreiranje
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />, 
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/recipes',
        element: <RecipesPage />
      },
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/reservation',
        element: <ReservationPage />
      },
      {
        path: '/singleRecipe/:id',
        element: <SingleRecipesPage />
      }
    ]
  }
]);

//Provajder
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
