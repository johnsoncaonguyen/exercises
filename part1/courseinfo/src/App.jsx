import { useState } from 'react'

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}
const Header = (props) => {
  return <h1>{props.course.name}</h1>
}
const Content = (props) => {
  return (
    <div>
      <Part part = {props.parts[0]}/>
      <Part part = {props.parts[1]}/>
      <Part part = {props.parts[2]}/>
    </div>
  )
}
const Total = (props) => {
  let total = 0
  props.parts.forEach(value => {
    total += value.exercises
  })
  return (
    <p>Number of exercises {total}</p>
  )
}
const App = () => {
  const now = new Date()
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    
    <div>
      <Header course={course} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App