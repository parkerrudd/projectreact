import React from "react";
import Tweet from './tweet.js'

function App() {

  return(
    <div className="app">
      <Tweet name='Parker' message='The Broncos are a wagon' likes='3'/>
      <Tweet name='Jon Snow' message='I am a bastard' likes='69'/>
      <Tweet name='Bran Stark' message='I am useless' likes='700K'/>
      <Tweet name='Mosh' message='New course out now!' likes='121'/>
    </div>
  ); 
}

export default App; 