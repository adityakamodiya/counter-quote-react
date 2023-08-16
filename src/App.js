import React, { useState, useEffect } from "react";
import './styles.css'
import axios from "axios";


function App() {
  
  const [num,setnum]  = useState(0)
  const [ quote,setquote] = useState('')

  

  function Callapi(){
    
// var IndisabledBtn = document.querySelector('.increment')
// var DedisabledBtn = document.querySelector('.decrement')
//     console.log(IndisabledBtn)
//     IndisabledBtn.disabled = true
//     DedisabledBtn.disabled = true




   
    axios.get('https://api.quotable.io/quotes/random')
    .then((Response)=>{
    console.log(Response.data[0].content)
    setquote(Response.data[0].content)  
  })
   
    

  
  


    // IndisabledBtn.disabled = false
    // DedisabledBtn.disabled = false
  }

function Incrvalue(){
   console.log(num)
     
var IndisabledBtn = document.querySelector('.increment')
var DedisabledBtn = document.querySelector('.decrement')
// document.getElementsByClassName("increment").disabled = true
// console.log(disabledBtn)
DedisabledBtn.disabled = false


if(num==4 || num ==9)
{
  Callapi();
}
if(num<10)
{
  setnum(num+1)
  setquote('')
  // Callapi();
}

// else{
// IndisabledBtn.disabled = true
// Callapi()
//   // alert('this is max value')
// }

console.log()
}



function Decrvalue()
{
  
var DedisabledBtn = document.querySelector('.decrement')
var IndisabledBtn = document.querySelector('.increment')
    IndisabledBtn.disabled = false

    

  if(num>0){
    setnum(num-1)
    // Callapi();
    setquote('')
  }
  else 
  {
DedisabledBtn.disabled = true
  // alert('this is min value')
}
if(num==6 )
  {
    Callapi();
    console.log('show')
  }
}

  return (
    <div className="counter-widget">
      <div className="count"></div>
     { 
     (num==10)?
      <button
        className="increment" disabled onClick={Incrvalue}
      >
        Increment
      </button>: <button
        className="increment"  onClick={Incrvalue}
      >
        Increment
      </button>}
      <h1>{num}</h1>
    {   
    (num ==0)?
      <button  
        className="decrement" disabled onClick={Decrvalue}
      >
        Decrement
      </button>:<button  
        className="decrement"  onClick={Decrvalue}
      >
        Decrement
      </button>
      }

        <div className="quote">Random Quote: {quote}</div>


    </div>
  );
}

export default App;
