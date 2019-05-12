import React from 'react';

import './Form.scss';
import InputField from './Input-field'

class Form extends React.Component {

  render() {
    return (
      <div className="container-page-form">
        <InputField></InputField>
      </div>
    )
  }
}

export default Form;