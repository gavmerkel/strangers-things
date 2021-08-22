import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function PrivMessages(props) {

    const { AuthenticatedHeader } = props

    return (
        <>

        { AuthenticatedHeader }

        <div>
            This is where we can display cards showing username/pfp and last few words of the latest text

            example:
            *pfp* John Doe
            "Hi! I am interested in....""
        </div>

        <Button><Link to="/home">Back to homepage</Link></Button>

        </>
    )
}
