import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Tooltip } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/DeleteIcon';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

function TableData({ data, handleDelete, handleEdit }) {

  const styleText = {
    mr: 1
  }


  return <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Sl. No.</b></TableCell>
            <TableCell align="center"><b>Name</b></TableCell>
            <TableCell align="center"><b>Phone&nbsp;</b></TableCell>
            <TableCell align="center"><b>Email&nbsp;</b></TableCell>
            <TableCell align="center"><b>Action&nbsp;</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="right">{item.fullName}</TableCell>
              <TableCell align="center">{item.phone}</TableCell>
              <TableCell align="center">{item.email}</TableCell>
              <TableCell align="center"><Button variant='contained'
                color='success'
                sx={styleText}
                onClick={() => handleEdit(index)}>
                <Tooltip title="Edit data">
                  <EditIcon />
                </Tooltip>
              </Button>
                <Button variant='contained' color='error'
                  onClick={() => handleDelete(index)}>
                  <Tooltip title="Delete data">
                    <DeleteForeverIcon />
                  </Tooltip>

                </Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  </div>
}

export default TableData