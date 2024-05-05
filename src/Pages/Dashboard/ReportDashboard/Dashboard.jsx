import { FaRegCalendarMinus, FaClipboardList, FaComments } from "react-icons/fa"
import { AiFillDollarCircle } from "react-icons/ai";
import './dashboard.css'
import { Flex } from "antd";

const Dashboard = () => {
  return (
    <div className='grid'>
        <div className='box custom-element'>
            <div>
                <h2 className='notification-count'>8</h2>
                <FaRegCalendarMinus fontSize={20} color="grey" style={{position:"absolute",top: '35px', right: '60px'}}/>
                <h2 className='text'>Request</h2>
                <h2 className='text8'>Pending to Authorize Request</h2>
                <button></button>
            </div>
            
        </div>

        <div className='box custom-element'>
            <div>
                <h2 className='text1'>EARNING (ANNUAL)</h2>
                <h1 className='textrevenue'>$215,000</h1>
            </div>
            <AiFillDollarCircle fontSize={28} color="grey" />
        </div>

        <div className='box custom-element'>
            <div>
                <h2 className='text2'>TASKS</h2>
                <h1 className='textrevenue'>50%</h1>
            </div>
            <FaClipboardList fontSize={28} color="grey" />
        </div>

        <div className='box custom-element'>
            <div>
                <h2 className='text3'>PENDING REQUESTS</h2>
                <h1 className='textrevenue'>18</h1>
            </div>
            <FaComments fontSize={28} color="grey" />
        </div>

    </div>
  )
}

export default Dashboard
