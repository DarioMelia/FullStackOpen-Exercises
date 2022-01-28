import React, { useState } from "react";

const Button = ({ onClick, content }) => (
  <button onClick={onClick}>{content}</button>
);
const Display = ({ counter }) => <h1>{counter}</h1>;
const ClickHistory = ({ allClicks }) => {
  if (allClicks.lenght === 0) return <div>Click left or right</div>;
  return <h3>{allClicks.join(" ")}</h3>;
};

function App() {
  const [counter, setCounter] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const increaseByOne = () => {
    if (isTimerRunning === false) setCounter(counter + 1);
  };
  const decreaseByOne = () => {
    if (isTimerRunning === false) setCounter(counter - 1);
  };
  const startTimer = () => setIsTimerRunning(true);
  const stopTimer = () => setIsTimerRunning(false);

  let timer;
  if (isTimerRunning === true)
    timer = setTimeout(() => setCounter(counter + 1), 1000);
  else clearTimeout(timer);

  // CLICKS

  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAllClicks] = useState([]);


  const handleClicks = click => {
    if(click==="left"){
      return ( () => {
        setLeft(left + 1)
        setAllClicks(allClicks.concat("L"))}
      )
    }else{
      return( ()=>{
        setRight(right + 1);
        setAllClicks(allClicks.concat("R"));
      }) 
    }
  }

  return (
    <>
      <Display counter={counter} />
      <Button onClick={decreaseByOne} content="-"></Button>
      <Button onClick={increaseByOne} content="+"></Button>
      <Button onClick={startTimer} content="Start Timer"></Button>
      <Button onClick={stopTimer} content="Stop Timer"></Button>
      <br/><br/><br/>
      {left}
      <Button onClick={handleClicks("left")} content="Left"></Button>
      <Button onClick={handleClicks("right")} content="Right"></Button>
      {right}
      <ClickHistory allClicks={allClicks}></ClickHistory>
      
    </>
  );
}

export default App;
