import React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { saveInputValue, clearInputValue } from '../store/actions';
import './Form.scss';

class InputField extends React.Component {
  state = {
    information: {
      firstName: '',
      lastName: '',
      telephone: '',
      cpf: '',
      rg: ''
    }
  }

  handleChange = name => event => {
    this.setState({
      information: {
        ...this.state.information,
        [name]: event.target.value
      }
    })
  }

  keyDown = event => {
    if (event.keyCode === KEY_CODE_ENTER) {
      event.preventDefault();
      this.props.saveAction(this.state.information);
    }
  };

  render() {
    const { clearAction, saveAction } = this.props;
    const { information } = this.state;

    return (
    <form className="container-form" noValidate autoComplete="off">
        <TextField
            label="First name"
            value={information.firstName}
            onKeyDown={this.keyDown}
            onChange={this.handleChange('firstName')}
        />
        <TextField
            label="Last name"
            value={information.lastName}
            onKeyDown={this.keyDown}
            onChange={this.handleChange('lastName')}
        />
        <TextField
            label="Telephone"
            value={information.telephone}
            onKeyDown={this.keyDown}
            onChange={this.handleChange('telephone')}
        />
        <TextField
            label="CPF"
            value={information.cpf}
            onKeyDown={this.keyDown}
            onChange={this.handleChange('cpf')}
        />
        <TextField
            label="RG"
            value={information.rg}
            onKeyDown={this.keyDown}
            onChange={this.handleChange('rg')}
        />
        <div className="container-actions">
        <Button
            className="action-save"
            variant="outlined"
            color="primary"
            onClick={() => saveAction(information)}
        >
            Save
        </Button>
        <Button
            className="action-clear"
            variant="outlined"
            color="primary"
            onClick={() => clearAction()}
        >
            Clear
            </Button>
        </div>
    </form>
    )
  }
}

const KEY_CODE_ENTER = 13

const mapStateToProps = store => ({
  data: store.formState.information
});

const mapDispatchToProps = dispatch => {
  return {
    saveAction: value => dispatch(saveInputValue(value)),
    clearAction: () => dispatch(clearInputValue())
  }
}

const inputField = connect(mapStateToProps, mapDispatchToProps)(InputField);

export default inputField;