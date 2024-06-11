import React, { useEffect, useRef } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Card, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Chart from 'chart.js/auto';

const ExpiryReports = () => {
  const chartRef = useRef(null);

  const barData = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    datasets: [
      {
        label: 'Expiring Soon',
        data: [5, 10, 3, 7],
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
      },
      {
        label: 'Expired',
        data: [1, 2, 1, 0],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const pieData = {
    labels: ['Expired', 'Expiring Soon', 'Fresh'],
    datasets: [
      {
        data: [5, 10, 85],
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)'],
      },
    ],
  };

  const tableData = [
    ['Product A', 5, 1],
    ['Product B', 10, 2],
    ['Product C', 3, 1],
    ['Product D', 7, 0],
  ];

  const tableHeaders = ['Product', 'Expiring Soon', 'Expired'];

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <Card className="m-4 p-4 border rounded-lg shadow-lg w-1/2">
      <Typography variant="h5" component="div" className="flex items-center mb-4">
        <DateRangeIcon className="mr-2" /> Expiry Reports
      </Typography>
      <div className='flex flex-col gap-10 '>
      <div className="mt-4 w-full">
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
      <div className="flex flex-row w-full">
        <Box className=" my-4 w-3/4">
          <Bar data={barData} ref={chartRef} />
        </Box>
        <Box className="my-4 w-1/3">
          <Pie data={pieData} />
        </Box>
      </div>
      </div>
      
    </Card>
  );
};

export default ExpiryReports;
