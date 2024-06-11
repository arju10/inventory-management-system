import React, { useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import { Card, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import Chart from 'chart.js/auto';

const NonComplianceIssues = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    datasets: [
      {
        label: 'Issues',
        data: [3, 1, 4, 2],
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
      },
    ],
  };

  const tableData = [
    ['Product A', 3],
    ['Product B', 1],
    ['Product C', 4],
    ['Product D', 2],
  ];

  const tableHeaders = ['Product', 'Issues'];

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
        <WarningIcon className="mr-2" /> Non-Compliance Issues
      </Typography>
      <Box className="flex flex-col gap-10">
        
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

        <Box className="my-4 w-3/4 ">
          <Bar data={data} ref={chartRef} />
        </Box>

      </Box>
    </Card>
  );
};

export default NonComplianceIssues;
