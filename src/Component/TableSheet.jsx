import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import  AgSelectCellEditor  from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
 
const frameworkComponents = {
    agSelectCellEditor: AgSelectCellEditor,
  };
  
const TableSheet = () => {

    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    
    const [rowData, setRowData] = useState([
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 }
    ]);
    
    const columnDefs = [
        { headerName: 'Make', field: 'make', editable: true ,filter: true },
        { headerName: 'Model', field: 'model', editable: true,filter: true,cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: ['Category 1', 'Category 2', 'Category 3']} },
        { headerName: 'Price', field: 'price', editable: true ,filter: true }
    ];
    
    const onGridReady = (params) => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
    
        params.api.setRowData(rowData);
    };
    
    const onCellValueChanged = (params) => {
        const rowIndex = params.rowIndex;
        const rowNode = gridApi.getRowNode(rowIndex);
        const updatedData = rowNode.data;
    
        setRowData([...rowData.slice(0, rowIndex), updatedData, ...rowData.slice(rowIndex + 1)]);
    };
    
  return (
    <div className="ag-theme-alpine" style={{ height: '500px', width: '600px',marginLeft:'20%' }}>
    <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        onGridReady={onGridReady}
        onCellValueChanged={onCellValueChanged}
        frameworkComponents={frameworkComponents}
    />
</div>
  );
};
export default TableSheet
