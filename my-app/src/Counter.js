import {useState} from "react";


function Counter(){
    let [counter,setCounter] = useState(0)
    //Array Destructuring//[state, setState(change state)]
    function hadleAddCounter() {
        setCounter(counter++)
        
        console.log("Add counter")
    }
    function hadleSubtractCounter() {
       
        setCounter(counter--)
        console.log("Subtract counter")
         
    }
    function hadleResetCounter () {
        setCounter(0)
        console.log("Reset counter")
    }
   return <div>
       <h1>Counter</h1>
        <h1 >{counter}</h1>
        <button onClick = {hadleAddCounter}>+</button> 
         &nbsp;	
        <button onClick = {hadleSubtractCounter}>-</button> 
         &nbsp;	
        <button onClick = {hadleResetCounter}>Reset</button> 
    </div>
}

export default Counter