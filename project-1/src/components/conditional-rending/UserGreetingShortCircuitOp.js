import React, { Component } from 'react'

class UserGreetingShortCircuitOp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        return (
            this.state.isLoggedIn && <div>Welcome Sai</div> ||
            !this.state.isLoggedIn && <div>Welcome Guest</div>
        )
    }
}

export default UserGreetingShortCircuitOp