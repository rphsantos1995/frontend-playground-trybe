/* eslint-disable react/no-unused-state */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import states from './Estados';
import setPersonalValue from '../redux/actions/action';

class PersonalForm extends Component {
  constructor() {
    super();
    this.state = {
      nomezin: '',
      email: '',
      CPF: '',

    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onSubmitForm() {
    const { history, personalDispatchSetValue } = this.props;
    // Disparamos a nossa action através da função importada
    // de actions.js, que apelidamos de dispatchSetValue
    personalDispatchSetValue(this.state);
    history.push('/professionalform');
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
          <button
            id="submit-btn"
            type="button"
            onClick={ this.onSubmitForm }
          >
            Enviar
          </button>

        </fieldset>
      </div>

    );
  }
}

PersonalForm.propTypes = {
  personalDispatchSetValue: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

// Serve pra enviar o estado do componente para o estado global!
const mapDispatchToProps = (dispatch) => ({
  personalDispatchSetValue: (data) => dispatch(setPersonalValue(data)),
});

// Serve pra connectar o componente com o estado global.
export default connect(null, mapDispatchToProps)(PersonalForm);
