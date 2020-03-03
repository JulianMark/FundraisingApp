import React from 'react';
import {connect} from 'react-redux';
import MaterialTable from 'material-table';
import Search from '@material-ui/icons/Search';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveAlt from '@material-ui/icons/SaveAlt';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Add from '@material-ui/icons/Add';
import Check from '@material-ui/icons/Check';
import FilterList from '@material-ui/icons/FilterList';
import Remove from '@material-ui/icons/Remove';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ClearIcon from '@material-ui/icons/Clear';

const Table = (props) => {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Nombre', field: 'name' },
      { title: 'Apellido', field: 'lastName' },
      { title: 'Cant. Donaciones', field: 'countdonations' },
      { title: 'Total Donaciones', field: 'amountdonations' },
      { title: 'Hs. Prod', field: 'hsprod' },
      { title: 'Hs. No Prod.', field: 'hsnoprod' },
      { title: 'Prom. Media', field: 'prommed' },
      { title: 'Prom. Cant', field: 'promcount' },
      { title: 'Ingreso', field: 'beginning' },
      { title: 'Egreso', field: 'final' },
    ],
    data: props.employeeList
  });

  return (
    <MaterialTable
    icons={{ 
        Add: Add,
        Edit: EditIcon,
        Delete: DeleteIcon,
        Clear:ClearIcon,
        ResetSearch:ClearIcon,
        Check: Check,
        SortArrow: ArrowDownwardIcon,
        ViewColumn : ViewColumnIcon,
        DetailPanel: ChevronRight,
        Export: SaveAlt,
        Filter: FilterList,
        FirstPage: FirstPage,
        LastPage: LastPage,
        NextPage: ChevronRight,
        PreviousPage: ChevronLeft,
        Search: Search,
        ThirdStateCheck: Remove,
      }}
      title="Usuarios"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}

const mapStateToProps = (reducers) => {
  return reducers.campaignsReducer;
}

export default connect(mapStateToProps)(Table);