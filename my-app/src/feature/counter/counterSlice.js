import {createSlice} from "@reduxjs/toolkit"

export const counterSlice = createSlice({
    name:'counter',
    initialState: {
        count: 0 
    },
    reducers:{
        increment: (state) =>{
            state.count += 1 //immer ไม่ได้ทำการคืนค่า state กลับมาแต่ไปเปลี่ยนค่า state เลย

        },
        decrement:(state)=>{
            state.count -= 1
        },
        reset:(state)=>{
            state.count = 0
        },
        setState:(state,set)=>{
            state.count = set.payload
        },
        addByAmount:(state,amount)=>{
           state.count += amount.payload
        }
    }
})
console.log(counterSlice)
export const {increment,decrement,reset,setState,addByAmount} = counterSlice.actions;

export default counterSlice.reducer