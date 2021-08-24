import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Card, Form, Button, Container, Alert } from 'react-bootstrap'

export default function Logout(props) {

    const { AuthenticatedHeader, setLoggedInUser } = props

    function _logOut() {
        localStorage.removeItem('currentUserToken')
    }

    

    return (
        <>

        { AuthenticatedHeader }

        <Container className='d-flex flex-column align-items-center justify-content-center' style={{ minHeight: '100vh' }}>

    
            <Card >
                <Card.Body className='text-center'>
                    <Form>
                        <Card.Title>Log Out</Card.Title>


                        <Link to='/home'><Button className='mt-3 mx-3' variant='primary' onClick={() => {
                            setLoggedInUser(null)
                            _logOut()
                            }}>Confirm</Button></Link>
                        <Link to='/home'><Button className='mt-3 mx-3' variant='danger'>Cancel</Button></Link>

                    </Form>

                </Card.Body>
            </Card>



        </Container>

        </>
    )
}
