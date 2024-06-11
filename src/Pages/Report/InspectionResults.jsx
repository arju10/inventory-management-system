import React, { useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import { Card, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import Chart from 'chart.js/auto';

const InspectionResults = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    datasets: [
      {
        label: 'Passed',
        data: [80, 90, 75, 85],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Failed',
        data: [20, 10, 25, 15],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const tableData = [
    ['Product A', 80, 20],
    ['Product B', 90, 10],
    ['Product C', 75, 25],
    ['Product D', 85, 15],
  ];

  const tableHeaders = ['Product', 'Passed', 'Failed'];

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
        <FactCheckIcon className="mr-2" /> Inspection Results
      </Typography>
        
        
      <div className='flex flex-col gap-10 '>
      <Box className=" w-full">
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
        <div className="my-4 w-3/4 ">
          <Bar data={data} ref={chartRef} />
        </div>
       </div>

    </Card>
  );
};

export default InspectionResults;
