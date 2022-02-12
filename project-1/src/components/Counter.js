import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        count: 0
      }
    }

    increment() {
      //We can only change state using setState() method, updates UI also
      // this.setState({
      //   count: this.state.count + 1
      // },
      // () => { // callback as setState is async call
      //   console.log("callback call", this.state.count);
      // });

      this.setState((prevState, props) => ({
        //takes previous state & props are arguments. So, we can use props if required.
        count: prevState.count + 1
      }));

      console.log("count with setState() call: ", this.state.count);

      //Without setState()) call, this won't update UI
      this.state.count += 5; //this will throw warning in console to not edit state directly
      //the value is independent of actual state when setSate is called with object as argument
      // ... instead of function
      // But, when a function is passed then the state remains constant/consistent
      // ... throughout the Component
      console.log("count without setState() call: ", this.state.count);




    }

    render() {
        return (
            <div>
            <div>Count: {this.state.count}</div>
            <button onClick={() => this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Counter