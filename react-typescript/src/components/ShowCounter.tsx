type Props = {
  counter: number;
};

export default function ShowCounter({ counter }: Props): JSX.Element {
  return <div>Counter is {counter}</div>;
}
