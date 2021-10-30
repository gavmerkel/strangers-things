import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Redirect, Link } from 'react-router-dom'
import { BASE_URL } from './Api'
import EditPost from './EditPost'

export default function RenderPosts(post) {

    const { title, description, price, location, username, loggedInUser, willDeliver, id} = post
    const [currentlyEditing, setCurrentlyEditing] = useState(false)
    const [messageToUser, setMessageToUser] = useState("")


    async function handleDelete(postId) {
        try {
            const response = await fetch(`${BASE_URL}/posts/${postId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('currentUserToken')}`
                }
            })

            const result = await response.json()

            window.location.reload()
        } catch (error) {
            console.error(error)
        }
    }


    function allowEdit() {
        if(username === localStorage.getItem('currentUserUsername')) {
            return currentlyEditing === id ? <EditPost 
                                                postId={id} 
                                                ogtitle={title} 
                                                ogdescription={description} 
                                                ogprice={price} 
                                                oglocation={location}
                                                /> 
                                                : null
        }
    }

    async function handleSendMessage(username) {
        if(messageToUser !== "") {
            
        }
        console.log(username)
    }

    return (<Card className="mt-5">
            <Card.Body className="square border border-4 border-dark">

                <Card.Title>{title}</Card.Title>

                <Card.Text>
                {description}
                </Card.Text>

                <Card.Footer>
                    <p>Price: {price}</p>
                    <p>Seller: {username}</p>
                    <p>Location: {location} / Willing to Deliver: {willDeliver ? 'Yes' : 'No'}</p>
                </Card.Footer>
                
                {username === localStorage.getItem('currentUserUsername') 
                ? 
                <>


                <Button className="mx-3" value={id} onClick={(e) => setCurrentlyEditing(e.target.value)}>Edit Post</Button>


                <Button className="mx-3" variant="danger" value={id} onClick={(e) => handleDelete(e.target.value)}>Delete Post</Button>
                </>
                : 
                <>
                    <input disabled={!loggedInUser} type="text" placeholder="Send a message..." onChange={e => setMessageToUser(e.target.value)}/>
                    <Button disabled={!loggedInUser} variant="primary" className="mx-3" onClick={e => handleSendMessage(username)}>Send</Button>
                </>}

                {allowEdit()}
                    

            </Card.Body>
            </Card>)
}