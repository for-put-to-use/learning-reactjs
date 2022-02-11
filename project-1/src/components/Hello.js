import React from 'react'

const Hello = () => {
    // JSX syntax 
    //      > inturn uses React library from 'react'
    //      > Easy to use
    // return (
    //     <div id='hello' className='someClass'>
    //         <h1>I am using JSX</h1>
    //     </div>
    // )

    // JS syntax
    return React.createElement(
        'div', 
        {
            id: 'hello' , 
            // This is pair value for attributes
            className: 'someClass'
            // 'class' is a reserved word in JS 
            // so we need to use 'className' in React
        }, 
        React.createElement(
            'h1', 
            null, 
            'I am using Normal JS'
        )
    )
}

export default Hello