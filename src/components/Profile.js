import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function Profile(props) {

    const { AuthenticatedHeader } = props

    if(!localStorage.getItem('currentUserToken')) {
        return <Redirect to="/urnotloggedin" />
    }

    

    return (
        <>

        { AuthenticatedHeader }

        <div>
            This is where you can customize your profile.

            change profile picture?
            change available public information like location/etc
            <div>
                <input type='text' placeholder='Change Username' />
            </div>

            
        </div>

        

        <div>
            <input type='text' placeholder='Change Password' />
        </div>

        <div>
            <input type='text' placeholder='Confirm Password' />
        </div>

        <div>
            <Link to='/home'><Button>Cancel</Button></Link>
            <Link to='/home'><Button>Done</Button></Link>
        </div>

        Done will save changes and Cancel will return back to homepage without changing anything

        </>
    )
}
