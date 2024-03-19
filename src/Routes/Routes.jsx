import {
    createBrowserRouter,
  } from "react-router-dom";

import Dashboard from "../Layout/Dashboard";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AllEmployess from "../Pages/Dashboard/AllEmployees/AllEmployess";


  export const router = createBrowserRouter([
    {
      path: '/',
      element: <Dashboard></Dashboard>, 
      children: [
        // admin routes

        {
          path: 'allUsers', 
          element: <AllUsers></AllUsers>
        },
        {
          path: 'allEmployees', 
          element: <AllEmployess/>
        },

      ]
    }
  ]);