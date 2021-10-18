// eslint-disable-next-line import/named
import { SET_PROFESSIONAL_VALUE, SET_PERSONAL_VALUE } from '../actions/action';

const INITIAL_STATE = {
  personalInputs: {
    nomezin: '',
    email: '',
    CPF: '',

  },
  professionalInputs: {
    cargo: '',
    description: '',
    resume: '',
  },
};

function myReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_PROFESSIONAL_VALUE:
    return { ...state, professionalInputs: action.payload };
  case SET_PERSONAL_VALUE:
    return { ...state, personalInputs: action.payload };
  default:
    return state;
  }
}

export default myReducer;
