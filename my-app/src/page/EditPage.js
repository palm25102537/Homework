import { useEffect } from "react"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import Button from "../component/Button"
import Head from "../component/Header"
import { useParams } from "react-router-dom"


function EditPage() {
    const [title, setTittle] = useState("")
    const [description, setDes] = useState("")

    let parameter = useParams();
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
        EditPost()
    }
  
    
    useEffect(function() { 
        async function getInformation() {
        let isGetInfo = await fetch("http://localhost:8000/posts/" + parameter.postId)
        let info = await isGetInfo.json()
        console.log(`title: `, info.data.title)
        console.log(`description: `, info.data.content)
       setTittle(info.data.title)
       setDes(info.data.content)
    }
    getInformation()
},[] ) 


    async function EditPost() {
        let isAccept = await fetch("http://localhost:8000/posts/" + parameter.postId, {
            method: "PUT",
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



    return (
        <div>
            <div>
                <div className='postapp-header'  >
                    <Head primary={true}>Post App</Head>
                </div>
                <div className='post-footer-content'>
                    <form onSubmit={handleFormSubmit} className="post-form">
                        <div className='tittle-container' >
                            <label htmlFor="tittle" className="label">Tittle</label>
                            <input id="tittle" type="text" placeholder="Enter Post Tittle" onChange={handleTitleChange}value={title}></input>
                        </div>
                        <div className='post-footer'>
                            <div className='description-container'>
                                <label htmlFor="description" className="label">Description</label>
                                <textarea id="description" row="500" col="300" placeholder="Enter Description" onChange={handleDesChange}value ={description}></textarea>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className='post-footer-button-addpage'>
                            <Button type="submit" primary={false} > Edit </Button>
                            <Button primary={true} onClick={Backpage}>Back</Button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default EditPage