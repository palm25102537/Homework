import React,{useReducer, useContext} from 'react'

const CounterContext = React.createContext();

const INITIAL_STATE = {count: 0};


function counterByReducer(state,action){
        
    switch(action.type){
        
        case "increment": return{count:state.count+1};//จะไปยุ่งกับ state โดยคืนค่าเป็น OBJ ก้อนใหม่
        case "decrement": return{count:state.count-1};
        case "reset": return{count:0}
        
    }
    }

function CounterProvider(props){
        const [state,dispatch] = useReducer(counterByReducer,INITIAL_STATE)
        const contextProvide = {state,dispatch}
        return(
            <CounterContext.Provider value ={contextProvide}>{props.children}</CounterContext.Provider>
        )
       }

function useCounter() {
        const context = useContext(CounterContext);
        if (context === undefined) {
          throw new Error("useCounter must use under CounterProvider");
        }
        return context;
      }
export  {CounterProvider,useCounter}