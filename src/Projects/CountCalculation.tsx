import  { useEffect, useState } from "react";

function CountCalculation() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => {
      return count * 2;
    }),
      [count];
  });

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
    //   </div>;
  );
}

export default CountCalculation;
