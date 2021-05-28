import { useState, useEffect}  from 'react';
import React from 'react';


function Counter({count,increaseCounter,decreaseCounter,resetCounter,addCounter}) {
   
   
    useEffect(function(){
        console.log("effect")
    })
    useEffect(() => {
        console.log("Effect is running")

        return () =>{
            console.log("clean up")
        }
    },[count])
   
    // function addAmount(){
    //     if(value === 0 ){
    //     let amount = prompt()
    //     setValue(parseInt(amount))
    //     }
    // }
  
    return (
        <div>
            <h1>{count}</h1> 
            {/* <button onClick={function() {return props.setCounter(props.counter + 1)}}>add</button>
            <button onClick={function() {return props.setCounter(props.counter - 1)}}>subtract</button>
            <button onClick={function() {return props.setCounter(0)}}>reset</button> */}
            <button onClick={() => increaseCounter()}>add</button>
            <button onClick={()=> decreaseCounter()}>subtract</button>
            <button onClick={()=> resetCounter()}>reset</button>
            <br/>
             <br/>
            <button onClick={() => addCounter()}>Add counter by amount</button>
            
        </div>
    )


}

export default Counter