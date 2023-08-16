import React, { useState, useEffect } from "react";
import './styles.css'
import axios from "axios";


function App() {
  
  const [num,setnum]  = useState(0)
  const [ quote,setquote] = useState('')

  

  function Callapi(){
    
var IndisabledBtn = document.querySelector('.increment')
var DedisabledBtn = document.querySelector('.decrement')
    console.log(IndisabledBtn)
    IndisabledBtn.disabled = true
    DedisabledBtn.disabled = true

    axios.get('https://api.quotable.io/quotes/random')
    .then((Response)=>{
    console.log(Response.data[0].content)
    setquote(Response.data[0].content)  
    })
    IndisabledBtn.disabled = false
    DedisabledBtn.disabled = false
  }

function Incrvalue(){
     
var IndisabledBtn = document.querySelector('.increment')
// document.getElementsByClassName("increment").disabled = true
// console.log(disabledBtn)



if(num==4)
{
  Callapi();
}
if(num<10)
{
  setnum(num+1)
  
}

else{
IndisabledBtn.disabled = true
  // alert('this is max value')
}

}



function Decrvalue()
{
  
var DedisabledBtn = document.querySelector('.decrement')
    


if(num==6)
  {
    Callapi();
    console.log('show')
  }
  if(num>0){
    setnum(num-1)
  }
  else 
  {
DedisabledBtn.disabled = true
  // alert('this is min value')
}
}

  return (
    <div className="counter-widget">
      <div className="count"></div>
      <button
        className="increment"  onClick={Incrvalue}
      >
        Increment
      </button>
      <h1>{num}</h1>
      <button
        className="decrement" onClick={Decrvalue}
      >
        Decrement
      </button>

        <div className="quote">Random Quote: {quote}</div>


    </div>
  );
}

export default App;
