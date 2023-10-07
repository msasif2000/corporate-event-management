import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Root';
import Home from './pages/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ErrorPage from './components/ErrorPage/ErrorPage';
import AuthProvider from './components/Provider/AuthProvider';
import EventCategory from './components/Event/EventCategory';
import PrivateRoute from './components/Private/PrivateRoute';
import EventDetails from './components/Event/EventDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/eventCategory/:category_id",
        element: <EventCategory></EventCategory>,
        loader: () => fetch('/Events.json')
      },
      {
        path: "/eventDetails/:id",
        element: <PrivateRoute><EventDetails></EventDetails></PrivateRoute>,
        loader: () => fetch('/Events.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
