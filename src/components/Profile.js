import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function Profile(props) {

    const { AuthenticatedHeader } = props

    if(!localStorage.getItem('currentUserToken')) {
        return <Redirect to="/urnotloggedin" />
    }

    fetch('https://strangers-things.herokuapp.com/api/2105-VPI-RM-WEB-PT/users/me'), {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer currentUserToken'
        },
    }).then(response => response.json())
      .then(result => {
          console.log(result);
      })
      .catch(console.error);
    }

    return (
        <>

        { AuthenticatedHeader }

        <div>
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
