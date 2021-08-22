import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function Logout(props) {

    const { AuthenticatedHeader } = props

    return (
        <>

        { AuthenticatedHeader }

        <div>
            This is where user will log out

            cancel?
            confirm?
        </div>

        <div>
            <Button><Link to='/home'>Log Out</Link></Button>
            <Button><Link to='/home'>Cancel</Link></Button>
        </div>

        Both links will go back to the home page, except one button will set userIsLoggedIn to false
        and the other will just return as if nothing happened

        </>
    )
}
