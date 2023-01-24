import React from "react";
import { CounterProvider } from "../providers/count-provider";
import Counter from "./Counter";

const CountMain = () => {
  return (
    <CounterProvider>
      <div>
        <h2> Contex + Hooks </h2>
        <Counter />
      </div>
    </CounterProvider>
  );
};

export default CountMain;
