import React from 'react'

function FunctionClick() {
    
    function handler() {
        console.log("Button clicked from FunctionClick");
    }

    return (
        <div>
            <button onClick={handler}>Click</button>
        </div>
    )
}

export default FunctionClick