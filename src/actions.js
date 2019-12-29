export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCH_CHARACTERS_FULLFIILED = 'FETCH_CHARACTERS_FULLFIILED';

export const fetchCharacters = searchTerm => {
  return {
    type: FETCH_CHARACTERS,
    payload: {
      searchTerm,
    },
  };
};

export const fetchCharactersFullFilled = payload => {
  console.log(payload);
  return {
    type: FETCH_CHARACTERS_FULLFIILED,
    payload,
  };
};
