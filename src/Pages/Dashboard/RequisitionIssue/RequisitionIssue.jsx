import RequisitionIssuePagination from './RequisitionIssuePagination';

const RequisitionIssue = () => {
  return (
    <>
      <div className='flex justify-between'>
        <div className='flex flex-col justify-btween items-center sm:justify-between sm:items-start mb-4'>
          <h2 className='text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-blue-600'>
            Requisition Request List
          </h2>
          <p className='text-center text-xs sm:text-start sm:text-sm md:text-base lg:text-base text-gray-600 '>
            To multiple item select, use ctrl or shift key while selecting
          </p>
        </div>
        <div>
          <label className='input input-bordered flex items-center gap-2'>
            <input
              type='text'
              className='grow'
              placeholder='Search by Requisition Id'
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='w-8 h-4 opacity-70'
            >
              <path
                fillRule='evenodd'
                d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
                clipRule='evenodd'
              />
            </svg>
          </label>
        </div>
      </div>
      <div className='flex justify-between'>
        <div>
          <button className='btn btn-sm bg-green-500 text-white mb-3 hover:bg-green-600'>
            {' '}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='14'
              width='15.75'
              viewBox='0 0 576 512'
            >
              <path
                fill='#fcfcfc'
                d='M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z'
              />
            </svg>
            Preview
          </button>
        </div>
        <div></div>
      </div>
      <div className='overflow-x-auto'>
        {/* to reduce table size add table-xl */}
        <table className='table border rounded-lg bg-white '>
          {/* head */}
          <thead>
            <tr className='border bg-custom-dark text-base text-white font-thin'>
              <th>
                <div className='flex justify-between'>
                  <div>Date</div>
                  <div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      height='20'
                      width='12.5'
                      viewBox='0 0 320 512'
                    >
                      <path d='M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z' />
                    </svg>
                  </div>
                </div>
              </th>
              <th className=' border'>Requisition</th>
              <th className=' border'>Requested By</th>
              <th className=' border'>Requested Status</th>
              <th className=' border'>Note</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className='hover:bg-neutral-300 active:bg-neutral-700 focus:outline-none focus:ring focus:ring-neutral-300'>
              <td className=' border '>27-03-2024</td>
              <td className='border '>R00048</td>
              <td className=' border'>Mr. Ali</td>
              <td className=' border'>Accepted</td>
              <td className=' border'></td>
            </tr>
            {/* row 2 */}
            <tr className='hover:bg-neutral-300 active:bg-neutral-700 focus:outline-none focus:ring focus:ring-neutral-300'>
              <td className=' border '>27-03-2024</td>
              <td className='border '>R00048</td>
              <td className=' border'>Mr. Ali</td>
              <td className=' border'>Pending</td>
              <td className=' border'>
                The product is damaged by electric shock
              </td>
            </tr>
            {/* row 3 */}
            <tr className='hover:bg-neutral-300 active:bg-neutral-700 focus:outline-none focus:ring focus:ring-neutral-300'>
              <td className=' border '>27-03-2024</td>
              <td className='border '>R00048</td>
              <td className=' border'>Mr. Ali</td>
              <td className=' border'>Pending</td>
              <td className=' border'>
                The product is damaged by electric shock
              </td>
            </tr>
            {/* row 4 */}
            <tr className='hover:bg-neutral-300 active:bg-neutral-700 focus:outline-none focus:ring focus:ring-neutral-300'>
              <td className=' border '>27-03-2024</td>
              <td className='border '>R00048</td>
              <td className=' border'>Mr. Ali</td>
              <td className=' border'>Pending</td>
              <td className=' border'>
                The product is damaged by electric shock
              </td>
            </tr>
          </tbody>
          {/* foot */}
          <tfoot></tfoot>
        </table>
        <div className='divider' />
        {/* Pagination */}
        <RequisitionIssuePagination />
      </div>
    </>
  );
};

export default RequisitionIssue;
