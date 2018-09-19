import React, { Component } from 'react';
import './App.css';
import TableComponent from './Table';
// import CustomizedTable from './CustomizedTable';
// import EnhancedTable from './EnhancedTable';
import Grid from '@material-ui/core/Grid';


class App extends Component {
  render() {
    return (
      <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={7}>
            <TableComponent/>
            {/* <CustomizedTable />*/}
            {/*<EnhancedTable /> */}
          </Grid>
      </Grid>
    );
  }
}

export default App;

