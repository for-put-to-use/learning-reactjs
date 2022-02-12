import React, { Component } from 'react';

class WelcomeDestructured extends Component {
    render() {
        const {name, heroName, children} = this.props;
        return (
            <div>
                <h3>Hello {name} a.k.a {heroName}</h3>
                {children}
            </div>
        )
    }
}

export default WelcomeDestructured