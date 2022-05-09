import { CHANGE_FIELD } from '../actions/user';

export const initialState = {
  list: [],
  inputEmail: '',
  inputPassword: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
