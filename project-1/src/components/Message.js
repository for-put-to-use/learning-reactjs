import React, { Component } from 'react';

// Demonstrates State of a Component
class Message extends Component {

    constructor() {
        super(); //required to make base class's constructor ie., Component

        this.state = { //this.state is the reserved in React it is meant for state
            message: 'Welcome visitor'
        }
    }

    changeMessage() {
        this.setState({ //setState is reserved function by React, it is meant for same
            message: 'Thank you for subscribing!'
        })
    }

    render() {
        return (
            <div>
                <h3>
                    {this.state.message}
                </h3>
                {/* click event of button */}
                <button onClick={()=> this.changeMessage()}>
                    Subscribe
                </button>
            </div>
        )
    }
}

export default Message