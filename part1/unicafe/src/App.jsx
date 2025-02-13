import { useState } from 'react'
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const stats = [good, neutral, bad]

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Statistics = (props) => {
  if (props.stats[0] + props.stats[1] + props.stats[2] === 0) {
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    )
  }
  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text='good' value={props.stats[0]}/>
          <StatisticLine text='neutral' value={props.stats[1]}/>
          <StatisticLine text='bad' value={props.stats[2]}/>
          <StatisticLine text='all' value={props.stats[0] + props.stats[1] + props.stats[2]}/>  
          <StatisticLine text='average' value={(props.stats[0] - props.stats[2]) / (props.stats[0] + props.stats[1] + props.stats[2])}/>
          <StatisticLine text='positive' value={props.stats[0] / (props.stats[0] + props.stats[1] + props.stats[2]) * 100 + ' %'}/>
        </tbody>
      </table>
    </>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

  return (
    <div>
      <h1>give feedback</h1>
      <Button text='good' handleClick={() => setGood(good + 1)}/>
      <Button text='neutral' handleClick={() => setNeutral(neutral + 1)}/>
      <Button text='bad' handleClick={() => setBad(bad +1)}/>
      <Statistics stats = {stats}/>
    </div>
  )
}

export default App