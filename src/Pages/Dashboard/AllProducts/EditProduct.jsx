import  { useState } from 'react';
import { Link } from 'react-router-dom';

const EditSingleProduct = () => {
  const [isManualCode, setIsManualCode] = useState(false);


  const handleCheckboxChange = () => {
    setIsManualCode(!isManualCode);
  };


  const handleShowOrderInput = (event) => {
    const value = event.target.value;
    if (value < 0) {
      event.target.value = 0;
    }
  };
  return (

    <>
    <div >
              
              <Link to={`/allProducts`}>
              <button className="btn bg-gray-300 text-sm btn-xs">
                     <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                        Back
                      </button>
              </Link>
                     
                  </div>
      <div>
        <h1 className="text-xl font-semibold mb-5">Add New Product</h1>
      </div>
      <div className='border-2 pt-5 pb-5 ps-5 pe-5 font-semibold'>
        {/* Input Fields */}
        <div className="flex gap-5">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Name<span className="text-red-500">*</span></span>
            </div>
            <input type="text" placeholder="Product Full Name" className="input input-bordered w-full max-w-xs" required />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Mobile No<span className="text-red-500">*</span></span>
            </div>
            <input type="mobile" placeholder="01XXXXXXXXX" className="input input-bordered w-full max-w-xs" required />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Id/Code<span className="text-red-500">*</span></span>
            </div>
            <input
              type="text"
              placeholder="Product Id/Code"
              className="input input-bordered w-full max-w-xs"
              required
              disabled={!isManualCode}
            />
          </label>

          <label className="label cursor-pointer">
            <input
              type="checkbox"
              className="checkbox"
              checked={isManualCode}
              onChange={handleCheckboxChange}
            />&nbsp;
            <span className="label-text">Manual Code<span className="text-red-500">*</span></span>
          </label>
        </div>

        <div className="flex gap-5 mt-5">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email<span className="text-red-500">*</span></span>
            </div>
            <input type="email" placeholder="Valid Email Address" className="input input-bordered w-full max-w-xs" required />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Designation<span className="text-red-500">*</span></span>
            </div>
            <select className="select select-bordered w-full max-w-xs" required>
              <option disabled selected>Select Designation</option>
              <option>Chairman</option>
              <option>Manager</option>
              <option>Senior Manager</option>
              <option>Junior Manager</option>
            </select>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Department<span className="text-red-500">*</span></span>
            </div>
            <select className="select select-bordered w-full max-w-xs" required>
              <option disabled selected>Select Department</option>
              <option>Finance</option>
              <option>ICT</option>
              <option>Human Resource</option>
              <option>Engineering</option>
            </select>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Show Order<span className="text-red-500">*</span></span>
            </div>
            <input
              type="number"
              placeholder="Show Order"
              className="input input-bordered w-full max-w-xs"
              required
              onInput={handleShowOrderInput}
              min="0"
            />
          </label>
        </div>

        {/* Finish input Fields */}
      </div>
            {/* Buttons */}
            <div className='mt-5 btn-sm'>
<Link to="/allProducts">
<button className="btn bg-emerald-300 text-base btn-sm ">
          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
          Update</button>
</Link>
        <button className="btn bg-gray-300 text-base ms-5 btn-sm">
        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path d="M432 64H208c-8.8 0-16 7.2-16 16V96H128V80c0-44.2 35.8-80 80-80H432c44.2 0 80 35.8 80 80V304c0 44.2-35.8 80-80 80H416V320h16c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16zM0 192c0-35.3 28.7-64 64-64H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192zm64 32c0 17.7 14.3 32 32 32H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32 14.3-32 32z"/></svg>
          Reset</button>
          <Link to={`/allProducts`}>
        <button className="btn btn-error ms-5 text-base btn-sm">
          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="15" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
          Cancel</button>
          </Link>
          {/* finish Buttons */}
     </div>
    </>
  )
}

export default EditSingleProduct
