type Props = {
  onIncrease: () => void;
};

export default function IncreaseCounter({ onIncrease }: Props): JSX.Element {
  const handleClick = () => {
    onIncrease();
  };

  return <button onClick={handleClick}>Add</button>;
}
