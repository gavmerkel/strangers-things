import React, { useState, useEffect } from 'react'
//import { Link } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
import { BASE_URL } from './Api'
import RenderPosts from './RenderPosts'

export default function HomePage(props) {

    const {AuthenticatedHeader, UnauthenticatedHeader, loggedInUser, setLoggedInUser} = props
    const [postList, setPostList] = useState([])
    

    function checkIfLoggedIn() {
        if(localStorage.getItem('currentUserToken')) {
            const currentToken = localStorage.getItem('currentUserToken')
            useEffect(() => {
                setLoggedInUser(currentToken)
            }, [])
        }
    }

    checkIfLoggedIn()

    async function fetchPosts() {

        try {
            const result = await fetch(`${BASE_URL}/posts`)

            const response = await result.json()

            //console.log(data.data.posts)
            
            setPostList(response.data.posts)
            

        } catch(error) {
            console.log(error)
        }

    }

    useEffect(() => {
        fetchPosts()
    }, [])
    
    
    console.log(postList)

    // function renderPost(post) {

    //     const { title, description, price, location, author: {username} } = post

    //     return (<Card className="mt-5">
    //             <Card.Body>
    //                 <Card.Title>${title}</Card.Title>
    //                 <Card.Text>
    //                 ${description}
    //                 </Card.Text>
    //                 <Card.Footer>
    //                     <p>Price: ${price}</p>
    //                     <p>Seller: ${username}</p>
    //                     <p>Location: ${location}</p>
    //                 </Card.Footer>
    //                 <input type="text" placeHolder="Send a message..."/>
    //                 <Button variant="primary" className="mx-3">Send</Button>
    //             </Card.Body>
    //             </Card>)
    // }


    return (
        <>
        {loggedInUser ? AuthenticatedHeader : null}
        {!loggedInUser ? UnauthenticatedHeader : null}
        <div>
            This is the Home Page 
            where you can see public posts and comments but you will not be able to comment or send a message
        </div>


        {postList.map((post) => {
            return <RenderPosts 
                    title={post.title}
                    description={post.description}
                    price={post.price}
                    location={post.location}
                    username={post.author.username}
                    key={post._id}/>
        })}


        

        </>
    )
}


{/* <Card className="mt-5">
        <Card.Body>
            <Card.Title>Title of Post</Card.Title>
            <Card.Text>
            description
            </Card.Text>
            <Card.Footer>
                <p>Price: $500</p>
                <p>Seller: Username</p>
                <p>Location: city/state</p>
            </Card.Footer>
            <input type="text" placeHolder="Send a message..."/>
            <Button variant="primary" className="mx-3">Send</Button>
        </Card.Body>
        </Card> */}