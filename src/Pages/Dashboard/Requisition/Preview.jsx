import React from "react";

function Preview() {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">
        R00048 || Requisition Date: 27/03/2024
      </h2>
      <div className="shadow-md overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <tbody>
            <tr className="even:bg-gray-50">
              <td className="py-2 px-4 border-b border-gray-200 text-gray-800">
                <label className="block font-medium">Requisition Created</label>
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-600">27/03/2024</span>
              </td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="py-2 px-4 border-b border-gray-200 text-gray-800">
                <label className="block font-medium">Authorization</label>
                <div className="flex flex-row justify-between">
                  <div>
                    <input type="checkbox" className="mr-2" />
                    <span className="text-gray-600">
                      <b>Status:</b> Pending...
                    </span>
                  </div>
                  <button className="text-custom-blue border border-custom-blue hover:bg-gray-100 px-2 sm:px-4 py-1 sm:py-2 rounded m-1">
                    Authorize Request
                  </button>
                </div>
              </td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="py-2 px-4 border-b border-gray-200 text-gray-800">
                <label className="block font-medium">Accept</label>
                <div className="flex flex-row justify-between">
                  <div>
                    <input type="checkbox" className="mr-2" />
                    <span className="text-gray-600">
                      <b>Status:</b> Pending...
                    </span>
                  </div>
                  <button className="text-custom-blue border border-custom-blue hover:bg-gray-100 px-2 sm:px-4 py-1 sm:py-2 rounded m-1">
                    Accept Request
                  </button>
                </div>
              </td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="py-2 px-4 border-b border-gray-200 text-gray-800">
                <label className="block font-medium">Issue</label>
                <div className="flex flex-row justify-between">
                  <div>
                    <input type="checkbox" className="mr-2" />
                    <span className="text-gray-600">
                      <b>Status:</b> Pending...
                    </span>
                  </div>
                  <button className="text-custom-blue border border-custom-blue hover:bg-gray-100 px-2 sm:px-4 py-1 sm:py-2 rounded m-1">
                    Issue
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="shadow-md mt-3">
        <h2 className="text-gray-600 p-3">Requisition No. R00048</h2>
        <div className="p-3">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-50">
              <th className="border p-2">No</th>
              <th className="border p-2">Items</th>
              <th className="border p-2">Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border p-2">1</td>
              <td className="border p-2">Desert Cata Chamos</td>
              <td className="border p-2">5.00</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-50">
              <th className="border p-2">Timeline:</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border p-2">
              <label className="block">1. Created</label>
              <label className="block">By- জনাব আব্দুল ওয়াদুদ মিল্কী</label>
              <label className="block">Time - 27/03/2024 05:56 AM</label>
              <label className="block">Requisition Request added by awmilky@yahoo.com</label>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}

export default Preview;
