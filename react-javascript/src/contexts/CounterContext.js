import React from 'react'

const CounterContext = React.createContext({
  count: 0,
  setCount: (newCount) => {}
})

export default CounterContext
