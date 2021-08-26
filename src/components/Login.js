import React, {useState} from 'react'
import { Link, Redirect } from 'react-router-dom'
import { BASE_URL } from './Api'
import { Alert } from 'react-bootstrap'

const Login = (props) => {
    const [formSubmittedSuccessfully, setFormSubmittedSuccessfully] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {loggedInUser, setLoggedInUser, EmptyHeader} = props
    const [error, setError] = useState(null)


    async function authenticate(event) {
        event.preventDefault();

        setFormSubmittedSuccessfully(false)

        // if (username !== '' && password !== '') {
        //     fetch(`${BASE_URL}/users/login`, {
        //         method: "POST", 
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({
        //             user: {
        //                 username: username,
        //                 password: password
        //             }
        //         })
        //     }).then(response => response.json())
        //     .then(result => {
        //         console.log(result);
        //     })
        //     .catch(console.error);
        // }

        // setIsUserLoggedIn(true)

        // setFormSubmittedSuccessfully(true);

        setError(null)

        if(username !== '') {
            checkPassword()
        } else {
            setError('Please enter a valid username!')
        }

        async function checkPassword() {
            if(password !== '') {
                logIn()
            } else {
                setError('Please enter a valid password or click "SIGN UP" to create an account!')
            }
        }

        async function logIn() {
            try {

                const result = await fetch(`${BASE_URL}/users/login`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        user: {
                            username: username,
                            password: password
                        }
                    })
                })

                const data = await result.json()

                

                
                if(data.success === false) {
                    setError(data.error.message)
                    setUsername('')
                    setPassword('')
                    return;
                } else if(data.success === true) {
                    localStorage.setItem('currentUserToken', data.data.token)
                    setLoggedInUser(data.data.token)
                    setFormSubmittedSuccessfully(true)
                    console.log(data)
                }
                
            } catch (error) {
                console.log(error)
            }

        }

    }


    if(formSubmittedSuccessfully) {
        return <Redirect to="/home" />
    }

    return (
        <>
        {EmptyHeader}

        {error ? <Alert variant='danger'>{error}</Alert> : null}

        <section className="login">
        <form onSubmit={authenticate}>
            <label>
                Username:
            <input type="text" username="username" onChange={(event) => setUsername(event.target.value)} value={username}/>
            </label>
            <label>
                Password:
            <input type="password" password="password" onChange={(event) => setPassword(event.target.value)} value={password}/>
            </label>
            
            <button type="submit">LOGIN</button>

            <Link className="lnkBtn" to="/sign-up">SIGN UP</Link>
        </form>
        </section>
        </>
    )
    
}

export default Login;
