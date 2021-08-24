import React from 'react'
//import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function HomePage(props) {

    const {AuthenticatedHeader, UnauthenticatedHeader, loggedInUser, setLoggedInUser} = props

    function checkIfLoggedIn() {
        if(!localStorage.getItem('currentUserToken')) {
            setLoggedInUser(null)
        } else if(localStorage.getItem('currentUserToken')) {
            setLoggedInUser(localStorage.getItem('currentUserToken'))
        }
    }

    checkIfLoggedIn()

    return (
        <>
        {loggedInUser ? AuthenticatedHeader : null}
        {!loggedInUser ? UnauthenticatedHeader : null}
        <div>
            This is the Home Page 
            where you can see public posts and comments but you will not be able to comment or send a message
        </div>

        <Button onClick={() => console.log(loggedInUser)}> </Button>
        </>
    )
}
