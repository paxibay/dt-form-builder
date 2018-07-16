import React, { Component } from 'react';
import {FormBuilder} from 'react-formio';

class Formbuilder extends Component {
  render() {
    return (
      <div>
        <FormBuilder form={{display: 'form'}} onChange={(schema) => console.log(schema)} />
      </div>
    );
  }
}

export default Formbuilder;
