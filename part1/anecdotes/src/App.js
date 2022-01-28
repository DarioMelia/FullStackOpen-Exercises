import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0);
  const [points,setPoints] = useState(new Array(anecdotes.length).fill(0));

  // %% FUNCTIONS %%
  const randomIdx=(min, max) => Math.floor(Math.random() * (max - min)) + min;
  const randomQuote = () => setSelected(randomIdx(0, anecdotes.length));
  const vote = () => setPoints(points.map((point, i) => {
    if(i === selected) return point + 1;
    return point;
  }));
  const mostVotes = ()=>{
    const mostVoted = {
      points:0,
      i:0
    }
    points.forEach((points, i) => {
      if(points > mostVoted.points) {
        mostVoted.points = points;
        mostVoted.i = i;
      }
    })
    return mostVoted.i
  }
  
  
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} points={points[selected]}/>
      <Button onClick={vote} text="vote"/>
      <Button onClick={randomQuote} text="Next anecdote"/>
      <br/>
      <h1>Anecdote with most votes</h1>
      <Anecdote anecdote={anecdotes[mostVotes()]} points={points[mostVotes()]}/>
    </div>
  )
}

// %% COMPONENTS %%
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
const Anecdote = ({anecdote, points}) => (
  <>
      <h2>{anecdote}</h2>
      <p>Has {points} votes</p>
  </>
)

export default App
