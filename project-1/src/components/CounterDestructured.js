import React, { Component } from 'react'

class CounterDestructured extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        count: 0
      }
    }

    increment() {

      this.setState((prevState, props) => ({
        count: prevState.count + 1
      }));

      console.log("count with setState() call: ", this.state.count);
    }

    render() {
      const { count } = this.state; // state destructured
        return (
            <div>
            <div>Count: {count}</div>
            <button onClick={() => this.increment()}>Increment</button>
            </div>
        )
    }
}

export default CounterDestructured