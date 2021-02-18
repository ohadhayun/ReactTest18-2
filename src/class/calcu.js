import React, { useState } from 'react';

function Calculator(){
    let [count, setCount] = useState(0);
    function inc(){
        setCount(count + 1)
    }
    function dec(){
        setCount(count - 1)
    }
    function reset(){
        setCount(0)
    }
    return (<div>
    <button onClick={inc}>+</button>
    <button onClick={dec}>-</button>
    <button onClick={reset}>reset</button>
    <h1>{count}</h1>

    </div>)
}

export default Calculator;