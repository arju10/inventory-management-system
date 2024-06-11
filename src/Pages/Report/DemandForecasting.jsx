import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';
import ShowChartIcon from '@mui/icons-material/ShowChart';

const DemandForecasting = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Forecasted Demand',
        data: [300, 400, 350, 420],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const pieData = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        data: [300, 400, 350, 420],
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
          <ShowChartIcon className="mr-2" /> Demand Forecasting
        </Typography>
        
        <div className='flex flex-col gap-10 '>
        <div className='w-full'>
        <table className="table-auto w-full mt-4">
          <thead>
            <tr>
              <th className="px-4 py-2">Month</th>
              <th className="px-4 py-2">Forecasted Demand</th>
            </tr>
          </thead>
          <tbody>
            {data.labels.map((month, index) => (
              <tr key={month}>
                <td className="border px-4 py-2">{month}</td>
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

export default DemandForecasting;
