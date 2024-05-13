import { useState } from "react";

function RequisitionRequest() {
  const tableData = [
    { sl: 1, product: "Product A", unitQty: 10, totalQty: 10 },
    { sl: 2, product: "Product B", unitQty: 20, totalQty: 20 },
    { sl: 3, product: "Product C", unitQty: 5, totalQty: 5 },
    { sl: 4, product: "Product D", unitQty: 6, totalQty: 6 },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const categories = ["Furniture", "Stationary", "IT Gadget"];
  const filteredItems = categories.filter((item) =>
    item.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="flex flex-col md:flex-row  sm:mt-10">
      <div className="flex-1 md:mr-5">
        <div className="App">
          <label
            htmlFor="requisition-note"
            className="block text-sm sm:text-lg font-semibold mb-2"
          >
            Requisition Note
          </label>
          <input
            type="text"
            name="requisition-note"
            id="requisition-note"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
            placeholder="Requisition Note"
          />
        </div>
        <div className="overflow-x-auto relative mt-5">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Sl
                </th>
                <th scope="col" className="py-3 px-6">
                  Product
                </th>
                <th scope="col" className="py-3 px-6">
                  Unit Qty
                </th>
                <th scope="col" className="py-3 px-6">
                  Total Qty
                </th>
                <th scope="col" className="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item) => (
                <tr key={item.sl} className="bg-white border-b">
                  <td className="py-4 px-6">{item.sl}</td>
                  <td className="py-4 px-6">{item.product}</td>
                  <td className="py-4 px-6">{item.unitQty}</td>
                  <td className="py-4 px-6">{item.totalQty}</td>
                  <td className="py-4 px-6">
                    <button className="font-medium text-red-600 hover:underline ml-4">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700  w-full text-white font-bold py-2 px-4 mt-5 rounded">
          Request
        </button>
      </div>
      <div className="max-w-md  flex-1">
        <div className="mb-6">
          <label
            htmlFor="budget-code"
            className="block text-sm sm:text-lg font-semibold mb-2 mt-10 md:mt-0"
          >
            Budget Code
          </label>
          <div className="relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onClick={() => setIsDropdownOpen(true)}
              className="block w-full p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none"
              placeholder="e.g: Drinks, Spice, Fruits"
            />
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="absolute inset-y-0 right-0 flex items-center px-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item, index) => (
                    <li
                      key={index}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setInputValue(item);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {item}
                    </li>
                  ))
                ) : (
                  <li className="p-2 text-gray-500">No matches found</li>
                )}
              </ul>
            )}
          </div>
        </div>

        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search by Code, Product Name"
            />
            <button className="absolute inset-y-0 right-0 flex items-center px-3 border-l">
              <svg
                className="h-5 w-5"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3 c0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2 c22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2 c-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z" />
              </svg>
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-sm sm:text-lg font-semibold mb-2">
            Product Name
          </h3>
          <div className="border bg-white rounded-md p-4 h-52">
            <p className="text-gray-700">No products found.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequisitionRequest;
