
import './App.css';
import { useState, React } from 'react';

function App() {
  const [counter,setCounter] = useState(0);
 

  function increaseCounter(paylaod) {
    setCounter(counter + paylaod);
  }

  function dicreaseCounter(paylaod) {
    if (counter > 0) {
      setCounter(counter - paylaod);

    }
  }



  return (
    <div className="App">
      <div className="counter-app">
        <h3>Counter By React</h3>
        <p>The Counter is {counter}</p>
        <button onClick={() => increaseCounter(1)}>+</button>
        <button onClick={() => dicreaseCounter(1)}>-</button> <br/>
      </div>
    </div>
  );
}

export default App;
