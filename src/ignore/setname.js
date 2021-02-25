import React, { useState } from 'react';

function SetName(){
  let [name, setName] = useState('ur name');
  function changeName (){
    let newname= document.querySelector('input').value;
    if(newname){
      setName(newname);
    }
  }
  return (
    <div className="App">
      <input type='text' onChange={changeName}></input>
      <h1>{name}</h1>
    </div>
  );
}

export default SetName;