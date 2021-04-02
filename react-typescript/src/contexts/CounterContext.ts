import React from 'react';

export interface CounterContextData {
  count: number;
  setCount: (_: number) => void;
}

const counterContextDefault: CounterContextData = {
  count: 0,
  setCount: () => null,
};

const CounterContext = React.createContext<CounterContextData>(counterContextDefault);

export default CounterContext;
