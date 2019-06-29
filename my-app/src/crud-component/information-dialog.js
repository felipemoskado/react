import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';

import InputField from './Input-field';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
};

class SimpleDialog extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  render() {
    return (
      <Dialog aria-labelledby="simple-dialog-title" onClose={this.handleClose}>
        <DialogTitle id="simple-dialog-title">Cadastrar/Registrar pessoal</DialogTitle>
        <div>
          <InputField></InputField>
        </div>
      </Dialog>
    );
  }
}

SimpleDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

const SimpleDialogWrapped = withStyles(styles)(SimpleDialog);

class SimpleDialogDemo extends React.Component {
    state = {
      open: false,
      selectedValue: emails[1],
    };
  
    handleClickOpen = () => {
      this.setState({
        open: true,
      });
    };
  
    handleClose = value => {
      this.setState({ selectedValue: value, open: false });
    };
  
    render() {
      return (
        <div>
          <Typography variant="subtitle1">Selected: {this.state.selectedValue}</Typography>
          <br />
          <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
            Open simple dialog
          </Button>
          <SimpleDialogWrapped
            selectedValue={this.state.selectedValue}
            open={this.state.open}
            onClose={this.handleClose}
          />
        </div>
      );
    }
  }
  
  export default SimpleDialogDemo;