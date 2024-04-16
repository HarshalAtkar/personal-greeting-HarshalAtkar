
import React from "react";
import './../styles/App.css';
import { useState } from "react/cjs/react.production.min";

const App = () => {
  const [state,setState]=useState("");

  const coppy =(event)=>{
    setState(event.target.value);
  }
  return (
    <div>
        <input onKeyUp={coppy}/>
        <p>{state}</p>
    </div>
  )
}

export default App
