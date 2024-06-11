import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';
import RepeatIcon from '@mui/icons-material/Repeat';

const StockTurnoverRate = () => {
  const data = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Stock Turnover Rate',
        data: [1.2, 1.5, 1.8, 2.0],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const pieData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        data: [1.2, 1.5, 1.8, 2.0],
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
      },
    ],
  };

  return (
    <Card className="m-4 p-4 border rounded-lg shadow-lg w-1/2">      <CardContent>
        <Typography variant="h5" component="div" className="flex items-center">
          <RepeatIcon className="mr-2" /> Stock Turnover Rate
        </Typography>
        
        <div className='flex flex-col gap-10 '>
        <div className='w-full'>
        <table className="table-auto w-full mt-4">
          <thead>
            <tr>
              <th className="px-4 py-2">Quarter</th>
              <th className="px-4 py-2">Turnover Rate</th>
            </tr>
          </thead>
          <tbody>
            {data.labels.map((quarter, index) => (
              <tr key={quarter}>
                <td className="border px-4 py-2">{quarter}</td>
                <td className="border px-4 py-2">{data.datasets[0].data[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>

        <div className='w-full flex flex-row'>
          <div className="my-4 w-3/4 ">
          <Bar data={data} />
        </div>
        <div className="my-4 w-1/3">          <Pie data={pieData} />
        </div>
        </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StockTurnoverRate;
