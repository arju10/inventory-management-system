import React from 'react';

export default function Employee() {
    const handlePrint = (id) => {
        const printContents = document.getElementById(id).innerHTML;
        const originalContents = document.body.innerHTML;

        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
        window.location.reload();
    };

    return (
        <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-6xl mx-auto">
                <div id="print-area">
                    <h1 className="text-2xl text-black font-bold mb-4">Employee Report</h1>
                    <hr className="mb-4" />
                    <label htmlFor="Department" className="block mb-2 text-gray-700 font-semibold text-black">Department*</label>
                    <select name="Department" id="Department" className="block w-full p-2 border rounded mb-4 bg-gray-100 text-black">
                        <option value="management">Management</option>
                        <option value="midmanagement">Mid Management</option>
                        <option value="it">IT</option>
                        <option value="store">Store</option>
                    </select>
                    <label htmlFor="Designation" className="block mb-2 text-gray-700 font-semibold text-black">Designation*</label>
                    <select name="Designation" id="Designation" className="block w-full p-2 border rounded mb-4 bg-gray-100 text-black">
                        <option value="Chairman">Chairman</option>
                        <option value="JointSecretary">Joint Secretary</option>
                        <option value="DeputySecretary">Deputy Secretary</option>
                        <option value="JrExecutive">Jr. Executive</option>
                    </select>
                    <label htmlFor="Religion" className="block mb-2 text-gray-700 font-semibold text-black">Religion*</label>
                    <select name="Religion" id="Religion" className="block w-full p-2 border rounded mb-4 bg-gray-100 text-black">
                        <option value="Islam">Islam</option>
                        <option value="Hindu">Hindu</option>
                        <option value="Christian">Christian</option>
                        <option value="Buddha">Buddha</option>
                    </select>
                    <label htmlFor="Gender" className="block mb-2 text-gray-700 font-semibold text-black">Gender*</label>
                    <select name="Gender" id="Gender" className="block w-full p-2 border rounded mb-4 bg-gray-100 text-black">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <label htmlFor="BloodGroup" className="block mb-2 text-gray-700 font-semibold text-black">Blood Group*</label>
                    <select name="BloodGroup" id="BloodGroup" className="block w-full p-2 border rounded mb-4 bg-gray-100 text-black">
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                    </select>
                    <label htmlFor="ReportType" className="block mb-2 text-gray-700 font-semibold text-black">Report Type</label>
                    <select name="ReportType" id="ReportType" className="block w-full p-2 border rounded mb-4 bg-gray-100 text-black">
                        <option value="Short">Short</option>
                        <option value="Details">Details</option>                        
                    </select>
                </div>
                <button onClick={(e)=>{handlePrint("print-area")}} className="bg-blue-500 text-white  w-24 px-4 py-2 rounded">Print</button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md max-w-6xl mx-auto">
                <div id="print-area2">
                    <h1 className="text-2xl font-bold text-black mb-4">User Report</h1>
                    <hr className="mb-4" />
                    <label htmlFor="Department" className="block mb-2 text-gray-700 font-semibold text-black">Department*</label>
                    <select name="Department" id="Department" className="block w-full p-2 border rounded mb-4 text-black bg-gray-100">
                        <option value="management">Management</option>
                        <option value="midmanagement">Mid Management</option>
                        <option value="it">IT</option>
                        <option value="store">Store</option>
                    </select>
                    <label htmlFor="Designation" className="block mb-2 text-gray-700 font-semibold text-black">Designation*</label>
                    <select name="Designation" id="Designation" className="block w-full p-2 border rounded mb-4 text-black bg-gray-100">
                        <option value="Chairman">Chairman</option>
                        <option value="JointSecretary">Joint Secretary</option>
                        <option value="DeputySecretary">Deputy Secretary</option>
                        <option value="JrExecutive">Jr. Executive</option>
                    </select>
                    <label htmlFor="UserRole" className="block mb-2 text-gray-700 font-semibold text-black">User Role</label>
                    <select name="UserRole" id="UserRole" className="block w-full p-2 border rounded mb-4 text-black bg-gray-100">
                        <option value="AllRole">All Role</option>
                        <option value="Role_inventory">Role Inventory</option>
                        <option value="Role_Store">Role Store</option>
                        <option value="Role_approve">Role Approve</option>
                    </select>
                    <label htmlFor="RoleConditionType" className="block mb-2 text-gray-700 font-semibold text-black">Role Condition Type</label>
                    <select name="RoleConditionType" id="RoleConditionType" className="block w-full p-2 border rounded mb-4 text-black bg-gray-100">
                        <option value="And">AND</option>
                        <option value="Or">OR</option>
                    </select>
                </div>
                <button onClick={(e)=>{handlePrint("print-area2")}} className="bg-blue-500 w-24 text-white px-4 py-2 rounded ">Print</button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md max-w-6xl mx-auto">
                <div id="print-area3">
                    <h1 className="text-2xl font-bold mb-4 text-black">Department/Designation Report</h1>
                    <hr className="mb-4" />
                    <label htmlFor="ReportType" className="block mb-2 text-gray-700 font-semibold text-black text-black">Report Type</label>
                    <select name="ReportType" id="ReportType" className="block w-full p-2 border rounded mb-4 bg-gray-100 text-black">
                        <option value="Department">Department</option>
                        <option value="Designation">Designation</option>
                    </select>
                </div>
                <button onClick={(e)=>{handlePrint("print-area3")}} className="bg-blue-500 w-24 text-white px-4 py-2 rounded">Print</button>
            </div>
        </div>
    )
}
