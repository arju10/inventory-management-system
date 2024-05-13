// import React, { useState, useEffect } from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { Link } from 'react-router-dom';
// import {
//   DeleteOutlined,
//   EditOutlined,
//   UserAddOutlined
// } from '@ant-design/icons';
// import Button from '@mui/material/Button';

// // Dialog
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

// // Search bar
// import { styled, alpha } from '@mui/material/styles';
// import InputBase from '@mui/material/InputBase';
// import SearchIcon from '@mui/icons-material/Search';

// const Container = styled('div')(({ theme }) => ({
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   marginBottom: theme.spacing(2),
// }));

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),

//   },
//   border: '1px solid #8689',
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '40ch',
//     },
//   },
// }));

// // Table
// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     // backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//     textAlign: 'center',
//     border: '1px solid white',
//     fontSize: '18px',
//     // backgroundColor: '#084',
//     backgroundColor: '#409',
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//     textAlign: 'center',
//     border: '1px solid #000',
//   },
// }));

// // const StyledTableRow = styled(TableRow)(({ theme }) => ({
// //   '&:nth-of-type(odd)': {
// //     backgroundColor: theme.palette.action.hover,
// //   },
// // }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   '&.selected': {
//     backgroundColor: '#bbdefb', // change color for selected row
//   },
// }));

// const AllEmployees = () => {
//   const [employees, setEmployees] = useState([]);

//   const [selectedRow, setSelectedRow] = useState(null);
//   const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

//   useEffect(() => {
//     fetch('http://localhost:5000/api/v1/employees/allEmployees')
//       .then(response => response.json())
//       .then(data => setEmployees(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   const handleRowClick = (row) => {
//     setSelectedRow(row);
//   };

//   const handleDeleteDialogOpen = () => {
//     if (selectedRow) {
//       setOpenDeleteDialog(true);
//     } else {
//       alert('Please select a row to delete.');
//     }
//   };

//   const handleDeleteDialogClose = () => {
//     setOpenDeleteDialog(false);
//   };

//   const handleDeleteConfirmed = () => {
//     // Delete the selected row using its ID
//     fetch(`http://localhost:5000/api/v1/employees/delete-employee/${selectedRow.empID}`, {
//       method: 'DELETE',
//     })
//       .then(response => {
//         if (response.ok) {
//           // Remove the deleted row from the state
//           setEmployees(prevEmployees => prevEmployees.filter(employee => employee.empID !== selectedRow.empID));
//           setSelectedRow(null);
//         }
//       })
//       .catch(error => console.error('Error deleting row:', error))
//       .finally(() => setOpenDeleteDialog(false));
//   };

//   return (
//     <>
//       <Container>
//         <div>
//           <Link to="/add-employee">
//             <Button
//               type="primary"
//               variant="contained" color="primary"
//             ><UserAddOutlined />&nbsp;
//               Add New Employee
//             </Button>&nbsp;
//           </Link>

//           <Link to="/edit-Employee">
//             <Button variant="contained" color="success"><EditOutlined />&nbsp;
//               Edit
//             </Button>&nbsp;
//           </Link>

//           <Button variant="contained" color="error" onClick={handleDeleteDialogOpen}><DeleteOutlined />&nbsp;
//             Delete
//           </Button>&nbsp;

//         </div>

//         <Search>
//           <SearchIconWrapper>
//             <SearchIcon />
//           </SearchIconWrapper>
//           <StyledInputBase
//             placeholder="Search by Name ,Code or Mobile"
//             inputProps={{ 'aria-label': 'search' }}
//           />
//         </Search>
//       </Container>

//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 700 }} aria-label="customized table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell>Employee ID</StyledTableCell>
//               <StyledTableCell>Name</StyledTableCell>
//               <StyledTableCell>Mobile No</StyledTableCell>
//               <StyledTableCell>Designation</StyledTableCell>
//               <StyledTableCell>Email</StyledTableCell>
//               <StyledTableCell>Order</StyledTableCell>
//               <StyledTableCell>Department</StyledTableCell>
//               <StyledTableCell>Active</StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {employees.map((employee) => (
//               <StyledTableRow key={employee.empID} onClick={() => handleRowClick(employee)} className={selectedRow && selectedRow.empID === employee.empID ? 'selected' : ''}>
//                 <StyledTableCell component="th" scope="row">
//                   {employee.empID}
//                 </StyledTableCell>
//                 <StyledTableCell>{employee.name}</StyledTableCell>
//                 <StyledTableCell>{employee.mobileNo}</StyledTableCell>
//                 <StyledTableCell>{employee.designation}</StyledTableCell>
//                 <StyledTableCell>{employee.email}</StyledTableCell>
//                 <StyledTableCell>{employee.order}</StyledTableCell>
//                 <StyledTableCell>{employee.department}</StyledTableCell>
//                 <StyledTableCell>{employee.active ? 'Yes' : 'No'}</StyledTableCell>
//               </StyledTableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       {/* Delete Dialog */}
//       <Dialog
//         open={openDeleteDialog}
//         onClose={handleDeleteDialogClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title">{"Delete Employee"}</DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//             Are you sure you want to delete this employee?
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleDeleteDialogClose}>No</Button>
//           <Button onClick={handleDeleteConfirmed} autoFocus>
//             Yes
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// };

// export default AllEmployees;


// Frontend Code: AllEmployees.js

import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import {
  DeleteOutlined,
  EditOutlined,
  UserAddOutlined
} from '@ant-design/icons';
import Button from '@mui/material/Button';

// Dialog
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// Search bar
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  border: '1px solid #8689',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
}));

// Table
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
    textAlign: 'center',
    border: '1px solid white',
    fontSize: '18px',
    backgroundColor: '#409',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    textAlign: 'center',
    border: '1px solid #000',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&.selected': {
    backgroundColor: '#bbdefb',
  },
}));

const AllEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/api/v1/employees/allEmployees')
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleRowClick = (row) => {
    setSelectedRow(row);
  };

  const handleDeleteDialogOpen = () => {
    if (selectedRow) {
      setOpenDeleteDialog(true);
    } else {
      alert('Please select a row to delete.');
    }
  };

  const handleDeleteDialogClose = () => {
    setOpenDeleteDialog(false);
  };

  const handleDeleteConfirmed = () => {
    // Delete the selected row using its ID
    fetch(`http://localhost:5000/api/v1/employees/delete-employee/${selectedRow.empID}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          // Remove the deleted row from the state
          setEmployees(prevEmployees => prevEmployees.filter(employee => employee.empID !== selectedRow.empID));
          setSelectedRow(null);
        }
      })
      .catch(error => console.error('Error deleting row:', error))
      .finally(() => setOpenDeleteDialog(false));
  };

  return (
    <>
      <Container>
        <div>
          <Link to="/add-employee">
            <Button
              type="primary"
              variant="contained" color="primary"
            ><UserAddOutlined />&nbsp;
              Add New Employee
            </Button>&nbsp;
          </Link>

          <Link to="/edit-Employee">
            <Button variant="contained" color="success"><EditOutlined />&nbsp;
              Edit
            </Button>&nbsp;
          </Link>

          <Button variant="contained" color="error" onClick={handleDeleteDialogOpen}><DeleteOutlined />&nbsp;
            Delete
          </Button>&nbsp;

        </div>

        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search by Name, Code, or Mobile"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </Container>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Employee ID</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Mobile No</StyledTableCell>
              <StyledTableCell>Designation</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Order</StyledTableCell>
              <StyledTableCell>Department</StyledTableCell>
              <StyledTableCell>Active</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee) => (
              <StyledTableRow key={employee.empID} onClick={() => handleRowClick(employee)} className={selectedRow && selectedRow.empID === employee.empID ? 'selected' : ''}>
                <StyledTableCell component="th" scope="row">
                  {employee.empID}
                </StyledTableCell>
                <StyledTableCell>{employee.name}</StyledTableCell>
                <StyledTableCell>{employee.mobileNo}</StyledTableCell>
                <StyledTableCell>{employee.designation}</StyledTableCell>
                <StyledTableCell>{employee.email}</StyledTableCell>
                <StyledTableCell>{employee.order}</StyledTableCell>
                <StyledTableCell>{employee.department}</StyledTableCell>
                <StyledTableCell>{employee.active ? 'Yes' : 'No'}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Delete Dialog */}
      <Dialog
        open={openDeleteDialog}
        onClose={handleDeleteDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Employee"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this employee?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose}>No</Button>
          <Button onClick={handleDeleteConfirmed} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AllEmployees;
