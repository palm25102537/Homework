import { useEffect } from "react";
import { useState } from "react";
import {getPosts} from "../feature/post/postSlice"
import {useDispatch,useSelector} from 'react-redux'

export function usePosts() {
  
    // const [isError,setIsError] = useState(null)
    
    const posts = useSelector((state)=>state.post.post)
    const dispatch = useDispatch()
    const isLoading = useSelector((state)=>state.post.status === "pending")
    const isError = useSelector((state)=>state.post.status === "error")
  console.log(isLoading)
    useEffect(()=>{
      dispatch(getPosts())
    },[])
   
console.log(posts)
    async function handleDeletePost(postId){
    // console.log(`post id : ${postId}`)
    //   let isDelete = await fetch("http://localhost:8000/posts/"+ postId,{
    //     method: "DELETE",    
    // })
    // if(isDelete.ok){
    //   let newPosts = posts.filter(function(post){
    //      return post.id !== postId
    //   })
    //   Setposts(newPosts);
    // }
  }  

    return { posts,isLoading,handleDeletePost,isError}
}

