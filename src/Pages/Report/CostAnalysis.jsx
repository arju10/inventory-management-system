import React, { useEffect, useRef } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Card, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Chart from 'chart.js/auto';

const CostAnalysis = () => {
  const chartRef = useRef(null);

  const barData = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Purchase Cost',
        data: [3000, 2500, 3200, 2800],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: 'Storage Cost',
        data: [500, 400, 450, 480],
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
      },
      {
        label: 'Wastage Cost',
        data: [200, 150, 180, 170],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const pieData = {
    labels: ['Purchase Cost', 'Storage Cost', 'Wastage Cost'],
    datasets: [
      {
        data: [3000, 500, 200],
        backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  };

  const tableData = [
    ['January', 3000, 500, 200],
    ['February', 2500, 400, 150],
    ['March', 3200, 450, 180],
    ['April', 2800, 480, 170],
  ];

  const tableHeaders = ['Month', 'Purchase Cost', 'Storage Cost', 'Wastage Cost'];

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
        <AttachMoneyIcon className="mr-2" /> Cost Analysis
      </Typography>
      
      <Box className="mt-4">
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
      <Box className="flex flex-row">
        <Box className="my-4 w-3/4">
          <Bar data={barData} ref={chartRef} />
        </Box>
        <Box className="my-4 w-1/3">
          <Pie data={pieData} />
        </Box>
      </Box>
    </Card>
  );
};

export default CostAnalysis;
