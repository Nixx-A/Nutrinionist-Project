import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Navbar } from './Pages/Navbar.jsx'
import { Home } from './Pages/Home.jsx'
import { SobreMi } from './Pages/SobreMi'
import { Contacto } from './Pages/Contacto'
import { ConsultaOnline } from './Pages/ConsultaOnline'
import { App } from './App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/sobre-mi',
        element: <SobreMi />
      },
      {
        path: '/contacto',
        element: <Contacto />
      },
      {
        path: '/consulta-online',
        element: <ConsultaOnline />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
)
