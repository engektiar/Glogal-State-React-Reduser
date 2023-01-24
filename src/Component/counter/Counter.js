import React, { useContext } from "react";
import { CountContext } from "../providers/count-provider";
import Contloar from "./Contloar";

const Counter = () => {
  const { count } = useContext(CountContext);
  return (
    <div>
      <h2>Count = {count}</h2>
      <Contloar />
    </div>
  );
};

export default Counter;
