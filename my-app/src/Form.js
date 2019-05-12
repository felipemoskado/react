import React from 'react';

import './Form.scss';
import InputField from './Input-field'
import CustomizedTable from './Table'

class Form extends React.Component {

  render() {
    return (
      <div className="container-page-form">
        <InputField></InputField>
        <CustomizedTable></CustomizedTable>
      </div>
    )
  }
}

export default Form;