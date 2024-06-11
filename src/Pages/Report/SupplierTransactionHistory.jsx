import React, { useEffect, useRef } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { Card, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import Chart from 'chart.js/auto';

const SupplierTransactionHistory = () => {
  const chartRef = useRef(null);

  const lineData = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Transactions',
        data: [10, 20, 15, 30],
        borderColor: 'rgba(54, 162, 235, 0.6)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
      },
    ],
  };
  const pieData = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        data: [10, 20, 15, 30],
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
      },
    ],
  };

  const tableData = [
    ['January', 10],
    ['February', 20],
    ['March', 15],
    ['April', 30],
  ];

  const tableHeaders = ['Month', 'Transactions'];

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <Card className="m-4 p-4 border rounded-lg shadow-lg w-1/2">      <Typography variant="h5" component="div" className="flex items-center mb-4">
        <HistoryIcon className="mr-2" /> Supplier Transaction History
      </Typography>
      <div className='flex flex-col gap-10 '>
        
        <Box className="ml-4 w-full">
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
        </Box>

        <div className='w-full flex flex-row'>
          <div className="my-4 w-3/4 ">
          <Line data={lineData} ref={chartRef} />
        </div>
        <div className="my-4 w-1/3">
            <Pie data={pieData} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SupplierTransactionHistory;
