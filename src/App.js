import React, {useState} from "react";
import Tweet from './tweet.js'

function App() {

  const [isRed, setRed] = useState(false)
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
    setRed(!isRed); 
  }

  return(
    <div className="app">
      <button onClick={increment}>Increment</button>
      <h1 className={isRed ? 'red' : ''}>Change my color</h1>
      <h1>{count}</h1>
      <Tweet name='Parker' message='The Broncos are a wagon' likes='3'/>
      <Tweet name='Jon Snow' message='I am a bastard' likes='69'/>
      <Tweet name='Bran Stark' message='I am useless' likes='700K'/>
      <Tweet name='Mosh' message='New course out now!' likes='121'/>
    </div>
  ); 
}

export default App; 