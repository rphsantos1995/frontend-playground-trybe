import React from 'react';
import './App.css';
import Digimon from './Digimon';

// mec.
class App extends React.Component {
  constructor() {
    super();
    this.state = { searchDigimon: '', isFetching: false, errorMessage: '', showReturn: '', };

    this.inputValue = this.inputValue.bind(this);
    this.requestDigimon = this.requestDigimon.bind(this);
  }

  inputValue(value) {
    this.setState((state) => ({
      ...state,
      searchDigimon: value,
    }));
  }

  async requestDigimon() {
    const { searchDigimon } = this.state;

    if (searchDigimon) {
      fetch(`https://digimon-api.vercel.app/api/digimon/name/${searchDigimon}`, {
        headers: {
          'User-Agent': 'ANYTHING_WILL_WORK_HERE'
        }
      })
        .then((res) => {
          return res.json()
        } )
        .then((results) =>
        this.setState((state) => ({
          ...state,
          digimon: results[0],
          errorMessage: results.ErrorMsg,
          isFetching: true,
          showReturn: results,
        }))
        );
    }
  }

  render() {
    const { digimon, searchDigimon, isFetching, errorMessage } = this.state;
    return (
      <div className="App">
        <label htmlFor="search-input">
          Digimon
          <input
            id="search-input"
            value={ searchDigimon }
            onChange={ ({ target }) => this.inputValue(target.value) }
            data-testid="search-input"
          />
        </label>
        <button
          data-testid="search-button"
          onClick={ this.requestDigimon }
          type="button"
        >
          Search Digimon
        </button>
        {
          isFetching && !errorMessage
            ? <Digimon digimon={ digimon } />
            : <h1>{errorMessage || 'Faça uma pesquisa'}</h1>
        }
      </div>
    );
  }
}

export default App;


