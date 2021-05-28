import {createSlice} from "@reduxjs/toolkit"

const postSlice = createSlice({
    name:"post",
    initialState:{
        post:[],
    },
    reducers:{
        postsError:(state)=>{
            state.status = 'error'
        },
        postsLoading:(state) =>{
            if(state.status === 'idle'){
            state.status = "pending"
            }
            
        },
        postsReceived:(state,action)=>{
           if(state.staus === 'pending'){
            state.status = "idle"
           
           }
           state.post = action.payload
             
        }
    }
})

export const {postsReceived,postsLoading,postsError} = postSlice.actions



   const getPosts = ()=> async (dispatch)=>{//Create new async function in order to use fetch as await because we have to wait
    //Post data from server
        dispatch(postsLoading())
     let response = await fetch("http://localhost:8000/posts")
     let post = await response.json();
     console.log(post)
     dispatch(postsReceived(post.data))
    
      
    }

   export { getPosts }

   export default postSlice.reducer