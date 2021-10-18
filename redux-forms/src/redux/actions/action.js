export const SET_PERSONAL_VALUE = 'SET_PERSONAL_VALUE';
export const SET_PROFESSIONAL_VALUE = 'SET_PROFESSIONAL_VALUE';

// payload: o valor que você vai utilizar no estado global

const setPersonalValue = (payload) => ({
  type: SET_PERSONAL_VALUE, payload });

const setProfessionalValue = (payload) => ({
  type: SET_PROFESSIONAL_VALUE, payload });

export default { setPersonalValue,
  setProfessionalValue,
};
