import React from 'react'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age}</p>
    </div>
  )
}

class Rectangle {
  constructor(height, width) {
    this.name = 'Rectangle'
    this.height = height
    this.width = width
  }
  get area() {
    return this.height * this.width    
  }

  set area(value) {
    this._area = value
  }
}


const App = () => {
  const now = new Date()
  const age = 12
  return (
    <div>
      <p>Hello World, it is {now.toString()}</p>
      <Hello name="Jaska" age={age+1}/>
      <Hello name="kyylikki" age={age}/>
    </div>
  )
}

export default App;
