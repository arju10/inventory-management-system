import {
  createBrowserRouter,
} from "react-router-dom";

import Dashboard from "../Layout/Dashboard";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";

import AllEmployess from "../Pages/Dashboard/AllEmployees/AllEmployess";
import AddNewEmployee from "../Pages/Dashboard/AllEmployees/AddNewEmployee";
import EditSingleEmploy from "../Pages/Dashboard/AllEmployees/EditSingleEmploy";

import AllProducts from "../Pages/Dashboard/AllProducts/AllProducts";
import AddProductForm from "../Pages/Dashboard/AllProducts/AddProductForm";
import EditProduct from "../Pages/Dashboard/AllProducts/EditProduct";

import Suppliers from "../Pages/Dashboard/AllSuppliers/Suppliers";


import AddNewSupplier from "../Pages/Dashboard/AllSuppliers/AddNewSupplier";
import EditSupplier from "../Pages/Dashboard/AllSuppliers/EditSupplier";


import ReportDashboard from "../Pages/Dashboard/ReportDashboard/ReportDashboard";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    children: [
      // admin routes
      {
        path: '/',
        element: <ReportDashboard />

      },
      {
        path: 'allUsers',
        element: <AllUsers></AllUsers>
      },
      // Employee Routes
      {
        path: 'allEmployees',
        element: <AllEmployess />
      },
      {
        path: 'add-Employee',
        element: <AddNewEmployee />
      },
      {
        path: 'edit-employee',
        element: <EditSingleEmploy />
      },
      // Product Routes
      {
        path: 'allProducts',
        element: <AllProducts />
      },
      {
        path: 'addNewProduct',
        element: <AddProductForm />
      },
      {
        path: 'editProduct',
        element: <EditProduct />
      },
      // Suppliers Routes
      {
        path: 'allSuppliers',
        element: <Suppliers />
      },

      {
        path: 'addNewSupplier',
        element: <AddNewSupplier />
      },
      {
        path: 'editSupplier',
        element: <EditSupplier />
      },

    ]
  }
]);