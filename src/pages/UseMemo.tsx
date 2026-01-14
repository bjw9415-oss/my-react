import React from 'react';


function expensiveCalculation(num: number): number {
  console.log('Performing expensive calculation...');
  for (let i = 0; i < 10000; i++) {
    num += 1;
  }
  return num;
}

export default function UseMemo(){
    const [count, setCount] = React.useState(0);
    const [age, setAge] = React.useState(20);

    const memoizedValue = React.useMemo(()=>{
        return count * 2;
    },[count])
    const value = React.useMemo(() => expensiveCalculation(count), [count]);
    return (
    <div>
      <h1>UseMemo Example Page</h1>
      <button onClick={() => setCount(count + 1)}>Count Up</button>
      <button onClick={() => setAge(age + 1)}>Age Up</button>
      <p>Count: {count}</p>
      <p>Age: {age}</p>
      <p>Memoized Value (count * 2): {memoizedValue}</p>
      <p>Expensive Calculation Result: {value}</p>
    </div>
  );
}