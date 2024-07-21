import { useState } from 'react';
import './App.css'

function App() {
const initialCount = 0;

const [counter, setCounter] = useState(0);


const increaseCount = () => {
  if(counter < 20) {
    setCounter(
      (prevCounter) => prevCounter + 1
    )
    setCounter(
      (prevCounter) => prevCounter + 1
    )
    setCounter(
      (prevCounter) => prevCounter + 1
    )
  } else {
    alert("Counter can't be greater than 20")
  }
}

const decreaseCount = () => {
  if(counter > 0) {
    setCounter(
      (prevCounter) => prevCounter - 1
    )
  } else {
    alert("Counter can't be less than 0")
  }
}

const reset = () => {
  setCounter(
    initialCount
  )
}

  return (
    <>
      <h1>Counter-Demo01</h1>
      <h2>{counter}</h2>
      <button onClick={increaseCount}>Increase</button> <br/>
      <button onClick={decreaseCount}>Decrease</button> <br/>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
