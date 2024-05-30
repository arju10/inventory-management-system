import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "daisyui";
import CurrentStockPagination from "./CurrentStockPagination";

const CurrentStock = () => {
  const [inventories, setInventories] = useState([]);
  const [selectedInventories, setSelectedInventories] = useState([]);

  useEffect(() => {
    const dummyData = [
      {
        id: "Inv.101",
        SI: "1",
        productName: "A4 Paper",
        packet: 5,
        unit: 10,
        totalQuantity: 50,
        stock: 5,
        salesPrice: 10,
        alertQty: 5,
      },
      {
        id: "Inv.102",
        SI: "2",
        productName: "A4 Paper",
        packet: 5,
        unit: 10,
        totalQuantity: 50,
        stock: 5,
        salesPrice: 10,
        alertQty: 5,
      },
      {
        id: "Inv.103",
        SI: "3",
        productName: "A4 Paper",
        packet: 5,
        unit: 10,
        totalQuantity: 50,
        stock: 5,
        salesPrice: 10,
        alertQty: 5,
      },
      {
        id: "Inv.104",
        SI: "4",
        productName: "A4 Paper",
        packet: 5,
        unit: 10,
        totalQuantity: 50,
        stock: 5,
        salesPrice: 10,
        alertQty: 5,
      },
      {
        id: "Inv.105",
        SI: "5",
        productName: "A4 Paper",
        packet: 5,
        unit: 10,
        totalQuantity: 50,
        stock: 5,
        salesPrice: 10,
        alertQty: 5,
      },
    ];
    setInventories(dummyData);
  }, []);

  const handleSelectInventory = (id) => {
    if (selectedInventories.includes(id)) {
      setSelectedInventories(
        selectedInventories.filter((invId) => invId !== id)
      );
    } else {
      setSelectedInventories([...selectedInventories, id]);
    }
  };

  return (
    <>
      <div>
        <h1 className="text-2xl mb-5">Current Stock List</h1>
      </div>
      <div>
        <div className="dropdown dropdown-bottom">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 btn-sm bg-green-500 text-white mb-3 hover:bg-green-600"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="14"
              width="14"
              viewBox="0 0 512 512"
            >
              <path
                fill="#ffffff"
                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
              />
            </svg>
            All Items
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>In Stock</a>
            </li>
            <li>
              <a>Negative Stock</a>
            </li>
            <li>
              <a>Out of Stock</a>
            </li>
            <li>
              <a>All Items</a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-bottom">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 btn-sm bg-cyan-500 text-white mb-3 hover:bg-cyan-600 "
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="14"
              width="10.5"
              viewBox="0 0 384 512"
            >
              <path
                fill="#ffffff"
                d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"
              />
            </svg>
            Report
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Inventory in hand</a>
            </li>
            <li>
              <a>Ledger</a>
            </li>
          </ul>
        </div>

        <div></div>
      </div>
      <div></div>

      <div className="overflow-x-auto">
        <table className="table border rounded-lg bg-white table-sm">
          <thead>
            <tr className="border bg-cyan-500 text-base text-white font-thin">
              <th className="border  ">Code</th>
              <th>
                <div className="flex justify-between">
                  <div>Product Name</div>
                  <div></div>
                </div>
              </th>

              <th className="border  ">Unit</th>
              <th className="border ">Stock</th>
              <th className="border ">Sale Price</th>
              <th className="border ">Alert Qty</th>
            </tr>
          </thead>
          <tbody>
            {inventories.map((inventory) => (
              <tr
                key={inventory.id}
                className={`hover:bg-neutral-300 active:bg-cyan-300 focus:outline-none focus:ring focus:ring-neutral-300 ${
                  selectedInventories.includes(inventory.id)
                    ? "bg-cyan-300"
                    : ""
                }`}
              >
                <td
                  className="border text-center "
                  onChange={handleSelectInventory}
                >
                  {inventory.id}
                </td>
                <td className="border ">{inventory.productName}</td>
                <td className="border text-center ">{inventory.unit}</td>
                <td className="border text-center ">{inventory.stock}</td>
                <td className="border text-center ">{inventory.salesPrice}</td>
                <td className="border text-center ">{inventory.alertQty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CurrentStockPagination />
    </>
  );
};

export default CurrentStock;
