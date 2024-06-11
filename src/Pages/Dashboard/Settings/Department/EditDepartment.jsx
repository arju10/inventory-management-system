
import { Link } from 'react-router-dom';
import { FaSave} from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const EditDepartment = () => {

    return (
        <><div >

            <Link to={`/department`}>
                <button className="btn bg-gray-300 text-sm btn-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
                    Back
                </button>
            </Link>

        </div>
            <div>

                <h1 className="text-xl font-semibold mb-5">Create Department</h1>
            </div>
            <div className='border-2 pt-5 pb-5 ps-5 pe-5 font-semibold'>
                {/* Input Fields */}
                <div className="flex gap-5">
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Department Name<span className="text-red-500">*</span></span>
                        </div>
                        <input type="text" placeholder="Department Name" className="input input-bordered w-full max-w-xs" required />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Description<span className="text-red-500">*</span></span>
                        </div>
                        <input type="text" placeholder="Description" className="input input-bordered w-full max-w-xs" required />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Show Order<span className="text-red-500">*</span></span>
                        </div>
                        <input type="number" placeholder="Show Order" className="input input-bordered w-full max-w-xs" required />
                    </label>
                </div>
                {/* Finish input Fields */}
            </div>
            {/* Buttons */}
            <div className='mt-5'>
                <Link to="/productKeys">
                    <button className="btn bg-custom-blue text-base text-white hover:bg-blue-600">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg> */}
                        <FaSave className='text-white'/>Save
                    </button>
                </Link>
                <button className="btn btn-error ms-5 text-base text-white">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" height="20" width="15" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg> */}
                    <FontAwesomeIcon icon={faXmark} className='text-white' />Cancel
                </button>
                {/* finish Buttons */}
            </div>
        </>
    );
};

export default EditDepartment;
