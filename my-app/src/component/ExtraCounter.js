import React from "react"
import Head from "./Header"
import Button from "./Button"

class ExtraCounter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            counter : 0
        };
        // this.handleAddCounter = this.handleAddCounter.bind(this) ไม่เขียน Arrow function ต้อง bind this ตลอด
    }
    componentDidMount() { 
        console.log("Mounting")
    }
    componentDidUpdate() {
        console.log("Updated")
    }
    componentWillUnmount(){
        console.log("Component is about to die")
    }
    handleAddCounter = () =>{
            // console.log(this)
            console.log("ADD")
            this.setState(function(state){
            return { counter: state.counter + 1}
        })
    }
    handleSubtractCounter = () => {
        console.log("SUBTRACT")
        this.setState(function(state){
            return { counter: state.counter - 1}
    })
}
    handleResetCounter = () => {
        console.log("RESET")
        this.setState(function(state){
            return { counter: 0}
    })
    }
    render(){
        return(
            <div>
                <Head>Counter : {this.state.counter}</Head>
                <Button onClick ={this.handleAddCounter}>Add</Button>
                <Button onClick ={this.handleSubtractCounter}>Subtract</Button>
                <Button onClick ={this.handleResetCounter}>Reset</Button>
            </div>
        )
    }
}

export default ExtraCounter