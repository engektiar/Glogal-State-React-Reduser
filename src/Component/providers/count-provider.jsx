import { createContext, useReducer } from "react";
import reducer, { createAction } from "./count-Reduser";
const CountContext = createContext();

const CounterProvider = (props) => {
  const [count, dispatch] = useReducer(reducer, 0);
  const actions = createAction(dispatch);
  return <CountContext.Provider value={{ count, ...actions }}>{props.children}</CountContext.Provider>;
};
export { CounterProvider, CountContext };
