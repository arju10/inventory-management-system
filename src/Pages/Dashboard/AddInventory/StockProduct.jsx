import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "daisyui";


const StockProduct = () => {
    const [inventories, setInventories] = useState([]);
    const [selectedInventories, setSelectedInventories] = useState([]);

    useEffect(() => {
        const dummyData = [
          {
            id: "Inv.101",
            SI:'1',
            productName:"A4 Paper",
            packet: 5,
            unit: 10,
            totalQuantity: 50,
            
          },
          {
            id: "Inv.102",
            SI:'2',
            productName:"A4 Paper",
            packet: 5,
            unit: 10,
            totalQuantity: 50,
          },
          {
            id: "Inv.103",
            SI:'3',
            productName:"A4 Paper",
            packet: 5,
            unit: 10,
            totalQuantity: 50,
          },
          {
            id: "Inv.104",
            SI:'4',
            productName:"A4 Paper",
            packet: 5,
            unit: 10,
            totalQuantity: 50,
          },
          {
            id: "Inv.105",
            SI:'5',
            productName:"A4 Paper",
            packet: 5,
            unit: 10,
            totalQuantity: 50,
          },
          
        ];
        setInventories(dummyData);
      }, []);
    
      // const handleSelectAll = (e) => {
      //   if (e.target.checked) {
      //     const allInventoryIds = inventories.map((inv) => inv.id);
      //     setSelectedInventories(allInventoryIds);
      //   } else {
      //     setSelectedInventories([]);
      //   }
      // };
    
      const handleSelectInventory = (id) => {
        if (selectedInventories.includes(id)) {
          setSelectedInventories(selectedInventories.filter((invId) => invId !== id));
        } else {
          setSelectedInventories([...selectedInventories, id]);
        }
      };
    
      const handleDeleteInventory = (id) => {
        if (window.confirm("Are you sure you want to delete this inventory?")) {
          setInventories(inventories.filter((inventory) => inventory.id !== id));
          setSelectedInventories(selectedInventories.filter((invId) => invId !== id));
          toast("Inventory deleted successfully", { type: "success" });
        }
      };
    
      // const handleDeleteAll = () => {
      //   if (
      //     window.confirm("Are you sure you want to delete all selected inventories?")
      //   ) {
      //     setInventories(
      //       inventories.filter((inventory) => !selectedInventories.includes(inventory.id))
      //     );
      //     setSelectedInventories([]);
      //     toast("Selected inventories deleted successfully", { type: "success" });
      //   }
      // };
  return (
<>
      <div className="flex justify-between">

        </div>


      <div className="overflow-x-auto">
        <table className="table border rounded-lg bg-white table-sm">
          <thead>
            <tr className="border bg-custom-dark text-base text-white font-thin">
            
              <th className="border  ">SI</th>
              <th >
                <div className="flex justify-between">
                  <div>Product Name</div>
                  <div>
                
                  </div>
                </div>
              </th>
              <th className="border  ">
                <div className="flex justify-between ">
                  <div >Packet</div>
                  <div>
                
                  </div>
                </div>
              </th>
              <th className="border  ">Unit</th>
              <th className="border ">Total Quantity</th>
              
              <th className="border  ">Action</th>
            </tr>
          </thead>
          <tbody>
            {inventories.map((inventory) => (
              <tr
                key={inventory.id}
                className={`hover:bg-neutral-300 active:bg-cyan-300 focus:outline-none focus:ring focus:ring-neutral-300 ${selectedInventories.includes(inventory.id) ? "bg-cyan-300" : ""
                  }`}
                  
              >
            
                <td className="border text-center " onChange={handleSelectInventory}>{inventory.SI}</td>
                <td className="border ">{inventory.productName}</td>
                <td className="border text-center ">{inventory.packet}</td>
                <td className="border text-center ">{inventory.unit}</td>
                <td className="border text-center ">{inventory.totalQuantity}</td>
                {/* <td className="border  ">{inventory.created}</td>
                <td className="border ">{inventory.lastUpdate}</td> */}
                
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
                    <div className="flex-none w-5 pl-3">
                      <Link to={`/print-bar-code/${inventory.id}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path d="M24 32C10.7 32 0 42.7 0 56V456c0 13.3 10.7 24 24 24H40c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H24zm88 0c-8.8 0-16 7.2-16 16V464c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16zm72 0c-13.3 0-24 10.7-24 24V456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H184zm96 0c-13.3 0-24 10.7-24 24V456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H280zM448 56V456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H472c-13.3 0-24 10.7-24 24zm-64-8V464c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16s-16 7.2-16 16z"/></svg>
                      </Link>
                      {/* <Link to="/edit-inventory">
                      <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path d="M24 32C10.7 32 0 42.7 0 56V456c0 13.3 10.7 24 24 24H40c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H24zm88 0c-8.8 0-16 7.2-16 16V464c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16zm72 0c-13.3 0-24 10.7-24 24V456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H184zm96 0c-13.3 0-24 10.7-24 24V456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H280zM448 56V456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H472c-13.3 0-24 10.7-24 24zm-64-8V464c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16s-16 7.2-16 16z"/></svg>
                      </Link> */}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </>
  )
}

export default StockProduct
