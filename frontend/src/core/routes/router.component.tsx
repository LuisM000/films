import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { switchRoutes } from './routes'
import { FilmListScene, AboutUsScene } from '@/scenes'
import { AppLayout } from '@/layout'
import FilmDetailComponent from '@/pods/film-detail/film-detail.component'

const router = createBrowserRouter([
  {
    path: switchRoutes.root,
    element: <AppLayout />,
    children: [
      {
        path: switchRoutes.root,
        element: <FilmListScene />,
      },
      {
        path: switchRoutes.film,
        element: <FilmDetailComponent />,
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
