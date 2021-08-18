import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    return (
        <>
        <div>
            This is where user can sign up
        </div>

        <div>
            <input type='text' placeholder='Enter Username' />
        </div>

        <div>
            <input type='text' placeholder='Enter Password' />
        </div>

        <div>
            <input type='text' placeholder='Confirm Password' />
        </div>

        <div>
            Already have an account? <Link to='/log-in'>Log in</Link>
        </div>

        </>
    )
}
