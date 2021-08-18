import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function Login() {
    return (
        <>
        <div>
            This is where user will log in

        </div>

        <div>

            <div>
            <input type='text' placeholder='Enter Username' />
            </div>

            <div>
            <input type='text' placeholder='Enter Password' />
            </div>

            <div>
                <Button><Link to="/home">Log in</Link></Button>
                <Button><Link to='/home'>Cancel</Link></Button>
            </div>
            
        </div>

        </>
    )
}
