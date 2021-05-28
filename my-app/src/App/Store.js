import {configureStore} from "@reduxjs/toolkit"
import counterReducer from '../feature/counter/counterSlice'
import postReducer from '../feature/post/postSlice'
//เป็นที่เก็บ reducer
export default configureStore({
    reducer:{
        count: counterReducer, //บอกว่าให้ดูแค่ state ในslice 
        post : postReducer
    }
})

