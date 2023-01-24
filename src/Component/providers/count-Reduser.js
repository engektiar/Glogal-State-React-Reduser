// action type decliar kora hoisa
export const INCREMENT = "INCREMENT";
export const DECRIMENT = "DECRIMENT";
export const RESET = "RESET";
// action create kora hoisa
export const createAction = (dispatch) => ({
  increment: (value) => dispatch({ type: INCREMENT, payload: value || 1 }),
  decrement: (value) => dispatch({ type: DECRIMENT, payload: value || 1 }),
  reset: (value) => dispatch({ type: RESET }),
});
// reduser decliar kora hoia
const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT: {
      return state + action.payload;
    }
    case DECRIMENT: {
      return state - action.payload;
    }
    case RESET: {
      return 0;
    }
    default:
      return state;
  }
};
export default reducer;
