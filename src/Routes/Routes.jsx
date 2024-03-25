import {
  createBrowserRouter,
} from "react-router-dom";

import Dashboard from "../Layout/Dashboard";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AllEmployess from "../Pages/Dashboard/AllEmployees/AllEmployess";
<<<<<<< HEAD
import AddNewEmployee from "../Pages/Dashboard/AllEmployees/AddNewEmployee";
import EditSingleEmploy from "../Pages/Dashboard/AllEmployees/EditSingleEmploy";
=======
<<<<<<< HEAD
import AllSuppliers from "../Pages/Dashboard/AllSuppliers/AllSuppliers";
=======
import AllProducts from "../Pages/Dashboard/AllProducts/AllProducts"
import AddNewProduct from "../Pages/Dashboard/AllProducts/AddProductForm";
import EditProduct from "../Pages/Dashboard/AllProducts/EditProduct";
>>>>>>> 9ed2b2d3923124fa42ea27acf1fd2264ff635c2b

>>>>>>> 238fd2076282d9dcab4bca123cd77cbdf2ef09bd

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard></Dashboard>,
    children: [
      // admin routes

<<<<<<< HEAD
      {
        path: 'allUsers',
        element: <AllUsers></AllUsers>
      },
      {
        path: 'allEmployees',
        element: <AllEmployess />
      },
      {
        path: 'AllSuppliers',
        element: <AllSuppliers />
      },
=======
        {
          path: 'allUsers', 
          element: <AllUsers></AllUsers>
        },
        {
          path: 'allEmployees', 
          element: <AllEmployess/>
        },
        {
<<<<<<< HEAD
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
=======
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
       
>>>>>>> 9ed2b2d3923124fa42ea27acf1fd2264ff635c2b

    ]
  }
]);
>>>>>>> 238fd2076282d9dcab4bca123cd77cbdf2ef09bd
