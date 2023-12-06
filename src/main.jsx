import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'

import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import AddTrip from './pages/AddTrip.jsx'
import ListTrip from './pages/ListTrip.jsx'
import RequestRider from './pages/RequestRider.jsx'

const router = createBrowserRouter([{
  path:"/",
  element: <App/>,
  children:[{
     path:"/",
     element:<Home/>
   },
   {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/sigup",
    element:<Signup/>
  },
  {
    path:"/addtrip",
    element:<AddTrip/>
  },
  {
    path:"/listtrip",
    element:<ListTrip/>
  },
  {
    path:"requestrider",
    element:<RequestRider/>
  }
  
  ]

}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
