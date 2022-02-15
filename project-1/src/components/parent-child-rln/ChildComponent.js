import React from 'react'

export default function ChildComponent(props) {
  return (
    <div>
        <button onClick={props.greetHandler}>Greet Parent #1</button>
        <br />
        {/* To pass parameters to function/method use arrow function like below */}
        <button onClick={() => props.greetHandler('childParam1')}>Greet Parent #2</button>
    </div>
  )
}
