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

    return (
        <>

        { AuthenticatedHeader }

        <div>
            This is where we can display cards showing username/pfp and last few words of the latest text

            example:
            *pfp* John Doe
            "Hi! I am interested in....""
        </div>

        <Button className='mx-5 mt-5' onClick={() => {
            fetchMessages()
        }}>test button</Button>

        </>
    )
}
