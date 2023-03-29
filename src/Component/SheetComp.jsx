import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid, GridColumnMenu } from '@mui/x-data-grid';
import { Container } from '@mui/system';

const columns = [
  { field: 'id', headerName: 'S NO.', width: 70,sortable: false,editable: true },
  { field: 'firstName', headerName: 'Column 1', width: 130,sortable: false,editable: true },
  { field: 'lastName', headerName: 'Column 2', width: 130 ,sortable: false,editable: true},
  {
    field: 'age',
    headerName: 'Column 3',
    sortable: false,
    type: 'number',
    width: 130,
    editable: true
  }
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 45 },
];

function CustomUserItem(props) {
  const { myCustomHandler, myCustomValue } = props;
  return (
    <MenuItem onClick={myCustomHandler}>
      <ListItemIcon>
        <EditIcon fontSize="small" color='blue'/>
      </ListItemIcon>
      <ListItemText>{myCustomValue}</ListItemText>
    </MenuItem>

  );
}

function CustomColumnMenu(props) {
  return (
    <GridColumnMenu
      {...props}
      components={{
        // Add new item
        ColumnMenuUserItem: CustomUserItem,
      }}
      componentsProps={{
        columnMenuUserItem: {
          // set `displayOrder` for new item
          displayOrder: 15,
          // pass additional props
          myCustomValue: 'Edit Columns',
          myCustomHandler: () => alert('Custom handler fired'),
        },
      }}
    />
  );
}

export default function DataTable() {
  return (
    <Container>

    <Box style={{ height: 600, width: '50%' }}>
      <DataGrid
      // onCellEditCommit={}
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      disableColumnFilter
      hideFooterPagination
      
      slots={{columnMenu: CustomColumnMenu}}
      />
    </Box>
      </Container> 
  );
}