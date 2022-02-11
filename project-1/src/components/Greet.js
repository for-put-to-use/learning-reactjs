import React from 'react';

// function Greet() {
//     return <h1>Hello World</h1>
// }

const Greet = (props) =>{
    //name is the attribute passed to Greet element/component
    console.log(props.name);
    return ( //paranthesis when line breaks are needed
        <div>
            {/* //only one element has to be returned at a time */}
            <h3>Hello {props.name} a.k.a {props.heroName}</h3>
            {/* //like interpolation in angular */}
            {props.children}
        </div>
    )
}

export default Greet;

