import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { BASE_URL } from './Api'

export default function PrivMessages(props) {

    let messagesArray
    const { AuthenticatedHeader, loggedInUser } = props

    if(!localStorage.getItem('currentUserToken')) {
        return <Redirect to="/urnotloggedin" />
    }

    if(localStorage.getItem('currentUserToken')) {}

    async function fetchMessages() {

        try {
            const result = await fetch(`${BASE_URL}/users/me`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('currentUserToken')}`
                }
            })

            const data = await result.json()
            console.log(data)
            messagesArray = data.data.messages
            console.log(messagesArray)
        } catch(error) {
            console.log(error)
        }

    }

    if (userisLoggedIn) {

    return (
        <>

        { AuthenticatedHeader }

        <div>
            

            <p>This is where we will render the messages between the current user and whoever the other user is.</p>

            <p>Only accessible if userIsLoggedIn is set to true</p>
            
        </div>

        <Button className='mx-5 mt-5' onClick={() => {
            fetchMessages()
        }}>test button</Button>

        </>
    )
    }
}
