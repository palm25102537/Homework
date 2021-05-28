/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import App from "../App";
import { useEffect } from "@emotion/react"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import Button from "../component/Button"
import Head from "../component/Header"



function AddPage() {

    const [title, setTittle] = useState("")
    const [description, setDes] = useState("")

    let history = useHistory()

    function handleTitleChange(event) {
        setTittle(event.target.value)
    }

    function handleDesChange(event) {
        setDes(event.target.value)
    }

    function handleFormSubmit(event) {
        event.preventDefault()
        console.log("submit")
        createPost()
    }

    async function createPost() {
        let isAccept = await fetch("http://localhost:8000/posts/", {
            method: "POST",
            body: JSON.stringify({ title: title, content: description }),
            headers: {
                "content-type": "application/json",
            }
        }
        )
        if (isAccept.ok) {
            history.push("/home")
        }
    };
    function Backpage() {
        history.push("/home")
    }

    console.log(`title: `, title)
    console.log(`description: `, description)

    return (
        <div>
            <div className='postapp-header'  >
                <Head primary={true}>Post App</Head>

            </div>
            <div className='post-footer-content'>
                <form onSubmit={handleFormSubmit} className="post-form">
                    <div className='tittle-container' >
                        <label htmlFor="tittle" className="label">Tittle</label>
                        <input id="tittle" type="text" placeholder="Enter Post Tittle" onChange={handleTitleChange} ></input>
                    </div>
                    <div className='post-footer'>
                        <div className='description-container'>
                            <label htmlFor="description" className="label">Description</label>
                            <textarea id="description" row="500" col="300" placeholder="Enter Description" onChange={handleDesChange}></textarea>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className='post-footer-button-addpage'>
                        <Button type="submit" primary={false} > Add </Button>
                        <Button primary={true} onClick={Backpage}>Back</Button>
                    </div>
                </form>
            </div>

        </div>

    )
}

export default AddPage;