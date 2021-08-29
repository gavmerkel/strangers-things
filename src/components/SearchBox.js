import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function SearchBox(props) {

    const { loggedInUser, postList } = props
    const [posts, setPosts] = useState([...postList])
    const [searchTerm, setSearchTerm] = useState('')

    function postMatches(post, text) {
        if(post.includes(text)) {
            return true
        }
    }

    const filteredPosts = posts.filter(post => postMatches(post, searchTerm))
    const postsToDisplay = searchTerm.length ? filteredPosts : posts


    function handleSearchClick() {
        console.log('search clicked')
        console.log(searchTerm)

        {filteredPosts.map((post) => {
            return <RenderPosts 
                    title={post.title}
                    description={post.description}
                    price={post.price}
                    location={post.location}
                    username={post.author.username}
                    willDeliver={post.willDeliver}
                    id={post._id}
                    key={post._id}
                    loggedInUser={loggedInUser}
                    />
        })}
    }

    return (
        <Card className="w-auto mx-auto">
            <Card.Body>

                <Card.Title className="align-items-center justify-content-center">
                    
                    Search Posts <input type="text" placeholder="Type here to find a post..." onChange={(e) => setSearchTerm(e.target.value)}/> 

                    <Button className="mx-3" onClick={handleSearchClick}>Search(not active yet)</Button> 

                    <Link to="/create-a-post"><Button disabled={!loggedInUser} className="mx-2">Create Post</Button></Link>
                    
                </Card.Title>

            </Card.Body>
        </Card>
    )
}
