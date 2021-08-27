import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { BASE_URL } from './Api'

export default function RenderPosts(post) {

    const { title, description, price, location, username, loggedInUser, willDeliver, id} = post

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
                <Button className="mx-3">Edit Post(NotActiveYet)</Button>
                <Button className="mx-3" variant="danger" value={id}onClick={(e) => handleDelete(e.target.value)}>Delete Post</Button>
                </>
                : 
                <>
                    <input disabled={!loggedInUser} type="text" placeholder="Send a message..."/>
                    <Button disabled={!loggedInUser} variant="primary" className="mx-3">Send</Button>
                </>}
                    

            </Card.Body>
            </Card>)
}