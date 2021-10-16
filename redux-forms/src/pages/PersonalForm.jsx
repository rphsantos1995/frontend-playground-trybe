import React, { Component } from 'react';
import states from './Estados';

class PersonalForm extends Component {
  render() {
    return (
      <div>
        PersonalForm
        <fieldset>
          {/* <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" /> */}
          <select name="Estados" id="select-estados">
            { states.map((item, index) => (
              <option
                key={ index }
                value={ item }
              >
                {item}
              </option>)) }
          </select>
        </fieldset>
      </div>

    );
  }
}

export default PersonalForm;
