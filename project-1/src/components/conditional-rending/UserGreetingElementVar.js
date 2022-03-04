import React, { Component } from 'react'

class UserGreetingElementVar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        let message = "";
        if(this.state.isLoggedIn){
            message = "Sai";
        }
        else {
            message = "Guest";
        }
        return (
                <div>Welcome {message}</div>
        )
    }
}

export default UserGreetingElementVar