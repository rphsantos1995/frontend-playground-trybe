/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import states from './Estados';

class PersonalForm extends Component {
  constructor() {
    super();
    this.state = {
      nomezin: '',
      email: '',
      CPF: '',

    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        PersonalForm
        <fieldset>
          <label htmlFor="input-nome">
            Nomezin
            <input
              onChange={ this.handleChange }
              name="nomezin"
              type="text"
              id="input-nome"
            />
          </label>
          <label htmlFor="input-email">
            Email
            <input
              onChange={ this.handleChange }
              name="email"
              type="text"
              id="input-email"
            />

          </label>
          <label htmlFor="input-cpf">
            CPF
            <input
              onChange={ this.handleChange }
              name="CPF"
              type="text"
              id="input-cpf"
            />

          </label>
          <select name="Estados" id="select-estados">
            { states.map((item, index) => (
              <option
                key={ index }
                value={ item }
              >
                {item}
              </option>)) }
          </select>
          <button id="submit-btn" type="button">
            <Link to="/professionalForm">Submit</Link>
          </button>

        </fieldset>
      </div>

    );
  }
}

export default PersonalForm;
