import React from 'react'
import Home from './pages/Home'
import AppLayout from './layouts/AppLayout'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<AppLayout/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
      ]
    }
  ])
  return<RouterProvider router={router} />
}

export default App