import React from 'react'

export default function IncreaseCounter ({ onIncrease }) {
  const handleClick = () => {
    onIncrease()
  }

  return (
    <button onClick={handleClick}>Add</button>
  )
}
