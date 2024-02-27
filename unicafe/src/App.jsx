import { useState } from 'react'

const Button = ({handleClick, text}) => {
return(
  <>
    <button onClick={handleClick}>
      {text}
    </button>
  </>
)
}

const StatisticLine = (props) => {
  return (
    props.val == "positive"?
      <tr>
        <td>{props.val}</td> 
        <td>{props.num} %</td>
      </tr>
    : 
      <tr>
        <td>{props.val}</td> 
        <td>{props.num}</td>
      </tr>
    )
}

const Statistics = (props) => {  
  if(props.good || props.neutral || props.bad){
    return(
      <table>
        <tbody>
        <StatisticLine val="good" num={props.good}/>
        <StatisticLine val="neutral" num={props.neutral}/>
        <StatisticLine val="bad" num={props.bad}/>
        <StatisticLine val="all" num={props.total}/>
        <StatisticLine val="average" num={(props.good-props.bad)/(props.total == 0? 1:props.total)}/>
        <StatisticLine val="positive" num={props.good/(props.total == 0? 1:props.total)*100}/>        
        </tbody>
      </table>
    )
  }else{
    return(
      <>no feedback given</>
    )
  }
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  let avgAux = 0

  const handleGood = () => {
    const goods = good + 1
    setGood(goods)
    setTotal(goods+neutral+bad)
    avgAux +1
  }

  const handleNeutral = () => {
    const neutrals = neutral + 1
    setNeutral(neutrals)
    setTotal(good+neutrals+bad)
  }

  const handleBad = () => {
    const bads = bad + 1
    setBad(bads)
    setTotal(good+neutral+bads)
    avgAux -1
  }
  
  return (
    <>      
      <h1>Give Feedback</h1>
      <Button handleClick={handleGood} text='Good'/>
      <Button handleClick={handleNeutral} text='Neutral'/>
      <Button handleClick={handleBad} text='Bad'/>
      <h1>Statistics</h1>     
        <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
    </>
  )
}

export default App