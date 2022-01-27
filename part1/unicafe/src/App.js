import React, {useState} from "react";

const App = ()=>{
  const[good, setGood] = useState(0);
  const[neutral, setNeutral] = useState(0);
  const[bad, setBad] = useState(0);

  const handleClick = (reviewType) =>{
    switch(reviewType){
      case "g": return () => setGood(good + 1)       
      case "n": return () => setNeutral(neutral +1)
      case "b": return () => setBad(bad + 1)
      default: return;
    }
  }

  return(
    <>
    <h1>Give FeedBack</h1>
    <Button onClick={handleClick("g")} text="good"></Button>
    <Button onClick={handleClick("n")} text="neutral"></Button>
    <Button onClick={handleClick("b")} text="bad"></Button>
    <h1>Statistics</h1>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
    </>
  )
}

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>
export default App;
