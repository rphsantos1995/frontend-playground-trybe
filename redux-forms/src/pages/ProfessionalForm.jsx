/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProfessionalForm extends Component {
  constructor() {
    super();
    this.state = {
      cargo: '',
      description: '',
      resume: '',
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
        professionalFor
        <fieldset>
          <label htmlFor="resume-textarea">
            Resumo do Currículo
            <textarea
              onChange={ this.handleChange }
              name="resume"
              id="resume-textarea"
              cols="30"
              placeholder="Resumo do currículo"
              rows="10"
            />
          </label>
          <label htmlFor="cargo">
            Cargo
            <input onChange={ this.handleChange } name="cargo" id="cargo" type="text" />
          </label>
          <label htmlFor="description">
            Descrição do cargo
            <textarea
              onChange={ this.handleChange }
              name="description"
              id="description"
              cols="30"
              placeholder="Descrição"
              rows="10"
            />
          </label>
          <button type="button">
            <Link to="/formDisplay">Enviar</Link>
          </button>
        </fieldset>
      </div>
    );
  }
}

export default ProfessionalForm;
