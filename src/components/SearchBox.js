import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function SearchBox(props) {

    const { loggedInUser, postList, setSearchPostList } = props
    const [searchTerm, setSearchTerm] = useState('')

    


    function handleSearchUpdate(e) {
        

        const filteredPosts = postList.filter((post) => {

            const title = post.title.toLowerCase()
            const author = post.author.username.toLowerCase()
            const term = searchTerm.toLowerCase()

            return (
                title.includes(term) ||
                author.includes(term)
            )
        })

        console.log("the filtered posts", filteredPosts)

        setSearchPostList(filteredPosts)
        
    }


    return (
        <Card className="w-auto mx-auto">
            <Card.Body>

                <Card.Title className="align-items-center justify-content-center">
                    
                    Search Posts <input type="text" placeholder="Type here to find a post..." onChange={(e) => {
                        setSearchTerm(e.target.value)
                        handleSearchUpdate(e.target.value)
                    }}/> 


                    <Link to="/create-a-post"><Button disabled={!loggedInUser} className="mx-3">Create Post</Button></Link>
                    
                </Card.Title>

            </Card.Body>
        </Card>
    )
}
