import React, { Component } from 'react';
import {FormBuilder} from 'react-formio';
import {Formio} from 'formiojs';

class Formiobuilder extends Component {
  render() {
    const fb = Formio.builder(document.getElementById('builder'), {}, {
      builder: {
        basic: false,
        advanced: false,
        data: false,
        customBasic: {
          title: 'Basic Components',
          default: true,
          weight: 0,
          components: {
            textfield: true,
            textarea: true,
            email: true,
            phoneNumber: true
          }
        },
        custom: {
          title: 'User Fields',
          weight: 10,
          components: {
            firstName: {
              title: 'First Name',
              key: 'firstName',
              icon: 'fa fa-terminal',
              schema: {
                label: 'First Name',
                type: 'textfield',
                key: 'firstName',
                input: true
              }
            },
            lastName: {
              title: 'Last Name',
              key: 'lastName',
              icon: 'fa fa-terminal',
              schema: {
                label: 'Last Name',
                type: 'textfield',
                key: 'lastName',
                input: true
              }
            },
            email: {
              title: 'Email',
              key: 'email',
              icon: 'fa fa-at',
              schema: {
                label: 'Email',
                type: 'email',
                key: 'email',
                input: true
              }
            },
            phoneNumber: {
              title: 'Mobile Phone',
              key: 'mobilePhone',
              icon: 'fa fa-phone-square',
              schema: {
                label: 'Mobile Phone',
                type: 'phoneNumber',
                key: 'mobilePhone',
                input: true
              }
            }
          }
        },
        layout: {
          components: {
            table: true
          }
        }
      }
    });

    return (
      <div>
      </div>
    );
  }
}

export default Formiobuilder;
