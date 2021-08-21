import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

//this needs to be updated, pulled from Jay's demo code
const App = () => {
    const [authenticated, setAuthenticated] = useState(false);
    // User

    return (
        <Router>
            <div>
                <nav>
                    <img className="logo" src="https://placekitten.com/50/50" />
                    <ul>
                        <li><Link to="/">Home</Link></li>    
                        <li><Link to="/listings">Listings</Link></li>    
                        <li><Link to="/login">Login</Link></li>    
                    </ul>
                </nav>

                <Switch>
                    <Route path="/listings">
                        <Listings />
                    </Route>
                    <Route path="/Login">
                        <Login 
                            authenticated={authenticated}
                            setAuthenticated={setAuthenticated} />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="*">
                        <h1>404 Error - Page Not Found!</h1>    
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
)