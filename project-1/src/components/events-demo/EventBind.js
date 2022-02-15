import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        message: "Hello"
      }

    // Approach #4
    //  {/* Above one is Best Approach as per React Docs - Click #4 */}
    //   this.handler = this.handler.bind(this);  
    }

    // Approach #1, #2, #3, #4
    // handler() {
    //     this.setState((prevState, props) => ({
    //         message: "Hi"
    //     }));
    //     // this inside event handler shares this keyword to window object
    //     // https://itnext.io/the-this-keyword-in-javascript-demystified-c389c92de26d
    // }

    // Approach #5
    handler = () => {
        this.setState((prevState, props) => ({
            message: "Hi"
        }));
    }

    render() {
        return (
        <div>
            <div>{this.state.message}</div>

            {/* Approach #1 - Won't work unless some binding is done or 'handler' itself is an arrow fn */}
            <button onClick={this.handler}>Click #1</button>
            {/* // this inside event handler shares this keyword to window object */} 
            {/* // https://itnext.io/the-this-keyword-in-javascript-demystified-c389c92de26d */}

            {/* Approach #2 - binding at the time of calling */}
            <button onClick={this.handler.bind(this)}>Click #2</button>
            {/* The above binding is costly as it will render binding for each render */}

            {/* Approach #3 - handler called using arrow function */}
            <button onClick={() => this.handler()}>Click #3</button>
            {/* Above one is less costly but still has some performance issues */}

            {/* Approach #4 - Here handler is binded to this keyword inside constructor so binding happens only once */}
            <button onClick={this.handler}>Click #4</button>
            {/* Above one is Best Approach as per React Docs, here binding is done inside Constructor */}

            {/* Approach #5 - similar to Approach #3 */}
            <button onClick={this.handler}>Click #5</button>
            {/* handler method will be a variable holding an arrow function */}
        </div>
        )
    }
}

export default EventBind