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

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
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
  _bodyData = bodyData.map((element) => {
    return (
      <TableRow key={element.id}>
        <TableCell component="th" scope="row">
          {element.name}
        </TableCell>
        <TableCell numeric>{element.calories}</TableCell>
        <TableCell numeric>{element.fat}</TableCell>
        <TableCell numeric>{element.carbs}</TableCell>
        <TableCell numeric>{element.protein}</TableCell>
    </TableRow>
    );
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
  render(){
    const { classes, tableData} = this.props;
    const tableHead = createTableHead(tableData.headData);
    const tableBody = createTableBody(tableData.bodyData);
    return(
      <React.Fragment>
      <Paper className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.title}>
            <Typography variant="title" id="tableTitle">
                Nutrition
            </Typography>
          </div>
          <div className={classes.spacer}></div>
          <div className={classes.actions}>
            {this.state.zoomState ? (
                <Tooltip title="Normal View">
                <IconButton aria-label="Normal View" onClick={this.onRequestZoomOut}>
                <ZoomOutIcon />
                </IconButton>
              </Tooltip>
            ):(
              <Tooltip title="Enlarge View" >
                <IconButton aria-label="Enlarge View" onClick={this.onRequestZoomIn}>
                    <ZoomInIcon />
                </IconButton>
              </Tooltip>
            )}
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
            <Paper className={classes.root}>
              <Toolbar className={classes.toolbar}>
                <div className={classes.title}>
                  <Typography variant="title" id="tableTitle">
                      Nutrition
                  </Typography>
                </div>
                <div className={classes.spacer}></div>
                <div className={classes.actions}>
                  {!this.state.zoomState ? (
                      <Tooltip title="Normal View">
                      <IconButton aria-label="Normal View" onClick={this.onRequestZoomOut}>
                        <ZoomInIcon />
                      </IconButton>
                    </Tooltip>
                  ):(
                    <Tooltip title="Enlarge View" >
                      <IconButton aria-label="Enlarge View" onClick={this.onRequestZoomIn}>
                          <ZoomOutIcon />
                      </IconButton>
                    </Tooltip>
                  )}
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
      </Modal>
      </React.Fragment>
    )
  }
}

TableComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  tableData:PropTypes.object.isRequired,
};

export default withStyles(styles)(TableComponent);