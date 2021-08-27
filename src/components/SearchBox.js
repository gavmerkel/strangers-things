import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function SearchBox(props) {

    const { handleSearchClick, loggedInUser } = props

    return (
        <Card className="w-auto mx-auto">
            <Card.Body>

                <Card.Title className="align-items-center justify-content-center">
                    
                    Search Posts <input type="text" placeholder="Type here to find a post..."/> 

                    <Button className="mx-3" onClick={handleSearchClick}>Search</Button> 

                    <Link to="/create-a-post"><Button disabled={!loggedInUser} className="mx-2">Create Post</Button></Link>
                    
                </Card.Title>

            </Card.Body>
        </Card>
    )
}
