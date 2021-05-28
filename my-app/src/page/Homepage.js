/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Button from "../component/Button"
import { useCounter } from "../context/CounterContext"
import '../App.css';
import { usePosts } from '../util/Post'


function Homepage() {

  // const [isError, setIsError] = useState(null);
  const { state } = useCounter()
  const { posts, handleDeletePost, isLoading, isError } = usePosts()
  let history = useHistory();

  function handleAddPostClick() {
    history.push("/addpost")
    console.log(`add post`)
  }

  function handleSeePost(postId) {
    history.push("/post/" + postId)
    console.log("go to post")
  }



  function handleEditPost(postId) {
    history.push("/edit/" + postId)
    console.log("Edit")
  }

  function goToCounter() {
    history.push("/counter")
  }
  return (
    <div>
      <div className='postapp-header'>
        <h1
          css={css`
        color: lightcyan;
        fontSize: 2rem;
        `}>Post App</h1>

        <Button primary={false} onClick={handleAddPostClick}>Add Post</Button>
        {/* <button className='add-post-button'>
          Add Post
          </button> */}
      </div>

      <div className='post-list-container'>
        <div className='post-list'>
          {isError && <h1>Something Went Wrong Please try again Tmr.</h1>}
          {isLoading && <h1>Loading...</h1>}
          {
            posts.map(function (post) {
              return (
                <div id={post.id} className='post'>
                  <h3 onClick={function () { handleSeePost(post.id) }}>Title: {post.title}</h3>
                  <p>{post.content}</p>
                  <div className='post-footer'>
                    <span>Author: John</span>
                    <div className='post-footer-button'>
                      <Button primary={false} onClick={function () { handleEditPost(post.id) }}> Edit </Button>
                      <Button primary={true} onClick={function () { handleDeletePost(post.id) }}> Delete </Button>
                      {/* <button className='post-footer-edit-button'>Edit</button>
                <button className='post-footer-delete-button'>Deleted</button> */}
                    </div>
                  </div>

                </div>

              );

            })

          }
          <div className="counter-container">
            <h1>Counter</h1>
            <h1>{state.count}</h1>
            <Button onClick={() => { goToCounter() }}> Counter </Button>
          </div>
        </div>

      </div>

    </div>
  );

}
export default Homepage;