import React, {useState} from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Card, Form, Button, Container, Alert } from 'react-bootstrap'
import { BASE_URL } from './Api'

const Login = (props) => {
    const [formSubmittedSuccessfully, setFormSubmittedSuccessfully] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {loggedInUser, setLoggedInUser, EmptyHeader} = props
    const [error, setError] = useState(null)



    async function authenticate(event) {
        event.preventDefault();

        setFormSubmittedSuccessfully(false)

        setError(null)

        if(username !== '') {
            checkPassword()
        } else {
            setError('Please enter a valid username!')
        }

        async function checkPassword() {
            if(password !== '') {
                logIn()
            } else {
                setError('Please enter a valid password or click "SIGN UP" to create an account!')
            }
        }

        async function logIn() {
            try {

                const result = await fetch(`${BASE_URL}/users/login`, {
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

                const data = await result.json()

                

                
                if(data.success === false) {
                    setError(data.error.message)
                    setUsername('')
                    setPassword('')
                    return;
                } else if(data.success === true) {
                    localStorage.setItem('currentUserToken', data.data.token)
                    localStorage.setItem('currentUserUsername', username)
                    setLoggedInUser(data.data.token)
                    setFormSubmittedSuccessfully(true)
                    console.log(data)
                }
                
            } catch (error) {
                console.log(error)
            }

        }

    }


    if(formSubmittedSuccessfully) {
        return <Redirect to="/home" />
    }

    return (
        <>

        {EmptyHeader}

        <Container className='d-flex flex-column align-items-center justify-content-center' style={{ minHeight: '100vh' }}>


        <Card >
            <Card.Body className='text-center'>
                <Form onSubmit={authenticate}>
                    {error ? <Alert variant='danger'>{error}</Alert> : null}

                    <Card.Title>Log In</Card.Title>

                    <Card.Text>
                    Type in your Username and Password to log in below!
                    </Card.Text>

                    <Form.Group id="username">
                        <Form.Label></Form.Label>
                        <Form.Control type="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                    </Form.Group>

                    <Form.Group id="password">
                        <Form.Label></Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>

                    <Button className='mt-3' variant="primary" type='submit'>Log In</Button>

                </Form>

            </Card.Body>
        </Card>

        <div>
            Don't have an account? <Link to='/sign-up'>Sign Up</Link>
        </div>

        </Container>

        </>
    )
    
}

export default Login;
