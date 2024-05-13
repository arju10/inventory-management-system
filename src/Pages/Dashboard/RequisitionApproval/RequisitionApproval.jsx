import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { ExpandAltOutlined } from "@ant-design/icons";
import Button from "@mui/material/Button";

// Search bar
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: theme.spacing(2),
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  border: "1px solid #8689",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
}));

// Table
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
    textAlign: "center",
    border: "1px solid white",
    fontSize: "18px",
    backgroundColor: "#409",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    textAlign: "center",
    border: "1px solid #000",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&.selected": {
    backgroundColor: "#bbdefb",
  },
}));

const RequisitionApproval = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/employees/allEmployees")
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleRowClick = (row) => {
    setSelectedRow(row);
  };

  return (
    <>
      <Container>
        <div>
          <Link to="/preview-data/:id">
            <Button variant="contained" color="success">
              <ExpandAltOutlined />
              &nbsp; Preview
            </Button>
            &nbsp;
          </Link>
        </div>

        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search by Invoice Number or Customer"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Container>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Requisition</StyledTableCell>
              <StyledTableCell>Requested By</StyledTableCell>
              <StyledTableCell>Requested Status</StyledTableCell>
              <StyledTableCell>Note</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee) => (
              <StyledTableRow
                key={employee.empID}
                onClick={() => handleRowClick(employee)}
                className={
                  selectedRow && selectedRow.empID === employee.empID
                    ? "selected"
                    : ""
                }
              >
                <StyledTableCell component="th" scope="row">
                  {employee.empID}
                </StyledTableCell>
                <StyledTableCell>{employee.name}</StyledTableCell>
                <StyledTableCell>{employee.mobileNo}</StyledTableCell>
                <StyledTableCell>{employee.designation}</StyledTableCell>
                <StyledTableCell>{employee.email}</StyledTableCell>
                <StyledTableCell>{employee.order}</StyledTableCell>
                <StyledTableCell>{employee.department}</StyledTableCell>
                <StyledTableCell>
                  {employee.active ? "Yes" : "No"}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default RequisitionApproval;
