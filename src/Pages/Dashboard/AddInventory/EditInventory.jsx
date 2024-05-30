import { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import StockProduct from "./StockProduct";

const options = [
  { value: "ROLE_ADMIN", label: "ROLE_ADMIN" },
  { value: "ROLE_USER", label: "ROLE_USER" },
  { value: "ROLE_INVENTORY", label: "ROLE_INVENTORY" },
  { value: "ROLE_APPROVE", label: "ROLE_APPROVE" },
];

const suppliers = [
  { value: "Goinnovior Limited", label: "Goinnovior Limited" },
  { value: "Unilever Limited", label: "Unilever Limited" },
  { value: "Padma Co.", label: "Padma Co." },
  { value: "Bashundhara Group", label: "Bashundhara Group" },
];
const products = [
  { value: "A4 Paper", label: "A4 Paper" },
  { value: "Water", label: "Water" },
  { value: "Pen", label: "Pen" },
  { value: "Chair", label: "Chair" },
];
const warehouses = [{ value: "Main warehouse", label: "Main Warehouse" }];

const EditInventory = () => {
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
          <label className="form-control  w-full ">
            <Select
              label="Select Supplier"
              options={suppliers}
              onChange={handleChange}
              required
            />
          </label>

          <label className="w-full max-w-xs">
            <input
              type="date"
              placeholder="Select date"
              className="input input-bordered input-sm w-full max-w-xs"
            />
          </label>
          <label className=" w-full max-w-xs">
            <input
              disabled
              placeholder="Purchase No. (Auto Generated)"
              className="input input-bordered input-sm w-full max-w-xs "
            />
          </label>

        </div>

        <div className="flex gap-2 mt-2">
          <label className="form-control w-full max-w-xs">
            <input
              type="text"
              placeholder="Purchase note"
              className="input input-bordered input-sm w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <select className="select select-bordered " required>
              <option disabled selected>
                Select Warehouse
              </option>
              <option >Main Warehouse</option>
            </select>
          </label>
      
          <div className="box-content h-8 w-32 p-4 border-4  bg-white">
<h1 className="text-xl">Total: 0</h1>
</div>
<div className="box-content h-8 w-32  border-4 pb-6 ps-3 bg-white pt-2">
<h1 className="text-xl">Item: 0</h1>
<p className="pb-5">Max:  60</p>
</div>
        </div>

        <div className="flex gap-2 mt-2">

        </div>
      </div>
      <hr className="divider"/>

      <div className=" ps-1 pe-2">
          <div className="label">
              <span className="label-text">Product/Brand Name <span className="text-red-500">*</span></span>
            </div>
        <div className="flex gap-5 mt-2  ">
          <label className="form-control  w-full input-sm">
            <Select
              label="Select Supplier"
              options={products}
              onChange={handleChange}
              required
            />
          </label>


          <button className="btn btn-sm btn-info btn-wide text-white text-lg" ><svg xmlns="http://www.w3.org/2000/svg" height="14" width="15.75" viewBox="0 0 576 512"><path fill="#ffffff" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"/></svg>Update Stock</button>


        </div>

        <div className="flex gap-2 mt-2">
        <label className="form-control w-full max-w-xs input-sm ">
            <div className="label">
              <span className="label-text">CTN / Bag<span className="text-red-500">*</span></span>
            </div>
            <input
              type="number"
              placeholder="0"
              className="input input-bordered w-full max-w-xs input-sm"
              required
              onInput={handleShowOrderInput}
              min="0"
            />
          </label>
          <label className="form-control w-full max-w-xs ">
            <div className="label">
              <span className="label-text">Piece<span className="text-red-500">*</span></span>
            </div>
            <input
              type="number"
              placeholder="0"
              className="input input-bordered w-full max-w-xs input-sm"
              required
              onInput={handleShowOrderInput}
              min="0"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Total Quantity<span className="text-red-500">*</span></span>
            </div>
            <input
              type="text"
              placeholder="1"
              className="input input-bordered w-full max-w-xs input-sm"
              required

            />
          </label>
      

        </div>
      <button className="btn btn-sm btn-info btn-wide text-white text-lg mt-5" ><svg xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" viewBox="0 0 448 512"><path fill="#ffffff" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>Add More</button>


      </div>
      <hr className="divider"/>
</div>


{/* Stock Products List */}
<StockProduct/>
    </>
  );
};

export default EditInventory;
