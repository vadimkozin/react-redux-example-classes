// reducer.jsx
import {extend} from './utils';
import {ActionType} from './actions';

const initialState = {
  phones: [`iPhone 7+ Plus`, `Samsung Galaxy A5+`],
};

// reducer - получает действия и изменяет состояние хранилища
const reducer = function (state = initialState, action) {

  switch (action.type) {
    case ActionType.SET_STATE:
      return action.state;

    case ActionType.ADD_PHONE:
      return extend(state,
          {phones: [...state.phones, action.payload]});

    case ActionType.DELETE_PHONE:
      return extend(state,
          {phones: state.phones
            .filter((phone) => phone !== action.payload)});

    default:
      return state;
  }

};

export default reducer;
