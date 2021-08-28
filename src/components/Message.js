import React from 'react'

export default function Message(props) {

    const { AuthenticatedHeader } = props

    if(!localStorage.getItem('currentUserToken')) {
        return <Redirect to="/urnotloggedin" />
    }

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
        } catch(error) {
            console.log(error)
        }

    }


    fetchMessages()
    return (
        <>

        { AuthenticatedHeader }

        {messagesArray.map((content, username) => {
        return (
            $(`<Card className="messagesCard">
            <Card.Body>
                <Card.Title>${username}</Card.Title>
                <Card.Text>
                ${content}
                </Card.Text>
                <Card onClick(() => {<Route path='/PrivMessages'})>
            </Card.Body>
            </Card>`)
        )
        })}
        </>
    )
}