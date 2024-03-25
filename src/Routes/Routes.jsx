import {
    createBrowserRouter,
  } from "react-router-dom";

import Dashboard from "../Layout/Dashboard";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AllEmployess from "../Pages/Dashboard/AllEmployees/AllEmployess";
import AddNewEmployee from "../Pages/Dashboard/AllEmployees/AddNewEmployee";
import EditSingleEmploy from "../Pages/Dashboard/AllEmployees/EditSingleEmploy";

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
        {
          path: 'add-employee', 
          element: <AddNewEmployee/>
        },
        {
          path: 'edit-employee', 
          element: <EditSingleEmploy/>
        },
      ]
    }
  ]);