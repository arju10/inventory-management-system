import './dashboard.css'; // Import CSS file for styling

const Upperpage = () => {
  // Sample data
  const requisition = 'Your Requisition';
  const pendingRequests = 10;
  const authorizedRequests = 20;
  const approvedRequests = 15;
  const issuedRequests = 5;

  return (
    <div className='container1' style={{ marginTop: '20px' }}>
      <div className='requisition'>{requisition}</div>
      <div className='status' style={{ marginTop: '30px' }}>
        <div className='status-item pending'>
          Pending Requests: {pendingRequests}
        </div>
        <div className='status-item authorized'>
          Authorized Requests: {authorizedRequests}
        </div>
        <div className='status-item approved'>
          Approved Requests: {approvedRequests}
        </div>
        <div className='status-item issued'>
          Issued Requests: {issuedRequests}
        </div>
      </div>
    </div>
  );
};

export default Upperpage;
