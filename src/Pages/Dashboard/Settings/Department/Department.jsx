import { useState} from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { toast } from "daisyui";
import { Link } from "react-router-dom";

function Department() {
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [products, setProducts] = useState([]);
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
    {
      date: "13-05-2023",
      requisition: "R00029",
      requestBy: "user 6, Executive",
      status: "Pending",
      note: "",
    },
    {
      date: "13-05-2023",
      requisition: "R00012",
      requestBy: "Test, Assistant Programmer",
      status: "Pending",
      note: "Test",
    },
    {
      date: "13-05-2023",
      requisition: "R00006",
      requestBy: "MR. Jr. Executive, Jr, Executive",
      status: "Pending",
      note: "",
    },
    {
      date: "15-02-2024",
      requisition: "R00035",
      requestBy: "user 6, Executive",
      status: "Pending",
      note: "",
    },
    {
      date: "13-05-2023",
      requisition: "R00029",
      requestBy: "user 6, Executive",
      status: "Pending",
      note: "",
    },
    {
      date: "13-05-2023",
      requisition: "R00012",
      requestBy: "Test, Assistant Programmer",
      status: "Pending",
      note: "Test",
    },
    {
      date: "13-05-2023",
      requisition: "R00006",
      requestBy: "MR. Jr. Executive, Jr, Executive",
      status: "Pending",
      note: "",
    },
    {
      date: "15-02-2024",
      requisition: "R00035",
      requestBy: "user 6, Executive",
      status: "Pending",
      note: "",
    },
    {
      date: "13-05-2023",
      requisition: "R00029",
      requestBy: "user 6, Executive",
      status: "Pending",
      note: "",
    },
    {
      date: "13-05-2023",
      requisition: "R00012",
      requestBy: "Test, Assistant Programmer",
      status: "Pending",
      note: "Test",
    },
    {
      date: "13-05-2023",
      requisition: "R00006",
      requestBy: "MR. Jr. Executive, Jr, Executive",
      status: "Pending",
      note: "",
    },
    {
      date: "15-02-2024",
      requisition: "R00035",
      requestBy: "user 6, Executive",
      status: "Pending",
      note: "",
    },
    {
      date: "13-05-2023",
      requisition: "R00029",
      requestBy: "user 6, Executive",
      status: "Pending",
      note: "",
    },
    {
      date: "13-05-2023",
      requisition: "R00012",
      requestBy: "Test, Assistant Programmer",
      status: "Pending",
      note: "Test",
    },
    {
      date: "13-05-2023",
      requisition: "R00006",
      requestBy: "MR. Jr. Executive, Jr, Executive",
      status: "Pending",
      note: "",
    },
    {
      date: "15-02-2024",
      requisition: "R00035",
      requestBy: "user 6, Executive",
      status: "Pending",
      note: "",
    },
    {
      date: "13-05-2023",
      requisition: "R00029",
      requestBy: "user 6, Executive",
      status: "Pending",
      note: "",
    },
    {
      date: "13-05-2023",
      requisition: "R00012",
      requestBy: "Test, Assistant Programmer",
      status: "Pending",
      note: "Test",
    },
    {
      date: "13-05-2023",
      requisition: "R00006",
      requestBy: "MR. Jr. Executive, Jr, Executive",
      status: "Pending",
      note: "",
    },
    {
      date: "15-02-2024",
      requisition: "R00035",
      requestBy: "user 6, Executive",
      status: "Pending",
      note: "",
    },
    {
      date: "13-05-2023",
      requisition: "R00029",
      requestBy: "user 6, Executive",
      status: "Pending",
      note: "",
    },
    {
      date: "13-05-2023",
      requisition: "R00012",
      requestBy: "Test, Assistant Programmer",
      status: "Pending",
      note: "Test",
    },
    {
      date: "13-05-2023",
      requisition: "R00006",
      requestBy: "MR. Jr. Executive, Jr, Executive",
      status: "Pending",
      note: "",
    },
  ];

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/addDepartment");
  };

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = dummyData.slice(firstIndex, lastIndex);
  const npage = Math.ceil(dummyData.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allProductIds = records.map((item,index) => index);
      setSelectedProducts(allProductIds);
    } else {
      setSelectedProducts([]);
    }
  };

  const handleSelectProduct = (id) => {
    if (selectedProducts.includes(id)) {
      setSelectedProducts(selectedProducts.filter((proId) => proId !== id));
    } else {
      setSelectedProducts([...selectedProducts, id]);
    }
  };

  const handleDeleteProduct = (index) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      records.splice(index, 1);
      setSelectedProducts(selectedProducts.filter((proId) => proId !== index));
      toast("product deleted successfully", { type: "success" });
    }
  };

  const handleDeleteAll = () => {
    if (
      window.confirm("Are you sure you want to delete all selected products?")
    ) {
      setProducts(
        products.filter((product) => !selectedProducts.includes(product.id))
      );
      setSelectedProducts([]);
      toast("Selected products deleted successfully", { type: "success" });
    }
  };

  return (
    <div className=" sm:p-6 h-screen">
      <div className="flex flex-col justify-btween items-center sm:flex-row sm:justify-between sm:items-center mb-4">
        <div className="flex flex-col justify-btween items-center sm:justify-between sm:items-start">
          <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-custom-dart">
            Employee Department
          </h2>
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-start">
        <div className="w-full mb-4">
          <div className="flex flex-wrap justify-center sm:justify-start">
            <button
              onClick={handleButtonClick}
              className="bg-custom-blue text-white hover:bg-blue-600 px-2 sm:px-4 py-1 sm:py-2 rounded m-1"
            >
              + Add New
            </button>
            {selectedProducts.length > 1 && (
              <button
                className="bg-red-500 text-white hover:bg-red-600 px-2 sm:px-4 py-1 sm:py-2 rounded m-1"
                onClick={handleDeleteAll}
              >
                Delete All
              </button>
            )}
          </div>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="table border rounded-lg bg-white mb-3">
            <thead>
              <tr className="border bg-custom-dark text-base text-white font-thin">
                <th>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={selectedProducts.length === records.length}
                      onChange={handleSelectAll}
                    />
                  </label>
                </th>
                <th>
                  <div className="flex justify-between">
                    <div>Name</div>
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
                <th className="border  ">Description</th>
                <th className="border">Show Order</th>
                <th className="border">Is System</th>
                <th className="border  ">
                  <div className="flex justify-between  ">
                    <div>Active</div>
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
              </tr>
            </thead>
            <tbody>
              {records.length > 0 ? (
                records.map((item, index) => (
                  <tr
                    className={`border-b ${
                      selectedProducts.includes(index)
                        ? "bg-custom-blue text-white"
                        : "hover:bg-gray-200"
                    }`}
                    key={index}
                    onClick={() => handleRowClick(index)}
                  >
                    <th>
                      <label>
                        <input
                          type="checkbox"
                          className="checkbox"
                          checked={selectedProducts.includes(index)}
                          onChange={() => handleSelectProduct(index)}
                        />
                      </label>
                    </th>
                    <td className="px-2 py-1 sm:px-4 sm:py-4">{item.date}</td>
                    <td className="px-2 py-1 sm:px-4 sm:py-4">
                      {item.requisition}
                    </td>
                    <td className="px-2 py-1 sm:px-4 sm:py-4">
                      {item.requestBy}
                    </td>
                    <td className="px-2 py-1 sm:px-4 sm:py-4">{item.status}</td>
                    <td className="px-2 py-1 sm:px-4 sm:py-4">
                      <div className="flex">
                        <button onClick={() => handleDeleteProduct(index)}>
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
                          <Link to={`/editDepartment`}>
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
                  Showing <span className="font-medium">1</span> to{" "}
                  <span className="font-medium">10</span> of{" "}
                  <span className="font-medium">97</span> results
                </p>
              </div>
              <div>
                <nav
                  className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                  aria-label="Pagination"
                >
                  <a
                    href="#"
                    className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    onClick={prevPage}
                    aria-label="Previous"
                  >
                    <span className="sr-only">Previous</span>
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                  </a>
                  {numbers.map((n, i) => (
                    <a
                      key={i}
                      href="#"
                      className={`relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${
                        currentPage === n
                          ? "!bg-custom-dark text-white hover:text-white"
                          : ""
                      }`}
                      onClick={() => changeCpage(n)}
                    >
                      {n}
                    </a>
                  ))}
                  <a
                    href="#"
                    className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    onClick={nextPage}
                    aria-label="Next"
                  >
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function prevPage() {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  }

  function changeCpage(id) {
    console.log("Changing page to:", id);
    setCurrentPage(id);
  }
}

export default Department;
