type Props = {
  counter: number
}

export default function ShowCounter ({ counter }: Props) {
  return (
    <div>
      Counter is {counter}
    </div>
  )
}
