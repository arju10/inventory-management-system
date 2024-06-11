import {
  FaRegCalendarMinus,
  FaClipboardList,
  FaComments,
} from 'react-icons/fa';
import { AiFillDollarCircle } from 'react-icons/ai';
import './dashboard.css';
import { Flex } from 'antd';

const Dashboard = () => {
  return (
    <div className='grid'>
      <div className='box custom-element'>
        <div>
          <h2 className='notification-count'>8</h2>
          <FaRegCalendarMinus fontSize={20} color='grey' style={{}} />
          <h2 className='text'>Request</h2>
          <h2 className='text8'>Pending to Authorize Request</h2>
          <button>View Request</button>
        </div>
      </div>

      <div className='box custom-element'>
        <div>
          <h2 className='notification-count'>8</h2>
          <AiFillDollarCircle fontSize={28} color='grey' />
          <h2 className='text'>Request</h2>
          <h2 className='text8'>Pending to Authorize Request</h2>
          <button>View Request</button>
        </div>
      </div>

      <div className='box custom-element'>
        <div>
          <h2 className='notification-count'>8</h2>
          <FaClipboardList fontSize={28} color='grey' />
          <h2 className='text'>Request</h2>
          <h2 className='text8'>Pending to Authorize Request</h2>
          <button>View Request</button>
        </div>
      </div>

      <div className='box custom-element'>
        <div>
          <h2 className='notification-count'>8</h2>
          <FaComments fontSize={28} color='grey' />
          <h2 className='text'>Request</h2>
          <h2 className='text8'>Pending to Authorize Request</h2>
          <button>View Request</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
