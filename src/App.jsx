import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'
import Notfound from './components/Notfound/Notfound.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
