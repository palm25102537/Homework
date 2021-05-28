import Head from "../component/Header"
import { useState } from "react"
import Button from "../component/Button"
import Counter from "../component/Counter"
import ExtraCounter from "../component/ExtraCounter"
import {useCounter} from "../context/CounterContext"
import {useHistory} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import {increment,decrement,reset,addByAmount,setState} from '../feature/counter/counterSlice'

function CounterPage(){
    const [toggle, setToggle] = useState(true)
    // const [counter, setCounter] = useState(0) //เอามาจาก Counter.js เพื่อดึงข้อมูลมาแสดงที่อื่น
    // const [state,dispatch] = useReducer(counterByReducer,INITIAL_STATE) // 1.รับตัว setState,2.state 
    // const {state,dispatch} = useCounter()
    const [value,setValue] = useState(0)
    const history = useHistory()

    const dispatch = useDispatch()
   
    const count = useSelector((state)=>state.count.count)
    function goBack(){
        console.log(`Click`)
        history.push('/home')
    }
   
    function addAmount(){
        if(value === 0 ){
        let amount = prompt()
        dispatch(setState(parseInt(amount)))
        setValue(parseInt(amount))
        }
        dispatch(addByAmount(value))
          
    }
    return(
        <div className = "post">
            <Head>Counter Page</Head>
            {/* {toggle &&  <Counter counter={counter} setCounter={setCounter}/>} //ใช้ setState */ }
            {/* {toggle &&  <Counter counter={state.count} 
            increaseCounter={()=>dispatch({type:`increment`})}
            decreaseCounter={()=>dispatch({type:`decrement`})}
            resetCounter = {()=>dispatch({type:"reset"})}/>} */}
            {toggle &&  <Counter count={count} 
            increaseCounter={()=>dispatch(increment())} //มีค่าเท่ากับการส่งobject เข้าไป
            decreaseCounter={()=>dispatch(decrement())}
            resetCounter = {()=>dispatch(reset())}
            addCounter = {()=>addAmount()}
            value = {value}
            setValue={setValue}/>}
           <h1>Show Counter: {count}</h1>
            <Button onClick = {() => setToggle(!toggle)}>Toggle</Button>
            <Button onClick = {()=>goBack()}>Back Home</Button>
        </div>
    )
}

export default CounterPage