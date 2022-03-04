import React, { Component } from 'react'

class UserGreetingTernaryOp extends Component {
    // Ternary Operator can be used inside JSX
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        return (
            this.state.isLoggedIn? 
            <div>Welcome Sai</div> : 
            <div>Welcome Guest</div>
        )
    }
}

export default UserGreetingTernaryOp