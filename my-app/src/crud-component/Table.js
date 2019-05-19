import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

function CustomizedTable(props) {
  const { classes, datas } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>First Name</CustomTableCell>
            <CustomTableCell align="right">Last Name</CustomTableCell>
            <CustomTableCell align="right">Telephone</CustomTableCell>
            <CustomTableCell align="right">CPF</CustomTableCell>
            <CustomTableCell align="right">RG</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map(row => (
            <TableRow className={classes.row} key={row.cpf}>
              <CustomTableCell component="th" scope="row">{row.firstName}</CustomTableCell>
              <CustomTableCell align="right">{row.lastName}</CustomTableCell>
              <CustomTableCell align="right">{row.telephone}</CustomTableCell>
              <CustomTableCell align="right">{row.cpf}</CustomTableCell>
              <CustomTableCell align="right">{row.rg}</CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = store => ({
  datas: store.formState.values
});

export default connect(mapStateToProps)(withStyles(styles)(CustomizedTable));