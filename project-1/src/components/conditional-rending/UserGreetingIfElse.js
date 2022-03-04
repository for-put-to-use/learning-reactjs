import React, { Component } from 'react'

class UserGreetingIfElse extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        // if else won't work inside JSX
        if(this.state.isLoggedIn){
            return (
                <div>Welcome Sai</div>
            )
        }
        else {
            return (
                <div>Welcome Guest</div>
            )
        }
    }
}

export default UserGreetingIfElse