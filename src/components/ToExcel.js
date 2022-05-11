//npm install xlsx file-saver --save

import React from 'react'
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { Button, Tooltip } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const excelBtn = {
  m: 1
}

//to convert data to exxel formate
function ToExcel({ data }) {
  //file type for excel sheets
  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  //file extention
  const fileExtension = '.xlsx';
  //default name
  const fileName = 'adarsh'

  const exportToCSV = (data, fileName) => {
    //covert json data into sheets - work sheet
    const ws = XLSX.utils.json_to_sheet(data);
    //work book
    const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data1 = new Blob([excelBuffer], { type: fileType });
    //to save file in local device 
    FileSaver.saveAs(data1, fileName + fileExtension);
  }

  console.log(data);
  return (
    <div>
      <Tooltip title="Download in Excel">  
        <Button variant='contained'
          color='success'
          sx={excelBtn}
          onClick={(e) => exportToCSV(data, fileName)}>
          <DownloadIcon />
        </Button>
      </Tooltip>

    </div>
  )
}

export default ToExcel