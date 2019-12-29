import { combineReducers } from 'redux';
import { FETCH_CHARACTERS_FULLFIILED } from './actions';

const charactersReducer = (characters = [], action) => {
  console.log(action);
  if (action.type === FETCH_CHARACTERS_FULLFIILED) {
    return action.payload;
  }
  return characters;
};

export default combineReducers({
  characters: charactersReducer,
});
