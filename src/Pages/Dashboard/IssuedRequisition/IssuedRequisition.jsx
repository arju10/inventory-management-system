import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "daisyui";
import InventoryPagination from "./InventoryPagination";

const IssuedRequisition = () => {
  const [inventories, setInventories] = useState([]);
  const [selectedInventories, setSelectedInventories] = useState([]);

  useEffect(() => {
    const dummyData = [
      {
        // id: "E101",
        date: "10-10-2023",
        id: "PO-000011",
        supplier: "Go Innovior",
        mobile: "01749782209",
        note: "Added Paper",
        created: "Mr. Babul Khan",
        lastUpdate: "Mr. Mokbul Khan",
        status: "pending",
      },
      {
        // id: "E101",
        date: "20-10-2023",
        id: "PO-000045",
        supplier: "Brain Station",
        mobile: "01749782222",
        note: "Added Paper",
        created: "Mr. Babul Khan",
        lastUpdate: "Mr. Mokbul Khan",
        status: "pending",
      },
      {
        // id: "E101",
        date: "10-10-2023",
        id: "PO-000013",
        supplier: "Go Innovior",
        mobile: "01749782209",
        note: "Added Paper",
        created: "Mr. Babul Khan",
        lastUpdate: "Mr. Mokbul Khan",
        status: "pending",
      },
      {
        // id: "E101",
        date: "10-10-2023",
        id: "PO-000014",
        supplier: "Go Innovior",
        mobile: "01749782209",
        note: "Added Paper",
        created: "Mr. Babul Khan",
        lastUpdate: "Mr. Mokbul Khan",
        status: "pending",
      },
      {
        // id: "E101",
        date: "10-10-2023",
        id: "PO-000016",
        supplier: "Go Innovior",
        mobile: "01749782209",
        note: "Added Paper",
        created: "Mr. Babul Khan",
        lastUpdate: "Mr. Mokbul Khan",
        status: "pending",
      },
      {
        // id: "E101",
        date: "10-10-2023",
        id: "PO-000019",
        supplier: "Go Innovior",
        mobile: "01749782209",
        note: "Added Paper",
        created: "Mr. Babul Khan",
        lastUpdate: "Mr. Mokbul Khan",
        status: "pending",
      },
      {
        // id: "E101",
        date: "10-10-2023",
        id: "PO-000018",
        supplier: "Go Innovior",
        mobile: "01749782209",
        note: "Added Paper",
        created: "Mr. Babul Khan",
        lastUpdate: "Mr. Mokbul Khan",
        status: "pending",
      },
      {
        // id: "E101",
        date: "10-10-2023",
        id: "PO-000020",
        supplier: "Go Innovior",
        mobile: "01749782209",
        note: "Added Paper",
        created: "Mr. Babul Khan",
        lastUpdate: "Mr. Mokbul Khan",
        status: "pending",
      },
    ];
    setInventories(dummyData);
  }, []);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allInventoryIds = inventories.map((inv) => inv.id);
      setSelectedInventories(allInventoryIds);
    } else {
      setSelectedInventories([]);
    }
  };

  const handleSelectInventory = (id) => {
    if (selectedInventories.includes(id)) {
      setSelectedInventories(
        selectedInventories.filter((invId) => invId !== id)
      );
    } else {
      setSelectedInventories([...selectedInventories, id]);
    }
  };

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
          <h1 className="text-2xl mb-5">Issued Requisition</h1>
        </div>
        <div className="pb-5">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search by Requisition ID"
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

      <div className="overflow-x-auto">
        <table className="table border rounded-lg bg-white">
          <thead>
            <tr className="border bg-cyan-500 text-base text-white font-thin">
              <th>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={selectedInventories.length === inventories.length}
                    onChange={handleSelectAll}
                  />
                </label>
              </th>
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
                  <div>Requisition</div>
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
              <th className="border  ">Request by</th>
              <th className="border ">Request status</th>
              <th className="border ">Note</th>
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
                <th>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={selectedInventories.includes(inventory.id)}
                      onChange={() => handleSelectInventory(inventory.id)}
                    />
                  </label>
                </th>
                <td className="border ">{inventory.date}</td>
                <td className="border text-center ">{inventory.id}</td>
                <td className="border ">{inventory.created}</td>
                <td className="border ">{inventory.status}</td>
                <td className="border ">{inventory.note}</td>
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

export default IssuedRequisition;
