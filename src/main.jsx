import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { About } from './components/About.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <h1>No existe esta ruta</h1>
},
{
  path: '/about',
  element: <About />,
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
