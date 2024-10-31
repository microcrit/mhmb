import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@/styles/index.css'

import Home from '@/pages/Home'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserMicroblog from './pages/UserMicroblog'
import Layout from './pages/Layout'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/blog/:id',
        Component: UserMicroblog
      },
      {
        path: '/*',
        Component: Home
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
