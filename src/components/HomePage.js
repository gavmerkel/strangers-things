import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function HomePage(props) {

    const {AuthenticatedHeader, UnauthenticatedHeader, isUserLoggedIn} = props

    return (
        <>
        {isUserLoggedIn ? AuthenticatedHeader : null}
        {!isUserLoggedIn ? UnauthenticatedHeader : null}
        <div>
            This is the Home Page 
            where you can see public posts and comments but you will not be able to comment or send a message
        </div>

        </>
    )
}
