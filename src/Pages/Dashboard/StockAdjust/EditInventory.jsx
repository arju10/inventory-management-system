import { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import AdjustProduct from "./AdjustProduct";

const warehouses = [{ value: "Main warehouse", label: "Main Warehouse" }];

const Edit = () => {
  const handleChange = (selectedOptions) => {
    console.log(selectedOptions);
  };
  const handleShowOrderInput = (event) => {
    const value = event.target.value;
    if (value < 0) {
      event.target.value = 0;
    }
  };

  return (
    <>
      <div className="border">
        <div className=" ps-1 pe-2">
          <div className="flex gap-5 mt-2  ">
            <label className="w-full max-w-xs">
              <input
                type="date"
                placeholder="Select date"
                className="input input-bordered input-md w-full max-w-xs"
              />
            </label>

            <label className="form-control  w-full ">
              <input
                type="text"
                placeholder="Purchase note"
                className="input input-bordered input-md w-full "
              />
            </label>
          </div>
        </div>
        <hr className="divider" />

        <div className="flex gap-2 mt-3 ml-4">
          <span className="label-text ">
            Adjust Reson <span className="text-red-500">*</span>
            <select className="select select-bordered max-w-xs select-md mt-2 w-full ">
              <option disabled selected>
                Select resone
              </option>
              <option>Lost</option>
              <option>Damaged</option>
              <option>Wastage</option>
              <option>Add stock</option>
            </select>
          </span>
          <span className="label-text  ">
            Product Name<span className="text-red-500">*</span>
            <select className="select select-bordered w-full max-w-xs select-md mt-2 w-300">
              <option disabled selected>
                Select Product
              </option>
              <option>Arosole (475 ml)</option>
              <option>Greedo</option>
            </select>
          </span>

          <span className="label-text ml-3 ">
            Total amount <span className="text-red-500">*</span>
            <input
              type="text"
              value="0"
              placeholder="Total Amount"
              className="input input-bordered w-full max-w-xs  mt-2  "
            />
          </span>
        </div>

        <div className=" flex gap-2 mt-3 ml-4">
          <div className="label">
            <span className="label-text w-24 ml-3">
              Quantity <span className="text-red-500">*</span>
              <input
                type="text"
                placeholder="1"
                className="input input-bordered w-full max-w-xs  mt-2  "
              />
            </span>
          </div>
          <div className="label">
            <span className="label-text w-24 ml-3">
              Price <span className="text-red-500">*</span>
              <input
                type="text"
                placeholder="0"
                className="input input-bordered w-full max-w-xs  mt-2  "
              />
            </span>
          </div>
          <div className="label">
            <span className="label-text w-100 ml-3">
              Item Note <span className="text-red-500">*</span>
              <input
                type="text"
                placeholder="Item Note"
                className="input input-bordered w-full max-w-xs  mt-2  "
              />
            </span>
          </div>

          <button className="btn  w-40 bg-green-500 hover:bg-green-700 mt-9">
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path
                fillRule="evenodd"
                d="M13.25 2.5H2.75a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h10.5a.25.25 0 00.25-.25V2.75a.25.25 0 00-.25-.25zM2.75 1h10.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0113.25 15H2.75A1.75 1.75 0 011 13.25V2.75C1 1.784 1.784 1 2.75 1zM8 4a.75.75 0 01.75.75v2.5h2.5a.75.75 0 010 1.5h-2.5v2.5a.75.75 0 01-1.5 0v-2.5h-2.5a.75.75 0 010-1.5h2.5v-2.5A.75.75 0 018 4z"
              />
            </svg>
            Add More
          </button>
          <button className="btn  w-40 btn-primary mt-9">
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z" />
            </svg>
            Submit
          </button>
        </div>
        <hr className="divider" />
      </div>

      {/* Adjust Products List */}
      <AdjustProduct />
    </>
  );
};

export default Edit;
