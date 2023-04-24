import useCounter from "../hooks/use-counter";
import Button from "../components/Button";


function CounterPage({ intitialCount }) {
  const { count, increment } = useCounter(intitialCount);

  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
}

export default CounterPage;
