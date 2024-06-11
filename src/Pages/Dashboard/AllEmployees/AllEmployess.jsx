import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import EmployeePagination from "./EmployeePagination";
import { toast } from "daisyui";

const AllEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployees, setSelectedEmployees] = useState([]);

  useEffect(() => {
    const dummyData = [
      {
        id: "E101",
        name: "Mahbub Rahman",
        mobile: "01749783301",
        designation: "Senior Manager",
        email: "mahbub@gmail.com",
        order: 5,
        department: "Human Resource",
        active: "Yes",
      },
      {
        id: "E102",
        name: "Atikur Rahman",
        mobile: "01749783301",
        designation: "Senior Executive",
        email: "atikk@gmail.com",
        order: 4,
        department: "ICT",
        active: "Yes",
      },
      {
        id: "E103",
        name: "Rifat Mollah",
        mobile: "01749783301",
        designation: "Principal Engineer",
        email: "rifat@gmail.com",
        order: 5,
        department: "Engineering",
        active: "No",
      },
      {
        id: "E104",
        name: "Emon Hossain",
        mobile: "01749783301",
        designation: "Department Head",
        email: "emon@gmail.com",
        order: 5,
        department: "ICT",
        active: "Yes",
      },
      {
        id: "E105",
        name: "Jibon Mollah",
        mobile: "01749783301",
        designation: "Department Head",
        email: "jibon@gmail.com",
        order: 5,
        department: "ICT",
        active: "Yes",
      },
    ];
    setEmployees(dummyData);
  }, []);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allEmployeeIds = employees.map((emp) => emp.id);
      setSelectedEmployees(allEmployeeIds);
    } else {
      setSelectedEmployees([]);
    }
  };

  const handleSelectEmployee = (id) => {
    if (selectedEmployees.includes(id)) {
      setSelectedEmployees(selectedEmployees.filter((empId) => empId !== id));
    } else {
      setSelectedEmployees([...selectedEmployees, id]);
    }
  };

  const handleDeleteEmployee = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      setEmployees(employees.filter((employee) => employee.id !== id));
      setSelectedEmployees(selectedEmployees.filter((empId) => empId !== id));
      toast("Employee deleted successfully", { type: "success" });
    }
  };

  const handleDeleteAll = () => {
    if (
      window.confirm("Are you sure you want to delete all selected employees?")
    ) {
      setEmployees(
        employees.filter((employee) => !selectedEmployees.includes(employee.id))
      );
      setSelectedEmployees([]);
      toast("Selected employees deleted successfully", { type: "success" });
    }
  };

  return (
    <>
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl mb-5">All Employees List</h1>
        </div>
        <div>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search by Employee ID, Name, Mobile No, Email"
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
          <Link to="/add-employee">
            <button className="btn btn-sm bg-green-500 text-white mb-3 hover:bg-green-600">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                height="14"
                width="12.25"
                viewBox="0 0 448 512"
              >
                <path
                  fill="#f7f7f7"
                  d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                />
              </svg> */}
              <svg xmlns="http://www.w3.org/2000/svg" height="14" width="17.5" viewBox="0 0 640 512"><path fill="#f7f7f8" d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" /></svg>
              Add New Employee
            </button>
          </Link>
          {selectedEmployees.length > 1 && (
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
            <tr className="border bg-custom-dark text-base text-white font-thin">
              <th>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={selectedEmployees.length === employees.length}
                    onChange={handleSelectAll}
                  />
                </label>
              </th>
              <th >
                <div className="flex justify-between">
                  <div>Employee ID</div>
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
                  <div >Name</div>
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
              <th className="border  ">Mobile No</th>
              <th className="borde  r">Designation</th>
              <th className="border ">Email</th>
              <th className="border  ">
                
                <div className="flex justify-between  ">
                  <div>Order</div>
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
              <th className="border  ">Department</th>
              <th className="border  ">
                
                <div className="flex justify-between  ">
                  <div >Active</div>
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
              <th >Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr
                key={employee.id}
                className={`hover:bg-neutral-300 active:bg-cyan-300 focus:outline-none focus:ring focus:ring-neutral-300 ${selectedEmployees.includes(employee.id) ? "bg-cyan-300" : ""
                  }`}
              >
                <th>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={selectedEmployees.includes(employee.id)}
                      onChange={() => handleSelectEmployee(employee.id)}
                    />
                  </label>
                </th>
                <td className="border text-center">{employee.id}</td>
                <td className="border ">{employee.name}</td>
                <td className="border ">{employee.mobile}</td>
                <td className="border ">{employee.designation}</td>
                <td className="border ">{employee.email}</td>
                <td className="border text-center  ">{employee.order}</td>
                <td className="border ">{employee.department}</td>
                <td className="border  text-center ">{employee.active}</td>
                <td className="border">
                  <div className="flex">
                    <button onClick={() => handleDeleteEmployee(employee.id)}>
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
                    <div className="flex-none w-5 pl-3">
                      <Link to={`/edit-employee/${employee.id}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          width="18.5"
                          viewBox="0 0 512 512"
                        >
                          <path d="M362.7 19.3c25-25 65.5-25 90.5 0l39.5 39.5c25 25 25 65.5 0 90.5L188.5 453.5c-9 9-20.2 15.7-32.5 19.2l-109 31.1c-9.8 2.8-20.3 .2-27.5-7s-9.8-17.7-7-27.5l31.1-109c3.5-12.3 10.2-23.5 19.2-32.5L362.7 19.3zM352 109.3L402.7 160 464 98.7 413.3 48 352 109.3zM369.9 180.1L331.9 142.1 91.4 382.6c-3.8 3.8-6.5 8.5-7.9 13.7L52.3 479.7l83.4-31.1c5.2-1.4 9.9-4.1 13.7-7.9l240.5-240.5z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="my-5">
        <EmployeePagination />
      </div>
    </>
  );
};

export default AllEmployees;
