import React, { useContext } from 'react'
import CounterContext from '../contexts/CounterContext'
import ShowCounter from './ShowCounter'
import IncreaseCounter from './IncreaseCounter'

export default function Counter() {
  const { count, setCount } = useContext(CounterContext)

  const handleIncrease = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <ShowCounter counter={count}/>
      <IncreaseCounter onIncrease={handleIncrease}/>
    </div>
  )
}
