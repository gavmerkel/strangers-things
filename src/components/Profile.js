import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function Profile() {
    return (
        <>
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
            <Button><Link to='/home'>Cancel</Link></Button>
            <Button><Link to='/home'>Done</Link></Button>
        </div>

        Done will save changes and Cancel will return back to homepage without changing anything

        </>
    )
}
