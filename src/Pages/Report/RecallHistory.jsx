import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';

const RecallHistory = () => {
  const data = {
    labels: ['Product A', 'Product B', 'Product C'],
    datasets: [
      {
        label: 'Recalls',
        data: [5, 3, 7],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const pieData = {
    labels: ['Product A', 'Product B', 'Product C'],
    datasets: [
      {
        data: [5, 3, 7],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
      },
    ],
  };

  return (
    <Card className="m-4 p-4 border rounded-lg shadow-lg w-1/2">      <CardContent>
        <Typography variant="h5" component="div" className="flex items-center">
          <HistoryIcon className="mr-2" /> Recall History
        </Typography>
       
        <div className='flex flex-col gap-10 '>
        <div className='w-full'>
       <table className="table-auto w-full mt-4">
          <thead>
            <tr>
              <th className="px-4 py-2">Product</th>
              <th className="px-4 py-2">Recalls</th>
            </tr>
          </thead>
          <tbody>
            {data.labels.map((product, index) => (
              <tr key={product}>
                <td className="border px-4 py-2">{product}</td>
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
          <div className="my-4 w-1/3">
            <Pie data={pieData} />
          </div>
        </div>
       </div>
      </CardContent>
    </Card>
  );
};

export default RecallHistory;
