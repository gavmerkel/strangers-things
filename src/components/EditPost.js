import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { Card, Form, Button, Container, Alert } from 'react-bootstrap'
import { BASE_URL } from './Api'

export default function EditPost(props) {

    const {postId, ogtitle, ogdescription, ogprice, oglocation, ogwillDeliver} = props

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [location, setLocation] = useState('')
    const [willDeliver, setWillDeliver] = useState(false)
    const [message, setMessage] = useState(null)


    if(!localStorage.getItem('currentUserToken')) {
        return <Redirect to="/urnotloggedin" />
    }
    
    async function handleSubmit(event) {
        event.preventDefault()
        console.log('Submitted')
        setMessage(null)

        try {
            const response = await fetch(`${BASE_URL}/posts/${postId}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('currentUserToken')}`
                },
                body: JSON.stringify({
                    post: {
                        title: title,
                        description: description,
                        price: price,
                        location: location,
                        willDeliver: willDeliver
                    }
                })
            })

            const result = await response.json()

            console.log(result)
            window.location.reload()
        } catch (error) {
            console.error(error)
        }


        setTitle('')
        setDescription('')
        setPrice('')
        setLocation('')
    }


    return (
        <>
        {console.log(postId)}
        <Container className='d-flex flex-column align-items-center justify-content-center' style={{ minHeight: '80vh' }}>
            <Card >
                <Card.Body className='text-center'>

                    <Form onSubmit={handleSubmit}>

                        {message ? <Alert variant='success'>{message}</Alert> : null}
                        <Card.Title>Edit Post</Card.Title>

                        <Card.Text>
                        Change the details for your post below.
                        </Card.Text>

                        <Form.Group id="title">
                            <Form.Label></Form.Label>
                            <Form.Control type="title" placeholder={ogtitle} value={title} onChange={(e) => setTitle(e.target.value)}/>
                        </Form.Group>

                        <Form.Group id="description">
                            <Form.Label></Form.Label>
                            <Form.Control type="description" placeholder={ogdescription} value={description} onChange={(e) => setDescription(e.target.value)}/>
                        </Form.Group>

                        <Form.Group id="price">
                            <Form.Label></Form.Label>
                            <Form.Control type="price" placeholder={ogprice} value={price} onChange={(e) => setPrice(e.target.value)}/>
                        </Form.Group>

                        <Form.Group id="location">
                            <Form.Label></Form.Label>
                            <Form.Control type="location" placeholder={oglocation} value={location} onChange={(e) => setLocation(e.target.value)}/>
                        </Form.Group>

                        <Form.Group id="willDeliver">
                            <Form.Check label="Are you willing/able to deliver?" onChange={() => setWillDeliver(!willDeliver)}/>
                        </Form.Group>

                        <Button type="submit" >Update Post</Button>

                    </Form>

                </Card.Body>

            </Card>
        </Container>
        </>
    )
}