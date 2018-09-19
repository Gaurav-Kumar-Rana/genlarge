import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';

import { connect } from "react-redux";
import { fetchProductsSuccess, fetchProductsBegin, fetchProductsFailure } from "./js/action/index";
/*
1.mapStateToProps function:-
mapStateToProps connects a part of the Redux state to the props of a React component. 
By doing so a connected React component will have access to the exact part of the store it needs.

2.mapDispatchToProps function:-
mapDispatchToProps connects Redux actions to React props. 
This way a connected React component will be able to dispatch actions.

*/ 
const mapStateToProps = (state) => {
  return{
    loading:state.loading,
    metadata: state.metadata,
    error:state.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    fetchProductsSuccess : actions => dispatch(fetchProductsSuccess(actions)),
    fetchProductsBegin : sucess => dispatch(fetchProductsBegin(sucess)), 
    fetchProductsError : error => dispatch(fetchProductsError(error))
  }
}

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: '0px',
    overflowX: 'auto',
    overflowY:'auto'
  },
  table: {
    minWidth: 700,
  },
  title: {
    flex: '0 0 auto',
  },
  spacer: {
    flex: '1 1 62%',
  },
  toolbar:{
    borderBottom:'1px solid #c1c1c1'
  }
});

function createTableHead(headData){
  let _headData = [];
  headData.forEach((element,key) => {
    _headData.push(<TableCell key={key}>{element.name}</TableCell>);
  });
  return _headData;
}

function createTableBody(bodyData){
  let _bodyData = [];

  bodyData.forEach((row,key) => {
    let _columnData = [];
    let col = null;
    let colkey = 0;
    for(col in row){
        if(typeof(row[col]) === "boolean"){
          row[col] = row[col] ? 'Yes' : 'No';
        }
        _columnData.push(<TableCell key={colkey}>{row[col]}</TableCell>);
        colkey++;
    }
    _bodyData.push(<TableRow key={key}>{_columnData}</TableRow>)
  });

  return _bodyData;
}

class TableComponent extends React.Component{

  state={
    zoomState:false,
  };

  onRequestZoomIn = (event,property) => {
    this.setState({
      zoomState:!this.state.zoomState
    });
    console.log('Zoom State :' + this.state.zoomState);
  };
  onRequestZoomOut = (event,property) => {
    this.setState({
      zoomState:!this.state.zoomState
    });
     console.log('Zoom State :' + this.state.zoomState);
  };
  componentDidMount() {
    //Data Fetching Begin
    this.props.fetchProductsBegin();
    //Connecting to api
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
      data = {
        heading:'To Do',
        headData:[{name:"User Id",type:"number"},{name:"Id",type:"number"},{name:"Title",type:"String"},{name:"Completed",type:"boolen"}],
        bodyData:data
      }
      //this.props.dispatch(fetchProductsSuccess(data));
      this.props.fetchProductsSuccess(data)
    })
    .catch(error => {
      this.props.fetchProductsFailure(error);
    });
  }

  render(){
    const { classes, loading, error} = this.props;
    const tableData = this.props.metadata;

    const tableHead = createTableHead(tableData.headData);
    const tableBody = createTableBody(tableData.bodyData);
    const tableHeading = tableData.heading;
    return(
      <React.Fragment>
      <Paper className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.title}>
            <Typography variant="title" id="tableTitle">
                {tableHeading}
            </Typography>
          </div>
          <div className={classes.spacer}></div>
          <div className={classes.actions}>
            <Tooltip title="Enlarge View" >
              <IconButton aria-label="Enlarge View" onClick={this.onRequestZoomIn}>
                  <ZoomInIcon />
              </IconButton>
            </Tooltip>
          </div>
        </Toolbar>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {tableHead}
            </TableRow>
          </TableHead>
          <TableBody>
              {tableBody}
          </TableBody>
        </Table>
      </Paper>
      <Modal  aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.state.zoomState}
        onClose={this.onRequestZoomOut}>
          <div className="popup-container">
            <Paper className={classes.root}>
              <Toolbar className={classes.toolbar}>
                <div className={classes.title}>
                  <Typography variant="title" id="tableTitle">
                      {tableHeading}
                  </Typography>
                </div>
                <div className={classes.spacer}></div>
                <div className={classes.actions}>
                  <Tooltip title="Normal View">
                    <IconButton aria-label="Normal View" onClick={this.onRequestZoomOut}>
                      <ZoomOutIcon />
                    </IconButton>
                  </Tooltip>
                </div>
              </Toolbar>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    {tableHead}
                  </TableRow>
                </TableHead>
                <TableBody>
                    {tableBody}
                </TableBody>
              </Table>
            </Paper>
          </div>
      </Modal>
      </React.Fragment>
    )
  }
}

TableComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  tableData:PropTypes.object,
};

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(TableComponent));