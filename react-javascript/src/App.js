import './App.css'
import CounterContext from './contexts/CounterContext'
import Counter from './components/Counter'
import { useState } from 'react'

function App () {
  const [count, setCount] = useState(0)
  const countValue = { count, setCount }

  return (
    <CounterContext.Provider value={countValue}>
      <Counter />
    </CounterContext.Provider>
  )
}

export default App
