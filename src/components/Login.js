import React, {useState} from 'react'
import { Link, Redirect } from 'react-router-dom'

const Login = ({setAuthenticated}) => {
    const [formSubmittedSuccessfully, setFormSubmittedSuccessfully] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function authenticate(event) {
        event.preventDefault();
        if (username && password) {
            fetch('https://strangers-things.herokuapp.com/api/2105-VPI-RM-WEB-PT/users/login', {
                method: "POST", 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: {
                        username: '{username}',
                        password: '{password}'
                    }
                })
            }).then(response => response.json())
            .then(result => {
                console.log(result);
            })
            .catch(console.error);
        }
        setFormSubmittedSuccessfully(true);
    }

    if(formSubmittedSuccessfully) {
        return <Redirect to="/Signup" />
    }

    return (
        <section className="login">
        <form onSubmit={authenticate}>
            <label>
                Username:
            <input type="text" username="username" onChange= {(event) => setUsername(event.target.value)} value={username}/>
            </label>
            <label>
                Password:
            <input type="text" password="password" onChange= {(event) => setPassword(event.target.value)} value={password}/>
            </label>
            <button type="submit">LOGIN</button>
            <Link className="lnkBtn" to="/Signup">SIGN UP</Link>
        </form>
        </section>
    )
    
}

export default Login;
