export const selectGame = (game) => {
  return {
    type: "SELECT_GAME",
    payload: game,
  };
};
export const clearGame = () => {
  return {
    type: "CLEAR_GAME",
  };
};
