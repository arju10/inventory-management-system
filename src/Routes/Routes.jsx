import {
    createBrowserRouter,
  } from "react-router-dom";

import Dashboard from "../Layout/Dashboard";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AllEmployess from "../Pages/Dashboard/AllEmployees/AllEmployess";
import AllProducts from "../Pages/Dashboard/AllProducts/AllProducts"
import AddNewProduct from "../Pages/Dashboard/AllProducts/AddProductForm";
import EditProduct from "../Pages/Dashboard/AllProducts/EditProduct";


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
          path: 'allProducts', 
          element: <AllProducts/>
        },
        {
          path: 'addNewProduct', 
          element: <AddNewProduct/>
        },
        {
          path: 'editProduct', 
          element: <EditProduct/>
        },
       

      ]
    }
  ]);