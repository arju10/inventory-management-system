import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "daisyui";
import InventoryPagination from "./InventoryPagination";

const StockAdjust = () => {
  const [inventories, setInventories] = useState([]);
  const [selectedInventories, setSelectedInventories] = useState([]);

  useEffect(() => {
    const dummyData = [
      {
        date: "10-10-2023",
        id: "ADJ-000011",
        entryType: "ADJUST",
        adsjustAmount: 2500.0,
        note: "Added Paper",
        created: "Mr. Babul Khan",
        lastUpdate: "Mr. Mokbul Khan",
      },
      {
        date: "20-10-2023",
        id: "ADJ-000045",
        entryType: "ADJUST",
        adsjustAmount: 2500.0,
        note: "Added Paper",
        created: "Mr. Babul Khan",
        lastUpdate: "Mr. Mokbul Khan",
      },
      {
        date: "10-10-2023",
        id: "ADJ-000013",
        entryType: "ADJUST",
        adsjustAmount: 2500.0,
        note: "Added Paper",
        created: "Mr. Babul Khan",
        lastUpdate: "Mr. Mokbul Khan",
      },
      {
        date: "10-10-2023",
        id: "ADJ-000014",
        entryType: "ADJUST",
        adsjustAmount: 2500.0,
        note: "Added Paper",
        created: "Mr. Babul Khan",
        lastUpdate: "Mr. Mokbul Khan",
      },
      {
        date: "10-10-2023",
        id: "ADJ-000016",
        entryType: "ADJUST",
        adsjustAmount: 2500.0,
        note: "Added Paper",
        created: "Mr. Babul Khan",
        lastUpdate: "Mr. Mokbul Khan",
      },
    ];
    setInventories(dummyData);
  }, []);

  const handleDeleteInventory = (id) => {
    if (window.confirm("Are you sure you want to delete this inventory?")) {
      setInventories(inventories.filter((inventory) => inventory.id !== id));
      setSelectedInventories(
        selectedInventories.filter((invId) => invId !== id)
      );
      toast("Inventory deleted successfully", { type: "success" });
    }
  };

  const handleDeleteAll = () => {
    if (
      window.confirm(
        "Are you sure you want to delete all selected inventories?"
      )
    ) {
      setInventories(
        inventories.filter(
          (inventory) => !selectedInventories.includes(inventory.id)
        )
      );
      setSelectedInventories([]);
      toast("Selected inventories deleted successfully", { type: "success" });
    }
  };
  return (
    <>
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl mb-5">Stock Adjust</h1>
        </div>
        <div>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search by Purchase ID, Supplier, Mobile No"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-8 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <Link to="/AddProduct">
            <button className="btn btn-sm bg-green-500 text-white     hover:bg-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="14"
                width="17.5"
                viewBox="0 0 640 512"
                className="w-8 h-4 opacity-70"
              >
                <path
                  fill="#f7f7f8"
                  d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
                />
              </svg>
              Adjust Stock
            </button>
          </Link>

          <button className="btn btn-sm bg-green-500 text-white  hover:bg-green-600 m-3">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M20 8l-6-6H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM9 19H7v-9h2v9zm4 0h-2v-6h2v6zm4 0h-2v-3h2v3zM14 9h-1V4l5 5h-4z" />
            </svg>
            Report
          </button>

          {selectedInventories.length > 1 && (
            <button
              className="btn btn-error ms-5 text-base btn-sm"
              onClick={handleDeleteAll}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="15"
                viewBox="0 0 384 512"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
              Delete All
            </button>
          )}
        </div>
        <div></div>
      </div>
      <div className="overflow-x-auto">
        <table className="table border rounded-lg bg-white">
          <thead>
            <tr className="border bg-cyan-500 text-base text-white font-thin">
              <th className="border  ">Entry Type</th>
              <th>
                <div className="flex justify-between">
                  <div>Date</div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      width="12.5"
                      viewBox="0 0 320 512"
                    >
                      <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                    </svg>
                  </div>
                </div>
              </th>
              <th className="border  ">
                <div className="flex justify-between ">
                  <div>Adjust</div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      width="12.5"
                      viewBox="0 0 320 512"
                    >
                      <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                    </svg>
                  </div>
                </div>
              </th>
              <th className="border  ">Adjust Amount</th>

              <th className="border ">Adjust Note</th>
              <th className="border  ">Action</th>
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
                <td className="border ">{inventory.entryType}</td>
                <td className="border ">{inventory.date}</td>
                <td className="border text-center ">{inventory.id}</td>
                <td className="border ">{inventory.adsjustAmount}</td>
                <td className="border ">{inventory.note}</td>
                <td className="border ">
                  <div className="flex">
                    <button onClick={() => handleDeleteInventory(inventory.id)}>
                      <div className="flex-none w-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          width="17.5"
                          viewBox="0 0 448 512"
                        >
                          <path
                            opacity="1"
                            fill="#f00528"
                            d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="my-5">
        <InventoryPagination />
      </div>
    </>
  );
};

export default StockAdjust;
