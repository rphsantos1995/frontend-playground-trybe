/* eslint-disable react/no-unused-state */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import setProfessionalValue from '../redux/actions/action';

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

  onSubmitForm() {
    const { history, professionalDispatchSetValue } = this.props;
    // Disparamos a nossa action através da função importada
    // de actions.js, que apelidamos de dispatchSetValue
    professionalDispatchSetValue(this.state);
    history.push('/professionalform');
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

ProfessionalForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  professionalDispatchSetValue: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  professionalDispatchSetValue: (payload) => dispatch(setProfessionalValue(payload)),
});

export default connect(null, mapDispatchToProps)(ProfessionalForm);
