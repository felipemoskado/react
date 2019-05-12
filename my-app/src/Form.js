import React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { saveInputValue, clearInputValue } from './store/actions';
import './Form.scss';

class Form extends React.Component {
  state = {
    inputValue: ''
  }

  inputChange = event => {
    this.setState({ inputValue: event.target.value })
  }

  keyDown = event => {
    if (event.keyCode === KEY_CODE_ENTER) {
      event.preventDefault();
      this.props.saveAction(this.state.inputValue);
    }
  };

  render() {
    const { clearAction, saveAction, storedValue } = this.props;
    const { inputValue } = this.state;

    return (
      <div className="container-page-form">
        <form className="container-form" noValidate autoComplete="off">
          <TextField
            label="Nome Completo"
            value={inputValue}
            onKeyDown={this.keyDown}
            onChange={this.inputChange}
          />
          <div className="container-actions">
            <Button 
              className="action-save"
              variant="outlined"
              color="primary"
              onClick={() => saveAction(inputValue)}
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
        <span className="value">Valor digitado: {storedValue}</span>
      </div>
    )
  }
}

const KEY_CODE_ENTER = 13

const mapStateToProps = store => ({
  storedValue: store.formState.inputValue
});

const mapDispatchToProps = dispatch => {
  return {
    saveAction: value => dispatch(saveInputValue(value)),
    clearAction: () => dispatch(clearInputValue())
  }
}

const form = connect(mapStateToProps, mapDispatchToProps)(Form);

export default form;