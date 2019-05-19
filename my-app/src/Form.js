import React from 'react';

import './Form.scss';
import InputField from './crud-component/Input-field'
import CustomizedTable from './crud-component/Table'

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