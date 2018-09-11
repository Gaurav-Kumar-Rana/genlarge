import React, { Component } from 'react';
import './App.css';
import TableComponent from './Table';
// import CustomizedTable from './CustomizedTable';
// import EnhancedTable from './EnhancedTable';
import Grid from '@material-ui/core/Grid';
const tabledata = {
  headData:[{name:'Dessert (100g serving)',type:null},
    {name:'Calories',type:'number'},
    {name:'Fat (g)',type:'number'},
    {name:'Carbs (g)',type:'number'},
    {name:'Protein (g)',type:'number'}
  ],
  bodyData:[{"id":6,"name":"Cupcake","calories":305,"fat":3.7,"carbs":67,"protein":4.3},
  {"id":7,"name":"Donut","calories":452,"fat":25,"carbs":51,"protein":4.9},
  {"id":8,"name":"Eclair","calories":262,"fat":16,"carbs":24,"protein":6},
  {"id":9,"name":"Frozen yoghurt","calories":159,"fat":6,"carbs":24,"protein":4},
  {"id":10,"name":"Gingerbread","calories":356,"fat":16,"carbs":49,"protein":3.9},
  {"id":11,"name":"Honeycomb","calories":408,"fat":3.2,"carbs":87,"protein":6.5},
  {"id":12,"name":"Ice cream sandwich","calories":237,"fat":9,"carbs":37,"protein":4.3},
  {"id":13,"name":"Jelly Bean","calories":375,"fat":0,"carbs":94,"protein":0},
  {"id":14,"name":"KitKat","calories":518,"fat":26,"carbs":65,"protein":7},
  {"id":15,"name":"Lollipop","calories":392,"fat":0.2,"carbs":98,"protein":0},
  {"id":16,"name":"Marshmallow","calories":318,"fat":0,"carbs":81,"protein":2},
  {"id":17,"name":"Nougat","calories":360,"fat":19,"carbs":9,"protein":37},
  {"id":18,"name":"Oreo","calories":437,"fat":18,"carbs":63,"protein":4}]
};
class App extends Component {
  render() {
    return (
      <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={9}>
            <TableComponent tableData={tabledata} />
            {/* <CustomizedTable />
            <EnhancedTable /> */}
          </Grid>
      </Grid>
    );
  }
}

export default App;

