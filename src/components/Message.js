import React from 'react'

export default function Message(props) {

    const { AuthenticatedHeader } = props

    if(!localStorage.getItem('currentUserToken')) {
        return <Redirect to="/urnotloggedin" />
    }

    return (
        <>

        { AuthenticatedHeader }

        <div>
            <p>This is where we will render the messages between the current user and whoever the other user is.</p>

            <p>Only accessible if userIsLoggedIn is set to true</p>
            
        </div>
    )     

        </>
    )
}