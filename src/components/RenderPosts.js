import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function RenderPosts(post) {

    const { title, description, price, location, username, loggedInUser} = post

    return (<Card className="mt-5">
            <Card.Body className="square border border-4 border-dark">
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {description}
                </Card.Text>
                <Card.Footer>
                    <p>Price: {price}</p>
                    <p>Seller: {username}</p>
                    <p>Location: {location}</p>
                </Card.Footer>
                <input disabled={!loggedInUser} type="text" placeholder="Send a message..."/>
                <Button disabled={!loggedInUser} variant="primary" className="mx-3">Send</Button>
            </Card.Body>
            </Card>)
}