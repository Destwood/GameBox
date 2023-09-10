// /store/reducers.js

const SELECT_GAME = "SELECT_GAME";
const CLEAR_GAME = "CLEAR_GAME";

const initialState = {
  game: null, // Початковий стан гри
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_GAME:
      return {
        ...state,
        game: action.payload, // Очищаємо гру
      };

    case CLEAR_GAME:
      return {
        ...state,
        game: null, // Очищаємо гру
      };
    default:
      return state;
  }
};

export default rootReducer;
