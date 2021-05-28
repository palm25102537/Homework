/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {useParams} from "react-router-dom"
import { useEffect } from "react";
import { useState } from "react"
import Button from "../component/Button"
import Head from "../component/Header"
import {useHistory} from "react-router-dom"
import {usePosts} from '../util/Post'
 



function PostPage() {

    const{posts} = usePosts()

   
    let history = useHistory()
    const [post,setPost] = useState({})

    let parameter = useParams();

    function Backpage(){
        history.push("/home")
    }

useEffect(function(){
    async function getPostById(){
        let isGetpost = await fetch("http://localhost:8000/posts/" + parameter.postId);
        let postData = await isGetpost.json();
           
        setPost(postData.data)
    } getPostById()
  
},[])
    return (
    <div>
        <div className='postapp-header'>
            <Head primary = {true}>Post App</Head>  
        </div>
        <div className='post-header'>
            <h1>Post Page</h1>  
        </div>
        <div className = 'post-content-box'>
                <h1 className = "post-title">{post.title}</h1>
                <p className ="post-content">{post.content}</p>
            </div>
            <hr/>
            <h1>Post List</h1>
            {posts.map((item,index)=>{
                return(
                    <h3 key = {index}>{item.content}</h3>
                )
            })}
            <div>
            <Button primary ={true} onClick = {Backpage}>Back</Button>
            </div>
    </div>

    



    )
}

export default PostPage