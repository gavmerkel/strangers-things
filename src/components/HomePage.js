import React, { useState, useEffect } from 'react'
//import { Link } from 'react-router-dom'
import { BASE_URL } from './Api'
import RenderPosts from './RenderPosts'
import SearchBox from './SearchBox'

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
            
            console.log(response.data.posts)
            setPostList(response.data.posts)
            
        } catch(error) {
            console.log(error)
        }

    }

    useEffect(() => {
        fetchPosts()
    }, [])




    return (
        <>
        {loggedInUser ? AuthenticatedHeader : null}
        {!loggedInUser ? UnauthenticatedHeader : null}
        <SearchBox postList={postList} loggedInUser={loggedInUser} RenderPosts={RenderPosts}/>
        


        {postList.map((post) => {
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


        

        </>
    )
}
