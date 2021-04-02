import React from 'react'

const CounterContext = React.createContext({
  count: 0,
  setCount: (_newCount: number) => {}
})

export default CounterContext
