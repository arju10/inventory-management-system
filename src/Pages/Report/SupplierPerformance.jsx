import React, { useEffect, useRef } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Card, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Chart from 'chart.js/auto';

const SupplierPerformance = () => {
  const chartRef = useRef(null);

  const barData = {
    labels: ['Supplier A', 'Supplier B', 'Supplier C', 'Supplier D'],
    datasets: [
      {
        label: 'On-time Deliveries',
        data: [95, 80, 85, 90],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  const pieData = {
    labels: ['On-time', 'Late'],
    datasets: [
      {
        data: [350, 50],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  };

  const tableData = [
    ['Supplier A', 95],
    ['Supplier B', 80],
    ['Supplier C', 85],
    ['Supplier D', 90],
  ];

  const tableHeaders = ['Supplier', 'On-time Deliveries'];

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <Card className="m-4 p-4 border rounded-lg shadow-lg w-1/2">      <Typography variant="h5" component="div" className="flex items-center mb-4">
        <LocalShippingIcon className="mr-2" /> Supplier Performance
      </Typography>

      <div className='flex flex-col gap-10 '>
      <div className='w-full'>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {tableHeaders.map((header) => (
                  <TableCell key={header}>{header}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <TableCell key={cellIndex}>{cell}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className='w-full flex flex-row'>
      <div className="my-4 w-3/4 ">
      <Bar data={barData} ref={chartRef} />
      </div>
          <div className="my-4 w-1/3">
            <Pie data={pieData} />
          </div>
      </div>
      </div>
    </Card>
  );
};

export default SupplierPerformance;
