import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import './dashboard.css';
import { FaEllipsisV } from 'react-icons/fa';
import PieComponent from './PieComponent';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Charts = () => {
  return (
    <div className='charts'>
      <div className='charts-item'>
        <div className='custom-header '>
          <h2 className='text6'>Earning Overview</h2>
          <FaEllipsisV color='gray' className='cursor-pointer' />
        </div>
        <div>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type='monotone'
              dataKey='pv'
              stroke='#8884d8'
              activeDot={{ r: 8 }}
            />
            <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
          </LineChart>
        </div>
      </div>
      <div className='flex-item'>
        <div className='pie-box'>
          <h2 className='text7'>Revenue Resources</h2>
          <FaEllipsisV color='gray' className='pie-item' />
        </div>
        <div className='pieComponent'>
          <PieComponent />
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Charts;
