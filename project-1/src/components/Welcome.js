import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return ( //paranthesis when line breaks are needed
            <div>
                {/* Need to use 'this' keyword to access its props */}
                <h3>Hello {this.props.name} a.k.a {this.props.heroName}</h3>
                {/* //like interpolation in angular */}
                {this.props.children}
            </div>
        )
    }
}

export default Welcome