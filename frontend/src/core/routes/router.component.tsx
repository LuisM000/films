import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { switchRoutes } from './routes'
import { HomeScene, AboutUsScene } from '@/scenes'
import { AppLayout } from '@/layout/app.layout'
import FilmComponent from '@/pods/films/film.component'

const router = createBrowserRouter([
  {
    path: switchRoutes.root,
    element: <AppLayout />,
    children: [
      {
        path: switchRoutes.root,
        element: <HomeScene />,
      },
      {
        path: switchRoutes.film,
        element: <FilmComponent />,
      },
      {
        path: switchRoutes.aboutUs,
        element: <AboutUsScene />,
      },
    ],
  },

  //error page
])

export const RouterComponent: React.FC = () => {
  return (
    <RouterProvider router={router} />
  )
}
