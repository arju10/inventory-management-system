import React from 'react';

export default function ProductIssue() {
    const handlePrint = (id) => {
        const printContents = document.getElementById(id).innerHTML;
        const originalContents = document.body.innerHTML;

        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
        window.location.reload();
    };

    return (
        <div className="space-y-8 p-4">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-6xl mx-auto">
                <div id="print-area">
                    <h1 className="text-xl text-black font-bold mb-4">Issue report by Product/Budget Code</h1>
                    <hr className="mb-4" />
                    <label htmlFor="GroupBy" className=" text-black font-semibold block mb-2 text-sm">Group By</label>
                    <select name="groupBy" id="groupBy" className="text-black block w-full p-2 border rounded mb-4 bg-gray-100">
                        <option value="productName">Product Name</option>
                        <option value="budgetCode">Budget Code</option>
                    </select>
                    <label htmlFor="FilterBy" className="block  text-black mb-2 text-sm font-semibold">Filter By</label>
                    <select name="filterBy" id="FilterBy" className=" text-black block w-full p-2 border rounded mb-4 bg-gray-100">
                        <option value="today">Today</option>
                        <option value="thisWeek">This Week</option>
                    </select>
                </div>
                <button onClick={(e)=>{handlePrint("print-area")}} className="bg-blue-500 w-24 text-white px-4 py-2 rounded">Print</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md max-w-6xl mx-auto">
                <div id="print-area2">
                    <h1 className="text-xl text-black font-bold mb-4">Issue report by Department/Designation/User</h1>
                    <hr className="mb-4" />
                    <label htmlFor="issueReportBy" className="text-black block mb-2 text-sm font-semibold">Issue Report By</label>
                    <select name="issueReportBy" id="issueReportBy" className="text-black block w-full p-2 border rounded mb-4 bg-gray-100">
                        <option value="all">All</option>
                        <option value="department">Department</option>
                        <option value="designation">Designation</option>
                        <option value="user">User</option>
                    </select>
                    <label htmlFor="FilterBy" className="block mb-2 text-black text-sm font-semibold">Filter By</label>
                    <select name="filterBy" id="FilterBy" className="block w-full text-black p-2 border rounded mb-4 bg-gray-100">
                        <option value="today">Today</option>
                        <option value="thisWeek">This Week</option>
                    </select>
                </div>
                <button onClick={(e)=>{handlePrint("print-area2")}} className="bg-blue-500 w-24 text-white px-4 py-2 rounded">Print</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-black max-w-6xl mx-auto">
                <div id="print-area3">
                    <h1 className="text-xl text-black font-bold mb-4 ">Requisition report by Department/Designation/User</h1>
                    <hr className="mb-4" />
                    <label htmlFor="requisitionStatus" className="text-black block mb-2 text-sm font-semibold">Requisition Status</label>
                    <select name="requisitionStatus" id="requisitionStatus" className="text-black block w-full p-2 border rounded mb-4  bg-gray-100">
                        <option value="pending">Pending</option>
                        <option value="authorized">Authorized</option>
                        <option value="approved">Approved</option>
                        <option value="rejected">Rejected</option>
                    </select>
                    <label htmlFor="requisitionReportBy" className="text-black block mb-2 text-sm font-semibold">Requisition Report By</label>
                    <select name="requisitionReportBy" id="requisitionReportBy" className="text-black block w-full p-2 border rounded mb-4 bg-gray-100">
                        <option value="all">All</option>
                        <option value="department">Department</option>
                        <option value="designation">Designation</option>
                        <option value="user">User</option>
                    </select>
                    <label htmlFor="FilterBy" className="blockvtext-black mb-2 text-sm font-semibold">Filter By</label>
                    <select name="filterBy" id="FilterBy" className="block text-black w-full p-2 border rounded mb-4 bg-gray-100">
                        <option value="today">Today</option>
                        <option value="thisWeek">This Week</option>
                    </select>
                </div>
                <button onClick={(e)=>{handlePrint("print-area3")}} className="bg-blue-500 w-24 text-white px-4 py-2 rounded">Print</button>
            </div>
        </div>
    );
}
