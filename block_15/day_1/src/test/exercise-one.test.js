
import React from 'react';
import { fireEvent, render, screen, queryByText, cleanup } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';


// beforeEach(cleanup);
// done


describe('Testando a aplicação, testando input', () => {
  

  test('Verificando se o label e o input existem no documento', () => {
    const { getByLabelText, getByText, getByRole } = render(<App />)
    const inputType = getByLabelText('Tarefa:');
  const btnText = getByText('Adicionar');
  const randomText = 'myrandomstring';
    expect(inputType).toBeInTheDocument();
    expect(btnText).toBeInTheDocument();

  });

  test(`Ao clicar no botão, é necessário adicionar o que o usuário digitou à lista`, () => {
    // Use o userEvent, para simular a digitação do usuário e o clique.
  // userEvent.type(inputType, randomText);
  // userEvent.click(btnText);
  const { getByLabelText, queryByText, getByText } = render(<App />);
  const inputType = getByLabelText('Tarefa:');
  const btnText = getByText('Adicionar');
  const randomText = 'myrandomstring';

  fireEvent.change(inputType, { target: { value: randomText } });
  expect(screen.queryByText(randomText)).not.toBeInTheDocument();
  fireEvent.click(btnText);
  expect(queryByText(randomText)).toBeInTheDocument();

  });

});
