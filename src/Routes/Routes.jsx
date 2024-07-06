import { createBrowserRouter } from "react-router-dom";

import Dashboard from "../Layout/Dashboard";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";

import AllEmployess from "../Pages/Dashboard/AllEmployees/AllEmployess";
import AddNewEmployee from "../Pages/Dashboard/AllEmployees/AddNewEmployee";
import EditSingleEmploy from "../Pages/Dashboard/AllEmployees/EditSingleEmploy";

import AllProducts from "../Pages/Dashboard/AllProducts/AllProducts";
import AddProductForm from "../Pages/Dashboard/AllProducts/AddProductForm";
import EditProduct from "../Pages/Dashboard/AllProducts/EditProduct";
import ProductPagination from "../Pages/Dashboard/AllProducts/ProductPagination";

import Suppliers from "../Pages/Dashboard/AllSuppliers/Suppliers";

import AddNewSupplier from "../Pages/Dashboard/AllSuppliers/AddNewSupplier";
import EditSupplier from "../Pages/Dashboard/AllSuppliers/EditSupplier";
import SupplierPagination from "../Pages/Dashboard/AllSuppliers/SupplierPagination";

import IssuedRequisition from "../Pages/Dashboard/IssuedRequisition/IssuedRequisition";

import ReportDashboard from "../Pages/Dashboard/ReportDashboard/ReportDashboard";
import RequisitionApproval from "../Pages/Dashboard/RequisitionApproval/RequisitionApproval";

import RequisitionAuthorization from "../Pages/Dashboard/RequisitionApproval/RequisitionApproval";
import Requisition from "./../Pages/Dashboard/Requisition/Requisition";

import RequisitionRequest from "../Pages/Dashboard/Requisition/RequisitionRequest";
import Designation from "../Pages/Dashboard/Settings/Designation/Designation";
import AllInventories from "../Pages/Dashboard/AddInventory/AllInventories";
import AddNewInventory from "../Pages/Dashboard/AddInventory/AddNewInventory";
import EditInventory from "../Pages/Dashboard/AddInventory/EditInventory";
import InventoryBarCode from "../Pages/Dashboard/AddInventory/InventoryBarCode";
import CurrentStock from "../Pages/Dashboard/CurrentStock/CurrentStock";
import AllProductKeys from "../Pages/Dashboard/Settings/ProductKey/AllProductKeys";
import AddProductKey from "../Pages/Dashboard/Settings/ProductKey/AddProductKey";

import RequisitionIssue from "../Pages/Dashboard/RequisitionIssue/RequisitionIssue";

import StockAdjust from "../Pages/Dashboard/StockAdjust/StockAdjust";
import AddProduct from "../Pages/Dashboard/StockAdjust/EditInventory";

//for report page
import Reports from "../Pages/Report/Reports";
import ProductIssue from "../Pages/Report/ProductIssue";
import EmployeeUser from "../Pages/Report/EmployeeUser";

import AddNewDesignation from "../Pages/Dashboard/Settings/Designation/AddDesignation";
import EditDesignation from "../Pages/Dashboard/Settings/Designation/EditDesignation";
import Department from "../Pages/Dashboard/Settings/Department/Department";
import AddDepartment from "../Pages/Dashboard/Settings/Department/AddDepartment";
import EditDepartment from "../Pages/Dashboard/Settings/Department/EditDepartment";
import Preview from '../Pages/Dashboard/Requisition/Preview';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      // admin routes
      {
        path: "/",
        element: <ReportDashboard />,
      },
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>,
      },
      // Issued Requisition
      {
        path: "IssuedRequisition",
        element: <IssuedRequisition />,
      },
      // requisition Approval
      {
        path: "requisitionApp",
        element: <RequisitionApproval />,
      },
      {
        path: "requisitionAuthorization",
        element: <RequisitionAuthorization />,
      },
      // Add Inventory Routes
      {
        path: "allInventory",
        element: <AllInventories />,
      },
      {
        path: "add-inventory",
        element: <AddNewInventory />,
      },
      {
        path: "edit-Inventory/:id",
        element: <EditInventory />,
      },
      {
        path: "print-bar-code/:id",
        element: <InventoryBarCode />,
      },
      {
        path: "add-Inventory",
        element: <AddNewInventory />,
      },
      // Current Stock Routes
      {
        path: "currentStock",
        element: <CurrentStock />,
      },
      // Stock Adjust Routes
      {
        path: "StockAdjust",
        element: <StockAdjust />,
      },
      {
        path: "AddProduct",
        element: <AddProduct />,
      },
      // Employee Routes
      {
        path: "allEmployees",
        element: <AllEmployess />,
      },
      {
        path: "add-Employee",
        element: <AddNewEmployee />,
      },
      {
        path: "edit-employee/:id",
        element: <EditSingleEmploy />,
      },
      // Product Routes
      {
        path: "allProducts",
        element: <AllProducts />,
      },
      {
        path: "addNewProduct",
        element: <AddProductForm />,
      },
      {
        path: "editProduct",
        element: <EditProduct />,
      },
      // Suppliers Routes
      {
        path: "allSuppliers",
        element: <Suppliers />,
      },

      {
        path: "addNewSupplier",
        element: <AddNewSupplier />,
      },
      {
        path: "editSupplier/:id",
        element: <EditSupplier />,
      },
      {
        path: "supplierPagination",
        element: <SupplierPagination />,
      },
      {
        path: "ProductPagination",
        element: <ProductPagination />,
      },

      {
        path: "requisition",
        element: <Requisition />,
      },
      {
        path: "requisitionRequest",
        element: <RequisitionRequest />,
      },
      {
        path: "requisitionIssue",
        element: <RequisitionIssue />,
      },

      // Setting/ Designation
      {
        path: "designation",
        element: <Designation />,
      },
      // Setting/ Product key
      {
        path: "productKeys",
        element: <AllProductKeys />,
      },
      {
        path: "add-productKey",
        element: <AddProductKey />,
      },
      {
        path: "edit-productKey/:id",
        element: <AllProductKeys />,
      },
      {
        path: "add-productKey",
        element: <AddProductKey />,
      },
      {
        path: "edit-productKey/:id",
        element: <EditSingleEmploy />,
      },

      //Reports page routing

      {
        path: "inventory",
        element: <Reports />,
      },
      {
        path: "productIssue",
        element: <ProductIssue />,
      },
      {
        path: "employeeUser",
        element: <EmployeeUser />,
      },

      {
        path: "addDesignation",
        element: <AddNewDesignation />,
      },
      {
        path: "editDasignation",
        element: <EditDesignation />,
      },
      {
        path: "department",
        element: <Department />,
      },
      {
        path: "addDepartment",
        element: <AddDepartment />,
      },
      {
        path: "editDepartment",
        element: <EditDepartment />,
      },
      {
        path:"preview",
        element:<Preview/>
      },
    ],
  },
]);
