import React from 'react'

type Props = {
  onIncrease: () => void
}

export default function IncreaseCounter({ onIncrease }: Props) {
  const handleClick = () => {
    onIncrease()
  }

  return (
    <button onClick={handleClick}>Add</button>
  )
}
