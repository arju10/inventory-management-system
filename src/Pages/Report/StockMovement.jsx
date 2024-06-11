import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';
import SyncAltIcon from '@mui/icons-material/SyncAlt';

const StockMovement = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Stock In',
        data: [120, 150, 100, 90],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Stock Out',
        data: [80, 100, 70, 60],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const pieData = {
    labels: ['Stock In', 'Stock Out'],
    datasets: [
      {
        data: [460, 310],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  };

  return (
    <Card className="m-4 p-4 border rounded-lg shadow-lg">
      <CardContent>
        <Typography variant="h5" component="div" className="flex items-center">
          <SyncAltIcon className="mr-2" /> Stock Movement
        </Typography>
        
        <div className='flex flex-col gap-10 '>
        <div className='w-full'> 
        <table className="table-auto w-full mt-4">
          <thead>
            <tr>
              <th className="px-4 py-2">Month</th>
              <th className="px-4 py-2">Stock In</th>
              <th className="px-4 py-2">Stock Out</th>
            </tr>
          </thead>
          <tbody>
            {data.labels.map((month, index) => (
              <tr key={month}>
                <td className="border px-4 py-2">{month}</td>
                <td className="border px-4 py-2">{data.datasets[0].data[index]}</td>
                <td className="border px-4 py-2">{data.datasets[1].data[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        <div className='w-full flex flex-row'>
        <div className="my-4 w-3/4">
          <Bar data={data} />
        </div>
        <div className="my-4 w-1/3">
          <Pie data={pieData} />
        </div>
        </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StockMovement;
