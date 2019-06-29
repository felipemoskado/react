import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import { saveInputValue, clearInputValue } from '../store/actions';
import '../Form.scss';

function InputField(props) {
  
  const handleChanges = event => {
    console.log(event.target.value);
    setfirstName(event.target.value);
  }

  const handleChanges1 = event => {
    console.log(event.target.value);
    setLastName(event.target.value);
  }

  const [firstName, setfirstName] = React.useState('Composed TextField');
  const [lastName, setLastName] = React.useState('Composed TextField');
  const { clearAction, saveAction } = props;

  return (
    <div>
      <FormControl>
        <InputLabel htmlFor="component-simple">First Name</InputLabel>
        <Input id="component-simple" value={firstName} onChange={handleChanges} />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-simple">Last Name</InputLabel>
        <Input id="component-simple" value={lastName} onChange={handleChanges} />
      </FormControl>
      <div className="container-actions">
        {/* <Button
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
            </Button> */}
      </div>
    </div>
  )
}

const handleChange = name => event => {
  this.setState({
    information: {
      ...this.state.information,
      [name]: event.target.value
    }
  })
}

const keyDown = event => {
  if (event.keyCode === KEY_CODE_ENTER) {
    event.preventDefault();
    this.props.saveAction(this.state.information);
  }
};

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