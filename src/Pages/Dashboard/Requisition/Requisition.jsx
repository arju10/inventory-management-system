import { Pagination } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

function Requisition() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const handleRowClick = (index) => {
    setSelectedRowIndex(index);
  };
  const dummyData = [
    {
      date: "15-02-2024",
      requisition: "R00035",
      requestBy: "user 6, Executive",
      status: "Pending",
      note: "",
    },
    // Add more dummy data as needed
  ];
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/requisitionRequest");
  };

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = dummyData.slice(firstIndex, lastIndex);
  const npage = Math.ceil(dummyData.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  return (
    <div className="sm:p-6 h-screen">
      <div className="flex flex-col justify-between items-center sm:flex-row sm:justify-between sm:items-center mb-4">
        <div className="flex flex-col justify-between items-center sm:justify-between sm:items-start">
          <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-custom-dart">
            Requisition Request List
          </h2>
          <p className="text-center text-xs sm:text-start sm:text-sm md:text-base lg:text-base text-gray-600">
            To multiple item select, use ctrl or shift key while selecting
          </p>
        </div>
        <div className="relative mt-3 sm:mt-0">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full sm:w-80"
            placeholder="Search by Invoice No or Customer"
          />
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
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
      <div className="container mx-auto flex flex-col items-start">
        <div className="w-full mb-4">
          <div className="flex flex-wrap justify-center sm:justify-start">
            <button
              onClick={handleButtonClick}
              className="bg-custom-blue text-white hover:bg-blue-600 px-2 sm:px-4 py-1 sm:py-2 rounded m-1"
            >
              + New Requisition Request
            </button>
            <button className="bg-white text-custom-blue hover:bg-gray-50 px-2 sm:px-4 py-1 sm:py-2 rounded m-1">
              Preview
            </button>
          </div>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="min-w-full bg-white mb-4">
            <thead className="bg-custom-dark text-white">
              <tr>
                <th className="text-left px-2 py-1 sm:px-4 sm:p-3 border">
                  Date
                </th>
                <th className="text-left px-2 py-1 sm:px-4 sm:p-3 border">
                  # Requisition
                </th>
                <th className="text-left px-2 py-1 sm:px-4 sm:p-3 border">
                  Request By
                </th>
                <th className="text-left px-2 py-1 sm:px-4 sm:p-3 border">
                  Request Status
                </th>
                <th className="text-left px-2 py-1 sm:px-4 sm:p-3 border">
                  Note
                </th>
              </tr>
            </thead>
            <tbody>
              {records.length > 0 ? (
                records.map((item, index) => (
                  <tr
                    className={`border-b ${
                      selectedRowIndex === index
                        ? "bg-custom-blue text-white"
                        : "hover:bg-gray-200"
                    }`}
                    key={index}
                    onClick={() => handleRowClick(index)}
                  >
                    <td className="px-2 py-1 sm:px-4 sm:py-4">{item.date}</td>
                    <td className="px-2 py-1 sm:px-4 sm:py-4">
                      {item.requisition}
                    </td>
                    <td className="px-2 py-1 sm:px-4 sm:py-4">
                      {item.requestBy}
                    </td>
                    <td className="px-2 py-1 sm:px-4 sm:py-4">{item.status}</td>
                    <td className="px-2 py-1 sm:px-4 sm:py-4">{item.note}</td>
                  </tr>
                ))
              ) : (
                <tr className="border-b">
                  <td colSpan="5" className="text-center py-2 sm:py-4">
                    No items to display
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          {/* Pagination controls */}
          <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">{firstIndex + 1}</span> to{" "}
                  <span className="font-medium">{Math.min(lastIndex, dummyData.length)}</span> of{" "}
                  <span className="font-medium">{dummyData.length}</span> results
                </p>
              </div>
              <div>
                <nav
                  className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                  aria-label="Pagination"
                >
                  <button
                    className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    onClick={prevPage}
                    aria-label="Previous"
                    disabled={currentPage === 1}
                  >
                    <span className="sr-only">Previous</span>
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                  {numbers.map((n, i) => (
                    <button
                      key={i}
                      className={`relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${
                        currentPage === n
                          ? "!bg-custom-dark text-white hover:text-white"
                          : ""
                      }`}
                      onClick={() => changeCpage(n)}
                    >
                      {n}
                    </button>
                  ))}
                  <button
                    className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    onClick={nextPage}
                    aria-label="Next"
                    disabled={currentPage === npage}
                  >
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function prevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage < npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  function changeCpage(id) {
    setCurrentPage(id);
  }
}

export default Requisition;
