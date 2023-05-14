import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { switchRoutes } from './routes'
import { HomeScene, AboutUsScene } from '@/scenes'
import { AppLayout } from '@/layout/app.layout'

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
