import React, { useState } from 'react';

function MouseText() {
    let text = 'This is my text';
    let emptyText = '';
    let [myText, setText] = useState(text);
    let [secondText, setSecondText] = useState(emptyText);
    function mouseOn() {
        setText(emptyText);
        setSecondText(text);
    }

    function mouseOff() {
        setText(text);
        setSecondText(emptyText);
    }

    return (<div>
        <div style={{ border: "5px solid black" }} onMouseOver={mouseOn} onMouseOut={mouseOff}>
            <h1>{myText}</h1>
        </div>
        <h1 >{secondText}</h1>
    </div>);
}


export default MouseText;