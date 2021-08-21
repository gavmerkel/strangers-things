import React, { useState }from 'react'
import { Link } from 'react-router-dom'
import { Card, Form, Button, Container, Alert } from 'react-bootstrap'
import { BASE_URL } from './Api'

export default function Signup(props) {

    const {EmptyHeader} = props
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [username, setUsername] = useState('')
    const [error, setError] = useState(null)
    const [message, setMessage] = useState(null)




    async function handleSubmit(event) {
        event.preventDefault()
        setError(null)

        if(username !== '') {
            checkEmail()
        } else {
            setError('Please enter a username!')
        }

        async function checkEmail() {
            if(email !== '') {
                checkPassword()
            } else {
                setError('Please enter your email address!')
            }
        }

        async function checkPassword() {
            if(password !== '' && password === confirmPassword) {
                registerUser()
            } else {
                setError('Please make sure the passwords you entered match!')
            }
        }

        async function registerUser() {
            try{
                const response = await fetch(`${BASE_URL}/users/register`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        user: {
                            username: username,
                            password: password
                        }
                    })
                })

                const data = await response.json()
                setMessage(data.data.message)
                console.log(data)

            } catch (error) {
                console.error(error)
            }
        }

    }

    return (
        <>
        {EmptyHeader}
        <Container className='d-flex flex-column align-items-center justify-content-center' style={{ minHeight: '100vh' }}>

    
            <Card >
                <Card.Body className='text-center'>
                    <Form onSubmit={handleSubmit}>
                        {error ? <Alert variant='danger'>{error}</Alert> : null}
                        {message ? <Alert variant='success'>{message}</Alert> : null}
                        <Card.Title>SIGN UP</Card.Title>

                        <Card.Text>
                        Type in a Username and Password to sign up below!
                        </Card.Text>

                        <Form.Group id="username">
                            <Form.Label></Form.Label>
                            <Form.Control type="username" placeholder="Create a username" onChange={(e) => setUsername(e.target.value)}/>
                        </Form.Group>

                        <Form.Group id="email">
                            <Form.Label></Form.Label>
                            <Form.Control type="email" placeholder="Enter an email" onChange={(e) => setEmail(e.target.value)}/>
                        </Form.Group>

                        <Form.Group id="password">
                            <Form.Label></Form.Label>
                            <Form.Control type="password" placeholder="Create a password" onChange={(e) => setPassword(e.target.value)}/>
                        </Form.Group>

                        <Form.Group id="confirm-password">
                            <Form.Label></Form.Label>
                            <Form.Control type="password" placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)}/>
                        </Form.Group>


                        <Button className='mt-3' variant="primary" type='submit'>Sign Up</Button>

                    </Form>

                </Card.Body>
            </Card>

            <div>
                Already have an account? <Link to='/log-in'>Log in</Link>
            </div>



        </Container>

        </>
    )
}
