import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  const [maxVote, setMaxVote] = useState(0)

  const changeSelected = () => {
    const min = 0
    const max = anecdotes.length-1
    setSelected(Math.floor(Math.random() * (max - min +1)) + min)
  }

  const addPoint = () => {
    const copy = [...points]
    copy[selected] = (copy[selected] == undefined? 0:copy[selected]) +1
    setPoints(copy)
  
    const maxVotes = Math.max(...copy)
    setMaxVote(copy.indexOf(maxVotes))
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}<br></br>
      has {points[selected]} votes<br></br>
    <button onClick={addPoint}>vote</button>
    <button onClick={changeSelected}>next anecdote</button>
    <h1>Anecdote with most votes</h1>
    {anecdotes[maxVote]}<br></br>
      has {points[maxVote]} votes<br></br>
    </div>
  )
}

export default App