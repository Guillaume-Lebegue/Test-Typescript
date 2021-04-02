import { useState } from 'react';
import './App.css';
import CounterContext from './contexts/CounterContext';
import Counter from './components/Counter';

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0);
  const countValue = { count, setCount };

  return (
    <CounterContext.Provider value={countValue}>
      <Counter />
    </CounterContext.Provider>
  );
}

export default App;
