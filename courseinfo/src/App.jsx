const Header = (props) => {
return(
<>
  <h1>{props.course}</h1>
</>
)
}

const Content = (props) => {
return(
  <div>
  {props.parts.map((value,index) =>(
    <div key={index}>
      <Part part={value.name} exercise={value.exercises} />
    </div>
    ))}
  </div>
)
}

const Total = (props) => {
  const totalT = props.total.reduce((acc, value) => acc + value.exercises,0)
return(
  <>
    <p>Number of exercises: {totalT}</p>
  </>
)
}

const Part = (props) =>{
  return(
    <>
    <p>{props.part}</p>
    <p>{props.exercise}</p>
  </>
  )
}

const App = () => {
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
  }]
}

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total total={course.parts}/>
    </div>
  )
}

export default App