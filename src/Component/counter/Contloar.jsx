import React, { useContext } from "react";
import { CountContext } from "../providers/count-provider";

const Contloar = () => {
  const { increment, decrement, reset } = useContext(CountContext);
  return (
    <div>
      <button onClick={() => increment()}>increment</button>
      <button onClick={() => decrement()}>decrement</button>
      <button onClick={() => reset()}>Rest</button>
    </div>
  );
};

export default Contloar;
