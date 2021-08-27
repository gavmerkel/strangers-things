import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { Card, Form, Button, Container, Alert } from 'react-bootstrap'
import { BASE_URL } from './Api'

export default function CreatePost(props) {

    const { AuthenticatedHeader} = props

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
            const result = await fetch(`${BASE_URL}/posts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('currentUserToken')}`
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

            const response = await result.json()

            console.log(response)
            console.log(localStorage.getItem('currentUserToken'))
            setMessage('Post created successfully! Create another post below or click here to return to the homepage')

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
        {AuthenticatedHeader}

        <Container className='d-flex flex-column align-items-center justify-content-center' style={{ minHeight: '80vh' }}>
            <Card >
                <Card.Body className='text-center'>

                    <Form onSubmit={handleSubmit}>

                        {message ? <Alert variant='success'>{message}</Alert> : null}
                        <Card.Title>Create a new post!</Card.Title>

                        <Card.Text>
                        Type in the details for your new post below.
                        </Card.Text>

                        <Form.Group id="title">
                            <Form.Label></Form.Label>
                            <Form.Control type="title" required placeholder="Create a title for your post" value={title} onChange={(e) => setTitle(e.target.value)}/>
                        </Form.Group>

                        <Form.Group id="description">
                            <Form.Label></Form.Label>
                            <Form.Control type="description" required placeholder="Describe your post" value={description} onChange={(e) => setDescription(e.target.value)}/>
                        </Form.Group>

                        <Form.Group id="price">
                            <Form.Label></Form.Label>
                            <Form.Control type="price" required placeholder="What is the price?" value={price} onChange={(e) => setPrice(e.target.value)}/>
                        </Form.Group>

                        <Form.Group id="location">
                            <Form.Label></Form.Label>
                            <Form.Control type="location" placeholder="Where is this located?" value={location} onChange={(e) => setLocation(e.target.value)}/>
                        </Form.Group>

                        <Form.Group id="willDeliver">
                            <Form.Check label="Are you willing/able to deliver?" onChange={() => setWillDeliver(!willDeliver)}/>
                        </Form.Group>

                        <Button type="submit" >Create Post</Button>

                    </Form>

                </Card.Body>

            </Card>
        </Container>
        </>
    )
}




// <Container className='d-flex flex-column align-items-center justify-content-center' style={{ minHeight: '100vh' }}>


// <Card >
//     <Card.Body className='text-center'>
//         <Form onSubmit={handleSubmit}>
//             {error ? <Alert variant='danger'>{error}</Alert> : null}
//             {message ? <Alert variant='success'>
//                 {message}
//                 <br/>
//                 Click <Link to='/log-in'>here</Link> to log in.
//                 </Alert> : null}
//             <Card.Title>SIGN UP</Card.Title>

//             <Card.Text>
//             Type in a Username and Password to sign up below!
//             </Card.Text>

//             <Form.Group id="username">
//                 <Form.Label></Form.Label>
//                 <Form.Control type="username" placeholder="Create a username" onChange={(e) => setUsername(e.target.value)}/>
//             </Form.Group>

//             <Form.Group id="email">
//                 <Form.Label></Form.Label>
//                 <Form.Control type="email" placeholder="Enter an email" onChange={(e) => setEmail(e.target.value)}/>
//             </Form.Group>

//             <Form.Group id="password">
//                 <Form.Label></Form.Label>
//                 <Form.Control type="password" placeholder="Create a password" onChange={(e) => setPassword(e.target.value)}/>
//             </Form.Group>

//             <Form.Group id="confirm-password">
//                 <Form.Label></Form.Label>
//                 <Form.Control type="password" placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)}/>
//             </Form.Group>


//             <Button className='mt-3' variant="primary" type='submit'>Sign Up</Button>

//         </Form>

//     </Card.Body>
// </Card>

// <div>
//     Already have an account? <Link to='/log-in'>Log in</Link>
// </div>



// </Container>
