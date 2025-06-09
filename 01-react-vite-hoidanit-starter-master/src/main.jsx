import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/login",
    element: <div>login Page</div>
  },

  {
    path: "/register",
    element: <div>register Page</div>
  },

  {
    path: "/users",
    element: <div>user Page</div>
  },

  {
    path: "/products",
    element: <div>product Page</div>
  },
]);

// RouterProvider dùng để điều huớng các route trong ứng dụng React
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
