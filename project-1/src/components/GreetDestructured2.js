import React from 'react';

const GreetDestructured2 = props =>{
    const { name, heroName, children } = props;
    console.log(name);
    return (
        <div>
            <h3>Hello {name} a.k.a {heroName}</h3>
            {/* children also a prop we can use it like below */}
            {children}
        </div>
    )
}

export default GreetDestructured2;

