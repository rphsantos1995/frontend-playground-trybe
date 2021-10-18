export const SET_PERSONAL_VALUE = 'SET_PERSONAL_VALUE';
export const SET_PROFESSIONAL_VALUE = 'SET_PROFESSIONAL_VALUE';

// payload: o valor que você vai utilizar no estado global

export const setPersonalValue = (data) => ({
  type: SET_PERSONAL_VALUE,
  payload: data });

export const setProfessionalValue = (data) => ({
  type: SET_PROFESSIONAL_VALUE,
  payload: data });

export default { setPersonalValue, setProfessionalValue };
