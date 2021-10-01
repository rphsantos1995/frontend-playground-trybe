import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event'

describe('Teste da aplicação toda', () => {

    afterEach(() => {
      jest.clearAllMocks();
    });

    function setupFetchStub(data) {
      return function fetchStub(_url) {
        return new Promise((resolve) => {
          resolve({
            json: () =>
              Promise.resolve({
                data,
              }),
          })
        })
      }
    }

  it('Testar o retorno da apifakecall na aplicação', async () => {

    const pokeSeachResult = {
      name: "Patamon",
      img: "https://digimon.shadowsmith.com/img/patamon.jpg",
      level: "Rookie"};

   // Useful to mock async functions in async tests:
    const asyncMock = jest.fn().mockResolvedValue(pokeSeachResult);
    const result = await asyncMock();
   // https://jestjs.io/pt-BR/docs/mock-function-api#mockfnmockresolvedvaluevalue

     // ---- TRYBE -COURSE 15.2
      // jest.spyOn(global, "fetch")
      // global.fetch.mockResolvedValue({
      //   json: jest.fn().mockResolvedValue(pokeSeachResult),
      // });

      // global.fetch = jest.fn(async () => ({
      //   json: async () => pokeSeachResult
      // }));
      // ---- TRYBE -COURSE 15.2

      
      const {getByTestId, getByText, findByText } = render(<App />);


      jest.spyOn(global, "fetch").mockImplementation(setupFetchStub(pokeSeachResult))
      // https://digimon-api.vercel.app/api/digimon/name/
      const res = await fetch('https://digimon-api.vercel.app/api/digimon/name/patamon')
      const json = await res.json()
      expect(json).toEqual({ data: pokeSeachResult
      })

     expect(asyncMock).toHaveBeenCalledTimes(1);
     expect(global.fetch).toHaveBeenCalledTimes(1);
     expect(getByText('Digimon')).toBeInTheDocument();
     expect(getByText('Search Digimon')).toBeInTheDocument();
    //  expect(getByText('Patamon')).toBeInTheDocument();
     await findByText('Patamon');


  });

  it ('Testa o input do campo search', ()=> {

    const { getByTestId } = render(<App />);
    const inputNome = getByTestId('search-input');
    expect(inputNome).toHaveValue('');
    // fireEvent.change(inputNome, { target: { value: 'Estudante da Trybe' } });
    userEvent.type(inputNome, 'Estudante da Trybe')
    expect(inputNome).toHaveValue('Estudante da Trybe');

  })
  

});
